import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRenderer } from '@app/abstractions';
import { LocaleUtils } from '@app/utils';

@Injectable()
export class AddCommonLocaleInterceptor implements NestInterceptor {
  constructor(private localeUtils: LocaleUtils) {}
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<IRenderer> {
    // transforming the response to add common locales.
    return next.handle().pipe(map(this.addCommonLocales.bind(this)));
  }

  /**
   * Adds localized version of common content like footer, header, metadata
   * @param response: response with locale returned from controller, and data to show in templates
   */
  private addCommonLocales(response: IRenderer): IRenderer {
    return this.localeUtils.getCommonLocalesData(response);
  }
}
