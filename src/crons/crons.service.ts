/* tslint:disable */
import { Injectable } from '@nestjs/common';
import { RouteUtils } from '@app/utils';

import { STATIC_ROUTES, GAME_ROUTES } from '@app/modules/frontend/routes';
import { Timeout, NestSchedule, Cron } from 'nest-schedule';
import { createSitemap, ErrorLevel, buildSitemapIndex } from 'sitemap';
import * as fs from 'fs';
import { GamesService } from '@games/games.service';
import { TournamentsService } from '@tournaments/tournaments.service';
import moment from 'moment';
import { environments } from '@app/environments';
import { APP_CONST } from '@app/constants';

const STATIC_PAGE_SITE_MAP_SLUG = APP_CONST.STATIC_PAGE_SITE_MAP_SLUG;
const GAME_SITE_MAP_SLUG = APP_CONST.GAME_SITE_MAP_SLUG;
const TOURNAMNETS_SITE_MAP_SLUG = APP_CONST.TOURNAMNETS_SITE_MAP_SLUG;
const USERS_PROFILE_SITE_MAP_SLUG = APP_CONST.USERS_PROFILE_SITE_MAP_SLUG;
const INDEX_SITE_MAP_SLUG = APP_CONST.INDEX_SITE_MAP_SLUG;
const TEMP_SITE_MAP_DIR = APP_CONST.TEMP_SITE_MAP_DIR;
const SITE_MAP_DIR = APP_CONST.SITE_MAP_DIR;

@Injectable()
export class CronsService extends NestSchedule {
  private readonly SITE_MAP_MAX_URLS = 1000;
  constructor(
    private readonly routeUtils: RouteUtils,
    private readonly gamesService: GamesService,
    private readonly tournamentsService: TournamentsService,
  ) {
    super();
  }
  /* cron sitemap genration */
  @Cron(APP_CONST.SITE_MAP_CRON_TIME)
  async createSiteMapCron() {
    if (environments.genrateSiteMap === false) {
      return true;
    }
    const indexSiteMapArray = [];
    // creating games urls sitemap
    try {
      const gamesPageUrls = await this.generateGamePageUrls();
      this.createSiteMapXml(
        indexSiteMapArray,
        gamesPageUrls,
        GAME_SITE_MAP_SLUG,
      );
    } catch (err) {
      console.log('createSiteMapCron in createSiteMapCron failed::', err);
    }

    // creating tournaments urls sitemap
    try {
      await this.createTournamentsSiteMap(indexSiteMapArray, 1000, '', 0);
    } catch (err) {
      console.log(
        'createTournamentsSiteMap in createSiteMapCron failed::',
        err,
      );
    }

    // creating users profile urls sitemap
    try {
      await this.createUsersProfileSiteMap(indexSiteMapArray, 1000, '', 0);
    } catch (err) {
      console.log(
        'createUsersProfileSiteMap in createSiteMapCron failed::',
        err,
      );
    }

    // creating index sitemap
    this.createIndexSiteMapXml(indexSiteMapArray, INDEX_SITE_MAP_SLUG);
    indexSiteMapArray.push(`${INDEX_SITE_MAP_SLUG}.xml`);
    this.copyXmlToSitemap(indexSiteMapArray);
    this.removeGarbageXml(indexSiteMapArray);
    // console.log('cron end');
  }

