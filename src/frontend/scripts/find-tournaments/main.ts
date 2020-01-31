import { Utils } from '../common/utils';
import { MediaController } from '../common/media-controller';
import { FindTournaments } from './find-tournaments';
declare global {
  interface Window {
    Utils: Utils;
  }
}
(() => {
  MediaController.bindScrollEvents();
  window.Utils = Utils.init() || {};
  FindTournaments.init();
})();
