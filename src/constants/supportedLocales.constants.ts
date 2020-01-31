import { SupportedLocalesEnum } from '@app/enums';
import { ILocales, ISupportedLocale } from '@app/abstractions';

export const SUPPORTED_LOCALES: ILocales<ISupportedLocale> = {
  // tslint:disable: object-literal-key-quotes
  en: { title: 'English', country: 'US', code: SupportedLocalesEnum.ENGLISH },
  ja: { title: '日本語', country: 'JP', code: SupportedLocalesEnum.JAPANESE },
  ko: { title: '한국어', country: 'KR', code: SupportedLocalesEnum.KOREAN },
  fr: { title: 'Français', country: 'FR', code: SupportedLocalesEnum.FRENCH },
  tw: { title: '台灣', country: 'TW', code: SupportedLocalesEnum.CHINESE },
  vi: {
    title: 'Tiếng Việt',
    country: 'VN',
    code: SupportedLocalesEnum.VIETNAMESE,
  },
  th: { title: 'ไทย', country: 'TH', code: SupportedLocalesEnum.THAI },
  ru: { title: 'Русский', country: 'RU', code: SupportedLocalesEnum.RUSSIAN },
  'pt-br': {
    title: 'Português',
    country: 'BR',
    code: SupportedLocalesEnum.PORTUGUESE,
  },
  pl: { title: 'polski', country: 'PL', code: SupportedLocalesEnum.POLISH },
  it: { title: 'Italiano', country: 'IT', code: SupportedLocalesEnum.ITALIAN },
  es: { title: 'Español', country: 'ES', code: SupportedLocalesEnum.SPANISH },
  de: { title: 'Deutsch', country: 'DE', code: SupportedLocalesEnum.GERMAN },
  tr: { title: 'Türkçe', country: 'TR', code: SupportedLocalesEnum.TURKISH },
  ar: { title: 'العربية', country: 'SA', code: SupportedLocalesEnum.ARABIC },
  // id: {
  //   title: 'Indonesia',
  //   country: 'ID',
  //   code: SupportedLocalesEnum.INDONESIAN,
  // },
  // cs: { title: 'Čeština', country: 'CS', code: SupportedLocalesEnum.CZECH },
  // ms: { title: 'Melayu', country: 'MY', code: SupportedLocalesEnum.MALAY },
  // nl: { title: 'Nederlands', country: 'NL', code: SupportedLocalesEnum.DUTCH },
};
