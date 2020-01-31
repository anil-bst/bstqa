// tslint:disable: quotemark
import { IInvestorsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';

const language = SupportedLocalesEnum.CHINESE;
export const InvestorsLocaleChinese: IInvestorsLocale = {
  metadata: {
    title: '投資者-Game.tv',
    description:
      '閱讀更多有關使Game.tv成為手遊電競知名公司的支持者以及合作夥伴的訊息',
  },
  heading: '投資人',
  teamLink: `/${language}/team`,
  content:
    'game.tv得到了矽谷 5家風險投資公司，包括日本和韓國在內的全球多家遊戲開發商和主要戰略合作夥伴的支持。 我們有一個共同的願景，那就是手遊 + 5G將建立起一個龐大的手遊電子競技生態系統，而game.tv的定位也很獨特。',
  buttonText: '查看我們的團隊',
};
