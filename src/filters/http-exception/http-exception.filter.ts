import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  NotFoundException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { SupportedLocalesEnum } from '@app/enums';
import { LocaleUtils } from '@app/utils';
import { appConfig } from '@app/config';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private localeUtils: LocaleUtils) {}
  catch(error: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const request = host.switchToHttp().getRequest();
    const status =
      error instanceof HttpException
        ? error.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    switch (status) {
      case HttpStatus.NOT_FOUND:
        return this.handleNotFoundException(error, request, response);
      case HttpStatus.INTERNAL_SERVER_ERROR:
        return this.handleInternalServerError(error, request, response);
      case HttpStatus.UNAUTHORIZED:
        return this.handleUnauthorizedError(error, request, response);
      default:
        return this.handleInternalServerError(error, request, response);
    }
  }

  handleNotFoundException(
    error: NotFoundException,
    request: Request,
    response: Response,
  ) {
    const locale =
      request.cookies.locale ||
      request.params.locale ||
      SupportedLocalesEnum.ENGLISH;
    const data = this.localeUtils.getCommonLocalesData({
      locale,
      route: {
        localeCollection: {},
        paths: [''],
        template: 'views/errors/404',
      },
      request,
      data: {},
    });
    return response
      .status(HttpStatus.NOT_FOUND)
      .render(data.route.template, data);
  }

  handleInternalServerError(
    error: InternalServerErrorException,
    req: Request,
    res: Response,
  ) {
    if (appConfig.isProduction) {
      const message = error.stack;
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(message);
      // return response.status(HttpStatus.INTERNAL_SERVER_ERROR).render('views/500');
    } else {
      const message = error.stack;
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(message);
    }
  }

  handleUnauthorizedError(
    error: UnauthorizedException,
    req: Request,
    res: Response,
  ) {
    if (appConfig.isProduction) {
      const message = 'Token is required';
      return res.status(HttpStatus.UNAUTHORIZED).send(message);
      // return response.status(HttpStatus.INTERNAL_SERVER_ERROR).render('views/500');
    } else {
      const message = 'Token is required';
      return res.status(HttpStatus.UNAUTHORIZED).send(message);
    }
  }
}
