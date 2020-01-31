import { SupportedLocalesEnum } from '@app/enums';
import { ApiService } from './api-service';

/*
 * classes for autocomplete
 * wrapper js-search-{location of search}
 * js-search-box
 * js-search-suggestion-list
 */

class AutocompleteOnKeypress {
  countKeypress: number;
  locationOfSearch: string;
  activeCls: string;
  searchText: string;
  searchGameLink: string;
  locale: string;
  suggestionListExist: boolean;
  constructor() {
    this.countKeypress = 0;
    this.locationOfSearch = '';
    this.activeCls = 'active';
    this.searchText = '';
    this.searchGameLink = '';
    this.suggestionListExist = false;
    this.locale = SupportedLocalesEnum.ENGLISH;
  }

  /*
   * resetCounter : reset counter to 1
   */
  resetCounter(fromList) {
    this.countKeypress = fromList ? 1 : 0;
  }

  /*
   * moveCursorToEnd: move cursor at the end of input text
   */
  moveCursorToEnd(el) {
    if (typeof el.selectionStart === 'number') {
      el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange !== 'undefined') {
      el.focus();
      const range = el.createTextRange();
      range.collapse(false);
      range.select();
    }
  }

  /*
   * updateSearchText: update search box's text
   */
  updateSearchText() {
    const queryStr = `.js-search-${this.locationOfSearch} .js-search-box`;
    const searchBox = document.querySelector(queryStr) as HTMLInputElement;

    searchBox.value = this.searchText;
  }

  /*
   * searchGame: search game
   */
  searchGame(e) {
    const locale =
      document.getElementsByTagName('html')[0].getAttribute('lang') ||
      SupportedLocalesEnum.ENGLISH;
    let gameUrl = '';

    if (this.suggestionListExist) {
      if (this.searchGameLink) {
        gameUrl = this.searchGameLink;
      } else {
        const ele = e.target as HTMLInputElement;
        const val = ele.value;
        gameUrl = `/${locale}/find-tournaments/${val}`;
      }
      window.location.href = gameUrl;
    }
  }

  /*
   * attach event to filter box
   */
  firstSuggestion() {
    const querySuggestionList = `.js-search-${this.locationOfSearch} .js-search-suggestion-list li`;
    const list = document.querySelectorAll(querySuggestionList);
    if (list && list.length) {
      list[0].classList.add(this.activeCls);
      const linkEle = list[0].querySelector('a');
      if (linkEle) {
        this.searchText = linkEle.innerText;
        this.searchGameLink = linkEle.pathname;
        this.countKeypress++;
      }
    }
  }

  addSuggestionEventHandler() {
    const queryStr = `.js-search-${this.locationOfSearch} .js-search-box`;
    const searchBox = document.querySelector(queryStr) as HTMLInputElement;
    const querySuggestionList = `.js-search-${this.locationOfSearch} .js-search-suggestion-list`;
    const querySuggestionListEle = document.querySelector(
      querySuggestionList,
    ) as HTMLUListElement;

    // input event on search
    searchBox.addEventListener('input', e => {
      const ele = e.target as HTMLInputElement;
      const val = ele.value;
      if (!val) {
        this.resetCounter(false);
      }
    });

    searchBox.addEventListener('blur', e => {
      this.resetCounter(false);
    });

    searchBox.addEventListener('keydown', e => {
      const keyCode = e.keyCode || e.which;

      // first suggestion
      const query = `.js-search-${this.locationOfSearch} .js-search-suggestion-list li`;
      const list = document.querySelectorAll(query);
      const suggestionCount = list ? list.length : 0;

      // allow only for up/down arrow keys
      if (list && list.length && (keyCode === 38 || keyCode === 40)) {
        // count suggestion list

        if (keyCode === 38) {
          e.preventDefault();
          this.countKeypress--;
          if (this.countKeypress <= 0) {
            this.countKeypress = suggestionCount;
          }
        } else {
          this.countKeypress++;
          if (this.countKeypress - 1 === suggestionCount) {
            this.resetCounter(true);
          }
        }

        // remove active class from suggestions
        list.forEach(item => {
          item.classList.remove(this.activeCls);
        });

        list[this.countKeypress - 1].classList.add(this.activeCls);
        const linkEle = list[this.countKeypress - 1].querySelector('a');
        if (linkEle) {
          this.searchText = linkEle.innerText;
          this.searchGameLink = linkEle.pathname;

          this.updateSearchText();
        }

        // show active element in viewport
        const listWrapper = document.querySelector(
          `.js-search-${this.locationOfSearch} .js-search-suggestion-list`,
        ) as HTMLUListElement;
        const activeListItem = document.querySelector(
          `.js-search-${this.locationOfSearch} .js-search-suggestion-list li.active`,
        ) as HTMLLIElement;
        if (listWrapper && activeListItem) {
          listWrapper.scrollTop = 0;
          listWrapper.scrollTop =
            activeListItem.offsetTop - listWrapper.offsetHeight + 15;
        }
      }

      // if key is enter
      if (keyCode === 13) {
        this.searchGame(e);
      }
    });

    querySuggestionListEle.addEventListener('mouseover', e => {
      const targetEle = e.target as any;
      this.resetCounter(false);
      const query = `.js-search-${this.locationOfSearch} .js-search-suggestion-list li`;
      const list = document.querySelectorAll(query);

      list.forEach(item => {
        item.classList.remove(this.activeCls);
      });
      targetEle.closest('li').classList.add('active');
    });
  }

