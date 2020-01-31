import { ITournamentDetailLocale } from '@app/abstractions';
export const TournamentDetailLocaleThai: ITournamentDetailLocale = {
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
      heading: 'วิธีเข้าร่วมทัวร์นาเมนต์ของ {{tournamentName}} ',
      content: [
        'ไปที่ #tournament-info text channel ใน Discord เพื่อดูรายละเอียดและข้อมูลการแข่งขัน',
        'คลิกที่ #tournament-lobby ด้านล่างของ #tournament-info channel',
        'เพื่อเข้าร่วมแข่งขัน พิมพ์คำสั่ง !register ใน #tournament-lobby channel',
        'Tourney bot จะส่ง Direct Message ถึงคุณพิมพ์คำสั่ง !joinsolo &lt;your in-game username> ใน DM',
        'เท่านี้ก็ลงทะเบียนเข้าร่วมการแข่งขัน {{tournamentName}} แล้ว',
      ],
      imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
};
