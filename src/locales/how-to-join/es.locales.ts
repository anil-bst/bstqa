import { IHowToJoin } from '@app/abstractions';

export const HowToJoinSpanish: IHowToJoin = {
  blocks: [
    {
      gamePlatform: 'Discord',
      type: 'discord',
      stepsHeading: 'Pasos',
      stepsContent: [
        {
          stepItem:
            'Ve al canal de texto #tournament-info en Discord para conocer los detalles del torneo.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
        },
        {
          stepItem:
            'Haz clic en el #tournament-lobby en la parte inferior del #tournament-info del torneo',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
        },
        {
          stepItem:
            'Para participar en el torneo, escriba !register en el canal #tournament-lobby',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
        },
        {
          stepItem:
            'Tourney bot te enviará un mensaje directo; escribe !joinsolo <tu nombre de usuario en el juego> en MD',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
        },
        {
          stepItem:
            'Te has registrado con éxito en el torneo {{howToJoinTitle}}.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    {
      gamePlatform: 'Game.tv web app',
      type: 'web',
      stepsHeading: 'Pasos',
      stepsContent: [
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            "Vaya a <a href='/user' class='click-here'>Web App</a> e inicie sesión con su cuenta de Discord o Twitter",
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
        },
        {
          stepItem:
            'En la pestaña Calendario de torneos, puedes encontrar la lista de los próximos torneos de {{howToJoinTitle}}.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
        },
        {
          stepItem:
            'Haz clic en el torneo al que deseas unirte; verá un botón Registrarse en la parte inferior de la página',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
        },
        {
          stepItem:
            'Ingrese su IGN (NOMBRE EN EL JUEGO) y haga clic en el botón Registrarse en la parte inferior de la página',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
        },
        {
          stepItem: 'El registro ya está completo.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
    },
  ],
};
