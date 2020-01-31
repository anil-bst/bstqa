import { ISponsorshipsLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const SponsorshipsLocalesChinese: ISponsorshipsLocale = {
  metadata: {
    title: 'Tourney和Game.tv提供的手遊電競贊助',
    description: 'Tourney和Game.tv提供的手遊電競贊助',
  },
  sponsorshipSection: {
    title: '為您的社群提供電子競技贊助',
    contents: [],
    imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship-banner.png',
  },
  playSponsorSection: {
    blocks: [
      {
        title: '玩家如何獲得贊助？',
        contents: [
          '當您在社區中進行聯賽時，Tourney會在安裝了Tourney的所有伺服器上追蹤每位選手的表現。 每個國家/地區在每個賽季結束前的前8名選手每個月都會獲得$ 500美金 /月的贊助。',
          '作為幫助這些玩家成長的社群獎勵，社群也將獲得獨家獎勵！',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/get-sponsorship.png',
        imageAlt: '獲得贊助',
      },
      {
        title: '贊助商',
        contents: [
          '隨著玩家在您伺服器的聯賽中競爭，他們將提升身分並獲得各種特權。 一旦達到鑽石級身分，便有資格獲得國家排行榜。 每個月都是一個新賽季，我們從全國排行榜中選擇前8名選手。 如果您的伺服器有世界各地的成員，也可以。 玩家需要在個人資料中驗證其居住國家，我們鼓勵您幫助您的社群做到這一點。',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship.png',
        imageAlt: '贊助商',
      },
    ],
  },
  verifiedBadgeSection: {
    blocks: [
      {
        title: '驗證徽章',
        contents: [
          '贏得銀牌的玩家將能夠獲得“已驗證”並在個人資料頁面上獲得特殊的徽章，以供所有人查看。 只有“已驗證”玩家才能加入鑽石級的行列並獲得贊助。',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/verified-badge.png',
        imageAlt: '驗證徽章',
      },
      {
        title: '聯賽',
        contents: [
          'Tourney將會在您的伺服器自行執行聯賽。 玩家將參加您使用uHost或透過aHost自動進行的活動。 Tourney可以透過聊天命令通知玩家他們的表現和身分組，或者玩家可以在Game.tv/users上查看其個人資料。',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/leagues-spons.png',
        imageAlt: '聯賽',
      },
    ],
  },
  leaderboardSection: {
    title: '國內排行榜',
    contents: [
      '您社群中的玩家將在您的社群聯賽中排名，但也可以透過Game.tv個人資料或使用“!myposition”命令來檢查自己在國內排行榜中的排名。 只有通過驗證的玩家才能夠進入全國排行榜',
    ],
    desktopImageUrl:
      'https://cdn.game.tv/images/meet-tourney/leaderboard-desk.png',
    mobImageUrl: 'https://cdn.game.tv/images/meet-tourney/leaderboard-mob.png',
  },
  tiersSection: {
    content: {
      title: '身分組',
      contents: [
        '當您的選手獲勝時，他們會在聯賽中升級並獲得各種特權。 一旦進入鑽石級，他們就有資格獲得國內排行榜的資格，並且每個月只要保持前8位，就可以獲得贊助。 玩家可以在個人資料中或透過呼叫“!myrating”指令來查看其評分。',
      ],
    },
    graphContent: {
      previousTitle: '過往的',
      nextTitle: '下一個',
      perksTitle: '篩選',
      forTitle: '對於',
      graphList: [
        {
          type: '銅牌',
          imageCaption: '銅牌',
          imageAlt: '銅牌',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: '積分 800 - 1300',
          perks: ['獨家Tourney表情', '個人資料和徽章'],
        },
        {
          type: '銀牌',
          imageCaption: '銀牌',
          imageAlt: '銀牌',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: '積分 1301 - 1800',
          perks: ['認證個人資料徽章'],
        },
        {
          type: '金牌',
          imageCaption: '金牌',
          imageAlt: '金牌',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: '積分 1800以上',
          perks: ['獨家Tourney表情'],
        },
      ],
    },
  },
};
