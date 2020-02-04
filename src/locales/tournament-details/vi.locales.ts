import { ITournamentDetailLocale } from '@app/abstractions';
import { HowToJoinVietnamese } from './../how-to-join/vi.locales';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.VIETNAMESE;

export const TournamentDetailLocaleVietnamese: ITournamentDetailLocale = {
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
      heading: 'Làm thế nào để tham gia giài đấu {{howToJoinTitle}}',
      blocks: HowToJoinVietnamese.blocks,
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
  locales: `/${language}`,
};
