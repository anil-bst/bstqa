import { IFindTournamentLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.RUSSIAN;

export const FindTournamentLocalesRussian: IFindTournamentLocale = {
  metadata: {
    title: 'Найдите киберспортивные турниры — Бесплатное участие | Game.tv ',
    description:
      'Ищите киберспортивные турниры, в которых вы можете участвовать бесплатно, находясь в любом уголке мира.',
  },
  heading: 'Обзор турниров',
  content:
    'Найдите киберспортивные турниры по мобильным и компьютерным играм, которые проходят на миллионах серверов Discord.',
  searchForm: {
    formPlaceholder: 'Найти игру, например, Pubg',
    searchInfo: 'Посмотреть турниры для',
    noresult: 'Игра не найдена. Пожалуйста, попробуйте найти другую.',
  },
  gameInfo: {
    title: 'Не можете найти турнир по нраву?',
    content: 'Создайте свой',
    noTournamentsTitle:
      'К сожалению, на данный момент нет предстоящих турниров.',
    noTournamentsContent: 'Посмотреть все доступные турниры',
    noTournamentsLink: 'В прямом эфире или прошедшие',
    linkUrl: `/${language}/create-a-tournament`,
  },
  topGameSection: { title: 'Популярные игры' },
  tournamentTitle: 'Турниры',
  platformStr: 'ПЛАТФОРМА',
  joinHeading: 'ПРИСОЕДИНИТЬСЯ',
  viewMore: 'Еще',
  gamePageUrl: `/${language}/find-tournaments`,
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
