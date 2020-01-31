import { ITournamentDetailLocale } from '@app/abstractions';
export const TournamentDetailLocalePolish: ITournamentDetailLocale = {
  metadata: {
    title: 'License Agreement - Game.tv',
    description: 'Game.tv License Agreement',
  },
  linkToAllTournaments: 'All Tournaments',
  noPrizeInfo: 'see more',
  registerSection: {
    heading: 'Click ‘Register’ to get a seat in the tournament.',
    btnText: 'Register',
  },
  videoSection: {
    heading: 'Tournament Stream',
  },
  details: {
    detailsSectionHeading: 'Details',
    ruleSectionHeading: 'Rules',
    howToJoinSection: {
      heading: 'Jak dołączyć do turnieju {{tournamentName}}',
      content: [
        'Przejdź do kanału tekstowego #tournament-info turnieju na Discordzie, aby dowiedzieć się o szczegółach turnieju',
        'Kliknij w #tournament-lobby na dole kanału z informacjami o turnieju',
        'To weź udział w turnieju, wpisz !register w #tournament-lobby channel',
        'Bot Tourney wyśle Ci wiadomość ; wpiszj !joinsolo &lt;twoja nazwa użytknownika w grze> na prywatnej wiadomości Tourney',
        'Z powodzeniem zarejestrowałeś się w turnieju {{tournamentName}}.',
      ],
      imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
};
