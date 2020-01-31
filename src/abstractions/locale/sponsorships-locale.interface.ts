import { IMetadataLocale, IGraphContentLocale } from './common';

interface IContentBlock {
  title: string;
  imageUrl?: string;
  contents: string[];
  imageAlt?: string;
}

interface IContentLeaderboardBlock {
  title: string;
  desktopImageUrl?: string;
  mobImageUrl?: string;
  contents: string[];
  imageAlt?: string;
}

export interface ISponsorshipsLocale {
  metadata: IMetadataLocale;
  sponsorshipSection: IContentBlock;
  playSponsorSection: {
    blocks: IContentBlock[];
  };
  verifiedBadgeSection: {
    blocks: IContentBlock[];
  };
  leaderboardSection: IContentLeaderboardBlock;
  tiersSection: {
    content: IContentBlock;
    graphContent: IGraphContentLocale;
  };
}
