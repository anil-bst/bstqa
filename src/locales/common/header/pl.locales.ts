import { IHeaderLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.POLISH;
export const HeaderLocalePolish: IHeaderLocale = {
  link: `/${language}`,
  navigationMenu: [
    {
      name: 'Poznaj Tourney',
      link: `/${language}`,
    },
    {
      name: 'Turnieje',
      link: `/${language}/find-tournaments`,
    },
    {
      name: 'Komendy',
      link: `/${language}/how-to-use-tourney?tab=command`,
    },
    {
      name: 'Jak korzystać z Tourney',
      link: `/${language}/how-to-use-tourney`,
    },
    {
      name: 'Sponsoring',
      link: `/${language}/sponsorships`,
    },
    {
      name: 'Tablica',
      link: '/dashboard',
      target: '_blank',
    },
    {
      name: '',
      link: 'javascript:void(0)',
      classes: 'nav-search-block',
    },
    {
      name: 'Zaproś Tourney',
      link:
        'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
      target: '_blank',
      classes: 'menu-box',
    },
  ],
  searchForm: {
    formPlaceholder: 'Wyszukaj grę np. Pubg',
    searchInfo: 'Wyświetl turnieje dla',
    noresult: 'Gra nie znaleziona! Wyszukaj inną grę.',
  },
};
