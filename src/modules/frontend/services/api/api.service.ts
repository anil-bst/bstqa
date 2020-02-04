import {
  Injectable,
  HttpService,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ITournament } from '@app/abstractions/types/tournament.interface';
import { IGame } from '@app/abstractions/types/game.interface';
import { IAPIGameResponseMetaData } from '@app/abstractions/types/api-response-metadata.interface';
import { apiConfig } from '@config/api.config';
import { Utils } from '@app/frontend/scripts/common/utils';

import { TournamentsService } from '@tournaments/tournaments.service';
import { GamesService } from '@games/games.service';

@Injectable()
export class ApiService {
  BASE_URL = apiConfig.apiBaseUrl;
  JSON_URL = 'https://cdn.game.tv/api-json';
  constructor(
    private readonly http: HttpService,
    private readonly tournamentService: TournamentsService,
    private readonly gamesService: GamesService,
  ) {}
  async getGames(locale = 'en'): Promise<IGame[]> {
    try {
      const { data } = await this.gamesService.getTopGame('', '10', locale);
      return data;
    } catch (e) {
      const { data } = await this.http
        .get(`${this.JSON_URL}/top-games.json`)
        .toPromise();
      data.data.source = 'cdn';
      return data.data;
    }
  }

  /**
   *
   * @param slug
   */
  async getGameDetails(slug: string, locale = 'en'): Promise<IGame> {
    try {
      const resp = await this.gamesService.getGameBySlug(slug, locale);
      resp.slug = slug;
      return resp;
    } catch (e) {
      const { data } = await this.http
        .get(`${this.JSON_URL}/games/${slug}-${locale}.json`)
        .toPromise();
      if (data && data.data && data.data.name) {
        data.data.communityCount = data.data.communityCount || 200; // in case of undefined
      }
      data.data.slug = slug;
      data.data.source = 'cdn';
      return data.data;
    }
  }

  /**
   *
   */

  async getMetaData(): Promise<any> {
    try {
      const resp = this.tournamentService.getTournamentsMetaData();
      let { geo, lang } = resp as any;

      geo =
        geo &&
        geo.sort((geo1: string, geo2: string) => {
          if (geo1 === 'others') {
            return 1;
          }
          return -1;
        });

      lang =
        lang &&
        lang.sort((lang1: string, lang2: string) => {
          if (lang1 === 'others') {
            return 1;
          }
          return -1;
        });

      resp['geo'] = geo;
      resp['lang'] = lang;
      return resp;
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  /**
   *
   * @param limit
   * @param options
   */
  async getTournaments(
    status?: string,
    limit = 12,
    locale = 'en',
    cursor = '',
    gameId = '',
  ): Promise<ITournament[]> {
    try {
      const resp = await this.tournamentService.getTournaments({
        cursor,
        limit,
        status,
        locale,
        geo: 'all',
        lang: 'all',
        game_id: gameId,
        is_count_required: true,
      });

      if (resp && resp.data) {
        resp.data.forEach(item => {
          item.registrationStartDate = new Date(
            parseInt(item.registrationStartDate, 10)*1000,
          );
          item.tournamentStartDate = new Date(
            parseInt(item.tournamentStartDate, 10)*1000,
          );
        });
      }
      return resp;
    } catch (e) {
      throw new NotFoundException();
      /* const { data } = await this.http
        .get(`${this.JSON_URL}/all-tournaments.json`)
        .toPromise();
      const { availableFilters } = data.metaData;
      let { geo, lang } = availableFilters;
      geo = geo.sort((geo1: string, geo2: string) => {
        if (geo1 === 'others') {
          return 1;
        }
        return -1;
      });

      lang = lang.sort((lang1: string, lang2: string) => {
        if (lang1 === 'others') {
          return 1;
        }
        return -1;
      });
      data.metaData.availableFilters.geo = geo;
      data.metaData.availableFilters.lang = lang;
      return data; */
    }
  }

  /*
   *
   */
  async getAllGames(
    limit: number,
    locale = 'en',
  ): Promise<IAPIGameResponseMetaData> {
    try {
      const resp = await this.gamesService.getGameByName('', '', '50', locale);
      return resp;
    } catch (err) {
      const { data } = await this.http
        .get(`${this.JSON_URL}/games.json`, {
          params: {
            limit,
            locale,
          },
        })
        .toPromise();
      data.source = 'cdn';
      return data;
    }
  }

  async getAllGameSlugs(): Promise<string[]> {
    try {
      const resp = await this.gamesService.getGamesSlugs();
      return resp['data'];
    } catch (e) {
      const { data } = await this.http
        .get(`${this.JSON_URL}/games-slugs.json`)
        .toPromise();
      data.data.source = 'server';
      return data.data;
      // throw new InternalServerErrorException(e);
    }
  }
}
