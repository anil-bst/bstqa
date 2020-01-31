import { IFooterLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.GERMAN;

export const FooterLocaleGerman: IFooterLocale = {
  navigationMenu: [
    {
      subMenu: [
        {
          name: 'Lerne Tourney kennen',
          link: `/${language}`,
        },
        {
          name: 'Turniere',
          link: `/${language}/find-tournaments`,
        },
        {
          name: 'Commands',
          link: `/${language}/how-to-use-tourney?tab=command`,
        },
        {
          name: 'Wie benutzt man Tourney?',
          link: `/${language}/how-to-use-tourney`,
        },
        {
          name: 'Sponsorings',
          link: `/${language}/sponsorships`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Investoren',
          link: `/${language}/investors`,
        },
        {
          name: 'Team',
          link: `/${language}/team`,
        },
        {
          name: 'Kontaktiere uns',
          link: `/${language}/contact`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Nutzungsbedingungen & Datenschutzbestimmungen',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Richtlinie zu Urheberrechtsstreitigkeiten',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Cookie-Richtlinie',
          link: `/${language}/cookie-policy`,
        },
        {
          name: 'Endbenutzer-Lizenzvereinbarung',
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
  // copyrightNotice: 'Copyright©game.tv. Alle Rechte vorbehalten.',
  copyrightNotice: 'Copyright©game.tv. All rights reserved.',
};
