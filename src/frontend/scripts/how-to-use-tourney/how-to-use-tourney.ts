import { Utils } from '../common/utils';

export class HowToUseTourney {
  static headerTabActivation() {
    switch (window.location.search) {
      case '?tab=command':
        HowToUseTourney.activateCommandTabinHeader();
        break;
      default:
        HowToUseTourney.activateHowToUseTourneyTabinHeader();
    }
  }

  static activateCommandTabinHeader() {
    const activeTab = document.querySelector('.menu-links .menu-link.active');
    if (activeTab) {
      activeTab.classList.remove('active');
    }
    const headerTabs = Array.from(
      document.querySelectorAll('.menu-links .menu-link') as NodeListOf<
        HTMLAnchorElement
      >,
    );
    const commandTab = headerTabs.find(tab => tab.href.endsWith('tab=command'));
    if (commandTab) {
      commandTab.classList.add('active');
    }
    const commandNavEle = document.querySelectorAll(
      '.navigation-list li',
    )[3] as HTMLElement;

    commandNavEle.click();
  }

  static activateHowToUseTourneyTabinHeader() {
    const activeTab = document.querySelector('.menu-links .menu-link.active');
    if (activeTab) {
      activeTab.classList.remove('active');
    }
    const headerTabs = Array.from(
      document.querySelectorAll('.menu-links .menu-link') as NodeListOf<
        HTMLAnchorElement
      >,
    );
    const howToUseTourneyTab = headerTabs.find(tab =>
      tab.href.endsWith('how-to-use-tourney'),
    );
    if (howToUseTourneyTab) {
      howToUseTourneyTab.classList.add('active');
    }
  }

  static setActiveMobileNavText() {
    if (window.innerWidth < 768) {
      const activeNavItem = document.querySelector(
        '.navigation-list li.active',
      );
      const selectedNavItem = document.querySelector('.selected-nav');
      selectedNavItem.innerHTML = activeNavItem.innerHTML;
    }
  }

  static setActiveTabMobileClick() {
    const selectedNavItem = document.querySelector(
      '.selected-nav',
    ) as HTMLElement;

    const navigationList = document.querySelector(
      '.navigation-list',
    ) as HTMLElement;

    selectedNavItem.addEventListener('click', () => {
      Utils.toggleClass(selectedNavItem, 'open');
      Utils.toggleClass(navigationList, 'open');
    });
  }

  static setNavigationListClicks() {
    const navList = document.querySelectorAll('.navigation-list li');
    for (const nav of navList) {
      nav.addEventListener('click', () => {
        const targetElementId = `#${nav.getAttribute('data-target')}`;
        const targetElement = document.querySelector(targetElementId);
        const activeNavItem = document.querySelector(
          '.navigation-list li.active',
        );
        if (activeNavItem) {
          activeNavItem.classList.remove('active');
        }
        nav.classList.add('active');
        const activeContentWrapper = document.querySelector(
          '.content-wrapper.active',
        );
        if (activeContentWrapper) {
          activeContentWrapper.classList.remove('active');
        }
        targetElement.classList.add('active');
        HowToUseTourney.setActiveMobileNavText();
      });
    }
  }

  static init() {
    HowToUseTourney.setActiveMobileNavText();
    HowToUseTourney.setActiveTabMobileClick();
    HowToUseTourney.setNavigationListClicks();
    HowToUseTourney.headerTabActivation();
  }
}
