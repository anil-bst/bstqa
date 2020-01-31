import { IFooterLocale } from '@app/abstractions/locale/common';

export const FooterLocaleEnglish: IFooterLocale = {
  navigationMenu: [
    {
      subMenu: [
        {
          name: 'Meet Tourney',
          link: '/',
        },
        {
          name: 'Tournaments',
          link: '/find-tournaments',
        },
        {
          name: 'Commands',
          link: '/how-to-use-tourney?tab=command',
        },
        {
          name: 'How to use Tourney',
          link: '/how-to-use-tourney',
        },
        {
          name: 'Sponsorships',
          link: '/sponsorships',
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Investors',
          link: '/investors',
        },
        {
          name: 'Team',
          link: '/team',
        },
        {
          name: 'Contact Us',
          link: '/contact',
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Terms of Use & Privacy Policy',
          link: '/terms-and-privacy',
        },
        {
          name: 'Copyright Dispute Policy',
          link: '/terms-and-privacy',
        },
        {
          name: 'Cookie Policy',
          link: '/cookie-policy',
        },
        {
          name: 'End User License Agreement',
          link: '/license-agreement',
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
