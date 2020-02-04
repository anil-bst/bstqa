import { IHowToJoin } from '@app/abstractions';

export const HowToJoinEnglish: IHowToJoin = {
  blocks: [
    {
      gamePlatform: 'Discord',
      type: 'discord',
      stepsHeading: `Steps`,
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
      stepsContent: [
        {
          stepItem:
            'Go to the #tournament-info text channel in Discord to know about tournament details',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
        },
        {
          stepItem:
            'Click on #tournament-lobby at the bottom of #tournament-info channel',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
        },
        {
          stepItem:
            'To participate in the tournament, type !register in #tournament-lobby channel',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
        },
        {
          stepItem:
            'Tourney bot will send you a Direct Message; type !joinsolo &lt;your in-game username> in DM',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
        },
        {
          stepItem:
            'You have successfully registered for the {{howToJoinTitle}} tournament.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
        },
      ],
    },
    {
      gamePlatform: 'Game.tv web app',
      type: 'web',
      stepsHeading: `Steps`,
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
      stepsContent: [
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            "Go to <a href='/user' class='click-here'>Web App</a> and sign in with your Discord or Twitter account",
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
        },
        {
          stepItem:
            'Under the Tournament Calendar tab, you can find the list of upcoming {{howToJoinTitle}} tournaments.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
        },
        {
          stepItem:
            'Click on the tournament you want to join; you will see a Register button at the bottom end of the page',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
        },
        {
          stepItem:
            'Enter your IGN (IN-GAME NAME) and click on the Register button at the bottom end of the page',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
        },
        {
          stepItem: 'The registration is now complete.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
        },
      ],
    },
  ],
};
