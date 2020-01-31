import { IGameDetailsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.SPANISH;

export const GameDetailsLocalesSpanish: IGameDetailsLocale = {
  metadata: {
    title: 'Únase a Torneos Esports de {{gameName}} | Game.tv',
    description:
      'Únase a los torneos diarios de {{gameName}} que se ejecutan dentro de millones de comunidades de juego en todo el mundo.',
  },
  gameDetail:
    'Encuentra los torneos esports de {{gameName}} administrados por la comunidad en todas  {{communityCount}} las comunidades de todo el mundo. Haz clic en "Unirse" para ingresar al torneo {{gameName}}.',
  gameInfo: {
    title: '¿No ves un torneo que te gusta?',
    content: 'Crea tu propio',
    linkUrl: `/${language}/create-a-tournament`,
    noTournamentsTitle:
      '¡Uy! ¡No hay próximos torneos disponibles en este momento!',
    noTournamentsContent: 'Ver todos los torneos disponibles',
    noTournamentsLink: 'En vivo o anteriores',
  },
  tournamentTitle: 'Torneos',
  platformStr: 'PLATAFORMA',
  discord: 'DISCORD',
  vs: 'VS',
  joinHeading: 'UNIRSE',
  viewMore: 'Ver más',
  tournamentTypes: {
    heading: '{{gameName}} Tipos de torneos',
    blocks: [
      {
        content:
          'Torneo clásico (estilo lobby) - Solo, Dúo y Escuadrón - 100 jugadores como máximo',
        imageUrl: 'https://cdn.game.tv/tournaments/group-26.png',
      },
      {
        content: 'Erangel Partida Rápida (estilo lobby) - Solo - 28 jugadores',
        imageUrl: 'https://cdn.game.tv/tournaments/group-27.png',
      },
      {
        content:
          'Team Deathmatch (estilo lobby) - 2 Escuadrones - 8 jugadores máximo',
        imageUrl: 'https://cdn.game.tv/tournaments/group-28.png',
      },
      {
        content: 'Modo de infección (estilo lobby) - 12 jugadores',
        imageUrl: 'https://cdn.game.tv/tournaments/group-29.png',
      },
    ],
  },
  prizeTypes: {
    heading: 'Tipos de premios para torneos de {{gameName}}',
    description:
      'Los premios para estos torneos son totalmente del anfitrión y algunos anfitriones pueden realizar torneos solo por diversión, sin ningún premio. Puedes encontrar los premios que figuran en la página del torneo. Aquí hay algunos premios que los anfitriones han regalado para varios torneos de {{gameName}}.',
    blocks: [
      {
        content: 'Recompensas en efectivo',
        imageUrl: 'https://cdn.game.tv/tournaments/group-13.png',
      },
      {
        content: 'Códigos de billetera de Steam',
        imageUrl: 'https://cdn.game.tv/tournaments/group-24.png',
      },
      {
        content: 'Tarjetas de regalo - Google play, Amazon, Steam y otros',
        imageUrl: 'https://cdn.game.tv/tournaments/group-23.png',
      },
      {
        content: 'Códigos de suscripción - Netflix, Apple Music y Spotify',
        imageUrl: 'https://cdn.game.tv/tournaments/group-22.png',
      },
      {
        content: 'Y muchos más',
        imageUrl: 'https://cdn.game.tv/tournaments/group-20.png',
      },
    ],
  },
  joinTournament: {
    heading: 'Cómo unirse a un torneo de {{gameName}}',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'Pasos',
        stepsContent: [
          {
            stepItem:
              'Ve al canal de texto #tournament-info en Discord para conocer los detalles del torneo.',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
          },
          {
            stepItem:
              'Haz clic en el #tournament-lobby en la parte inferior del #tournament-info del torneo',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
          },
          {
            stepItem:
              'Para participar en el torneo, escriba !register en el canal #tournament-lobby',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'Tourney bot te enviará un mensaje directo; escribe !joinsolo <tu nombre de usuario en el juego> en MD',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
          },
          {
            stepItem: 'Te has registrado con éxito en el torneo {{gameName}}.',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Game.tv web app',
        stepsHeading: 'Pasos',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "Vaya a <a href='/user' class='click-here'>Web App</a> e inicie sesión con su cuenta de Discord o Twitter",
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
          },
          {
            stepItem:
              'En la pestaña Calendario de torneos, puedes encontrar la lista de los próximos torneos de {{gameName}}.',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'Haz clic en el torneo al que deseas unirte; verá un botón Registrarse en la parte inferior de la página',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              'Ingrese su IGN (NOMBRE EN EL JUEGO) y haga clic en el botón Registrarse en la parte inferior de la página',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
          },
          {
            stepItem: 'El registro ya está completo.',
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
    heading: 'Cómo comenzar un torneo de {{gameName}}',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'Pasos',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "<a href='/user' class='click-here'>Invite el Tourney</a> bot en su servidor discord, inicie sesión y haga clic en \"Autorizar\"",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
          },
          {
            stepItem:
              'Desde el menú principal a la izquierda, haz clic en el botón "Crear torneo"',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'Elija entre la gran variedad de juegos de torneos: personalice los detalles del torneo haciendo clic en el botón "personalizar" o haga clic en "Publicar ahora" para usar las plantillas de torneo predefinidas',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/4.jpg',
          },
          {
            stepItem:
              'En personalizar torneo, agregue una descripción personalizada del torneo, reglas y premios según sus requisitos',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/5.jpg',
          },
          {
            stepItem:
              'Una vez publicado, el bot creará automáticamente los canales #tournament-info y #tournament-lobby en su servidor de discord; escribe !register en el canal de texto #tournament-lobby para participar y verificar si la creación del torneo {{gameName}} fue exitosa.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/6.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Game.tv web app',
        stepsHeading: 'Pasos',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              'Vaya a <a href=\'/user\' class=\'click-here\'>Web App</a>, haga clic en "Iniciar sesión con Twitter/Discord" y haga clic en "Autorizar"',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
          },
          {
            stepItem:
              'Haga clic en el icono "+" en la barra de control en la parte inferior de su pantalla',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png',
          },
          {
            stepItem:
              'Desde el menú principal a la izquierda, haz clic en el botón "Crear torneo"',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'Elige entre la gran variedad de juegos de torneos. Puedes personalizar los detalles del torneo haciendo clic en el botón "personalizar" o haciendo clic en "Publicar ahora" para usar las plantillas de torneo predefinidas',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "Una vez publicado, su torneo de {{gameName}} se incluirá en la <a class='click-here' href='/user'>página de inicio</a> de Game.tv Web App",
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
