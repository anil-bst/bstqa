import { ISponsorshipsLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const SponsorshipsLocalesCzech: ISponsorshipsLocale = {
  metadata: {
    title: 'Mobile Esports Sponsorships with Tourney and Game.tv',
    description: 'Mobile Esports Sponsorships with Tourney and Game.tv',
  },
  sponsorshipSection: {
    title: `Esports Sponsorships for Your Community`,
    contents: [],
    imageUrl: `https://cdn.game.tv/images/meet-tourney/sponsorship-banner.png`,
  },
  playSponsorSection: {
    blocks: [
      {
        title: 'How Do Players Get Sponsored?',
        contents: [
          `When you run a league inside your community, Tourney tracks every player’s performance across all communitys with Tourney installed. The top 8 players in each country at the end of each season will receive either a $500/month sponsorship each month.`,
          `As a bonus to the community that helped these players grow, the community will also get an exclusive reward as well!`,
        ],
        imageUrl: `https://cdn.game.tv/images/meet-tourney/get-sponsorship.png`,
        imageAlt: `Get Sponsored`,
      },
      {
        title: 'Sponsorship',
        contents: [
          `As players compete in your community’s league, they will advance roles earning various perks. Once they reach the Gold role, they qualify for the National Leaderboard. Every month is a new season where we choose the top 8 players from the national leaderboard. If your community has members all over the world, that’s fine too. The players will need to verify their country of residence in their profiles and we encourage you to help your community do that. `,
        ],
        imageUrl: `https://cdn.game.tv/images/meet-tourney/sponsorship.png`,
        imageAlt: `Sponsorship`,
      },
    ],
  },
  verifiedBadgeSection: {
    blocks: [
      {
        title: 'Verified Badge',
        contents: [
          `Players that hit Silver will be able to get “Verified” and get a special badge on their profile page for everyone to see. Only ‘Verified’ players will be able to participate in Gold and earn a sponsorship.`,
        ],
        imageUrl: `https://cdn.game.tv/images/meet-tourney/verified-badge.png`,
        imageAlt: `Verified Badge`,
      },
      {
        title: 'Leagues',
        contents: [
          `Tourney will turn your community into a league of its own. Players will compete in events you run using uHost or automatically through aiHost. Tourney notifies players about their performance and role either through commands in chat or players can look at their profiles on Game.tv/users.`,
        ],
        imageUrl: `https://cdn.game.tv/images/meet-tourney/leagues-spons.png`,
        imageAlt: `Leagues`,
      },
    ],
  },
  leaderboardSection: {
    title: `National Leaderboard`,
    contents: [
      `Players in your community will have a ranking within your community league but also be able to check their position in their national leaderboard on their Game.tv profiles or by using the ‘!myposition’ command. Only verified players can reach the national leaderboard.`,
    ],
    desktopImageUrl:
      'https://cdn.game.tv/images/meet-tourney/leaderboard-desk.png',
    mobImageUrl: 'https://cdn.game.tv/images/meet-tourney/leaderboard-mob.png',
    imageAlt: `National Leaderboard`,
  },
  tiersSection: {
    content: {
      title: 'Roles',
      contents: [
        `As your players win, they advance in the league tiers and earn various perks. Once they hit Gold tier, they qualify for the National leaderboard and can earn a sponsorship every month they stay in the top 8 spots. Players can see their ratings in their profiles or by calling the ‘!myrating’ command.`,
      ],
    },
    graphContent: {
      previousTitle: 'Previous',
      nextTitle: 'Next',
      perksTitle: 'Perks',
      forTitle: 'FOR',
      graphList: [
        {
          type: 'bronze',
          statusText: '',
          imageCaption: 'Bronze',
          imageAlt: 'Bronze',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: 'ELO 800 - 1300',
          perks: ['Exclusive Tourney Emotes', 'Profiles and badge'],
        },
        {
          type: 'silver',
          statusText: '',
          imageCaption: 'Silver',
          // isPreviousPerkExcluded: true,
          imageAlt: 'Silver',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: 'ELO 1301 - 1800',
          perks: ['Verified Profile Badge'],
        },
        {
          type: 'gold',
          statusText: 'Coming Soon',
          imageCaption: 'Gold',
          imageAlt: 'Gold',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: 'ELO 1800+',
          perks: ['Qualify for the National Leaderboards'],
        },
      ],
    },
  },
};
