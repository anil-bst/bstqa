import { IFindTournamentLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.FRENCH;

export const FindTournamentLocalesFrench: IFindTournamentLocale = {
  metadata: {
    title:
      'Trouver des Tournois Esports - Pas de frais de Participation | Game.tv',
    description:
      'Recherchez des tournois esports auxquels vous pouvez participer gratuitement et qui se déroulent dans le monde entier.',
  },
  heading: 'Parcourir les tournois',
  content:
    'Trouvez des tournois esports qui se déroulent sur des millions de serveurs Discord sur des dizaines de jeux mobiles et PC. ',
  searchForm: {
    formPlaceholder: 'Chercher le jeu Pubg par exemple',
    searchInfo: 'Voir les tournois pour',
    noresult: 'Jeu non trouvé! Veuillez rechercher un autre jeu.',
  },
  gameInfo: {
    title: 'Vous ne voyez pas de tournoi auquel vous aimeriez participer?',
    content: 'Créez le votre',
    noTournamentsTitle:
      // tslint:disable-next-line: quotemark
      "Oups! Aucun tournoi à venir n'est disponible pour le moment!",
    noTournamentsContent: 'Voir tous les tournois disponibles',
    noTournamentsLink: 'En ligne ou Passé',
    linkUrl: `/${language}/create-a-tournament`,
  },
  topGameSection: { title: 'Top Games' },
  tournamentTitle: 'Tournois',
  platformStr: 'PLATEFORME',
  joinHeading: 'REJOINDRE',
  viewMore: 'Afficher plus',
  gamePageUrl: `/${language}/find-tournaments`,
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
