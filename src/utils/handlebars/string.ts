import { ApiService } from '@app/frontend/scripts/common/api-service';

function replaceTemplateString(
  template: string,
  current: string,
  replace: string,
) {
  const replaceRegex = new RegExp(`{{${current}}}`, `gm`);
  return template.replace(replaceRegex, replace);
}

function sliceString(
  template: string,
  startPosition: number,
  endPosition: number,
) {
  let result = '';
  if (template) {
    result = template.slice(startPosition, endPosition).toUpperCase();
  }
  return result;
}

function stringModifyForLDJson(
  template: string,
  startPosition: number,
  endPosition: number,
) {
  if (template) {
    if (/\r?\n|\r/g.test(template)) {
      template = template.replace(/\r?\n|\r/g, ' ');
    }

    return template.slice(startPosition, endPosition);
  }
}

function uppercaseStr(str) {
  return str.toUpperCase();
}

function checkLocale(locale) {
  if (locale.toLowerCase() === 'en') {
    return '';
  } else {
    return '/' + locale;
  }
}

function showSeeMore(content) {
  const checkWordLength = content && content.split(' ');
  if (checkWordLength && checkWordLength.length > 11) {
    return 'show';
  }
  return 'hide';
}

export const StringHelpers = {
  TemplateStringReplace: replaceTemplateString,
  StringSlice: sliceString,
  StringModifyForLDJson: stringModifyForLDJson,
  ConvertToUppercase: uppercaseStr,
  commaSeparatedStr: ApiService.numberWithCommas,
  ShowSeeMore: showSeeMore,
  GetTournamentUrl: ApiService.getTournamentUrl,
  CheckLocale: checkLocale,
};
