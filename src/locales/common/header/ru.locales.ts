import { IHeaderLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.RUSSIAN;
export const HeaderLocaleRussian: IHeaderLocale = {
  link: `/${language}`,
  navigationMenu: [
    {
      name: 'Встречайте Tourney',
      link: `/${language}`,
    },
    {
      name: 'Torneios',
      link: `/${language}/find-tournaments`,
    },
    {
      name: 'Команды',
      link: `/${language}/how-to-use-tourney?tab=command`,
    },
    {
      name: 'Как использовать Tourney',
      link: `/${language}/how-to-use-tourney`,
    },
    {
      name: 'Спонсорство',
      link: `/${language}/sponsorships`,
    },
    {
      name: 'Панель управления',
      link: '/dashboard',
      target: '_blank',
    },
    {
      name: '',
      link: 'javascript:void(0)',
      classes: 'nav-search-block',
    },
    {
      name: 'Пригласить Tourney',
      link:
        'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
      target: '_blank',
      classes: 'menu-box',
    },
  ],
  searchForm: {
    formPlaceholder: 'Найти игру, например, Pubg',
    searchInfo: 'Посмотреть турниры для',
    noresult: 'Игра не найдена. Пожалуйста, попробуйте найти другую.',
  },
};
