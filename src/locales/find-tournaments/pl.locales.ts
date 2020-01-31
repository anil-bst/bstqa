import { IFindTournamentLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.POLISH;

export const FindTournamentLocalesPolish: IFindTournamentLocale = {
  metadata: {
    title: 'Znajdź turnieje e-sportowe - brak opłat za wstęp | Game.tv',
    description:
      'Wyszukaj turnieje e-sportowe, do których możesz dołączyć za darmo na całym świecie.',
  },
  heading: 'Przeglądaj turnieje',
  content:
    'Znajdź turnieje e-sportowe rozgrywane na milionach serwerów Discord na dziesiątkach gier mobilnych i komputerowych.',
  searchForm: {
    formPlaceholder: 'Wyszukaj grę np. Pubg',
    searchInfo: 'Wyświetl turnieje dla',
    noresult: 'Gra nie znaleziona! Wyszukaj inną grę.',
  },
  gameInfo: {
    title: 'Nie widzisz turnieju, w którym byś chciał wziąć udział?',
    content: 'Stwórz swój własny!',
    noTournamentsTitle:
      'Ups! W tej chwili nie są dostępne żadne nadchodzące turnieje!',
    noTournamentsContent: 'Wyświetl wszystkie dostępne turnieje',
    noTournamentsLink: 'Na żywo',
    linkUrl: `/${language}/create-a-tournament`,
  },
  topGameSection: { title: 'Top Gry' },
  tournamentTitle: 'Turnieje',
  platformStr: 'PLATFORMA',
  joinHeading: 'DOŁĄCZ',
  viewMore: 'Zobacz więcej',
  gamePageUrl: `/${language}/find-tournaments`,
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
