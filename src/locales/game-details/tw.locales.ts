import { IGameDetailsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.CHINESE;

export const GameDetailsLocalesChinese: IGameDetailsLocale = {
  metadata: {
    title: '加入{{gameName}} 競賽| Game.tv',
    description: '加入每天在全球數百萬遊戲社群中運行的{{gameName}}錦標賽。',
  },
  gameDetail:
    '搜尋全球正由{{communityCount}}個社群經營的{{gameName}}電子競技比賽。 點擊“加入”以參加{{gameName}}錦標賽。',
  gameInfo: {
    title: '找不到您喜歡的比賽嗎？',
    content: '自行創建',
    linkUrl: `/${language}/create-a-tournament`,
    noTournamentsTitle: '糟糕！ 現在沒有即將舉行的錦標賽！',
    noTournamentsContent: '查看所有可用的比賽',
    noTournamentsLink: '直播中或是過往影片',
  },
  tournamentTitle: '錦標賽',
  platformStr: '平台',
  discord: 'DISCORD',
  vs: '與',
  joinHeading: '加入',
  viewMore: '查看更多',
  tournamentTypes: {
    heading: '{{gameName}} 錦標賽類型',
    blocks: [
      {
        content: '經典錦標賽（大廳風格）-單人、雙人和團隊 - 最多100名玩家',
        imageUrl: 'https://cdn.game.tv/tournaments/group-26.png',
      },
      {
        content: '特殊快攻（大廳風格）-單人-28位玩家',
        imageUrl: 'https://cdn.game.tv/tournaments/group-27.png',
      },
      {
        content: '團隊死亡競賽（大廳風格）-2個小隊-最多8名玩家',
        imageUrl: 'https://cdn.game.tv/tournaments/group-28.png',
      },
      {
        content: '感染模式（大廳風格）-12位玩家',
        imageUrl: 'https://cdn.game.tv/tournaments/group-29.png',
      },
    ],
  },
  prizeTypes: {
    heading: '{{gameName}} 錦標賽的獎勵類型',
    description:
      '這些比賽的獎品完全由主辦人承擔，有些主辦人可能只是為了娛樂而舉辦比賽，而沒有任何獎金，您可以在比賽頁面上找到獎品，以下是主辦人為各種{{gameName}}比賽而贈送的獎品。',
    blocks: [
      {
        content: '現金獎勵',
        imageUrl: 'https://cdn.game.tv/tournaments/group-13.png',
      },
      {
        content: 'Steam錢包代碼',
        imageUrl: 'https://cdn.game.tv/tournaments/group-24.png',
      },
      {
        content: '禮品卡-Google Play、亞馬遜、Steam...等等或者其它的',
        imageUrl: 'https://cdn.game.tv/tournaments/group-23.png',
      },
      {
        content: '訂閱代碼-Netflix、Apple Music以及Spotify',
        imageUrl: 'https://cdn.game.tv/tournaments/group-22.png',
      },
      {
        content: '還有更多',
        imageUrl: 'https://cdn.game.tv/tournaments/group-20.png',
      },
    ],
  },
  joinTournament: {
    heading: '如何參加 {{gameName}} 錦標賽',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: '步驟',
        stepsContent: [
          {
            stepItem:
              '前往Discord中的＃tournament-info文字頻道以了解比賽詳細資訊',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
          },
          {
            stepItem: '點擊＃tournament-info頻道底部的＃tournament-lobby',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
          },
          {
            stepItem: '想參加比賽，請在＃tournament-lobby頻道中輸入!register',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'Tourney 機器人將會傳給您一則私人訊息，請在私訊中輸入!joinsolo <您的遊戲ID>來報名比賽',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
          },
          {
            stepItem: '您已成功報名 {{gameName}} 錦標賽。',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Game.tv web app',
        stepsHeading: '步驟',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "前往<a href='/user' class='click-here'>Web App</a>並使用Discord或Twitter帳戶登入",
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
          },
          {
            stepItem:
              '在“比賽行事曆”的標籤下，您可以找到即將進行的{{gameName}}比賽列表。',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
          },
          {
            stepItem: '請點擊您想參加的比賽，您將在頁面底部看到一個“報名”按鈕',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              '請輸入您的IGN（遊戲內名稱），然後點擊頁面底部的“報名”按鈕。',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
          },
          {
            stepItem: '報名現已完成。',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
      },
    ],
  },
  startTournament: {
    heading: '如何開始{{gameName}}錦標賽',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: '步驟',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "在您的Discord伺服器中<a href='/user' class='click-here'>邀請Tourney</a>機器人，登入並點擊“授權”",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
          },
          {
            stepItem: '在左側的主選單中，點擊“創建比賽”按鈕',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/3.jpg',
          },
          {
            stepItem:
              '從各式各樣的錦標賽遊戲中進行選擇 - 點擊“自定義”按鈕來自定義錦標賽詳細資訊，或點擊“立即發布”以使用預設的錦標賽套版',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/4.jpg',
          },
          {
            stepItem:
              '在自定義比賽下，根據您的要求新增自定義比賽說明、規則和獎品',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/5.jpg',
          },
          {
            stepItem:
              '發布後，機器人將會在您的discord伺服器中自動創建＃tournament-info和＃tournament-lobby頻道，請在＃tournament-lobby文字頻道中輸入!register參加，並檢查{{gameName}}錦標賽創建是否成功。',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/6.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Game.tv web app',
        stepsHeading: '步驟',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              '訪問Web應用，點擊“使用Twitter / Discord登入”，然後點擊“授權”',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
          },
          {
            stepItem: '點擊螢幕底部控制欄中的“ +”圖標',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png',
          },
          {
            stepItem: '在左側的主選單中，點擊“創建比賽”按鈕',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              '從各式各樣的錦標賽遊戲中選擇。 您可以透過點擊“自定義”按鈕來自定義錦標賽詳細資訊，也可以點擊“立即發布”以使用預定義的錦標賽套版',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "發布後，您的{{gameName}}錦標賽將列在Game.tv Web App<a class='click-here' href='/user'>主頁</a>上",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
      },
    ],
  },
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
