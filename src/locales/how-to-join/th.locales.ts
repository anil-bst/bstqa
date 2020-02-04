import { IHowToJoin } from '@app/abstractions';

export const HowToJoinThai: IHowToJoin = {
  blocks: [
    {
      gamePlatform: 'Discord',
      type: 'discord',
      stepsHeading: 'Steps',
      stepsContent: [
        {
          stepItem:
            'ไปที่ #tournament-info text channel ใน Discord เพื่อดูรายละเอียดและข้อมูลการแข่งขัน',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
        },
        {
          stepItem:
            'คลิกที่ #tournament-lobby ด้านล่างของ #tournament-info channel',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
        },
        {
          stepItem:
            'เพื่อเข้าร่วมแข่งขัน พิมพ์คำสั่ง !register ใน #tournament-lobby channel',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
        },
        {
          stepItem:
            'Tourney bot จะส่ง Direct Message ถึงคุณพิมพ์คำสั่ง !joinsolo &lt;your in-game username> ใน DM',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
        },
        {
          stepItem:
            'เท่านี้ก็ลงทะเบียนเข้าร่วมการแข่งขัน {{howToJoinTitle}} แล้ว',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    {
      gamePlatform: 'Game.tv web app',
      type: 'web',
      stepsHeading: 'Steps',
      stepsContent: [
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            "ไปที่ <a href='/user' class='click-here'>Web App</a> แล้วลงชื่อเข้าใช้ผ่าน Discord หรือ Twitter account",
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
        },
        {
          stepItem:
            'ใต้แท็บปฏิทินการแข่งขันคุณสามารถดูรายชื่อทัวร์นาเมนต์ของเกม {{howToJoinTitle}}',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
        },
        {
          stepItem:
            'คลิกที่ทัวร์นาเมนต์ที่คุณต้องการเข้าร่วม จะพบปุ่ม ลงทะเบียน ด้านล่างของหน้าจอ',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
        },
        {
          stepItem:
            'กรอกข้อมูล IGN (IN-GAME NAME) แล้วคลิกที่ปุ่ม Register ด้านล่างของหน้าจอ',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
        },
        {
          stepItem: 'ลงทะเบียนสำเร็จ',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
    },
  ],
};
