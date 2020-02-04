import { IHowToJoin } from '@app/abstractions';

export const HowToJoinGerman: IHowToJoin = {
  blocks: [
    {
      gamePlatform: 'Discord',
      type: 'discord',
      stepsHeading: 'Schritte',
      stepsContent: [
        {
          stepItem:
            'Gehe zum #tournament-info Textkanal in Discord, um mehr über Turnierdetails zu erfahren',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
        },
        {
          stepItem:
            'Klicke unten im #tournament-info Kanal auf #tournament-lobby',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
        },
        {
          stepItem:
            'Um am Turnier teilzunehmen, gib !register im #tournament-lobby Kanal ein',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
        },
        {
          stepItem:
            'Tourney-Bot sendet dir eine Direktnachricht. Gib !joinsolo &lt;deinen Benutzernamen im Spiel> in der DM ein',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
        },
        {
          stepItem:
            'Du hast dich erfolgreich für das {{howToJoinTitle}} Turnier angemeldet.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    {
      gamePlatform: 'Game.tv-Web-App',
      type: 'web',
      stepsHeading: 'Schritte',
      stepsContent: [
        {
          stepItem: `Gehe zu<a href='/user' class='click-here'>Web-App</a>und melde dich mit deinem Discord- oder Twitter-Konto an`,
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
        },
        {
          stepItem:
            'Auf der Registerkarte Turnierkalender findest du die Liste der anstehenden {{howToJoinTitle}} Turniere.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
        },
        {
          stepItem:
            'Klicke auf das Turnier, an dem du teilnehmen möchtest. Du siehst die Schaltfläche Registrieren am unteren Ende der Seite',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
        },
        {
          stepItem:
            'Gib deinen IGN (IN-GAME NAME) ein und klicke auf die Schaltfläche Registrieren am unteren Ende der Seite',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
        },
        {
          stepItem: 'Die Registrierung ist jetzt abgeschlossen.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
    },
  ],
};
