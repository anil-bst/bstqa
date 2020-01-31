import { IInvestorsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';

const language = SupportedLocalesEnum.JAPANESE;
export const InvestorsLocaleJapanese: IInvestorsLocale = {
  metadata: {
    title: '株主 - Game.tv',
    description:
      'Game.tvをMobile Esportsで最大の支持者にしている支援者とパートナーについて詳しく読む',
  },
  heading: '株主',
  teamLink: `/${language}/team`,
  content:
    // tslint:disable-next-line: max-line-length
    `Game.tvは、シリコンバレーの5つのベンチャー企業、複数のゲーム開発者、日本と韓国を含む世界中の主要な戦略的パートナーによって支えられています。 次世代モバイルネットワーク「5G」が大規模なモバイルeスポーツエコシステムを生み出すという共通のビジョンを持ち、Game.tvがそれを実現するプラットフォームとなります。`,
  buttonText: '私たちのチームを見る',
};
