import { IFindTournamentLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.SPANISH;

export const FindTournamentLocalesSpanish: IFindTournamentLocale = {
  metadata: {
    title: 'Encuentra torneos de Esports - Sin tarifas de entrada | Game.tv',
    description:
      'Busque torneos de deportes electrónicos a los que pueda unirse de forma gratuita en todo el mundo.',
  },
  heading: 'Examinar torneos',
  content:
    'Encuentra torneos de deportes electrónicos que se llevan a cabo en millones de servidores Discord en docenas de juegos móviles y para PC.',
  searchForm: {
    formPlaceholder: 'Buscar juego, ej. Pubg',
    searchInfo: 'Ver torneos para',
    noresult: '¡Juego no encontrado! Por favor busca otro juego.',
  },
  gameInfo: {
    title: '¿No ves un torneo que te gusta?',
    content: 'Crea tu propio',
    noTournamentsTitle:
      '¡Uy! ¡No hay próximos torneos disponibles en este momento!',
    noTournamentsContent: 'Ver todos los torneos disponibles',
    noTournamentsLink: 'En vivo o anteriores',
    linkUrl: `/${language}/create-a-tournament`,
  },
  topGameSection: { title: 'Los mejores juegos' },
  tournamentTitle: 'Torneos',
  platformStr: 'PLATAFORMA',
  joinHeading: 'UNIRSE',
  viewMore: 'Ver más',
  gamePageUrl: `/${language}/find-tournaments`,
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
