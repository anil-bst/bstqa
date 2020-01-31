import { IFooterLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';

const language = SupportedLocalesEnum.JAPANESE;
export const FooterLocaleJapanese: IFooterLocale = {
  navigationMenu: [
    {
      subMenu: [
        {
          name: 'Game.tvとは',
          link: `/${language}`,
        },
        {
          name: 'トーナメント',
          link: `/${language}/find-tournaments`,
        },
        {
          name: 'Discord用コマンド一覧',
          link: `/${language}/how-to-use-tourney?tab=command`,
        },
        {
          name: 'Game.tvの利用方法',
          link: `/${language}/how-to-use-tourney`,
        },
        {
          name: 'スポンサーシップ',
          link: `/${language}/sponsorships`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: '株主',
          link: `/${language}/investors`,
        },
        {
          name: 'チーム',
          link: `/${language}/team`,
        },
        {
          name: 'お問い合わせ',
          link: `/${language}/contact`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: '利用規約とプライバシーポリシー',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: '著作権ポリシー',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'クッキーポリシー',
          link: `/${language}/cookie-policy`,
        },
        {
          name: 'エンドユーザーライセンス契約',
          link: `/${language}/license-agreement`,
        },
      ],
    },
    {
      subMenu: [
        {
          link: '/dashboard',
          name: 'ダッシュボード',
          target: '_blank',
        },
      ],
    },
  ],
  // copyrightNotice: 'Copyright©game.tv. All rights reserved.',
  copyrightNotice: 'Copyright©game.tv. All rights reserved.',
};
