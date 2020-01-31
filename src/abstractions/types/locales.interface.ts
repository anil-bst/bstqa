import { SupportedLocalesEnum } from '@app/enums/supported-locales.enum';

// using a type, Interfaces cannot have dynamic keys using "in clause".
// supported locales enum here is a list of locales we support, the list can be extended.
type Locales<T> = {
  [key in SupportedLocalesEnum]?: T;
};

// Interfaces can extend types
export interface ILocales<T> extends Locales<T> {}
