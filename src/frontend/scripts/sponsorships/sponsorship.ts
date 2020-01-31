export default class Sponsorship {
  static discoverMore() {
    const discoverMore = document.querySelector('.scroll-down');
    const scrollElement = document.querySelector(
      '.play-sponsor-section',
    ) as HTMLElement;
    discoverMore.addEventListener('click', e => {
      window.scrollTo({
        top: scrollElement.offsetTop,
        behavior: 'smooth',
      });
    });
  }

  static init() {
    Sponsorship.discoverMore();
  }
}
