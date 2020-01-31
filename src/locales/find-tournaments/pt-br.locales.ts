import { IFindTournamentLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.PORTUGUESE;

export const FindTournamentLocalesPortuguese: IFindTournamentLocale = {
  metadata: {
    title: 'Encontre Torneios de E-Sports - Sem Taxas de Entrada | Game.tv',
    description:
      'Pesquise torneios de e-sports nos quais você pode participar gratuitamente em todo o mundo.',
  },
  heading: 'Procurar Torneios',
  content:
    'Encontre torneios de e-sports acontecendo em milhões de servidores Discord em dezenas de jogos para celular e PC.',
  searchForm: {
    formPlaceholder: 'Pesquisar jogo por exemplo. Pubg',
    searchInfo: 'Ver torneios para ',
    noresult: 'Jogo não encontrado! Por favor, procure outro jogo.',
  },
  gameInfo: {
    title: 'Você não vê um torneio que você gosta?',
    content: 'Crie o seu próprio ',
    noTournamentsTitle: 'Oops! Não há torneios disponíveis no momento!',
    noTournamentsContent: 'Ver todos os torneios disponíveis',
    noTournamentsLink: 'Ao Vivo ou Passados ',
    linkUrl: `/${language}/create-a-tournament`,
  },
  topGameSection: { title: 'Top Jogos ' },
  tournamentTitle: 'Torneios',
  platformStr: 'PLATAFORMA ',
  joinHeading: 'JUNTAR-SE',
  viewMore: 'Ver Mais',
  gamePageUrl: `/${language}/find-tournaments`,
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
