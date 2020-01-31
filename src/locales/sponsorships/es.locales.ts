import { ISponsorshipsLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const SponsorshipsLocalesSpanish: ISponsorshipsLocale = {
  metadata: {
    title: 'Patrocinios de Esports móvil con Tourney y Game.tv',
    description: 'Patrocinios de Esports móvil con Tourney y Game.tv',
  },
  sponsorshipSection: {
    title: 'Patrocinios de Esports para su comunidad',
    contents: [],
    imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship-banner.png',
  },
  playSponsorSection: {
    blocks: [
      {
        title: '¿Cómo se patrocinan los jugadores?',
        contents: [
          'Cuando ejecuta una liga dentro de su comunidad, Tourney rastrea el rendimiento de cada jugador en todos los servidores con Tourney instalado. Los 8 mejores jugadores de cada país al final de cada temporada recibirán un patrocinio de $500/mes cada mes.',
          'Como un bono para la comunidad que ayudó a estos jugadores a crecer, ¡la comunidad también recibirá una recompensa exclusiva!',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/get-sponsorship.png',
        imageAlt: 'Obtenga patrocinio',
      },
      {
        title: 'Patrocinio',
        contents: [
          'A medida que los jugadores compitan en la liga de tu comunidad, avanzarán en los roles y obtendrán varias ventajas. Una vez que alcanzan el rol Oro, califican para la tabla de clasificación nacional. Cada mes es una nueva temporada en la que elegimos los 8 mejores jugadores de la clasificación nacional. Si su comunidad tiene miembros en todo el mundo, también está bien. Los jugadores deberán verificar su país de residencia en sus perfiles y le recomendamos que ayude a su comunidad a hacerlo.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship.png',
        imageAlt: 'Patrocinio',
      },
    ],
  },
  verifiedBadgeSection: {
    blocks: [
      {
        title: 'Insignia verificada',
        contents: [
          'Los jugadores que lleguen a Plata podrán obtener la "Verificación" y obtener una insignia especial en su página de perfil para que todos la vean. Solo los jugadores "verificados" podrán participar en Oro y ganar un patrocinio.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/verified-badge.png',
        imageAlt: 'Insignia verificada',
      },
      {
        title: 'Ligas',
        contents: [
          'Tourney convertirá su servidor en una liga propia. Los jugadores competirán en eventos que corras usando uHost o automáticamente a través de aiHost. Tourney notifica a los jugadores sobre su desempeño y función, ya sea a través de comandos en el chat o los jugadores pueden ver sus perfiles en Game.tv/users.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/leagues-spons.png',
        imageAlt: 'Ligas',
      },
    ],
  },
  leaderboardSection: {
    title: 'Tabla de clasificación nacional',
    contents: [
      'Los jugadores de tu comunidad tendrán una clasificación dentro de la liga de tu comunidad, pero también podrán verificar su posición en su tabla de clasificación nacional en sus perfiles de Game.tv o mediante el comando "!myposition". Solo los jugadores verificados pueden llegar a la clasificación nacional.',
    ],
    desktopImageUrl:
      'https://cdn.game.tv/images/meet-tourney/leaderboard-desk.png',
    mobImageUrl: 'https://cdn.game.tv/images/meet-tourney/leaderboard-mob.png',
  },
  tiersSection: {
    content: {
      title: 'Roles',
      contents: [
        `A medida que tus jugadores ganan, avanzan en los niveles de la liga y obtienen varias ventajas. Una vez que alcanzan el nivel Diamante, califican para la clasificación nacional y pueden ganar un patrocinio cada mes que permanecen en los 8 primeros lugares. Los jugadores pueden ver sus clasificaciones en sus perfiles o llamando al comando "!myrating".`,
      ],
    },
    graphContent: {
      previousTitle: 'Anterior',
      nextTitle: 'Siguiente',
      perksTitle: 'Beneficios',
      forTitle: 'PARA',
      graphList: [
        {
          type: 'bronce',
          imageCaption: 'Bronce',
          imageAlt: 'Bronce',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: 'ELO 800 - 1300',
          perks: ['Emoticonos exclusivos de Tourney', 'Perfiles e insignias'],
        },
        {
          type: 'plata',
          imageCaption: 'Plata',
          imageAlt: 'Plata',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: 'ELO 1301 - 1800',
          perks: ['Insignia de perfil verificado'],
        },
        {
          type: 'oro',
          imageCaption: 'Oro',
          imageAlt: 'Oro',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: 'ELO 1800+',
          perks: ['Emoticonos exclusivos de Tourney'],
        },
      ],
    },
  },
};
