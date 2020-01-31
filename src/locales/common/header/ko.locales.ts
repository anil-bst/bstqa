import { IHeaderLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.KOREAN;
export const HeaderLocaleKorean: IHeaderLocale = {
  link: `/${language}`,
  navigationMenu: [
    {
      name: 'Tourney 만나기',
      link: `/${language}`,
    },
    {
      name: '토너먼트',
      link: `/${language}/find-tournaments`,
    },
    {
      name: '명령',
      link: `/${language}/how-to-use-tourney?tab=command`,
    },
    {
      name: 'Tourney를 사용하는 방법',
      link: `/${language}/how-to-use-tourney`,
    },
    {
      name: '후원',
      link: `/${language}/sponsorships`,
    },
    {
      name: '대시보드',
      link: '/dashboard',
      target: '_blank',
    },
    {
      name: '',
      link: 'javascript:void(0)',
      classes: 'nav-search-block',
    },
    {
      name: 'Tourney 초대',
      link:
        'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
      target: '_blank',
      classes: 'menu-box',
    },
  ],
  searchForm: {
    formPlaceholder: '게임 검색 예: 펍지',
    searchInfo: '토너먼트 보기',
    noresult: '게이믈 찾을 수 없습니다! 다른 게임을 검색해 보세요.',
  },
};
