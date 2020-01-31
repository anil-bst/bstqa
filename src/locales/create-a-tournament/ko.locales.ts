import { ICommunityTournamentsType } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.KOREAN;

export const CreateATournamentLocalesLocaleKorean: ICommunityTournamentsType = {
  metadata: {
    title: '모바일 E스포츠 토너먼트를 운영는 방법 | Game.tv',
    description:
      'Game.tv의 Discord 봇 Tourney 또는 Game.tv 앱을 사용하여 나만의 토너먼트와 리그를 시작해 보세요.',
  },
  heroSection: {
    heading: '만들고 - 운영하고 - 플레이하기',
    content:
      '몇 가지 간단한 단계로 Discord 커뮤니티 또는 앱에서 직접 토너먼트를 만들 수 있습니다.',
    bannerDeskTopImageUrl: 'https://cdn.game.tv/create_tournament/banner.png',
    bannerMobImageUrl: 'https://cdn.game.tv/create_tournament/banner-mob.png',
  },
  discordSection: {
    heading: 'Discord',
    content:
      'Discord 커뮤니티 내에서 토너먼트를 운영하면 플레이어가 서버를 떠나지 않아도됩니다. 등록, 체크인 및 플레이에 필요한 모든 작업은 사용자 지정 역할 및 DM을 통해 수행됩니다. 토너먼트는 매치 메이킹을 처리합니다. 경기 후 플레이어는 자신의 프로필 페이지에서 자신의 순위와 GELO 점수를 확인할 수 있습니다.',
    btnText: 'Tourney 초대',
    steps: [
      {
        title: 'Tourney 초대하고',
        linkString: '대쉬보드로 이동하기',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step1.png',
        linkUrl: '/dashboard',
      },
      {
        title: '"토너먼트 만들기"를 클릭하고 게임을 선택하십시오',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step2.png',
      },
      {
        title: '토너먼트를 사용자 정의하거나 기존 템플릿을 사용하십시오',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step3.png',
      },
      {
        title:
          '"게시"를 클릭하면 Tourney가 Discord 서버에 로비 또는 대진표를 만듭니다.',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step4.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/discord_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/discord.png',
  },
  gameSection: {
    heading: 'Game.tv 앱',
    content:
      'Discord 서버가 없거나 Discord 외부에서 플레이어를 초대하려면 앱을 사용하여 토너먼트를 만들 수 있습니다. Discord와 마찬가지로 Tourney는 토너먼트를 생성, 구성 및 운영합니다. 운영자와 참가자는 곧 경기, 매치 메이킹, 대진표 업데이트 등에 대한 알림을 앱에서 직접받습니다. Twitter 계정을 연결하고 경기 진행 상황을 공유하고 사람들이 Twitter를 통해 직접 참여하도록 할 수도 있습니다.',
    btnText: '웹 로그인',
    steps: [
      {
        title: 'Game.tv 앱',
        linkString: '으로 이동',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step1.png',
        linkUrl: '/user',
      },
      {
        title: '로그인하고 화면 하단의 제어바에서 +를 클릭하십시오.',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step2.png',
      },
      {
        title: '토너먼트를 사용자 정의하거나 기존 템플릿을 사용하십시오',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step3.png',
      },
      {
        title:
          '"게시"를 클릭하면 Tourney가 Discord 서버에 로비 또는 대진표를 만듭니다.',
        imgUrl: 'https://cdn.game.tv/crete_tournament/step-4-1-new.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/game_global_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/game.png',
  },
  locales: `/${language}`,
};