  /* On Build sitemap genration */
  @Timeout(APP_CONST.SITE_MAP_BUILD_TIME_TIMEOUT)
  async createSiteMapOnBuild() {
    if (environments.genrateSiteMap === false) {
      return true;
    }

    const indexSiteMapArray = [];
    // creating static urls sitemap
    try {
      const staticUrls = this.generateStaticRouteUrls();
      this.createSiteMapXml(
        indexSiteMapArray,
        staticUrls,
        STATIC_PAGE_SITE_MAP_SLUG,
      );
    } catch (err) {
      console.log(
        'generateStaticRouteUrls in createSiteMapOnBuild failed::',
        err,
      );
    }

    // creating games urls sitemap
    try {
      const gamesPageUrls = await this.generateGamePageUrls();
      this.createSiteMapXml(
        indexSiteMapArray,
        gamesPageUrls,
        GAME_SITE_MAP_SLUG,
      );
    } catch (err) {
      console.log('generateGamePageUrls in createSiteMapOnBuild failed::', err);
    }

    // creating tournaments urls sitemap
    try {
      await this.createTournamentsSiteMap(indexSiteMapArray, 1000, '', 0);
    } catch (err) {
      console.log(
        'createTournamentsSiteMap in createSiteMapOnBuild failed::',
        err,
      );
    }

    // creating users profile urls sitemap
    try {
      await this.createUsersProfileSiteMap(indexSiteMapArray, 1000, '', 0);
    } catch (err) {
      console.log(
        'createUsersProfileSiteMap in createSiteMapOnBuild failed::',
        err,
      );
    }

    // creating index sitemap
    this.createIndexSiteMapXml(indexSiteMapArray, INDEX_SITE_MAP_SLUG);
    indexSiteMapArray.push(`${INDEX_SITE_MAP_SLUG}.xml`);
    this.copyXmlToSitemap(indexSiteMapArray);
    this.removeGarbageXml(indexSiteMapArray);
    // console.log('on build sitemap end');
  }

  private async createTournamentsSiteMap(
    indexSiteMapArray: any,
    limit: number,
    cursor: string,
    index: number,
  ) {
    const tournamentsSlugs = await this.tournamentsService.getTournamentsSlugs(
      cursor,
      limit,
    );
    const isLastBatch = tournamentsSlugs.data
      ? tournamentsSlugs.data.is_last_batch || false
      : false;
    const nextCursor = tournamentsSlugs.data
      ? tournamentsSlugs.data.cursor || ''
      : '';
    const slugArray = tournamentsSlugs.data
      ? tournamentsSlugs.data.slug_data || []
      : [];
    const urlsArray = slugArray.map(ele => {
      return {
        url: environments.appURL + '/tournaments/' + ele.slug,
        lastmod: moment.unix(ele.modified_at).format('MM-DD-YYYY'),
      };
    });
    const subSlug = index === 0 ? '' : +index;
    const xmlFileName = TOURNAMNETS_SITE_MAP_SLUG + subSlug + '.xml';
    console.log(limit, slugArray.length, isLastBatch, subSlug, xmlFileName);
    indexSiteMapArray.push(xmlFileName);
    const xmlString = this.getSiteMapXml(urlsArray);
    if (!fs.existsSync(TEMP_SITE_MAP_DIR)) {
      fs.mkdirSync(TEMP_SITE_MAP_DIR, { recursive: true });
    }
    fs.writeFileSync(`${TEMP_SITE_MAP_DIR}${xmlFileName}`, xmlString, `utf-8`);
    if (isLastBatch || !slugArray.length) {
      return;
    } else {
      await this.createTournamentsSiteMap(
        indexSiteMapArray,
        limit,
        nextCursor,
        ++index,
      );
    }
  }

  private async createUsersProfileSiteMap(
    indexSiteMapArray: any,
    limit: number,
    cursor: string,
    index: number,
  ) {
    const usersProfileSlugs = await this.tournamentsService.getUsersProfileSlugs(
      cursor,
      limit,
    );
    const isLastBatch = usersProfileSlugs.data
      ? usersProfileSlugs.data.is_last_batch || false
      : false;
    const nextCursor = usersProfileSlugs.data
      ? usersProfileSlugs.data.cursor || ''
      : '';
    const slugArray = usersProfileSlugs.data
      ? usersProfileSlugs.data.slug_data || []
      : [];
    const urlsArray = slugArray.map(ele => {
      return {
        url: environments.appURL + '/user/view' + ele.slug,
        lastmod: moment.unix(ele.modified_at).format('MM-DD-YYYY'),
      };
    });
    const subSlug = index === 0 ? '' : +index;
    const xmlFileName = USERS_PROFILE_SITE_MAP_SLUG + subSlug + '.xml';
    console.log(limit, slugArray.length, isLastBatch, subSlug, xmlFileName);
    indexSiteMapArray.push(xmlFileName);
    const xmlString = this.getSiteMapXml(urlsArray);
    if (!fs.existsSync(TEMP_SITE_MAP_DIR)) {
      fs.mkdirSync(TEMP_SITE_MAP_DIR, { recursive: true });
    }
    fs.writeFileSync(`${TEMP_SITE_MAP_DIR}${xmlFileName}`, xmlString, `utf-8`);
    if (isLastBatch || !slugArray.length) {
      return;
    } else {
      await this.createUsersProfileSiteMap(
        indexSiteMapArray,
        limit,
        nextCursor,
        ++index,
      );
    }
  }

