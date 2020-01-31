import { Home } from './home';
import { Utils } from '../common/utils';
import { Graphlist } from '../common/graphlist';
import { MediaController } from '../common/media-controller';
declare global {
  interface Window {
    Utils: Utils;
  }
}
(() => {
  Home.init();
  Graphlist.init();
  MediaController.bindScrollEvents();
  window.Utils = Utils.init() || {};
})();
