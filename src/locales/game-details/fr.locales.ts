// tslint:disable: quotemark
import { IGameDetailsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
import { HowToJoinFrench } from './../how-to-join/fr.locales';
const language = SupportedLocalesEnum.FRENCH;

export const GameDetailsLocalesFrench: IGameDetailsLocale = {
  metadata: {
    title: 'Rejoignez les Tournois Esports {{gameName}} |Game.tv',
    description:
      'Rejoignez les tournois {{gameName}} quotidiens organisés par des millions de communautés gaming dans le monde. ',
  },
  gameDetail:
    "Trouvez des tournois esports {{gameName}} organisés par les {{communityCount}} communautés du monde entier. Cliquez sur 'Rejoindre' pour participer au tournoi {{gameName}} . ",
  gameInfo: {
    title: 'Vous ne voyez pas de tournoi auquel vous aimeriez participer?',
    content: 'Créez le votre',
    linkUrl: `/${language}/create-a-tournament`,
    noTournamentsTitle:
      "Oups! Aucun tournoi à venir n'est disponible pour le moment!",
    noTournamentsContent: 'Voir tous les tournois disponibles',
    noTournamentsLink: 'En ligne ou Passé',
  },
  tournamentTitle: 'Tournois',
  platformStr: 'PLATEFORME',
  discord: 'DISCORD',
  vs: 'VS',
  joinHeading: 'REJOINDRE',
  viewMore: 'Afficher plus',
  tournamentTypes: {
    heading: '{{gameName}} Types de tournois',
    blocks: [
      {
        content:
          'Tournoi classique (style lobby) - Solo, Duo et Squad - 100 joueurs maximum',
        imageUrl: 'https://cdn.game.tv/tournaments/group-26.png',
      },
      {
        content: 'Match Rapide sur Erangel (style lobby) - Solo - 28 joueurs',
        imageUrl: 'https://cdn.game.tv/tournaments/group-27.png',
      },
      {
        content:
          'Match à mort par équipe (style lobby) - 2 équipes - 8 joueurs maximum',
        imageUrl: 'https://cdn.game.tv/tournaments/group-28.png',
      },
      {
        content: 'Mode infection (style lobby) - 12 joueurs',
        imageUrl: 'https://cdn.game.tv/tournaments/group-29.png',
      },
    ],
  },
  prizeTypes: {
    heading: 'Types de prix pour les tournois {{gameName}}',
    description:
      "Les prix pour ces tournois sont entièrement à la charge de l'hôte et certains hôtes peuvent organiser des tournois juste pour le plaisir, sans qu'il n'y ait de prix. Vous pouvez trouver les prix indiqués sur la page du tournoi. Voici quelques prix que les hôtes ont donnés pour divers tournois {{gameName}}.",
    blocks: [
      {
        content: 'Récompenses en cash',
        imageUrl: 'https://cdn.game.tv/tournaments/group-13.png',
      },
      {
        content: 'Codes de portefeuille Steam',
        imageUrl: 'https://cdn.game.tv/tournaments/group-24.png',
      },
      {
        content: 'Cartes cadeaux - Google play, Amazon, Steam et autres',
        imageUrl: 'https://cdn.game.tv/tournaments/group-23.png',
      },
      {
        // tslint:disable-next-line: quotemark
        content: "Codes d'abonnement - Netflix, Apple Music et Spotify",
        imageUrl: 'https://cdn.game.tv/tournaments/group-22.png',
      },
      {
        content: 'Et plus encore',
        imageUrl: 'https://cdn.game.tv/tournaments/group-20.png',
      },
    ],
  },
  joinTournament: {
    heading: 'Comment rejoindre un tournoi {{gameName}}',
    blocks: HowToJoinFrench.blocks,
  },
  startTournament: {
    heading: 'Comment démarrer un tournoi {{gameName}}',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'Étapes',
        stepsContent: [
          {
            // tslint:disable-next-line: quotemark
            stepItem:
              "<a href='/user' class='click-here'>Invitez le bot Tourney</a> sur votre serveur Discord, connectez-vous et cliquez sur «Autoriser»",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
          },
          {
            stepItem:
              'Dans le menu principal à gauche, cliquez sur le bouton «Créer un tournoi»',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'Choisissez parmi la grande variété de jeux de tournoi - Personnalisez les détails du tournoi en cliquant sur le bouton "personnaliser" ou cliquez sur "Publier maintenant" pour utiliser les modèles de tournoi prédéfinis',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/4.jpg',
          },
          {
            stepItem:
              'Sous personnaliser le tournoi, ajoutez une description, des règles et des prix personnalisés selon vos besoins',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/5.jpg',
          },
          {
            stepItem:
              'Une fois publié, le bot créera automatiquement les salons #tournament-info et #tournament-lobby sur votre serveur Discord; inscrivez-vous dans le salon textuel #tournament-lobby pour participer et vérifier si la création du tournoi {{gameName}} a réussi.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/6.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Application Web Game.tv',
        stepsHeading: 'Étapes',
        stepsContent: [
          {
            // tslint:disable-next-line: quotemark
            stepItem:
              "Visitez <a href='/user' class='click-here'>App Web</a> , cliquez sur «Connectez-vous avec Twitter / Discord» et cliquez sur «Autoriser»",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
          },
          {
            // tslint:disable-next-line: quotemark
            stepItem:
              "Cliquez sur l'icône «+» dans la barre de contrôle en bas de votre écran",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png',
          },
          {
            stepItem:
              'Dans le menu principal à gauche, cliquez sur le bouton «Créer un tournoi»',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'Choisissez parmi une grande variété de jeux de tournoi. Vous pouvez soit personnaliser les détails du tournoi en cliquant sur le bouton "personnaliser" ou cliquer sur "Publier maintenant" pour utiliser les modèles de tournoi prédéfinis',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg',
          },
          {
            // tslint:disable-next-line: quotemark
            stepItem:
              "Une fois publié, votre tournoi {{gameName}} sera répertorié sur la <a class='click-here' href='/user'>page d'accueil</a> de l'application Web Game.tv",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
      },
    ],
  },
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
