// tslint:disable: object-literal-key-quotes
import { Injectable, HttpService } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Games } from './games.interface';
import { CacheService } from '../../cache/cache.service';
import { GamesListResponse } from '@app/abstractions/classes/games-list-response.class';
import { GameResponse } from '@app/abstractions/classes/game-response';
import { APP_CONST } from '@constants/app.constants';

@Injectable()
export class GamesService {
  constructor(
    private readonly cacheService: CacheService,
    @InjectModel('Games') private readonly gameModel: Model<Games>,
  ) {}

  private readonly DEFAULT_LOCALE = APP_CONST.DEFAULT_LOCALE;

  async getGameByName(
    query: string = '',
    page: string,
    limit: string,
    localeQ: string,
  ): Promise<any> {
    const locale = localeQ || this.DEFAULT_LOCALE;
    const pageNo = parseInt(page, 10) || 1;
    const limitNo = Math.min(100, parseInt(limit, 10) || 10);
    const skip = (pageNo - 1) * limitNo;
    const cacheKey = `GAMES_${limitNo}_${pageNo}_${query}`;
    let respData: any;
    const queryObj = {
      skip,
      limitNo,
      query,
      pageNo,
    };
    try {
      const respDataSerialized = await this.cacheService.get(cacheKey);
      if (respDataSerialized) {
        respData = JSON.parse(respDataSerialized);
      } else {
        respData = await this.getGamesByNameAndSetCache(queryObj, cacheKey);
      }
    } catch (err) {
      respData = await this.getGamesByNameAndSetCache(queryObj, cacheKey);
    }
    const gameResponseObj = {
      data: respData[0]['data'],
      metaData: {
        count: respData[0]['metaData'][0]
          ? respData[0]['metaData'][0]['count']
          : 0,
        page: pageNo,
        limit: limitNo,
      },
    };
    return new GamesListResponse(gameResponseObj, locale);
  }

  async getTopGame(page: string, limit: string, localeQ: string): Promise<any> {
    const locale = localeQ || this.DEFAULT_LOCALE;
    const pageNo = parseInt(page, 10) || 1;
    const limitNo = Math.min(20, parseInt(limit, 10) || 10);
    const skip = (pageNo - 1) * limitNo;
    const cacheKey = 'TOP_GAMES_' + limitNo + '_' + pageNo;
    const queryObj = {
      skip,
      pageNo,
      limitNo,
    };

    let gameData: any;

    try {
      const gameDataSerialized = await this.cacheService.get(cacheKey);
      if (gameDataSerialized) {
        gameData = JSON.parse(gameDataSerialized);
      } else {
        gameData = await this.getTopGameAndSetRedis(queryObj, cacheKey);
      }
    } catch (err) {
      gameData = await this.getTopGameAndSetRedis(queryObj, cacheKey);
    }

    const finalResponse = {
      success: true,
      msg: 'top games data',
      data: gameData.map(e => {
        return {
          ...e,
          ...{
            name: e.name
              ? (
                  e.name.find(ele => ele.locale === locale) ||
                  e.name.find(ele => ele.locale === this.DEFAULT_LOCALE)
                ).text
              : '',
            description: e.description
              ? (
                  e.description.find(ele => ele.locale === locale) ||
                  e.description.find(ele => ele.locale === this.DEFAULT_LOCALE)
                ).text
              : '',
            media: {
              mobile: {
                logoUrl: e.media.mobile
                  ? e.media.mobile['logoUrl'][this.DEFAULT_LOCALE] ||
                    e.media.mobile['logoUrl'][this.DEFAULT_LOCALE]
                  : '',
                bannerUrl: e.media.mobile
                  ? e.media.mobile['bannerUrl'][this.DEFAULT_LOCALE] ||
                    e.media.mobile['bannerUrl'][this.DEFAULT_LOCALE]
                  : '',
                stretchImageUrl: e.media.mobile
                  ? e.media.mobile['stretchImageUrl'][this.DEFAULT_LOCALE] ||
                    e.media.mobile['stretchImageUrl'][this.DEFAULT_LOCALE]
                  : '',
              },
              desktop: {
                logoUrl: e.media.desktop
                  ? e.media.desktop['logoUrl'][this.DEFAULT_LOCALE] ||
                    e.media.desktop['logoUrl'][this.DEFAULT_LOCALE]
                  : '',
                bannerUrl: e.media.desktop
                  ? e.media.desktop['bannerUrl'][this.DEFAULT_LOCALE] ||
                    e.media.desktop['bannerUrl'][this.DEFAULT_LOCALE]
                  : '',
                stretchImageUrl: e.media.desktop
                  ? e.media.desktop['stretchImageUrl'][this.DEFAULT_LOCALE] ||
                    e.media.desktop['stretchImageUrl'][this.DEFAULT_LOCALE]
                  : '',
              },
              default: {
                logoUrl: e.media.default
                  ? e.media.default['logoUrl'][this.DEFAULT_LOCALE] ||
                    e.media.default['logoUrl'][this.DEFAULT_LOCALE]
                  : '',
                bannerUrl: e.media.default
                  ? e.media.default['bannerUrl'][this.DEFAULT_LOCALE] ||
                    e.media.default['bannerUrl'][this.DEFAULT_LOCALE]
                  : '',
                stretchImageUrl: e.media.default
                  ? e.media.default['stretchImageUrl'][this.DEFAULT_LOCALE] ||
                    e.media.default['stretchImageUrl'][this.DEFAULT_LOCALE]
                  : '',
              },
            },
          },
        };
      }),
    };
    return finalResponse;
  }

