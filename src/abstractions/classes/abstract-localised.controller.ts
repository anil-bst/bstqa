import { SupportedLocalesEnum } from '@app/enums';
import { NotFoundException, Inject } from '@nestjs/common';
import { LocaleUtils } from '@app/utils';
import { RouteType } from '../types/route.interface';

export abstract class AbstractLocalisedController {
  constructor(protected localeUtils: LocaleUtils) {}
  getLocaleData(route: RouteType, locale: SupportedLocalesEnum) {
    if (!this.localeUtils.isLocaleSupported(route, locale)) {
      throw new NotFoundException();
    }
    return this.localeUtils.getLocale(route.localeCollection, locale);
  }
}
