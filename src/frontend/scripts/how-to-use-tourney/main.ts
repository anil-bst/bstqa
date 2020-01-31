import { HowToUseTourney } from './how-to-use-tourney';
import { Utils } from '../common/utils';
declare global {
  interface Window {
    Utils: Utils;
  }
}
(() => {
  window.Utils = Utils.init() || {};
  HowToUseTourney.init();
})();
