import { RedirectionMiddleware } from './redirection.middleware';
import { LoggerService } from '../../modules';

describe('RedirectionMiddleware', () => {
  let logger: LoggerService;
  let redirectionMiddleware: RedirectionMiddleware;
  beforeEach(() => {
    logger = new LoggerService();
    redirectionMiddleware = new RedirectionMiddleware(logger);
  });
  it('should be defined', () => {
    expect(redirectionMiddleware).toBeDefined();
  });
});
