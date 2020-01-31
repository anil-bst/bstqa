import { IMetadataLocale } from './common';

interface IDetailsBlock {
  imageUrl?: string;
  content?: string;
  imageAlt?: string;
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
export interface IGameDetailsLocale {
  metadata: IMetadataLocale;
  gameDetail: string;
  gameInfo: {
    title: string;
    content: string;
    linkUrl: string;
    noTournamentsTitle: string;
    noTournamentsContent: string;
    noTournamentsLink: string;
  };
  tournamentTitle: string;
  platformStr: string;
  discord: string;
  filterIcon: string;
  discordIcon: string;
  vs: string;
  joinHeading: string;
  viewMore: string;
  tournamentTypes: {
    heading: string;
    blocks: IDetailsBlock[];
  };
  prizeTypes: {
    heading: string;
    description?: string;
    blocks: IDetailsBlock[];
  };
  joinTournament: {
    heading: string;
    blocks: ISteps[];
  };
  startTournament: {
    heading: string;
    blocks: ISteps[];
  };
  locales?: string;
}
