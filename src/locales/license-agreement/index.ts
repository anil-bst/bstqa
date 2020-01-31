// tslint:disable: object-literal-key-quotes
import { ILocales, ILicenseAgreementLocale } from '@app/abstractions';
import { LicenseAgreementLocaleEnglish } from './en.locales';
import { LicenseAgreementLocaleJapanese } from './ja.locales';
import { LicenseAgreementLocaleRussian } from './ru.locales';
import { LicenseAgreementLocaleCzech } from './cs.locales';
import { LicenseAgreementLocaleGerman } from './de.locales';
import { LicenseAgreementLocaleSpanish } from './es.locales';
import { LicenseAgreementLocaleFrench } from './fr.locales';
import { LicenseAgreementLocaleIndonesian } from './id.locales';
import { LicenseAgreementLocaleItalian } from './it.locales';
import { LicenseAgreementLocaleKorean } from './ko.locales';
import { LicenseAgreementLocaleMalay } from './ms.locales';
import { LicenseAgreementLocaleDutch } from './ni.locales';
import { LicenseAgreementLocalePortuguese } from './pt-br.locales';
import { LicenseAgreementLocalePolish } from './pl.locales';
import { LicenseAgreementLocaleTurkish } from './tr.locales';
import { LicenseAgreementLocaleArabic } from './ar.locales';
import { LicenseAgreementLocaleThai } from './th.locales';
import { LicenseAgreementLocaleChinese } from './tw.locales';
import { LicenseAgreementLocaleVietnamese } from './vi.locales';

export const LicenseAgreementLocales: ILocales<ILicenseAgreementLocale> = {
  en: LicenseAgreementLocaleEnglish,
  ja: LicenseAgreementLocaleJapanese,
  ar: LicenseAgreementLocaleArabic,
  cs: LicenseAgreementLocaleCzech,
  de: LicenseAgreementLocaleGerman,
  es: LicenseAgreementLocaleSpanish,
  fr: LicenseAgreementLocaleFrench,
  id: LicenseAgreementLocaleIndonesian,
  it: LicenseAgreementLocaleItalian,
  ko: LicenseAgreementLocaleKorean,
  ms: LicenseAgreementLocaleMalay,
  nl: LicenseAgreementLocaleDutch,
  'pt-br': LicenseAgreementLocalePortuguese,
  pl: LicenseAgreementLocalePolish,
  ru: LicenseAgreementLocaleRussian,
  tr: LicenseAgreementLocaleTurkish,
  th: LicenseAgreementLocaleThai,
  tw: LicenseAgreementLocaleChinese,
  vi: LicenseAgreementLocaleVietnamese,
};
