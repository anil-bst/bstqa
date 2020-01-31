// tslint:disable: object-literal-key-quotes
import { ILocales } from '@app/abstractions';
import { IFooterLocale } from '@app/abstractions/locale/common';
import { FooterLocaleEnglish } from './en.locales';
import { FooterLocaleJapanese } from './ja.locales';
import { FooterLocaleArabic } from './ar.locales';
import { FooterLocaleGerman } from './de.locales';
import { FooterLocaleSpanish } from './es.locales';
import { FooterLocaleFrench } from './fr.locales';
import { FooterLocaleItalian } from './it.locales';
import { FooterLocaleKorean } from './ko.locales';
import { FooterLocalePolish } from './pl.locales';
import { FooterLocalePortuguese } from './pt-br.locales';
import { FooterLocaleRussian } from './ru.locales';
import { FooterLocaleThai } from './th.locales';
import { FooterLocaleTurkish } from './tr.locales';
import { FooterLocaleChinese } from './tw.locales';
import { FooterLocaleVietnamese } from './vi.locales';

export const FooterLocales: ILocales<IFooterLocale> = {
  en: FooterLocaleEnglish,
  ja: FooterLocaleJapanese,
  ar: FooterLocaleArabic,
  de: FooterLocaleGerman,
  es: FooterLocaleSpanish,
  fr: FooterLocaleFrench,
  it: FooterLocaleItalian,
  ko: FooterLocaleKorean,
  pl: FooterLocalePolish,
  'pt-br': FooterLocalePortuguese,
  ru: FooterLocaleRussian,
  th: FooterLocaleThai,
  tr: FooterLocaleTurkish,
  tw: FooterLocaleChinese,
  vi: FooterLocaleVietnamese,
  ms: FooterLocaleEnglish,
  cs: FooterLocaleEnglish,
  id: FooterLocaleEnglish,
  nl: FooterLocaleEnglish,
};
