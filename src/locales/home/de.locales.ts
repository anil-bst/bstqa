import { IHomeLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.GERMAN;
export const HomeLocaleGerman: IHomeLocale = {
  metadata: {
    title: 'Tourney - Esports-Discord-Bot angetrieben von einer KI',
    description:
      'Veranstalte Tausende von Mobile-Esports-Turnieren in jeder Game-Community mit unserem Turnier-Bot, Tourney.',
  },
  heroSection: {
    heading: 'Lerne Tourney kennen',
    content:
      'Der Esports-Assistent angetrieben von einer KI. Er leitet dein Turnier, damit du dich auf deine Community konzentrieren kannst',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/global.png',
        logoExtraClasses: 'global-logo',
        link: '/user',
        name: 'App starten',
        extraClasses: 'alternate-background',
      },
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        logoExtraClasses: 'discord-logo',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Tourney einladen',
      },
    ],
    discoverButtonTitle: 'Entdecke mehr',
  },
  whyTourneySection: {
    heading: 'Warum Tourney',
    content:
      'Es ist schwierig, ein Turnier für deine Community durchzuführen. Behalte den Überblick darüber wer gegen wen spielt, welcher Lobby man beitreten muss, was die fairsten Matchups sind, wer gewinnt - das ist eine Menge. Basierend auf deiner Community organisiert Tourney deine Turniere entweder als Assistent oder ganz alleine. Seine mächtige KI und andere Features können dir helfen, eine stärkere, unterhaltsamere Community aufzubauen.',
  },
  uHostSection: {
    heading: 'uHost, uHost KI-Assistant, und KI-Host',
    content:
      'Drei Hauptturniermodi geben dir völlige Freiheit bei der Verwaltung deiner Spiele.',
    hostTypes: [
      {
        heading: 'uHost',
        imageAlt: 'uHost',
        content:
          'Wähle aus einer Turniervorlage, oder passe deine eigenen an. Veröffentlichen. Zack, Tourney erstellt alle Kanäle und sendet DMs an ausgewählte Rollen, um den Ball ins Rollen zu bringen.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost.png',
      },
      {
        heading: 'uHost KI-Assistant',
        imageAlt: 'uHost AI-Assistant',
        content:
          'Tourney hilft bei der Moderation des Turniers, gibt jedem Spieler Anweisungen zwischen den Matches und vieles mehr.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost-assistant.png',
      },
      {
        heading: 'KI-Host',
        imageAlt: 'aiHost',
        content:
          'Tourney wird das Spiel, die Zeit und das Format auswählen und das Turnier von Anfang bis Ende komplett selbstständig durchführen.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/ai-Host.png',
      },
    ],
    templateSection: {
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/templates.png',
      imageAlt: 'Templates',
      heading: 'Vorlagen',
      content:
        'Tourney wird mit Dutzenden vorkonfigurierten Turniervorlagen ausgeliefert. Du musst nur auf die Schaltfläche "Veröffentlichen" klicken, um zu starten.',
    },
    messagingSection: {
      imageAlt: 'DMs and Messaging',
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/dms.png',
      heading: 'DMs und Messaging',
      content:
        'Tourney kann Benutzern mit gamespezifischen Rollen, oder den von dir ausgewählten Rollen Nachrichten über ein neues Turnier senden. Die gesamte Organisation findet in einem neuen von Tourney eingerichteten Kanal statt, und Einladungen in die Lobby und Matchmaking werden als DM gesendet.',
    },
  },
  perksSection: {
    heading: 'Perks',
    content: 'Ohne jede Menge Perks wäre Tourney nicht komplett.',
    perksList: [
      {
        content:
          'Du führst viele Turniere durch? Großartig, wir haben ein Tier-System, das dich belohnt.',
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/perk-tournaments.png',
        imageAlt: 'Belohnende Turnier-Tiers',
      },
      {
        content:
          'Du streamst deine Turniere? Perfekt, wir haben ein OBS-Plugin zum Anzeigen.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-obs.png',
        imageAlt: 'Internes OBS-Plugin zum Streamen',
      },
      {
        content:
          'Möchtest du eine Liga auf deinem Server organisieren? Bingo, das haben wir auch!',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-league.png',
        imageAlt: 'Organisiere Ligen!',
      },
    ],
  },
  graphsSection: {
    heading: 'Rollen',
    content:
      'Je mehr Turniere du mit Tourney organisierst, desto mehr Vorteile erhältst du. Deine Rolle wird in der Bestenliste auf dem Game.tv-Discord-Community angezeigt und du erhältst alle Perks, sobald du zur nächsten Rolle aufsteigst.',
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
          forDuration: '1 - 6 Turniere pro Woche',
          perks: [
            'Exklusive Tourney-Emotes',
            'Profile und Badge',
            'Schalte Tourney-KI frei',
          ],
        },
        {
          type: 'silver',
          imageCaption: 'Silber',
          imageAlt: 'Silver',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: '7+ Turniere pro Woche',
          perks: [
            '2 Nitro-Boosts für deinen Discord-Server',
            'Schalte Ligen frei',
          ],
        },
        {
          type: 'gold',
          imageCaption: 'Gold',
          imageAlt: 'Gold',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration:
            'Führe eine Liga mit 300 oder mehr einzigartigen Teilnehmern/Saison',
          perks: ['Garantierte Ligapreis-Patenschaften'],
        },
      ],
    },
  },
  tourneyEmotesSection: {
    heading: 'Tourney-Emotes',
    content:
      'In Bronze freigeschaltet, erhältst du 42 erstaunliche, hochauflösende Emotes, die du in deiner Community verwenden kannst. Sie sind vorgefertigt, frech und bereit für den Einsatz.',
  },
  profilesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/profiles.png',
        heading: 'Profile',
        imageAlt: 'Profiles',
        content:
          'In Bronze freigeschaltet, erhalten Teilnehmer an deinen Turnieren automatisch Profile, die sie anpassen können. Jedes Profil zeigt die Spiele, die Anzahl der Siege/Verluste und das Rating des Spielers. Spieler-Ratings helfen beim Matchmaking und auf Ligaebene.',
      },
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/badges.png',
        heading: 'Badges',
        imageAlt: 'Badges',
        content:
          'Gewinne Spiele und verdiene Badges, um deine Fähigkeiten zu demonstrieren. Wenn deine ELO steigt oder du Turniere und Preise gewinnst, erhältst du exklusive Badges in deinem Profil, die manchmal mit einigen supergeheimen und exklusiven zusätzlichen Vorteilen verbunden sind.',
        reverse: true,
      },
    ],
  },
  tourneyAiSection: {
    heading: 'Tourney-KI',
    content1:
      'Sobald du Bronze erreichst, schaltest du KI-Host frei. Aktiviere KI-Host und Tourney kann automatisch Turniere in deiner Community veranstalten. Denke daran, dass nur uHost-Turniere für deine Tier-Fortschritte zählen. AI-Host-Turniere zählen nicht (aber sie sind großartig und du solltest sie zusammen mit uHost veranstalten).',
    content2: '',
  },
  leaguesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/league.png',
        heading: 'Ligen',
        imageAlt: 'Leagues',
        content:
          'In Gold freigeschaltet, kann Tourney eine ganze Liga auf deinem Server durchführen. Spieler auf deinem Server haben die Möglichkeit, sich in einem Parallel-Tier-System zu messen und monatlich ein Sponsoring zu erhalten, wenn sie in ihren nationalen Bestenlisten unter den Top-8 landen.',
      },
    ],
  },
  getBoostedSection: {
    heading: 'Werde geboosted',
    content:
      'Erreiche Silber und wir werden deinem Discord-Server nicht einen, sondern zwei Boosts geben, um dir diese süßen Level 1-Vorteile zu verschaffen. Solange du sieben oder mehr Turniere pro Woche (Montag bis Sonntag) durchführst, werden wir deinen Server weiter aufrüsten. Wenn du jede Woche unter sieben Turniere fällst, können wir deine Boosts entfernen, bis du wieder bei sieben oder mehr bist. Darüber hinaus kannst du mithilfe der KI von Tourney Ligen für deine Community erstellen.',
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
        heading: 'Level 1 Perks',
        mainlabel: 'Freigeschaltet',
        subheading: 'zu den Boosted Server Perks gehören -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/emoji.png',
            label: '+50 Server Emoji Slots (für insgesamt 100)',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/audio.png',
            label: '128 Kbps Audio Qualität',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/gif-icon.png',
            label: 'Animiertes Serversymbol',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/server.png',
            label: 'Benutzerdefiniertes Servereinladungs-Hintergrundbild',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/live.png',
            label: '720p 60fps Go Live-Streams',
          },
        ],
      },
      boostedServer: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-gold.png',
        heading: 'Qualifikation für einen Boosted Server',
        subheading: 'Was du wissen musst -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Turniere müssen uHost oder uHost KI-Assistant sein, KI-Host-Turniere zählen nicht zu deinem wöchentlichen Durchschnitt.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Turniere müssen eine Mindestfüllrate von 50% haben, um sich zu qualifizieren. (Dies bedeutet, wenn das Turnier 16 Slots hat, müssen mindestens 8 Spieler in deinem Turnier spielen damit es zu deinem wöchentlichen Durchschnitt gezählt wird.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Wir sehen uns deine durchschnittlichen Turniere pro Woche an. Das Ausführen von drei Turnieren an einem Tag und vier an einem anderen ist dasselbe wie das Ausführen eines Turniers pro Tag.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Boosts können entfernt werden, wenn dein Turnierdurchschnitt in einer bestimmten Woche von  Montag bis Freitag (pazifische Zeit) unter sieben fällt.',
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
        heading: 'Preissponsoring',
        imageAlt: 'Preissponsoring-Ligen',
        content:
          'Sobald du Gold erreichst, indem du eine Liga in deiner Community leitest, werden wir die Ligapreise für jede Kalendermonatssaison sponsern. Die Preise werden von unseren großartigen Partnern wie MSI, Intel und Hunderten von Spieleentwicklern verliehen und können Bargeld, Geschenkkarten, Hardware, Waren oder Gegenstände aus dem Spiel umfassen.',
      },
    ],
  },
  availableGamesSection: {
    heading: 'Verfügbare Spiele',
    content: 'Weitere wöchentlich hinzugefügt',
    viewMoreGames: 'Mehr ansehen',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Tourney einladen',
      },
    ],
  },
  gamelink: `/${language}/find-tournaments`,
};
