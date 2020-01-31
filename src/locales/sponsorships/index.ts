// tslint:disable: object-literal-key-quotes
import { ILocales, ISponsorshipsLocale } from '@app/abstractions';
import { SponsorshipsLocalesEnglish } from './en.locales';
import { SponsorshipsLocalesJapanese } from './ja.locales';
import { SponsorshipsLocalesArabic } from './ar.locales';
import { SponsorshipsLocalesGerman } from './de.locales';
import { SponsorshipsLocalesSpanish } from './es.locales';
import { SponsorshipsLocalesFrench } from './fr.locales';
import { SponsorshipsLocalesKorean } from './ko.locales';
import { SponsorshipsLocalesPolish } from './pl.locales';
import { SponsorshipsLocalesRussian } from './ru.locales';
import { SponsorshipsLocalesThai } from './th.locales';
import { SponsorshipsLocalesTurkish } from './tr.locales';
import { SponsorshipsLocalesChinese } from './tw.locales';
import { SponsorshipsLocalesVietnamese } from './vi.locales';
import { SponsorshipsLocalesPortuguese } from './pt-br.locales';
import { SponsorshipsLocalesCzech } from './cs.locales';
import { SponsorshipsLocalesIndonesian } from './id.locales';
import { SponsorshipsLocalesItalian } from './it.locales';

export const SponsorshipsLocales: ILocales<ISponsorshipsLocale> = {
  en: SponsorshipsLocalesEnglish,
  ar: SponsorshipsLocalesArabic,
  cs: SponsorshipsLocalesCzech,
  de: SponsorshipsLocalesGerman,
  es: SponsorshipsLocalesSpanish,
  fr: SponsorshipsLocalesFrench,
  id: SponsorshipsLocalesIndonesian,
  it: SponsorshipsLocalesItalian,
  ja: SponsorshipsLocalesJapanese,
  ko: SponsorshipsLocalesKorean,
  ms: SponsorshipsLocalesEnglish,
  nl: SponsorshipsLocalesEnglish,
  pl: SponsorshipsLocalesPolish,
  ru: SponsorshipsLocalesRussian,
  th: SponsorshipsLocalesThai,
  tr: SponsorshipsLocalesTurkish,
  tw: SponsorshipsLocalesChinese,
  vi: SponsorshipsLocalesVietnamese,
  'pt-br': SponsorshipsLocalesPortuguese,
};
