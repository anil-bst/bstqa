// tslint:disable: quotemark
import { IInvestorsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';

const language = SupportedLocalesEnum.TURKISH;
export const InvestorsLocaleTurkish: IInvestorsLocale = {
  metadata: {
    title: 'Yatırımcılar - Game.tv',
    description:
      "Game.tv'yi Mobile Espor'da en büyük isim yapan destekçiler ve iş ortakları hakkında daha fazla bilgi edinin.",
  },
  heading: 'Yatırımcılar',
  teamLink: `/${language}/team`,
  content:
    "game.tv, Silikon Vadisi'ndeki 5 girişim şirketi, birçok oyun geliştiricisi ve Japonya ve Kore dahil olmak üzere tüm dünyadaki kilit stratejik ortaklar tarafından desteklenmektedir. Mobile + 5G'nin devasa bir mobil eSports eko sistemi yaratacağı ortak bir vizyonu paylaşıyoruz ve game.tv onu yakalamak için benzersiz bir konumda bulunuyor.",
  buttonText: 'Takımımıza Göz At ',
};
