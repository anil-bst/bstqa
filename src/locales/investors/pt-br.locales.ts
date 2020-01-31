import { IInvestorsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';

const language = SupportedLocalesEnum.PORTUGUESE;
export const InvestorsLocalePortuguese: IInvestorsLocale = {
  metadata: {
    title: 'Investidores - Game.tv',
    description:
      'Leia mais sobre os apoiadores e parceiros que fazem da Game.tv o maior nome no Mobile E-Sports',
  },
  heading: 'Investidores ',
  teamLink: `/${language}/team`,
  content:
    'A game.tv é apoiada por cinco empresas de risco no Vale do Silício, vários desenvolvedores de jogos e parceiros estratégicos importantes em todo o mundo, incluindo Japão e Coréia. Compartilhamos uma visão comum de que o Mobile + 5G criará um ecossistema massivo de E-Sports mobile, e a game.tv está em uma posição única para alavancar-lo. ',
  buttonText: 'Veja Nossa Equipe ',
};
