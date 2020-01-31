import { ICommunityTournamentsType } from '@app/abstractions';

export const CreateATournamentLocalesLocaleEnglish: ICommunityTournamentsType = {
  metadata: {
    title: 'How to Run Mobile Esports Tournaments | Game.tv',
    description:
      'Start your own tournaments and leagues using Game.tv’s Discord bot Tourney or the Game.tv app.',
  },
  heroSection: {
    bannerDeskTopImageUrl: 'https://cdn.game.tv/create_tournament/banner.png',
    bannerMobImageUrl: 'https://cdn.game.tv/create_tournament/banner-mob.png',
    heading: 'Create - Host - Play  ',
    content:
      'Create tournaments directly inside your Discord community or on our app in a few easy steps',
  },
  discordSection: {
    heading: 'Discord',
    content:
      'Running tournaments inside your Discord community means players never have to leave your server. Everything they need to do to register, check-in, and play happens via custom roles and DMs. Tourney takes care of matchmaking which means the fairest matchups. After the game, players can check their standings and GELO score on their own profile page.',
    iconUrl: 'https://cdn.game.tv/create_tournament/discord_icon.png',
    btnText: 'Invite Tourney',
    imageUrl: 'https://cdn.game.tv/create_tournament/discord.png',
    steps: [
      {
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step1.png',
        title: 'Install Tourney and go to the ',
        linkString: 'Dashboard',
        linkUrl: '/dashboard',
      },
      {
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step2.png',
        title: 'Click “Create Tournament” and choose your game',
      },
      {
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step3.png',
        title: 'Customize the tournament or use our existing templates',
      },
      {
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step4.png',
        title:
          'Click “Publish” and Tourney will create the lobby or bracket in your Discord server.',
      },
    ],
  },
  gameSection: {
    heading: 'Game.tv App',
    content:
      'If you don’t have a Discord server or want to invite players from outside of Discord, you can use our app to create tournaments. Just like for Discord, Tourney will create, organize, and run your tournaments. You and your participants will receive notifications directly in the app about upcoming matches, matchmaking, bracket updates, and more. You can also connect your Twitter account and share your match progress as well as let people join directly through Twitter.',
    iconUrl: 'https://cdn.game.tv/create_tournament/game_global_icon.png',
    btnText: 'Launch App',
    imageUrl: 'https://cdn.game.tv/create_tournament/game.png',
    steps: [
      {
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step1.png',
        title: 'Go to the ',
        linkString: 'Game.tv Web App',
        linkUrl: '/user',
      },
      {
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step2.png',
        title:
          'Login and click the + in the control bar at the bottom of your screen',
      },
      {
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step3.png',
        title: 'Customize the tournament or use our existing templates',
      },
      {
        imgUrl: 'https://cdn.game.tv/crete_tournament/step-4-1-new.png',
        title:
          'Click “Publish” and Tourney will create tournament in the tournament calendar.',
      },
    ],
  },
};
