import { IFooterLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.TURKISH;
// tslint:disable: quotemark

export const FooterLocaleTurkish: IFooterLocale = {
  navigationMenu: [
    {
      subMenu: [
        {
          name: "Tourney'le Tanışın",
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
          name: "Tourney'yi Nasıl Kullanırım ?",
          link: `/${language}/how-to-use-tourney`,
        },
        {
          name: 'Sponsorluklar',
          link: `/${language}/sponsorships`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Yatırımcılar',
          link: `/${language}/investors`,
        },
        {
          name: 'Takım',
          link: `/${language}/team`,
        },
        {
          name: 'Bizimle İletişime Geçin',
          link: `/${language}/contact`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Kullanım & Gizlilik Politikası',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Telif Hakkı Uyuşmazlık Politikası',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Çerez Politikası',
          link: `/${language}/cookie-policy`,
        },
        {
          name: 'Son kullanıcı Lisans Anlaşması',
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
  // copyrightNotice: 'Copyright©game.tv. Tüm hakları saklıdır.',
  copyrightNotice: 'Copyright©game.tv. All rights reserved.',
};
