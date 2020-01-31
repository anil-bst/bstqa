import { IInvestorsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';

const language = SupportedLocalesEnum.ARABIC;
export const InvestorsLocaleArabic: IInvestorsLocale = {
  metadata: {
    title: 'المستثمرون - Game.tv',
    description:
      'اقرأ المزيد عن المؤيدين والشركاء الذين جعلوا Game.tv أكبر اسم في Mobile Esports',
  },
  heading: 'المستثمرين',
  teamLink: `/${language}/team`,
  content:
    'يحظى game.tv بدعم 5 شركات في وادي السيليكون والعديد من مطوري الألعاب والشركاء الاستراتيجيين الرئيسيين في جميع أنحاء العالم بما في ذلك اليابان وكوريا. إننا نشارك رؤية مشتركة مفادها أن Mobile + 5G ستنشئ نظامًا بيئيًا ضخمًا للرياضات الإلكترونية المحمولة ، وأن موقع game.tv في موقع فريد لالتقاطه.',
  buttonText: 'عرض فريقنا',
};
