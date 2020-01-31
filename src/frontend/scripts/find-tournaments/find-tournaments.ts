import Swiper from 'swiper';
import { ApiService } from '../common/api-service';
import { Utils } from '../common/utils';
import { SupportedLocalesEnum } from '@app/enums';
import TournamentFilters from './../common/tournament-filters';
import autocompleteOnKeypress from './../common/autocomplete';

const locale =
  document.getElementsByTagName('html')[0].getAttribute('lang') ||
  SupportedLocalesEnum.ENGLISH;
export class FindTournaments {
  static enableSwiper() {
    // tslint:disable-next-line: no-unused-expression
    new Swiper('.swiper-container', {
      breakpoints: {
        400: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 32,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  static discoverMore() {
    const discoverMore = document.querySelector('.scroll-down');
    const scrollElement = document.querySelector(
      '.games-section',
    ) as HTMLElement;
    discoverMore.addEventListener('click', e => {
      window.scrollTo({
        top: scrollElement.offsetTop,
        behavior: 'smooth',
      });
    });
  }

  static init() {
    if (window.outerWidth > 768) {
      FindTournaments.enableSwiper();
    }
    // Utils.attachSearchEvents('search-form-wrapper');
    TournamentFilters.init();
    autocompleteOnKeypress.init('tournaments');
    FindTournaments.discoverMore();
  }
}
