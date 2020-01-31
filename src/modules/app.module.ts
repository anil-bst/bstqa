import {
  Module,
  MiddlewareConsumer,
  RequestMethod,
  HttpModule,
} from '@nestjs/common';
import { FrontendModule } from './frontend/frontend.module';
import { SharedModule } from './shared/shared.module';
import { LoggerModule } from './logger/logger.module';
import { RedirectionMiddleware } from '@app/middlewares';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from '@app/filters/http-exception/http-exception.filter';
import { ScheduleModule } from 'nest-schedule';
import { ConfigModule } from '@config/config.module';
import { ApiModule } from './api';
import { CronsService } from '@app/crons/crons.service';
@Module({
  imports: [
    ConfigModule,
    FrontendModule,
    SharedModule,
    LoggerModule.forRoot(),
    HttpModule.register({ timeout: 25000 }),
    ApiModule,
    ScheduleModule.register(),
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    CronsService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(RedirectionMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
