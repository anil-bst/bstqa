// tslint:disable: object-literal-key-quotes
import { ILocales } from '@app/abstractions';
import { ITeamLocale } from '@app/abstractions/locale/team.interface';
import { TeamLocalesEnglish } from './en.locales';
import { TeamLocalesJapanese } from './ja.locales';
import { TeamLocalesKorean } from './ko.locales';
import { TeamLocalesArabic } from './ar.locales';
import { TeamLocalesCzech } from './cs.locales';
import { TeamLocalesGerman } from './de.locales';
import { TeamLocalesSpanish } from './es.locales';
import { TeamLocalesFrench } from './fr.locales';
import { TeamLocalesIndonesian } from './id.locales';
import { TeamLocalesItalian } from './it.locales';
import { TeamLocalesMalay } from './ms.locales';
import { TeamLocalesDutch } from './nl.locales';
import { TeamLocalesPortuguese } from './pt-br.locales';
import { TeamLocalesPolish } from './pl.locales';
import { TeamLocalesRussian } from './ru.locales';
import { TeamLocalesTurkish } from './tr.locales';
import { TeamLocalesThai } from './th.locales';
import { TeamLocalesChinese } from './tw.locales';
import { TeamLocalesVietnamese } from './vi.locales';

export const TeamLocales: ILocales<ITeamLocale> = {
  en: TeamLocalesEnglish,
  ja: TeamLocalesJapanese,
  ko: TeamLocalesKorean,
  ar: TeamLocalesArabic,
  cs: TeamLocalesCzech,
  de: TeamLocalesGerman,
  es: TeamLocalesSpanish,
  fr: TeamLocalesFrench,
  id: TeamLocalesIndonesian,
  it: TeamLocalesItalian,
  ms: TeamLocalesMalay,
  nl: TeamLocalesDutch,
  'pt-br': TeamLocalesPortuguese,
  pl: TeamLocalesPolish,
  ru: TeamLocalesRussian,
  tr: TeamLocalesTurkish,
  th: TeamLocalesThai,
  tw: TeamLocalesChinese,
  vi: TeamLocalesVietnamese,
};
