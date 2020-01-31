import { ITournamentDetailLocale } from '@app/abstractions';
export const TournamentDetailLocaleVietnamese: ITournamentDetailLocale = {
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
      heading: 'Làm thế nào để tham gia giài đấu {{tournamentName}}',
      content: [
        'Vào kênh #tournament-info trong Discord để biết chi tiết giải đấu',
        'Nhấn vào #tournament-lobby ở bên dưới kênh #tournament-info',
        'Để tham gia giải đấu, hãy gõ !register trong channel #tournament-lobby',
        'Bot Tourney sẽ gửi cho bạn một tin nhắn trực tiếp (Direct Message - DM), bạn hãy gõ !joinsolo <tên-trong-game> tại đây',
        'Bạn đã đăng ký thành công cho giải đấu {{gameName}} ',
      ],
      imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
};
