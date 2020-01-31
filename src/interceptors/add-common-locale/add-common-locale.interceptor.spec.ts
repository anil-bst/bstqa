import { AddCommonLocaleInterceptor } from './add-common-locale.interceptor';
import { LocaleUtils } from '../../utils';

describe('AddCommonLocaleInterceptor', () => {
  let addCommonLocaleInterceptor: AddCommonLocaleInterceptor;
  let localeUtils: LocaleUtils;
  beforeEach(() => {
    localeUtils = new LocaleUtils();
    addCommonLocaleInterceptor = new AddCommonLocaleInterceptor(localeUtils);
  });
  it('should be defined', () => {
    expect(addCommonLocaleInterceptor).toBeDefined();
  });
});
