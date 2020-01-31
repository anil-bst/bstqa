import { IHomeLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.KOREAN;
export const HomeLocaleKoream: IHomeLocale = {
  metadata: {
    title: 'Tourney - AI에 의해 작동하는 e스포츠 디스코드 봇입니다.',
    description:
      '토너먼트 봇인 Tourney와 함께 모든 게임 커뮤니티에서 수천 개의 모바일 e스포츠 토너먼트를 개최하고 실행합니다.',
  },
  heroSection: {
    heading: '반갑습니다. Tourney 입니다',
    content:
      'AI로 작동되는 e스포츠 어시스턴트입니다.  커뮤니티에만 집중할 수 있도록 토너먼트를 운영합니다.',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/global.png',
        logoExtraClasses: 'global-logo',
        link: '/user',
        name: '웹 로그인',
        extraClasses: 'alternate-background',
      },
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        logoExtraClasses: 'discord-logo',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Tourney 초대',
      },
    ],
    discoverButtonTitle: '자세히 알아보기',
  },
  whyTourneySection: {
    heading: '왜 Tourney인가요?',
    content:
      '커뮤니티를 관리하면서 토너먼트까지 운영하는것은 힘든일입니다. 누가 누구와 경기를 하는지, 어떤 경기에 참여하는지, 어떤 경기가 가장 공정한지, 누가 이겼는지를 계속 확인하기에는 너무 많은 에너지가 소비됩니다. Tourney가 강력한 AI파워로 여러분의 커뮤니티를 더 재미있고 신나는 공간으로 만들 수 있도록 토너먼트 운영을 도와드립니다.',
  },
  uHostSection: {
    heading: 'uHost, uHost AI-어시스턴트, AI-Host',
    content:
      '세 가지 주요 토너먼트 모드를 사용하여 게임 토너먼트에 다양하게 적용할 수 있습니다.',
    hostTypes: [
      {
        heading: 'uHost(직접 토너먼트 관리)',
        imageAlt: 'uHost',
        content:
          '이미 만들어져있는 토너먼트 템플릿을 그대로 이용하거나, 운영자 마음대로 만들 수 있습니다. Tourney가 토너먼트 만들기, 공지, 승리자 구별 등 운영을 알아서 해드립니다.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost.png',
      },
      {
        heading: 'uHost AI-어시스턴트',
        imageAlt: 'uHost AI-Assistant',
        content:
          'Tourney는 토너먼트를 운영하는 데 도움을 드리며, 경기마다 각 선수에게 가이드를 제공합니다.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost-assistant.png',
      },
      {
        heading: 'AI-Host(자동 토너먼트 관리)',
        imageAlt: 'aiHost',
        content:
          'Tourney는 경기와 시간, 형식을 선택하고 처음부터 끝까지 혼자서 토너먼트를 완전히 운영합니다.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/ai-Host.png',
      },
    ],
    templateSection: {
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/templates.png',
      imageAlt: 'Templates',
      heading: '템플릿',
      content:
        'Tourney는 많은 게임의 토너먼트를 운영해보았습니다. 그 노하우를 그대로 전달드리겠습니다! 클릭 한번으로 토너먼트를 공지하고 운영해 보세요.',
    },
    messagingSection: {
      imageAlt: 'DMs and Messaging',
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/dms.png',
      heading: 'DM과 메세지',
      content:
        'Tourney는 게임별 역할 또는 새 토너먼트에 대해 참여자에게 역할별로 혹은 전체에게 메세지를 보낼 수 있습니다. 모든 메세지는 Tourney가 생성하는 새로운 토너먼트 채널에서 이루어지며, 모든 경기 초대 및 매칭은 DM을 통해 전송됩니다.',
    },
  },
  perksSection: {
    heading: '특전',
    content: 'Tourney는 후한 특전이 없었다면 완성되지 못했을 것입니다.',
    perksList: [
      {
        content:
          '토너먼트를 진행하고 계시나요? 티어시스템을 이용하여 보상받아보세요.',
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/perk-tournaments.png',
        imageAlt: '토너먼트 티어 보상',
      },
      {
        content:
          '토너먼트 스트리밍이 필요하세요? OBS 시스템을 통해 간단하게 진행해 보세요',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-obs.png',
        imageAlt: '내부 OBS 플로그램을 사용하여 스트리밍할 수 있습니다.',
      },
      {
        content: '서버에서 리그전을 하시나요? 유후~ 저희도 가능해요!',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-league.png',
        imageAlt: '리그 구성하기!',
      },
    ],
  },
  graphsSection: {
    heading: '티어',
    content:
      'Tourney와 함께 더 많은 토너먼트를 할수록 더 많은 특전을 누리실 수 있습니다. 티어는 Game.tv 디스코드 서버의 리더보드에 표시되며, 다음 단계로 이동하면 각 권한 세트를 받게 됩니다.',
    graphContent: {
      previousTitle: '이전',
      nextTitle: '다음',
      perksTitle: '특전',
      forTitle: '조건',
      graphList: [
        {
          type: 'bronze',
          imageCaption: '브론즈',
          imageAlt: 'Bronze',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: '매 주 1 - 5번 토너먼트 진행',
          perks: ['Tourney 이모티콘', '프로필과 뱃지', 'Tourney AI 제공'],
        },
        {
          type: 'silver',
          imageCaption: '실버',
          imageAlt: 'Silver',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: '매주 7번 이상 토너먼트 진행',
          perks: [
            '해당 디스코드 서버에 2 나이트로 부스트 제공',
            '리그 운영 가능',
          ],
        },
        {
          type: 'gold',
          imageCaption: '골드',
          imageAlt: 'Gold',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration:
            '300명의 개성 넘치는 참가자들과 리그를 진행할 수 있습니다.',
          perks: ['Guaranteed league prize sponsorships', '리그 후원 보장'],
        },
      ],
    },
  },
  tourneyEmotesSection: {
    heading: 'Tourney 이모티콘',
    content:
      '브론즈 티어에 도달하시면, 서버에서 자유롭게 사용하실 수 있는 자유롭게 사이즈 변환이 가능한 42개의 놀라운 고화질의 이모티콘이 준비되어있습니다. ',
  },
  profilesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/profiles.png',
        heading: '프로필',
        imageAlt: 'Profiles',
        content:
          '브론즈 티어에 도달하시면, 토너먼트의 플레이어가 프로필을 적용할 수 있습니다. 각 프로필에는 플레이한 게임, 승/패 기록 및 등급이 표시됩니다. 플레이어 등급은 매칭시스템 및 리그전 진행에 참여하실 수 있게 해줍니다.',
      },
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/badges.png',
        heading: '뱃지',
        imageAlt: 'Badges',
        content:
          '게임에서 이기면 뱃지를 획득할 수 있습니다. ELO가 늘어나거나 토너먼트 에서의 우승 및 상품을 획득 시 프로필에 적용됩니다. 가끔 비밀스럽게 진행된 경기에서 획득한 뱃지도 획득 하실 수 있습니다.',
        reverse: true,
      },
    ],
  },
  tourneyAiSection: {
    heading: 'Tourney AI',
    content1:
      '브론스 티어를 획득시 AI-Host를 사용하실 수 있습니다. Tourney는 AI-Host 적용으로 커뮤니티에서 토너먼트를 자동으로 실행합니다. 단, uHost 토너먼트만 운영 횟수에 포함되어 티어를 결정합니다. AI-Host에 의해 진행된 토너먼트는 횟수에 포함되지 않습니다.(그래도 AI-Host는 매우 간편하기에 꼭 실행해 보세요)',
    content2: '',
  },
  leaguesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/league.png',
        heading: '리그',
        imageAlt: 'Leagues',
        content:
          '골드 티어에 도달하면, Tourney는 서버 전체 리그를 실행할 수 있습니다. 각 나라별로 상위 8위에 드는 티어 서버의 경우, 시스템 상에서 직접 매치할 수 있으며, 월단위로 후원을 받을 수 있습니다.',
      },
    ],
  },
  getBoostedSection: {
    heading: '부스트 획득',
    content:
      '실버에 도달하면 Discord의 레벨1에 도달하여 특전을 얻으실 수 있도록 1개도 아닌 2개의 부스트를 제공해드립니다. 매주 7 회 이상의 토너먼트를 운영하는 한 계속해서 부스트를 제공해드립니다. 단, 7번 이하로 토너먼트 운영이 줄어들면, 부스트가 제거될 수 있음을 명시해주십시오.  추가로 Tourney의 AI기능을 사용하여 커뮤니티의 리그를 만들 수있습니다',
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
        heading: '레벨 1 특전 -',
        mainlabel: '제공',
        subheading: '추가 부스트 서버 특전 - ',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/emoji.png',
            label: '50개 이상의 서버 이모티톤 슬롯( 총 100개 중)',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/audio.png',
            label: '128 Kbps 오디오 품질',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/gif-icon.png',
            label: '애니메이션 서버 아이콘',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/server.png',
            label: '사용자 정의 서버 초대 배경',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/live.png',
            label: '720p 60fps 라이브 스트리밍',
          },
        ],
      },
      boostedServer: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-gold.png',
        heading: '부스트 서버 자격',
        subheading: '주의 사항 - ',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              '토너먼트는 uHost 또는 uHost AI-어시스턴트 여야하며 AI-Host 토너먼트는 횟수에 포함되지 않습니다.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              '토너먼트의 횟수에 포함되려면 최소 50%의 참여자가 잇어야 합니다. (만약 16개의 토너먼트 참여 자리가 있으면 적어도 8명 이상 참여를 해야 토너먼트 횟수로 계산됩니다.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              '토너먼트는 운영 횟수는 주당으로 계산됩니다. 3번의 토너먼트를 하루에 진행하고,  다른날 4번의 토너먼트를 진행하면 주 당 하루에 1번 토너먼트를 진행한 것으로 계산됩니다.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              '토너먼트 운영횟수가 평균 7이하로 떨어지면 부스트가 제거 될 수 있습니다. 주는 월요일-금요일로 계산됩니다.',
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
        heading: '상금 후원',
        imageAlt: '리그 상금 스폰서',
        content:
          '골드 티어에 도달하게 되면 긴 시즌동안 운영되는 리그전에 매달 상금 및 상품을 후원해 드립니다. 상품은 MSI, Intel 및 수백 명의 게임 개발자와 같은 멋진 파트너가 제공하며 현금, 기프트 카드, 하드웨어, 각종 상품 또는 게임 내 아이템을 포함 할 수 있습니다.',
      },
    ],
  },
  availableGamesSection: {
    heading: '이용 가능한 게임',
    content: '매주 업데이트됨',
    viewMoreGames: '자세히 보기',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Tourney 초대',
      },
    ],
  },
  gamelink: `/${language}/find-tournaments`,
};
