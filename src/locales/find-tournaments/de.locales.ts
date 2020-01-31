import { IFindTournamentLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.GERMAN;

export const FindTournamentLocalesGerman: IFindTournamentLocale = {
  metadata: {
    title: 'Finde Esports Turniere - Keine Eintrittsgebühren | Game.tv',
    description:
      'Suche nach Esport-Turnieren, an denen du weltweit kostenlos teilnehmen kannst.',
  },
  heading: 'Turniere durchsuchen',
  content:
    'Finde auf Millionen von Discord-Servern in Dutzenden von Handy- und PC-Spielen Esport-Turniere. ',
  searchForm: {
    formPlaceholder: 'Suche Spiel z. B. Pubg',
    searchInfo: 'Turniere anzeigen für',
    noresult: 'Spiel nicht gefunden! Bitte suche ein anderes Spiel.',
  },
  gameInfo: {
    title: 'Du siehst kein Turnier, das dir gefällt?',
    content: 'Erstelle dein eigenes',
    noTournamentsTitle:
      'Hoppla! Derzeit sind keine anstehenden Turniere verfügbar!',
    noTournamentsContent: 'Alle verfügbaren Turniere anzeigen',
    noTournamentsLink: 'Aktuelle oder vergangene',
    linkUrl: `/${language}/create-a-tournament`,
  },
  topGameSection: { title: 'Top Spiele' },
  tournamentTitle: 'Turniere',
  platformStr: 'PLATTFORM',
  joinHeading: 'BEITRETEN',
  viewMore: 'Mehr anzeigen',
  gamePageUrl: `/${language}/find-tournaments`,
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
