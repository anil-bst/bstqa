import { IMetadataLocale } from './common';

interface IContentData {
  title?: string;
  content?: string;
  extraContentClass?: string;
  imageUrl?: string;
}

export interface ITermsAndPrivacyLocale {
  metadata: IMetadataLocale;
  heading: string;
  subHeading: string;
  contents: Array<{
    title?: string;
    extraClass?: string;
    steps?: IContentData[];
  }>;
}
