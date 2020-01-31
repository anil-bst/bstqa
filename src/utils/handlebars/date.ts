import moment from 'moment';
import { ApiService } from '@app/frontend/scripts/common/api-service';
function formatDate(time: string, format: string) {
  let startTime = moment(time).format(format);
  // tslint:disable-next-line: radix
  startTime = parseInt(startTime) < 10 ? `0${startTime}` : startTime;
  return startTime;
}

function addDays(date, days) {
  if (date) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return new Date(result).toISOString();
  }
}

function getRegistrationDate(timestamp) {
  if (timestamp) {
    const regDate = new Date(parseInt(timestamp, 10));
    const monthArr = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ];

    const day =
      regDate.getDay() < 10 ? `0${regDate.getDay()}` : regDate.getDay();
    const month = monthArr[regDate.getMonth()];
    const year = regDate.getFullYear();
    const yearStr = year > 2000 ? year - 2000 : year - 1900;
    return `${day} ${month}, ${yearStr}`;
  }
  return '';
}

function getRegistrationTime(timestamp) {
  if (timestamp) {
    const regDate = new Date(parseInt(timestamp, 10));
    const hours = regDate.getHours();
    const hourStr = hours < 10 ? '0' + hours : '' + hours;
    const min = regDate.getMinutes();
    const zone = ApiService.getTimeZoneAbbr();
    return `${hourStr}:${min} ${zone}`;
  }

  return '';
}

export const DateHelpers = {
  DateFormat: formatDate,
  AddDays: addDays,
  GetRegistrationDate: getRegistrationDate,
  GetRegistrationTime: getRegistrationTime,
};
