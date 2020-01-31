import { ICommunityTournamentsType } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.RUSSIAN;

export const CreateATournamentLocalesLocaleRussian: ICommunityTournamentsType = {
  metadata: {
    title: 'Как организовать мобильные киберспортивные турниры | Game.tv',
    description:
      'Организуйте собственные турниры и лиги, используя бота Game.tv в Discord или приложение Game.tv.',
  },
  heroSection: {
    heading: 'Создавайте — Управляйте — Играйте',
    content:
      'Создавайте турниры прямо в сообществе Discord или в нашем приложении, выполнив несколько простых шагов',
    bannerDeskTopImageUrl: 'https://cdn.game.tv/create_tournament/banner.png',
    bannerMobImageUrl: 'https://cdn.game.tv/create_tournament/banner-mob.png',
  },
  discordSection: {
    heading: 'Discord',
    content:
      'Проведение турниров в сообществе Discord означает, что игроки никогда не захотят покидать ваш сервер. Все, что им нужно сделать, это зарегистрироваться, пройти проверку и участвовать в соревнованиях с помощью пользовательских ролей и личных сообщений. Tourney позаботится о справедливом подборе соперников, а после турнира игроки смогут проверить свои позиции и счет GELO на странице профиля.',
    btnText: 'Пригласить Tourney',
    steps: [
      {
        title: 'Установите Tourney и перейдите на',
        linkString: 'панель управления',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step1.png',
        linkUrl: '/dashboard',
      },
      {
        title: 'Нажмите на "Создать турнир" и выберите свою игру',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step2.png',
      },
      {
        title:
          'Настройте турнир по своему усмотрению или используйте готовые шаблоны',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step3.png',
      },
      {
        title:
          'Нажмите на кнопку "Опубликовать", и Tourney создаст лобби или сетку на вашем севере Discord.',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step4.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/discord_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/discord.png',
  },
  gameSection: {
    heading: 'Приложение Game.tv',
    content:
      'Если у вас нет сервера Discord или вы хотите пригласить игроков вне этого сообщества, то вы можете использовать наше приложение для создания турниров. Как и в Discord, Tourney\xa0 создаст, организует и проведет ваш турнир. Вы и участники соревнования прямо в приложении получите уведомления о предстоящих матчах, соперниках, обновлениях турнирной сетки и др. Также у вас есть возможность подключиться через аккаунт Twitter и делиться результатами состязаний, а пользователи этой сети смогут присоединиться к турнирам.',
    btnText: 'Запустить приложение',
    steps: [
      {
        title: 'Перейдите в',
        linkString: 'приложение Game.tv',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step1.png',
        linkUrl: '/user',
      },
      {
        title:
          'Кликните на значок “+” на панели управления в нижней части экрана',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step2.png',
      },
      {
        title:
          'Настройте турнир по своему усмотрению или используйте готовые шаблоны',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step3.png',
      },
      {
        title:
          'Нажмите на кнопку "Опубликовать", и Tourney создаст лобби или сетку на вашем севере Discord.',
        imgUrl: 'https://cdn.game.tv/crete_tournament/step-4-1-new.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/game_global_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/game.png',
  },
  locales: `/${language}`,
};
