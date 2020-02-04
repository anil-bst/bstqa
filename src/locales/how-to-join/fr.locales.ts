import { IHowToJoin } from '@app/abstractions';

export const HowToJoinFrench: IHowToJoin = {
  blocks: [
    {
      gamePlatform: 'Discord',
      type: 'discord',
      stepsHeading: 'Étapes',
      stepsContent: [
        {
          stepItem:
            'Accédez au salon textuel #tournament-info dans Discord pour connaître les détails du tournoi',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
        },
        {
          stepItem:
            'Cliquez sur #tournament-lobby en dessous du salon #tournament-info',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
        },
        {
          stepItem:
            'Pour participer au tournoi, tapez !register dans le salon #tournament-lobby',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
        },
        {
          stepItem:
            'Tourney vous enverra un Message Privé, tapez !joinsolo &lt;your in-game username> en MP',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
        },
        {
          stepItem:
            'Vous vous êtes inscrit avec succès au tournoi {{howToJoinTitle}}.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    {
      gamePlatform: 'Application Web Game.tv',
      type: 'web',
      stepsHeading: 'Étapes',
      stepsContent: [
        {
          // tslint:disable-next-line: quotemark
          stepItem: `Accédez à <a href='/user' class='click-here'>App Web</a>  et connectez-vous avec votre compte Discord ou Twitter`,
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
        },
        {
          // tslint:disable-next-line: quotemark
          stepItem: `Sous l'onglet Calendrier des tournois, vous pouvez trouver la liste des tournois {{howToJoinTitle}} à venir.`,
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
        },
        {
          stepItem:
            'Cliquez sur le tournoi auquel vous souhaitez participer; vous verrez un bouton Enregistrer en bas de la page',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
        },
        {
          // tslint:disable-next-line: quotemark
          stepItem: `Entrez votre IGN, IN-GAME NAME (NOM EN JEU) et cliquez sur le bouton S'inscrire en bas de la page`,
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
        },
        {
          // tslint:disable-next-line: quotemark
          stepItem: `L'inscription est maintenant terminée.`,
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
    },
  ],
};
