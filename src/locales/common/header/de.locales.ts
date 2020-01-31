import { IHeaderLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.GERMAN;
export const HeaderLocaleGerman: IHeaderLocale = {
  link: `/${language}`,
  navigationMenu: [
    {
      name: 'Lerne Tourney kennen',
      link: `/${language}`,
    },
    {
      name: 'Turniere',
      link: `/${language}/find-tournaments`,
    },
    {
      name: 'Commands',
      link: `/${language}/how-to-use-tourney?tab=command`,
    },
    {
      name: 'Wie benutzt man Tourney?',
      link: `/${language}/how-to-use-tourney`,
    },
    {
      name: 'Sponsorings',
      link: `/${language}/sponsorships`,
    },
    {
      name: 'Dashboard',
      link: '/dashboard',
      target: '_blank',
    },
    {
      name: '',
      link: 'javascript:void(0)',
      classes: 'nav-search-block',
    },
    {
      name: 'Tourney einladen',
      link:
        'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
      target: '_blank',
      classes: 'menu-box',
    },
  ],
  searchForm: {
    formPlaceholder: 'Suche Spiel z. B. Pubg',
    searchInfo: 'Turniere anzeigen für',
    noresult: 'Spiel nicht gefunden! Bitte suche ein anderes Spiel.',
  },
};
