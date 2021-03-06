import { ApiService } from '@app/frontend/scripts/common/api-service';

function replaceTemplateString(
  template: string,
  current: string,
  replace: string,
) {
  const replaceRegex = new RegExp(`{{${current}}}`, `gm`);
  if (template) {
    return template.replace(replaceRegex, replace);
  }
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
  if (str) {
    return str.toUpperCase();
  }
}

function checkLocale(locale) {
  if (locale && locale.toLowerCase() === 'en') {
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

function checkDiscordPlateform(platform, discordUrl, pwaUrl) {
  if (platform && platform.toLowerCase() === 'discord') {
    return discordUrl;
  }
  return pwaUrl;
}

function showEmptyState(count, data) {
  if (count || (data && data.length)) {
    return '';
  }
  return 'show';
}

function checkPlatformType(pl1, pl2) {
  const platformType = pl1 && pl1.toLowerCase();
  const howToJoinSectionPlatform = pl2 && pl2.toLowerCase();
  if (
    platformType &&
    howToJoinSectionPlatform &&
    platformType === howToJoinSectionPlatform
  ) {
    return 'show';
  }
  return 'hide';
}

function checkPrizeIsDefault(prize) {
  let isDefault = false;
  if (prize) {
    const str = prize.replace(/\s/g, '').toLowerCase();
    isDefault = str === 'pleasecontactserveradmin' || str === 'n/a';
  }

  return isDefault ? 'hide' : 'show';
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
  CheckDiscordPlateform: checkDiscordPlateform,
  ShowEmptyState: showEmptyState,
  CheckPlatformType: checkPlatformType,
  CheckPrizeIsDefault: checkPrizeIsDefault,
};
