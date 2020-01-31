// tslint:disable: quotemark
import { IInvestorsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';

const language = SupportedLocalesEnum.FRENCH;
export const InvestorsLocaleFrench: IInvestorsLocale = {
  metadata: {
    title: 'Investisseurs - Game.tv',
    description:
      'En savoir plus sur les bailleurs de fonds et les partenaires faisant de Game.tv le plus grand nom de Mobile Esports',
  },
  heading: 'Investisseurs',
  teamLink: `/${language}/team`,
  content:
    "game.tv est soutenu par 5 sociétés de capital-risque de la Silicon Valley, plusieurs développeurs de jeux et des partenaires stratégiques clés dans le monde entier, notamment au Japon et en Corée. Nous partageons la même vision: Mobile + 5G   créeront un écosystème eSport mobile de grande envergure, et game.tv est particulièrement bien placé pour l'avoir.",
  buttonText: 'Voir Notre Équipe',
};
