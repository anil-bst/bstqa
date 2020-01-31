import { IFooterLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.FRENCH;

export const FooterLocaleFrench: IFooterLocale = {
  navigationMenu: [
    {
      subMenu: [
        {
          name: 'Rencontrer Tourney',
          link: `/${language}`,
        },
        {
          name: 'Tournois',
          link: `/${language}/find-tournaments`,
        },
        {
          name: 'Commandes',
          link: `/${language}/how-to-use-tourney?tab=command`,
        },
        {
          name: 'Comment utiliser Tourney',
          link: `/${language}/how-to-use-tourney`,
        },
        {
          name: 'Parrainage',
          link: `/${language}/sponsorships`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Investisseurs',
          link: `/${language}/investors`,
        },
        {
          name: 'Équipe',
          link: `/${language}/team`,
        },
        {
          name: 'Nous Contacter',
          link: `/${language}/contact`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: `Conditions d'Utilisation et Politique de Confidentialité`,
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: `Politique de Contestation des Droits d'Auteurs`,
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Politique des cookies',
          link: `/${language}/cookie-policy`,
        },
        {
          name: `Contrat de licence d'utilisateur`,
          link: `/${language}/license-agreement`,
        },
      ],
    },
    {
      subMenu: [
        {
          link: '/dashboard',
          name: 'Tableau de bord',
          target: '_blank',
        },
      ],
    },
  ],
  // copyrightNotice: 'Copyright©game.tv. All rights reserved.',
  copyrightNotice: 'Copyright©game.tv. All rights reserved.',
};
