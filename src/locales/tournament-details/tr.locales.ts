import { ITournamentDetailLocale } from '@app/abstractions';
import { HowToJoinTurkish } from './../how-to-join/tr.locales';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.TURKISH;

export const TournamentDetailLocaleTurkish: ITournamentDetailLocale = {
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
      heading: '{{howToJoinTitle}} Turnuvasına Nasıl Katılırım?',
      blocks: HowToJoinTurkish.blocks,
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
  locales: `/${language}`,
};
