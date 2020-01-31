import { IHomeLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.JAPANESE;
export const HomeLocaleJapanese: IHomeLocale = {
  metadata: {
    title: 'Tourney - AIを搭載したeスポーツ Discordボット',
    description:
      'トーナメントボットであるTourneyを使用して、あらゆるゲームコミュニティで数千のモバイルEsportsトーナメントを開催し、実行します。',
  },
  heroSection: {
    extraHeadingClasses: 'ja-heading',
    heading: 'Game.tvとは',
    content: `AI機能が搭載されたモバイルeスポーツプラットフォームです。SNSとのシームレスな連携により、コミュニティ大会の運営をサポートします。ウェブアプリをダウンロードいただくか、AIボットのTourneyをDiscordサーバーに追加してご利用いただけます。`,
    appLaunchButtons: [
      {
        link: '/user',
        name: 'ウェブアプリで参加',
        logoUrl: 'https://cdn.game.tv/global.png',
        logoExtraClasses: 'global-logo',
        extraClasses: 'alternate-background',
      },
      {
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Tourneyを追加',
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        logoExtraClasses: 'discord-logo',
      },
    ],
    discoverButtonTitle: '詳細を見る',
  },
  whyTourneySection: {
    heading: 'Tourneyとは',
    content: `対戦相手のマッチング、チャットルームの作成、勝敗の確認方法など、トーナメントの運営には様々な問題が付きまといます。
      Tourneyは大会の進行を大きくアシストする優れたAI機能が備わったボットです。ゲームの種類、大会の形式などに応じて半自動と全自動モードのAI機能を選択することができます。Tourneyを活用することにより、スムーズで楽しいコミュニティ大会の運営が可能となります。
      `,
  },
  uHostSection: {
    heading: 'Uホスト、Uホスト（AIアシスト）、AIホスト',
    content:
      '3つの異なるメイントーナメントモードが用意されており、好みに応じて大会進行を行うことができます。',
    hostTypes: [
      {
        heading: 'Uホスト',
        imageAlt: 'Uホスト',
        content: `トーナメントテンプレートから選択するか、独自にカスタマイズすることができます。Tourneyによってチャンネルが作成され、指定の役職にDMが送られます。`,
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost.png',
      },
      {
        heading: 'Uホスト（AIアシスト）',
        imageAlt: 'Uホスト（AIアシスト）',
        content: `Tourneyが大会進行のアシストを行い、試合の合間に各プレイヤーにガイダンスが提供されます。`,
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost-assistant.png',
      },
      {
        heading: 'AIホスト',
        imageAlt: 'AIホスト',
        content: `Tourneyによってゲーム、時間、形式が選択されます。また、大会は最初から最後まですべて自動で進行します。`,
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/ai-Host.png',
      },
    ],
    templateSection: {
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/templates.png',
      imageAlt: 'テンプレート',
      heading: 'テンプレート',
      content: `あらかじめ設定されたデフォルトのトーナメントテンプレートがゲーム毎に多数用意されています。これらのテンプレートは自由に編集することができます。`,
    },
    messagingSection: {
      imageAlt: 'DM',
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/dms.png',
      heading: 'DM',
      content: `ゲーム固有の役職、または開催者が指定した特定の役職宛てにTourneyからメッセージが送信されます。大会の進行はすべてTourneyが新たに作成するチャンネル内にて行われ、ロビーへの招待とマッチメイキングはDM経由で送信されます。`,
    },
  },
  perksSection: {
    heading: `特典`,
    content: `Tourneyを使ってトーナメントを開催し続けることでランクが上がり、ランクに応じた特典を受けられます。`,
    perksList: [
      {
        content: `たくさんのトーナメントを <br/> 運営すると特典をもらえる  <br/> ティアシステム！`,
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/perk-tournaments.png',
        imageAlt: 'やりがいのあるトーナメント層',
      },
      {
        content: `大会を簡単にライブ配信できるOBSプラグインも用意！`,
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-obs.png',
        imageAlt: 'ストリーミング用の社内OBSプラグイン',
      },
      {
        content: `リーグ運営も <br/> サポートしています！`,
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-league.png',
        imageAlt: 'リーグを整理しよう！',
      },
    ],
  },
  graphsSection: {
    heading: 'ランク',
    content: `Tourneyを使ってトーナメントを開催し続けることでランクが上がり、ランクに応じて得られる特典も豪華になっていきます。 ランクはGame.tv Discordコミュニティのプレイヤーランキングに表示されます。昇級するとさらに豪華な特典が付与されます。 `,
    graphContent: {
      previousTitle: '前',
      nextTitle: '次',
      perksTitle: '特典',
      forTitle: '前',
      graphList: [
        {
          type: 'bronze',
          imageCaption: 'ブロンズ',
          imageAlt: 'ブロンズ',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: '1～5大会/週を開催',
          perks: ['Tourneyエモート機能s', 'プロフィールとバッジ'],
        },
        {
          type: 'silver',
          imageCaption: 'シルバー',
          imageAlt: 'シルバー',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: '6～10大会/週を開催',
          perks: ['ベーシックOBSプラグイン', 'Tourney AI解放'],
        },
        {
          type: 'gold',
          imageCaption: 'ゴールド',
          imageAlt: 'ゴールド',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: '10大会以上/週を開催',
          perks: ['賞金スポンサーシップの権利'],
        },
      ],
    },
  },
  tourneyEmotesSection: {
    heading: 'Tourneyエモート',
    content: `ブロンズで解放される機能で、コミュニティにて、<br /> 42種類の高解像度エモートの使用が可能となります。`,
  },
  profilesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/profiles.png',
        heading: 'プロフィール',
        imageAlt: 'プロフィール',
        content: `ブロンズで解放される機能で、トーナメントに参加しているプレイヤーは、プロフィールへのアクセスが可能となります。プロフィールには、プレイしたゲーム、戦績、プレイヤー評価が表示されます。プレイヤー評価はマッチメイキングとリーグの進行に影響します。`,
      },
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/badges.png',
        heading: 'バッジ',
        imageAlt: 'バッジ',
        content: `ELOの増加、トーナメント勝利、賞品の獲得を達成することでプレイヤーにはバッジが贈られます。バッジのランクが上がるにつれて獲得できる特典もより一層豪華になります。`,
        reverse: true,
      },
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/obs-plugin.png',
        heading: 'ベーシックOBSプラグイン',
        imageAlt: 'ベーシックOBSプラグイン',
        content: `ランクがシルバーになると、動画配信用のベーシックOBSプラグインが解放されます。OBSを利用して大会を配信することで、組み合わせ表と勝者がリアルタイムで動画に反映されます。`,
      },
    ],
  },
  tourneyAiSection: {
    heading: 'AIホスト',
    content1: `AIホストはゴールド達成時に解放される機能で、有効にすることでTourneyを用いてコミュニティで自動的にトーナメントを進行させることが可能となります。`,
    content2: `※ランクに影響するのはUホストトーナメントのみとなります。`,
  },
  leaguesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/leagues.png',
        heading: 'リーグ',
        imageAlt: 'リーグ',
        content: `銀到達時に解放される機能で、Tourneyを用いてコミュニティにおいてリーグ全体を運営することができるようになります。 コミュニティのプレイヤーには同等のランクで競い合う機会が与えられ、国内リーダーボードにて上位8名に入った場合、毎月スポンサーシップを獲得できます。`,
      },
    ],
  },
  getBoostedSection: {
    heading: 'サーバーブーストをゲット',
    content:
      'シルバーランクに到達すると、Discordサーバーに対してブーストが2つ与えられ、レベル1の特典を獲得できます。毎週（月～金曜日）7つ以上のトーナメントを開催することでブーストを受け続けられます。開催トーナメントが毎週7つを下回った場合、ブーストを受けられなくなる場合があります（7つ以上のトーナメントを開催することで再度ブーストを受けられます）。また、Tourney AIを用いてコミュニティ内でリーグを作成、運営できるようにもなります。',
    imgDesktopUrl: 'https://cdn.game.tv/images/meet-tourney/get-boosted.png',
    imgMobile1Url:
      'https://cdn.game.tv/images/meet-tourney/get-boosted-mob1.png',
    imgMobile2Url:
      'https://cdn.game.tv/images/meet-tourney/get-boosted-mob2.png',
    backgroundImgUrl:
      'https://cdn.game.tv/images/meet-tourney/get-boosted-bg.png',
    getBoostedLevels: {
      perks: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-white.png',
        heading: 'レベル1の特典',
        mainlabel: 'が解放されました',
        subheading: 'ブーストを受けたサーバーには以下の特典が含まれます。',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/emoji.png',
            label: '50以上の絵文字スロット（合計100)',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/audio.png',
            label: '128kbpsの音質',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/gif-icon.png',
            label: 'アニメーション付きのサーバーアイコン',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/server.png',
            label: 'カスタム仕様のサーバー招待背景',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/live.png',
            label: '720p 60fpsのGo Live配信',
          },
        ],
      },
      boostedServer: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-gold.png',
        heading: 'サーバーブーストの付与',
        subheading: '注意事項',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'トーナメントはUホストまたはUホスト（AIアシスト）で開催する必要があります。AIホストのトーナメントは週間の平均値にカウントされません。',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'トーナメントの参加者は定員の半数を満たしている必要があります。（定員が16名のトーナメントの場合、最低8名のプレイヤーが出場する必要があります。半数を下回った場合は週間の平均値にはカウントされません）',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'トーナメントの平均開催数は毎週チェックされます。1日に3つトーナメントを開催してもカウントされるのは1つになります。',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              '月曜日～金曜日（太平洋時間）にトーナメントの平均開催数が7を下回った場合、ブーストの付与は無くなる場合があります。',
          },
        ],
      },
    },
  },
  availableGamesSection: {
    heading: 'ゲーム一覧',
    content: '（今後も追加）',
    viewMoreGames: 'もっと見る',
    appLaunchButtons: [
      {
        link: 'https://game.tv/user',
        name: 'ウェブアプリで参加',
        logoUrl: 'https://cdn.game.tv/global.png',
        logoExtraClasses: 'global-logo',
        extraClasses: 'alternate-background',
      },
      {
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Tourneyを追加',
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        logoExtraClasses: 'discord-logo',
      },
    ],
  },
  gamelink: `/${language}/find-tournaments`,
};
