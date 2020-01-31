import { INavMenuLocale } from './nav-menu-locale.interface';

interface SearchContent {
  formPlaceholder: string;
  searchInfo: string;
  noresult: string;
}
export interface IHeaderLocale {
  link: string;
  navigationMenu: INavMenuLocale[];
  searchForm?: SearchContent;
}
