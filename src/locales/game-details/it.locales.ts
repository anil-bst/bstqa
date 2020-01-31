import { IGameDetailsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.ITALIAN;

export const GameDetailsLocalesItalian: IGameDetailsLocale = {
  metadata: {
    title: 'Partecipa a {{gameName}} Tornei Esport | Game.tv',
    description:
      // tslint:disable-next-line: quotemark
      "Unisciti ai tornei giornalieri di {{gameName}} che si svolgono all'interno di milioni di community gaming in tutto il mondo.",
  },
  gameDetail:
    'Trova Tornei Esport di {{gameName}} gestiti dalla community nelle {{communityCount}} community di tutto il mondo. Fai clic su "Partecipa" per partecipare al torneo {{gameName}}.',
  gameInfo: {
    title: 'Non vedi un torneo che ti piace?',
    content: 'Crea il tuo',
    linkUrl: `/${language}/create-a-tournament`,
    noTournamentsTitle: 'Oops! Al momento non ci sono tornei in arrivo!',
    noTournamentsContent: 'Visualizza tutti i tornei disponibili',
    noTournamentsLink: 'Dal vivo o terminati',
  },
  tournamentTitle: 'Tornei',
  platformStr: 'PIATTAFORMA',
  discord: 'DISCORD',
  vs: 'VS',
  joinHeading: 'ENTRA',
  viewMore: 'Vedi di più',
  tournamentTypes: {
    heading: '{{gameName}} Tipi di tornei',
    blocks: [
      {
        content:
          'Torneo classico (stile lobby) - Solo, Duo e Squad - 100 giocatori max',
        imageUrl: 'https://cdn.game.tv/tournaments/group-26.png',
      },
      {
        content: 'Erangle Quick Match (stile lobby) - Solo - 28 giocatori',
        imageUrl: 'https://cdn.game.tv/tournaments/group-27.png',
      },
      {
        content:
          'Deathmatch a squadre (stile lobby) - 2 squadre - 8 giocatori max',
        imageUrl: 'https://cdn.game.tv/tournaments/group-28.png',
      },
      {
        content: 'Modalità infezione (stile lobby) - 12 giocatori',
        imageUrl: 'https://cdn.game.tv/tournaments/group-29.png',
      },
    ],
  },
  prizeTypes: {
    heading: 'Tipi di premi per i tornei {{gameName}}',
    description:
      // tslint:disable-next-line: quotemark
      "I premi per questi tornei sono interamente a carico dell'host e alcuni host possono organizzare tornei solo per divertimento, senza alcun premio. Puoi trovare i premi elencati nella pagina del torneo. Ecco alcuni premi che gli host hanno regalato per vari tornei {{gameName}}.",
    blocks: [
      {
        content: 'Premi in denaro',
        imageUrl: 'https://cdn.game.tv/tournaments/group-13.png',
      },
      {
        content: 'Codici del portafoglio Steam',
        imageUrl: 'https://cdn.game.tv/tournaments/group-24.png',
      },
      {
        content: 'Carte regalo: Google Play, Amazon, Steam e altri',
        imageUrl: 'https://cdn.game.tv/tournaments/group-23.png',
      },
      {
        content: 'Codici di abbonamento: Netflix, Apple Music e Spotify',
        imageUrl: 'https://cdn.game.tv/tournaments/group-22.png',
      },
      {
        content: 'E molti altri',
        imageUrl: 'https://cdn.game.tv/tournaments/group-20.png',
      },
    ],
  },
  joinTournament: {
    heading: 'Come partecipare a un torneo {{gameName}}',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'Passi',
        stepsContent: [
          {
            stepItem:
              'Vai al canale di testo #tournament-info in Discord per conoscere i dettagli del torneo',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
          },
          {
            stepItem:
              'Fai clic su #tournament-lobby nella parte inferiore del canale #tournament-info channel',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
          },
          {
            stepItem:
              'Per partecipare al torneo, digitare! Registrati nel canale #tournament-lobby',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'Tourney bot ti invierà un messaggio diretto; digita ! oinsolo & lt; il tuo nome utente in-game> in DM',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
          },
          {
            stepItem: 'Ti sei registrato con successo al torneo {{gameName}}.',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'App Web Game.tv',
        stepsHeading: 'Passi',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "Vai a <a href='/user' class='click-here'>App Web</a> e accedi con il tuo account Discord o Twitter",
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
          },
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "Nella scheda Calendario dei tornei puoi trovare l'elenco dei prossimi tornei {{gameName}}.",
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'Fai clic sul torneo a cui vuoi partecipare; vedrai un pulsante Registra nella parte inferiore della pagina',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              'Inserisci il tuo IGN (IN-GAME NAME) e fai clic sul pulsante Registra nella parte inferiore della pagina',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
          },
          {
            stepItem: 'La registrazione è ora completa.',
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
    heading: 'Come iniziare un torneo {{gameName}}',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'Step',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "<a href='/user' class='click-here'>Invita il bot Tourney</a> nel tuo server Discord, accedi e fai clic su \"Autorizza\"",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
          },
          {
            stepItem:
              'Dal menu principale a sinistra, fai clic sul pulsante "Crea torneo"',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'Scegli tra la vasta gamma di giochi del torneo - Personalizza i dettagli del torneo facendo clic sul pulsante "personalizza" o fai clic su "Pubblica ora" per utilizzare i modelli di torneo predefiniti',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/4.jpg',
          },
          {
            stepItem:
              'Sotto personalizza torneo, aggiungi la descrizione del torneo personalizzata, le regole e i premi secondo le tue esigenze',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/5.jpg',
          },
          {
            stepItem:
              'Una volta pubblicato, il bot creerà automaticamente i canali #tournament-info e #tournament-lobby nel tuo server Discord; digita !register nel canale di testo # torneo-lobby per partecipare e controlla se la creazione del torneo {{gameName}} è andata a buon fine.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/6.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'App Web Game.tv',
        stepsHeading: 'Passi',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              'Visitare <a href=\'/user\' class=\'click-here\'>App Web</a>, fai clic su "Accedi con Twitter / Discord" e fai clic su "Autorizza"',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
          },
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              'Fai clic sull\'icona "+" nella barra di controllo nella parte inferiore dello schermo',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png',
          },
          {
            stepItem:
              'Dal menu principale a sinistra, fai clic sul pulsante "Crea torneo"',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              'Scegli tra la vasta gamma di giochi da torneo. Puoi personalizzare i dettagli del torneo facendo clic sul pulsante "personalizza" o facendo clic su "Pubblica ora" per utilizzare i modelli di torneo predefiniti',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "Una volta pubblicato, il tuo torneo {{gameName}} verrà elencato sull'app Web Game.tv<a class='click-here' href='/user'>home page</a>",
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
