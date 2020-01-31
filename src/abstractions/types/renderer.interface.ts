import { SupportedLocalesEnum } from '@app/enums/supported-locales.enum';
import { Request } from 'express';
import { RouteType } from './route.interface';

// all controllers must return a type of IRenderer
export interface IRenderer<T = { [key: string]: any }> {
  locale: SupportedLocalesEnum;
  request: Request;
  route: RouteType;
  data: T;
  [key: string]: any;
}
