import { SupportedLocalesEnum } from '@app/enums';
import {
  ILocales,
  IRenderer,
  ISeoUrlsLocale,
  IAlternateUrl,
  RouteType,
} from '@app/abstractions';
import { SUPPORTED_LOCALES } from '@app/constants';
import { Injectable } from '@nestjs/common';
import { appConfig } from '@app/config';
import { HeaderLocales, FooterLocales } from '@app/locales';
@Injectable()
export class LocaleUtils {
  isValid(locale: SupportedLocalesEnum) {
    return (
      Object.keys(SupportedLocalesEnum)
        .filter(k => isNaN(Number(k)))
        .filter(k => SupportedLocalesEnum[k] === locale).length > 0
    );
  }

  getSupportedLocalesData(route: RouteType) {
    const {
      supportedLocales = Object.keys(
        SUPPORTED_LOCALES,
      ) as SupportedLocalesEnum[],
      unsupportedLocales = [],
    } = route;

    const supportedLocalesData: Array<{
      code: SupportedLocalesEnum;
      title: string;
      country: string;
    }> = [];

    for (const code of supportedLocales) {
      if (!unsupportedLocales.includes(code)) {
        supportedLocalesData.push(SUPPORTED_LOCALES[code]);
      }
    }

    return supportedLocalesData;
  }

  isLocaleSupported(route: RouteType, locale: SupportedLocalesEnum) {
    // if the value of locale is not present throw 404.
    if (!this.isValid(locale)) {
      return false;
    }

    const supportedLocalesData = this.getSupportedLocalesData(route);
    // if the value of supported locales is limited,
    // then check if the provided locale exists within the supported locales list
    const isLocaleSupported = !!supportedLocalesData.find(
      supportedLocale => supportedLocale.code === locale,
    );

    return isLocaleSupported;
  }

  getLocale(localeCollection: ILocales<any>, locale: SupportedLocalesEnum) {
    if (!this.isValid(locale)) {
      // tslint:disable-next-line: quotemark
      throw new Error('Invalid Locale');
    }

    if (!localeCollection[locale]) {
      throw new Error('Locale not Provided for provided LocaleCollection');
    }

    return localeCollection[locale];
  }

  /**
   * Adds localized version of common content like footer, header, metadata
   * @param response: response with locale returned from controller, and data to show in templates
   */
  getCommonLocalesData(response: IRenderer): IRenderer {
    let { locale } = response;
    const { route } = response;
    locale = SUPPORTED_LOCALES[locale] ? locale : SupportedLocalesEnum.ENGLISH;
    const supportedLocalesData = this.getSupportedLocalesData(route);
    const bodyClass = route.paths[0];
    let direction = 'ltr';

    const header =
      HeaderLocales[locale] || HeaderLocales[SupportedLocalesEnum.ENGLISH];
    const footer =
      FooterLocales[locale] || FooterLocales[SupportedLocalesEnum.ENGLISH];
    const { request } = response;
    const alternate: IAlternateUrl[] = supportedLocalesData.map(
      supportedLocale => {
        let hreflang: string;
        let url: string;
        let path: string;
        if (locale === SupportedLocalesEnum.ENGLISH) {
          path = request.path.length === 1 ? '' : request.path;
        } else {
          path = request.path.replace(`/${locale}`, '') || '';
        }

        if (supportedLocale.code === SupportedLocalesEnum.ENGLISH) {
          hreflang = 'x-default';
          url = `${appConfig.baseHost}${path}`;
        } else {
          hreflang = supportedLocale.code;
          url = `${appConfig.baseHost}/${supportedLocale.code}${path}`;
        }

        if (locale === SupportedLocalesEnum.ARABIC) {
          direction = 'rtl';
        }

        return {
          languageTitle: supportedLocale.title,
          hreflang,
          url,
          direction,
        };
      },
    );
    const canonical = `${appConfig.baseHost}${request.path}`;
    // check for page no.
    const originalUrl = request.originalUrl;
    const pages = {
      current: null,
      prev: null,
      next: null,
    };
    if (originalUrl.includes('page')) {
      const currentPage = parseInt(originalUrl.split('page=')[1], 10);
      pages.current = currentPage;
      pages.next = currentPage + 1;
      pages.prev = currentPage - 1;
    }
    const seoUrlsData: ISeoUrlsLocale = {
      locale,
      canonical,
      alternate,
      pages,
    };

    const languages = supportedLocalesData
      .map(supportedLocale => {
        let hreflang: string;
        let url: string;
        let path: string;
        if (locale === SupportedLocalesEnum.ENGLISH) {
          path = request.path;
        } else {
          path = request.path.replace(`/${locale}`, '') || '/';
        }
        hreflang = supportedLocale.code;
        url = `/${supportedLocale.code}${path}`;
        return {
          languageTitle: supportedLocale.title,
          hreflang,
          url,
        };
      })
      .filter(language => language.hreflang !== locale);

    const selected = {
      url: seoUrlsData.canonical,
      hreflang: seoUrlsData.locale,
      languageTitle: SUPPORTED_LOCALES[locale].title,
    };

    const languageSelector: {
      selected: IAlternateUrl;
      languages: IAlternateUrl[];
    } = { selected, languages };
    return {
      ...response,
      data: {
        ...response.data,
        metadata: {
          ...response.data.metadata,
          canonical,
          isNotProduction: !appConfig.isProduction,
        },
        header: {
          ...header,
          languageSelector,
        },
        footer,
        seoUrlsData,
        bodyClass,
      },
      supportedLocalesData,
      locale,
      direction,
    };
  }
}
