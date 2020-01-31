import { ENVIRONMENTS } from '@app/constants';

/**
 * only process.env keys are supposed to be used,
 * everything else will throw an error.
 * variables name have to only include alphanumeric and test cases
 */

// sample on how to set environment variables
const env = 'process.env.ENVIRONMENT';
const API_BASE_URL = 'process.env.API_BASE_URL';

const configs: any = {
  base: {
    apiBaseUrl:
      API_BASE_URL || 'https://qa-api-website.game.tv/public/api-web/public/v1',
  },
  [ENVIRONMENTS.PRODUCTION]: {
    apiBaseUrl:
      API_BASE_URL || 'https://api-website.game.tv/public/api-web/public/v1',
  },
  [ENVIRONMENTS.STAGING]: {
    apiBaseUrl:
      API_BASE_URL ||
      'https://staging-api-website.game.tv/public/api-web/public/v1',
  },
  [ENVIRONMENTS.DEVELOPMENT]: {
    apiBaseUrl: API_BASE_URL || 'http://localhost:3000/api-web/public/v1', // 'https://qa-api-website.game.tv/public/api/v1',
  },
  [ENVIRONMENTS.LOCAL]: {},
  [ENVIRONMENTS.TEST]: {
    port: 3001,
  },
};

export const environments = Object.assign(configs.base, configs[env]);
