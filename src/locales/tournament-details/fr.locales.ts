import { ITournamentDetailLocale } from '@app/abstractions';
export const TournamentDetailLocaleFrench: ITournamentDetailLocale = {
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
      heading: 'Comment rejoindre un tournoi {{tournamentName}}',
      content: [
        'Accédez au salon textuel #tournament-info dans Discord pour connaître les détails du tournoi',
        'Cliquez sur #tournament-lobby en dessous du salon #tournament-info',
        'Pour participer au tournoi, tapez !register dans le salon #tournament-lobby',
        'Tourney vous enverra un Message Privé, tapez !joinsolo &lt;your in-game username> en MP',
        'Vous vous êtes inscrit avec succès au tournoi {{tournamentName}}.',
      ],
      imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
};
