import { IFooterLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.THAI;

export const FooterLocaleThai: IFooterLocale = {
  navigationMenu: [
    {
      subMenu: [
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
      ],
    },
    {
      subMenu: [
        {
          name: 'Investors',
          link: `/${language}/investors`,
        },
        {
          name: 'Team',
          link: `/${language}/team`,
        },
        {
          name: 'ติดต่อเรา',
          link: `/${language}/contact`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Terms of Use & Privacy Policy',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Copyright Dispute Policy',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Cookie Policy',
          link: `/${language}/cookie-policy`,
        },
        {
          name: 'End User License Agreement',
          link: `/${language}/license-agreement`,
        },
      ],
    },
    {
      subMenu: [
        {
          link: '/dashboard',
          name: 'Dashboard',
          target: '_blank',
        },
      ],
    },
  ],
  copyrightNotice: 'Copyright©game.tv. All rights reserved.',
};
