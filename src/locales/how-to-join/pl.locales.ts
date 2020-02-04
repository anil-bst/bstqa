import { IHowToJoin } from '@app/abstractions';

export const HowToJoinPolish: IHowToJoin = {
  blocks: [
    {
      gamePlatform: 'Discord',
      type: 'discord',
      stepsHeading: 'Krok po kroku',
      stepsContent: [
        {
          stepItem:
            'Przejdź do kanału tekstowego #tournament-info turnieju na Discordzie, aby dowiedzieć się o szczegółach turnieju',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
        },
        {
          stepItem:
            'Kliknij w #tournament-lobby na dole kanału z informacjami o turnieju',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
        },
        {
          stepItem:
            'To weź udział w turnieju, wpisz !register w #tournament-lobby channel',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
        },
        {
          stepItem:
            'Bot Tourney wyśle Ci wiadomość ; wpiszj !joinsolo &lt;twoja nazwa użytknownika w grze> na prywatnej wiadomości Tourney',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
        },
        {
          stepItem:
            'Z powodzeniem zarejestrowałeś się w turnieju {{howToJoinTitle}}.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    {
      gamePlatform: 'Game.tv web app',
      type: 'web',
      stepsHeading: 'Krok po kroku',
      stepsContent: [
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            "Kliknij w <a href='/user' class='click-here'>Web App</a> i zaloguj się za pomocą konta Discord lub Twitter",
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
        },
        {
          stepItem:
            'Na karcie Kalendarz turniejów znajdziesz listę nadchodzących turniejów {{howToJoinTitle}}.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
        },
        {
          stepItem:
            'Kliknij turniej, do którego chcesz dołączyć; zobaczysz przycisk Zarejestruj się w dolnej części strony',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
        },
        {
          stepItem:
            'Wpisz swój IGN (NAZWA W GRZE) i kliknij przycisk Zarejestruj się w dolnej części strony',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
        },
        {
          stepItem: 'Rejestracja przebiegła pomyślnie.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
    },
  ],
};
