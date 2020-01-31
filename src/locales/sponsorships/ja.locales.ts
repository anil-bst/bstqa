import { ISponsorshipsLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const SponsorshipsLocalesJapanese: ISponsorshipsLocale = {
  metadata: {
    title: 'TourneyとGame.tvによるモバイルeスポーツスポンサーシップ',
    description: 'TourneyとGame.tvによるモバイルeスポーツスポンサーシップ',
  },
  sponsorshipSection: {
    title: `コミュニティ用の <br/> eスポーツ <br/> スポンサーシップ`,
    contents: [],
    imageUrl: `https://cdn.game.tv/images/meet-tourney/sponsorship-banner.png`,
  },
  playSponsorSection: {
    blocks: [
      {
        title: 'スポンサーシップを得るには',
        contents: [
          `コミュニティ内でリーグが開催されると、Tourneyがインストールされているすべてのコミュニティにおけるあらゆるプレイヤーの戦績がトラッキングされます。各シーズンの終わりに各国の上位8名のプレーヤーは、毎月5万円の支援金を受け取ります。`,
          `また、優れたプレイヤーを輩出したコミュニティにも特別な特典が贈られます！`,
        ],
        imageUrl: `https://cdn.game.tv/images/meet-tourney/get-sponsorship.png`,
        imageAlt: `スポンサーになる`,
      },
      {
        title: 'スポンサーシップ',
        contents: [
          `プレイヤーがコミュニティのリーグに参加する度に、プレイヤーのランクがアップグレードされ、様々な特典を得られるようになります。ランクがダイアモンドに達すると、国内リーダーボードへのアクセスが可能となります。毎月、全国のリーダーボードから上位8名のプレイヤーがGame.tvによって選出されます。尚、コミュニティに国外のメンバーが所属する場合でも適用されますが、国外のプレイヤーはプロフィールにて自身の居住国を証明する必要があります。`,
        ],
        imageUrl: `https://cdn.game.tv/images/meet-tourney/sponsorship.png`,
        imageAlt: `スポンサーシップ`,
      },
    ],
  },
  verifiedBadgeSection: {
    blocks: [
      {
        title: '認定バッジ',
        contents: [
          `ランクがシルバーになったプレイヤーは「認定済み」となり、プロフィールページにバッジが表示されます。ゴールドランクにてスポンサーシップを獲得できるのは「認定済み」プレイヤーのみとなります。`,
        ],
        imageUrl: `https://cdn.game.tv/images/meet-tourney/verified-badge.png`,
        imageAlt: `認定バッジ`,
      },
      {
        title: 'リーグ',
        contents: [
          `Tourneyはコミュニティのリーグ運営をサポートします。プレイヤーはUホストまたAIホスト（全自動）を介してトーナメントに参加します。
          自身の戦績とランクはチャットにてコマンドを用いて表示させるか、Game.tvのプロフィールにて確認可能です。
          `,
        ],
        imageUrl: `https://cdn.game.tv/images/meet-tourney/leagues-spons.png`,
        imageAlt: `リーグ`,
      },
    ],
  },
  leaderboardSection: {
    title: `プレイヤーランキング`,
    contents: [
      `プレイヤーは、コミュニティリーグ内での順位が与えられ、Game.tvのプロフィールからプレイヤーランキングを確認することができます。「!myrating」のコマンドを入力して表示することも可能です。尚、このランキングに入れるのは認定済みプレイヤーのみとなります。`,
    ],
    desktopImageUrl:
      'https://cdn.game.tv/images/meet-tourney/leaderboard-desk.png',
    mobImageUrl: 'https://cdn.game.tv/images/meet-tourney/leaderboard-mob.png',
    imageAlt: `プレイヤーランキング`,
  },
  tiersSection: {
    content: {
      title: 'ランク',
      contents: [
        `プレイヤーが勝利するたびに、リーグにおけるランクが上がり、さまざまな特典が適用されます。 ランクがダイヤモンドになると、プレイヤーランキングへのアクセスが可能となり、毎月上位8位に入ることで支援金を獲得できるようになります。 プレイヤーの評価はプロフィールで確認するか「!myrating」のコマンドで呼び出して確認できます。`,
      ],
    },
    graphContent: {
      previousTitle: '前',
      nextTitle: '次',
      perksTitle: '特典',
      forTitle: '前',
      graphList: [
        {
          type: 'ブロンズ',
          statusText: '',
          imageCaption: 'ブロンズ',
          imageAlt: 'ブロンズ',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: 'ELO 800 - 1300',
          perks: ['・プロフィールバッジ', 'Tourneyエモート'],
        },
        {
          type: 'シルバー',
          statusText: '',
          imageCaption: 'シルバー',
          imageAlt: 'シルバー',
          isPreviousPerkExcluded: true,
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: 'ELO 1301 - 1800',
          perks: ['プロフィールバッジ'],
        },
        {
          type: 'ゴールド',
          statusText: '近日公開',
          imageCaption: 'ゴールド',
          imageAlt: 'ゴールド',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: 'ELO 1800+',
          perks: ['プロフィールバッジ'],
        },
      ],
    },
  },
};
