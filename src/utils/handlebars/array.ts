import { ApiService } from '@app/frontend/scripts/common/api-service';

function getArrayNextElement(arr: any[], index: number) {
  if (arr.length <= index + 1) {
    return;
  }
  return arr[index + 1];
}

function getArrayPreviousElement(arr: any[], index: number) {
  if (index === 0) {
    return;
  }
  return arr[index - 1];
}
function getCountFlag(count: number, page: number, limit: number) {
  const showPagination = page < Math.ceil(count / limit);
  if (showPagination) {
    return 'show';
  }
  return 'hide';
}

function showViewMore(isLastBatch: boolean) {
  return !isLastBatch ? 'show' : 'hide';
}

function getListItem(from: number, to: number, context) {
  const item = [];
  let i: number;
  if (context && context.length) {
    for (i = from; i < to; i++) {
      item.push(context[i]);
    }
  }
  return item;
}

function nextCount(count) {
  return count + 1;
}

export const ArrayHelpers = {
  ArrayNext: getArrayNextElement,
  ArrayPrevious: getArrayPreviousElement,
  ArrayCountFlag: getCountFlag,
  TimeZone: ApiService.getTimeZoneAbbr,
  ListItem: getListItem,
  NextCount: nextCount,
  ShowViewMore: showViewMore,
};

/*
 * filter helpers
 */

function countryNameMap(country) {
  const countryMap = {
    br: 'Brazil',
    ca: 'Canada',
    id: 'Indonesia',
    fr: 'France',
    de: 'Germany',
    in: 'India',
    it: 'Italy',
    jp: 'Japan',
    kr: 'Korea',
    pl: 'Poland',
    ru: 'Russia',
    es: 'Spain',
    se: 'Sweden',
    tw: 'Taiwan',
    th: 'Thailand',
    tr: 'Turkey',
    us: 'USA',
    gb: 'United Kingdom',
    vn: 'Vietnam',
    ot: 'Others',
    others: 'Others',
  };
  return countryMap[country];
}

function languageFilter(lang) {
  const langMap = {
    ar: 'العربية',
    cs: 'Čeština',
    de: 'Deutsch',
    en: 'English',
    es: 'Español',
    fr: 'Français',
    id: 'Indonesia',
    it: 'Italiano',
    ja: '日本語',
    ko: '한국어',
    ms: 'Melayu',
    nl: 'Nederlands',
    pl: 'polski',
    pt: 'Português',
    ru: 'Русский',
    th: 'ไทย',
    tr: 'Türkçe',
    vi: 'Tiếng Việt',
    zh: '台灣',
    others: 'Others',
  };
  const langShort = lang.split('-')[0];

  return langMap[langShort];
}

export const filterMobileHelpers = {
  countryNameMap,
  languageFilter,
};
