// tslint:disable: object-literal-key-quotes
import { ILocales, IGameDetailsLocale } from '@app/abstractions';
import { GameDetailsLocalesEnglish } from './en.locales';
import { GameDetailsLocalesJapanese } from './ja.locales';
import { GameDetailsLocalesArabic } from './ar.locales';
import { GameDetailsLocalesGerman } from './de.locales';
import { GameDetailsLocalesSpanish } from './es.locales';
import { GameDetailsLocalesFrench } from './fr.locales';
import { GameDetailsLocalesItalian } from './it.locales';
import { GameDetailsLocalesKorean } from './ko.locales';
import { GameDetailsLocalesPolish } from './pl.locales';
import { GameDetailsLocalesRussian } from './ru.locales';
import { GameDetailsLocalesThai } from './th.locales';
import { GameDetailsLocalesTurkish } from './tr.locales';
import { GameDetailsLocalesChinese } from './tw.locales';
import { GameDetailsLocalesVietnamese } from './vi.locales';

export const GameDetailsLocales: ILocales<IGameDetailsLocale> = {
  en: GameDetailsLocalesEnglish,
  ar: GameDetailsLocalesArabic,
  cs: GameDetailsLocalesEnglish,
  de: GameDetailsLocalesGerman,
  es: GameDetailsLocalesSpanish,
  fr: GameDetailsLocalesFrench,
  id: GameDetailsLocalesEnglish,
  it: GameDetailsLocalesItalian,
  ja: GameDetailsLocalesJapanese,
  ko: GameDetailsLocalesKorean,
  ms: GameDetailsLocalesEnglish,
  nl: GameDetailsLocalesEnglish,
  'pt-br': GameDetailsLocalesEnglish,
  pl: GameDetailsLocalesPolish,
  ru: GameDetailsLocalesRussian,
  tr: GameDetailsLocalesTurkish,
  th: GameDetailsLocalesThai,
  tw: GameDetailsLocalesChinese,
  vi: GameDetailsLocalesVietnamese,
};
