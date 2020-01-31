import { IHeaderLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.TURKISH;
// tslint:disable: quotemark
export const HeaderLocaleTurkish: IHeaderLocale = {
  link: `/${language}`,
  navigationMenu: [
    {
      name: "Tourney'le tanışın",
      link: `/${language}`,
    },
    {
      name: 'Turnuvalar',
      link: `/${language}/find-tournaments`,
    },
    {
      name: 'Komutlar',
      link: `/${language}/how-to-use-tourney?tab=command`,
    },
    {
      name: "Tourney'yi Nasıl Kullanırım",
      link: `/${language}/how-to-use-tourney`,
    },
    {
      name: 'Sponsorluklar',
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
      name: "Tourney'ye Davet Et",
      link:
        'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
      target: '_blank',
      classes: 'menu-box',
    },
  ],
  searchForm: {
    formPlaceholder: 'Oyun Arama örn. Pubg',
    searchInfo: 'Turnuvaları göster',
    noresult: 'Oyun bulunamadı! Lütfen başka bir oyun arayın.',
  },
};
