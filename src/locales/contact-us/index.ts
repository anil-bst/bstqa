// tslint:disable: object-literal-key-quotes
import { ILocales, IContactUsLocale } from '@app/abstractions';
import { ContactUsLocaleEnglish } from './en.locales';
import { ContactUsLocaleJapanese } from './ja.locales';
import { ContactUsLocaleArabic } from './ar.locales';
import { ContactUsLocaleGerman } from './de.locales';
import { ContactUsLocaleSpanish } from './es.locales';
import { ContactUsLocaleFrench } from './fr.locales';
import { ContactUsLocaleItalian } from './it.locales';
import { ContactUsLocaleKorean } from './ko.locales';
import { ContactUsLocalePolish } from './pl.locales';
import { ContactUsLocaleRussian } from './ru.locales';
import { ContactUsLocaleThai } from './th.locales';
import { ContactUsLocaleTurkish } from './tr.locales';
import { ContactUsLocaleChinese } from './tw.locales';
import { ContactUsLocaleVietnamese } from './vi.locales';
import { CookiePolicyLocaleEnglish } from '../cookie-policy/en.locales';

export const ContactUsLocales: ILocales<IContactUsLocale> = {
  en: ContactUsLocaleEnglish,
  ar: ContactUsLocaleArabic,
  cs: ContactUsLocaleEnglish,
  de: ContactUsLocaleGerman,
  es: ContactUsLocaleSpanish,
  fr: ContactUsLocaleFrench,
  id: ContactUsLocaleEnglish,
  it: ContactUsLocaleItalian,
  ja: ContactUsLocaleJapanese,
  ko: ContactUsLocaleKorean,
  ms: ContactUsLocaleEnglish,
  nl: ContactUsLocaleEnglish,
  'pt-br': ContactUsLocaleEnglish,
  pl: ContactUsLocalePolish,
  ru: ContactUsLocaleRussian,
  th: ContactUsLocaleThai,
  tr: ContactUsLocaleTurkish,
  tw: ContactUsLocaleChinese,
  vi: ContactUsLocaleVietnamese,
};
