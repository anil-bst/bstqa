import { IGameDetailsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
import { HowToJoinKorean } from './../how-to-join/ko.locales';
const language = SupportedLocalesEnum.KOREAN;

export const GameDetailsLocalesKorean: IGameDetailsLocale = {
  metadata: {
    title: '{{gameName}} E스포츠 토너먼트에 참여하세요 | Game.tv',
    description:
      '전 세계 수백만 게임 커뮤니티 내에서 매일 열리는 {{gameName}} 토너먼트에 참여해보세요.',
  },
  gameDetail:
    '전세계 {{communityCount}}개의 커뮤니티에서 진행되는 {{gameName}} e스포츠 토너먼트를 찾아보세요. ‘가입’을 클릭하여 {{gameName}} 토너먼트에 참가여해보세요.',
  gameInfo: {
    title: '원하는 토너먼트가 없나요?',
    content: '직접 토너먼트를 만들 수도 있습니다.',
    linkUrl: `/${language}/create-a-tournament`,
    noTournamentsTitle: '죄송합니다! 현재 예정된 토너먼트가 없습니다!',
    noTournamentsContent: '사용 가능한 모든 토너먼트보기',
    noTournamentsLink: '라이브 또는 이전 경기',
  },
  tournamentTitle: '토너먼트',
  platformStr: '플랫폼',
  discord: 'DISCORD',
  vs: 'VS',
  joinHeading: '참여하기',
  viewMore: '더보기',
  tournamentTypes: {
    heading: '{{gameName}} 토너먼트 타입',
    blocks: [
      {
        content:
          '기본 토너먼트 (로비 스타일) - 솔로, 듀오 및 스쿼드- 최대 100 명',
        imageUrl: 'https://cdn.game.tv/tournaments/group-26.png',
      },
      {
        content: '퀵 매치 (로비 스타일) - 솔로 - 28 플레이어',
        imageUrl: 'https://cdn.game.tv/tournaments/group-27.png',
      },
      {
        content: '팀 데스 매치 (로비 스타일) - 2 스쿼드 - 최대 8 명',
        imageUrl: 'https://cdn.game.tv/tournaments/group-28.png',
      },
      {
        content: '감염 모드 (로비 스타일) - 12 명',
        imageUrl: 'https://cdn.game.tv/tournaments/group-29.png',
      },
    ],
  },
  prizeTypes: {
    heading: '{{gameName}} 토너먼트의 상품 유형',
    description:
      '이 토너먼트의 상금은 전적으로 주최측이 제공하며 일부 호스트는 상금없이 재미를 위해 토너먼트를 운영 할 수 있습니다. 토너먼트 페이지에서 상금을 확인할 수 있습니다. 다음은 다양한 {{gameName}} 토너먼트에서 주최자가 제공 한 상금입니다.',
    blocks: [
      {
        content: '현금성 상품',
        imageUrl: 'https://cdn.game.tv/tournaments/group-13.png',
      },
      {
        content: '스팀 코드',
        imageUrl: 'https://cdn.game.tv/tournaments/group-24.png',
      },
      {
        content: '기프트 카드 - 구글 플레이, 아마존, 스팀 등등',
        imageUrl: 'https://cdn.game.tv/tournaments/group-23.png',
      },
      {
        content: '구독 콛 - 넷플릭스, 애플 뮤직, 스포티파이',
        imageUrl: 'https://cdn.game.tv/tournaments/group-22.png',
      },
      {
        content: '그리고 등등',
        imageUrl: 'https://cdn.game.tv/tournaments/group-20.png',
      },
    ],
  },
  joinTournament: {
    heading: '어떻게 {{gameName}} 토너먼트에 참여하나요',
    blocks: HowToJoinKorean.blocks,
  },
  startTournament: {
    heading: '{{gameName}} 토너먼트를 시작하는 방법',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: '방법',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "Discord 서버에서<a href='/user' class='click-here'>Tourney 봇을 초대하고</a>로그인 한 후 \"승인\"을 클릭하십시오.",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
          },
          {
            stepItem:
              '왼쪽의 메인 메뉴에서 "토너먼트 만들기"버튼을 클릭하십시오',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/3.jpg',
          },
          {
            stepItem:
              '다양한 토너먼트 게임 중에서 선택하십시오- "사용자 정의" 버튼을 클릭하여 토너먼트 세부 정보를 사용자 정의하거나 "지금 게시"를 클릭하여 사전 에 만들어진 토너먼트 템플릿을 사용하십시오',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/4.jpg',
          },
          {
            stepItem:
              '토너먼트 사용자 정의에서 요구 사항에 따라 사용자 정의 토너먼트 설명, 규칙 및 상금을 추가하십시오.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/5.jpg',
          },
          {
            stepItem:
              '봇은 일단 게시되면 Discord 서버에 # tournament-info 및 # tournament-lobby 채널을 자동으로 생성합니다. # tournament-lobby 텍스트 채널에 !register를 입력하여 {{gameName}} 토너먼트 생성에 성공했는지 확인하십시오.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/6.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Game.tv 웹앱',
        stepsHeading: '단계',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              '<a href=\'/user\' class=\'click-here\'>웹앱</a>,을 방문하고 "Twitter / Discord로 로그인"을 클릭 한 다음 "승인"을 클릭하십시오.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
          },
          {
            stepItem: '화면 하단의 제어바에서 "+"아이콘을 클릭하십시오',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png',
          },
          {
            stepItem:
              '왼쪽의 메인 메뉴에서 "토너먼트 만들기"버튼을 클릭하십시오',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              '다양한 토너먼트 게임 중에서 선택하십시오. 미리 정의 된 토너먼트 템플릿을 사용하려면 "지금 게시"를 클릭하여 토너먼트를 공지하고,  "사용자 정의"버튼을 클릭하여 토너먼트 세부 정보를 사용자 수정 할 수 있습니다.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "{{gameName}} 토너먼트가 게시되면 Game.tv 웹 앱<a class='click-here' href='/user'>\xa0홈페이지</a>에 표시됩니다",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
      },
    ],
  },
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
