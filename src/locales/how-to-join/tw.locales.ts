import { IHowToJoin } from '@app/abstractions';

export const HowToJoinChinese: IHowToJoin = {
  blocks: [
    {
      gamePlatform: 'Discord',
      type: 'discord',
      stepsHeading: '步驟',
      stepsContent: [
        {
          stepItem:
            '前往Discord中的＃tournament-info文字頻道以了解比賽詳細資訊',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
        },
        {
          stepItem: '點擊＃tournament-info頻道底部的＃tournament-lobby',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
        },
        {
          stepItem: '想參加比賽，請在＃tournament-lobby頻道中輸入!register',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
        },
        {
          stepItem:
            'Tourney 機器人將會傳給您一則私人訊息，請在私訊中輸入!joinsolo <您的遊戲ID>來報名比賽',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
        },
        {
          stepItem: '您已成功報名 {{howToJoinTitle}} 錦標賽。',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    {
      gamePlatform: 'Game.tv web app',
      type: 'web',
      stepsHeading: '步驟',
      stepsContent: [
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            "前往<a href='/user' class='click-here'>Web App</a>並使用Discord或Twitter帳戶登入",
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
        },
        {
          stepItem:
            '在“比賽行事曆”的標籤下，您可以找到即將進行的{{howToJoinTitle}}比賽列表。',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
        },
        {
          stepItem: '請點擊您想參加的比賽，您將在頁面底部看到一個“報名”按鈕',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
        },
        {
          stepItem:
            '請輸入您的IGN（遊戲內名稱），然後點擊頁面底部的“報名”按鈕。',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
        },
        {
          stepItem: '報名現已完成。',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
    },
  ],
};
