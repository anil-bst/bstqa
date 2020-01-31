import { IHeaderLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.FRENCH;
export const HeaderLocaleFrench: IHeaderLocale = {
  link: `/${language}`,
  navigationMenu: [
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
      name: 'Sponsors',
      link: `/${language}/sponsorships`,
    },
    {
      name: 'Tableau de bord',
      link: '/dashboard',
      target: '_blank',
    },
    {
      name: '',
      link: 'javascript:void(0)',
      classes: 'nav-search-block',
    },
    {
      name: 'Inviter Tourney',
      link:
        'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
      target: '_blank',
      classes: 'menu-box',
    },
  ],
  searchForm: {
    formPlaceholder: 'Chercher le jeu Pubg par exemple',
    searchInfo: 'Voir les tournois pour',
    noresult: 'Jeu non trouvé! Veuillez rechercher un autre jeu.',
  },
};
