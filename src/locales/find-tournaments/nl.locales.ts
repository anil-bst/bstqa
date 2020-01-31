import { IFindTournamentLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.DUTCH;

export const FindTournamentLocalesDutch: IFindTournamentLocale = {
  metadata: {
    title: 'Find Esports Tournaments - No Entrance Fees | Game.tv',
    description:
      'Search for esports tournaments you can join for free happening across the world.',
  },
  heading: 'Browse Tournaments',
  content:
    'Find esports tournaments happening in millions of Discord servers across dozens of mobile and PC games.',
  searchForm: {
    formPlaceholder: 'Search game eg. Pubg',
    searchInfo: 'View tournaments for',
    noresult: 'Game not found! Please search another game.',
  },
  gameInfo: {
    title: 'Don’t see a tournament you like?',
    content: 'Create your own',
    linkUrl: '/create-a-tournament',
    noTournamentsTitle:
      'Oops! There’s no upcoming Tournaments available right now!',
    noTournamentsContent: 'View all available tournaments',
    noTournamentsLink: 'Live or Past',
  },
  topGameSection: { title: 'Top Games' },
  tournamentTitle: 'Tournaments',
  platformStr: 'PLATFORM',
  gamePageUrl: '/find-tournaments',
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  joinHeading: 'JOIN',
  viewMore: 'View more',
  locales: `/${language}`,
};
