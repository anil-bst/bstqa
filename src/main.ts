import handlebars from 'express-handlebars';
import fs from 'fs';
import https from 'https';
import http from 'http';
import Express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import robots from 'express-robots-txt';
import cookieParser from 'cookie-parser';
import { NestFactory } from '@nestjs/core';
import {
  NestExpressApplication,
  ExpressAdapter,
} from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from '@app/modules';
import { appConfig } from '@config/app.config';
import { LoggerService } from '@app/modules/logger/services/logger.service';
import { HandlebarHelpers } from '@app/utils';

const logger = new LoggerService();
export class Application {
  private static instance: Application = new Application();
  constructor() {
    if (Application.instance) {
      return Application.instance;
    }
    Application.instance = this;
  }

  /**
   * listener for http.listen or https.listen
   */
  private serverStartListener() {
    logger.log(
      `API server ${
        appConfig.isSecure ? 'with https' : 'with http'
      } listening on ${appConfig.host}:${appConfig.port}, in ${appConfig.env}`,
    );
  }

  /**
   * starts a new https server
   * @param app Instance of Express,
   */
  private startSecureServer(app: any) {
    let server: https.Server;
    try {
      logger.log('STARTING WITH HTTPS');
      // key, and cert file paths are used as provided in .env
      const key = fs.readFileSync(
        join(__dirname, '..', appConfig.credentials.key),
        'utf8',
      );
      const cert = fs.readFileSync(
        join(__dirname, '..', appConfig.credentials.cert),
        'utf8',
      );
      const credentials = { key, cert };
      server = https.createServer(credentials, app);

      // start server
      server.listen(appConfig.port, appConfig.host, this.serverStartListener);
      return server;
    } catch (e) {
      logger.error(e, 'could not start server');
    }
  }

  /**
   * starts a new http server
   * @param app Instance of Express,
   */
  private startServer(app: any) {
    let server: http.Server;
    try {
      logger.log('STARTING WITH HTTP');
      server = http.createServer(app);
      server.listen(appConfig.port, appConfig.host, this.serverStartListener);
    } catch (e) {
      logger.error(e, 'could not start server');
    }
  }

  /**
   * creates new ExpressApp,
   * and registers third party middlewares,
   * returns a new instance of Express.
   */
  private async createApp() {
    const expressApp = Express();
    const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
      new ExpressAdapter(expressApp),
      {
        logger,
      },
    );
    // auto add security headers, read more on:https://www.npmjs.com/package/helmet
    app.use(
      helmet({
        frameguard: false,
      }),
    );
    app.use(
      helmet.contentSecurityPolicy({
        directives: {
          // tslint:disable-next-line: quotemark
          frameAncestors: ["'self'", 'https://top.gg'],
        },
      }),
    );
    // in case of high traffic, implement compression at nginx level.
    // auto compresses response, read more on: https://www.npmjs.com/package/compression
    app.use(compression());
    app.use(cookieParser());
    let robotsTxtConfig: any = {
      UserAgent: '*',
      Disallow: '/',
    };

    if (appConfig.isProduction) {
      robotsTxtConfig = {
        UserAgent: '*',
        Allow: '/',
        Sitemap: 'https://www.game.tv/sitemap.xml',
      };
    }

    app.use(robots(robotsTxtConfig));
    // enables CORS
    app.enableCors();
    // setting base directory for views.
    app.setBaseViewsDir(join(__dirname, 'frontend', 'templates'));
    app.useStaticAssets(join(__dirname, 'public'), { prefix: '/node-static/' });
    // setting view engines
    // enabling view engine to use .html templates
    app.engine(
      '.html',
      handlebars.create({
        extname: '.html',
        helpers: HandlebarHelpers,
      }).engine,
    );
    app.set('view engine', '.html');
    // initializing the app
    await app.init();
    // we need to return expressApp and not app
    // as http.listen works on an express Instance only
    return expressApp;
  }

  /**
   * Checks all configs for dependencies
   */
  // tslint:disable-next-line: no-empty
  private async validateDependencyConfigs() {}

  /**
   *  starts the server
   */
  async start() {
    // doing config validation for all dependencies.
    await this.validateDependencyConfigs();
    // configuring the app
    const app = await this.createApp();
    // if isSecure is enabled start https server
    if (appConfig.isSecure) {
      const httpsServer = this.startSecureServer(app);
      return { app, server: httpsServer };
    } else {
      const httpServer = this.startServer(app);
      return { app, server: httpServer };
    }
  }
}

// starting the application
export const application = new Application();
application.start();
