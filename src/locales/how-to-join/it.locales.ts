import { IHowToJoin } from '@app/abstractions';

export const HowToJoinItalian: IHowToJoin = {
  blocks: [
    {
      gamePlatform: 'Discord',
      type: 'discord',
      stepsHeading: 'Passi',
      stepsContent: [
        {
          stepItem:
            'Vai al canale di testo #tournament-info in Discord per conoscere i dettagli del torneo',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
        },
        {
          stepItem:
            'Fai clic su #tournament-lobby nella parte inferiore del canale #tournament-info channel',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
        },
        {
          stepItem:
            'Per partecipare al torneo, digitare! Registrati nel canale #tournament-lobby',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
        },
        {
          stepItem:
            'Tourney bot ti invierà un messaggio diretto; digita ! oinsolo & lt; il tuo nome utente in-game> in DM',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
        },
        {
          stepItem:
            'Ti sei registrato con successo al torneo {{howToJoinTitle}}.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    {
      gamePlatform: 'App Web Game.tv',
      type: 'web',
      stepsHeading: 'Passi',
      stepsContent: [
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            "Vai a <a href='/user' class='click-here'>App Web</a> e accedi con il tuo account Discord o Twitter",
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
        },
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            "Nella scheda Calendario dei tornei puoi trovare l'elenco dei prossimi tornei {{howToJoinTitle}}.",
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
        },
        {
          stepItem:
            'Fai clic sul torneo a cui vuoi partecipare; vedrai un pulsante Registra nella parte inferiore della pagina',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
        },
        {
          stepItem:
            'Inserisci il tuo IGN (IN-GAME NAME) e fai clic sul pulsante Registra nella parte inferiore della pagina',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
        },
        {
          stepItem: 'La registrazione è ora completa.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
    },
  ],
};
