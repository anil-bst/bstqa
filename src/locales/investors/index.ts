// tslint:disable: object-literal-key-quotes
import { ILocales, IInvestorsLocale } from '@app/abstractions';
import { InvestorsLocaleEnglish } from './en.locales';
import { InvestorsLocaleJapanese } from './ja.locales';
import { InvestorsLocaleKorean } from './ko.locales';
import { InvestorsLocaleArabic } from './ar.locales';
import { InvestorsLocaleGerman } from './de.locales';
import { InvestorsLocaleSpanish } from './es.locales';
import { InvestorsLocaleFrench } from './fr.locales';
import { InvestorsLocaleItalian } from './it.locales';
import { InvestorsLocalePolish } from './pl.locales';
import { InvestorsLocalePortuguese } from './pt-br.locales';
import { InvestorsLocaleRussian } from './ru.locales';
import { InvestorsLocaleThai } from './th.locales';
import { InvestorsLocaleTurkish } from './tr.locales';
import { InvestorsLocaleChinese } from './tw.locales';
import { InvestorsLocaleVietnamese } from './vi.locales';

export const InvestorsLocales: ILocales<IInvestorsLocale> = {
  en: InvestorsLocaleEnglish,
  ar: InvestorsLocaleArabic,
  cs: InvestorsLocaleEnglish,
  de: InvestorsLocaleGerman,
  es: InvestorsLocaleSpanish,
  fr: InvestorsLocaleFrench,
  id: InvestorsLocaleEnglish,
  it: InvestorsLocaleItalian,
  ja: InvestorsLocaleJapanese,
  ko: InvestorsLocaleKorean,
  ms: InvestorsLocaleEnglish,
  nl: InvestorsLocaleEnglish,
  pl: InvestorsLocalePolish,
  'pt-br': InvestorsLocalePortuguese,
  ru: InvestorsLocaleRussian,
  tr: InvestorsLocaleTurkish,
  th: InvestorsLocaleThai,
  tw: InvestorsLocaleChinese,
  vi: InvestorsLocaleVietnamese,
};
