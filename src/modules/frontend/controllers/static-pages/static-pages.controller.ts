import {
  Controller,
  Get,
  Render,
  Param,
  UseInterceptors,
  Req,
} from '@nestjs/common';
import {
  AbstractLocalisedController,
  IRenderer,
  IHomeLocale,
  IInvestorsLocale,
  IContactUsLocale,
} from '@app/abstractions';
import { STATIC_ROUTES } from '../../routes';
import { SupportedLocalesEnum } from '@app/enums';
import { AddCommonLocaleInterceptor } from '@app/interceptors';
import { ITeamLocale } from '@app/abstractions/locale/team.interface';
import { Request } from 'express';
import { LocaleUtils } from '@app/utils';
import { ApiService } from '../../services/api/api.service';

@Controller('')
@UseInterceptors(AddCommonLocaleInterceptor)
export class StaticPagesController extends AbstractLocalisedController {
  constructor(
    protected localeUtils: LocaleUtils,
    protected apiService: ApiService,
  ) {
    super(localeUtils);
  }

  @Get(STATIC_ROUTES.CONTACT.paths)
  @Render(STATIC_ROUTES.CONTACT.template)
  async contact(
    @Req()
    request: Request,
    @Param('locale')
    locale: SupportedLocalesEnum = SupportedLocalesEnum.ENGLISH,
  ): Promise<IRenderer<IContactUsLocale>> {
    return {
      locale,
      route: STATIC_ROUTES.CONTACT,
      request,
      data: this.getLocaleData(STATIC_ROUTES.CONTACT, locale),
    };
  }

  @Get(STATIC_ROUTES.TEAM.paths)
  @Render(STATIC_ROUTES.TEAM.template)
  async team(
    @Req()
    request: Request,
    @Param('locale')
    locale: SupportedLocalesEnum = SupportedLocalesEnum.ENGLISH,
  ): Promise<IRenderer<ITeamLocale>> {
    return {
      locale,
      route: STATIC_ROUTES.TEAM,
      request,
      data: this.getLocaleData(STATIC_ROUTES.TEAM, locale),
    };
  }

  @Get(STATIC_ROUTES.INVESTORS.paths)
  @Render(STATIC_ROUTES.INVESTORS.template)
  async investors(
    @Req()
    request: Request,
    @Param('locale')
    locale: SupportedLocalesEnum = SupportedLocalesEnum.ENGLISH,
  ): Promise<IRenderer<IInvestorsLocale>> {
    return {
      locale,
      route: STATIC_ROUTES.INVESTORS,
      request,
      data: this.getLocaleData(STATIC_ROUTES.INVESTORS, locale),
    };
  }

  @Get(STATIC_ROUTES.HOW_TO_USE_TOURNEY.paths)
  @Render(STATIC_ROUTES.HOW_TO_USE_TOURNEY.template)
  async howToUseTourney(
    @Req()
    request: Request,
    @Param('locale')
    locale: SupportedLocalesEnum = SupportedLocalesEnum.ENGLISH,
  ): Promise<IRenderer<IHomeLocale>> {
    return {
      locale,
      route: STATIC_ROUTES.HOW_TO_USE_TOURNEY,
      request,
      data: this.getLocaleData(STATIC_ROUTES.HOW_TO_USE_TOURNEY, locale),
    };
  }

  @Get(STATIC_ROUTES.SPONSORSHIPS.paths)
  @Render(STATIC_ROUTES.SPONSORSHIPS.template)
  async sponsorships(
    @Req()
    request: Request,
    @Param('locale')
    locale: SupportedLocalesEnum = SupportedLocalesEnum.ENGLISH,
  ): Promise<IRenderer<IHomeLocale>> {
    return {
      locale,
      route: STATIC_ROUTES.SPONSORSHIPS,
      request,
      data: this.getLocaleData(STATIC_ROUTES.SPONSORSHIPS, locale),
    };
  }

  @Get(STATIC_ROUTES.COOKIE_POLICY.paths)
  @Render(STATIC_ROUTES.COOKIE_POLICY.template)
  async cookiePolicy(
    @Req()
    request: Request,
    @Param('locale')
    locale: SupportedLocalesEnum = SupportedLocalesEnum.ENGLISH,
  ): Promise<IRenderer<IHomeLocale>> {
    return {
      locale,
      route: STATIC_ROUTES.COOKIE_POLICY,
      request,
      data: this.getLocaleData(STATIC_ROUTES.COOKIE_POLICY, locale),
    };
  }

  @Get(STATIC_ROUTES.LICENSE_AGREEMENT.paths)
  @Render(STATIC_ROUTES.LICENSE_AGREEMENT.template)
  async licenseAgreement(
    @Req()
    request: Request,
    @Param('locale')
    locale: SupportedLocalesEnum = SupportedLocalesEnum.ENGLISH,
  ): Promise<IRenderer<IHomeLocale>> {
    return {
      locale,
      route: STATIC_ROUTES.LICENSE_AGREEMENT,
      request,
      data: this.getLocaleData(STATIC_ROUTES.LICENSE_AGREEMENT, locale),
    };
  }

  @Get(STATIC_ROUTES.TERMS_AND_PRIVACY.paths)
  @Render(STATIC_ROUTES.TERMS_AND_PRIVACY.template)
  async termsAndPrivacy(
    @Req()
    request: Request,
    @Param('locale')
    locale: SupportedLocalesEnum = SupportedLocalesEnum.ENGLISH,
  ): Promise<IRenderer<IHomeLocale>> {
    return {
      locale,
      route: STATIC_ROUTES.TERMS_AND_PRIVACY,
      request,
      data: this.getLocaleData(STATIC_ROUTES.TERMS_AND_PRIVACY, locale),
    };
  }

  @Get(STATIC_ROUTES.CREATE_A_TOURNAMENT.paths)
  @Render(STATIC_ROUTES.CREATE_A_TOURNAMENT.template)
  async communityTournament(
    @Req()
    request: Request,
    @Param('locale')
    locale: SupportedLocalesEnum = SupportedLocalesEnum.ENGLISH,
  ): Promise<IRenderer<any>> {
    return {
      locale,
      route: STATIC_ROUTES.CREATE_A_TOURNAMENT,
      request,
      data: this.getLocaleData(STATIC_ROUTES.CREATE_A_TOURNAMENT, locale),
    };
  }

  /**
   * All other routes should be defined above home page, as home page contains a localized path /:locale,
   * if a route is defined after home route, the route is take as a value for locale.
   * @param locale
   */
  @Get(STATIC_ROUTES.HOME.paths)
  @Render(STATIC_ROUTES.HOME.template)
  async home(
    @Req()
    request: Request,
    @Param('locale')
    locale: SupportedLocalesEnum = SupportedLocalesEnum.ENGLISH,
  ): Promise<IRenderer<IHomeLocale>> {
    const { data, source } = await this.apiService.getAllGames(50, locale);
    const games = data;
    return {
      locale,
      route: STATIC_ROUTES.HOME,
      request,
      data: {
        ...this.getLocaleData(STATIC_ROUTES.HOME, locale),
        games,
        source,
      },
    };
  }
}
