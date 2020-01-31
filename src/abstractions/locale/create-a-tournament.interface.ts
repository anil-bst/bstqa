import { IMetadataLocale } from './common';

interface ISteps {
  imgUrl?: string;
  title?: string;
  linkString?: string;
  linkUrl?: string;
}
export interface ICommunityTournamentsType {
  metadata: IMetadataLocale;
  heroSection: {
    bannerDeskTopImageUrl: string;
    bannerMobImageUrl: string;
    heading: string;
    content: string;
  };
  discordSection: {
    heading: string;
    content: string;
    iconUrl: string;
    btnText: string;
    imageUrl: string;
    steps: ISteps[];
  };
  gameSection: {
    heading: string;
    content: string;
    iconUrl: string;
    btnText: string;
    imageUrl: string;
    steps: ISteps[];
  };
  locales?: string;
}
