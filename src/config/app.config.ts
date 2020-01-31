// Load environment variables from .env file
import { config as loadEnvConfig } from 'dotenv';
import { ENVIRONMENTS } from '@app/constants';
import { resolve, join } from 'path';
loadEnvConfig();
const env: string = process.env.ENVIRONMENT;
const appRoot = join(__dirname, '../');
const configs: any = {
  base: {
    env,
    appRoot,
    appVersion: process.env.APP_VERSION,
    isProduction: env === ENVIRONMENTS.PRODUCTION,
    isRemote: isRemoteEnvironment(),
    baseHost: process.env.BASE_HOST || 'https://www.game.tv',
    name: process.env.APP_NAME || 'my-app-service',
    host: process.env.APP_HOST || '0.0.0.0',
    port: parseInt(process.env.APP_PORT, 10) || 3000,
    ip_database_path: resolve(appRoot, 'resources', 'ip-country.mmdb'),
  },
  [ENVIRONMENTS.PRODUCTION]: {
    baseHost: process.env.BASE_HOST || 'https://www.game.tv',
  },
  [ENVIRONMENTS.STAGING]: {
    baseHost: process.env.BASE_HOST || 'https://engg.game.tv',
  },
  [ENVIRONMENTS.QA]: {
    baseHost: process.env.BASE_HOST || 'https://qa-nrp.game.tv',
  },
  [ENVIRONMENTS.DEVELOPMENT]: {
    baseHost: process.env.BASE_HOST || 'https://qa-nrp.game.tv',
  },
  [ENVIRONMENTS.LOCAL]: {},
  [ENVIRONMENTS.TEST]: {
    port: 3001,
  },
};

export const appConfig = Object.assign(configs.base, configs[env]);

function isRemoteEnvironment() {
  const remoteEnvironments = {
    [ENVIRONMENTS.PRODUCTION]: true,
    [ENVIRONMENTS.STAGING]: true,
    [ENVIRONMENTS.DEVELOPMENT]: true,
  };
  return remoteEnvironments[env];
}
