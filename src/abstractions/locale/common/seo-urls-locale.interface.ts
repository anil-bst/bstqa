import { IAlternateUrl } from './alternate-url-locale.interface';

export interface ISeoUrlsLocale {
  canonical: string;
  alternate: IAlternateUrl[];
  locale: string;
  pages?: {
    current: number;
    next: number;
    prev: number;
  };
}
