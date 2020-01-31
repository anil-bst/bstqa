import { IFindTournamentLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.THAI;

export const FindTournamentLocalesThai: IFindTournamentLocale = {
  metadata: {
    title: 'ค้นหา Esports Tournaments - ไม่มีค่าใช้จ่าย | Game.tv',
    description: 'ค้นหา esports tournaments ที่คุณเข้าร่วมแข่งขันได้จากทั่วโลก',
  },
  heading: 'Browse Tournaments',
  content:
    'ค้นหา esports tournaments ที่จัดแข่งขันอยู่ในเซิร์ฟเวอร์ Discord นับล้านเซิร์ฟเวอร์ทั่วโลกทั้งเกมมือถือและเกม PC',
  searchForm: {
    formPlaceholder: 'ค้นหาเกม eg. Pubg',
    searchInfo: 'ดูทัวร์นาเมนต์สำหรับ',
    noresult: 'ไม่พบเกม กรุณาค้นหาเกมอื่น',
  },
  gameInfo: {
    title: 'ไม่พบทัวร์นาเมนต์ที่ชอบ',
    content: 'สร้างของคุณ',
    noTournamentsTitle: 'อุ๊บส์! ไม่มีทัวร์นาเมนต์ที่เล่นได้ในขณะนี้!',
    noTournamentsContent: 'ดูทุกทัวร์นาเมนต์ที่เล่นได้',
    noTournamentsLink: 'สด หรือ สิ้นสุดแล้ว',
    linkUrl: `/${language}/create-a-tournament`,
  },
  topGameSection: { title: 'Top Games' },
  tournamentTitle: 'Tournaments',
  platformStr: 'PLATFORM',
  joinHeading: 'เข้าร่วม',
  viewMore: 'ดูเพิ่ม',
  gamePageUrl: `/${language}/find-tournaments`,
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
