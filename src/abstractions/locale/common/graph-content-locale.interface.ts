export interface IGraphListLocale {
  type: string;
  statusText?: string;
  imageCaption: string;
  imageAlt: string;
  imageUrl: string;
  forDuration: string;
  perks: string[];
  isPreviousPerkExcluded?: boolean;
}

export interface IGraphContentLocale {
  forTitle: string;
  perksTitle: string;
  nextTitle: string;
  previousTitle: string;
  graphList: IGraphListLocale[];
}
