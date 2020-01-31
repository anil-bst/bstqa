// tslint:disable: object-literal-key-quotes
import { ILocales, ICommunityTournamentsType } from '@app/abstractions';
import { CreateATournamentLocalesLocaleEnglish } from './en.locales';
import { CreateATournamentLocalesLocaleJapanese } from './ja.locales';
import { CreateATournamentLocalesLocaleArabic } from './ar.locales';
import { CreateATournamentLocalesLocaleGerman } from './de.locales';
import { CreateATournamentLocalesLocaleSpanish } from './es.locales';
import { CreateATournamentLocalesLocaleFrench } from './fr.locales';
import { CreateATournamentLocalesLocaleItalian } from './it.locales';
import { CreateATournamentLocalesLocaleKorean } from './ko.locales';
import { CreateATournamentLocalesLocalePolish } from './pl.locales';
import { CreateATournamentLocalesLocalePortuguese } from './pt-br.locales';
import { CreateATournamentLocalesLocaleRussian } from './ru.locales';
import { CreateATournamentLocalesLocaleThai } from './th.locales';
import { CreateATournamentLocalesLocaleTurkish } from './tr.locales';
import { CreateATournamentLocalesLocaleVietnamese } from './vi.locales';
import { CreateATournamentLocalesLocaleChinese } from './tw.locales';

export const CreateATournamentLocales: ILocales<ICommunityTournamentsType> = {
  en: CreateATournamentLocalesLocaleEnglish,
  ar: CreateATournamentLocalesLocaleArabic,
  cs: CreateATournamentLocalesLocaleEnglish,
  de: CreateATournamentLocalesLocaleGerman,
  es: CreateATournamentLocalesLocaleSpanish,
  fr: CreateATournamentLocalesLocaleFrench,
  id: CreateATournamentLocalesLocaleEnglish,
  it: CreateATournamentLocalesLocaleItalian,
  ja: CreateATournamentLocalesLocaleJapanese,
  ko: CreateATournamentLocalesLocaleKorean,
  ms: CreateATournamentLocalesLocaleEnglish,
  nl: CreateATournamentLocalesLocaleEnglish,
  'pt-br': CreateATournamentLocalesLocalePortuguese,
  pl: CreateATournamentLocalesLocalePolish,
  ru: CreateATournamentLocalesLocaleRussian,
  tr: CreateATournamentLocalesLocaleTurkish,
  th: CreateATournamentLocalesLocaleThai,
  tw: CreateATournamentLocalesLocaleChinese,
  vi: CreateATournamentLocalesLocaleVietnamese,
};
