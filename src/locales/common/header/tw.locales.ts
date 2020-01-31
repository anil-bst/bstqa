import { IHeaderLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.CHINESE;
export const HeaderLocaleChinese: IHeaderLocale = {
  link: `/${language}`,
  navigationMenu: [
    {
      name: '遇見Tourney',
      link: `/${language}`,
    },
    {
      name: '錦標賽',
      link: `/${language}/find-tournaments`,
    },
    {
      name: '指令',
      link: `/${language}/how-to-use-tourney?tab=command`,
    },
    {
      name: '如何使用Tourney',
      link: `/${language}/how-to-use-tourney`,
    },
    {
      name: '贊助商',
      link: `/${language}/sponsorships`,
    },
    {
      name: '儀表板',
      link: '/dashboard',
      target: '_blank',
    },
    {
      name: '',
      link: 'javascript:void(0)',
      classes: 'nav-search-block',
    },
    {
      name: '邀請 Tourney',
      link:
        'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
      target: '_blank',
      classes: 'menu-box',
    },
  ],
  searchForm: {
    formPlaceholder: '搜尋遊戲，例如：PubG',
    searchInfo: '查看比賽',
    noresult: '找不到遊戲！ 請搜尋其他遊戲。',
  },
};
