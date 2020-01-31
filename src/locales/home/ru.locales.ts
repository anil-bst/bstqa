import { IHomeLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.RUSSIAN;
export const HomeLocaleRussian: IHomeLocale = {
  metadata: {
    title: 'Tourney — бот Discord для киберспорта под управлением ИИ',
    description:
      'Проводите тысячи мобильных киберспортивных турниров в любом игровом сообществе с помощью бота Tourney.',
  },
  heroSection: {
    heading: 'Встречайте Tourney',
    content:
      'Помощник киберспортивных мероприятий на основе ИИ. Он проводит турниры, пока вы управляете сообществом',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/global.png',
        logoExtraClasses: 'global-logo',
        link: '/user',
        name: 'Запустить приложение',
        extraClasses: 'alternate-background',
      },
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        logoExtraClasses: 'discord-logo',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Пригласить Tourney',
      },
    ],
    discoverButtonTitle: 'Узнать больше',
  },
  whyTourneySection: {
    heading: 'Почему Tourney?',
    content:
      'Организация и проведение турниров в сообществе — довольно сложная задача. Необходимо следить за тем, кто с кем играет, в каком лобби, справедлив ли подбор соперников, а еще нужно утверждать победителей... столько всего. Бот Tourney возьмет на себя часть забот по организации турниров или полностью проведет их. Благодаря его мощному искусственному интеллекту (ИИ) и обширному функционалу вы сможете создать сильное и лояльное сообщество игроков.',
  },
  uHostSection: {
    heading:
      'Личное проведение, Проведение с помощью ИИ, Полное проведение с ИИ',
    content:
      'Три турнирных режима дают вам абсолютную свободу действий при организации и проведении соревнований.',
    hostTypes: [
      {
        heading: 'Личное проведение',
        imageAlt: 'uHost',
        content:
          'Выбирайте подходящий формат турнира среди готовых шаблонов или настраивайте свой, а после анонсируйте соревнование. Готово! Tourney создаст все необходимые каналы и отправит личные сообщения о ролях, чтобы начать турнир.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost.png',
      },
      {
        heading: 'Проведение с помощью ИИ',
        imageAlt: 'uHost AI-Assistant',
        content:
          'Tourney поможет с модерацией турнира, предоставит каждому игроку инструкции между матчами и многое другое.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost-assistant.png',
      },
      {
        heading: 'Полное проведение с ИИ',
        imageAlt: 'aiHost',
        content:
          'Tourney выберет игру, время, формат и самостоятельно проведет турнир от начала и до конца.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/ai-Host.png',
      },
    ],
    templateSection: {
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/templates.png',
      imageAlt: 'Templates',
      heading: 'Шаблоны',
      content:
        'Tourney предлагает десятки готовых турнирных шаблонов. Вам нужно только нажать на кнопку "Опубликовать", чтобы начать соревнование.',
    },
    messagingSection: {
      imageAlt: 'DMs and Messaging',
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/dms.png',
      heading: 'Коммуникация',
      content:
        'Tourney может отправлять сообщения о новом турнире пользователям со специальными игровыми ролями или ролями, которые вы выбрали для них. Вся организация проходит в новом канале, созданном Tourney, а приглашения в лобби, данные о соперниках или матчах передаются в личных сообщениях.',
    },
  },
  perksSection: {
    heading: 'Бонусы',
    content:
      'Tourney не был бы столь привлекательным без существенных привилегий.',
    perksList: [
      {
        content:
          'Проводите большое количество турниров? Тогда у нас есть для вас система поощрений.',
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/perk-tournaments.png',
        imageAlt: 'Система поощрений',
      },
      {
        content:
          'Организуете прямые трансляции турниров? Великолепно! У нас есть для вас плагин OBS.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-obs.png',
        imageAlt: 'внутренний плагин OBS для стримов',
      },
      {
        content:
          'Желаете управлять лигой на вашем сервере? Бинго! С нами у вас тоже есть такая возможность!',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-league.png',
        imageAlt: 'Создайте лиги!',
      },
    ],
  },
  graphsSection: {
    heading: 'Роли',
    content:
      'Чем больше турниров вы проводите с Tourney, тем больше открываете бонусов. Ваша роль будет отображена в сообществе Game.tv в Discord, и вы получите полный набор наград, как только перейдете к следующей роли.',
    graphContent: {
      previousTitle: 'Назад',
      nextTitle: 'Вперед',
      perksTitle: 'Бонусы',
      forTitle: 'ДЛЯ',
      graphList: [
        {
          type: 'bronze',
          imageCaption: 'Бронза',
          imageAlt: 'Bronze',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: '1-6 турниров в неделю',
          perks: [
            'Эксклюзивные эмодзи от Tourney',
            'Профили и бейджи',
            'Доступ к Tourney ИИ',
          ],
        },
        {
          type: 'silver',
          imageCaption: 'Серебро',
          imageAlt: 'Silver',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: '7+ турниров в неделю',
          perks: [
            '2 Nitro-усиления (бусты) для вашего сервера Discord',
            'Доступ к лигам',
          ],
        },
        {
          type: 'gold',
          imageCaption: 'Золото',
          imageAlt: 'Gold',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration:
            'Управление лигой, насчитывающей 300 уникальных участников за сезон',
          perks: ['Гарантированный доступ к спонсорским призам'],
        },
      ],
    },
  },
  tourneyEmotesSection: {
    heading: 'Эмодзи от Tourney',
    content:
      'Получив Бронзу, вы открываете 42 уникальных и ярких эмодзи, которые готовы к использованию на вашем сервере.',
  },
  profilesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/profiles.png',
        heading: 'Профили',
        imageAlt: 'Profiles',
        content:
          'После достижения вами Бронзы участники вашего турнира автоматически получат профили, которые они смогут персонализировать. В каждом профиле будет отображена информация о предпочитаемых играх, о статистике побед/поражений, о рейтинге. Рейтинг игроков поможет в подборе соперников и развитии лиги. ',
      },
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/badges.png',
        heading: 'Бейджи',
        imageAlt: 'Badges',
        content:
          'Побеждайте в играх и получайте бейджи, показывающие ваши достижения. Вы награждаетесь уникальными бейджами, а иногда и дополнительными бонусами, когда повышаете рейтинг ELO, выигрываете турниры и призы. ',
        reverse: true,
      },
    ],
  },
  tourneyAiSection: {
    heading: 'Tourney ИИ',
    content1:
      'Достигнув Бронзы, вы откроете возможность проведения автоматических турниров с помощью Tourney ИИ. Помните, что в рейтинге бонусов засчитываются только турниры, организованные лично вами. Турниры под управлением ИИ не засчитываются, но они все еще замечательны, поэтому вы можете проводить их вместе с другими режимами.',
    content2: '',
  },
  leaguesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/league.png',
        heading: 'Лиги',
        imageAlt: 'Leagues',
        content:
          'Как только вы заработаете Золото, Tourney сможет управлять целой лигой вашего сервера. Игроки сервера получат возможность соревноваться в параллельных многоуровневых системах и выигрывать ежемесячные спонсорские призы, если окажутся в топ-8 своей национальной таблицы.',
      },
    ],
  },
  getBoostedSection: {
    heading: 'Ускорить',
    content:
      'Получите Серебро, и мы наградим ваш сервер Discord двумя бустами — так у вас появятся все бонусы 1 уровня (Level 1 Perks). Хотите, чтобы бусты всегда оставались в вашем распоряжении? Тогда проводите семь или более турниров каждую неделю, с понедельника по воскресенье. Если количество турниров сократится, то бусты исчезнут, но мы их вернем, как только количество соревнований восстановится. Дополнительно у вас будет возможность создавать в сообществе лиги под управлением Tourney ИИ.',
    imgDesktopUrl: 'https://cdn.game.tv/images/meet-tourney/get-boosted.png',
    imgMobile1Url:
      'https://cdn.game.tv/images/meet-tourney/get-boosted-mob1.png',
    imgMobile2Url:
      'https://cdn.game.tv/images/meet-tourney/get-boosted-mob2.png',
    backgroundImgUrl:
      'https://cdn.game.tv/images/meet-tourney/get-boosted-bg.png',
    getBoostedLevels: {
      perks: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-white.png',
        heading: 'Level 1 Perks',
        mainlabel: 'Открыто',
        subheading: 'Буст сервера включает:',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/emoji.png',
            label: '+50 слотов для эмодзи (суммарно 100 эмодзи)',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/audio.png',
            label: 'Качество аудио 128 Кбит/с',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/gif-icon.png',
            label: 'Анимированную иконку сервера',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/server.png',
            label: 'Кастомизированный фон ссылки-приглашения сервера',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/live.png',
            label: 'Стримы Go Live в качестве до 720P 60FPS',
          },
        ],
      },
      boostedServer: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-gold.png',
        heading: 'Требования для получения буста сервера:',
        subheading: 'На что обратить внимание:',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Турниры должны быть проведены лично вами или при поддержке ИИ. Турниры, полностью автоматизированные ИИ, не засчитываются.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Заполненность турнира должна составлять минимум 50%. Например,  если турнир включает шестнадцать слотов,  то в нем должно участвовать минимум восемь игроков.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Мы высчитываем средний показатель количества проведенных турниров. Например, три турнира в один день  и четыре — в другой означает, что в среднем вы проводили один турнир ежедневно.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Бусты могут быть изъяты, если средний показатель проведенных турниров падает ниже семи в в неделю, с понедельника по пятницу по Тихоокеанскому времени.',
          },
        ],
      },
    },
  },
  prizeSponsorshipSection: {
    items: [
      {
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/prize-sponsorships.png',
        heading: 'Спонсорские призы',
        imageAlt: 'Спонсорство лиг',
        content:
          'Как только вы достигнете Золота, управляя лигой своего сообщества, мы станем спонсировать призы сезона длительностью один календарный месяц. Награды будут предоставлены нашими партнерами: MSI, Intel и сотнями разработчиков игр. Призы могут включать денежные средства, подарочные карты, оборудование, товары или внутриигровые предметы.',
      },
    ],
  },
  availableGamesSection: {
    heading: 'Доступные игры',
    content: 'Новые игры появляются каждую неделю',
    viewMoreGames: 'Еще',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Пригласить Tourney',
      },
    ],
  },
  gamelink: `/${language}/find-tournaments`,
};
