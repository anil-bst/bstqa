// tslint:disable: object-literal-key-quotes
import { ILocales } from '@app/abstractions';
import { IHeaderLocale } from '@app/abstractions/locale/common';
import { HeaderLocaleEnglish } from './en.locales';
import { HeaderLocaleJapanese } from './ja.locales';
import { HeaderLocaleArabic } from './ar.locales';
import { HeaderLocaleGerman } from './de.locales';
import { HeaderLocaleSpanish } from './es.locales';
import { HeaderLocaleFrench } from './fr.locales';
import { HeaderLocaleItalian } from './it.locales';
import { HeaderLocaleKorean } from './ko.locales';
import { HeaderLocalePolish } from './pl.locales';
import { HeaderLocalePortuguese } from './pt-br.locales';
import { HeaderLocaleRussian } from './ru.locales';
import { HeaderLocaleThai } from './th.locales';
import { HeaderLocaleTurkish } from './tr.locales';
import { HeaderLocaleChinese } from './tw.locales';
import { HeaderLocaleVietnamese } from './vi.locales';

export const HeaderLocales: ILocales<IHeaderLocale> = {
  en: HeaderLocaleEnglish,
  ja: HeaderLocaleJapanese,
  ar: HeaderLocaleArabic,
  de: HeaderLocaleGerman,
  es: HeaderLocaleSpanish,
  fr: HeaderLocaleFrench,
  it: HeaderLocaleItalian,
  ko: HeaderLocaleKorean,
  pl: HeaderLocalePolish,
  'pt-br': HeaderLocalePortuguese,
  ru: HeaderLocaleRussian,
  th: HeaderLocaleThai,
  tr: HeaderLocaleTurkish,
  tw: HeaderLocaleChinese,
  vi: HeaderLocaleVietnamese,
  ms: HeaderLocaleEnglish,
  cs: HeaderLocaleEnglish,
  id: HeaderLocaleEnglish,
  nl: HeaderLocaleEnglish,
};
