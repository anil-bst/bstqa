import { IFooterLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.PORTUGUESE;

export const FooterLocalePortuguese: IFooterLocale = {
  navigationMenu: [
    {
      subMenu: [
        {
          name: 'Conheça o Tourney ',
          link: `/${language}`,
        },
        {
          name: 'Torneios',
          link: `/${language}/find-tournaments`,
        },
        {
          name: 'Comandos ',
          link: `/${language}/how-to-use-tourney?tab=command`,
        },
        {
          name: 'Como utilizar o Tourney ',
          link: `/${language}/how-to-use-tourney`,
        },
        {
          name: 'Patrocínios',
          link: `/${language}/sponsorships`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Investidores ',
          link: `/${language}/investors`,
        },
        {
          name: 'Equipe ',
          link: `/${language}/team`,
        },
        {
          name: 'Entre em Contato ',
          link: `/${language}/contact`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Termos de Uso e Política de Privacidade',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Política de disputa de direitos autorais',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Política de Cookies',
          link: `/${language}/cookie-policy`,
        },
        {
          name: 'Contrato de Licença do Usuário Final',
          link: `/${language}/license-agreement`,
        },
      ],
    },
    {
      subMenu: [
        {
          link: '/dashboard',
          name: 'Painel de Controle ',
          target: '_blank',
        },
      ],
    },
  ],
  // copyrightNotice: 'Direitos autorais © game.tv. Todos os direitos reservados.',
  copyrightNotice: 'Copyright©game.tv. All rights reserved.',
};
