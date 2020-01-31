import { IFooterLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.ITALIAN;
// tslint:disable: quotemark
export const FooterLocaleItalian: IFooterLocale = {
  navigationMenu: [
    {
      subMenu: [
        {
          name: 'Incontra Tourney',
          link: `/${language}`,
        },
        {
          name: 'Tornei',
          link: `/${language}/find-tournaments`,
        },
        {
          name: 'comandi',
          link: `/${language}/how-to-use-tourney?tab=command`,
        },
        {
          name: 'Come usare Tourney',
          link: `/${language}/how-to-use-tourney`,
        },
        {
          name: 'sponsorizzazioni',
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
          name: 'Contattaci',
          link: `/${language}/contact`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: "Termini d'uso e politica sulla privacy",
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Politica sulle controversie sul copyright',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Cookie policy',
          link: `/${language}/cookie-policy`,
        },
        {
          name: "Contratto di licenza per l'utente",
          link: `/${language}/license-agreement`,
        },
      ],
    },
    {
      subMenu: [
        {
          link: '/dashboard',
          name: 'Cruscotto',
          target: '_blank',
        },
      ],
    },
  ],
  // copyrightNotice: 'Copyright © game.tv. Tutti i diritti riservati.',
  copyrightNotice: 'Copyright©game.tv. All rights reserved.',
};
