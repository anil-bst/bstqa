// Load environment variables from .env file
import { config as loadEnvConfig } from 'dotenv';
import { ENVIRONMENTS } from '@app/constants';

loadEnvConfig();
const env: string = process.env.ENVIRONMENT;
const configs: any = {
  base: {
    apiBaseUrl:
      process.env.API_BASE_URL ||
      'https://qa-api-website.game.tv/api-web/public/v1',
    tournamentBaseUrl:
      process.env.TOURNAMENT_BASE_URL ||
      'https://shivang-dev-dot-game-tv-engg.appspot.com/tournament/api',
  },
  [ENVIRONMENTS.PRODUCTION]: {
    apiBaseUrl:
      process.env.API_BASE_URL ||
      'https://api-website.game.tv/api-web/public/v1',
    tournamentBaseUrl:
      process.env.TOURNAMENT_BASE_URL ||
      'https://shivang-dev-dot-game-tv-engg.appspot.com/tournament/api',
  },
  [ENVIRONMENTS.STAGING]: {
    apiBaseUrl:
      process.env.API_BASE_URL ||
      'https://staging-api-website.game.tv/api-web/public/v1',
    tournamentBaseUrl:
      process.env.TOURNAMENT_BASE_URL ||
      'https://shivang-dev-dot-game-tv-engg.appspot.com/tournament/api',
  },
  [ENVIRONMENTS.DEVELOPMENT]: {
    apiBaseUrl:
      process.env.API_BASE_URL || 'http://localhost:3000/api-web/public/v1',
    // 'https://qa-api-website.game.tv/public/api/v1',
    tournamentBaseUrl:
      process.env.TOURNAMENT_BASE_URL ||
      'https://shivang-dev-dot-game-tv-engg.appspot.com/tournament/api',
  },
  [ENVIRONMENTS.LOCAL]: {},
  [ENVIRONMENTS.TEST]: {},
};

export const apiConfig = Object.assign(configs.base, configs[env]);
