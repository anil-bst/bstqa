import { IHomeLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.CZECH;
// tslint:disable: max-line-length
export const HomeLocaleCzech: IHomeLocale = {
  metadata: {
    title: 'Tourney - Esports Discord Bot Powered by AI',
    description:
      'Host and run thousands of mobile Esports tournaments in any game community with our tournament bot, Tourney.',
  },
  heroSection: {
    heading: 'Meet Tourney',
    content:
      'The Esports assistant powered by AI. He runs your tournament so you can concentrate on your community',
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
        name: 'Invite Tourney',
      },
    ],
    discoverButtonTitle: 'Discover More',
  },
  whyTourneySection: {
    heading: 'Why Tourney',
    content:
      'It’s hard to run a tournament for your community. Keeping track of who plays against who, which lobby to join, what the fairest matchups are, proving who won - that’s a lot. Tourney will run your tournaments either as an assistant or completely on his own based on your community. His powerful AI and features can help you build a stronger and more fun community.',
  },
  uHostSection: {
    heading: 'uHost, uHost AI-Assistant, and AI-Host',
    content:
      'Three main tournament modes give you complete freedom in how you run your games.',
    hostTypes: [
      {
        heading: 'uHost',
        imageAlt: 'uHost',
        content: `Choose from a tournament template or customize your own. Publish. Poof, Tourney will
      create all the channels and DM the roles you want to get the ball rolling.`,
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost.png',
      },
      {
        heading: 'uHost AI-Assistant',
        imageAlt: 'uHost AI-Assistant',
        content: `Tourney helps you moderate your tournament and provides guidance for each player in between matches and so much more.`,
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost-assistant.png',
      },
      {
        heading: 'AI-Host',
        imageAlt: 'aiHost',
        content: `Tourney will choose the game, the time, the format and run the tournament completely on his own from beginning to end.`,
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/ai-Host.png',
      },
    ],
    templateSection: {
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/templates.png',
      imageAlt: 'Templates',
      heading: 'Templates',
      content:
        'Tourney comes with dozens of tournament templates preconfigured so you can click Publish and go. ',
    },
    messagingSection: {
      imageAlt: 'DMs and Messaging',
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/dms.png',
      heading: 'DMs and Messaging',
      content:
        'Tourney can message game-specific roles or any role that you choose to notify them about a new tournament. All of the organizing happens in a new channel Tourney creates and all lobby invites and matchmaking is sent through DM. ',
    },
  },
  perksSection: {
    heading: 'Perks',
    content: 'Tourney wouldn’t be complete without a ton of perks.',
    perksList: [
      {
        content:
          'Run a ton of tournaments? Great we have a tier system to reward you.',
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/perk-tournaments.png',
        imageAlt: 'Rewarding Tournament Tiers',
      },
      {
        content:
          'Stream your tournaments? Perfect, we have an OBS plugin to display',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-obs.png',
        imageAlt: 'inhouse OBS Plugin for streaming',
      },
      {
        content:
          'Want to run a league in your server? Bingo, we have that too!',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-league.png',
        imageAlt: 'Organize Leagues!',
      },
    ],
  },
  graphsSection: {
    heading: 'Roles',
    content:
      'The more tournaments you run with Tourney, the more perks you unlock. Your role shows up in the leaderboard on the Game.tv Discord community and you receive each set of perks once you jump to the next role.',
    graphContent: {
      previousTitle: 'Previous',
      nextTitle: 'Next',
      perksTitle: 'Perks',
      forTitle: 'FOR',
      graphList: [
        {
          type: 'bronze',
          imageCaption: 'Bronze',
          imageAlt: 'Bronze',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: '1 - 6 Tournaments Per week',
          perks: [
            'Exclusive Tourney Emotes',
            'Profiles and badge',
            'Unlock Tourney AI',
          ],
        },
        {
          type: 'silver',
          imageCaption: 'Silver',
          imageAlt: 'Silver',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: '7+ Tournaments Per week',
          perks: ['2 Nitro boosts for your Discord server', 'Unlock leagues'],
        },
        {
          type: 'gold',
          imageCaption: 'Gold',
          imageAlt: 'Gold',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration:
            'Run a league with 300 or more unique participants/season',
          perks: ['Guaranteed league prize sponsorships'],
        },
      ],
    },
  },
  tourneyEmotesSection: {
    heading: 'Tourney Emotes',
    content:
      'Unlocked in Bronze, you get 42 amazing, high-definition emotes to use in your community. They are pre-sized, sassy, and ready to go.',
  },
  profilesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/profiles.png',
        heading: 'Profiles',
        imageAlt: 'Profiles',
        content:
          'Unlocked in Bronze, players in your tournaments automatically get profiles that they can customize. Each profile shows the games played, the win/loss record, and the player rating. Player ratings help with matchmaking and league progression.',
      },
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/badges.png',
        heading: 'Badges',
        imageAlt: 'Badges',
        content:
          'Win games and earn badges to show off your skills. As your ELO increases or you win tournaments and prizes, you earn exclusive badges in your profile that sometimes come with some super secret and exclusive additional perks.',
        reverse: true,
      },
    ],
  },
  tourneyAiSection: {
    heading: 'Tourney AI',
    content1:
      'Once you hit Bronze, you unlock AI-Host. Enable AI-Host and Tourney can automatically run tournaments in your community. Keep in mind that only uHost tournaments count towards your tier progression. AI-Host tournaments do not count (but they are awesome and you should run them alongside uHost). ',
    content2: '',
  },
  leaguesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/league.png',
        heading: 'Leagues',
        imageAlt: 'Leagues',
        content:
          'Unlocked in Silver, Tourney can run an entire league in your server. Players on your server will have the opportunity to compete on a parallel tier system and earn a monthly sponsorship if they rank in the top-8 in their national leaderboards.',
      },
    ],
  },
  getBoostedSection: {
    heading: 'Get Boosted',
    content:
      'Reach Silver and we will give your Discord server not one, but two boosts to get you those sweet Level 1 Perks. As long as you run seven or more tournaments every week (Monday to Sunday), we will keep boosting your server. If you drop below seven tournaments every week, we may remove your boosts until you are back to seven or more. Additionally, you unlock the ability to create a run leagues for your community using Tourney’s AI.',
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
        mainlabel: 'unlocked',
        subheading: 'Boosted server perks include -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/emoji.png',
            label: '+50 server emoji slots (for a total of 100)',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/audio.png',
            label: '128 Kbps audio quality',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/gif-icon.png',
            label: 'Animated server icon',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/server.png',
            label: 'Custom server invite background',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/live.png',
            label: '720p 60fps Go Live streams',
          },
        ],
      },
      boostedServer: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-gold.png',
        heading: 'Qualifying for a Boosted Server',
        subheading: 'What you need to know -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Tournaments must be uHost or uHost AI-Assistant, AI-Host tournaments do not count towards your weekly average.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Tournaments must have a minimum of 50% fill rate to qualify. (this means if a tournament has sixteen slots, at least eight people need to play for your tournament to count towards your weekly average.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'We look at your average tournaments per week. Running three tournaments one day and four on another is the same as running one tournament each day.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'We look at your average tournaments per week. Running three tournaments one day and four on another is the same as running one tournament each day.',
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
    heading: 'Available Games',
    content: 'More Added Weekly',
    viewMoreGames: 'View More',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Invite Tourney',
      },
    ],
  },
  gamelink: `/${language}/find-tournaments`,
};
