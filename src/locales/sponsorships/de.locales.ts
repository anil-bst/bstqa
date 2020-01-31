import { ISponsorshipsLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const SponsorshipsLocalesGerman: ISponsorshipsLocale = {
  metadata: {
    title: 'Mobile Esports Sponsorings mit Tourney und Game.tv',
    description: 'Mobile Esports Sponsorings mit Tourney und Game.tv',
  },
  sponsorshipSection: {
    title: 'Esports Sponsorings für deine Community',
    contents: [],
    imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship-banner.png',
  },
  playSponsorSection: {
    blocks: [
      {
        title: 'Wie werden Spieler gesponsert?',
        contents: [
          'Wenn du eine Liga in deiner  Community durchführst, protokolliert Tourney die Leistung aller Spieler auf allen Servern, auf denen Tourney installiert ist. Die besten 8 Spieler in jedem Land erhalten am Ende jeder Saison ein Sponsoring von 500$ pro Monat.',
          'Als Bonus für die Community, die zum Wachstum dieser Spieler beigetragen hat, erhält die Community auch eine exklusive Belohnung!',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/get-sponsorship.png',
        imageAlt: 'Werde gesponsert',
      },
      {
        title: 'Sponsoring',
        contents: [
          'Wenn Spieler in der Liga deines Servers antreten, steigen sie auf und erhalten verschiedene Perks. Sobald sie das Gold-Level erreicht haben, qualifizieren sie sich für die nationale Bestenliste. Jeder Monat ist eine neue Saison, in der wir die besten 8 Spieler in der nationalen Bestenliste auswählen. Wenn dein Server Mitglieder auf der ganzen Welt hat, ist das auch in Ordnung. Die Spieler müssen ihr Wohnsitzland in ihrem Profil überprüfen. Wir empfehlen dir, deiner Community dabei zu helfen.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship.png',
        imageAlt: 'Sponsoring',
      },
    ],
  },
  verifiedBadgeSection: {
    blocks: [
      {
        title: 'Verifiziertes Badge',
        contents: [
          'Spieler, die Silber erreicht haben, können sich "verifizieren" lassen und erhalten ein spezielles Badge auf ihrer Profilseite, das jeder sehen kann. Nur ‘Verifizierte’ -Spieler können an Gold teilnehmen und sich ein Sponsoring verdienen.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/verified-badge.png',
        imageAlt: 'Verifiziertes Badge',
      },
      {
        title: 'Ligen',
        contents: [
          'Mit Tourney wird dein Server zu einer eigenen Liga. Die Spieler nehmen an Wettbewerben teil, die du mit uHost oder automatisch über kiHost durchführst. Tourney benachrichtigt die Spieler über ihre Leistung und Rolle entweder über Commands im Chat oder die Spieler können ihre Profile auf Game.tv/users einsehen.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/leagues-spons.png',
        imageAlt: 'Ligen',
      },
    ],
  },
  leaderboardSection: {
    title: 'Nationale Bestenliste',
    contents: [
      'Spieler in deiner Community haben einen Ranking in deiner Community-Liga, können aber auch ihre Position in ihrer nationalen Bestenliste in ihren Game.tv-Profilen oder mit dem Command "!myposition" überprüfen. Nur verifizierte Spieler können die nationale Bestenliste erreichen',
    ],
    desktopImageUrl:
      'https://cdn.game.tv/images/meet-tourney/leaderboard-desk.png',
    mobImageUrl: 'https://cdn.game.tv/images/meet-tourney/leaderboard-mob.png',
  },
  tiersSection: {
    content: {
      title: 'Rollen',
      contents: [
        `Wenn deine Spieler gewinnen, steigen sie in der Liga auf und verdienen verschiedene Perks. Sobald sie die Gold-Stufe erreicht haben, qualifizieren sie sich für die nationale Bestenliste und können sich jeden Monat ein Sponsoring verdienen, wenn sie in den Top-8-Positionen bleiben. Spieler können ihre Bewertungen in ihren Profilen oder durch Aufrufen des Commands "!myrating" sehen.`,
      ],
    },
    graphContent: {
      previousTitle: 'Zurück',
      nextTitle: 'Weiter',
      perksTitle: 'Perks',
      forTitle: 'FÜR',
      graphList: [
        {
          type: 'bronze',
          imageCaption: 'Bronze',
          imageAlt: 'Bronze',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: 'ELO 800 - 1300',
          perks: ['Exklusive Tourney-Emotes', 'Profile und Badge'],
        },
        {
          type: 'silber',
          imageCaption: 'Silber',
          imageAlt: 'Silber',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: ' ELO 1301 - 1800',
          perks: ['Verifiziertes Profil-Badge'],
        },
        {
          type: 'gold',
          imageCaption: 'Gold',
          imageAlt: 'Gold',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: 'ELO 1800+',
          perks: ['Exklusive Tourney-Emotes'],
        },
      ],
    },
  },
};
