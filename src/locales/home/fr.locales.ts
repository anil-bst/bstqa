// tslint:disable: quotemark
import { IHomeLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.FRENCH;
export const HomeLocaleFrench: IHomeLocale = {
  metadata: {
    title: "Tourney - Bot Discord D'Esports Propulsé par une IA",
    description:
      "Organisez et gérez des milliers de tournois Esports Mobiles dans n'importe quelle communauté de jeu avec notre bot, Tourney.",
  },
  heroSection: {
    heading: 'Rencontrer Tourney',
    content:
      "L'assistant Esports propulsé par l'IA. Il dirige votre tournoi afin que vous puissiez vous concentrer sur votre communauté",
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/global.png',
        logoExtraClasses: 'global-logo',
        link: '/user',
        name: "Démarrer l'application",
        extraClasses: 'alternate-background',
      },
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        logoExtraClasses: 'discord-logo',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Inviter Tourney',
      },
    ],
    discoverButtonTitle: 'En Savoir Plus',
  },
  whyTourneySection: {
    heading: 'Pourquoi Tourney',
    content:
      "Organiser un tournoi pour votre communauté n'est pas simple. Garder une trace de qui joue contre qui, de quel lobby rejoindre, quels sont les matchs les plus équitables, prouver qui gagne - c'est beaucoup. Tourney organisera vos tournois soit en tant qu'assistant, soit entièrement par lui-même, en fonction de votre communauté. Son IA puissante et ses fonctionnalités peuvent vous aider à bâtir une communauté plus forte et amusante. ",
  },
  uHostSection: {
    heading: 'uHost, uHost Assistant-IA, et IA-Host',
    content:
      'Trois mode de tournoi principaux vous offrent une liberté totale au niveau de la gestion de vos jeux.',
    hostTypes: [
      {
        heading: 'uHost',
        imageAlt: 'uHost',
        content:
          'Choisissez parmi un modèle de tournoi ou personnalisez le vôtre. Publier. Pouf, Tourney va créer tous les salons et envoyer des MP aux rôles pour que tout se passe bien.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost.png',
      },
      {
        heading: 'uHost AI-Assistant',
        imageAlt: 'uHost AI-Assistant',
        content:
          'Tourney vous aide à modérer votre tournoi et fournit des indications à chaque joueur entre les matches et bien plus encore.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost-assistant.png',
      },
      {
        heading: 'Host-IA',
        imageAlt: 'aiHost',
        content:
          "Tourney choisira le jeu, l'heure, le format et gérera le tournoi de lui-même du début à la fin.",
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/ai-Host.png',
      },
    ],
    templateSection: {
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/templates.png',
      imageAlt: 'Templates',
      heading: 'Modèles de tournoi',
      content:
        'Tourney fournit des dizaines de modèles de tournois pré-configurés pour que vous puissiez simplement cliquer sur Publier et commencer.',
    },
    messagingSection: {
      imageAlt: 'DMs and Messaging',
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/dms.png',
      heading: 'DM et Messagerie',
      content:
        "Tourney peut envoyer des messages à des rôles spécifiques ou à tout autre rôle que vous choisissez pour les avertir d'un nouveau tournoi. Toute l'organisation se déroule dans un nouveau salon créé par Tourney et toutes les invitations dans ces salons sont envoyées via DM.",
    },
  },
  perksSection: {
    heading: 'Paliers',
    content: "Tourney ne serait pas complet sans une tonne d'avantages",
    perksList: [
      {
        content:
          'Vous organisez une tonne de tournois? Nous avons un système à plusieurs niveaux pour vous récompenser.',
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/perk-tournaments.png',
        imageAlt: 'Des Niveaux de Tournois Enrichissants',
      },
      {
        content:
          'Vous streamez vos tournois? Parfait, nous avons un plugin OBS',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-obs.png',
        imageAlt: 'Plugin OBS Interne pour le streaming',
      },
      {
        content:
          'Vous voulez organiser une ligue sur votre serveur? Bingo, nous avons cela aussi!',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-league.png',
        imageAlt: 'Organisez des Ligues!',
      },
    ],
  },
  graphsSection: {
    heading: 'Rôles',
    content:
      "Plus vous organisez des tournois avec Tourney, plus vous débloquez des perks, des avantages. Votre rôle apparaît dans le classement sur la communauté de Discord Game.tv et vous recevez chaque ensemble d'avantages une fois que vous passez au rôle suivant.",
    graphContent: {
      previousTitle: 'Précédent ',
      nextTitle: 'Suivant',
      perksTitle: 'Paliers',
      forTitle: 'POUR',
      graphList: [
        {
          type: 'bronze',
          imageCaption: 'Bronze',
          imageAlt: 'Bronze',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: '1 - 6 Tournois par Semaine',
          perks: [
            'Émoticônes de Tourney Exclusives',
            'Profils et badge',
            "Débloque l'IA de Tourney",
          ],
        },
        {
          type: 'silver',
          imageCaption: 'Argent',
          imageAlt: 'Silver',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: '+7 Tournois par Semaine',
          perks: [
            '2 boosters Nitro pour votre serveur Discord',
            'Déverrouillez les Ligues',
          ],
        },
        {
          type: 'gold',
          imageCaption: 'Or',
          imageAlt: 'Gold',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration:
            'Organiser une ligue avec 300 participants uniques ou plus / saison',
          perks: ['Sponsoring des prix de ligue garantie'],
        },
      ],
    },
  },
  tourneyEmotesSection: {
    heading: 'Émoticônes de Tourney',
    content:
      'Débloqué au Bronze, vous obtenez 42 émotes étonnants et en haute définition à utiliser dans votre communauté. Ils sont pré-dimensionnés, impertinents et prêts à partir.',
  },
  profilesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/profiles.png',
        heading: 'Profils',
        imageAlt: 'Profiles',
        content:
          "Débloqué avec le niveau Bronze, les participants de vos tournois obtiennent automatiquement des profils qu'ils peuvent personnaliser. Chaque profil montre les jeux, le nombre de victoires/défaites et le classement du joueur. Les notes des joueurs aident au niveau matchmaking et la ligue. ",
      },
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/badges.png',
        heading: 'Badges',
        imageAlt: 'Badges',
        content:
          'Gagnez des parties et gagnez des badges afin de montrer votre skill. Au fur et à mesure que votre ELO augmente ou que vous remportez des tournois et des prix, vous gagnez des badges exclusifs dans votre profil qui peuvent parfois apporter des avantages secrets supplémentaires. ',
        reverse: true,
      },
    ],
  },
  tourneyAiSection: {
    heading: 'Tourney IA',
    content1:
      "Une fois que vous avez atteint le Bronze, vous déverrouillez AI-Host. Activer AI-Host et Tourney pourra automatiquement organiser des tournois dans votre communauté. Gardez à l'esprit que seuls les tournois uHost comptent pour votre progression de niveau. Les tournois AI-Host ne comptent pas (mais ils sont géniaux et vous devriez en organiser en même temps que les uHost).",
    content2: '',
  },
  leaguesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/league.png',
        heading: 'Ligues',
        imageAlt: 'Leagues',
        content:
          "Débloqué au niveau Or, Tourney peut gérer une ligue entière sur votre serveur. Les joueurs de votre serveurs auront la possibilité de s'affronter sur un système de niveaux parallèles et de gagner un sponsoring mensuel s'il se classent parmi les 8 premiers de leur classement national.",
      },
    ],
  },
  getBoostedSection: {
    heading: 'Soyez boosté',
    content:
      "Atteignez l'Argent et nous donnerons à votre serveur Discord non pas un, mais deux boosts pour vous offrir de bons Avantages de Niveau 1. Tant que vous organisez sept tournois ou plus chaque semaine (du lundi au dimanche), nous continuerons à booster votre serveur. Si vous descendez en dessous de sept tournois par semaine, nous pouvons supprimer vos boosts jusqu'à ce que vous reveniez à sept ou plus. De plus, vous débloquez la possibilité de créer des ligues pour votre communauté à l'aide de l'IA Tourney.",
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
        heading: 'Palier Niveau 1',
        mainlabel: 'Débloqué',
        subheading: "Les avantages d'un serveur boosté incluent -",
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/emoji.png',
            label: "+50 emplacements d'emoji de serveur (pour un total de 100)",
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/audio.png',
            label: 'Qualité audio de 128 Kbps',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/gif-icon.png',
            label: 'Icône de serveur animée',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/server.png',
            label: "Bannière d'invitation de serveur personnalisé",
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/live.png',
            label: 'Diffusion en direct en 720p 60fps',
          },
        ],
      },
      boostedServer: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-gold.png',
        heading: "Condition pour qu'un serveur soit boosté",
        subheading: 'Que devez-vous savoir -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Les tournois doivent être des uHost ou uHost AI-Assistant, les tournois AI-Host ne compte dans votre moyenne hebdomadaire.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              "Les tournois doivent avoir un taux de remplissage d'au moins 50% pour se qualifier. (cela signifie que si un tournoi a seize places, au moins huit personnes doivent participer à votre tournoi pour compter dans votre moyenne hebdomadaire.",
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Nous examinons votre moyenne de tournois par semaine. Organiser trois tournois un jour et quatre sur un autre équivaut à organiser un tournoi chaque jour.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Les bonus peuvent être supprimés si la moyenne de vos tournois tombe en dessous de sept Du lundi au vendredi (heure du Pacifique).',
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
        heading: 'Sponsoring des Prix',
        imageAlt: 'Sponsoring des prix de ligue',
        content:
          "Une fois que vous atteignez l'Or en organisant une ligue au sein de votre communauté, nous parrainerons les prix de ligue pour chaque longue saison de mois civils. Les prix proviendront de nos formidables partenaires tels que MSI, Intel et des centaines de développeurs de jeux et pourraient inclure de l'argent, des cartes-cadeaux, du matériel, des marchandises ou des articles en jeu. ",
      },
    ],
  },
  availableGamesSection: {
    heading: 'Jeux disponibles',
    content: "Plus d'ajout chaque semaine",
    viewMoreGames: 'Voir plus',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Inviter Tourney',
      },
    ],
  },
  // tslint:disable-next-line: quotemark
  gamelink: `/${language}/find-tournaments`,
};
