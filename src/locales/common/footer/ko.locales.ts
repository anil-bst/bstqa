import { IFooterLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.KOREAN;

export const FooterLocaleKorean: IFooterLocale = {
  navigationMenu: [
    {
      subMenu: [
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
          name: 'Tourney 사용하는 방법',
          link: `/${language}/how-to-use-tourney`,
        },
        {
          name: '후원',
          link: `/${language}/sponsorships`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: '투자자',
          link: `/${language}/investors`,
        },
        {
          name: '팀',
          link: `/${language}/team`,
        },
        {
          name: '문의해주십시오',
          link: `/${language}/contact`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: '사용 약관 & 개인 정보 보호 정책',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: '저작권 분쟁 정책',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: '쿠키 정책',
          link: `/${language}/cookie-policy`,
        },
        {
          name: '최종 사용자 라이센스 계약서',
          link: `/${language}/license-agreement`,
        },
      ],
    },
    {
      subMenu: [
        {
          link: '/dashboard',
          name: '대시보드',
          target: '_blank',
        },
      ],
    },
  ],
  // copyrightNotice: 'Copyright©game.tv. 무단 전재 금지',
  copyrightNotice: 'Copyright©game.tv. All rights reserved.',
};
