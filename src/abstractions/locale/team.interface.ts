import { IMetadataLocale } from './common/metadata-locale.interface';

interface ITeamList {
  name: string;
  message: string;
  location: string;
  image: string;
}

export interface ITeamLocale {
  metadata: IMetadataLocale;
  heading: string;
  content: ITeamList[];
}
