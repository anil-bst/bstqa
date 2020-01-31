// tslint:disable: quotemark
import { IInvestorsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';

const language = SupportedLocalesEnum.ITALIAN;
export const InvestorsLocaleItalian: IInvestorsLocale = {
  metadata: {
    title: 'Investitori - Game.tv',
    description:
      'Scopri di più sui sostenitori e sui partner che fanno di Game.tv il nome più importante di Mobile Esports',
  },
  heading: 'Gli investitori',
  teamLink: `/${language}/team`,
  content:
    'game.tv è supportato da 5 società di venture capital nella Silicon Valley, numerosi sviluppatori di giochi e partner strategici in tutto il mondo, tra cui Giappone e Corea. Condividiamo una visione comune secondo cui Mobile + 5G creerà un enorme ecosistema mobile di eSports e game.tv è posizionato in modo univoco per catturarlo.',
  buttonText: 'Visualizza il nostro team',
};
