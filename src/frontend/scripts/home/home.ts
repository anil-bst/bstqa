import { MediaController } from '../common/media-controller';

export class Home {
  static viewMoreGames() {
    const viewMore = document.querySelector('#view_more');
    const gameList = document.querySelector('#game_list');
    viewMore.addEventListener('click', () => {
      viewMore.classList.add('hide');
      gameList.classList.add('open');
    });
  }

  static discoverMore() {
    const discoverMore = document.querySelector('#discover_more');
    const whyTourney = document.querySelector('#why_tourney') as HTMLElement;
    discoverMore.addEventListener('click', e => {
      window.scrollTo({
        top: whyTourney.offsetTop,
        behavior: 'smooth',
      });
    });
  }

  static init() {
    MediaController.bindScrollEvents();
    Home.discoverMore();
    Home.viewMoreGames();
  }
}
