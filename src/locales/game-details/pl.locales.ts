import { IGameDetailsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.POLISH;

export const GameDetailsLocalesPolish: IGameDetailsLocale = {
  metadata: {
    title: 'Dołącz do {{gameName}} turniejów e-sportowych | Game.tv',
    description:
      'Dołącz do codziennych turniejów {{gameName}} w milionach społeczności graczy na całym świecie.',
  },
  gameDetail:
    'Znajdź organizowane przez społeczność turnieje e-sportowe {{gameName}} w {{communityCount}} społecznościach na całym świecie. Kliknij „Dołącz”, aby wziąć udział w turnieju {{gameName}}.',
  gameInfo: {
    title: 'Nie widzisz turnieju, który lubisz?',
    content: 'Stwórz swój własny',
    linkUrl: `/${language}/create-a-tournament`,
    noTournamentsTitle:
      'Ups! W tej chwili nie ma żadnych nadchodzących turniejów!',
    noTournamentsContent: 'Zobacz wszystkie dostępne turnieje',
    noTournamentsLink: 'Na żywo',
  },
  tournamentTitle: 'Turnieje',
  platformStr: 'PLATFORMA',
  discord: 'DISCORD',
  vs: 'VS',
  joinHeading: 'DOŁĄCZ',
  viewMore: 'Zobacz więcej',
  tournamentTypes: {
    heading: '{{gameName}} Typy turniejów',
    blocks: [
      {
        content:
          'Turniej klasyczny (w stylu lobby) - solo, duet i skład - maks. 100 graczy',
        imageUrl: 'https://cdn.game.tv/tournaments/group-26.png',
      },
      {
        content: 'Erangle Quick Match (w stylu lobby) - Solo - 28 graczy',
        imageUrl: 'https://cdn.game.tv/tournaments/group-27.png',
      },
      {
        content: 'Team Deathmatch (w stylu lobby) - 2 drużyny - maks. 8 graczy',
        imageUrl: 'https://cdn.game.tv/tournaments/group-28.png',
      },
      {
        content: 'Tryb infekcji (w stylu lobby) - 12 graczy',
        imageUrl: 'https://cdn.game.tv/tournaments/group-29.png',
      },
    ],
  },
  prizeTypes: {
    heading: 'Rodzaje nagród w turniejach {{gameName}}',
    description:
      'Nagrody za te turnieje są całkowicie zależne od gospodarza, a niektórzy gospodarze mogą organizować turnieje dla zabawy, bez żadnych nagród. Nagrody można znaleźć na stronie turnieju. Oto niektóre nagrody, które gospodarze rozdali na różne turnieje {{gameName}}.',
    blocks: [
      {
        content: 'Nagrody pieniężne',
        imageUrl: 'https://cdn.game.tv/tournaments/group-13.png',
      },
      {
        content: 'Kody Steam',
        imageUrl: 'https://cdn.game.tv/tournaments/group-24.png',
      },
      {
        content: 'Karty upominkowe - Google Play, Amazon, Steam i inne',
        imageUrl: 'https://cdn.game.tv/tournaments/group-23.png',
      },
      {
        content: 'Kody subskrypcji - Netflix, Apple Music i Spotify',
        imageUrl: 'https://cdn.game.tv/tournaments/group-22.png',
      },
      {
        content: 'I wiele więcej',
        imageUrl: 'https://cdn.game.tv/tournaments/group-20.png',
      },
    ],
  },
  joinTournament: {
    heading: 'Jak dołączyć do turnieju {{gameName}}',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'Krok po kroku',
        stepsContent: [
          {
            stepItem:
              'Przejdź do kanału tekstowego #tournament-info turnieju na Discordzie, aby dowiedzieć się o szczegółach turnieju',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
          },
          {
            stepItem:
              'Kliknij w #tournament-lobby na dole kanału z informacjami o turnieju',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
          },
          {
            stepItem:
              'To weź udział w turnieju, wpisz !register w #tournament-lobby channel',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'Bot Tourney wyśle Ci wiadomość ; wpiszj !joinsolo &lt;twoja nazwa użytknownika w grze> na prywatnej wiadomości Tourney',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
          },
          {
            stepItem:
              'Z powodzeniem zarejestrowałeś się w turnieju {{gameName}}.',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Game.tv web app',
        stepsHeading: 'Krok po kroku',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "Kliknij w <a href='/user' class='click-here'>Web App</a> i zaloguj się za pomocą konta Discord lub Twitter",
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
          },
          {
            stepItem:
              'Na karcie Kalendarz turniejów znajdziesz listę nadchodzących turniejów {{gameName}}.',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'Kliknij turniej, do którego chcesz dołączyć; zobaczysz przycisk Zarejestruj się w dolnej części strony',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              'Wpisz swój IGN (NAZWA W GRZE) i kliknij przycisk Zarejestruj się w dolnej części strony',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
          },
          {
            stepItem: 'Rejestracja przebiegła pomyślnie.',
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
    heading: 'Jak rozpocząć turniej {{gameName}}',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'Krok po kroku',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "<a href='/user' class='click-here'>Zaproś bota Tourney</a> do swojego discorda, zarejestruj się i kliknij \"Autoryzuj\"",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
          },
          {
            stepItem:
              'W menu głównym po lewej stronie kliknij przycisk „Utwórz turniej”',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'Wybierz spośród szerokiej gamy gier turniejowych - Dostosuj szczegóły turnieju, klikając przycisk „Dostosuj” lub „Opublikuj teraz”, aby użyć wstępnie zdefiniowanych szablonów turniejów',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/4.jpg',
          },
          {
            stepItem:
              'W obszarze "Dostosuj turniej" dodaj niestandardowy opis turnieju, zasady i nagrody zgodnie ze swoimi wymaganiami',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/5.jpg',
          },
          {
            stepItem:
              'Po opublikowaniu bot automatycznie utworzy kanały #tournament-info i #tournament-lobby  na twoim serwerze discord; wpisz  !register na kanale #tournament-lobby ,aby wziąć udział w turnieju i sprawdzić czy  {{gameName}} turniej został stworzony pomyślnie',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/6.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Game.tv web app',
        stepsHeading: 'Krok po kroku',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              'Odwiedź <a href=\'/user\' class=\'click-here\'>Web App</a>, kliknij "zaloguj się przez Twittera lub Discorda" i następnie kliknij "Autoryzuj"',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
          },
          {
            stepItem: 'Kliknij ikonę „+” na pasku sterowania u dołu ekranu',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png',
          },
          {
            stepItem:
              'W menu głównym po lewej stronie kliknij przycisk „Utwórz turniej”',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'Wybierz spośród szerokiej gamy gier turniejowych. Możesz dostosować szczegóły turnieju, klikając przycisk „Dostosuj” lub „Opublikuj teraz”, aby użyć wstępnie zdefiniowanych szablonów turnieju',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "Kiedy uda Ci się opublikować swój turniej  {{gameName}} .Turniej zostanie wpisany na Game.tv Web App <a class='click-here' href='/user'>stronie głównej</a>",
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
