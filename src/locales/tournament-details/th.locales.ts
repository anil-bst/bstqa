import { ITournamentDetailLocale } from '@app/abstractions';
import { HowToJoinThai } from './../how-to-join/th.locales';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.THAI;

export const TournamentDetailLocaleThai: ITournamentDetailLocale = {
  metadata: {
    title: 'License Agreement - Game.tv',
    description: 'Game.tv License Agreement',
  },
  linkToAllTournaments: 'All Tournaments',
  noPrizeInfo: 'see more',
  registerSection: {
    heading: 'Click ‘Register’ to get a seat in the tournament.',
    btnText: 'Register',
  },
  videoSection: {
    heading: 'Tournament Stream',
  },
  details: {
    detailsSectionHeading: 'Details',
    ruleSectionHeading: 'Rules',
    howToJoinSection: {
      heading: 'วิธีเข้าร่วมทัวร์นาเมนต์ของ {{howToJoinTitle}} ',
      blocks: HowToJoinThai.blocks,
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
  locales: `/${language}`,
};
