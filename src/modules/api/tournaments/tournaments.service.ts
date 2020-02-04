import { Injectable, HttpService } from '@nestjs/common';
import { CacheService } from '../../cache/cache.service';
import { GamesService } from '../games/games.service';
import { TournamentsList } from '@app/abstractions/classes/tournaments-list';
import { Tournament } from '@app/abstractions/classes/tournament';
import { environments } from '@app/environments';

@Injectable()
export class TournamentsService {
  constructor(
    private readonly cacheService: CacheService,
    private readonly httpService: HttpService,
    private readonly gameService: GamesService,
  ) {}
  private readonly DEFAULT_LOCALE = 'en';

  async flushCache(): Promise<any> {
    return await this.cacheService.flushAll();
  }

  async getTournamentById(tournamentId: string, locale = 'en'): Promise<any> {
    const finalResponse = {
      success: false,
      msg: 'tournamet details data',
      data: {},
    };
    if (tournamentId) {
      const { data } = await this.httpService
        .get(
          environments.tournamentsApiHost +
            '/tournament/api/tournament_details_v2?tournament_id=' +
            tournamentId,
        )
        .toPromise();
      const tournamentData = data.data;
      if (tournamentData && data.success) {
        const gameData = await this.gameService.getGameByGameId(
          tournamentData.game_id,
        );
        finalResponse.data = new Tournament(tournamentData, locale, gameData);
        finalResponse.success = true;
      }
    } else {
      finalResponse.msg = 'no tournament found';
    }
    return finalResponse;
  }

  async getTournamentsMetaData(): Promise<any> {
    const { data } = await this.httpService
      .get(
        environments.tournamentsApiHost +
          '/tournament/api/get_metadata_website',
      )
      .toPromise();
    const metaData = data.data;
    if (metaData) {
      return {
        geo: metaData.geos ? Object.keys(metaData.geos) : [],
        lang: metaData.locales ? metaData.locales : [],
        status: ['live', 'upcoming', 'past'],
      };
    } else {
      return {
        geo: [],
        lang: [],
        status: ['live', 'upcoming', 'past'],
      };
    }
  }

  async getTournaments(filterQuies: any): Promise<any> {
    const locale = filterQuies.locale || this.DEFAULT_LOCALE;
    const limit = Math.min(parseInt(filterQuies.limit || 20, 10), 20);
    const status = filterQuies.status || 'live';
    const isCountRequired: boolean =
      filterQuies.is_count_required &&
      (filterQuies.is_count_required === 'true' ||
        filterQuies.is_count_required === true)
        ? true
        : false;
    let query = `?limit=${limit}&status=${status}`;
    if (isCountRequired) {
      query += '&is_count_required=true';
    }
    if (filterQuies.cursor && filterQuies.cursor !== 'null') {
      query += `&cursor=${filterQuies.cursor}`;
    }
    if (
      filterQuies.geo &&
      filterQuies.geo !== 'all' &&
      filterQuies.geo !== 'null'
    ) {
      query += `&geo=${filterQuies.geo}`;
    }
    if (
      filterQuies.lang &&
      filterQuies.lang !== 'all' &&
      filterQuies.lang !== 'null'
    ) {
      query += `&lang_filter=${filterQuies.lang}`;
    }
    if (filterQuies.game_id && filterQuies.game_id !== 'null') {
      query += `&game_id=${filterQuies.game_id}`;
    }
    const { data } = await this.httpService
      .get(
        environments.tournamentsApiHost +
          '/tournament/api/tournaments_list_v2' +
          query,
      )
      .toPromise();
    const gamesMap = await this.gameService.gatGamesMapData();
    return new TournamentsList(data, locale, gamesMap);
  }

  async getTournamentsSlugs(cursor: string, limit: number): Promise<any> {
    const limitNo = Math.min(limit || 20, 1000);
    let query = '?limit=' + limitNo;
    if (cursor) {
      query += '&cursor=' + cursor;
    }
    const { data } = await this.httpService
      .get(
        environments.tournamentsApiHost +
          '/tournament/api/get_tournament_slugs' +
          query,
      )
      .toPromise();
    return data;
  }

  async getUsersProfileSlugs(cursor: string, limit: number): Promise<any> {
    const limitNo = Math.min(limit || 20, 1000);
    let query = '?limit=' + limitNo;
    if (cursor) {
      query += '&cursor=' + cursor;
    }
    const { data } = await this.httpService
      .get(environments.tournamentsApiHost + '/profile/get_user_slugs' + query)
      .toPromise();
    return data;
  }
}
