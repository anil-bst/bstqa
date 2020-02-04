import {
  Controller,
  UseInterceptors,
  Get,
  Render,
  Req,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { AddCommonLocaleInterceptor } from '@app/interceptors';
import {
  AbstractLocalisedController,
  IRenderer,
  IHomeLocale,
} from '@app/abstractions';
import { LocaleUtils, RouteUtils } from '@app/utils';
import { SupportedLocalesEnum } from '@app/enums';
import { STATIC_ROUTES, GAME_ROUTES } from '../../routes';
import { Request } from 'express';
import { ApiService } from '../../services/api/api.service';

import { TournamentsService } from '@tournaments/tournaments.service';
import { GamesService } from '@games/games.service';

@Controller('')
@UseInterceptors(AddCommonLocaleInterceptor)
export class GamePagesController extends AbstractLocalisedController {
  constructor(
    protected localeUtils: LocaleUtils,
    protected apiService: ApiService,
    private readonly tournamentService: TournamentsService,
    private readonly gamesService: GamesService,
  ) {
    super(localeUtils);
  }

  @Get(STATIC_ROUTES.FIND_TOURNAMENTS.paths)
  @Render(STATIC_ROUTES.FIND_TOURNAMENTS.template)
  async findTournaments(
    @Req()
    request: Request,
    @Param('locale')
    locale: SupportedLocalesEnum = SupportedLocalesEnum.ENGLISH,
  ): Promise<IRenderer<any>> {
    let page = 1;

    const originalUrl = request.originalUrl;
    let comingPage = originalUrl.split('page=')[1];
    let cursor = originalUrl.split('cursor=')[1];
    cursor = cursor ? cursor : '';
    if (cursor) {
      comingPage = comingPage.split('&')[0];
    }

    if (originalUrl.includes('page')) {
      if (/^[0-9]*$/.test(comingPage)) {
        page = parseInt(comingPage, 10);
      } else {
        throw new NotFoundException();
      }
    }
    const [tournamentsResp, filterMetaData, games] = await Promise.all([
      this.apiService.getTournaments('all', 12, locale, cursor),
      this.apiService.getMetaData(),
      this.apiService.getGames(locale),
    ]);
    const { data, metaData } = tournamentsResp as any;
    const tournaments = {
      data: [],
      metaData: {},
    };
    tournaments.data = data;
    tournaments.metaData = {
      ...filterMetaData,
      ...metaData,
    };
    tournaments.metaData['page'] = page;

    const localeData = this.getLocaleData(
      STATIC_ROUTES.FIND_TOURNAMENTS,
      locale,
    );
    return {
      locale,
      route: STATIC_ROUTES.FIND_TOURNAMENTS,
      request,
      data: { ...localeData, games, tournaments },
    };
  }

  @Get(GAME_ROUTES.GAME_DETAILS.paths)
  @Render(GAME_ROUTES.GAME_DETAILS.template)
  async getGameDetails(
    @Req()
    request: Request,
    @Param('locale')
    locale: SupportedLocalesEnum = SupportedLocalesEnum.ENGLISH,
    @Param('game')
    gameSlug: string,
  ): Promise<IRenderer<any>> {
    let page = 1;

    const originalUrl = request.originalUrl;
    let comingPage = originalUrl.split('page=')[1];
    let cursor = originalUrl.split('cursor=')[1];
    cursor = cursor ? cursor : '';
    if (cursor) {
      comingPage = comingPage.split('&')[0];
    }
    if (originalUrl.includes('page')) {
      if (/^[0-9]*$/.test(comingPage)) {
        page = parseInt(comingPage, 10);
      } else {
        throw new NotFoundException();
      }
    }
    const [gameDetail, filterMetaData] = await Promise.all([
      this.apiService.getGameDetails(gameSlug, locale),
      this.apiService.getMetaData(),
    ]);

    const gameTournaments = {
      data: {},
      metaData: {},
    };
    if (gameDetail) {
      const gameId = gameDetail.gameId;
      const gameTournamentsResp = await this.apiService.getTournaments(
        'all',
        12,
        locale,
        cursor,
        gameId,
      );
      if (gameTournamentsResp) {
        const { data, metaData } = gameTournamentsResp as any;
        gameTournaments.data = data;
        gameTournaments['metaData'] = {
          ...metaData,
          ...filterMetaData,
        };

        gameTournaments['metaData']['page'] = page;
      }
    }

    if (!gameDetail.name || !Object.keys(gameTournaments).length) {
      throw new NotFoundException();
    }

    return {
      locale,
      route: GAME_ROUTES.GAME_DETAILS,
      request,
      data: {
        ...this.getLocaleData(GAME_ROUTES.GAME_DETAILS, locale),
        game: gameDetail,
        tournaments: gameTournaments,
      },
    };
  }
}
