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
import { APP_CONST, SUPPORTED_LOCALES } from '@app/constants';

@Injectable()
export class CronsService extends NestSchedule {
  constructor(
    private readonly routeUtils: RouteUtils,
    private readonly gamesService: GamesService,
    private readonly tournamentsService: TournamentsService,
  ) {
    super();
  }
  /* cron sitemap genration */
  @Cron(APP_CONST.SITE_MAP_CRON_TIME)
  async createScheduledSiteMap() {
    if (environments.genrateSiteMap === false) {
      return true;
    }
    console.log('createScheduledSiteMap::starts');
    const indexSiteMapArray = [];
    // creating games urls sitemap
    try {
      const gamesPageUrls = await this.generateGamePageUrls();
      this.createSiteMapXml(
        indexSiteMapArray,
        gamesPageUrls,
        APP_CONST.GAME_SITE_MAP_SLUG,
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
    this.createIndexSiteMapXml(
      indexSiteMapArray,
      APP_CONST.INDEX_SITE_MAP_SLUG,
    );
    indexSiteMapArray.push(`${APP_CONST.INDEX_SITE_MAP_SLUG}.xml`);
    indexSiteMapArray.push(APP_CONST.STATIC_PAGE_SITE_MAP_SLUG);
    this.copyXmlToSitemap(indexSiteMapArray);
    this.removeGarbageXml(indexSiteMapArray);
    console.log('createScheduledSiteMap::ends');
  }

  /* On Build sitemap genration */
  @Timeout(APP_CONST.SITE_MAP_BUILD_TIME_TIMEOUT)
  async createOnBuildSiteMap() {
    if (environments.genrateSiteMap === false) {
      return true;
    }
    console.log('createOnBuildSiteMap::starts');
    const indexSiteMapArray = [];
    // creating static urls sitemap
    try {
      const staticUrls = this.generateStaticRouteUrls();
      this.createSiteMapXml(
        indexSiteMapArray,
        staticUrls,
        APP_CONST.STATIC_PAGE_SITE_MAP_SLUG,
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
        APP_CONST.GAME_SITE_MAP_SLUG,
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
    this.createIndexSiteMapXml(
      indexSiteMapArray,
      APP_CONST.INDEX_SITE_MAP_SLUG,
    );
    indexSiteMapArray.push(`${APP_CONST.INDEX_SITE_MAP_SLUG}.xml`);
    this.copyXmlToSitemap(indexSiteMapArray);
    this.removeGarbageXml(indexSiteMapArray);
    console.log('createOnBuildSiteMap::ends');
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
    const supportedLocalesArray = Object.keys(SUPPORTED_LOCALES);
    supportedLocalesArray.forEach(locale => {
      const urlsArray = [];
      slugArray.forEach(tournamentsUrl => {
        urlsArray.push({
          url:
            environments.appURL +
            '/' +
            locale +
            '/tournaments/' +
            tournamentsUrl.slug,
          lastmod: moment.unix(tournamentsUrl.modified_at).format('MM-DD-YYYY'),
        });
      });
      const subSlug = index === 0 ? '' : index;
      const xmlFileName =
        APP_CONST.TOURNAMNETS_SITE_MAP_SLUG + subSlug + '.xml';
      console.log(limit, slugArray.length, isLastBatch, subSlug, xmlFileName);
      indexSiteMapArray.push(xmlFileName);
      const xmlString = this.getSiteMapXml(urlsArray);
      if (!fs.existsSync(APP_CONST.TEMP_SITE_MAP_DIR)) {
        fs.mkdirSync(APP_CONST.TEMP_SITE_MAP_DIR, { recursive: true });
      }
      fs.writeFileSync(
        `${APP_CONST.TEMP_SITE_MAP_DIR}${xmlFileName}`,
        xmlString,
        `utf-8`,
      );
      index++;
    });
    if (isLastBatch || !slugArray.length) {
      return;
    } else {
      await this.createTournamentsSiteMap(
        indexSiteMapArray,
        limit,
        nextCursor,
        index,
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
    const xmlFileName =
      APP_CONST.USERS_PROFILE_SITE_MAP_SLUG + subSlug + '.xml';
    console.log(limit, slugArray.length, isLastBatch, subSlug, xmlFileName);
    indexSiteMapArray.push(xmlFileName);
    const xmlString = this.getSiteMapXml(urlsArray);
    if (!fs.existsSync(APP_CONST.TEMP_SITE_MAP_DIR)) {
      fs.mkdirSync(APP_CONST.TEMP_SITE_MAP_DIR, { recursive: true });
    }
    fs.writeFileSync(
      `${APP_CONST.TEMP_SITE_MAP_DIR}${xmlFileName}`,
      xmlString,
      `utf-8`,
    );
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
    for (let i = 0; i < urlsArray.length; i += APP_CONST.SITE_MAP_MAX_URLS) {
      const xmlFileName = `${slug +
        (urlsArray.length > APP_CONST.SITE_MAP_MAX_URLS
          ? Math.ceil((i + 1) / APP_CONST.SITE_MAP_MAX_URLS)
          : '')}.xml`;
      indexSiteMapArray.push(xmlFileName);
      const xmlString = this.getSiteMapXml(
        urlsArray.slice(i, APP_CONST.SITE_MAP_MAX_URLS + i),
      );
      if (!fs.existsSync(APP_CONST.TEMP_SITE_MAP_DIR)) {
        fs.mkdirSync(APP_CONST.TEMP_SITE_MAP_DIR, { recursive: true });
      }
      fs.writeFileSync(
        `${APP_CONST.TEMP_SITE_MAP_DIR}${xmlFileName}`,
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
    if (!fs.existsSync(APP_CONST.TEMP_SITE_MAP_DIR)) {
      fs.mkdirSync(APP_CONST.TEMP_SITE_MAP_DIR, { recursive: true });
    }
    fs.writeFileSync(
      `${APP_CONST.TEMP_SITE_MAP_DIR}${slug}.xml`,
      xmlString,
      `utf-8`,
    );
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
    fs.readdirSync(APP_CONST.SITE_MAP_DIR).forEach(file => {
      if (file && !filesToKeepArray.includes(file)) {
        fs.unlinkSync(APP_CONST.SITE_MAP_DIR + file);
      }
    });
  }

  private copyXmlToSitemap(filesToBeCopyArray: string[]) {
    if (!fs.existsSync(APP_CONST.TEMP_SITE_MAP_DIR)) {
      fs.mkdirSync(APP_CONST.TEMP_SITE_MAP_DIR, { recursive: true });
    }
    if (!fs.existsSync(APP_CONST.SITE_MAP_DIR)) {
      fs.mkdirSync(APP_CONST.SITE_MAP_DIR, { recursive: true });
    }
    fs.readdirSync(APP_CONST.TEMP_SITE_MAP_DIR).forEach(file => {
      if (file && filesToBeCopyArray.includes(file)) {
        fs.createReadStream(`${APP_CONST.TEMP_SITE_MAP_DIR}${file}`).pipe(
          fs.createWriteStream(`${APP_CONST.SITE_MAP_DIR}${file}`),
        );
      }
    });
  }
}
