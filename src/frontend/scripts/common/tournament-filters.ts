import { ApiService } from '../common/api-service';
import { Utils } from './utils';
import { SupportedLocalesEnum } from '@app/enums';
import { FindTournamentLocales } from '@app/locales/find-tournaments';
import { GameDetailsLocales } from '@app/locales/game-details';
import { threadId } from 'worker_threads';

class TournamentFilters {
  url: string;
  pageUrl: string;
  pageNum: number;
  locale: string;
  nextCursor: string;
  constructor() {
    this.url = window.location.href;
    this.pageUrl = 'find-tournaments';
    this.pageNum = 2;
    this.nextCursor = '';
    this.locale =
      document.getElementsByTagName('html')[0].getAttribute('lang') ||
      SupportedLocalesEnum.ENGLISH;

    if (this.url.includes('page')) {
      const mainPageEle = document.querySelector(
        '.main-container',
      ) as HTMLElement;
      this.pageNum = parseInt(mainPageEle.dataset.page, 10) + 1;
    }

    this.loadMoreData = this.loadMoreData.bind(this);
    this.saveFilter = this.saveFilter.bind(this);
    this.emptyStateViewAll = this.emptyStateViewAll.bind(this);
  }

  /*
   * toggleDropDown: toggle filter dropdown
   */
  toggleDropDown(target) {
    const listToBeOpened = target
      .closest('.filter-item')
      .querySelector('.filter-list') as HTMLUListElement;
    // check for other opened dropdown
    if (listToBeOpened.classList.contains('show-list')) {
      listToBeOpened.classList.remove('show-list');
    } else {
      const lists = document.querySelectorAll('.filter-list');
      lists.forEach(item => {
        if (item.classList.contains('show-list')) {
          item.classList.remove('show-list');
        }
      });
      listToBeOpened.classList.add('show-list');
    }
  }

  /*
   * closeAllDropdown: closes all opened dropdowns
   */
  closeAllDropdown() {
    const lists = document.querySelectorAll('.filter-list');
    lists.forEach(item => {
      if (item.classList.contains('show-list')) {
        item.classList.remove('show-list');
      }
    });
  }

  /*
   * resetUrl: remove query parameter of page from url
   */
  resetUrl() {
    const pageEle = document.querySelector('.main-container') as HTMLElement; // if slug exists
    const slug = pageEle.dataset.slug;
    let urlToBePushed = `/${this.pageUrl}`;
    const urlOrigin = window.location.origin;
    const checkLocale = window.location.href
      .split(window.location.host)[1]
      .split('/')[1];
    if (this.locale === checkLocale) {
      urlToBePushed = `/${this.locale}${urlToBePushed}`;
    }
    if (slug) {
      urlToBePushed = `${urlToBePushed}/${slug}`;
    }

    window.history.pushState(urlOrigin, 'reset url', urlToBePushed);

    // update page number in data-page of main container
    const mainContainerEle = document.querySelector(
      '.main-container',
    ) as HTMLElement;
    this.pageNum = 2;
    mainContainerEle.dataset.page = '1';
  }

  toggleEmptyState(show = false) {
    const emptyState = document.querySelector('.empty-state');
    if (show) {
      this.resetUrl();
      emptyState.classList.add('show');
    } else {
      emptyState.classList.remove('show');
    }
  }

  /*
   * updatePageNumberInUrl: update query parameter of page in url
   */
  updatePageNumberInUrl(selectedPage) {
    const pageEle = document.querySelector('.main-container') as HTMLElement; // if slug exists
    const slug = pageEle.dataset.slug;
    const cursor = pageEle.dataset.cursor;
    let urlToBePushed = `/${this.pageUrl}`;
    const urlOrigin = window.location.origin;
    const checkLocale = window.location.href
      .split(window.location.host)[1]
      .split('/')[1];
    if (this.locale === checkLocale) {
      urlToBePushed = `/${this.locale}${urlToBePushed}`;
    }
    if (slug) {
      urlToBePushed = `${urlToBePushed}/${slug}`;
    }

    urlToBePushed = `${urlToBePushed}?page=${selectedPage}&cursor=${cursor}`;
    window.history.pushState(urlOrigin, 'update url', urlToBePushed);

    // update page number in data-page of main container
    const mainContainerEle = document.querySelector(
      '.main-container',
    ) as HTMLElement;
    mainContainerEle.dataset.page = '' + selectedPage; // pageNum refers to next page
    mainContainerEle.dataset.cursor = this.nextCursor;
  }

