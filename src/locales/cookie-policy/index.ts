// tslint:disable: object-literal-key-quotes
import { ILocales, ICookiePolicyLocale } from '@app/abstractions';
import { CookiePolicyLocaleEnglish } from './en.locales';
import { CookiePolicyLocaleJapanese } from './ja.locales';

export const CookiePolicyLocales: ILocales<ICookiePolicyLocale> = {
  en: CookiePolicyLocaleEnglish,
  ja: CookiePolicyLocaleJapanese,
  ar: CookiePolicyLocaleEnglish,
  cs: CookiePolicyLocaleEnglish,
  de: CookiePolicyLocaleEnglish,
  es: CookiePolicyLocaleEnglish,
  fr: CookiePolicyLocaleEnglish,
  id: CookiePolicyLocaleEnglish,
  it: CookiePolicyLocaleEnglish,
  ko: CookiePolicyLocaleEnglish,
  ms: CookiePolicyLocaleEnglish,
  nl: CookiePolicyLocaleEnglish,
  'pt-br': CookiePolicyLocaleEnglish,
  pl: CookiePolicyLocaleEnglish,
  ru: CookiePolicyLocaleEnglish,
  tr: CookiePolicyLocaleEnglish,
  th: CookiePolicyLocaleEnglish,
  tw: CookiePolicyLocaleEnglish,
  vi: CookiePolicyLocaleEnglish,
};
