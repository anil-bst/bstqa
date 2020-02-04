import { IGameDetailsLocale } from '@app/abstractions';
import { HowToJoinEnglish } from './../how-to-join/en.locales';

export const GameDetailsLocalesEnglish: IGameDetailsLocale = {
  metadata: {
    title: 'Join {{gameName}} Esports Tournaments | Game.tv',
    description:
      'Join daily {{gameName}} tournaments running inside millions of gaming communities worldwide.',
  },
  gameDetail:
    'Find community-run {{gameName}} esports tournaments happening across {{communityCount}} communities worldwide. Click ‘Join’ to enter the {{gameName}} tournament.',
  gameInfo: {
    title: 'Don’t see a tournament you like?',
    content: 'Create your own',
    linkUrl: '/create-a-tournament',
    noTournamentsTitle:
      'Oops! There’s no upcoming Tournaments available right now!',
    noTournamentsContent: 'View all available tournaments',
    noTournamentsLink: 'Live or Past',
  },
  tournamentTitle: 'Tournaments',
  platformStr: 'PLATFORM',
  discord: 'DISCORD',
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  vs: 'VS',
  joinHeading: 'JOIN',
  viewMore: 'View more',
  tournamentTypes: {
    heading: `{{gameName}} Tournament Types`,
    blocks: [
      {
        imageUrl: 'https://cdn.game.tv/tournaments/group-26.png',
        imageAlt: '',
        content:
          'Classic Tournament (lobby style) - Solo, Duo and Squad- 100 players max',
      },
      {
        imageUrl: 'https://cdn.game.tv/tournaments/group-27.png',
        imageAlt: '',
        content: 'Erangle Quick Match (lobby style) - Solo - 28 players',
      },
      {
        imageUrl: 'https://cdn.game.tv/tournaments/group-28.png',
        imageAlt: '',
        content: 'Team Deathmatch (lobby style) - 2 Squads - 8 players max',
      },
      {
        imageUrl: 'https://cdn.game.tv/tournaments/group-29.png',
        imageAlt: '',
        content: 'Infection Mode (lobby style) - 12 players',
      },
    ],
  },
  prizeTypes: {
    heading: `Types of Prizes for {{gameName}} Tournaments`,
    description: `The prizes for these tournaments are entirely up the host and some hosts may run tournaments just for fun, without any prizes. You can find the prizes listed on the tournament page. Here are some prizes hosts have given away for various {{gameName}} tournaments.`,
    blocks: [
      {
        imageUrl: 'https://cdn.game.tv/tournaments/group-13.png',
        imageAlt: '',
        content: 'Cash rewards',
      },
      {
        imageUrl: 'https://cdn.game.tv/tournaments/group-24.png',
        imageAlt: '',
        content: 'Steam wallet codes',
      },
      {
        imageUrl: 'https://cdn.game.tv/tournaments/group-23.png',
        imageAlt: '',
        content: 'Gift cards - Google play, Amazon, Steam and others',
      },
      {
        imageUrl: 'https://cdn.game.tv/tournaments/group-22.png',
        imageAlt: '',
        content: 'Subscription codes - Netflix, Apple Music and Spotify',
      },
      {
        imageUrl: 'https://cdn.game.tv/tournaments/group-20.png',
        imageAlt: '',
        content: 'And many more',
      },
    ],
  },
  joinTournament: {
    heading: `How to Join a {{gameName}} Tournament`,
    blocks: HowToJoinEnglish.blocks,
  },
  startTournament: {
    heading: `How to Start a {{gameName}} Tournament`,
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: `Steps`,
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
        stepsContent: [
          {
            stepItem:
              '<a href="https://game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner" class="click-here">Invite the Tourney</a> bot in your discord server, sign in and click “Authorize”',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
          },
          {
            stepItem:
              'From the main menu on the left, click on the “Create Tournament” button',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'Choose from the vast variety of tournament games - Customize the tournament details by clicking on “customize” button or click on “Publish Now” to use the predefined tournament templates',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/4.jpg',
          },
          {
            stepItem:
              'Under customize tournament, add custom Tournament description, rules and prizes as per your requirements',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/5.jpg',
          },
          {
            stepItem:
              'Once published, the bot will automatically create the #tournament-info and #tournament-lobby channels in your discord server; type !register in the #tournament-lobby text channel to participate and check if the {{gameName}} tournament creation was successful.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/6.jpg',
          },
        ],
      },
      {
        gamePlatform: 'Game.tv web app',
        stepsHeading: `Steps`,
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
        stepsContent: [
          {
            stepItem:
              'Visit <a href="/user" class="click-here">Web App</a>, click “Sign in with Twitter/Discord” and click “Authorize”',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
          },
          {
            stepItem:
              'Click on the “+” icon in the control bar at the bottom of your screen',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png',
          },
          {
            stepItem:
              'From the main menu on the left, click on the “Create Tournament” button',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'Choose from the vast variety of tournament games. You can either customize the tournament details by clicking on “customize” button or click on “Publish Now” to use the predefined tournament templates',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg',
          },
          {
            stepItem: `Once published, your {{gameName}} tournament will be listed on Game.tv Web App <a class="click-here" href="/user">Home Page</a>`,
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg',
          },
        ],
      },
    ],
  },
};
