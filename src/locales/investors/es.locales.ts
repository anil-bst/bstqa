import { IInvestorsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';

const language = SupportedLocalesEnum.SPANISH;
export const InvestorsLocaleSpanish: IInvestorsLocale = {
  metadata: {
    title: 'Inversores - Game.tv',
    description:
      'Lea más sobre los patrocinadores y socios que hacen de Game.tv el nombre más importante en Esports Móvil',
  },
  heading: 'Inversores',
  teamLink: `/${language}/team`,
  content:
    'game.tv está respaldado por 5 empresas de riesgo en Silicon Valley, varios desarrolladores de juegos y socios estratégicos clave en todo el mundo, incluidos Japón y Corea. Compartimos una visión común de que Mobile + 5G creará un ecosistema de eSports móvil masivo, y game.tv está en una posición única para capturarlo.',
  buttonText: 'Ver nuestro equipo',
};
