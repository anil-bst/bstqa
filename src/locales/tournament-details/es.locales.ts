import { ITournamentDetailLocale } from '@app/abstractions';
export const TournamentDetailLocaleSpanish: ITournamentDetailLocale = {
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
      heading: 'Cómo unirse a un torneo de {{tournamentName}}',
      content: [
        'Ve al canal de texto #tournament-info en Discord para conocer los detalles del torneo.',
        'Haz clic en el #tournament-lobby en la parte inferior del #tournament-info del torneo',
        'Para participar en el torneo, escriba !register en el canal #tournament-lobby',
        'Tourney bot te enviará un mensaje directo; escribe !joinsolo <tu nombre de usuario en el juego> en MD',
        'Te has registrado con éxito en el torneo {{tournamentName}}.',
      ],
      imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
};
