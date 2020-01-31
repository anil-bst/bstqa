import { IHomeLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.ITALIAN;
// tslint:disable: max-line-length
export const HomeLocaleItalian: IHomeLocale = {
  metadata: {
    title:
      'Tourney - Esport Discord Bot Alimentato ad Intelligenza Artificiale',
    description:
      'Ospita e gestisci migliaia di tornei Esport mobile in qualsiasi community gaming con il nostro bot torneo, Tourney.',
  },
  heroSection: {
    heading: 'Incontra Tourney',
    content: `L'assistente Esport alimentato ad AI. Gestisce il tuo torneo in modo che tu possa concentrarti sui tuoi utenti`,
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/global.png',
        logoExtraClasses: 'global-logo',
        link: '/user',
        name: 'Launch App',
        extraClasses: 'alternate-background',
      },
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        logoExtraClasses: 'discord-logo',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Invita Tourney',
      },
    ],
    discoverButtonTitle: 'Scopri di più',
  },
  whyTourneySection: {
    heading: 'Perché Tourney',
    content:
      'È difficile organizzare un torneo per la tua comunità. Tenere traccia di chi gioca contro chi, a quale lobby partecipare, quali sono i matchup più belli, dimostrando chi ha vinto - è molto da fare. Tourney organizzerà i tuoi tornei come assistente o completamente da solo in base alla tua community. La sua potente AI e le sue funzionalità possono aiutarti a costruire una community più forte e più divertente.',
  },
  uHostSection: {
    heading: 'uHost, uHost AI-Assistant e AI-Host',
    content:
      'Tre modalità principali del torneo ti danno piena libertà nel modo in cui giochi.',
    hostTypes: [
      {
        heading: 'UHost',
        imageAlt: 'UHost',
        content:
          'Scegli da un modello di torneo o personalizza il tuo. Pubblicare. Poof, Tourney creerà tutti i canali e DM i ruoli che vuoi far girare la palla.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost.png',
      },
      {
        heading: 'uHost AI-Assistant',
        imageAlt: 'uHost AI-Assistant',
        content:
          'Il torneo ti aiuta a moderare il tuo torneo e ti fornisce una guida per ogni giocatore tra una partita e molto altro.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost-assistant.png',
      },
      {
        heading: 'Host AI',
        imageAlt: 'aiHost',
        content: `Tourney sceglierà il gioco, il tempo, il formato ed eseguirà il torneo da solo dall'inizio alla fine.`,
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/ai-Host.png',
      },
    ],
    templateSection: {
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/templates.png',
      imageAlt: 'Templates',
      heading: 'Modelli',
      content:
        'Il torneo viene fornito con dozzine di modelli di torneo preconfigurati in modo da poter fare clic su Pubblica e vai.',
    },
    messagingSection: {
      imageAlt: 'DM e Messaggi',
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/dms.png',
      heading: 'DM e Messaggi',
      content: `Tourney può inviare messaggi relativi a ruoli specifici del gioco o qualsiasi ruolo tu scelga di avvisarli di un nuovo torneo. Tutta l'organizzazione avviene in un nuovo canale creato da Tourney e tutti gli inviti alla lobby e il matchmaking vengono inviati tramite DM.`,
    },
  },
  perksSection: {
    heading: 'Vantaggi',
    content: 'Il torneo non sarebbe completo senza una tonnellata di vantaggi.',
    perksList: [
      {
        content:
          'Gestisci un sacco di tornei? Fantastico, abbiamo un sistema di livelli per premiarti.',
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/perk-tournaments.png',
        imageAlt: 'Livelli di torneo gratificanti',
      },
      {
        content:
          'Trasmetti in streaming i tuoi tornei? Perfetto, abbiamo un plugin OBS da visualizzare',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-obs.png',
        imageAlt: 'plug-in OBS interno per lo streaming',
      },
      {
        content:
          'Vuoi eseguire un campionato nel tuo server? Bingo, abbiamo anche quello!',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-league.png',
        imageAlt: 'Organizza le leghe!',
      },
    ],
  },
  graphsSection: {
    heading: 'Ruoli',
    content:
      'Più tornei corri con Tourney, più vantaggi sblocchi. Il tuo ruolo viene visualizzato nella classifica sul server Discord Game.tv e ricevi ogni set di vantaggi una volta che passi al ruolo successivo.',
    graphContent: {
      previousTitle: 'Precedente',
      nextTitle: 'Il prossimo',
      perksTitle: 'Vantaggi',
      forTitle: 'PER',
      graphList: [
        {
          type: 'bronze',
          imageCaption: 'Bronzo',
          imageAlt: 'Bronzo',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: '1 - 5 tornei a settimana',
          perks: [
            'Emoji di torneo esclusive',
            'Profili e badge',
            'Unlock Tourney AI',
          ],
        },
        {
          type: 'silver',
          imageCaption: 'Argento',
          imageAlt: 'Argento',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: '6 - 10 tornei a settimana',
          perks: ['Plugin OBS di base', 'Sblocca Tourney AI'],
        },
        {
          type: 'gold',
          imageCaption: 'Oro',
          imageAlt: 'Oro',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration:
            'Run a league with 300 or more unique participants/season',
          perks: ['Idoneo per la sponsorizzazione del premio'],
        },
      ],
    },
  },
  tourneyEmotesSection: {
    heading: 'Emoji di Tourney',
    content:
      'Sbloccato in Bronzo, ottieni 42 incredibili emoji ad alta definizione da usare nel tuo server. Sono pre-dimensionati, impertinenti e pronti a partire.',
  },
  profilesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/profiles.png',
        heading: 'Profili',
        imageAlt: 'Profili',
        content:
          'Sbloccato in Bronzo, i giocatori nei tuoi tornei ottengono automaticamente profili che possono personalizzare. Ogni profilo mostra le partite giocate, il record di vittorie / sconfitte e la valutazione del giocatore. Le valutazioni dei giocatori aiutano con il matchmaking e la progressione della lega.',
      },
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/badges.png',
        heading: 'Badge',
        imageAlt: 'Badge',
        content:
          'Vinci partite e guadagna badge per mostrare le tue abilità. Man mano che il tuo ELO aumenta o vinci tornei e premi, guadagni badge esclusivi nel tuo profilo che a volte vengono con alcuni vantaggi aggiuntivi super segreti ed esclusivi.',
        reverse: true,
      },
    ],
  },
  tourneyAiSection: {
    heading: 'Torneo AI',
    content1:
      'Una volta colpito Gold, sblocchi AI-Host. Abilita AI-Host e Tourney possono organizzare automaticamente tornei nella tua community. Tieni presente che solo la maggior parte dei tornei conta per la tua progressione di livello. I tornei AI-Host non contano (ma sono fantastici e dovresti gestirli insieme a uHost). ',
    content2: '',
  },
  leaguesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/league.png',
        heading: 'Leghe',
        imageAlt: 'Leghe',
        content: `Sbloccato in oro, Tourney può eseguire un'intera lega nel tuo server. I giocatori sul tuo server avranno l'opportunità di competere su un sistema di livelli paralleli e guadagnare una sponsorizzazione mensile se si classificano tra i primi 8 nelle loro classifiche nazionali.`,
      },
    ],
  },
  getBoostedSection: {
    heading: 'Ottieni un boost',
    content:
      // tslint:disable-next-line: quotemark
      `Raggiungi Silver e non daremo al tuo server Discord non uno, ma due boost per procurarti  quei dolci vantaggi di livello 1. Finché parteciperai a sette o più tornei  ogni settimana (dal lunedì alla domenica), continueremo a potenziare il tuo server. Se scendi al di  sotto di sette tornei ogni settimana, potremmo rimuovere i tuoi boost fino a quando non  torni a sette o più. Inoltre, sblocchi la possibilità di creare  leghe di prova per la tua comunità usando l'IA di Tourney.   `,
    imgDesktopUrl: 'https://cdn.game.tv/images/meet-tourney/get-boosted.png',
    imgMobile1Url:
      'https://cdn.game.tv/images/meet-tourney/get-boosted-mob1.png',
    imgMobile2Url:
      'https://cdn.game.tv/images/meet-tourney/get-boosted-mob2.png',
    backgroundImgUrl:
      'https://cdn.game.tv/images/meet-tourney/get-boosted-bg.png',
    getBoostedLevels: {
      perks: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-white.png',
        heading: 'Vantaggi di livello 1:',
        mainlabel: 'sbloccati',
        subheading: 'I vantaggi del server potenziato includono -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/emoji.png',
            label: '+50 slot emoji server (per un totale di 100)',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/audio.png',
            label: 'Qualità audio 128 Kbps',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/gif-icon.png',
            label: 'Icona del server animato',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/server.png',
            label: 'Sfondo invito server personalizzato',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/live.png',
            label: 'Streaming live 720p 60fps',
          },
        ],
      },
      boostedServer: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-gold.png',
        heading: 'Qualificarsi per un server potenziato',
        subheading: 'Cosa hai bisogno di sapere -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'I tornei devono essere UHost o uHost AI-Assistant, i tornei AI-Host non  contano ai fini della media settimanale.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'I tornei devono avere un tasso di riempimento minimo del 50% per qualificarsi. (questo significa che se un  torneo ha sedici slot, almeno otto persone devono giocare affinché il tuo  torneo conti alla tua media settimanale.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Esaminiamo i tuoi tornei medi a settimana. Correre tre tornei un  giorno e quattro su un altro equivale a correre un torneo ogni giorno.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'I potenziamenti possono essere rimossi se la media del torneo scende al di sotto dei sette in una determinata  settimana dal lunedì al venerdì (ora del Pacifico).',
          },
        ],
      },
    },
  },
  prizeSponsorshipSection: {
    items: [
      {
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/prize-sponsorships.png',
        heading: 'Prize Sponsorships',
        imageAlt: 'LeagPrize Sponsorshipsues',
        content:
          'Once you reach Gold by running a league within your community, we will sponsor the league prizes for every calendar-month long season. Prizes will come from our awesome partners like MSI, Intel, and hundreds of game developers and could include cash, gift cards, hardware, merchandise, or in-game items. ',
      },
    ],
  },
  availableGamesSection: {
    heading: 'Giochi disponibili',
    content: 'Più settimanali aggiunti',
    viewMoreGames: 'Vedi di più',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Invita il torneo',
      },
    ],
  },
  gamelink: `/${language}/find-tournaments`,
};
