import { ITournamentDetailLocale } from '@app/abstractions';
export const TournamentDetailLocaleEnglish: ITournamentDetailLocale = {
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
      heading: 'How to Join',
      content: [
        'Go to the #tournament-info text channel in Discord to know about tournament details',
        'Click on #tournament-lobby at the bottom of #tournament-info channel',
        'To participate in the tournament, type !register in #tournament-lobby channel',
        'Tourney bot will send you a Direct Message; type !joinsolo <your in-game username> in DM',
        'You have successfully registered for the {{tournamentName}} tournament.',
      ],
      imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
};
