import { IHomeLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.VIETNAMESE;
// tslint:disable: max-line-length
export const HomeLocaleVietnamese: IHomeLocale = {
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
        name: 'Mời Tourney',
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
    heading: 'Nhận gói Tăng Tốc',
    content:
      'Đạt cấp Bạc và chúng tôi sẽ cung cấp cho máy chủ Discord của bạn không chỉ một, mà là hai lần tăng tốc  để mang lại cho bạn những đặc quyền cấp 1. Miễn là bạn điều hành bảy giải đấu trở lên - mỗi tuần  (Thứ Hai đến Chủ Nhật), chúng tôi sẽ tiếp tục tăng cường máy chủ của bạn. Nếu bạn giảm xuống dưới bảy giải đấu mỗi tuần, chúng tôi có thể loại bỏ các lần tăng của bạn cho đến khi bạn trở lại bảy giải  hoặc nhiều hơn. Ngoài ra, bạn mở khóa khả năng tạo  giải cho cộng đồng của mình bằng AI của Tourney.',
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
        heading: 'Ưu đãi cấp 1',
        mainlabel: 'đã mở khóa',
        subheading: 'Đặc quyền máy chủ tăng cường bao gồm -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/emoji.png',
            label: '+50 vị trí biểu tượng cảm xúc của máy chủ (tổng cộng 100)',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/audio.png',
            label: 'Chất lượng âm thanh 128 Kbps',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/gif-icon.png',
            label: 'Biểu tượng động cho máy chủ',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/server.png',
            label: 'Hình nền tùy chỉnh khi mời thành viên',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/live.png',
            label: 'LiveStream 720p 60 fps',
          },
        ],
      },
      boostedServer: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-gold.png',
        heading: 'Đủ điều kiện cho một máy chủ Boosted',
        subheading: 'Những gì bạn cần biết -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Các giải đấu phải là uHost hoặc  uHost AI-Assistant, AI-Host sẽ không tính vào giải hàng tuần',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Các giải đấu phải có tỷ lệ lấp đầy tối thiểu 50% để đủ điều kiện. (điều này có nghĩa là nếu  giải đấu có mười sáu vị trí, ít nhất tám người cần chơi trong giải đấu này để tính vào giải mỗi tuần',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Chúng tôi sẽ xem xét các giải đấu trung bình của bạn mỗi tuần. Chạy ba giải đấu một ngày và bốn giải mỗi ngày sẽ tính như một giải đấu mỗi ngày.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Tăng có thể bị xóa nếu trung bình giải đấxu của bạn giảm xuống dưới bảy giải trong tuần (thứ 2-thứ 6)',
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
        name: 'Mời Tourney',
      },
    ],
  },
  gamelink: `/${language}/find-tournaments`,
};
