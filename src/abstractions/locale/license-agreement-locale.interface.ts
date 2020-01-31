import { IMetadataLocale } from './common';

interface IContentData {
  title?: string;
  content?: string;
  extraContentClass?: string;
  imageUrl?: string;
}

export interface ILicenseAgreementLocale {
  metadata: IMetadataLocale;
  heading: string;
  contents: Array<{
    title?: string;
    extraClass?: string;
    steps?: IContentData[];
  }>;
}
