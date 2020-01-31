export interface INavMenuLocale {
  name?: string;
  link?: string;
  target?: string;
  subMenu?: INavMenuLocale[];
  classes?: string;
}
