import { ITournamentDetailLocale } from '@app/abstractions';
export const TournamentDetailLocaleGerman: ITournamentDetailLocale = {
  metadata: {
    title: 'License Agreement - Game.tv',
    description: 'Game.tv License Agreement',
  },
  linkToAllTournaments: 'All Tournaments',
  noPrizeInfo: 'see more',
  registerSection: {
    heading: 'Click ‘Register’ to get a seat in the tournament.',
    btnText: 'Register',
  },
  videoSection: {
    heading: 'Tournament Stream',
  },
  details: {
    detailsSectionHeading: 'Details',
    ruleSectionHeading: 'Rules',
    howToJoinSection: {
      heading: 'Wie nehme ich an einem {{tournamentName}} Turnier teil?',
      content: [
        'Gehe zum #tournament-info Textkanal in Discord, um mehr über Turnierdetails zu erfahren',
        'Klicke unten im #tournament-info Kanal auf #tournament-lobby',
        'Um am Turnier teilzunehmen, gib !register im #tournament-lobby Kanal ein',
        'Tourney-Bot sendet dir eine Direktnachricht. Gib !joinsolo &lt;deinen Benutzernamen im Spiel> in der DM ein',
        'Du hast dich erfolgreich für das {{tournamentName}} Turnier angemeldet.',
      ],
      imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
};
