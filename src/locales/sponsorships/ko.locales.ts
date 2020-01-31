import { ISponsorshipsLocale } from '@app/abstractions';
// tslint:disable: max-line-length
// tslint:disable: quotemark
export const SponsorshipsLocalesKorean: ISponsorshipsLocale = {
  metadata: {
    title: 'Tourney 및 Game.tv와 함께하는 모바일 e스포츠 후원 ',
    description: 'Tourney 및 Game.tv와 함께하는 모바일 e스포츠 후원 ',
  },
  sponsorshipSection: {
    title: '커뮤니티를 위한 e스포츠 후원',
    contents: [],
    imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship-banner.png',
  },
  playSponsorSection: {
    blocks: [
      {
        title: '플레이어가 후원을 어떻게 받을 수 있나요?',
        contents: [
          'Tourney가 설치된 모든 서버에서 리그를 실행하면, 토너먼트를 체크합니다. 매 시즌 말에 각 나라의 상위 8명의 플레이어들은 매달 500달러의 후원금을 받게 됩니다.',
          '플레이어들이 우승할 수 있도록 도운 커뮤니티 또한, 보상을 해드립니다!',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/get-sponsorship.png',
        imageAlt: '후원 받기',
      },
      {
        title: '후원',
        contents: [
          '플레이어가 서버에서 리그전을 하면, 각종 특혜의 역할을 받게 됩니다. 골드 레벨에 도달하면 국가 대항전에 참가할 수 있습니다. 매 월 전국 각 국가별로 상위 8명 플레이어를 선발합니다. 혹시나 서버에 다양한 국적의 플레이어이가 존재해서 무관합니다. 저희가 직접 프로필을 통해 확인합니다! 그러니 여러분은 커뮤니티 키우기에만 집중하세요.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship.png',
        imageAlt: '후원',
      },
    ],
  },
  verifiedBadgeSection: {
    blocks: [
      {
        title: '검증 뱃지',
        contents: [
          '실버에 도달한 플레이어는 "검증"을 받을 수 있고 모든 사람이 볼 수 있도록 프로필 페이지에 특별한 뱃지를 부착할 수 있습니다. \'검증\' 뱃지 선수들만 골드 출전해 후원금을 받을 수 있게 됩니다.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/verified-badge.png',
        imageAlt: '검증 뱃지',
      },
      {
        title: '리그',
        contents: [
          'Tourney는 서버를 매우 키워줄 수 있습니다. 플레이어들은 uHost 혹은 AIHost를 통해 실행되는 토너먼트에 참가합니다. Tourney는 채팅창에 명령어를 통해 플레이어에게 참여 방법 등을 알려주며, 플레이어는 Game.tv/users에서 프로필을 직접 확인 할 수 있습니다.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/leagues-spons.png',
        imageAlt: '리그',
      },
    ],
  },
  leaderboardSection: {
    title: '나라별 리더보드',
    contents: [
      "커뮤니티 리그 내에서 랭킹이 있을 뿐 아니라 Game.tv 프로필을 통해 나라별 리더 보드에서 또는 '!myposition' 명령을 사용하여 자신의 상태를 확인할 수 있습니다. 검증된 플레이어만 나라별 리더 보드에 연결될 수 있습니다.",
    ],
    desktopImageUrl:
      'https://cdn.game.tv/images/meet-tourney/leaderboard-desk.png',
    mobImageUrl: 'https://cdn.game.tv/images/meet-tourney/leaderboard-mob.png',
  },
  tiersSection: {
    content: {
      title: '규칙',
      contents: [
        "커뮤니티 플레이어들의 승리가 쌓이면 리그전에 참여할 수 있고 다양한 특전을 누리게 됩니다. 일단 골드 티어에 도달하면, 플레이어들은 전국 리더 보드에 참여할 수 있는 자격을 획득하게 되고, 여기서 대항하여 상위 8위안에 오를 경우 매달 말에 확인하여 후원금을 지급합니다. 플레이어는 프로필에서 또는 '!myrating' 명령어를 통해 확인 할 수 있습니다.",
      ],
    },
    graphContent: {
      previousTitle: '사전',
      nextTitle: '다음',
      perksTitle: '특전',
      forTitle: '위해',
      graphList: [
        {
          type: '브론즈',
          imageCaption: '브론즈',
          imageAlt: '브론즈',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: 'ELO 800 - 1300',
          perks: ['Tourney 이모티콘', '프로필과 뱃지'],
        },
        {
          type: '실버',
          imageCaption: '실버',
          imageAlt: '실버',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: 'ELO 1301 - 1800',
          perks: ['검증된 프로필 뱃지'],
        },
        {
          type: '골드',
          imageCaption: '골드',
          imageAlt: '골드',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: 'ELO 1800+',
          perks: ['Tourney 이모티콘'],
        },
      ],
    },
  },
};
