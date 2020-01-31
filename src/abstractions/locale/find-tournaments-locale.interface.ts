import { IMetadataLocale } from './common';

export interface IFindTournamentLocale {
  metadata: IMetadataLocale;
  heading: string;
  content: string;
  searchForm: {
    formPlaceholder: string;
    searchInfo: string;
    noresult: string;
  };
  gameInfo: {
    title: string;
    content: string;
    linkUrl: string;
    noTournamentsTitle: string;
    noTournamentsContent: string;
    noTournamentsLink: string;
  };
  topGameSection: {
    title: string;
  };
  filterIcon: string;
  tournamentTitle: string;
  platformStr: string;
  gamePageUrl?: string;
  discordIcon: string;
  joinHeading: string;
  viewMore: string;
  locales: string;
}
