import { IHeaderLocale } from '@app/abstractions/locale/common';
export const HeaderLocaleEnglish: IHeaderLocale = {
  link: '/',
  navigationMenu: [
    {
      name: 'Meet Tourney',
      link: '/',
    },
    {
      name: 'Tournaments',
      link: '/find-tournaments',
    },
    {
      name: 'Commands',
      link: '/how-to-use-tourney?tab=command',
    },
    {
      name: 'How to use Tourney',
      link: '/how-to-use-tourney',
    },
    {
      name: 'Sponsorships',
      link: '/sponsorships',
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
      name: 'Invite Tourney',
      link:
        'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
      target: '_blank',
      classes: 'menu-box',
    },
  ],
  searchForm: {
    formPlaceholder: 'Search game eg. Pubg',
    searchInfo: 'View tournaments for',
    noresult: 'Game not found! Please search another game.',
  },
};
