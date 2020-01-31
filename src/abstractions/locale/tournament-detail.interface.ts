import { IMetadataLocale } from './common';

interface ImediaContent {
  deviceType: string;
  logoUrl: string;
  bannerUrl: string;
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
      content: string[];
      imgUrl: string;
    };
    prizeSectionHeading: string;
  };
  organiserText: string;
}