  /*
   * addSearchResult: create suggestion list based on api result
   */

  addSearchResult(searchResult) {
    const fragment = new DocumentFragment();
    let counter = 0;
    if (searchResult && searchResult.length) {
      for (const data of searchResult) {
        const li = document.createElement('li');
        const liA = document.createElement('a');
        li.setAttribute('id', 'suggestion_' + counter++);
        // const locale = Utils.getCookieValue('locale') || SupportedLocalesEnum.ENGLISH;
        let tournamentPath = `/${this.locale.replace(
          /"/g,
          '',
        )}/find-tournaments/${data.slug}`;
        if (this.locale === SupportedLocalesEnum.ENGLISH) {
          tournamentPath = `/find-tournaments/${data.slug}`;
        }

        liA.setAttribute('href', tournamentPath);
        liA.appendChild(document.createTextNode(data.name));
        li.appendChild(liA);
        fragment.appendChild(li);
      }
    } else {
      const li = document.createElement('li');
      li.setAttribute('class', 'no-result-found-item');
      li.setAttribute('id', 'suggestion_0');
      li.appendChild(
        document.createTextNode('Game not found! Please search another game.'),
      );
      fragment.appendChild(li);
    }

    // li.appendChild(document.createTextNode(data.name));
    return fragment;
  }

  removeSuggestionList() {
    let queryStr = `.js-search-${this.locationOfSearch} .autocomplete-suggestions`;
    const suggestionList = document.querySelector(queryStr);
    // queryStr = `.js-search-${this.locationOfSearch} .suggestion-list`;
    if (suggestionList && suggestionList.classList.contains('open')) {
      suggestionList.classList.remove('open');
      // destroy suggestion list
      queryStr = `.js-search-${this.locationOfSearch} .suggestion-list`;
      const ulList = document.querySelector(queryStr);
      ulList.innerHTML = '';
      let child = ulList.lastElementChild;
      if (child) {
        while (child) {
          ulList.removeChild(child);
          child = ulList.lastElementChild;
        }
      }
    }
  }

  /*
   * attachSearchEvents: search event to handle auto-suggestion
   */
  attachSearchEvents() {
    let queryStr = `.js-search-${this.locationOfSearch} .search-control`;
    const searchControlElement = document.querySelector(
      queryStr,
    ) as HTMLInputElement;
    if (searchControlElement) {
      searchControlElement.addEventListener('input', async e => {
        const target = e.target as HTMLInputElement;
        const value = target.value;
        if (value.length < 3) {
          this.removeSuggestionList();
        } else {
          // tslint:disable-next-line: no-shadowed-variable
          const searchResult = await ApiService.searchGame(
            value,
            10,
            this.locale,
          );

          queryStr = `.js-search-${this.locationOfSearch} .search-control`;
          const searchInput = document.querySelector(
            queryStr,
          ) as HTMLInputElement;
          this.suggestionListExist =
            searchResult && searchResult.length ? true : false;
          if (searchInput.value && this.suggestionListExist) {
            queryStr = `.js-search-${this.locationOfSearch} .autocomplete-suggestions .suggestion-list`;
            document.querySelector(queryStr).innerHTML = '';

            queryStr = `.js-search-${this.locationOfSearch} .autocomplete-suggestions`;
            const suggestionParentEle = document.querySelector(queryStr);
            suggestionParentEle.classList.add('open');

            // add list
            queryStr = `.js-search-${this.locationOfSearch} .suggestion-list`;
            const ul = document.querySelector(queryStr);
            const listFragment = this.addSearchResult(searchResult);
            if (searchResult && searchResult.length === 0) {
              suggestionParentEle.classList.add('no-result-found');
            }
            ul.appendChild(listFragment);

            // auto suggestion firstSuggetsion
            autocompleteOnKeypress.firstSuggestion();
          } else {
            this.removeSuggestionList();
          }
        }
      });

      document.addEventListener('click', this.removeSuggestionList);
    }
  }

  init(loc: string) {
    this.locationOfSearch = loc;
    this.locale =
      document.getElementsByTagName('html')[0].getAttribute('lang') ||
      SupportedLocalesEnum.ENGLISH;
    this.addSuggestionEventHandler();
    this.attachSearchEvents();
  }
}

const autocompleteOnKeypress = new AutocompleteOnKeypress();
export default autocompleteOnKeypress;
