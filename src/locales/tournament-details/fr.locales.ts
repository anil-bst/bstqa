import { ITournamentDetailLocale } from '@app/abstractions';
import { HowToJoinFrench } from './../how-to-join/fr.locales';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.FRENCH;

export const TournamentDetailLocaleFrench: ITournamentDetailLocale = {
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
      heading: 'Comment rejoindre un tournoi {{howToJoinTitle}}',
      blocks: HowToJoinFrench.blocks,
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
  locales: `/${language}`,
};
