import { IMetadataLocale } from './common';

interface ImediaContent {
  deviceType: string;
  logoUrl: string;
  bannerUrl: string;
}

interface Content {
  stepItem: string;
  imgUrl: string;
}
interface ISteps {
  gamePlatform: string;
  stepsHeading: string;
  firstImage: string;
  stepsContent: Content[];
}

export interface ITournamentDetailLocale {
  metadata: IMetadataLocale;
  linkToAllTournaments: string;
  noPrizeInfo: string;
  registerSection: {
    heading: string;
    btnText: string;
  };
  videoSection: {
    heading: string;
  };
  details: {
    detailsSectionHeading: string;
    ruleSectionHeading: string;
    howToJoinSection: {
      heading: string;
      blocks: ISteps[];
    };
    prizeSectionHeading: string;
  };
  organiserText: string;
  locales: string;
}
