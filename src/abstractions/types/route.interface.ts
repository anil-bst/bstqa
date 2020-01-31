import { SupportedLocalesEnum } from '@app/enums';
import { ILocales } from './locales.interface';

export interface RouteType {
  paths: string[];
  template: string;
  supportedLocales?: SupportedLocalesEnum[];
  unsupportedLocales?: SupportedLocalesEnum[];
  localeCollection: ILocales<any>;
  [key: string]: any;
}
