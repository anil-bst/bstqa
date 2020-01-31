import { IMetadataLocale, IGraphContentLocale } from './common';

interface IFigureWithContent {
  imageUrl: string;
  imageAlt: string;
  heading?: string;
  content?: string;
  [key: string]: any;
}

interface IAppLaunchButton {
  extraClasses?: string;
  name: string;
  link: string;
  logoUrl?: string;
  logoAltText?: string;
  logoExtraClasses?: string;
}
interface Iitems {
  iconUrl: string;
  label: string;
}
interface IgetBoostedSubSection {
  mainIconUrl: string;
  mainlabel?: string;
  heading: string;
  subheading: string;
  items: Iitems[];
}
export interface IHomeLocale {
  metadata: IMetadataLocale;
  heroSection: {
    heading: string;
    extraHeadingClasses?: string;
    content: string;
    extraContentClassses?: string;
    appLaunchButtons: IAppLaunchButton[];
    discoverButtonTitle: string;
  };
  whyTourneySection: {
    heading: string;
    content: string;
  };
  uHostSection: {
    heading: string;
    content: string;
    hostTypes: IFigureWithContent[];
    templateSection: IFigureWithContent;
    messagingSection: IFigureWithContent;
  };
  perksSection: {
    heading: string;
    content: string;
    perksList: IFigureWithContent[];
  };
  graphsSection: {
    heading: string;
    content: string;
    graphContent: IGraphContentLocale;
  };
  tourneyEmotesSection: {
    heading: string;
    content: string;
  };
  profilesSection: {
    items: IFigureWithContent[];
  };
  tourneyAiSection: {
    heading: string;
    content1: string;
    content2: string;
  };
  leaguesSection: {
    items: IFigureWithContent[];
  };
  getBoostedSection?: {
    heading: string;
    content: string;
    imgDesktopUrl: string;
    imgMobile1Url: string;
    imgMobile2Url: string;
    backgroundImgUrl: string;
    getBoostedLevels?: {
      perks: IgetBoostedSubSection;
      boostedServer: IgetBoostedSubSection;
    };
  };
  prizeSponsorshipSection?: {
    items: IFigureWithContent[];
  };
  availableGamesSection: {
    heading: string;
    content: string;
    viewMoreGames: string;
    appLaunchButtons: IAppLaunchButton[];
  };
  gamelink: string;
}