  async getGameBySlug(gameSlug: string, localeQ: string): Promise<any> {
    const locale = localeQ || this.DEFAULT_LOCALE;
    let queryResp: any;
    const cacheKey = `GAMES_BY_SLUG_${gameSlug}`;

    try {
      const queryRespSerialized = await this.cacheService.get(cacheKey);
      if (queryRespSerialized) {
        queryResp = JSON.parse(queryRespSerialized);
      } else {
        queryResp = await this.getGameBySlugAndSetCache(gameSlug, cacheKey);
      }
    } catch (err) {
      queryResp = await this.getGameBySlugAndSetCache(gameSlug, cacheKey);
    }
    return new GameResponse(queryResp, locale);
  }

  async getGamesSlugs(): Promise<any> {
    const cacheKey = `GAMES_SLUGS`;
    let slugData: any;
    try {
      const slugDataSerialized = await this.cacheService.get(cacheKey);
      if (slugDataSerialized) {
        slugData = JSON.parse(slugDataSerialized);
      } else {
        slugData = await this.getGamesSlugsAndSetCache(cacheKey);
      }
    } catch (err) {
      slugData = await this.getGamesSlugsAndSetCache(cacheKey);
      // console.log('Error fetching getGamesSlugs data from redis', err);
    }
    if (!slugData || slugData.length <= 0) {
      return { success: true, msg: 'no games found', data: [] };
    }
    return { success: true, msg: 'games slug data', data: slugData };
  }

  async gatGamesMapData(): Promise<any> {
    const cacheKey = `GAMES_MAP`;
    let gamesMapData: any;
    try {
      const gamesMapDataSerialized = await this.cacheService.get(cacheKey);
      if (gamesMapDataSerialized) {
        gamesMapData = JSON.parse(gamesMapDataSerialized);
      } else {
        const games = await this.gameModel.find({});
        gamesMapData = {};
        if (games && games.length) {
          games.forEach(ele => {
            gamesMapData[ele.gameId] = ele;
          });
        }
        this.cacheService.set(cacheKey, JSON.stringify(gamesMapData));
      }
    } catch (err) {
      const games = await this.gameModel.find({});
      gamesMapData = {};
      if (games && games.length) {
        games.forEach(ele => {
          gamesMapData[ele.primaryPkg] = ele;
        });
      }
      this.cacheService.set(cacheKey, JSON.stringify(gamesMapData));
    }

    return gamesMapData;
  }

