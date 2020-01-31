import { isUndefined } from 'util';
import { RouteType } from '@app/abstractions';
import { SUPPORTED_LOCALES } from '@app/constants';
import { SupportedLocalesEnum } from '@app/enums';
import { Injectable } from '@nestjs/common';
import { LocaleUtils } from '../locale/locale.utils';

@Injectable()
export class RouteUtils {
  constructor(private localeUtils: LocaleUtils) {}
  /**
   * Returns routes with :locale data slugs
   * @param route : Takes a route or an array of routes
   * @param baseRoute: Takes a base route and appends it before the route,
   * @param extension : Takes an extension, default is always html.
   */
  generateAllRoutes(
    route: string | string[],
    baseRoute: string = '',
  ): string[] {
    if (isUndefined(route)) {
      throw new Error('Route cannot be undefined');
    }
    let routes: string[] = [];
    const returnRoutes: string[] = [];
    if (!Array.isArray(route)) {
      routes = [route];
    } else {
      routes = route;
    }
    for (let rt of routes) {
      if (baseRoute) {
        if (rt) {
          rt = `${baseRoute}/${rt}`;
        } else {
          rt = baseRoute;
        }
      }

      returnRoutes.push(rt);
      returnRoutes.push(this.generateLocaleRoute(rt));
    }

    return returnRoutes;
  }

  /**
   * adds a param :locale to the beginning of the route
   * @param route : String Route
   */
  private generateLocaleRoute(route: string): string {
    if (!route.startsWith(':locale')) {
      route = route ? `:locale/${route}` : `:locale`;
    }

    return route;
  }

  /**
   * Returns all routes with their locale values
   * @param routemap An object with each key representing a Route
   */
  getAllLocaleRouteUrls(routemap: { [key: string]: RouteType }) {
    const allUrls = [];
    /* iterating over all routes in provided routemap */
    for (const key of Object.keys(routemap)) {
      if (routemap[key]) {
        const route = routemap[key];
        const urls = route.paths;
        /* for each url for a route, check if a locale route exists */
        urls.forEach(url => {
          if (url.includes(':locale')) {
            /**
             * if a locale route exists,
             * get all supported locales and create list of all localized urls
             */
            const supportedLocales = this.localeUtils.getSupportedLocalesData(
              route,
            );
            supportedLocales.forEach(supportedLocale => {
              if (supportedLocale.code !== SupportedLocalesEnum.ENGLISH) {
                allUrls.push(
                  '/' + url.replace(':locale', supportedLocale.code),
                );
              }
            });
          } else {
            allUrls.push('/' + url);
          }
        });
      }
    }
    return allUrls;
  }
}
