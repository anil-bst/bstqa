import { IGameDetailsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.RUSSIAN;

export const GameDetailsLocalesRussian: IGameDetailsLocale = {
  metadata: {
    title: 'Участвуйте в киберспортивных турнирах {{gameName}} | Game.tv',
    description:
      'Присоединяйтесь к ежедневным турнирам {{gameName}}, которые проводятся в миллионах игровых сообществ по всему миру.',
  },
  gameDetail: `Найдите турниры {{gameName}}, организованные сообществами и проходящие в {{communityCount}} сообществах по всему миру. Нажмите 'Присоединиться', чтобы принять участие в турнире по игре {{gameName}}.`,
  gameInfo: {
    title: 'Не можете найти турнир по нраву?',
    content: 'Создайте свой',
    linkUrl: `/${language}/create-a-tournament`,
    noTournamentsTitle:
      'К сожалению, на данный момент нет предстоящих турниров.',
    noTournamentsContent: 'Посмотреть все доступные турниры',
    noTournamentsLink: 'В прямом эфире или прошедший',
  },
  tournamentTitle: 'Турниры',
  platformStr: 'ПЛАТФОРМА',
  discord: 'DISCORD',
  vs: 'VS',
  joinHeading: 'ПРИСОЕДИНИТЬСЯ',
  viewMore: 'Еще',
  tournamentTypes: {
    heading: 'Типы турниров {{gameName}}',
    blocks: [
      {
        content:
          'Классический турнир (лобби) — Соло, Парный, Отряд — максимум 100 игроков',
        imageUrl: 'https://cdn.game.tv/tournaments/group-26.png',
      },
      {
        content: 'Быстрый матч в Эрангель (лобби) — Соло — 28 игроков',
        imageUrl: 'https://cdn.game.tv/tournaments/group-27.png',
      },
      {
        content:
          'Командная битва насмерть (лобби) — 2 Отряда — максимум 8 игроков',
        imageUrl: 'https://cdn.game.tv/tournaments/group-28.png',
      },
      {
        content: `Режим 'Заражение' (лобби) — 12 игроков`,
        imageUrl: 'https://cdn.game.tv/tournaments/group-29.png',
      },
    ],
  },
  prizeTypes: {
    heading: 'Типы призов для турниров {{gameName}}',
    description:
      'Призы для этих турниров полностью принадлежат организаторам. Некоторые из них могут проводить соревнования без призов. Перечень наград находится на странице турнира. Это примеры призов, которые были розданы на различных турнирах {{gameName}}.',
    blocks: [
      {
        content: 'Денежные вознаграждения',
        imageUrl: 'https://cdn.game.tv/tournaments/group-13.png',
      },
      {
        content: 'Коды кошелька Steam',
        imageUrl: 'https://cdn.game.tv/tournaments/group-24.png',
      },
      {
        content: 'Подарочные карты — Google Play, Amazon, Steam и другие',
        imageUrl: 'https://cdn.game.tv/tournaments/group-23.png',
      },
      {
        content: 'Коды подписки — Netflix, Apple Music и Spotify',
        imageUrl: 'https://cdn.game.tv/tournaments/group-22.png',
      },
      {
        content: 'И многие другие',
        imageUrl: 'https://cdn.game.tv/tournaments/group-20.png',
      },
    ],
  },
  joinTournament: {
    heading: 'Как принять участие в турнире {{gameName}}?',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'Инструкции',
        stepsContent: [
          {
            stepItem:
              'Перейдите на текстовый канал #tournament-info в Discord, чтобы узнать подробности о турнире.',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
          },
          {
            stepItem:
              'Нажмите на #tournament-lobby в нижней части канала #tournament-info',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
          },
          {
            stepItem:
              'Для участия в турнире введите команду !register на канале #tournament-lobby',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'Бот Tourney отправит вам личное сообщение; наберите !joinsolo &lt;ваш игровой никнейм> в ЛС',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
          },
          {
            stepItem: 'Вы успешно зарегистрировались на турнир {{gameName}}.',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Веб-приложение Game.tv',
        stepsHeading: 'Инструкции',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "Перейдите в <a href='/user' class='click-here'>веб-приложение</a> и войдите через аккаунт Discord или Twitter",
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
          },
          {
            stepItem: `Во вкладке 'Календарь турниров' вы найдете список предстоящих турниров {{gameName}}.`,
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'Кликните на турнир, в котором вы хотите принять участие; вы увидите кнопку регистрации в нижней части страницы',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
          },
          {
            stepItem: `Введите свой IGN (НИКНЕЙМ В ИГРЕ) и нажмите на кнопку 'Зарегистрироваться' в нижней части страницы`,
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
          },
          {
            stepItem: 'Регистрация завершена.',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
      },
    ],
  },
  startTournament: {
    heading: 'Как организовать турнир {{gameName}}?',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'Инструкции',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "<a href='/user' class='click-here'>Пригласите бота Tourney</a> на свой сервер Discord, залогиньтесь и нажмите на кнопку авторизации",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
          },
          {
            stepItem: `В левой части главного меню нажмите на кнопку 'Создать турнир'`,
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/3.jpg',
          },
          {
            stepItem: `Выбирайте из огромного разнообразия турниров. Настройте турнир, нажав на кнопку персонализации или на 'Опубликовать сейчас', чтобы воспользоваться готовыми шаблонами турниров`,
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/4.jpg',
          },
          {
            stepItem:
              'Также добавьте описание турнира, правила проведения и возможные призы',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/5.jpg',
          },
          {
            stepItem:
              'После публикации турнира бот автоматически создаст каналы #tournament-info и #tournament-lobby на вашем сервере Discord; наберите команду !register на текстовом канале #tournament-lobby, чтобы принять участие в нем, и проверьте, успешно ли был создан турнир по игре {{gameName}}.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/6.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Веб-приложение Game.tv',
        stepsHeading: 'Инструкции',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "Перейдите в <a href='/user' class='click-here'>веб-приложение</a> и войдите через аккаунт Discord или Twitter",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
          },
          {
            stepItem:
              'Кликните на значок “+”, на панели управления в нижней части экрана',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png',
          },
          {
            stepItem: `В левой части главного меню нажмите на кнопку 'Создать турнир'`,
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg',
          },
          {
            stepItem: `Выбирайте из огромного разнообразия турниров. Настройте турнир, нажав на кнопку персонализации или на 'Опубликовать сейчас', чтобы воспользоваться готовыми шаблонами турниров`,
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "После публикации ваш турнир {{gameName}} будет отображен на <a class='click-here' href='/user'>главной странице</a> веб-приложения Game.tv",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
      },
    ],
  },
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
