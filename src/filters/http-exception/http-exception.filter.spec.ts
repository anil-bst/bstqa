import { HttpExceptionFilter } from './http-exception.filter';
import { LocaleUtils } from '../../utils';

describe('ExceptionFilter', () => {
  let httpExceptionFilter: HttpExceptionFilter;
  let localeUtils: LocaleUtils;
  beforeEach(() => {
    localeUtils = new LocaleUtils();
    httpExceptionFilter = new HttpExceptionFilter(localeUtils);
  });
  it('should be defined', () => {
    expect(httpExceptionFilter).toBeDefined();
  });
});
