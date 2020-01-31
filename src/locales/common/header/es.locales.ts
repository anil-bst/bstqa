import { IHeaderLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.SPANISH;
export const HeaderLocaleSpanish: IHeaderLocale = {
  link: `/${language}`,
  navigationMenu: [
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
    {
      name: 'Tablero',
      link: '/dashboard',
      target: '_blank',
    },
    {
      name: '',
      link: 'javascript:void(0)',
      classes: 'nav-search-block',
    },
    {
      name: 'Invita a Tourney',
      link:
        'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
      target: '_blank',
      classes: 'menu-box',
    },
  ],
  searchForm: {
    formPlaceholder: 'Buscar juego, ej. Pubg',
    searchInfo: 'Ver torneos para',
    noresult: '¡Juego no encontrado! Por favor busca otro juego.',
  },
};
