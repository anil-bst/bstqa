import { ArrayHelpers, filterMobileHelpers } from './array';
import { StringHelpers } from './string';
import { DateHelpers } from './date';

export const HandlebarHelpers = {
  ...ArrayHelpers,
  ...DateHelpers,
  ...StringHelpers,
  ...filterMobileHelpers,
};
