import { Module, DynamicModule, Global } from '@nestjs/common';
import { LoggerService } from './services/logger.service';

@Global()
@Module({
  providers: [LoggerService],
})
export class LoggerModule {
  static forRoot(): DynamicModule {
    return {
      module: LoggerModule,
      providers: [LoggerService],
      exports: [LoggerService],
    };
  }
}
