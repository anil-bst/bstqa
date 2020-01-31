import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, response } from 'express';
import { SupportedLocalesEnum } from '@app/enums';
import { PageRedirectionMap } from './page-redirection-map';
import { LocaleRedirectionMap } from './locale-redirection-map';
import { Reader } from '@maxmind/geoip2-node';
import { appConfig } from '@app/config';
import { RegisteredCountryRecord } from '@maxmind/geoip2-node';
import { LoggerService } from '@app/modules/logger/services/logger.service';

@Injectable()
export class RedirectionMiddleware implements NestMiddleware {
  constructor(private readonly logger: LoggerService) {}
  async use(req: Request, res: Response, next: () => void) {
    const { originalUrl } = req;

    // const lowerCaseRedirect = this.toLowerCaseRedirect(originalUrl);
    // if (lowerCaseRedirect) {
    //   return res.redirect(301, lowerCaseRedirect);
    // }

    const nonSlashRedirect = this.toNonSlashRedirect(originalUrl);
    if (nonSlashRedirect) {
      return res.redirect(301, nonSlashRedirect);
    }

    const englishLocaleToBaseLocaleRedirect = this.toEnglishLocaleToBaseLocaleRedirect(
      originalUrl,
    );
    if (englishLocaleToBaseLocaleRedirect) {
      return res.redirect(301, englishLocaleToBaseLocaleRedirect);
    }

    const pageInRedirectionMap = this.toPageInRedirectionMap(originalUrl);
    if (pageInRedirectionMap) {
      return res.redirect(301, pageInRedirectionMap);
    }

    const geoBasedRedirection = await this.toGeoBasedRedirectionMap(
      req,
      originalUrl,
    );

    if (geoBasedRedirection) {
      return res.redirect(302, geoBasedRedirection);
    }

    next();
  }

  /**
   * returns redirection url if  url is not in lower case
   * @param url
   */
  private toLowerCaseRedirect(url: string) {
    if (url.match(/^(?=.*[A-Z]).+$/) && url.length > 1) {
      return url.toLowerCase();
    }
  }

  /**
   * returns redirection url if url is ending with '/' by removing '/'
   * @param url
   */
  private toNonSlashRedirect(url: string) {
    if (url.match(/\/$/) && url.length > 1) {
      return url.substring(0, url.length - 1);
    }
  }

  /**
   * returns redirection url if locale is English, by removing english
   * @param url
   */
  private toEnglishLocaleToBaseLocaleRedirect(url: string) {
    const englishLocalePattern = `/${SupportedLocalesEnum.ENGLISH}`;
    if (url.startsWith(englishLocalePattern)) {
      return url.replace(englishLocalePattern, '') || '/';
    }
  }

  private toPageInRedirectionMap(url: string) {
    const redirectionUrl = PageRedirectionMap[url];
    if (typeof redirectionUrl !== 'undefined') {
      return redirectionUrl;
    }
  }

  /**
   * returns a redirection if it is the users first request ever and the request is for homepage,
   * @param req
   * @param url
   */
  private async toGeoBasedRedirectionMap(req: Request, url: string) {
    try {
      // redirection is only needed for home page
      if (url !== '/') {
        return;
      }

      // check if locale in cookie exists, if it does, redirection not needed
      const cookieLocale = req.cookies.locale;
      if (cookieLocale) {
        return;
      }

      // get client ip from headers, if ip isn't present skip redirection
      const clientIp = req.headers['x-client-ip'] as string;
      if (!clientIp) {
        return;
      }

      // get country from IP, if country is unidentified skip redirection
      const ipReader = await Reader.open(appConfig.ip_database_path);
      const country = ipReader.country(clientIp)
        .registeredCountry as RegisteredCountryRecord;
      if (!country || !country.isoCode) {
        return;
      }

      // skip redirection if redirection rule isn't present for country
      // or if redirection locale is english
      const countryCode = country.isoCode && country.isoCode.toUpperCase();
      const redirectionLocale = LocaleRedirectionMap[countryCode];
      if (
        !redirectionLocale ||
        redirectionLocale === SupportedLocalesEnum.ENGLISH
      ) {
        return;
      }

      // redirect to locale homepage
      return `/${redirectionLocale}`;
      // tslint:disable-next-line: no-empty
    } catch (e) {}
  }
}
