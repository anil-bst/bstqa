import { HttpService } from '@nestjs/common';
import moment from 'moment-timezone';
// import { environments } from '../environment/environment';
import { environments } from '@app/environments';
import { timeZoneObj } from './constants';

const BASE_URL = environments.apiBaseURL;

export class ApiService {
  constructor(private readonly http: HttpService) {}
  static async searchGame(str: string, limit = 10, locale = 'en') {
    const response = await fetch(
      `${BASE_URL}/games?q=${str.toLowerCase()}&limit=${limit}&page=1&locale=${locale}`,
    );
    if (response.ok) {
      const json = await response.json();
      return json.data;
    } else {
      // console.log('error occured: ');
    }
  }

  /*
   * fetchData: fetches data for tournament and game detail page
   */
  static async fetchData(confiObj: any) {
    const {
      limit,
      slug,
      geo,
      status,
      lang,
      locale,
      cursor,
      game_pkg,
      isCountRequired = false,
    } = confiObj;
    const baseUrl = `${BASE_URL}/tournaments`;
    const response = await fetch(
      `${baseUrl}?limit=${limit}&geo=${geo}&status=${status}&lang=${lang}&locale=${locale}&cursor=${cursor}&game_pkg=${game_pkg}&is_count_required=${isCountRequired}`,
    );
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      // console.log('error occured: ');
    }
  }

  /*
   *  getTimeZoneAbbr: returns user's current timezone
   */
  static getTimeZoneAbbr() {
    const timeZone = moment.tz.guess();
    let timeZoneAbbr = null;
    if (timeZoneObj[timeZone]) {
      timeZoneAbbr = timeZoneObj[timeZone].abbr;
    } else {
      const time = new Date();
      const timeZoneOffset = time.getTimezoneOffset();
      timeZoneAbbr = moment.tz.zone(timeZone).abbr(timeZoneOffset);
    }
    return timeZoneAbbr;
  }

  /*
   * numberWithCommas: converts numbers with comma separated
   */
  static numberWithCommas(x) {
    if (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }

  static getTournamentUrl(esportsUrl) {
    let tournamentUrl = '';
    if (esportsUrl) {
      const urlContent = esportsUrl.split('/');
      tournamentUrl = urlContent[urlContent.length - 1];
    }
    return tournamentUrl;
  }
}
