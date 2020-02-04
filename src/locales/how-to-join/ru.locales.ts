import { IHowToJoin } from '@app/abstractions';

export const HowToJoinRussian: IHowToJoin = {
  blocks: [
    {
      gamePlatform: 'Discord',
      type: 'discord',
      stepsHeading: 'Инструкции',
      stepsContent: [
        {
          stepItem:
            'Перейдите на текстовый канал #tournament-info в Discord, чтобы узнать подробности о турнире.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
        },
        {
          stepItem:
            'Нажмите на #tournament-lobby в нижней части канала #tournament-info',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
        },
        {
          stepItem:
            'Для участия в турнире введите команду !register на канале #tournament-lobby',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
        },
        {
          stepItem:
            'Бот Tourney отправит вам личное сообщение; наберите !joinsolo &lt;ваш игровой никнейм> в ЛС',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
        },
        {
          stepItem:
            'Вы успешно зарегистрировались на турнир {{howToJoinTitle}}.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    {
      gamePlatform: 'Веб-приложение Game.tv',
      type: 'web',
      stepsHeading: 'Инструкции',
      stepsContent: [
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            "Перейдите в <a href='/user' class='click-here'>веб-приложение</a> и войдите через аккаунт Discord или Twitter",
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
        },
        {
          stepItem: `Во вкладке 'Календарь турниров' вы найдете список предстоящих турниров {{howToJoinTitle}}.`,
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
        },
        {
          stepItem:
            'Кликните на турнир, в котором вы хотите принять участие; вы увидите кнопку регистрации в нижней части страницы',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
        },
        {
          stepItem: `Введите свой IGN (НИКНЕЙМ В ИГРЕ) и нажмите на кнопку 'Зарегистрироваться' в нижней части страницы`,
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
        },
        {
          stepItem: 'Регистрация завершена.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
    },
  ],
};
