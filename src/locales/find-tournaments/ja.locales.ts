import { IFindTournamentLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.JAPANESE;

export const FindTournamentLocalesJapanese: IFindTournamentLocale = {
  metadata: {
    title: 'eスポーツトーナメントを発見 - 無料でエントリー（Game.tv）',
    description:
      '全世界で開催されている無料のeスポーツトーナメントを検索しよう。',
  },
  heading: 'トーナメントの閲覧',
  content:
    '無数のDiscordサーバー上で開催されているモバイル＆PCゲームのeスポーツトーナメントを見つけよう！',
  searchForm: {
    formPlaceholder: 'PUBG MOBILEの類似ゲームを検索',
    searchInfo: '該当ゲームのトーナメントを表示',
    noresult: 'ゲームが見つかりません。他のゲームを選択してください。',
  },
  gameInfo: {
    title: 'ご希望のトーナメントがありませんか？',
    content: '自分のトーナメントを作成する。',
    noTournamentsTitle: '現在エントリー可能なトーナメントはありません。',
    noTournamentsContent: 'エントリー可能なトーナメントをすべて表示',
    noTournamentsLink: '現在開催中、または過去のトーナメント',
    linkUrl: `/${language}/create-a-tournament`,
  },
  topGameSection: { title: '人気のゲーム' },
  tournamentTitle: 'トーナメント',
  platformStr: 'プラットフォーム',
  joinHeading: '参加する',
  viewMore: 'さらに表示',
  gamePageUrl: `/${language}/find-tournaments`,
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
