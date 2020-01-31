import { ICommunityTournamentsType } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.FRENCH;

export const CreateATournamentLocalesLocaleFrench: ICommunityTournamentsType = {
  metadata: {
    title: 'Comment Organiser des Tournois Esports Mobiles | Game.tv',
    description:
      // tslint:disable-next-line: quotemark
      "Lancez vos propres tournois et ligues en utilisant le bot Discord Tourney de Game.tv ou l'application Game.tv.",
  },
  heroSection: {
    heading: 'Créer - Héberger - Jouer',
    content:
      'Créez des tournois directement dans votre communauté Discord ou sur notre application en quelques étapes faciles',
    bannerDeskTopImageUrl: 'https://cdn.game.tv/create_tournament/banner.png',
    bannerMobImageUrl: 'https://cdn.game.tv/create_tournament/banner-mob.png',
  },
  discordSection: {
    heading: 'Discord',
    content:
      // tslint:disable-next-line: quotemark
      "Organiser des tournois au sein de votre communauté Discord signifie que les joueurs ne doivent jamais quitter votre serveur. Tout ce dont ils ont besoin pour s'inscrire, effectuer le check in et jouer se fait via des rôles et des MP personnalisés. Tourney s'occupe du matchmaking, ce qui signifie que les matchs sont équitables. Après le match, les joueurs peuvent vérifier leur classement et leur score GELO sur leur propre page de profil.",
    btnText: 'Inviter Tourney',
    steps: [
      {
        title: 'Installez Tourney et accédez au',
        linkString: 'tableau de bord',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step1.png',
        linkUrl: '/dashboard',
      },
      {
        title: 'Cliquez sur "Créer un tournoi" et choisissez votre jeu',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step2.png',
      },
      {
        title: 'Personnalisez le tournoi ou utilisez nos modèles existants',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step3.png',
      },
      {
        title:
          'Cliquez sur «Publier» et Tourney créera le lobby ou le bracket sur votre serveur Discord.',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step4.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/discord_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/discord.png',
  },
  gameSection: {
    heading: 'App Game.tv',
    content:
      // tslint:disable-next-line: quotemark
      "Si vous n'avez pas de serveur Discord ou souhaitez inviter des joueurs extérieurs à Discord, vous pouvez utiliser notre application pour créer des tournois. Tout comme pour Discord, Tourney créera, organisera et dirigera vos tournois. Vous et vos participants recevrez des notifications directement dans l'application sur les matchs à venir, le matchmaking, les mises à jour des brackets, etc. Vous pouvez également connecter votre compte Twitter et partager la progression de votre match ainsi que permettre aux gens de rejoindre directement via Twitter.",
    btnText:
      // tslint:disable-next-line: quotemark
      "Démarrer l'application",
    steps: [
      {
        title: 'Allez sur',
        linkString: 'App Game.tv',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step1.png',
        linkUrl: '/user',
      },
      {
        title:
          'Connectez-vous et cliquez sur le + dans la barre de contrôle en bas de votre écran',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step2.png',
      },
      {
        title: 'Personnalisez le tournoi ou utilisez nos modèles existants',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step3.png',
      },
      {
        title:
          'Cliquez sur «Publier» et Tourney créera le lobby ou le bracket sur votre serveur Discord.',
        imgUrl: 'https://cdn.game.tv/crete_tournament/step-4-1-new.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/game_global_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/game.png',
  },
  locales: `/${language}`,
};
