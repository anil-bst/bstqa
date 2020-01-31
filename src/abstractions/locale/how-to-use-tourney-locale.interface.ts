import { IMetadataLocale } from './common';

interface INavigationSection {
  id: string;
  title: string;
  description?: string;
  isActive?: boolean;
  navSectionItems?: INavigationSectionContentItem[];
}

interface INavigationSectionContentItem {
  title: string;
  innerContentList?: IContentFigures[];
}

interface IContentFigures {
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
  steps?: string[];
}

export interface IHowToUseTourneyLocale {
  metadata: IMetadataLocale;
  navigationSections: INavigationSection[];
}
