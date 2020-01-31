// tslint:disable: object-literal-key-quotes
import { ILocales } from '@app/abstractions';
import { IHomeLocale } from '@app/abstractions/locale';
import { HomeLocaleEnglish } from './en.locales';
import { HomeLocaleJapanese } from './ja.locales';
import { HomeLocaleKoream } from './ko.locales';
import { HomeLocaleArabic } from './ar.locales';
import { HomeLocaleSpanish } from './es.locales';
import { HomeLocalePortuguese } from './pt-br.locales';
import { HomeLocaleThai } from './th.locales';
import { HomeLocaleGerman } from './de.locales';
import { HomeLocaleFrench } from './fr.locales';
import { HomeLocalePolish } from './pl.locales';
import { HomeLocaleRussian } from './ru.locales';
import { HomeLocaleTurkish } from './tr.locales';
import { HomeLocaleChinese } from './tw.locales';
import { HomeLocaleCzech } from './cs.locales';
import { HomeLocaleIndonesian } from './id.locales';
import { HomeLocaleItalian } from './it.locales';
import { HomeLocaleMalay } from './ms.locales';
import { HomeLocaleDutch } from './nl.locales';
import { HomeLocaleVietnamese } from './vi.locales';

export const HomeLocales: ILocales<IHomeLocale> = {
  en: HomeLocaleEnglish,
  ar: HomeLocaleArabic,
  cs: HomeLocaleCzech,
  de: HomeLocaleGerman,
  es: HomeLocaleSpanish,
  fr: HomeLocaleFrench,
  id: HomeLocaleIndonesian,
  it: HomeLocaleItalian,
  ja: HomeLocaleJapanese,
  ko: HomeLocaleKoream,
  ms: HomeLocaleMalay,
  nl: HomeLocaleDutch,
  'pt-br': HomeLocalePortuguese,
  pl: HomeLocalePolish,
  ru: HomeLocaleRussian,
  tr: HomeLocaleTurkish,
  th: HomeLocaleThai,
  tw: HomeLocaleChinese,
  vi: HomeLocaleVietnamese,
};
