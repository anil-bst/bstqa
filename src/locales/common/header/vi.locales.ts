import { IHeaderLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.VIETNAMESE;
export const HeaderLocaleVietnamese: IHeaderLocale = {
  link: `/${language}`,
  navigationMenu: [
    {
      name: 'Gặp Tourney',
      link: `/${language}`,
    },
    {
      name: 'Giải đấu',
      link: `/${language}/find-tournaments`,
    },
    {
      name: 'Các câu lệnh',
      link: `/${language}/how-to-use-tourney?tab=command`,
    },
    {
      name: 'Cách sử dụng Tourney',
      link: `/${language}/how-to-use-tourney`,
    },
    {
      name: 'Tài trợ',
      link: `/${language}/sponsorships`,
    },
    {
      name: 'Bảng điều khiển',
      link: '/dashboard',
      target: '_blank',
    },
    {
      name: '',
      link: 'javascript:void(0)',
      classes: 'nav-search-block',
    },
    {
      name: 'Mời Tourney',
      link:
        'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
      target: '_blank',
      classes: 'menu-box',
    },
  ],
  searchForm: {
    formPlaceholder: 'Tìm game, ví dụ: PUBG',
    searchInfo: 'Xem các giải đấu',
    noresult: 'Không tìm thấy trò chơi! Vui lòng tìm trò chơi khác.',
  },
};
