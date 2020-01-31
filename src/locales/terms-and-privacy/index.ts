// tslint:disable: object-literal-key-quotes
import { ILocales, ITermsAndPrivacyLocale } from '@app/abstractions';
import { TermsAndPrivacyLocaleEnglish } from './en.locales';
import { TermsAndPrivacyLocaleKorean } from './ko.locales';
import { TermsAndPrivacyLocaleArabic } from './ar.locales';
import { TermsAndPrivacyLocaleCzech } from './cs.locales';
import { TermsAndPrivacyLocaleGerman } from './de.locales';
import { TermsAndPrivacyLocaleSpanish } from './es.locales';
import { TermsAndPrivacyLocaleIndonesian } from './id.locales';
import { TermsAndPrivacyLocaleFrench } from './fr.locales';
import { TermsAndPrivacyLocaleItalian } from './it.locales';
import { TermsAndPrivacyLocaleMalay } from './ms.locales';
import { TermsAndPrivacyLocaleDutch } from './nl.locales';
import { TermsAndPrivacyLocalePortuguese } from './pt-br.locales';
import { TermsAndPrivacyLocalePolish } from './pl.locales';
import { TermsAndPrivacyLocaleRussian } from './ru.locales';
import { TermsAndPrivacyLocaleTurkish } from './tr.locales';
import { TermsAndPrivacyLocaleThai } from './th.locales';
import { TermsAndPrivacyLocaleChinese } from './tw.locales';
import { TermsAndPrivacyLocaleVietnamese } from './vi.locales';

export const TermsAndPrivacyLocales: ILocales<ITermsAndPrivacyLocale> = {
  en: TermsAndPrivacyLocaleEnglish,
  ja: TermsAndPrivacyLocaleEnglish,

  ko: TermsAndPrivacyLocaleKorean,
  ar: TermsAndPrivacyLocaleArabic,
  cs: TermsAndPrivacyLocaleCzech,
  de: TermsAndPrivacyLocaleGerman,
  es: TermsAndPrivacyLocaleSpanish,
  fr: TermsAndPrivacyLocaleFrench,
  id: TermsAndPrivacyLocaleIndonesian,
  it: TermsAndPrivacyLocaleItalian,
  ms: TermsAndPrivacyLocaleMalay,
  nl: TermsAndPrivacyLocaleDutch,
  'pt-br': TermsAndPrivacyLocalePortuguese,
  pl: TermsAndPrivacyLocalePolish,
  ru: TermsAndPrivacyLocaleRussian,
  tr: TermsAndPrivacyLocaleTurkish,
  th: TermsAndPrivacyLocaleThai,
  tw: TermsAndPrivacyLocaleChinese,
  vi: TermsAndPrivacyLocaleVietnamese,
};
