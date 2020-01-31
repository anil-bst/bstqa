import { IInvestorsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';

const language = SupportedLocalesEnum.RUSSIAN;
export const InvestorsLocaleRussian: IInvestorsLocale = {
  metadata: {
    title: 'Инвесторы — Game.tv',
    description:
      'Узнайте больше о спонсорах и партнерах Game.tv, благодаря которым Game.tv получает признание в мобильном киберспорте',
  },
  heading: 'Инвесторы',
  teamLink: `/${language}/team`,
  content:
    'game.tv поддерживается 5 венчурными компаниями из Кремниевой долины, несколькими разработчиками игр и ключевыми стратегическими партнерами по всему миру, включая Японию и Южную Корею. Мы разделяем общую точку зрения, что технология мобильной связи 5G позволит создать крупную экосистему мобильного киберспорта, и game.tv намеревается занять в ней свое место.',
  buttonText: 'Посмотреть команду',
};
