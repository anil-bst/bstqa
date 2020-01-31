import { ISponsorshipsLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const SponsorshipsLocalesRussian: ISponsorshipsLocale = {
  metadata: {
    title: 'Спонсорская поддержка мобильного киберспорта с Tourney и Game.tv',
    description:
      'Спонсорская поддержка мобильного киберспорта с Tourney и Game.tv',
  },
  sponsorshipSection: {
    title: 'Спонсорская поддержка киберспорта для вашего сообщества',
    contents: [],
    imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship-banner.png',
  },
  playSponsorSection: {
    blocks: [
      {
        title: 'Как игроки получают спонсорскую поддержку?',
        contents: [
          'Когда вы руководите лигой в своем сообществе, Tourney отслеживает результаты каждого игрока во всех серверах, на которых он установлен. Первые 8 игроков в топе каждой страны по окончанию сезона получат $500 спонсорской поддержки ежемесячно.',
          'Сообщество, которое помогло этим игрокам в развитии, также получит эксклюзивные награды.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/get-sponsorship.png',
        imageAlt: 'Получить спонсорство',
      },
      {
        title: 'Спонсорство',
        contents: [
          'Во время состязаний в лиге вашего сообщества игроки будут получать роли, зарабатывая различные бонусы. После достижения Золотой роли они попадут в национальную таблицу лидеров. Каждый месяц — это новый сезон, в котором мы выбираем первых 8 игроков из национальной таблицы лидеров. Если участники вашего сообщества представляют различные страны, это замечательно. Просто игрокам следует подтвердить свое местоположение в своих профилях, и мы просим вам помочь им в этом.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship.png',
        imageAlt: 'Спонсорство',
      },
    ],
  },
  verifiedBadgeSection: {
    blocks: [
      {
        title: 'Подтвержденный бейдж',
        contents: [
          'Игроки, достигшие Серебра, смогут получить статус "Подтвержден" и специальный бейдж в своем профиле, который видят другие пользователи. Только игроки с подтвержденным статусом смогут перейти в бриллиантовую роль и заработать спонсорскую поддержку. ',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/verified-badge.png',
        imageAlt: 'Подтвержденный бейдж',
      },
      {
        title: 'Лиги',
        contents: [
          'Tourney самостоятельно изменит ваш сервер на лигу. Игроки будут участвовать в событиях, которые вы проводите лично или автоматически, используя ИИ. Tourney оповещает игроков об их результатах и ролях через команды в чате, или игроки смогут просматривать данные в своих профилях на Game.tv/users.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/leagues-spons.png',
        imageAlt: 'Лиги',
      },
    ],
  },
  leaderboardSection: {
    title: 'Национальная таблица лидеров',
    contents: [
      'Игроки вашего сообщества получат рейтинг внутри лиги сообщества, но также смогут просмотреть свою позицию в национальной таблице лидеров в своих профилях на Game.tv, используя команду ‘!myposition’. Только игрокам с подтвержденным статусом доступна национальная таблица лидеров.',
    ],
    desktopImageUrl:
      'https://cdn.game.tv/images/meet-tourney/leaderboard-desk.png',
    mobImageUrl: 'https://cdn.game.tv/images/meet-tourney/leaderboard-mob.png',
  },
  tiersSection: {
    content: {
      title: 'Роли',
      contents: [
        'Если ваши игроки победили, то они продвинутся в лиге и заработают различные бонусы. После достижения Золота игроки будут квалифицированы в национальной лиге и, возможно, получат спонсорскую поддержку, если окажутся на первых 8 местах в конце сезона. Игроки могут видеть свои результаты в профилях, вызвав команду ‘!myrating’.',
      ],
    },
    graphContent: {
      previousTitle: 'Назад',
      nextTitle: 'Далее',
      perksTitle: 'Бонусы',
      forTitle: 'ДЛЯ',
      graphList: [
        {
          type: 'бронза',
          imageCaption: 'Бронза',
          imageAlt: 'Бронза',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: 'ELO 800 - 1300',
          perks: ['Эксклюзивные эмодзи Tourney', 'Профили и бейджи'],
        },
        {
          type: 'серебро',
          imageCaption: 'Серебро',
          imageAlt: 'Серебро',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: 'ELO 1301 - 1800',
          perks: ['Подтвержденный бейдж профиля'],
        },
        {
          type: 'золото',
          imageCaption: 'Золото',
          imageAlt: 'Золото',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: 'ELO 1800+',
          perks: ['Эксклюзивные эмодзи Tourney'],
        },
      ],
    },
  },
};
