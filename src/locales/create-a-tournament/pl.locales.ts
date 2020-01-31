import { ICommunityTournamentsType } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.POLISH;

export const CreateATournamentLocalesLocalePolish: ICommunityTournamentsType = {
  metadata: {
    title: 'Jak przeprowadzać mobilne turnieje e-sportowe Game.tv',
    description:
      'Rozpocznij własne turnieje i ligi za pomocą Discord bot Game.tv Tourney lub Game.tv.',
  },
  heroSection: {
    heading: 'Utwórz - Hostuj - Graj',
    content:
      'Twórz turnieje bezpośrednio w społeczności Discord lub w naszej aplikacji w kilku prostych krokach',
    bannerDeskTopImageUrl: 'https://cdn.game.tv/create_tournament/banner.png',
    bannerMobImageUrl: 'https://cdn.game.tv/create_tournament/banner-mob.png',
  },
  discordSection: {
    heading: 'Discord',
    content:
      'Prowadzenie turniejów w społeczności Discord oznacza, że gracze nigdy nie będą musieli opuszczać twojego serwera. Wszystko, co muszą zrobić, aby się zarejestrować, zameldować i grać, odbywa się za pośrednictwem niestandardowych ról i menedżerów. Tourney dba o dobieranie graczy, co oznacza, że pojedynki są fair. Po grze gracze mogą sprawdzić swoje wyniki i wynik GELO na swojej stronie profilu.',
    btnText: 'Zaproś Tourney',
    steps: [
      {
        title: 'Zainstaluj Tourney i udaj się do',
        linkString: 'tablicy ',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step1.png',
        linkUrl: '/dashboard',
      },
      {
        title: 'Kliknij „Utwórz turniej” i wybierz swoją grę',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step2.png',
      },
      {
        title:
          'Dostosuj turniej lub skorzystaj z naszych istniejących szablonów',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step3.png',
      },
      {
        title:
          'Kliknij „Publikuj”, a Tourney utworzy lobby lub drabinkę na twoim serwerze Discord.',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step4.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/discord_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/discord.png',
  },
  gameSection: {
    heading: 'Game.tv App',
    content:
      'Jeśli nie masz serwera Discord lub chcesz zaprosić graczy spoza Discord, możesz użyć naszej aplikacji do tworzenia turniejów. Podobnie jak w przypadku Discord, Tourney stworzy, zorganizuje i przeprowadzi twoje turnieje. Ty i Twoi uczestnicy będziecie otrzymywać powiadomienia bezpośrednio w aplikacji o nadchodzących meczach, dobieraniu graczy, aktualizacjach grup i wiele innych. Możesz także podłączyć swoje konto na Twitterze i dzielić się swoimi postępami, a także pozwalać ludziom dołączać bezpośrednio przez Twitter.',
    btnText: 'Włącz Aplikację',
    steps: [
      {
        title: 'Udaj się do',
        linkString: 'Game.tv app',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step1.png',
        linkUrl: '/user',
      },
      {
        title: 'Zaloguj się i kliknij + na pasku sterowania u dołu ekranu',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step2.png',
      },
      {
        title:
          'Dostosuj turniej lub skorzystaj z naszych istniejących szablonów',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step3.png',
      },
      {
        title:
          'Kliknij „Publikuj”, a Tourney utworzy lobby lub drabinkę na twoim serwerze Discord.',
        imgUrl: 'https://cdn.game.tv/crete_tournament/step-4-1-new.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/game_global_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/game.png',
  },
  locales: `/${language}`,
};
