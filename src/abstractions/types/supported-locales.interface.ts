import { SupportedLocalesEnum } from '@app/enums';

export interface ISupportedLocale {
  title: string;
  country: string;
  code: SupportedLocalesEnum;
}
