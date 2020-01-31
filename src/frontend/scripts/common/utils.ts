import { ApiService } from './api-service';
import { SupportedLocalesEnum } from '@app/enums';
import moment = require('moment');
import autocompleteOnKeypress from './autocomplete';

const locale =
  document.getElementsByTagName('html')[0].getAttribute('lang') ||
  SupportedLocalesEnum.ENGLISH;
export class Utils {
  static init() {
    // marking current path as active in header-nav
    Utils.setHeaderActiveLink();
    Utils.bindClickEvent();
    autocompleteOnKeypress.init('header');
    Utils.bindScrollEvents();
    Utils.getOperatingSystem();
    return Utils;
  }

  static getCookieValue(key: string) {
    const value = document.cookie.match(`(^|[^;]+)\\s*${key}\\s*=\\s*([^;]+)`);
    return value && value.pop();
  }

  static sliceString(
    template: string,
    startPosition: number,
    endPosition: number,
  ) {
    return template.slice(startPosition, endPosition);
  }

  static getOperatingSystem() {
    let OSName = 'unknown-os';
    if (navigator.appVersion.indexOf('Win') !== -1) {
      OSName = 'windows-os';
    }
    if (navigator.appVersion.indexOf('Mac') !== -1) {
      OSName = 'mac-os';
    }
    if (navigator.appVersion.indexOf('X11') !== -1) {
      OSName = 'unix';
    }
    if (navigator.appVersion.indexOf('Linux') !== -1) {
      OSName = 'linux';
    }
    document.querySelector('body').classList.add(OSName);
  }

  static bindClickEvent() {
    const searchIcon = document.querySelector('.nav-search-block');
    searchIcon.addEventListener('click', (navSearchE: Event) => {
      const searchWrapper = document.querySelector(
        '.header-search-form-wrapper',
      );
      const searchInput = document.querySelector(
        '.header-search-form-wrapper .search-control',
      ) as HTMLInputElement;
      searchWrapper.classList.toggle('open');
      searchInput.focus();
    });
  }

  static findTopLeftPosition(element) {
    const rec = document
      .querySelector('.nav-search-block')
      .getBoundingClientRect();
    const topPosition = rec.top + window.scrollY;
    const leftPosition = rec.left + window.scrollX;
    return { top: topPosition, left: leftPosition };
  }

  static setHeaderActiveLink() {
    document
      .querySelectorAll('.menu-links > li a')
      .forEach((element: HTMLAnchorElement) => {
        if (element.href === location.href) {
          return element.classList.add('active');
        }
      });
  }

  static formatAMPM(date: Date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const hourString = (hours % 12 ? hours : 12).toString(); // the hour '0' should be '12'
    const minuteString = (minutes < 10 ? '0' + minutes : minutes).toString();
    const timeString = `${hourString}:${minuteString}:${ampm}`;
    return timeString;
  }

  static numberWithCommas(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  static toggleMenu() {
    document.getElementById('menu_links').classList.toggle('active-menu');
    document.getElementById('menu_icon').classList.toggle('active-menu');
  }

  static setCookieLocale(newlocale: SupportedLocalesEnum) {
    document.cookie = `locale=${newlocale};path=/`;
  }

  static toggleLangSelector() {
    document
      .querySelector('.language-selector-btn')
      .classList.toggle('open-selector');
    document
      .querySelector('.language-selector-list')
      .classList.toggle('open-selector');
  }

  static closeMenu() {
    document.getElementById('menu_list').classList.remove('open');
    document.querySelector('.nav-icon').classList.remove('hide');
    document.querySelector('.menu-close').classList.add('hide');
  }

  static isElementInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  static toggleClass(el: HTMLElement, cls: string) {
    if (el.classList.contains(cls)) {
      el.classList.remove(cls);
    } else {
      el.classList.add(cls);
    }
  }

  static formatDate(time: string, format: string) {
    let startTime = moment(time).format(format);
    // tslint:disable-next-line: radix
    startTime = parseInt(startTime) < 10 ? `0${startTime}` : startTime;
    return startTime;
  }

  static bindScrollEvents() {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header-section');
      if (header && window.scrollY > 100) {
        header.classList.add('sticky-header');
      } else {
        header.classList.remove('sticky-header');
      }
    });
  }

  static sortFilterData(data) {
    const { availableFilters } = data.metaData;
    const { geo, lang } = availableFilters;
    geo.sort();
    let otherExists = geo.includes('others');
    let indexOther = -1;
    if (otherExists) {
      indexOther = geo.indexOf('others');
      geo.splice(indexOther, 1);
      geo.push('others');
    }

    lang.sort();
    otherExists = lang.includes('others');
    if (otherExists) {
      indexOther = lang.indexOf('others');
      lang.splice(indexOther, 1);
      lang.push('others');
    }
    data.metaData.availableFilters.geo = geo;
    data.metaData.availableFilters.lang = lang;
    return data;
  }
}