  /*
   * updateView: updates view on filter selection
   */
  updateView(resp, filter = false) {
    const { data, metaData } = resp;
    // update count
    const { count, limit } = metaData;
    if (filter) {
      const countHeading = document.querySelector(
        '.count-tournaments',
      ) as HTMLElement;
      const headingText = count > 0 ? ApiService.numberWithCommas(count) : '';
      countHeading.innerText = headingText;
    }

    const documentFragment = document.createDocumentFragment();
    const tournamentListWrapper = document.querySelector('ul.tournaments-list');
    // remove all tournaments in case of filter
    if (filter) {
      let child = tournamentListWrapper.lastElementChild;
      while (child) {
        tournamentListWrapper.removeChild(child);
        child = tournamentListWrapper.lastElementChild;
      }
    }

    if (count || (data && data.length)) {
      this.toggleEmptyState(false);
      // update tournament's card
      data.forEach(card => {
        const {
          adminLocale,
          esportsUrl,
          gameFormat,
          media,
          game,
          name,
          platform,
          tournamentStartDate,
          primaryPkg,
          geo,
        } = card;
        const tournamentLink = `/tournaments/${ApiService.getTournamentUrl(
          esportsUrl,
        )}`;
        const listItem = document.createElement('li') as HTMLLIElement;
        listItem.className = 'tournament-item';

        const linkImage = document.createElement('a');
        linkImage.href = tournamentLink;

        const figureElement = document.createElement('figure');
        figureElement.className = 'tournament-image';

        const bannerImgEle = document.createElement('img') as HTMLImageElement;
        bannerImgEle.src = game.media.default.iconUrl;
        bannerImgEle.alt = name;

        figureElement.appendChild(bannerImgEle);
        linkImage.appendChild(figureElement);

        const gameWrapper = document.createElement('div') as HTMLDivElement;
        gameWrapper.className = 'game-wrapper';

        const anchorEle = document.createElement('a');
        if (game) {
          let gamePath = `/${this.locale.replace(/"/g, '')}/find-tournaments/${
            game.slug
          }`;
          if (this.locale === SupportedLocalesEnum.ENGLISH) {
            gamePath = `/find-tournaments/${game.slug}`;
          }
          anchorEle.href = game && `${gamePath}`;
        }
        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'game-icon';
        const imgEle = document.createElement('img');
        if (
          game &&
          game.media &&
          game.media.default &&
          game.media.default.logoUrl
        ) {
          imgEle.src = game.media.default.logoUrl;
        }

        imgEle.className = 'img-responsive';
        imgEle.alt = game && game.name;

        iconWrapper.append(imgEle);

        const gameName = document.createElement('span');
        gameName.innerText = game && game.name;
        gameName.className = 'game-name';

        anchorEle.append(iconWrapper);
        anchorEle.append(gameName);

        const countryDiv = document.createElement('div') as HTMLDivElement;
        countryDiv.className = 'country-flag';
        const countryIconEle = document.createElement(
          'img',
        ) as HTMLImageElement;
        countryIconEle.className = 'country-icon';
        countryIconEle.src = `https://cdn.game.tv/locales/${Utils.sliceString(
          geo,
          0,
          2,
        ).toUpperCase()}.png`;
        countryIconEle.alt = 'country flag';

        const countryName = document.createElement('p') as HTMLParagraphElement;
        countryName.className = 'country-name';
        countryName.innerText = Utils.sliceString(adminLocale, 0, 2);

        countryDiv.append(countryIconEle);
        countryDiv.append(countryName);

        gameWrapper.append(anchorEle);
        gameWrapper.append(countryDiv);

        const linkTounamentDetail = document.createElement('a');
        linkTounamentDetail.href = tournamentLink;

        const tournamentDetails = document.createElement(
          'div',
        ) as HTMLDivElement;
        tournamentDetails.className = 'tournament-details';

        const plateformDetails = document.createElement(
          'div',
        ) as HTMLDivElement;
        plateformDetails.className = 'platform-details';

        const contentItem1 = document.createElement(
          'p',
        ) as HTMLParagraphElement;
        contentItem1.className = 'platform';

        let pageLocale = FindTournamentLocales[this.locale];
        const pageEle = document.querySelector(
          '.main-container',
        ) as HTMLElement; // if slug exists
        const slug = pageEle.dataset.slug;
        if (slug) {
          pageLocale = GameDetailsLocales[this.locale];
        }
        contentItem1.innerText = pageLocale.platformStr;

        const contentItem2 = document.createElement('span') as HTMLImageElement;
        contentItem2.className = `platform-icon ${platform}`;

        const contentItem3 = document.createElement(
          'p',
        ) as HTMLParagraphElement;
        contentItem3.className = 'discord-title';
        contentItem3.innerText = platform;

        const contentItem4 = document.createElement(
          'p',
        ) as HTMLParagraphElement;
        contentItem4.className = 'versus';
        contentItem4.innerText = gameFormat;
        plateformDetails.appendChild(contentItem1);
        plateformDetails.appendChild(contentItem2);
        plateformDetails.appendChild(contentItem3);
        plateformDetails.appendChild(contentItem4);

        // tournamentDetails.appendChild(plateformDetails);

        const gameTitle = document.createElement('h3') as HTMLHeadingElement;
        gameTitle.className = 'game-title';
        gameTitle.innerText = name;

        const joiningInfoEle = document.createElement('div') as HTMLDivElement;
        joiningInfoEle.className = 'joining-info';

        const joinDateEle = document.createElement('p') as HTMLParagraphElement;
        joinDateEle.className = 'join-date';
        const dateFormated = Utils.formatDate(
          `${new Date(parseInt(tournamentStartDate, 10))}`,
          'D MMM YY',
        );

        joinDateEle.innerText = dateFormated;

        const joinTimeEle = document.createElement('p') as HTMLParagraphElement;
        joinTimeEle.className = 'join-time';
        joinTimeEle.innerText = `${Utils.formatDate(
          `${new Date(parseInt(tournamentStartDate, 10))}`,
          'h:mm',
        )} ${ApiService.getTimeZoneAbbr()}`; // timezone needs to be updated

        const actionBtn = document.createElement('span') as HTMLAnchorElement;
        actionBtn.className = 'join-now';

        actionBtn.innerText = pageLocale.joinHeading;

        joiningInfoEle.appendChild(joinDateEle);
        joiningInfoEle.appendChild(joinTimeEle);
        joiningInfoEle.appendChild(actionBtn);

        tournamentDetails.appendChild(plateformDetails);
        tournamentDetails.appendChild(gameTitle);
        tournamentDetails.appendChild(joiningInfoEle);

        linkTounamentDetail.appendChild(tournamentDetails);

        listItem.appendChild(linkImage);
        listItem.appendChild(gameWrapper);
        listItem.appendChild(linkTounamentDetail);

        documentFragment.appendChild(listItem);
      });

      // add updated cards
      tournamentListWrapper.append(documentFragment);
    } else {
      // empty data state
      this.toggleEmptyState(true);
    }

    const viewMoreBtn = document.querySelector('.view-more');

    // for first page
    const isLastPage = metaData.isLastBatch;
    if (isLastPage && viewMoreBtn) {
      // remove view more button
      viewMoreBtn.classList.remove('show');
      viewMoreBtn.classList.add('hide');
    } else {
      viewMoreBtn.classList.add('show');
      viewMoreBtn.classList.remove('hide');
    }
  }

