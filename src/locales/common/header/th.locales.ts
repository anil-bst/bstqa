import { IHeaderLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.THAI;
export const HeaderLocaleThai: IHeaderLocale = {
  link: `/${language}`,
  navigationMenu: [
    {
      name: 'ขอแนะนำ Tourney',
      link: `/${language}`,
    },
    {
      name: 'Tournaments',
      link: `/${language}/find-tournaments`,
    },
    {
      name: 'Commands',
      link: `/${language}/how-to-use-tourney?tab=command`,
    },
    {
      name: 'วิธีใช้งาน Tourney',
      link: `/${language}/how-to-use-tourney`,
    },
    {
      name: 'Sponsorships',
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
      name: 'Invite Tourney',
      link:
        'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
      target: '_blank',
      classes: 'menu-box',
    },
  ],
  searchForm: {
    formPlaceholder: 'ค้นหาเกม eg. Pubg',
    searchInfo: 'ดูทัวร์นาเมนต์สำหรับ',
    noresult: 'ไม่พบเกม กรุณาค้นหาเกมอื่น',
  },
};
