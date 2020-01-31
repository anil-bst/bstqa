import { IGameDetailsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.THAI;

export const GameDetailsLocalesThai: IGameDetailsLocale = {
  metadata: {
    title: 'เข้าร่วม {{gameName}} Esports Tournaments | Game.tv',
    description:
      'เข้าร่วม {{gameName}} ทัวร์นาเมนต์รายวันที่จัดแข่งขันในคอมมูนิตี้ทั่วโลก',
  },
  gameDetail:
    'ค้นหาคอมมูนิตี้ที่จัดแข่งเกม {{gameName}} eจากทั้งหมด {{communityCount}} คอมมูนิตี้ ทั่วโลก คลิก ‘Join’ เพื่อเข้าร่วมแข่งขันในทัวร์นาเมนต์ {{gameName}} ',
  gameInfo: {
    title: 'ไม่พบทัวร์นาเมนต์ที่คุณค้นหา',
    content: 'สร้างของคุณ',
    linkUrl: `/${language}/create-a-tournament`,
    noTournamentsTitle: 'อุ๊บส์! ไม่มีทัวร์นาเมนต์ที่เล่นได้ในขณะนี้!',
    noTournamentsContent: 'ดูทุกทัวร์นาเมนต์ที่เล่นได้',
    noTournamentsLink: 'สด หรือ สิ้นสุดแล้ว',
  },
  tournamentTitle: 'ทัวร์นาเมนต์',
  platformStr: 'แพลทฟอร์ม',
  discord: 'DISCORD',
  vs: 'VS',
  joinHeading: 'เข้าร่วม',
  viewMore: 'ดูเพิ่ม',
  tournamentTypes: {
    heading: '{{gameName}} ประเภทการแข่งขัน',
    blocks: [
      {
        content:
          'Classic Tournament (lobby style) - Solo, Duo และ Squad- สูงสุด 100 players',
        imageUrl: 'https://cdn.game.tv/tournaments/group-26.png',
      },
      {
        content: 'Erangle Quick Match (lobby style) - Solo - 28 players',
        imageUrl: 'https://cdn.game.tv/tournaments/group-27.png',
      },
      {
        content: 'Team Deathmatch (lobby style) - 2 Squads - 8 players max',
        imageUrl: 'https://cdn.game.tv/tournaments/group-28.png',
      },
      {
        content: 'Infection Mode (lobby style) - 12 players',
        imageUrl: 'https://cdn.game.tv/tournaments/group-29.png',
      },
    ],
  },
  prizeTypes: {
    heading: 'ประเภทรางวัลของเกม {{gameName}}',
    description:
      'รางวัลของแต่ละการแข่งขันขึ้นอยู่กับผู้จัดการแข่งขัน บางการแข่งขันอาจจัดขึ้นเพื่อความสนุกสนานเท่านั้นโดยไม่มีรางวัลใดๆ คุณสามารถดูรายการรางวัลในหน้าทัวร์นาเมนต์ นี่คือตัวอย่างรางวัลที่เราแจกในทัวร์นาเมนต์ของเกม {{gameName}}',
    blocks: [
      {
        content: 'รางวัลเงินสด',
        imageUrl: 'https://cdn.game.tv/tournaments/group-13.png',
      },
      {
        content: 'Steam wallet codes',
        imageUrl: 'https://cdn.game.tv/tournaments/group-24.png',
      },
      {
        content: 'Gift cards - Google play, Amazon, Steam และอื่นๆ',
        imageUrl: 'https://cdn.game.tv/tournaments/group-23.png',
      },
      {
        content: 'Subscription codes - Netflix, Apple Music และ Spotify',
        imageUrl: 'https://cdn.game.tv/tournaments/group-22.png',
      },
      {
        content: 'และอื่นๆอีกมากมาย',
        imageUrl: 'https://cdn.game.tv/tournaments/group-20.png',
      },
    ],
  },
  joinTournament: {
    heading: 'วิธีเข้าร่วมทัวร์นาเมนต์ของ {{gameName}} ',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'Steps',
        stepsContent: [
          {
            stepItem:
              'ไปที่ #tournament-info text channel ใน Discord เพื่อดูรายละเอียดและข้อมูลการแข่งขัน',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
          },
          {
            stepItem:
              'คลิกที่ #tournament-lobby ด้านล่างของ #tournament-info channel',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
          },
          {
            stepItem:
              'เพื่อเข้าร่วมแข่งขัน พิมพ์คำสั่ง !register ใน #tournament-lobby channel',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'Tourney bot จะส่ง Direct Message ถึงคุณพิมพ์คำสั่ง !joinsolo &lt;your in-game username> ใน DM',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
          },
          {
            stepItem: 'เท่านี้ก็ลงทะเบียนเข้าร่วมการแข่งขัน {{gameName}} แล้ว',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Game.tv web app',
        stepsHeading: 'Steps',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "ไปที่ <a href='/user' class='click-here'>Web App</a> แล้วลงชื่อเข้าใช้ผ่าน Discord หรือ Twitter account",
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
          },
          {
            stepItem:
              'ใต้แท็บปฏิทินการแข่งขันคุณสามารถดูรายชื่อทัวร์นาเมนต์ของเกม {{gameName}}',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'คลิกที่ทัวร์นาเมนต์ที่คุณต้องการเข้าร่วม จะพบปุ่ม ลงทะเบียน ด้านล่างของหน้าจอ',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              'กรอกข้อมูล IGN (IN-GAME NAME) แล้วคลิกที่ปุ่ม Register ด้านล่างของหน้าจอ',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
          },
          {
            stepItem: 'ลงทะเบียนสำเร็จ',
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
    heading: 'วิธีจัดการแข่งขันทัวร์นาเมนต์ {{gameName}}',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'Steps',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "<a href='/user' class='click-here'>Invite the Tourney</a> เข้าสู่เซิร์ฟเวอร์ Discord ของคุณลงชื่อเข้าใช้และเลือก “Authorize”",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
          },
          {
            stepItem: 'จากเมนูหลักด้านซ้ายมือ คลิกที่ปุ่ม “Create Tournament”',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'เลือกสร้างทัวร์นาเมนต์เกมที่ต้องการ เลือกปรับแต่งทัวร์นาเมนต์ที่ปุ่ม customize หรือคลิก Publish Now เพื่อเริ่มเปิดรับสมัครโดยใช้เทมเพลตการแข่งขันที่มีให้',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/4.jpg',
          },
          {
            stepItem:
              'ในการปรับแต่งทัวร์นาเมนต์ สามารถกรอกข้อมูลทัวร์นาเมนต์ กฏและรางวัลได้ตามต้องการ',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/5.jpg',
          },
          {
            stepItem:
              'เมื่อเปิดใช้งานทัวร์นาเมนต์ บอทจะสร้าง #tournament-info และ #tournament-lobby channels ใน Discord ของคุณโดยอัตโนมัติ พิมพ์  !register ใน #tournament-lobby text channel เพื่อสมัครเข้าร่วม และดูข้อมูลของทัวร์นาเมนต์ {{gameName}} ที่สร้างว่าสมบูรณ์หรือไม่',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/6.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Game.tv web app',
        stepsHeading: 'Steps',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "ไปที่ <a href='/user' class='click-here'>Web App</a> แล้วลงชื่อเข้าใช้ผ่าน Discord หรือ Twitter account และเลือก “Authorize”",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
          },
          {
            stepItem: 'คลิก + ในคอนโทรลบาร์ด้านล่างจอ',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png',
          },
          {
            stepItem: 'จากเมนูหลักด้านซ้ายมือ คลิกที่ปุ่ม “Create Tournament”',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'เลือกสร้างทัวร์นาเมนต์เกมที่ต้องการ เลือกปรับแต่งทัวร์นาเมนต์ที่ปุ่ม customize หรือคลิก Publish Now เพื่อเริ่มเปิดรับสมัครโดยใช้เทมเพลตการแข่งขันที่มีให้',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "เมื่อเปิดใใช้งานทัวร์นาเมนต์ {{gameName}} จะแสดงในรายการทัวร์นาเมนต์ของ Game.tv Web App <a class='click-here' href='/user'>home page</a>",
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
