import { ICommunityTournamentsType } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.THAI;

export const CreateATournamentLocalesLocaleThai: ICommunityTournamentsType = {
  metadata: {
    title: 'จัดการ Mobile Esports Tournaments | Game.tv',
    description:
      'สร้างทัวร์นาเมนต์และลีกโดย Game.tv Discord bot Tourney หรือ Game.tv app',
  },
  heroSection: {
    heading: 'Create - Host - Play  ',
    content:
      'สร้างทัวร์นาเมนต์ใน Discord ของคุณหรือใน App ของเราเพียงไม่กี่ขั้นตอน',
    bannerDeskTopImageUrl: 'https://cdn.game.tv/create_tournament/banner.png',
    bannerMobImageUrl: 'https://cdn.game.tv/create_tournament/banner-mob.png',
  },
  discordSection: {
    heading: 'Discord',
    content:
      'สร้างทัวร์นาเมนต์ใน Discord ของคุณ ผู้เล่นจะไม่ต้องออกไปจากเซิร์ฟเวอร์ของคุณเลย ทุกส่วนของการแข่งขันจะถูกดำเนินการผ่าน Roles และ DM ในเซิร์ฟเวอร์ทั้งหารลงทะเบียน เช็คอินและแข่งขัน Tourney จะจัดการจับคู่แข่งขันอย่างยุติธรรม หลังจบเกมผู้เล่นจะสามารถเช็คอันดับและ GELO score ในหน้าโปรไฟล์',
    btnText: 'Invite Tourney',
    steps: [
      {
        title: 'ติดตั้ง Tourney และไปที่',
        linkString: 'dashboard',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step1.png',
        linkUrl: '/dashboard',
      },
      {
        title: 'คลิก “Create Tournament” และเลือกเกมของคุณ',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step2.png',
      },
      {
        title:
          'ปรับแต่งรูปแบบการแข่งขันตามต้องการ หรือจะเลือกรูปแบบพื้นฐานที่เรามีไว้ให้แล้ว',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step3.png',
      },
      {
        title:
          'คลิก “Publish” แล้ว Tourney จะสร้าง lobby หรือสายการแข่งใน Discord ของคุณ',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step4.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/discord_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/discord.png',
  },
  gameSection: {
    heading: 'Game.tv App',
    content:
      'หากคุณไม่มี Discord หรือต้องการเชิญผู้เล่นที่ไม่ใช้ Discord เข้าร่วมแข่งขัน คุณสามารถใช้งานผ่านเว็บ App ของเรา ระบบทุกอย่างเหมือนกับใน Discord Tourney จะสร้างการแข่งขันของคุณ คุณและผู้เข้าแข่งขันจะได้รับการแจ้งเตือนตรงผ่านขจาก App เกี่ยวกับการแข่งขัน การจับคู่แข่งขัน สายการแข่งขันและอื่นๆ คุณสามารถเชื่อมต่อกับแอคเคาท์ทวิตเตอร์ และเเชร์ข้อมูลต่างๆไปยังทวิตเตอร์ได้โดยตรง',
    btnText: 'Launch App',
    steps: [
      {
        title: 'ไปยัง',
        linkString: 'Game.tv app',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step1.png',
        linkUrl: '/user',
      },
      {
        title: 'ล็อกอินแล้วคลิก + ในคอนโทรลบาร์ด้านล่างจอ',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step2.png',
      },
      {
        title:
          'ปรับแต่งรูปแบบการแข่งขันตามต้องการ หรือจะเลือกรูปแบบพื้นฐานที่เรามีไว้ให้แล้ว',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step3.png',
      },
      {
        title:
          'คลิก “Publish” แล้ว Tourney จะสร้าง lobby หรือสายการแข่งใน Discord ของคุณ',
        imgUrl: 'https://cdn.game.tv/crete_tournament/step-4-1-new.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/game_global_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/game.png',
  },
  locales: `/${language}`,
};
