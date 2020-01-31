import { ITournamentDetailLocale } from '@app/abstractions';
export const TournamentDetailLocaleRussian: ITournamentDetailLocale = {
  metadata: {
    title: 'License Agreement - Game.tv',
    description: 'Game.tv License Agreement',
  },
  linkToAllTournaments: 'All Tournaments',
  noPrizeInfo: 'see more',
  registerSection: {
    heading: 'Click ‘Register’ to get a seat in the tournament.',
    btnText: 'Register',
  },
  videoSection: {
    heading: 'Tournament Stream',
  },
  details: {
    detailsSectionHeading: 'Details',
    ruleSectionHeading: 'Rules',
    howToJoinSection: {
      heading: 'Как принять участие в турнире {{tournamentName}}?',
      content: [
        'Перейдите на текстовый канал #tournament-info в Discord, чтобы узнать подробности о турнире.',
        'Нажмите на #tournament-lobby в нижней части канала #tournament-info',
        'Для участия в турнире введите команду !register на канале #tournament-lobby',
        'Бот Tourney отправит вам личное сообщение; наберите !joinsolo &lt;ваш игровой никнейм> в ЛС',
        'Вы успешно зарегистрировались на турнир {{tournamentName}}.',
      ],
      imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
};
