import { ISponsorshipsLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const SponsorshipsLocalesThai: ISponsorshipsLocale = {
  metadata: {
    title: 'Mobile Esports Sponsorships ด้วย Tourney และ Game.tv',
    description: 'Mobile Esports Sponsorships ด้วย Tourney และ Game.tv',
  },
  sponsorshipSection: {
    title: 'Esports Sponsorships สำหรับคอมมูนิตี้ของคุณ',
    contents: [],
    imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship-banner.png',
  },
  playSponsorSection: {
    blocks: [
      {
        title: 'วิธีการได้รับ Sponsored?',
        contents: [
          'เมื่อคุณจัดลีกในคอมมูนิตี้ของคุณ Tourney จะเห็บข้อมูลสถิติผู้เข้าแข่งขันทุกคนจากทุกเซิร์ฟเวอร์ที่มี Tourney ติดตั้งอยู่ ผู้เข้าแขัน 8 อันดับแรกในแต่ละประเทศ จะได้รับ $500/เดือน',
          'เพื่อเป็นรางวัลให้กับคอมมูนิตี้ที่สนับสนุนผู้เล่นเหล่านี้ คอมมูนิตี้ก็จะได้รับรางวัลด้วย',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/get-sponsorship.png',
        imageAlt: 'รับ Sponsored',
      },
      {
        title: 'Sponsorship',
        contents: [
          'เมื่อผู้เข้าแข่งขันแข่งขันในลีกของเซิร์ฟเวอร์คุณ พวกเขาจะสามารถเพิ่มระดับ Roles ของตัวเองได้และได้รับรางวัลต่างๆ เมื่อถึงระดับ Diamond จะสามารถเข้าสู่ลีดเดอร์บอร์ดของแระเทศ ในทุกเดือนจะถือเป็นฤดูกาลใหม่ ซึ่งเราจะจัดอันดับ 8 ผู้เล่นที่ดีที่สุดในแต่ละประเทศ หากเซิร์ฟเวอร์ของคุณมีผู้เข้าแข่งขันจากหลายชาติก็ไม่ต้องกังวล ผู้เข้าแข่งขันต้องทำการยืนยันประเทศที่อยู่เพื่อยืนยัน',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship.png',
        imageAlt: 'Sponsorship',
      },
    ],
  },
  verifiedBadgeSection: {
    blocks: [
      {
        title: 'Badge ยืนยัน',
        contents: [
          'ผู้เข้าแข่งขันที่ถึงระดับ Silver จะสามารถยืนยันที่อยู่แระได้รับ Badge พิเศษ “Verified” ซึ่งทุกคนสามารถมองเห็นได้ใน Profiles เฉพาะผู้เล่นที่ยืนยันตัวตนเเล้วเท่านั้นที่จะสามารถขึ้นสู่ระดับ Diamond และรับ Sponsorship',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/verified-badge.png',
        imageAlt: 'Verified Badge',
      },
      {
        title: 'ลีก',
        contents: [
          'Tourney จะใช้เซิร์ฟเวอร์ของคุณเป็นลีก ผู้เข้าแข่งขันต้องร่วมกิจกรรมที่คุณจัดทั้ง uHost และ aiHost ซึ่ง Tourney จะคอยเตือนผู้เข้าแข่งขันตามระดับของพวกเขาในแชท หรือผู้เข้าแข่งขันตรวจสอบได้เองใน Profiles',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/leagues-spons.png',
        imageAlt: 'ลีก',
      },
    ],
  },
  leaderboardSection: {
    title: 'ลีดเดอร์บอร์ดประเทศ',
    contents: [
      'ผู้เข้าแข่งขันในคอมมูนิตี้ของคุณ จะมีอันดับในคอมมูนิตี้ลีก และยังสามารถเช็คอันดับในลีดเดอร์บอร์ดระดับเทศได้ด้วยโดยดูใน Profile หรือใช้คำสั่ง ‘!myposition’ เฉพาะผู้เข้าแข่งขันที่ยืนยันตัวตนแล้วเท่านั้นจึงจะเข้าสู่ลีดเดอร์บอร์ดได้',
    ],
    desktopImageUrl:
      'https://cdn.game.tv/images/meet-tourney/leaderboard-desk.png',
    mobImageUrl: 'https://cdn.game.tv/images/meet-tourney/leaderboard-mob.png',
  },
  tiersSection: {
    content: {
      title: 'Roles',
      contents: [
        'เมื่อผู้เเข้าแข่งขันชนะการแข่ง พวกเขาจะสามารถเลื่อนอันดับในลีกและได้รับรางวัลต่างๆ เมื่อถึงระดับ Diamond ก็จะสามารถเข้าร่วมลีดเดอร์บอร์ดระดับประเทศ และมีโอกาสได้รับ Sposorship หากอยู่ใน 8 อันดับแรกของประเทศ ผู้เช้าแข่งขันสามารถดูเรทติ้งของตัวเองโดยใช้คำสั่ง ‘!myrating’ ',
      ],
    },
    graphContent: {
      previousTitle: 'ก่อนหน้า',
      nextTitle: 'ถัดไป',
      perksTitle: 'Perks',
      forTitle: 'สำหรับ',
      graphList: [
        {
          type: 'bronze',
          imageCaption: 'Bronze',
          imageAlt: 'Bronze',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: 'ELO 800 - 1300',
          perks: ['Tourney Emotes สุดพิเศษ', 'Profiles และ badge'],
        },
        {
          type: 'silver',
          imageCaption: 'Silver',
          imageAlt: 'Silver',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: 'ELO 1301 - 1800',
          perks: ['Verified Profile Badge'],
        },
        {
          type: 'gold',
          imageCaption: 'Gold',
          imageAlt: 'Gold',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: 'ELO 1800+',
          perks: ['Tourney Emotes สุดพิเศษ'],
        },
      ],
    },
  },
};