  private generateStaticRouteUrls() {
    return this.routeUtils.getAllLocaleRouteUrls(STATIC_ROUTES).map(url => {
      return { url: `${environments.appURL}${url}`, changefreq: 'daily' };
    });
  }

  private async generateGamePageUrls() {
    const gamesData = await this.gamesService.getGamesSlugs();
    const games = gamesData && gamesData.data ? gamesData.data : [];
    const localeUrls = this.routeUtils
      .getAllLocaleRouteUrls(GAME_ROUTES)
      .map(url => `${environments.appURL}${url}`);
    const gameUrls = [];
    for (const url of localeUrls) {
      for (const game of games) {
        if (url) {
          gameUrls.push({
            url: url.replace(':game', game),
            changefreq: 'daily',
          });
        }
      }
    }
    return gameUrls;
  }

  private createSiteMapXml(
    indexSiteMapArray: string[],
    urlsArray: any[],
    slug: string,
  ) {
    for (let i = 0; i < urlsArray.length; i += this.SITE_MAP_MAX_URLS) {
      const xmlFileName = `${slug +
        (urlsArray.length > this.SITE_MAP_MAX_URLS
          ? Math.ceil((i + 1) / this.SITE_MAP_MAX_URLS)
          : '')}.xml`;
      indexSiteMapArray.push(xmlFileName);
      const xmlString = this.getSiteMapXml(
        urlsArray.slice(i, this.SITE_MAP_MAX_URLS + i),
      );
      if (!fs.existsSync(TEMP_SITE_MAP_DIR)) {
        fs.mkdirSync(TEMP_SITE_MAP_DIR, { recursive: true });
      }
      fs.writeFileSync(
        `${TEMP_SITE_MAP_DIR}${xmlFileName}`,
        xmlString,
        `utf-8`,
      );
    }
  }

  private createIndexSiteMapXml(indexSiteMapArray: string[], slug: string) {
    indexSiteMapArray = indexSiteMapArray.map(ele => {
      return `${environments.appURL}/${ele}`;
    });
    const xmlString = buildSitemapIndex({
      urls: indexSiteMapArray,
    });
    if (!fs.existsSync(TEMP_SITE_MAP_DIR)) {
      fs.mkdirSync(TEMP_SITE_MAP_DIR, { recursive: true });
    }
    fs.writeFileSync(`${TEMP_SITE_MAP_DIR}${slug}.xml`, xmlString, `utf-8`);
  }

  private getSiteMapXml(urlsArray: string[]) {
    const sitemap = createSitemap({
      hostname: environments.appURL,
      level: ErrorLevel.THROW,
      urls: urlsArray,
    });
    return sitemap.toXML(true);
  }

  private removeGarbageXml(filesToKeepArray: string[]) {
    fs.readdirSync(SITE_MAP_DIR).forEach(file => {
      if (file && !filesToKeepArray.includes(file)) {
        fs.unlinkSync(SITE_MAP_DIR + file);
      }
    });
  }

  private copyXmlToSitemap(filesToBeCopyArray: string[]) {
    if (!fs.existsSync(TEMP_SITE_MAP_DIR)) {
      fs.mkdirSync(TEMP_SITE_MAP_DIR, { recursive: true });
    }
    if (!fs.existsSync(SITE_MAP_DIR)) {
      fs.mkdirSync(SITE_MAP_DIR, { recursive: true });
    }
    fs.readdirSync(TEMP_SITE_MAP_DIR).forEach(file => {
      if (file && filesToBeCopyArray.includes(file)) {
        fs.createReadStream(`${TEMP_SITE_MAP_DIR}${file}`).pipe(
          fs.createWriteStream(`${SITE_MAP_DIR}${file}`),
        );
      }
    });
  }
}
