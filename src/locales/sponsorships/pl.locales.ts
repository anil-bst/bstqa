import { ISponsorshipsLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const SponsorshipsLocalesPolish: ISponsorshipsLocale = {
  metadata: {
    title: 'Mobile Esports Sponsoring z Tourney i Game.tv',
    description: 'Mobile Esports Sponsoring z Tourney i Game.tv',
  },
  sponsorshipSection: {
    title: 'Sponsoring Esports dla Twojej społeczności',
    contents: [],
    imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship-banner.png',
  },
  playSponsorSection: {
    blocks: [
      {
        title: 'Jak gracze są sponsorowani?',
        contents: [
          'Kiedy prowadzisz ligę w swojej społeczności, Tourney śledzi wydajność każdego gracza na wszystkich serwerach z zainstalowanym Tourney. 8 najlepszych graczy w każdym kraju na koniec każdego sezonu otrzyma sponsoring 500 $ / miesiąc każdego miesiąca.',
          'Jako bonus dla społeczności, która pomogła tym graczom w rozwoju, społeczność otrzyma również ekskluzywną nagrodę!',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/get-sponsorship.png',
        imageAlt: 'Zostań sponsorowany',
      },
      {
        title: 'Sponsoring',
        contents: [
          'Gdy gracze rywalizują w lidze społeczności, będą awansować na role, zdobywając różne profity. Po osiągnięciu roli złota kwalifikują się do krajowej tabeli liderów. Każdy miesiąc to nowy sezon, w którym wybieramy 8 najlepszych graczy z krajowej tabeli liderów. Jeśli twoja społeczność ma członków na całym świecie, to też dobrze. Gracze będą musieli zweryfikować swój kraj zamieszkania w swoich profilach, a my zachęcamy do pomocy społeczności.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship.png',
        imageAlt: 'Sponsoring',
      },
    ],
  },
  verifiedBadgeSection: {
    blocks: [
      {
        title: 'Zweryfikowana odznaka',
        contents: [
          'Gracze, którzy trafią na Srebro, będą mogli uzyskać „Weryfikację” i uzyskać specjalną odznakę na swojej stronie profilu, aby wszyscy mogli je zobaczyć. Tylko gracze „Zweryfikowani” będą mogli wziąć udział w Złoto i zdobyć sponsoring.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/verified-badge.png',
        imageAlt: 'Zweryfikowana Odznaka',
      },
      {
        title: 'Ligi',
        contents: [
          'Tourney zmieni Twój serwer w własną ligę. Gracze będą rywalizować w wydarzeniach, które prowadzisz za pomocą uHost lub automatycznie przez aiHost. Tourney informuje graczy o swojej wydajności i roli za pomocą poleceń na czacie lub gracze mogą przeglądać swoje profile na Game.tv/users.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/leagues-spons.png',
        imageAlt: 'Ligi',
      },
    ],
  },
  leaderboardSection: {
    title: 'Narodowa tablica wyników',
    contents: [
      'Gracze w Twojej społeczności będą mieli ranking w twojej lidze społeczności, ale będą mogli także sprawdzić swoją pozycję w krajowej tabeli liderów na swoich profilach Game.tv lub za pomocą polecenia „! Myposition”. Tylko zweryfikowani gracze mogą dotrzeć do krajowej tabeli liderów',
    ],
    desktopImageUrl:
      'https://cdn.game.tv/images/meet-tourney/leaderboard-desk.png',
    mobImageUrl: 'https://cdn.game.tv/images/meet-tourney/leaderboard-mob.png',
  },
  tiersSection: {
    content: {
      title: 'Role',
      contents: [
        'Gdy twoi gracze wygrywają, awansują na kolejne poziomy ligi i zdobywają różne profity. Po zdobyciu złotego poziomu kwalifikują się do krajowej tabeli liderów i mogą zdobywać sponsoring co miesiąc, pozostając w 8 najlepszych graczy. Gracze mogą zobaczyć swoje oceny w swoich profilach lub wywołując polecenie „!myrating”.',
      ],
    },
    graphContent: {
      previousTitle: 'Poprzednio',
      nextTitle: 'Następnie',
      perksTitle: 'Profity',
      forTitle: 'DLA',
      graphList: [
        {
          type: 'brąz',
          imageCaption: 'Brąz',
          imageAlt: 'Brąz',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: 'ELO 800 - 1300',
          perks: ['Ekskluzywne emotikony Tourney', 'Profile i odznak'],
        },
        {
          type: 'srebr',
          imageCaption: 'Srebro',
          imageAlt: 'Srebro',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: 'ELO 1301 - 1800',
          perks: ['Odznaka profilu zweryfikowanego'],
        },
        {
          type: 'złoto',
          imageCaption: 'Złoto',
          imageAlt: 'Złoto',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: 'ELO 1800+',
          perks: ['Ekskluzywne emotikony Tourney'],
        },
      ],
    },
  },
};
