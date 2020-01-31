import { IHomeLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.THAI;
export const HomeLocaleThai: IHomeLocale = {
  metadata: {
    title: 'Tourney - บอทจัดการแข่งขันอีสปอร์ตบน Discord ด้วย AI',
    description: 'จัดการทัวร์นาเมนต์อีสปอร์ตเกมมือถือด้วยบอทของเรา Tourney',
  },
  heroSection: {
    heading: 'ขอแนะนำ Tourney',
    content:
      'ผู้ช่วยจัดการแข่งขันอีสปอร์ตด้วยระบบ AI ให้เราจัดการการแข่งขันให้ ส่วนคุณสนใจการสร้างคอมมูนิตี้ได้เต็มเวลา',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/global.png',
        logoExtraClasses: 'global-logo',
        link: '/user',
        name: 'Launch App',
        extraClasses: 'alternate-background',
      },
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        logoExtraClasses: 'discord-logo',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Invite Tourney',
      },
    ],
    discoverButtonTitle: 'ค้นหาเพิ่มเติม',
  },
  whyTourneySection: {
    heading: 'ทำไมต้อง Tourney',
    content:
      'การจัดทัวร์นาเมนต์อีสปอร์ตมันยาก ต้องคอยจับคู่แข่งขัน สร้างล็อบบี้ ต้องคอยจัดการแข่งขันให้ราบรื่นยุติธรรม ตรวจสอบผู้ชนะ หน้าที่มากมายเหล่านี้จะถูกจัดการแทนโดย Tourney ซึ่งสามารถช่วยให้การจัดการแข่งขันง่ายขึ้นหรือจะให้เขาควบคุมการแข่งขันทั้งหมดในคอมมูนิตี้เลยก็ได้ AI ที่ทรงพลังและฟีเจอร์ที่โดดเด่นของเขาจะช่วยให้คอมมูนิตี้ของคุณแข็งแกร่งและสนุกสนาน',
  },
  uHostSection: {
    heading: 'uHost, uHost AI-Assistant, และ AI-Host',
    content: 'สามโหมดจัดการทัวร์นาเมนต์ที่จะให้อิสระแก่คุณ',
    hostTypes: [
      {
        heading: 'uHost',
        imageAlt: 'uHost',
        content:
          'เลือกจากทัวร์นาเมนต์เทมเพลตหรือสร้างรูปแบบขึ้นมาเอง Tourney จะสร้างชาแนลและ DM ไปยัง roles ที่คุณตั้งค่าไว้',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost.png',
      },
      {
        heading: 'uHost AI-Assistant',
        imageAlt: 'uHost AI-Assistant',
        content:
          'Tourney ช่วยจัดการทัวร์นาเมนต์และส่งคำแนะนำการดำเนินการให้กับผู้เล่นทุกคนในระหว่างการแข่งขัน พร้อมทั้งดูแลในอีกหลายๆส่วน',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost-assistant.png',
      },
      {
        heading: 'AI-Host',
        imageAlt: 'aiHost',
        content:
          'Tourney จะเลือกเกม เวลาและรูปแบบการแข่งขันพร้อมทั้งดำเนินการเองตั้งแต่ต้นจนจบ',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/ai-Host.png',
      },
    ],
    templateSection: {
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/templates.png',
      imageAlt: 'Templates',
      heading: 'Templates',
      content:
        'Tourney มาพร้อมกับรูปแบบการจัดการทัวร์นาเมนต์นับสิบแบบให้คุณสามารถเลือกใช้งานได้ง่ายๆ',
    },
    messagingSection: {
      imageAlt: 'DMs and Messaging',
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/dms.png',
      heading: 'DMs และ Messaging',
      content:
        'Tourney สามารถส่งข้อความไปยัง Roles ที่กำหนดหรือที่คุณเลือกไว้เพื่อเตือนพวกเขาเกี่ยวกับกำหนดการต่างๆเกี่ยวกับทัวร์นาเมนต์ ทุกสิ่งถูกจัดรวมหมู่ไว้ในชาแนลที่ Tourney สร้างขึ้น ล็อบบี้และห้องแข่งขันจะดำเนินการผ่าน DM',
    },
  },
  perksSection: {
    heading: 'Perks',
    content: 'Tourney จะไม่สมบูรณ์ไปได้หากขาดระบบ Perks',
    perksList: [
      {
        content:
          'ชอบจัดแข่งบ่อยๆเหรอ? เยี่ยม เรามีระบบจัดระดับเป็นรางวัลให้คุณ',
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/perk-tournaments.png',
        imageAlt: 'ระดับ Rewarding Tournament ',
      },
      {
        content: 'สตรีมสดการแข่งขันเหรอ? ไม่มีปัญหา เรามี OBS plugin',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-obs.png',
        imageAlt: 'OBS Plugin สำหรับ streaming',
      },
      {
        content: 'อยากจัดแข่งลีกในเซิร์ฟเวอร์? บิงโก เรามีระบบลีก',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-league.png',
        imageAlt: 'จัดการลีก',
      },
    ],
  },
  graphsSection: {
    heading: 'Roles',
    content:
      'ยิ่งคุณจัดการแข่งขันด้วย Tourney มากเท่าไร ก็จะปลดล็อก Perk มากขึ้นเรื่อยๆ ชื่อของคุณจะแสดงในตารางคะแนนลีดเดอร์บอร์ดของ Game.tv Discord และเมื่อคุณได้รับ Perk มากขึ้นคุณก็จะขึ้นสู่ Roles ต่อไป',
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
          forDuration: '1 - 6 ทัวร์นาเมนต์ต่อสัปดาห์',
          perks: [
            'Tourney Emotes สุดพิเศษ',
            'Profiles และ badge',
            'ปลดล็อก Tourney AI',
          ],
        },
        {
          type: 'silver',
          imageCaption: 'Silver',
          imageAlt: 'Silver',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: '7+  ทัวร์นาเมนต์ต่อสัปดาห์',
          perks: ['2 Nitro boosts สำหรับ Discord ของคุณ', 'ปลดล็อก Leagues'],
        },
        {
          type: 'gold',
          imageCaption: 'Gold',
          imageAlt: 'Gold',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: 'จัดลีกโดยมีผู้เข้าร่วมแข่งขันมากกว่า 300 คน/ฤดูกาล',
          perks: ['การันตีรางวัลสนับสนุนสำหรับการจัดลีก'],
        },
      ],
    },
  },
  tourneyEmotesSection: {
    heading: 'Tourney Emotes',
    content:
      'ปลดล็อกระดับ Bronze คุณจะได้รับ 42 emotes ความละเอียดสูงใช้ในเซิร์ฟเวอร์ของคุณ ถูกปรับขนาดพร้อมใช้งานได้ทันที',
  },
  profilesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/profiles.png',
        heading: 'Profiles',
        imageAlt: 'Profiles',
        content:
          'ปลดล็อกระดับ Bronze ผู้แข่งขันในทัวร์นาเมนต์ของคุณได้รับระบบ Profiles ที่พวกเขาสามารถปรับแต่งได้เอง ทุก Profiles จะแสดงรายชื่อเกม สถิติแพ้ชนะ และเรตติ้งของผู้เล่น เรตติ้งจะช่วยให้สามารถจับคู่แข่งขันในลีกได้',
      },
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/badges.png',
        heading: 'Badges',
        imageAlt: 'Badges',
        content:
          'ชนะการแข่งขันแล้วรับ Badges เพื่อเป็นสัญลักษณ์แสดงความสามารถของคุณ เมื่อ ELO เพิ่มขึ้นหรือชนะทัวร์นาเมนต์และรางวัล คุณจะได้รับ Badges พิเศษใน Profiles ของคุณ ซึ่งมาพร้อมกับ Perks ระดับ Exclusive',
        reverse: true,
      },
    ],
  },
  tourneyAiSection: {
    heading: 'Tourney AI',
    content1:
      'เมื่อถึงระดับ Bronze จะปลดล็อก AI-Host เปิดใช้งานระบบ AI-Host แล้ว Tourney จะจัดการแข่งขันโดยอัตโนมัติ จำไว้ว่าระบบจัดระดับจะนับเฉพาะ uHost ทัวร์นาเมนต์ AI-Host ทัวร์นาเมนต์จะไม่นับรวม (แต่มันเจ๋งมากเลยนะ คุณสามารถจัดควบคู่กันไปกับ uHost)',
    content2: '',
  },
  leaguesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/league.png',
        heading: 'Leagues',
        imageAlt: 'Leagues',
        content:
          'ปลดล็อกระดับ Gold จากนั้น Tourney  จะจัดการลีกในเซิร์ฟเวอร์ของคุณ ผู้เข้าแข่งขันในเซิร์ฟเวอร์ของคุณจะได้โอกาสในการแข่งขันควบคู่กันไปกับคนใน Tier เดียวกันและมีสิทธิรับ Sponsorship ถ้าอยู่ในอันดับ Top-8 ในลีดเดอร์บอร์ดของประเทศ',
      },
    ],
  },
  getBoostedSection: {
    heading: 'รางวัล Boosted',
    content:
      'เมื่อถึงระดับ Silver เราจะให้ 2 Boosts กับเซิร์ฟเวอร์ Discord ของคุณ ใน Perks Level 1 ตลอดเวลาที่คุณจัด 7 ทัวร์นาเมนต์ขึ้นไปต่อสัปดาห์ (จันทร์ ถึง อาทิตย์) เราจะ Boosts เซิร์ฟเวอร์ของคุณจนกว่าจำนวนทัวร์จะต่ำกว่า 7 ทัวร์นาเมนต์ต่อสัปดาห์ เราจะยกเลิกการ Boosts และกลับมาทำให้อีกครั้งหากจำนวนทัวร์นาเมนต์เข้าตามที่กำหนด นอกจากนี้คุณยังสามารถปลดล็อกระบบลีกมาจัดในคอมมูนิตี้ของคุณได้',
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
        heading: 'Level 1 Perks',
        mainlabel: 'ปลดล็อก',
        subheading: 'Boosted server perks ประกอบด้วย -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/emoji.png',
            label: '50 server emoji slots (for a total of 100)',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/audio.png',
            label: '128 Kbps audio quality',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/gif-icon.png',
            label: 'Animated server icon',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/server.png',
            label: 'Custom server invite background',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/live.png',
            label: '720p 60fps Go Live streams',
          },
        ],
      },
      boostedServer: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-gold.png',
        heading: 'Qualifying for a Boosted Server',
        subheading: 'สิ่งที่คุณต้องทำ -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'ทัวร์นาเมนต์ต้องดำเนินการด้วยตัวคุณเอง - uHost หรือแบบสนับสนุนด้วย AI - uHost AI-Assistant ทัวร์นาเมนต์ที่จัดการโดย AI เต็มรูปแบบ AI-Host จะไม่ นับรวมในจำนวนทัวร์นาเมนต์ต่อสัปดาห์',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'ทัวร์นาเมนต์ต้องมีจำนวนผู้เข้าร่วมแข่งขันอย่างน้อย 50% จึงจะผ่านเกณฑ์ (หมายความว่าถ้า คุณจัดทัวร์นาเมนต์ที่เปิดรับสมัครสูงสุด 16 คน ต้องมีอย่างน้อย 8 คนเข้าการเเข่งขัน จึงจะนับในจำนวนทัวร์นาเมนต์รายสัปดาห์',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'เราดูจำนวนทัวร์นาเมนต์รายสัปดาห์เป็นหลัก จัดการแข่งขัน 3 ทัวร์นาเมนต์ในวันแรก จากนั้นจัดอีก 4 ทัวร์นาเมนต์ในวันสุดท้ายก็ได้หรือจะจัดวันละทัวร์นาเมนต์ก็ได้',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Boosts อาจถูกหยุดได้หากจำนวนทัวร์นาเมนต์ต่อสัปดาห์ต่ำกว่ากว่า 7 ทัวร์นาเมนต์นับในช่วง จันทร์-ศุกร์ (Pacific time)',
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
        heading: 'Prize Sponsorships',
        imageAlt: 'LeagPrize Sponsorshipsues',
        content:
          'เมื่อคุณถึงระดับ Gold และตัดการแข่งขันลีก เราจะสนับสนุนรางวัลสำหรับผู้ชนะลีกของคุณในทุกเดือน-นับเป็นฤดูกาล รางวัลได้รับการสนับสนุนจากพาร์ทเนอร์ต่างๆของเรา เช่น MSI,Intel และผู้พัฒนาเกมต่างๆจาก รางวัลจะมีทั้ง เงินสด, gift cards, อุปกรณ์เกมหรือไอเทมในเกม',
      },
    ],
  },
  availableGamesSection: {
    heading: 'เกมที่รองรับ',
    content: 'เพิ่มขึ้นทุกสัปดาห์',
    viewMoreGames: 'ดูเพิ่ม',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Invite Tourney',
      },
    ],
  },
  gamelink: `/${language}/find-tournaments`,
};
