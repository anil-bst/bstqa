import { IFooterLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.CHINESE;

export const FooterLocaleChinese: IFooterLocale = {
  navigationMenu: [
    {
      subMenu: [
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
      ],
    },
    {
      subMenu: [
        {
          name: '投資人',
          link: `/${language}/investors`,
        },
        {
          name: '隊伍',
          link: `/${language}/team`,
        },
        {
          name: '聯絡我們',
          link: `/${language}/contact`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: '使用條款和隱私政策',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: '版權糾紛政策',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Cookie政策',
          link: `/${language}/cookie-policy`,
        },
        {
          name: '終止用戶許可協議',
          link: `/${language}/license-agreement`,
        },
      ],
    },
    {
      subMenu: [
        {
          link: '/dashboard',
          name: '儀表板',
          target: '_blank',
        },
      ],
    },
  ],
  // copyrightNotice: '版權所有©game.tv。 版權所有。',
  copyrightNotice: 'Copyright©game.tv. All rights reserved.',
};
