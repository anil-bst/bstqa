import { IFindTournamentLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.ITALIAN;

export const FindTournamentLocalesItalian: IFindTournamentLocale = {
  metadata: {
    title:
      // tslint:disable-next-line: quotemark
      "Trova tornei Esport - Nessun costo d'ingresso | Game.tv",
    description:
      'Cerca tornei di Esport a cui puoi partecipare gratuitamente in tutto il mondo.',
  },
  heading: 'Sfoglia tornei',
  content:
    'Scopri i tornei di Esport che si svolgono in milioni di server Discord per dozzine di giochi per PC e dispositivi mobile.',
  searchForm: {
    formPlaceholder: 'Cerca gioco ad es. Pubg',
    searchInfo: 'Visualizza i tornei per',
    noresult: 'Gioco non trovato! Cerca un altro gioco.',
  },
  gameInfo: {
    title: 'Non vedi un torneo che ti piace?',
    content: 'Crea il tuo',
    noTournamentsTitle: 'Oops! Al momento non ci sono tornei in arrivo!',
    noTournamentsContent: 'Visualizza tutti i tornei disponibili',
    noTournamentsLink: 'Dal vivo o conclusi',
    linkUrl: `/${language}/create-a-tournament`,
  },
  topGameSection: { title: 'I migliori giochi' },
  tournamentTitle: 'Tornei',
  platformStr: 'PIATTAFORMA',
  joinHeading: 'ENTRA',
  viewMore: 'Vedi di più',
  gamePageUrl: `/${language}/find-tournaments`,
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
