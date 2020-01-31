import { ITournamentDetailLocale } from '@app/abstractions';
export const TournamentDetailLocaleJapanese: ITournamentDetailLocale = {
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
      heading: '{{tournamentName}}のトーナメントへのエントリー方法',
      content: [
        'Discordの#tournament-infoチャンネルにてトーナメントの詳細を確認することができます。',
        '#tournament-infoチャンネルの下にある#tournament-lobbyをクリックしてください。',
        'トーナメントにエントリーする際は、#tournament-lobbyチャンネルにて「!register」と入力します。',
        'TourneyボットによってDM（ダイレクトメッセージ）が送信されたら、DM内にて!joinsolo <ゲームで使用しているユーザー名>を入力します。',
        '{{tournamentName}}のトーナメントにエントリーしました。',
      ],
      imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
};
