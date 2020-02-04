import { ITournamentDetailLocale } from '@app/abstractions';
import { HowToJoinEnglish } from './../how-to-join/en.locales';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.ENGLISH;
export const TournamentDetailLocaleEnglish: ITournamentDetailLocale = {
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
      heading: 'How to Join {{howToJoinTitle}} tournament',
      blocks: HowToJoinEnglish.blocks,
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
  locales: '',
};
