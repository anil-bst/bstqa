// tslint:disable: object-literal-key-quotes
import { ILocales, IFindTournamentLocale } from '@app/abstractions';
import { FindTournamentLocalesEnglish } from './en.locales';
import { FindTournamentLocalesJapanese } from './ja.locales';
import { FindTournamentLocalesGerman } from './de.locales';
import { FindTournamentLocalesArabic } from './ar.locales';
import { FindTournamentLocalesSpanish } from './es.locales';
import { FindTournamentLocalesFrench } from './fr.locales';
import { FindTournamentLocalesItalian } from './it.locales';
import { FindTournamentLocalesKorean } from './ko.locales';
import { FindTournamentLocalesPolish } from './pl.locales';
import { FindTournamentLocalesPortuguese } from './pt-br.locales';
import { FindTournamentLocalesRussian } from './ru.locales';
import { FindTournamentLocalesThai } from './th.locales';
import { FindTournamentLocalesTurkish } from './tr.locales';
import { FindTournamentLocalesChinese } from './tw.locales';
import { FindTournamentLocalesVietnamese } from './vi.locales';
import { FindTournamentLocalesCzech } from './cs.locales';
import { FindTournamentLocalesIndonesian } from './id.locales';
import { FindTournamentLocalesMalay } from './ms.locales';
import { FindTournamentLocalesDutch } from './nl.locales';

export const FindTournamentLocales: ILocales<IFindTournamentLocale> = {
  en: FindTournamentLocalesEnglish,
  ar: FindTournamentLocalesArabic,
  cs: FindTournamentLocalesCzech,
  de: FindTournamentLocalesGerman,
  es: FindTournamentLocalesSpanish,
  fr: FindTournamentLocalesFrench,
  id: FindTournamentLocalesIndonesian,
  it: FindTournamentLocalesItalian,
  ja: FindTournamentLocalesJapanese,
  ko: FindTournamentLocalesKorean,
  ms: FindTournamentLocalesMalay,
  nl: FindTournamentLocalesDutch,
  'pt-br': FindTournamentLocalesPortuguese,
  pl: FindTournamentLocalesPolish,
  ru: FindTournamentLocalesRussian,
  tr: FindTournamentLocalesTurkish,
  th: FindTournamentLocalesThai,
  tw: FindTournamentLocalesChinese,
  vi: FindTournamentLocalesVietnamese,
};
