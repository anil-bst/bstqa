import { IHeaderLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.ITALIAN;
export const HeaderLocaleItalian: IHeaderLocale = {
  link: `/${language}`,
  navigationMenu: [
    {
      name: 'Incontra Tourney',
      link: `/${language}`,
    },
    {
      name: 'Tornei',
      link: `/${language}/find-tournaments`,
    },
    {
      name: 'Comandi',
      link: `/${language}/how-to-use-tourney?tab=command`,
    },
    {
      name: 'Come usare Tourney',
      link: `/${language}/how-to-use-tourney`,
    },
    {
      name: 'Sponsorizzazioni',
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
      name: 'Invita Tourney',
      link:
        'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
      target: '_blank',
      classes: 'menu-box',
    },
  ],
  searchForm: {
    formPlaceholder: 'Cerca gioco ad es. Pubg',
    searchInfo: 'Visualizza i tornei per',
    noresult: 'Gioco non trovato! Cerca un altro gioco.',
  },
};
