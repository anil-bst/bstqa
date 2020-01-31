import { ISponsorshipsLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const SponsorshipsLocalesFrench: ISponsorshipsLocale = {
  metadata: {
    title: 'Mobile Esports Sponsors avec Tourney et Game.tv',
    description: 'Mobile Esports Sponsors avec Tourney et Game.tv',
  },
  sponsorshipSection: {
    title: 'Sponsoring Esports pour Votre Communauté',
    contents: [],
    imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship-banner.png',
  },
  playSponsorSection: {
    blocks: [
      {
        title: 'Comment les Joueurs Sont-ils Sponsorisés?',
        contents: [
          'Lorsque vous organisez une ligue dans votre communauté, Tourney traque les performances de tous les joueurs sur tous les serveurs sur lesquels il est installé. Les 8 meilleurs joueurs de chaque pays à la fin de chaque saison recevront un sponsoring de 500$/mois chaque mois. ',
          'En bonus pour la communauté qui a aidé ces joueurs à se développer, celle-ci recevra également une récompense exclusive!',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/get-sponsorship.png',
        imageAlt: 'Être Sponsorisé ',
      },
      {
        title: 'Parrainage',
        contents: [
          // tslint:disable-next-line: quotemark
          "Lorsque les joueurs s'affrontent dans la ligue de votre communauté, ils avanceront de niveau et gagneront des avantages divers. Une fois qu'ils ont atteint le niveau Or, il se qualifient pour le classement national. Chaque mois est une nouvelle saison où nous choisissons les 8 meilleurs joueurs du classement national. Si votre communauté a des membres dans le monde entier, c'est aussi bien. Les joueurs devront vérifier leur pays de résidence dans leur profil et nous vous encourageons à aider votre communauté à le faire.",
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship.png',
        imageAlt: 'Parrainage',
      },
    ],
  },
  verifiedBadgeSection: {
    blocks: [
      {
        title: 'Badge vérifié',
        contents: [
          'Les joueurs qui atteindront le niveau Argent pourront être «Vérifié» et obtenir un badge spécial sur leur page de profil afin que tout le monde puisse le voir. Seuls les joueurs «Vérifiés» pourront participer au niveau Or et gagner un parrainage.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/verified-badge.png',
        imageAlt: 'Badge vérifié',
      },
      {
        title: 'Ligues',
        contents: [
          'Tourney transformera votre serveur en une ligue à part. Les joueurs participeront aux événements que vous organisez en utilisant uHost ou automatiquement par aiHost. Tourney informe les joueurs de leurs performances et de leur rôle via des commandes dans le chat ou via leurs profils sur Game.tv/users.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/leagues-spons.png',
        imageAlt: 'Ligues',
      },
    ],
  },
  leaderboardSection: {
    title: 'Classement national',
    contents: [
      'Les joueurs de votre communauté auront un classement dans votre ligue communautaire mais pourront également vérifier leur position dans le classement national sur leurs profils Game.tv ou en utilisant la commande "!myposition". Seuls les joueurs vérifiés peuvent atteindre le classement national',
    ],
    desktopImageUrl:
      'https://cdn.game.tv/images/meet-tourney/leaderboard-desk.png',
    mobImageUrl: 'https://cdn.game.tv/images/meet-tourney/leaderboard-mob.png',
  },
  tiersSection: {
    content: {
      title: 'Rôles',
      contents: [
        `Au fur et à mesure que vos joueurs gagnent, ils progressent dans les niveaux de la ligue et gagnent divers avantages. Une fois qu'ils ont atteint le niveau Or, ils se qualifient pour le classement national et peuvent gagner un sponsoring chaque mois, si ils restent dans les 8 premières places. Les joueurs peuvent voir leurs notes dans leur profil ou en utilisant la commande ‘!myrating’.`,
      ],
    },
    graphContent: {
      previousTitle: 'Précédent ',
      nextTitle: 'Suivant',
      perksTitle: 'Perks',
      forTitle: 'POUR',
      graphList: [
        {
          type: 'bronze',
          imageCaption: 'Bronze',
          imageAlt: 'Bronze',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: 'ELO 800 - 1300',
          perks: ['Émoticônes de Tourney Exclusives', 'Profils et badge'],
        },
        {
          type: 'argent',
          imageCaption: 'Argent',
          imageAlt: 'Argent',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: 'ELO 1301 - 1800',
          perks: ['Badge de profil vérifié'],
        },
        {
          type: 'or',
          imageCaption: 'Or',
          imageAlt: 'Or',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: 'ELO 1800+',
          perks: ['Émoticônes de Tourney Exclusives'],
        },
      ],
    },
  },
};