  async getGameByGameId(gameId: string): Promise<any> {
    let gameData: any;
    if (gameId) {
      const cacheKey = 'GAME_BY_ID_' + gameId;
      const gameDataSerialized = await this.cacheService.get(cacheKey);
      if (gameDataSerialized) {
        gameData = JSON.parse(gameDataSerialized);
      } else {
        gameData = await this.gameModel.find(
          { gameId },
          {
            _id: 0,
            primaryPkg: 1,
            name: 1,
            description: 1,
            slug: 1,
            developer: 1,
            totalRating: 1,
            avgRating: 1,
            media: 1,
            tournamentTypes: 1,
            gameId: 1,
            bstId: 1,
          },
        );
        if (gameData && gameData.length) {
          this.cacheService.set(cacheKey, JSON.stringify(gameData[0]));
        }
        gameData = gameData && gameData.length ? gameData[0] : {};
      }
      return gameData;
    } else {
      return {};
    }
  }

  private async getGamesByNameAndSetCache(
    queryObj: any,
    cacheKey: string,
  ): Promise<any> {
    const respData = await this.gameModel.aggregate([
      {
        $match: {
          'name.text': { $regex: queryObj.query, $options: 'i' },
        },
      },
      {
        $facet: {
          data: [
            { $skip: queryObj.skip },
            { $limit: queryObj.limitNo },
            {
              $project: {
                _id: 0,
                primaryPkg: 1,
                name: 1,
                slug: 1,
                media: 1,
                tournamentTypes: 1,
                developer: 1,
                totalRating: 1,
                avgRating: 1,
                description: 1,
                gameId: 1,
                bstId: 1,
              },
            },
          ],
          metaData: [
            {
              $group: {
                _id: null,
                count: { $sum: 1 },
              },
            },
            {
              $project: {
                _id: 0,
                count: 1,
                page: queryObj.pageNo,
                limit: queryObj.limitNo,
              },
            },
          ],
        },
      },
    ]);
    this.cacheService.set(cacheKey, JSON.stringify(respData)).catch(err => {
      // console.log('Error ocured setting redis data', err);
    });
    return respData;
  }

  private async getTopGameAndSetRedis(
    queryObj: any,
    cacheKey: string,
  ): Promise<any> {
    const gameData = await this.gameModel
      .find(
        {},
        {
          _id: 0,
          name: 1,
          description: 1,
          media: 1,
          primaryPkg: 1,
          slug: 1,
          gameId: 1,
          bstId: 1,
        },
      )
      .sort({ tournamentCount: -1 })
      .skip(queryObj.skip)
      .limit(queryObj.limitNo)
      .lean();
    this.cacheService.set(cacheKey, JSON.stringify(gameData)).catch(err => {
      // console.log('Error ocured setting redis data', err);
    });
    return gameData;
  }

  private async getGameBySlugAndSetCache(
    gameSlug: string,
    cacheKey: string,
  ): Promise<any> {
    const queryResp = await this.gameModel
      .findOne(
        { slug: gameSlug },
        {
          _id: 0,
          communityCount: 1,
          name: 1,
          description: 1,
          primaryPkg: 1,
          slug: 1,
          media: 1,
          tournamentTypes: 1,
          developer: 1,
          totalRating: 1,
          avgRating: 1,
          gameId: 1,
          bstId: 1,
        },
      )
      .lean();
    this.cacheService.set(cacheKey, JSON.stringify(queryResp)).catch(err => {
      // console.log('Error ocured setting redis data', err);
    });
    return queryResp;
  }

  private async getGamesSlugsAndSetCache(cacheKey: string): Promise<any> {
    let slugData = await this.gameModel.find({}, { _id: 0, slug: 1 });
    slugData = slugData.map(element => {
      return element['slug'];
    });
    this.cacheService.set(cacheKey, JSON.stringify(slugData)).catch(err => {
      // console.log('Error ocured setting redis data', err);
    });

    return slugData;
  }
}
