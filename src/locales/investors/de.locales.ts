import { IInvestorsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';

const language = SupportedLocalesEnum.GERMAN;
export const InvestorsLocaleGerman: IInvestorsLocale = {
  metadata: {
    title: 'Investoren - Game.tv',
    description:
      'Lies mehr über die Unterstützer und Partner, die Game.tv zum größten Namen im Mobile E-Sport machen',
  },
  heading: 'Investoren',
  teamLink: `/${language}/team`,
  content:
    'game.tv wird von 5 Venture-Unternehmen im Silicon Valley, mehreren Spieleentwicklern und wichtigen strategischen Partnern auf der ganzen Welt unterstützt, darunter Japan und Korea. Wir teilen die gemeinsame Vision, dass Mobile + 5G ein riesiges Mobile-E-Sport-Ökosystem schaffen wird, und game.tv ist einzigartig positioniert, um es zu erfassen.',
  buttonText: 'Sieh dir unser Team an',
};
