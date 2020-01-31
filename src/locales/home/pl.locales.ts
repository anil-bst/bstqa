import { IHomeLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.POLISH;
export const HomeLocalePolish: IHomeLocale = {
  metadata: {
    title: 'Tourney - Esports Discord Bot Obsługiwany przez AI',
    description:
      'Organizuj i prowadź tysiące mobilnych turniejów e-sportowych w dowolnej społeczności gier dzięki naszemu botowi turniejowemu Tourney.',
  },
  heroSection: {
    heading: 'Poznaj Tourney',
    content:
      'Asystent Esports obsługiwany przez AI. Prowadzi Twój turniej, abyś mógł skoncentrować się na swojej społeczności',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/global.png',
        logoExtraClasses: 'global-logo',
        link: '/user',
        name: 'Włącz apke ',
        extraClasses: 'alternate-background',
      },
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        logoExtraClasses: 'discord-logo',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Zaproś Tourney',
      },
    ],
    discoverButtonTitle: 'Dowiedz się więcej',
  },
  whyTourneySection: {
    heading: 'Dlaczego Tourney?',
    content:
      'Trudno jest zorganizować turniej dla swojej społeczności. Śledzenie, kto gra przeciwko komu, do którego lobby dołączyć, jakie są najbardziej uczciwe pojedynki, dowodzenie, kto wygrał - to dużo. Tourney poprowadzi Twoje turnieje jako asystent lub całkowicie samodzielnie na podstawie Twojej społeczności. Jego potężna sztuczna inteligencja i funkcje mogą pomóc ci zbudować silniejszą i bardziej zabawną społeczność.',
  },
  uHostSection: {
    heading: 'uHost, uHost AI-Assistant, and AI-Host',
    content:
      'Trzy główne tryby turniejowe dają Ci pełną swobodę w prowadzeniu gier.',
    hostTypes: [
      {
        heading: 'uHost',
        imageAlt: 'uHost',
        content:
          'Wybierz z szablonu turnieju lub dostosuj własny. Opublikuj je, a Tourney utworzy wszystkie kanały i DM role, które chcesz.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost.png',
      },
      {
        heading: 'uHost AI-Assistant',
        imageAlt: 'uHost AI-Assistant',
        content:
          'Tourney pomaga moderować turniej i zapewnia wskazówki dla każdego gracza pomiędzy meczami i wiele więcej.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost-assistant.png',
      },
      {
        heading: 'AI-Host',
        imageAlt: 'aiHost',
        content:
          'Tourney wybierze grę, czas, format i przeprowadzi turniej całkowicie samodzielnie od początku do końca.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/ai-Host.png',
      },
    ],
    templateSection: {
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/templates.png',
      imageAlt: 'Templates',
      heading: 'Szablony',
      content:
        'Tourney zawiera dziesiątki wstępnie skonfigurowanych szablonów turniejów, dzięki czemu możesz je opublikować i przejść dalej.',
    },
    messagingSection: {
      imageAlt: 'DMs and Messaging',
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/dms.png',
      heading: 'Wiadomości',
      content:
        'Tourney może wysyłać wiadomości dotyczące poszczególnych ról dla gry lub dowolnej roli, którą powiadomisz o nowym turnieju. Cała organizacja odbywa się na nowym kanale, który tworzy Tourney, a wszystkie zaproszenia do lobby i kojarzenie są wysyłane za pośrednictwem PW.',
    },
  },
  perksSection: {
    heading: 'Zalety',
    content: 'Tourney nie byłby kompletny bez mnóstwa dodatków.',
    perksList: [
      {
        content:
          'Prowadzisz mnóstwo turniejów? Świetnie, mamy dla Ciebie system poziomów, który Cię wynagrodzi.',
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/perk-tournaments.png',
        imageAlt: 'Nagradzane Poziomy Turniejowe',
      },
      {
        content:
          'Streamujesz swoje turnieje? Idealnie, mamy dla Ciebie przygotoway plugin OBS.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-obs.png',
        imageAlt: 'Wewnętrzny plugin OBS dla streamowania',
      },
      {
        content:
          'Chcesz uruchomić ligę turniejową na swoim serwerze? Bingo, my też to mamy!',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-league.png',
        imageAlt: 'Organizuj Ligi!',
      },
    ],
  },
  graphsSection: {
    heading: 'Role',
    content:
      'Im więcej turniejów prowadzisz z Tourney, tym więcej korzyści odblokujesz. Twoja rola pojawia się w tabeli liderów społeczności Game.tv Discord, a każdy zestaw profitów otrzymasz po przejściu do następnej roli.',
    graphContent: {
      previousTitle: 'Poprzedni',
      nextTitle: 'Następny',
      perksTitle: 'Profity',
      forTitle: 'DLA',
      graphList: [
        {
          type: 'bronze',
          imageCaption: 'Brąz',
          imageAlt: 'Bronze',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: 'Od 1 do 6 Turniejów tygodniowo',
          perks: [
            'Unikalne Emotikony Tourney',
            'Profile i odznaki',
            'Odblokuj AI Tourney',
          ],
        },
        {
          type: 'silver',
          imageCaption: 'Srebro',
          imageAlt: 'Silver',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: '7 Turniejów tygodniowo',
          perks: [
            '2 Nitro boosty dla twojego serwera Discord',
            'Odblokuj ligi',
          ],
        },
        {
          type: 'gold',
          imageCaption: 'Złoto',
          imageAlt: 'Gold',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration:
            'Poprowadź ligę z 300 lub więcej unikalnych uczestników/sezonów ',
          perks: ['Gwarantowany sponsoring nagród ligowych'],
        },
      ],
    },
  },
  tourneyEmotesSection: {
    heading: 'Emotikony Tourney',
    content:
      'Odblokowany w brązie otrzymujesz 42 niesamowitych emotikonów w wysokiej rozdzielczości, które możesz wykorzystać w swojej społeczności. ',
  },
  profilesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/profiles.png',
        heading: 'Profile',
        imageAlt: 'Profiles',
        content:
          'Odblokowane w brązie, gracze w twoich turniejach automatycznie otrzymują profile, które mogą dostosować. Każdy profil pokazuje rozegrane gry, rekord wygranych / przegranych oraz ocenę gracza. Oceny graczy pomagają w dobieraniu graczy i awansowaniu ligi.',
      },
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/badges.png',
        heading: 'Odznaki',
        imageAlt: 'Badges',
        content:
          'Wygrywaj gry i zdobywaj odznaki, aby pochwalić się swoimi umiejętnościami. Wraz ze wzrostem ELO lub wygranymi w turniejach i nagrodach zdobywasz ekskluzywne odznaki w swoim profilu, które czasami zawierają super tajne i ekskluzywne dodatkowe korzyści.',
        reverse: true,
      },
    ],
  },
  tourneyAiSection: {
    heading: 'AI Tourney',
    content1:
      'Po trafieniu w Brąz odblokujesz AI-Host. Włączenie AI-Host powoduje, że Tourney może automatycznie uruchamiać turnieje w Twojej społeczności. Pamiętaj, że tylko turnieje uHost liczą się do twojego postępu. Turnieje AI-Host nie liczą się (ale są świetne i może je prowadzić wraz z uHost).',
    content2: '',
  },
  leaguesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/league.png',
        heading: 'Ligi',
        imageAlt: 'Leagues',
        content:
          'Odblokowane złotem, Tourney może prowadzić całą ligę na twoim serwerze. Gracze na twoim serwerze będą mieli okazję konkurować na równoległym systemie poziomów i zdobyć miesięczny sponsoring, jeśli znajdą się w TOP-8 krajowych rankingów.',
      },
    ],
  },
  getBoostedSection: {
    heading: 'Zdobądź premię',
    content:
      'Zdobądź srebro, a my damy Twojemu serwerowi Discord nie jeden, ale dwa doładowania, które zapewnią ci te słodkie przywileje poziomu 1. Tak długo, jak co tydzień organizujesz siedem lub więcej turniejów (od poniedziałku do niedzieli), będziemy nadal ulepszać Twój serwer. Jeśli spadniesz poniżej siedmiu turniejów co tydzień, możemy usunąć twoje wzmocnienia, dopóki nie wrócisz do siedmiu lub więcej. Dodatkowo odblokowujesz możliwość tworzenia lig biegowych dla swojej społeczności za pomocą AI-Host',
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
        heading: 'Atuty poziomu 1',
        mainlabel: 'Odblokowano',
        subheading: 'Zwiększone korzyści serwera obejmują -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/emoji.png',
            label: '+50 miejsc na emoji na serwerze (w sumie 100)',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/audio.png',
            label: '128 Kbps jakość audio',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/gif-icon.png',
            label: 'Animowana ikona serwerowa',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/server.png',
            label: 'Własne tło na linku zaproszenia do serwera',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/live.png',
            label: '720p 60fps Jakość Streamowania na żywo',
          },
        ],
      },
      boostedServer: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-gold.png',
        heading: 'Kwalifikacja do ulepszonego serwera',
        subheading: 'Co więcej musisz wiedzieć -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Turnieje muszą odbywać się tylko w trybie uHost lub uHost AI-Assistant. Tylko te wyżej wymienione wliczają się do twojej tygodniowej pracy.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Turnieje muszą mieć współczynnik wypełnienia minimum 50%, aby się zakwalifikować. (to znaczy, jeśli a turniej ma szesnaście miejsc, przynajmniej osiem osób musi grać dla Ciebie turniej liczony do średniej tygodniowej.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Patrzymy na twoje średnie turnieje tygodniowo. Prowadzenie trzech turniejów  jeden dzień i czwarty w drugim są takie same jak codzienne przeprowadzanie jednego turnieju.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Wzmocnienia mogą zostać usunięte, jeśli średnia turnieju spadnie poniżej siedmiu w danym momencie Tydzień od poniedziałku do piątku (czasu PST).',
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
        heading: 'Sponsoring nagród',
        imageAlt: 'Nagrody Ligowe',
        content:
          'Gdy zdobędziesz złoto, prowadząc ligę w swojej społeczności, będziemy sponsorować nagrody ligowe za każdy sezon kalendarzowy-miesiąc. Nagrody będą pochodzić od naszych wspaniałych partnerów, takich jak MSI, Intel i setki twórców gier, i mogą obejmować gotówkę, karty podarunkowe, sprzęt, towary lub przedmioty w grze.',
      },
    ],
  },
  availableGamesSection: {
    heading: 'Dostępne Gry',
    content: 'Więcej dodawane tygodniowo',
    viewMoreGames: 'Zobacz więcej',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Zaproś Tourney',
      },
    ],
  },
  gamelink: `/${language}/find-tournaments`,
};
