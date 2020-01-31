import { IFooterLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.RUSSIAN;

export const FooterLocaleRussian: IFooterLocale = {
  navigationMenu: [
    {
      subMenu: [
        {
          name: 'Встречайте Tourney',
          link: `/${language}`,
        },
        {
          name: 'Torneios',
          link: `/${language}/find-tournaments`,
        },
        {
          name: 'Команды',
          link: `/${language}/how-to-use-tourney?tab=command`,
        },
        {
          name: 'Как использовать Tourney',
          link: `/${language}/how-to-use-tourney`,
        },
        {
          name: 'Спонсорство',
          link: `/${language}/sponsorships`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Инвесторы',
          link: `/${language}/investors`,
        },
        {
          name: 'Команда',
          link: `/${language}/team`,
        },
        {
          name: 'Связаться с нами',
          link: `/${language}/contact`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Условиях использования и Политика конфиденциальности',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Политика разрешения споров об авторском праве',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Политика использования файлов cookie',
          link: `/${language}/cookie-policy`,
        },
        {
          name: 'Лицензионное соглашение конечного пользователя',
          link: `/${language}/license-agreement`,
        },
      ],
    },
    {
      subMenu: [
        {
          link: '/dashboard',
          name: 'Панель управления',
          target: '_blank',
        },
      ],
    },
  ],
  // copyrightNotice: 'Copyright © game.tv. Все права защищены.',
  copyrightNotice: 'Copyright©game.tv. All rights reserved.',
};