  /*
   * addFilterSearchEvent: adding events on filters (geo/tournament status/language)
   */
  addFilterSearchEvent() {
    const selectBtn = document.querySelectorAll('.select-btn') as NodeList;

    selectBtn.forEach(btn => {
      btn.addEventListener('click', e => {
        const target = e.target as HTMLElement;
        e.stopPropagation();
        this.toggleDropDown(target);
        this.pageNum = 2;
      });
    });

    // event for list item
    const listItems = document.querySelectorAll('.filter-list') as NodeList;
    listItems.forEach(item => {
      item.addEventListener('click', async e => {
        e.stopPropagation();
        const targetEle = e.target as HTMLElement;
        // close dropdown
        this.toggleDropDown(targetEle);
        const parentLi = targetEle.closest('li');

        const parentWrapper = targetEle.closest('.filter-item');
        let selectedItemValue = targetEle.innerText;
        const buttonEle = parentWrapper.querySelector('button');

        // check dataset
        if (buttonEle.dataset.geo) {
          buttonEle.dataset.geo = parentLi.dataset.geo;
          const flagName =
            parentLi.dataset.geo === 'all'
              ? 'MAP'
              : parentLi.dataset.geo.toUpperCase();
          selectedItemValue = `<span class="selected-flag country-f-flag" style="background-image:url(https://cdn.game.tv/locales/${flagName}.png);"></span> ${selectedItemValue}`;
        } else if (buttonEle.dataset.status) {
          buttonEle.dataset.status = parentLi.dataset.status;
        } else if (buttonEle.dataset.lang) {
          buttonEle.dataset.lang = parentLi.dataset.lang;
        }
        buttonEle.innerHTML = selectedItemValue;
        // call service
        const geoEle = document.querySelector(
          '.country-specific-btn',
        ) as HTMLElement;
        const statusEle = document.querySelector(
          '.tournament-specific-btn',
        ) as HTMLElement;
        const langEle = document.querySelector(
          '.locale-specific-btn',
        ) as HTMLElement;
        const geoVal = geoEle.dataset.geo.trim();
        const statusVal = statusEle.dataset.status.trim();
        const langEleVal = langEle.dataset.lang.trim();

        const pageEle = document.querySelector(
          '.main-container',
        ) as HTMLElement; // if slug exists
        const slug = pageEle.dataset.slug;
        let gamePkg = '';
        if (slug) {
          gamePkg = pageEle.dataset.pkgname;
        }
        const configObj = {
          limit: 12,
          slug,
          geo: geoVal,
          status: statusVal,
          lang: langEleVal,
          locale: this.locale,
          cursor: '',
          game_pkg: gamePkg,
          isCountRequired: true,
        };
        const data = await ApiService.fetchData(configObj);
        if (Object.keys(data).length > 0) {
          this.resetUrl();
          this.nextCursor = data.metaData.cursor;
          this.updateView(data, true);
        }
      });
    });

    document.addEventListener('click', this.closeAllDropdown);
  }

