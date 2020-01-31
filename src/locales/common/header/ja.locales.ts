import { IHeaderLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.JAPANESE;
export const HeaderLocaleJapanese: IHeaderLocale = {
  link: `/${language}`,
  navigationMenu: [
    {
      name: 'Game.tvとは',
      link: `/${language}`,
    },
    {
      name: 'トーナメント',
      link: `/${language}/find-tournaments`,
    },
    {
      name: 'Game.tvの利用方法',
      link: `/${language}/how-to-use-tourney`,
    },
    {
      name: 'Discord用コマンド一覧',
      link: `/${language}/how-to-use-tourney?tab=command`,
    },
    {
      name: 'スポンサーシップ',
      link: `/${language}/sponsorships`,
    },
    {
      name: 'ダッシュボード',
      link: '/dashboard',
      target: '_blank',
    },
    {
      name: '',
      link: 'javascript:void(0)',
      classes: 'nav-search-block',
    },
    {
      name: 'ウェブアプリで参加',
      link:
        'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
      target: '_blank',
      classes: 'menu-box',
    },
  ],
  searchForm: {
    formPlaceholder: 'PUBG MOBILEの類似ゲームを検索',
    searchInfo: '該当ゲームのトーナメントを表示',
    noresult: 'ゲームが見つかりません。他のゲームを選択してください。',
  },
};
