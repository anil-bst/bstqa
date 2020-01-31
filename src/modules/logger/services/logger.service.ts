import { Injectable, Logger } from '@nestjs/common';
import bugsnag from '@bugsnag/js';
import { appConfig, loggerApiKey } from '@app/config';

@Injectable()
export class LoggerService extends Logger {
  constructor() {
    super();
  }

  // private async logRemotely(
  //   message: string | Error,
  //   context?: string,
  //   trace?: string,
  // ) {
  //   const bugsnagClient = bugsnag(loggerApiKey);
  //   await bugsnagClient.notify(message, {
  //     metaData: {
  //       context,
  //       trace,
  //       env: appConfig.env,
  //       version: appConfig.appVersion,
  //     },
  //   });
  // }

  async log(message: string, context?: string) {
    // if (appConfig.isRemoteEnvironment) {
    //   try {
    //     await this.logRemotely(message, context);
    //   } catch (e) {
    //     super.error(new Error('FAILED TO LOG REMOTELY'));
    //   }
    // }
    super.log(message, context);
  }

  async error(error: Error, context?: string) {
    // if (appConfig.isRemoteEnvironment) {
    //   try {
    //     await this.logRemotely(error, context, error.stack);
    //   } catch (e) {
    //     super.error(new Error('FAILED TO LOG REMOTELY'));
    //   }
    // }
    super.error(error, error.stack, context);
  }

  // new logger code
}
