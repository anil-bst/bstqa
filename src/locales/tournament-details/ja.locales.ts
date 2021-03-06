import { ITournamentDetailLocale } from '@app/abstractions';
import { HowToJoinJapanese } from './../how-to-join/ja.locales';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.JAPANESE;

export const TournamentDetailLocaleJapanese: ITournamentDetailLocale = {
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
      heading: '{{howToJoinTitle}}のトーナメントへのエントリー方法',
      blocks: HowToJoinJapanese.blocks,
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
  locales: `/${language}`,
};
