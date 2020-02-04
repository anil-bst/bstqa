import { Utils } from '../common/utils';
import { MediaController } from '../common/media-controller';
import { HowToJoinSection } from '../common/how-to-join';
import tournamentFilters from '../common/tournament-filters';
declare global {
  interface Window {
    Utils: Utils;
  }
}
(() => {
  MediaController.bindScrollEvents();
  window.Utils = Utils.init() || {};
  HowToJoinSection.bindEvents();
  tournamentFilters.init();
})();
