import { IFooterLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.POLISH;

export const FooterLocalePolish: IFooterLocale = {
  navigationMenu: [
    {
      subMenu: [
        {
          name: 'Poznaj Tourney',
          link: `/${language}`,
        },
        {
          name: 'Turnieje',
          link: `/${language}/find-tournaments`,
        },
        {
          name: 'Komendy',
          link: `/${language}/how-to-use-tourney?tab=command`,
        },
        {
          name: 'Jak użyć Tourney',
          link: `/${language}/how-to-use-tourney`,
        },
        {
          name: 'Sponsoring',
          link: `/${language}/sponsorships`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Inwestorzy',
          link: `/${language}/investors`,
        },
        {
          name: 'Drużyna',
          link: `/${language}/team`,
        },
        {
          name: 'Skontaktuj się z nami',
          link: `/${language}/contact`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Warunki użytkowania i polityka prywatności',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Polityka sporów dotyczących praw autorskich',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Polityka Cookie',
          link: `/${language}/cookie-policy`,
        },
        {
          name: 'Umowa licencyjna użytkownika końcowego',
          link: `/${language}/license-agreement`,
        },
      ],
    },
    {
      subMenu: [
        {
          link: '/dashboard',
          name: 'Tablica',
          target: '_blank',
        },
      ],
    },
  ],
  // copyrightNotice: 'Prawa autorskie © game.tv. Wszelkie prawa zastrzeżone.',
  copyrightNotice: 'Copyright©game.tv. All rights reserved.',
};
