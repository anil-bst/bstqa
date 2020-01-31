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
import { STATIC_ROUTES, GAME_ROUTES, TOURNAMENT_ROUTES } from '../../routes';
import { Request } from 'express';
import { ApiService } from '../../services/api/api.service';

import { TournamentsService } from '@tournaments/tournaments.service';

@Controller('')
@UseInterceptors(AddCommonLocaleInterceptor)
export class TournamentPagesController extends AbstractLocalisedController {
  constructor(
    protected localeUtils: LocaleUtils,
    protected apiService: ApiService,
    private readonly tournamentService: TournamentsService,
  ) {
    super(localeUtils);
  }

  @Get(TOURNAMENT_ROUTES.TOURNAMENTS.paths)
  @Render(TOURNAMENT_ROUTES.TOURNAMENTS.template)
  async tournamentDetails(
    @Req()
    request: Request,
    @Param('locale')
    locale: SupportedLocalesEnum = SupportedLocalesEnum.ENGLISH,
    @Param('tournament')
    tournamentSlug: string,
  ): Promise<IRenderer<any>> {
    const tournamentUrlContent = tournamentSlug.split('-');
    const tournamentId = tournamentUrlContent[tournamentUrlContent.length - 1];
    const { data } = await this.tournamentService.getTournamentById(
      tournamentId,
    );

    // check rules:
    if (data && data.rules && data.rules.includes('\n')) {
      data.rules = data.rules.split('\n');
    } else {
      data.rules = [data.rules];
    }

    return {
      locale,
      route: TOURNAMENT_ROUTES.TOURNAMENTS,
      request,
      data: {
        ...this.getLocaleData(TOURNAMENT_ROUTES.TOURNAMENTS, locale),
        ...data,
      },
    };
  }
}
