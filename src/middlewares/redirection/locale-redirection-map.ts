import { SupportedLocalesEnum } from '@app/enums';

// tslint:disable: object-literal-key-quotes
export const LocaleRedirectionMap: { [key: string]: SupportedLocalesEnum } = {
  JP: SupportedLocalesEnum.JAPANESE,
  KP: SupportedLocalesEnum.KOREAN,
  KR: SupportedLocalesEnum.KOREAN,
  TW: SupportedLocalesEnum.CHINESE,
  VN: SupportedLocalesEnum.VIETNAMESE,
  TR: SupportedLocalesEnum.TURKISH,
  TH: SupportedLocalesEnum.THAI,
  RU: SupportedLocalesEnum.RUSSIAN,
  BR: SupportedLocalesEnum.PORTUGUESE,
  PL: SupportedLocalesEnum.POLISH,
  IT: SupportedLocalesEnum.ITALIAN,
  FR: SupportedLocalesEnum.FRENCH,
  ES: SupportedLocalesEnum.SPANISH,
  DE: SupportedLocalesEnum.GERMAN,
  AE: SupportedLocalesEnum.ARABIC,
  SA: SupportedLocalesEnum.ARABIC,
  // CZ: SupportedLocalesEnum.CZECH,
  // NL: SupportedLocalesEnum.DUTCH,
  // ID: SupportedLocalesEnum.INDONESIAN,
  // MY: SupportedLocalesEnum.MALAY,
};
