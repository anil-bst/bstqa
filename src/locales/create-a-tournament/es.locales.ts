import { ICommunityTournamentsType } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.SPANISH;

export const CreateATournamentLocalesLocaleSpanish: ICommunityTournamentsType = {
  metadata: {
    title: 'Cómo ejecutar torneos de esports móviles | Game.tv',
    description:
      'Comience sus propios torneos y ligas utilizando Discord bot Tourney de Game.tv o la aplicación Game.tv.',
  },
  heroSection: {
    heading: 'Crear - Hospedar - Jugar',
    content:
      'Cree torneos directamente dentro de su comunidad Discord o en nuestra aplicación en unos pocos pasos fáciles',
    bannerDeskTopImageUrl: 'https://cdn.game.tv/create_tournament/banner.png',
    bannerMobImageUrl: 'https://cdn.game.tv/create_tournament/banner-mob.png',
  },
  discordSection: {
    heading: 'Discord',
    content:
      'La ejecución de torneos dentro de su comunidad Discord significa que los jugadores nunca tendrán que abandonar su servidor. Todo lo que necesitan hacer para registrarse, registrarse y jugar sucede a través de roles personalizados y MD. Tourney se encarga del emparejamiento, lo que significa los enfrentamientos más justos. Después del juego, los jugadores pueden verificar su clasificación y puntaje GELO en su propia página de perfil.',
    btnText: 'Invita a Tourney',
    steps: [
      {
        title: 'Instala Tourney y ve al',
        linkString: 'Dashboard',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step1.png',
        linkUrl: '/dashboard',
      },
      {
        title: 'Haz clic en "Crear torneo" y elige tu juego',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step2.png',
      },
      {
        title: 'Personaliza el torneo o usa nuestras plantillas existentes',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step3.png',
      },
      {
        title:
          'Haga clic en "Publicar" y Tourney creará el lobby o grupo en su servidor Discord.',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step4.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/discord_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/discord.png',
  },
  gameSection: {
    heading: 'Game.tv App',
    content:
      'Si no tienes un servidor Discord o quieres invitar a jugadores de fuera de Discord, puedes usar nuestra aplicación para crear torneos. Al igual que para Discord, Tourney creará, organizará y ejecutará sus torneos. Usted y sus participantes recibirán notificaciones directamente en la aplicación sobre los próximos partidos, emparejamientos, actualizaciones de grupos y más. También puede conectar su cuenta de Twitter y compartir el progreso de su partida, así como permitir que las personas se unan directamente a través de Twitter.',
    btnText: 'Iniciar App',
    steps: [
      {
        title: 'Ir a la',
        linkString: 'Game.tv app',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step1.png',
        linkUrl: '/user',
      },
      {
        title:
          'Inicie sesión y haga clic en + en la barra de control en la parte inferior de su pantalla',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step2.png',
      },
      {
        title: 'Personaliza el torneo o usa nuestras plantillas existentes',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step3.png',
      },
      {
        title:
          'Haga clic en "Publicar" y Tourney creará el lobby o grupo en su servidor Discord.',
        imgUrl: 'https://cdn.game.tv/crete_tournament/step-4-1-new.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/game_global_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/game.png',
  },
  locales: `/${language}`,
};
