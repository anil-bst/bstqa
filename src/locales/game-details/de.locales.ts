import { IGameDetailsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';

const language = SupportedLocalesEnum.GERMAN;

export const GameDetailsLocalesGerman: IGameDetailsLocale = {
  metadata: {
    title: 'Mach bei {{gameName}} Esports-Turnieren mit | Game.tv',
    description:
      'Nimm an täglichen {{gameName}} Turnieren teil, die in Millionen von Gaming-Communities weltweit stattfinden.',
  },
  gameDetail:
    'Finde von der Community organisierte {{gameName}} Esport-Turniere, die in {{communityCount}} Communities weltweit stattfinden. Klicke auf "Beitreten", um an dem {{gameName}} - Turnier teilzunehmen.',
  gameInfo: {
    title: 'Du siehst kein Turnier, das dir gefällt?',
    content: 'Erstelle dein eigenes',
    linkUrl: `/${language}/create-a-tournament`,
    noTournamentsTitle:
      'Hoppla! Derzeit sind keine anstehenden Turniere verfügbar!',
    noTournamentsContent: 'Alle verfügbaren Turniere anzeigen',
    noTournamentsLink: 'Aktuelle oder vergangene',
  },
  tournamentTitle: 'Turniere',
  platformStr: 'PLATTFORM',
  discord: 'DISCORD',
  vs: 'GEGEN',
  joinHeading: 'BEITRETEN',
  viewMore: 'mehr anzeigen',
  tournamentTypes: {
    heading: '{{gameName}} Turniertypen',
    blocks: [
      {
        content:
          'Klassisches Turnier (Lobby-Stil) - Solo, Duo und Squad - 100 Spieler max',
        imageUrl: 'https://cdn.game.tv/tournaments/group-26.png',
      },
      {
        content: 'Erangel Quick-Match (Lobby-Stil) - Solo - 28 Spieler',
        imageUrl: 'https://cdn.game.tv/tournaments/group-27.png',
      },
      {
        content: 'Team Deathmatch (Lobby-Stil) - 2 Squads - 8 Spieler max',
        imageUrl: 'https://cdn.game.tv/tournaments/group-28.png',
      },
      {
        content: 'Infection-Modus (Lobby-Stil) - 12 Spieler',
        imageUrl: 'https://cdn.game.tv/tournaments/group-29.png',
      },
    ],
  },
  prizeTypes: {
    heading: 'Arten von Preisen für {{gameName}} Turniere',
    description:
      'Die Preise für diese Turniere sind ausschließlich dem Veranstalter überlassen, und einige Veranstalter können Turniere nur zum Spaß und ohne Preise veranstalten. Die Preise findest du auf der Turnierseite. Hier sind einige Preise, die Gastgeber für verschiedene {{gameName}} Turniere vergeben haben.',
    blocks: [
      {
        content: 'Geldprämien',
        imageUrl: 'https://cdn.game.tv/tournaments/group-13.png',
      },
      {
        content: 'Steam Wallet Codes',
        imageUrl: 'https://cdn.game.tv/tournaments/group-24.png',
      },
      {
        content: 'Geschenkkarten - Google Play, Amazon, Steam und andere',
        imageUrl: 'https://cdn.game.tv/tournaments/group-23.png',
      },
      {
        content: 'Abonnement-Codes - Netflix, Apple Music und Spotify',
        imageUrl: 'https://cdn.game.tv/tournaments/group-22.png',
      },
      {
        content: 'Und viele mehr',
        imageUrl: 'https://cdn.game.tv/tournaments/group-20.png',
      },
    ],
  },
  joinTournament: {
    heading: 'Wie nehme ich an einem {{gameName}} Turnier teil?',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'Schritte',
        stepsContent: [
          {
            stepItem:
              'Gehe zum #tournament-info Textkanal in Discord, um mehr über Turnierdetails zu erfahren',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
          },
          {
            stepItem:
              'Klicke unten im #tournament-info Kanal auf #tournament-lobby',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
          },
          {
            stepItem:
              'Um am Turnier teilzunehmen, gib !register im #tournament-lobby Kanal ein',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'Tourney-Bot sendet dir eine Direktnachricht. Gib !joinsolo &lt;deinen Benutzernamen im Spiel> in der DM ein',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
          },
          {
            stepItem:
              'Du hast dich erfolgreich für das {{gameName}} Turnier angemeldet.',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Game.tv-Web-App',
        stepsHeading: 'Schritte',
        stepsContent: [
          {
            stepItem: `Gehe zu<a href='/user' class='click-here'>Web-App</a>und melde dich mit deinem Discord- oder Twitter-Konto an`,
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
          },
          {
            stepItem:
              'Auf der Registerkarte Turnierkalender findest du die Liste der anstehenden {{gameName}} Turniere.',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'Klicke auf das Turnier, an dem du teilnehmen möchtest. Du siehst die Schaltfläche Registrieren am unteren Ende der Seite',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              'Gib deinen IGN (IN-GAME NAME) ein und klicke auf die Schaltfläche Registrieren am unteren Ende der Seite',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
          },
          {
            stepItem: 'Die Registrierung ist jetzt abgeschlossen.',
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
    heading: 'Wie starte ich ein {{gameName}} Turnier?',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'Schritte',
        stepsContent: [
          {
            stepItem: `<a href='/user' class='click-here'>Lade den Tourney</a>bot zu deinem Discord-Server ein, melde dich an und klicke auf "Autorisieren"`,
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
          },
          {
            stepItem:
              'Klicke im Hauptmenü links auf die Schaltfläche "Turnier erstellen"',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'Wähle aus der Vielzahl von Turnierspielen - Passe die Turnierdetails an, indem du auf "Anpassen" oder auf "Jetzt veröffentlichen" klickst, um die vordefinierten Turniervorlagen zu verwenden',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/4.jpg',
          },
          {
            stepItem:
              'Füge unter "Turnier anpassen" eine benutzerdefinierte Turnierbeschreibung, Regeln und Preise gemäß deinen Anforderungen hinzu',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/5.jpg',
          },
          {
            stepItem:
              'Nach der Veröffentlichung erstellt der Bot automatisch die Kanäle #tournament-info und #tournament-lobby auf deinem Discord-Server. Tippe !register im #tournament-lobby Textkanal, um teilzunehmen und zu überprüfen, ob das {{gameName}} - Turnier erfolgreich erstellt wurde.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/6.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Game.tv-Web-App',
        stepsHeading: 'Schritte',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              'Besuche <a href=\'/user\' class=\'click-here\'>Web-App</a>, klicke auf "Mit Twitter/Discord anmelden" und dann auf "Autorisieren".',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
          },
          {
            stepItem:
              'Klicke auf das "+" Symbol in der Steuerleiste am unteren Bildschirmrand',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png',
          },
          {
            stepItem:
              'Klicke im Hauptmenü links auf die Schaltfläche "Turnier erstellen"',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'Wähle aus einer Vielzahl Turnierspiele. Du kannst entweder die Turnierdetails anpassen, indem du auf "Anpassen", oder auf "Jetzt veröffentlichen" klickst, um die vordefinierten Turniervorlagen zu verwenden',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "Nach der Veröffentlichung wird dein {{gameName}} Turnier auf Game.tv-Web-App aufgeführt <a class='click-here' href='/user'>Homepage</a>",
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
