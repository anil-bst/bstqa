import { ICommunityTournamentsType } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.JAPANESE;

export const CreateATournamentLocalesLocaleJapanese: ICommunityTournamentsType = {
  metadata: {
    title: 'モバイルeスポーツトーナメント（Game.tv）の開催方法',
    description:
      'Game.tvのDiscordボットTourneyまたはGame.tvアプリを使って自分だけのトーナメント開催しよう。',
  },
  heroSection: {
    heading: '作成 - 運営 - プレイ',
    content:
      '自身のDiscordコミュニティ内またはGame.tvのアプリ上でトーナメントを簡単に作成可能。',
    bannerDeskTopImageUrl: 'https://cdn.game.tv/create_tournament/banner.png',
    bannerMobImageUrl: 'https://cdn.game.tv/create_tournament/banner-mob.png',
  },
  discordSection: {
    heading: 'Discord',
    content:
      '自身のDiscordコミュニティ内でトーナメントを開催した場合、参加プレイヤーの手順はサーバー内ですべて完結します。エントリー、チェックイン、対戦は設定された役職とDMを通して行われます。また、Tourneyによって公平なマッチメイキングが行われます。試合終了後、プレイヤーは自分の順位とGELOスコアをプロフィールページで確認することができます。',
    btnText: 'ウェブアプリで参加',
    steps: [
      {
        title: 'Tourneyをサーバーに加えて、',
        linkString: 'ダッシュボードにアクセスします。',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step1.png',
        linkUrl: '/dashboard',
      },
      {
        title: '「トーナメントの作成」を押してゲームを選択します。',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step2.png',
      },
      {
        title:
          'テンプレートリストから該当のゲームを選び、内容の編集を行います。',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step3.png',
      },
      {
        title:
          '「作成」を押すと、Tourneyによってルームまたは組み合わせ表がDiscordサーバー内に作成されます。',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step4.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/discord_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/discord.png',
  },
  gameSection: {
    heading: 'Game.tvアプリ',
    content:
      'Discordサーバーを持っておらず、Discord以外からプレイヤーを招待したい場合、Game.tvアプリを使ってのトーナメント作成がお勧めです。こちらもDiscord版と同様にTourneyによってトーナメントの作成、運営、管理が行われます。開催者と参加プレイヤーは、今後行われる試合、マッチメイキング、組み合わせ表の更新に関する通知を直接受け取ります。また自身のTwitterアカウントとの連携も可能で、試合に関する情報の共有を行ったり、Twitterから直接トーナメントにエントリーしてもらうこともできます。',
    btnText: 'アプリの起動',
    steps: [
      {
        title: 'Game.tvに',
        linkString: 'アクセスします。',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step1.png',
        linkUrl: '/user',
      },
      {
        title: 'ログインして画面下部にある「+」のアイコンを押します。',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step2.png',
      },
      {
        title:
          'テンプレートリストから該当のゲームを選び、内容の編集を行います。',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step3.png',
      },
      {
        title:
          '「作成」を押すと、Tourneyによってルームまたは組み合わせ表がDiscordサーバー内に作成されます。',
        imgUrl: 'https://cdn.game.tv/crete_tournament/step-4-1-new.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/game_global_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/game.png',
  },
  locales: `/${language}`,
};
