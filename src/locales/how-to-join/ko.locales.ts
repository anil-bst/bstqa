import { IHowToJoin } from '@app/abstractions';

export const HowToJoinKorean: IHowToJoin = {
  blocks: [
    {
      gamePlatform: 'Discord',
      type: 'discord',
      stepsHeading: '방법',
      stepsContent: [
        {
          stepItem:
            '토너먼트 세부 사항에 대해 알아 보려면 Discord의 # tournament-info 채널을 확인해 주세요.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
        },
        {
          stepItem:
            '# tournament-info 채널 하단에서 # tournament-lobby를 클릭하십시오.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
        },
        {
          stepItem:
            '토너먼트에 참여하려면 # tournament-lobby 채널에서 !register를 입력하십시오.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
        },
        {
          stepItem: 'Tourney 봇이 DM을 보낼것입니다; !joinsolo를 입력해주세요',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
        },
        {
          stepItem: '{{howToJoinTitle}} 토너먼트에 성공적으로 등록했습니다.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    {
      gamePlatform: 'Game.tv 웹앱',
      type: 'web',
      stepsHeading: '단계',
      stepsContent: [
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            "<a href='/user' class='click-here'>웹앱</a>에 방문하여 Discord 또는 Twitter 계정으로 로그인 해주세요.",
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
        },
        {
          stepItem:
            '토너먼트 캘린더 탭에서 다음 {{howToJoinTitle}} 토너먼트 목록을 찾을 수 있습니다.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
        },
        {
          stepItem:
            '참여하고자하는 토너먼트를 클릭하십시오. 페이지 하단에 등록 버튼이 표시됩니다',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
        },
        {
          stepItem:
            'IGN (게임 내 이름)을 입력하고 페이지 하단의 등록 버튼을 클릭하십시오',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
        },
        {
          stepItem: '등록이 완료되었습니다.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
    },
  ],
};
