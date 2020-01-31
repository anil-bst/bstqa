import { ISponsorshipsLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const SponsorshipsLocalesItalian: ISponsorshipsLocale = {
  metadata: {
    title: 'Sponsorizzazioni Esport mobile con Tourney e Game.tv',
    description: 'Sponsorizzazioni Esport mobile con Tourney e Game.tv',
  },
  sponsorshipSection: {
    title: `Sponsorizzazioni Esport per la tua community`,
    contents: [],
    imageUrl: `https://cdn.game.tv/images/meet-tourney/sponsorship-banner.png`,
  },
  playSponsorSection: {
    blocks: [
      {
        title: 'In che modo i giocatori vengono sponsorizzati?',
        contents: [
          `Quando gestisci una lega all'interno della tua comunità, Tourney tiene traccia delle prestazioni di ogni giocatore in tutte le comunità con Tourney installato. I migliori 8 giocatori in ogni paese alla fine di ogni stagione riceveranno una sponsorizzazione da $ 500 al mese ogni mese.`,
          `Come bonus per la community che ha aiutato questi giocatori a crescere, anche la community riceverà un premio esclusivo!`,
        ],
        imageUrl: `https://cdn.game.tv/images/meet-tourney/get-sponsorship.png`,
        imageAlt: `Fatti sponsorizzare`,
      },
      {
        title: 'Sponsorizzazione',
        contents: [
          `Man mano che i giocatori competono nella lega della tua comunità, avanzeranno ruoli guadagnando vari vantaggi. Una volta raggiunto il ruolo Argento, si qualificano per la classifica nazionale. Ogni mese è una nuova stagione in cui scegliamo i migliori 8 giocatori dalla classifica nazionale. Se la tua community ha membri in tutto il mondo, va bene lo stesso. I giocatori dovranno verificare il loro paese di residenza nei loro profili e ti invitiamo ad aiutare la tua community a farlo.`,
        ],
        imageUrl: `https://cdn.game.tv/images/meet-tourney/sponsorship.png`,
        imageAlt: `Sponsorizzazione`,
      },
    ],
  },
  verifiedBadgeSection: {
    blocks: [
      {
        title: 'Badge verificato',
        contents: [
          `I giocatori che raggiungo Silver saranno in grado di ottenere "Verificato" e un badge speciale sulla loro pagina del profilo che tutti potranno vedere. Solo i giocatori "verificati" potranno partecipare a Argento e guadagnare una sponsorizzazione.`,
        ],
        imageUrl: `https://cdn.game.tv/images/meet-tourney/verified-badge.png`,
        imageAlt: `Badge verificato`,
      },
      {
        title: 'Leghe',
        contents: [
          `Tourney trasformerà la tua community in un campionato a parte. I giocatori competeranno negli eventi che corri usando uHost o automaticamente attraverso aiHost. Tourney notifica ai giocatori le loro prestazioni e il loro ruolo tramite comandi in chat o i giocatori possono guardare i loro profili su Game.tv/users.`,
        ],
        imageUrl: `https://cdn.game.tv/images/meet-tourney/leagues-spons.png`,
        imageAlt: `Leghe`,
      },
    ],
  },
  leaderboardSection: {
    title: `Classifica nazionale`,
    contents: [
      `I giocatori della tua comunità avranno una classifica nella tua lega della comunità, ma potranno anche controllare la loro posizione nella classifica nazionale sui loro profili Game.tv o usando il comando '!Myposition'. Solo i giocatori verificati possono raggiungere la classifica nazionale.`,
    ],
    desktopImageUrl:
      'https://cdn.game.tv/images/meet-tourney/leaderboard-desk.png',
    mobImageUrl: 'https://cdn.game.tv/images/meet-tourney/leaderboard-mob.png',
    imageAlt: `Classifica nazionale`,
  },
  tiersSection: {
    content: {
      title: 'Ruoli',
      contents: [
        `Man mano che i tuoi giocatori vincono, avanzano nelle classifiche e guadagnano vari vantaggi. Una volta raggiunto il livello Gold, si qualificano per la classifica Nazionale e possono guadagnare una sponsorizzazione ogni mese rimanendo tra i primi 8 posti. I giocatori possono vedere le loro valutazioni nei loro profili o usando il comando '!Myrating'.`,
      ],
    },
    graphContent: {
      previousTitle: 'Precedente',
      nextTitle: 'Prossimo',
      perksTitle: 'Vantaggi',
      forTitle: 'PER',
      graphList: [
        {
          type: 'bronze',
          statusText: '',
          imageCaption: 'Bronzo',
          imageAlt: 'Bronzo',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: 'ELO 800 - 1300',
          perks: ['Emoji di torneo esclusive', 'Profili e badge'],
        },
        {
          type: 'silver',
          statusText: '',
          imageCaption: 'Argento',
          // isPreviousPerkExcluded: true,
          imageAlt: 'Argento',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: 'ELO 1301 - 1800',
          perks: ['Badge del profilo verificato'],
        },
        {
          type: 'gold',
          statusText: 'Prossimamente',
          imageCaption: 'Oro',
          imageAlt: 'Oro',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: 'ELO 1800+',
          perks: ['Qualificati per le classifiche nazionali'],
        },
      ],
    },
  },
};
