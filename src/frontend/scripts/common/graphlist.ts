export class Graphlist {
  static activateGraphItemEvents() {
    const graphItemsList = document.querySelectorAll(
      '.graph-list > .graph-item',
    );
    for (const graphItem of graphItemsList) {
      graphItem.addEventListener('click', () => {
        Graphlist.inactivateGraphItems();
        // add active-menu class to body
        if (window.screen.width < 1023) {
          graphItem.classList.add('active');
          document.body.classList.add('active-overlay');
        }
      });
    }
  }

  static inactivateGraphItems() {
    const graphItemsList = document.querySelectorAll(
      '.graph-list > .graph-item.active',
    );
    for (const graphItem of graphItemsList) {
      graphItem.classList.remove('active');
    }
    if (window.screen.width < 1023) {
      document.body.classList.remove('active-overlay');
    }
  }

  static closeSlideControl() {
    const slideControlList = document.querySelectorAll('.close-slide-control');
    for (const slideControl of slideControlList) {
      slideControl.addEventListener('click', e => {
        e.stopPropagation();
        slideControl.parentElement.classList.remove('active');
        document.body.classList.remove('active-overlay');
      });
    }
  }

  static openSlideControl() {
    const slideControlList = document.querySelectorAll(
      '.slide-control .control-content',
    );
    for (const slideControl of slideControlList) {
      slideControl.addEventListener('click', e => {
        e.stopPropagation();
        const target = slideControl.getAttribute('data-target');
        Graphlist.inactivateGraphItems();
        document.querySelector(`.${target}`).classList.add('active');
        document.body.classList.add('active-overlay');
      });
    }
  }

  static init() {
    Graphlist.openSlideControl();
    Graphlist.closeSlideControl();
    Graphlist.activateGraphItemEvents();
  }
}
