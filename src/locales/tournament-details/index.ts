// tslint:disable: object-literal-key-quotes
import { ILocales, ITournamentDetailLocale } from '@app/abstractions';
import { TournamentDetailLocaleEnglish } from './en.locales';
import { TournamentDetailLocaleJapanese } from './ja.locales';
import { TournamentDetailLocaleKorean } from './ko.locales';
import { TournamentDetailLocaleArabic } from './ar.locales';
import { TournamentDetailLocaleGerman } from './de.locales';
import { TournamentDetailLocaleSpanish } from './es.locales';
import { TournamentDetailLocaleFrench } from './fr.locales';
import { TournamentDetailLocaleItalian } from './it.locales';
import { TournamentDetailLocalePolish } from './pl.locales';
import { TournamentDetailLocaleRussian } from './ru.locales';
import { TournamentDetailLocaleTurkish } from './tr.locales';
import { TournamentDetailLocaleThai } from './th.locales';
import { TournamentDetailLocaleChinese } from './tw.locales';
import { TournamentDetailLocaleVietnamese } from './vi.locales';

export const TournamentDetailsLocales: ILocales<ITournamentDetailLocale> = {
  en: TournamentDetailLocaleEnglish,
  ja: TournamentDetailLocaleJapanese,
  ko: TournamentDetailLocaleKorean,
  ar: TournamentDetailLocaleArabic,
  cs: TournamentDetailLocaleEnglish,
  de: TournamentDetailLocaleGerman,
  es: TournamentDetailLocaleSpanish,
  fr: TournamentDetailLocaleFrench,
  id: TournamentDetailLocaleEnglish,
  it: TournamentDetailLocaleItalian,
  ms: TournamentDetailLocaleEnglish,
  nl: TournamentDetailLocaleEnglish,
  'pt-br': TournamentDetailLocaleEnglish,
  pl: TournamentDetailLocalePolish,
  ru: TournamentDetailLocaleRussian,
  tr: TournamentDetailLocaleTurkish,
  th: TournamentDetailLocaleThai,
  tw: TournamentDetailLocaleChinese,
  vi: TournamentDetailLocaleVietnamese,
};
