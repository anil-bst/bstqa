import { HomeLocales } from '@app/locales/home';
import { RouteUtils, LocaleUtils } from '@app/utils';
import { TeamLocales } from '@app/locales/team';
import { RouteType } from '@app/abstractions';
import { InvestorsLocales } from '@app/locales/investors';
import { ContactUsLocales } from '@app/locales/contact-us';
import { HowToUseTourneyLocales } from '@app/locales/how-to-use-tourney';
import { SponsorshipsLocales } from '@app/locales/sponsorships';
import { CookiePolicyLocales } from '@app/locales/cookie-policy';
import { LicenseAgreementLocales } from '@app/locales/license-agreement';
import { FindTournamentLocales } from '@app/locales/find-tournaments';
import { CreateATournamentLocales } from '@app/locales/create-a-tournament';
import { TermsAndPrivacyLocales } from '@app/locales/terms-and-privacy';
import { GameDetailsLocales } from '@app/locales/game-details';
import { TournamentDetailsLocales } from '@app/locales/tournament-details';

const routeUtils = new RouteUtils(new LocaleUtils());

export const STATIC_ROUTES: { [key: string]: RouteType } = {
  HOME: {
    paths: routeUtils.generateAllRoutes(''),
    template: 'views/home',
    localeCollection: HomeLocales,
  },
  HOW_TO_USE_TOURNEY: {
    paths: routeUtils.generateAllRoutes('how-to-use-tourney'),
    template: 'views/how-to-use-tourney',
    localeCollection: HowToUseTourneyLocales,
  },
  SPONSORSHIPS: {
    paths: routeUtils.generateAllRoutes('sponsorships'),
    template: 'views/sponsorships',
    localeCollection: SponsorshipsLocales,
  },
  TEAM: {
    paths: routeUtils.generateAllRoutes('team'),
    template: 'views/team',
    localeCollection: TeamLocales,
  },
  INVESTORS: {
    paths: routeUtils.generateAllRoutes('investors'),
    template: 'views/investors',
    localeCollection: InvestorsLocales,
  },
  CONTACT: {
    paths: routeUtils.generateAllRoutes('contact'),
    template: 'views/contact-us',
    localeCollection: ContactUsLocales,
  },
  TERMS_AND_PRIVACY: {
    paths: routeUtils.generateAllRoutes('terms-and-privacy'),
    template: 'views/terms-and-privacy',
    localeCollection: TermsAndPrivacyLocales,
  },
  COOKIE_POLICY: {
    paths: routeUtils.generateAllRoutes('cookie-policy'),
    template: 'views/cookie-policy',
    localeCollection: CookiePolicyLocales,
  },
  LICENSE_AGREEMENT: {
    paths: routeUtils.generateAllRoutes('license-agreement'),
    template: 'views/license-agreement',
    localeCollection: LicenseAgreementLocales,
  },
  CREATE_A_TOURNAMENT: {
    paths: routeUtils.generateAllRoutes('create-a-tournament'),
    template: 'views/create-a-tournament',
    localeCollection: CreateATournamentLocales,
    // unsupportedLocales: [SupportedLocalesEnum.JAPANESE],
  },
  FIND_TOURNAMENTS: {
    paths: routeUtils.generateAllRoutes('find-tournaments'),
    template: 'views/find-tournaments',
    localeCollection: FindTournamentLocales,
    // unsupportedLocales: [SupportedLocalesEnum.JAPANESE],
  },
};
export const TOURNAMENT_ROUTES: { [key: string]: RouteType } = {
  TOURNAMENTS: {
    paths: routeUtils.generateAllRoutes('tournaments/:tournament'),
    template: 'views/tournament-details',
    localeCollection: TournamentDetailsLocales,
    // unsupportedLocales: [SupportedLocalesEnum.JAPANESE],
  },
};
export const GAME_ROUTES: { [key: string]: RouteType } = {
  GAME_DETAILS: {
    paths: routeUtils.generateAllRoutes('find-tournaments/:game'),
    template: 'views/game-details',
    localeCollection: GameDetailsLocales,
    // unsupportedLocales: [SupportedLocalesEnum.JAPANESE],
  },
};
