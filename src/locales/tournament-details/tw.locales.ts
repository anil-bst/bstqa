import { ITournamentDetailLocale } from '@app/abstractions';
export const TournamentDetailLocaleChinese: ITournamentDetailLocale = {
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
      heading: '如何參加 {{tournamentName}} 錦標賽',
      content: [
        '前往Discord中的＃tournament-info文字頻道以了解比賽詳細資訊',
        '點擊＃tournament-info頻道底部的＃tournament-lobby',
        '想參加比賽，請在＃tournament-lobby頻道中輸入!register',
        'Tourney 機器人將會傳給您一則私人訊息，請在私訊中輸入!joinsolo <您的遊戲ID>來報名比賽',
        '您已成功報名 {{tournamentName}} 錦標賽。',
      ],
      imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
};
