import { IHeaderLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.PORTUGUESE;
export const HeaderLocalePortuguese: IHeaderLocale = {
  link: `/${language}`,
  navigationMenu: [
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
    {
      name: 'Painel de Controle ',
      link: '/dashboard',
      target: '_blank',
    },
    {
      name: '',
      link: 'javascript:void(0)',
      classes: 'nav-search-block',
    },
    {
      name: 'Convidar o Tourney ',
      link:
        'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
      target: '_blank',
      classes: 'menu-box',
    },
  ],
  searchForm: {
    formPlaceholder: 'Pesquisar jogo por exemplo. Pubg',
    searchInfo: 'Ver torneios para ',
    noresult: 'Jogo não encontrado! Por favor, procure outro jogo.',
  },
};
