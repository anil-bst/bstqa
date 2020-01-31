import { Utils } from '../common/utils';
import { Graphlist } from '../common/graphlist';
import { MediaController } from '../common/media-controller';
import Sponsorship from './sponsorship';
declare global {
  interface Window {
    Utils: Utils;
  }
}
(() => {
  MediaController.bindScrollEvents();
  Graphlist.init();
  window.Utils = Utils.init() || {};
  Sponsorship.init();
})();
