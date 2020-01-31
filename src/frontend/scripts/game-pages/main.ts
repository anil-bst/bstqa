import { Utils } from '../common/utils';
import { MediaController } from '../common/media-controller';
import { GamePages } from './game-page';
import TournamentFilters from '../common/tournament-filters';
declare global {
  interface Window {
    Utils: Utils;
  }
}
(() => {
  MediaController.bindScrollEvents();
  window.Utils = Utils.init() || {};
  GamePages.bindEvents();
  TournamentFilters.init();
})();
