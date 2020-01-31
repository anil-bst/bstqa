import { GameResponse } from './game-response';

export class GamesListResponse {
  constructor(gamesObj: any, locale: any) {
    const games =
      gamesObj['data'] && gamesObj['data'].length ? gamesObj['data'] : [];
    this.success = true;
    this.data = games.length
      ? games.map(game => new GameResponse(game, locale))
      : [];
    this.msg = `success`;
    this.metaData = {
      count: gamesObj['metaData'] ? gamesObj['metaData']['count'] : 0,
      page: gamesObj['metaData'] ? gamesObj['metaData']['page'] : 0,
      limit: gamesObj['metaData'] ? gamesObj['metaData']['limit'] : 0,
    };
  }

  data: any;
  metaData: any;
  msg: string;
  success: boolean;
}
