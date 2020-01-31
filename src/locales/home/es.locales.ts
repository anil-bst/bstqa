import { IHomeLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.SPANISH;
export const HomeLocaleSpanish: IHomeLocale = {
  metadata: {
    title: 'Tourney - Bot de Esports de Discord  Desarrollado por AI',
    description:
      'Organiza y ejecuta miles de torneos de Esports móviles en cualquier comunidad de juegos con nuestro bot de torneos, Tourney.',
  },
  heroSection: {
    heading: 'Conoce a Tourney',
    content:
      'El asistente de Esports con tecnología de IA. Él dirige tu torneo para que puedas concentrarte en tu comunidad',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/global.png',
        logoExtraClasses: 'global-logo',
        link: '/user',
        name: 'Iniciar App',
        extraClasses: 'alternate-background',
      },
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        logoExtraClasses: 'discord-logo',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Invita a Tourney',
      },
    ],
    discoverButtonTitle: 'Descubre más',
  },
  whyTourneySection: {
    heading: '¿Por qué Tourney?',
    content:
      'Es difícil organizar un torneo para tu comunidad. Hacer un seguimiento de quién juega contra quién, a qué lobby unirse, cuáles son los enfrentamientos más justos, demostrando quién ganó, eso es mucho. Tourney ejecutará tus torneos como asistente o completamente solo según tu comunidad. Su poderosa inteligencia artificial y sus características pueden ayudarlo a construir una comunidad más fuerte y divertida.',
  },
  uHostSection: {
    heading: 'uHost, uHost AI-Assistant, y AI-Host',
    content:
      'Tres modos de torneo principales te dan total libertad en la forma en que ejecutas tus juegos.',
    hostTypes: [
      {
        heading: 'Usted hospeda',
        imageAlt: 'uHost',
        content:
          'Elige entre una plantilla de torneo o personaliza la tuya. Publicar. Puf, Tourney creará todos los canales y DM los roles que deseas para que la pelota ruede.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost.png',
      },
      {
        heading: 'uHost AI-Assistant',
        imageAlt: 'uHost AI-Assistant',
        content:
          'Tourney te ayuda a moderar tu torneo y proporciona orientación para cada jugador entre partidos y mucho más.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost-assistant.png',
      },
      {
        heading: 'AI-Host',
        imageAlt: 'aiHost',
        content:
          'Tourney elegirá el juego, la hora, el formato y ejecutará el torneo completamente solo de principio a fin.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/ai-Host.png',
      },
    ],
    templateSection: {
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/templates.png',
      imageAlt: 'Templates',
      heading: 'Plantillas',
      content:
        'Tourney viene con docenas de plantillas de torneos preconfiguradas para que puedas hacer clic en Publicar y listo.',
    },
    messagingSection: {
      imageAlt: 'DMs and Messaging',
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/dms.png',
      heading: 'MD y mensajería',
      content:
        'Tourney puede enviar mensajes a roles específicos del juego o cualquier rol que elijas para notificarles sobre un nuevo torneo. Toda la organización ocurre en un nuevo canal que Tourney crea y todas las invitaciones al lobby y el emparejamiento se envían a través de MD.',
    },
  },
  perksSection: {
    heading: 'Beneficios',
    content: 'Tourney no estaría completo sin un montón de beneficios.',
    perksList: [
      {
        content:
          '¿Corres un montón de torneos? Genial, tenemos un sistema de niveles para recompensarlo.',
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/perk-tournaments.png',
        imageAlt: 'Niveles de torneo gratificantes',
      },
      {
        content:
          '¿Transmites tus torneos? Perfecto, tenemos un complemento OBS para mostrar',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-obs.png',
        imageAlt: 'Complemento OBS interno para la transmisión',
      },
      {
        content:
          '¿Quieres correr una liga en tu servidor? Bingo, ¡también tenemos eso!',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-league.png',
        imageAlt: '¡Organiza ligas!',
      },
    ],
  },
  graphsSection: {
    heading: 'Roles',
    content:
      'Cuantos más torneos juegues con Tourney, más ventajas desbloquearás. Su rol aparece en la tabla de clasificación en el servidor de Discord Game.tv y recibe cada conjunto de ventajas una vez que salta al siguiente rol.',
    graphContent: {
      previousTitle: 'Anterior',
      nextTitle: 'Siguiente',
      perksTitle: 'Beneficios',
      forTitle: 'PARA',
      graphList: [
        {
          type: 'bronze',
          imageCaption: 'Bronce',
          imageAlt: 'Bronze',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: '1 - 6 torneos por semana',
          perks: [
            'Exclusive Tourney Emotes',
            'Profiles and badge',
            'Unlock Tourney AI',
            'Emoticonos exclusivos de Tourney',
            'Perfiles e insignias',
            'Desbloquear IA Tourney',
          ],
        },
        {
          type: 'silver',
          imageCaption: 'Plata',
          imageAlt: 'Silver',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: '7+ torneos por semana',
          perks: [
            '2 mejoras Nitro para su servidor Discord',
            'Desbloquear ligas ',
          ],
        },
        {
          type: 'gold',
          imageCaption: 'Oro',
          imageAlt: 'Gold',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration:
            'Dirige una liga con 300 o más participantes / temporada únicos',
          perks: ['Patrocinios garantizados de premios de liga'],
        },
      ],
    },
  },
  tourneyEmotesSection: {
    heading: 'Emoticonos de Tourney',
    content:
      'Desbloqueado en Bronce, obtienes 42 emoticones increíbles de alta definición para usar en tu servidor. Son pre-dimensionados, atrevidos y listos para funcionar.',
  },
  profilesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/profiles.png',
        heading: 'Perfiles',
        imageAlt: 'Profiles',
        content:
          'Desbloqueados en Bronce, los jugadores en tus torneos obtienen automáticamente perfiles que pueden personalizar. Cada perfil muestra los juegos jugados, el registro de victorias/derrotas y la calificación del jugador. Las calificaciones de los jugadores ayudan con el emparejamiento y la progresión de la liga.',
      },
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/badges.png',
        heading: 'Insignias',
        imageAlt: 'Badges',
        content:
          'Gana juegos y gana insignias para mostrar tus habilidades. A medida que aumenta su ELO o gana torneos y premios, gana insignias exclusivas en su perfil que a veces vienen con algunos beneficios adicionales súper secretos y exclusivos.',
        reverse: true,
      },
    ],
  },
  tourneyAiSection: {
    heading: 'Tourney IA',
    content1:
      'Una vez que alcanzas Bronce, desbloqueas AI-Host. Habilite AI-Host y Tourney puede ejecutar automáticamente torneos en su comunidad. Ten en cuenta que solo los torneos uHost cuentan para la progresión de tu nivel. Los torneos AI-Host no cuentan (pero son increíbles y debes ejecutarlos junto con uHost).',
    content2: '',
  },
  leaguesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/league.png',
        heading: 'Ligas',
        imageAlt: 'Leagues',
        content:
          'Desbloqueado en oro, Tourney puede ejecutar una liga completa en su servidor. Los jugadores en su servidor tendrán la oportunidad de competir en un sistema de niveles paralelos y ganar un patrocinio mensual si se clasifican entre los primeros-8 en sus tablas de clasificación nacionales.',
      },
    ],
  },
  getBoostedSection: {
    heading: 'Ser impulsado',
    content:
      'Llega a Silver y le daremos a tu servidor Discord no uno, sino dos aumentos para que obtengas esas dulces ventajas de nivel 1. Mientras ejecutes siete o más torneos cada semana (de lunes a domingo), seguiremos impulsando tu servidor. Si cae por debajo de siete torneos cada semana, podemos eliminar sus aumentos hasta que regrese a siete o más. Además, desbloqueas la capacidad de crear ligas para tu comunidad usando la IA de Tourney.',
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
        heading: 'Beneficios de nivel 1:',
        mainlabel: 'desbloqueados',
        subheading: 'Las ventajas mejoradas del servidor incluyen:',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/emoji.png',
            label: '+50 ranuras de emoji de servidor (para un total de 100)',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/audio.png',
            label: '128 Kbps de calidad de audio',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/gif-icon.png',
            label: 'Icono de servidor animado',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/server.png',
            label: 'Fondo de invitación de servidor personalizado',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/live.png',
            label: 'Transmisión en vivo de 720p a 60 fps',
          },
        ],
      },
      boostedServer: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-gold.png',
        heading: 'Calificación para un servidor impulsado',
        subheading: 'Lo que necesitas saber -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Los torneos deben ser uHost o uHost AI-Assistant, los torneos AI-Host no cuentan para su promedio semanal.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Los torneos deben tener un mínimo de 50% de tasa de llenado para calificar. (esto significa que si un torneo tiene dieciséis espacios, al menos ocho personas deben jugar para que su torneo cuente para su promedio semanal.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Observamos sus torneos promedio por semana. Ejecutando tres torneos un día y cuatro en otro es lo mismo que correr un torneo cada día.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Las mejoras se pueden eliminar si el promedio de su torneo cae por debajo de siete en una determinada Semana de lunes a viernes (hora del Pacífico).',
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
        heading: 'Patrocinios de premios',
        imageAlt: 'Patrocinios del Premio de la Liga',
        content:
          'Una vez que llegue al Oro al ejecutar una liga dentro de su comunidad, patrocinaremos los premios de la liga para cada temporada de un mes calendario. Los premios vendrán de nuestros increíbles socios como MSI, Intel y cientos de desarrolladores de juegos y podrían incluir dinero en efectivo, tarjetas de regalo, hardware, productos o artículos en el juego.',
      },
    ],
  },
  availableGamesSection: {
    heading: 'Juegos disponibles',
    content: 'Más añadido semanalmente',
    viewMoreGames: 'Ver más',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Invita a Tourney',
      },
    ],
  },
  gamelink: `/${language}/find-tournaments`,
};
