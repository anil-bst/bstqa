import { ITournamentDetailLocale } from '@app/abstractions';
export const TournamentDetailLocaleItalian: ITournamentDetailLocale = {
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
      heading: 'Come partecipare a un torneo {{tournamentName}}',
      content: [
        'Vai al canale di testo #tournament-info in Discord per conoscere i dettagli del torneo',
        'Fai clic su #tournament-lobby nella parte inferiore del canale #tournament-info channel',
        'Per partecipare al torneo, digitare! Registrati nel canale #tournament-lobby',
        'Tourney bot ti invierà un messaggio diretto; digita ! oinsolo & lt; il tuo nome utente in-game> in DM',
        'Ti sei registrato con successo al torneo {{tournamentName}}.',
      ],
      imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
};
