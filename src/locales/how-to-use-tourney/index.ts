// tslint:disable: object-literal-key-quotes
import { ILocales } from '@app/abstractions';
import { IHowToUseTourneyLocale } from '@app/abstractions/locale';
import { HowToUseTourneyLocaleEnglish } from './en.locales';
import { HowToUseTourneyLocaleJapanese } from './ja.locales';
import { HowToUseTourneyLocaleKorean } from './ko.locales';
import { HowToUseTourneyLocaleArabic } from './ar.locales';
import { HowToUseTourneyLocaleGerman } from './de.locales';
import { HowToUseTourneyLocaleItalian } from './it.locales';
import { HowToUseTourneyLocaleSpanish } from './es.locales';
import { HowToUseTourneyLocaleFrench } from './fr.locales';
import { HowToUseTourneyLocalePolish } from './pl.locales';
import { HowToUseTourneyLocalePortuguese } from './pt-br.locales';
import { HowToUseTourneyLocaleRussian } from './ru.locales';
import { HowToUseTourneyLocaleThai } from './th.locales';
import { HowToUseTourneyLocaleTurkish } from './tr.locales';
import { HowToUseTourneyLocaleChinese } from './tw.locales';
import { HowToUseTourneyLocaleVietnamese } from './vi.locales';

export const HowToUseTourneyLocales: ILocales<IHowToUseTourneyLocale> = {
  en: HowToUseTourneyLocaleEnglish,
  ar: HowToUseTourneyLocaleArabic,
  cs: HowToUseTourneyLocaleEnglish,
  de: HowToUseTourneyLocaleGerman,
  es: HowToUseTourneyLocaleSpanish,
  fr: HowToUseTourneyLocaleFrench,
  id: HowToUseTourneyLocaleEnglish,
  it: HowToUseTourneyLocaleItalian,
  ja: HowToUseTourneyLocaleJapanese,
  ko: HowToUseTourneyLocaleKorean,
  ms: HowToUseTourneyLocaleEnglish,
  nl: HowToUseTourneyLocaleEnglish,
  'pt-br': HowToUseTourneyLocalePortuguese,
  pl: HowToUseTourneyLocalePolish,
  ru: HowToUseTourneyLocaleRussian,
  tr: HowToUseTourneyLocaleTurkish,
  th: HowToUseTourneyLocaleThai,
  tw: HowToUseTourneyLocaleChinese,
  vi: HowToUseTourneyLocaleVietnamese,
};
