import { IInvestorsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';

const language = SupportedLocalesEnum.POLISH;
export const InvestorsLocalePolish: IInvestorsLocale = {
  metadata: {
    title: 'Inwestorzy - Game.tv',
    description:
      'Przeczytaj więcej o sponsorach i partnerach czyniących Game.tv największą marką w Mobile Esports',
  },
  heading: 'Inwestorzy',
  teamLink: `/${language}/team`,
  content:
    'game.tv jest wspierany przez 5 firm venture w Dolinie Krzemowej, kilku twórców gier i kluczowych partnerów strategicznych na całym świecie, w tym w Japonii i Korei. Podzielamy wspólną wizję, że Mobile + 5G stworzy ogromny ekosystem mobilnego e-sportu, a game.tv ma wyjątkową pozycję, aby go uchwycić.',
  buttonText: 'Zobacz nasz zespół',
};
