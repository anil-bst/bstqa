import { IFooterLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.SPANISH;

export const FooterLocaleSpanish: IFooterLocale = {
  navigationMenu: [
    {
      subMenu: [
        {
          name: 'Conoce a Tourney',
          link: `/${language}`,
        },
        {
          name: 'Torneos',
          link: `/${language}/find-tournaments`,
        },
        {
          name: 'Comandos',
          link: `/${language}/how-to-use-tourney?tab=command`,
        },
        {
          name: 'Cómo usar a Tourney',
          link: `/${language}/how-to-use-tourney`,
        },
        {
          name: 'Patrocinios',
          link: `/${language}/sponsorships`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Inversores',
          link: `/${language}/investors`,
        },
        {
          name: 'Equipo',
          link: `/${language}/team`,
        },
        {
          name: 'Contáctenos',
          link: `/${language}/contact`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Términos de uso y política de privacidad',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Política de disputa de derechos de autor',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Política de cookies',
          link: `/${language}/cookie-policy`,
        },
        {
          name: 'Acuerdo de licencia de usuario final',
          link: `/${language}/license-agreement`,
        },
      ],
    },
    {
      subMenu: [
        {
          link: '/dashboard',
          name: 'Tablero',
          target: '_blank',
        },
      ],
    },
  ],
  // copyrightNotice: 'Copyright©game.tv. All rights reserved.',
  copyrightNotice: 'Copyright©game.tv. All rights reserved.',
};