  // ********************************Methods for Mobile starts*********************************//

  /*
   * openTab: handling tab functionality
   */
  openTab(evt) {
    // Declare all variables
    let tabcontent;
    let tablinks;
    const tabName = evt.target && evt.target.dataset.tab;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName('tabcontent');

    for (const tab of tabcontent) {
      tab.style.display = 'none';
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName('tablinks');
    for (const tab of tablinks) {
      if (tab.classList.contains('active')) {
        tab.classList.remove('active');
      }
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
  }

  /*
   * showMobileFilterMenu: show mobile menu on click of filter icon
   */
  showMobileFilterMenu() {
    const filterEle = document.querySelector('.filters');
    if (!filterEle.classList.contains('show-filter')) {
      filterEle.classList.add('show-filter');
    }
    document.body.classList.add('active-overlay');
  }

  closeMobileFilterMenu() {
    document.body.classList.remove('active-overlay');
    document.querySelector('.filters').classList.remove('show-filter');
  }

  /*
   * selectMenuItem: select geo/status/lang items
   */
  selectMenuItem(e) {
    const selectedEle = e.target.closest('li');
    const checkFilter = selectedEle.dataset.geo
      ? 'geo'
      : selectedEle.dataset.status
      ? 'status'
      : 'lang';
    const classStr = 'selected-filter-' + checkFilter;

    // check for already selected values
    const alreadyselectedItem = e.target
      .closest('ul')
      .querySelectorAll('[class*=selected-filter-]');
    alreadyselectedItem.forEach(item => {
      item.classList.remove(classStr);
    });

    if (selectedEle.classList.contains(classStr)) {
      selectedEle.classList.remove(classStr);
    } else {
      selectedEle.classList.add(classStr);
    }
  }

  scrollToTournamentSection() {
    const scrollElement = document.querySelector(
      'section.tournaments',
    ) as HTMLElement;
    window.scrollTo({
      top: scrollElement.offsetTop,
      behavior: 'smooth',
    });
  }

  /*
   * saveFilter: call API on click of save button (mobile only)
   */
  async saveFilter() {
    const selectedItems = document.querySelectorAll(
      '[class*=selected-filter-]',
    ) as any;
    let geo = '';
    let status = '';
    let lang = '';

    selectedItems.forEach(item => {
      const itemClassArr = item.classList;
      if (itemClassArr.contains('selected-filter-geo')) {
        geo = item.dataset.geo.trim();
      } else if (itemClassArr.contains('selected-filter-status')) {
        status = item.dataset.status.trim();
      } else if (itemClassArr.contains('selected-filter-lang')) {
        lang = item.dataset.lang.trim();
      }
    });
    const scrollElement = document.querySelector('.tournaments') as HTMLElement;
    window.scrollTo({
      top: scrollElement.offsetTop,
      behavior: 'smooth',
    });

    const pageEle = document.querySelector('.main-container') as HTMLElement; // if slug exists
    const slug = pageEle.dataset.slug;
    let gamePkg = '';
    if (slug) {
      gamePkg = pageEle.dataset.pkgname;
    }
    const configObj = {
      limit: 12,
      slug,
      geo,
      status,
      lang,
      locale: this.locale,
      cursor: '',
      game_pkg: gamePkg,
      isCountRequired: true,
    };
    const data = await ApiService.fetchData(configObj);
    if (Object.keys(data).length > 0) {
      this.resetUrl();
      this.updateView(data, true);
      this.closeMobileFilterMenu();
      this.scrollToTournamentSection();
      this.nextCursor = data.metaData.cursor;
    }
  }

  /*
   * resetMobileFilter: reset all selected filter
   */
  resetMobileFilter() {
    // select selected values for geo/status/lang
    const selectedItems = document.querySelectorAll(
      '[class*=selected-filter-]',
    );

    selectedItems.forEach(item => {
      const itemClassArr = item.classList;
      if (itemClassArr.contains('selected-filter-geo')) {
        itemClassArr.remove('selected-filter-geo');
      } else if (itemClassArr.contains('selected-filter-status')) {
        itemClassArr.remove('selected-filter-status');
      } else if (itemClassArr.contains('selected-filter-lang')) {
        itemClassArr.remove('selected-filter-lang');
      }
    });
  }

  /*
   * addTabEventMobile : attaching all events required for filter in case of mobile
   */
  addTabEventMobile() {
    // filter icon
    document
      .querySelector('.filter-icon')
      .addEventListener('click', this.showMobileFilterMenu);
    const tabs = document.querySelectorAll('.tab button');
    tabs.forEach(tab => {
      tab.addEventListener('click', this.openTab);
    });

    document
      .querySelector('.close-filter')
      .addEventListener('click', this.closeMobileFilterMenu);

    // select items
    const menuItems = document.getElementsByClassName('filter-list');
    for (const item of menuItems) {
      item.addEventListener('click', this.selectMenuItem);
    }

    // event for save/reset filter button
    document
      .querySelector('.filter-save')
      .addEventListener('click', this.saveFilter);
    document
      .querySelector('.filter-reset')
      .addEventListener('click', this.resetMobileFilter);
  }

  // ********************************Methods for Mobile ends*********************************//

  async loadMoreData(e) {
    e.preventDefault();
    // call service
    const geoEle = document.querySelector(
      '.country-specific-btn',
    ) as HTMLElement;
    const statusEle = document.querySelector(
      '.tournament-specific-btn',
    ) as HTMLElement;
    const langEle = document.querySelector(
      '.locale-specific-btn',
    ) as HTMLElement;
    const geoVal = geoEle.dataset.geo.trim();
    const statusVal = statusEle.dataset.status.trim();
    const langEleVal = langEle.dataset.lang.trim();
    // show loader
    document.querySelector('.loader').classList.remove('hide');
    document.querySelector('.loader').classList.add('show');
    e.target.classList.add('hide');
    const pageEle = document.querySelector('.main-container') as HTMLElement; // if slug exists
    const slug = pageEle.dataset.slug;
    let gamePkg = '';
    if (slug) {
      gamePkg = pageEle.dataset.pkgname;
    }
    const cursor = pageEle.dataset.cursor ? pageEle.dataset.cursor : '';
    const configObj = {
      limit: 12,
      slug,
      geo: geoVal,
      status: statusVal,
      lang: langEleVal,
      locale: this.locale,
      cursor,
      game_pkg: gamePkg,
      isCountRequired: false,
    };
    const paginationData = await ApiService.fetchData(configObj);
    if (Object.keys(paginationData).length > 0) {
      // change viewmore url
      const viewMoreEle = document.querySelector(
        '.view-more',
      ) as HTMLAnchorElement;
      let newUrl = viewMoreEle.href.split('page=')[0];
      newUrl = `${newUrl}page=${this.pageNum + 1}`;
      viewMoreEle.href = newUrl;
      this.nextCursor = paginationData.metaData.cursor;
      // remove loader
      document.querySelector('.loader').classList.remove('show');
      document.querySelector('.loader').classList.add('hide');
      e.target.classList.remove('hide');
      this.pageNum++;

      // update url in case of pagination
      this.updatePageNumberInUrl(this.pageNum - 1);
      this.updateView(paginationData, false);
    }
  }

  pagination() {
    const viewMoreBtn = document.querySelector('.view-more .view');
    if (viewMoreBtn) {
      viewMoreBtn.addEventListener('click', this.loadMoreData);
    }
  }

  addTimeZoneAbbr() {
    const allElements = document.querySelectorAll('.add-timezoneAbbr') as any;
    const timezoneName = ApiService.getTimeZoneAbbr();
    allElements.forEach(item => {
      item.innerText = timezoneName;
    });
  }

  async emptyStateViewAll(e) {
    e.preventDefault();
    // check for no data
    const pageCounterEle = document.querySelector(
      '.main-container',
    ) as HTMLElement;
    // pageNum = 1;
    const pageEle = document.querySelector('.main-container') as HTMLElement; // if slug exists
    const slug = pageEle.dataset.slug;
    let gamePkg = '';
    if (slug) {
      gamePkg = pageEle.dataset.pkgname;
    }
    const configObj = {
      limit: 12,
      slug,
      geo: 'all',
      status: 'all',
      lang: 'all',
      locale: this.locale,
      cursor: '',
      game_pkg: gamePkg,
      isCountRequired: true,
    };
    const data = await ApiService.fetchData(configObj);
    if (Object.keys(data).length > 0) {
      if (data.metaData && data.metaData.count) {
        this.resetUrl();
        this.updateView(data, true);
        this.nextCursor = data.metaData.cursor;
        if (window.screen.width < 768) {
          // mobile
          this.resetMobileFilter();
          document
            .querySelector('.geo-list li[data-geo=all]')
            .classList.add('selected-filter-geo');
          document
            .querySelector('.status-list li[data-status=all]')
            .classList.add('selected-filter-status');
          document
            .querySelector('.lang-list li[data-lang=all]')
            .classList.add('selected-filter-lang');
        } else {
          // Update filter
          const geoFlag = document.querySelector(
            '.country-list li[data-geo=all]',
          ).innerHTML;
          const statusFlag = document.querySelector(
            '.tournament-filter-list li[data-status=all]',
          ).innerHTML;
          const langFlag = document.querySelector(
            '.locale-list li[data-lang=all]',
          ).innerHTML;
          const regionBtn = document.querySelector(
            '.country-specific-btn',
          ) as HTMLElement;
          regionBtn.innerHTML = geoFlag;
          regionBtn.dataset.geo = 'all';
          const statusBtn = document.querySelector(
            '.tournament-specific-btn',
          ) as HTMLElement;
          statusBtn.innerHTML = statusFlag;
          statusBtn.dataset.status = 'all';
          const langBtn = document.querySelector(
            '.locale-specific-btn',
          ) as HTMLElement;
          langBtn.innerHTML = langFlag;
          langBtn.dataset.lang = 'all';
        }
      } else {
        // redirect to find-tournament page
        window.location.href = '/find-tournaments';
      }
    }
  }

  init() {
    if (window.screen.width < 768) {
      this.addTabEventMobile();
    } else {
      this.addFilterSearchEvent();
    }
    this.addTimeZoneAbbr();
    this.pagination();
    if (document.querySelector('.no-available-data')) {
      document
        .querySelector('.no-available-data')
        .addEventListener('click', this.emptyStateViewAll);
    }
  }
}

const tournamentFilters = new TournamentFilters();
export default tournamentFilters;
