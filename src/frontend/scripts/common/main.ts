import { Utils } from '../common/utils';
import { MediaController } from './media-controller';

declare global {
  interface Window {
    Utils: Utils;
  }
}

(() => {
  MediaController.bindScrollEvents();
  window.Utils = Utils.init();
})();
