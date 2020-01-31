import { ITournamentDetailLocale } from '@app/abstractions';
export const TournamentDetailLocaleTurkish: ITournamentDetailLocale = {
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
      heading: '{{tournamentName}} Turnuvasına Nasıl Katılırım?',
      content: [
        `Turnuva ayrıntıları için Discord'ta yer alan #turnuva-bilgisi kanalına gidin`,
        `#turnuva-bilgi kanalının altındaki #turnuva-lobisi'ne tıklayın`,
        'Turnuvaya katılmak için, #turnuva-lobisi kanalına!',
        `Tourney Botu size bir özel mesaj gönderecek, buraya; !joinsolo &lt;oyun içi gerçek adınız>'ı yazıp, bu mesaja cevap verin.`,
        '{{gameName}} turnuvasına başarıyla kayıt oldunuz.',
      ],
      imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
};
