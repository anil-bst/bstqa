import { IHomeLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.CHINESE;
export const HomeLocaleChinese: IHomeLocale = {
  metadata: {
    title: 'Tourney-為電競而生的AI Discord 機器人',
    description:
      '使用我們的錦標賽機器人Tourney在任何遊戲社群中主持和進行數千個手遊電競賽事。',
  },
  heroSection: {
    heading: '遇見Tourney',
    content: '由AI驅動的電競助手，他負責您的比賽，因此您可以專注在社群上',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/global.png',
        logoExtraClasses: 'global-logo',
        link: '/user',
        name: '啟動 App',
        extraClasses: 'alternate-background',
      },
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        logoExtraClasses: 'discord-logo',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: '邀請 Tourney',
      },
    ],
    discoverButtonTitle: '發現更多',
  },
  whyTourneySection: {
    heading: '為什麼選擇 Tourney',
    content:
      '為遊戲社群舉辦比賽是艱難的， 除了要追蹤誰與誰正在對戰、哪個大廳加入、最公平的對決是什麼、誰又贏了多少，Tourney將作為您的助手或完全基於您所在社群的自己來舉辦比賽。 他強大的AI和功能可以幫助您建立一個更強大，更有趣的社群。',
  },
  uHostSection: {
    heading: 'uHost，uHost AI助手和AI-Host',
    content: '三種主要的比賽模式讓您完全自由地運行賽事。',
    hostTypes: [
      {
        heading: '您主持',
        imageAlt: 'uHost',
        content:
          '從比賽模組中選擇或自訂您自己的模組。 發布後，Tourney將創建所有頻道，並私訊你想要他們動起來的身分組。',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost.png',
      },
      {
        heading: 'uHost AI-助手',
        imageAlt: 'uHost AI-Assistant',
        content:
          'Tourney可幫助您主持賽事，並在每場比賽之間為每位選手提供指引，甚至更多。',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost-assistant.png',
      },
      {
        heading: 'AI主持人',
        imageAlt: 'aiHost',
        content: 'Tourney將會選擇比賽，時間，形式，並完全自始至終地運行比賽。',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/ai-Host.png',
      },
    ],
    templateSection: {
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/templates.png',
      imageAlt: 'Templates',
      heading: '模組',
      content:
        'Tourney附加了許多預先設置的錦標賽模組，因此您可以單擊“發布並繼續”。',
    },
    messagingSection: {
      imageAlt: 'DMs and Messaging',
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/dms.png',
      heading: '私訊以及傳遞訊息',
      content:
        'Tourney可以向遊戲特定身分組或您選擇的任何身分組發送消息，以通知他們有關新比賽的訊息。 所有的組織活動都在Tourney創建的新頻道中進行，所有大廳邀請和配對都是透過私訊發送的。',
    },
  },
  perksSection: {
    heading: '篩選',
    content: '沒有大量的篩選，Tourney就不會完整。',
    perksList: [
      {
        content: '舉辦大量比賽？ 太好了，我們有一個獎勵您的等級系統。',
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/perk-tournaments.png',
        imageAlt: '獎勵比賽等級',
      },
      {
        content: '直播您的比賽嗎？真棒！我們有一個OBS插件可以用來顯示',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-obs.png',
        imageAlt: '內部OBS插件進行直播串流',
      },
      {
        content: '想在您的服務器上舉辦聯賽嗎？ 答對了，我們也有！',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-league.png',
        imageAlt: '組織聯賽！',
      },
    ],
  },
  graphsSection: {
    heading: '身分組',
    content:
      '使用Tourney進行的比賽越多，您獲得的獎勵就越多。 您的身分組將顯示在Game.tv Discord伺服器的排行榜中，並且當您跳到下一個身分組時，您會收到每套特權。',
    graphContent: {
      previousTitle: '過往的',
      nextTitle: '下一步',
      perksTitle: '篩選',
      forTitle: '對於',
      graphList: [
        {
          type: 'bronze',
          imageCaption: '銅牌',
          imageAlt: 'Bronze',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: '每週1-6場比賽',
          perks: ['獨家Tourney表情', '個人資料和徽章', '解鎖Tourney AI'],
        },
        {
          type: 'silver',
          imageCaption: '銀牌',
          imageAlt: 'Silver',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: '每週7場以上比賽',
          perks: ['為您的Discord伺服器增加2種Nitro功能', '解鎖聯賽'],
        },
        {
          type: 'gold',
          imageCaption: '金牌',
          imageAlt: 'Gold',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: '擁有300個或更多單獨參賽者/季',
          perks: ['保證的聯賽獎金贊助'],
        },
      ],
    },
  },
  tourneyEmotesSection: {
    heading: 'Tourney 表情',
    content:
      '在解鎖銅牌後，您可以在服務器中使用42種驚人的高解析度表情。 它們經過特別訂製，夠潮，並且已經蓄勢待發了。',
  },
  profilesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/profiles.png',
        heading: '個人資料',
        imageAlt: 'Profiles',
        content:
          '在解鎖銅牌後，在您錦標賽中的選手會自動獲得他們可以自定義的個人資料。 每個人的資料都顯示了他們所玩過的遊戲，獲勝、失敗記錄以及玩家評分。 選手評分有助於配對和聯賽發展。',
      },
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/badges.png',
        heading: '徽章',
        imageAlt: 'Badges',
        content:
          '贏得遊戲並獲得徽章以炫耀您的技能。 隨著您的分級制度的分數增加或您贏得比賽和獎品，您會在個人資料中獲得專屬徽章，有時還會附帶一些超級秘密和專屬額外特權。',
        reverse: true,
      },
    ],
  },
  tourneyAiSection: {
    heading: 'Tourney AI',
    content1:
      '達到銅牌後，即可解鎖AI-Host，啟用AI-Host，Tourney可以自動在您的社群中進行錦標賽。 請記住，只有您主辦錦標賽才會計算您的等級進度。 AI-Host錦標賽不計算在內（但它們很棒，您應該將它們與uHost一起運行）。',
    content2: '',
  },
  leaguesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/league.png',
        heading: '聯賽',
        imageAlt: 'Leagues',
        content:
          '解鎖金牌，Tourney可以在您的服務器中執行整個聯賽。 如果您的伺服器上的玩家在全國排行榜中排名前8位，則他們將有機會在並行系統上競爭並獲得每月贊助。',
      },
    ],
  },
  getBoostedSection: {
    heading: '獲得提升',
    content:
      '達到銀級，我們將為您的Discord伺服器特權，使您獲得那些超棒的1級特權。 只要您每週（週一至週日）舉辦七場或更多比賽，我們將不斷提升您的伺服器水平。 如果您每週下降到七個錦標賽以下，我們可能會取消您的晉級直到您回到七個或更多。 此外，您還可以使用Tourney的AI為社群創建及進行聯賽的功能。',
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
        heading: '1級特權',
        mainlabel: '解鎖',
        subheading: '提高的伺服器特權包括-',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/emoji.png',
            label: '+50個伺服器表情符號（總計100個）',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/audio.png',
            label: '128 Kbps音訊品質',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/gif-icon.png',
            label: '動漫化伺服器圖標',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/server.png',
            label: '自定義伺服器邀請背景',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/live.png',
            label: '720p 60fps直播品質',
          },
        ],
      },
      boostedServer: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-gold.png',
        heading: '有資格獲得增強型伺服器',
        subheading: '您需要知道的-',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              '比賽必須是uHost或uHost AI-Assistant，而AI-Host比賽則不能\n計入您的每週平均值。',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              '比賽必須至少有50％的參與率才能參賽。 （這意味著如果\n錦標賽有16個席位，至少有8個人需要參加\n比賽計入您的每週平均值。',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              '我們查看您每週的平均比賽數。 舉辦三場比賽\n一天又四天的比賽與每天進行一次比賽相同。',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              '如果您的錦標賽平均水平低於7在限定條件下，則贊助獎金可能會被取消\n週一至週五（太平洋時間）一週。',
          },
        ],
      },
    },
  },
  prizeSponsorshipSection: {
    items: [
      {
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/prize-sponsorships.png',
        heading: '獎勵贊助',
        imageAlt: 'LeagPrize贊助發起',
        content:
          '透過在您的社群中進行聯賽獲得金牌後，我們將為每個日曆上月份的長賽季贊助聯賽獎項。 獎品將來自我們很棒的合作夥伴，例如MSI、英特爾和數百家遊戲開發商，其中包括現金、禮品卡、硬體、商品或遊戲內物品。',
      },
    ],
  },
  availableGamesSection: {
    heading: '可用遊戲',
    content: '每週新增更多',
    viewMoreGames: '查看更多',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: '邀請 Tourney',
      },
    ],
  },
  gamelink: `/${language}/find-tournaments`,
};
