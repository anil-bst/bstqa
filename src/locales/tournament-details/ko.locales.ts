import { ITournamentDetailLocale } from '@app/abstractions';
export const TournamentDetailLocaleKorean: ITournamentDetailLocale = {
  metadata: {
    title: 'License Agreement - Game.tv',
    description: 'Game.tv License Agreement',
  },
  linkToAllTournaments: 'All Tournaments',
  noPrizeInfo: 'see more',
  registerSection: {
    heading: 'Click ‘Register’ to get a seat in the tournament.',
    btnText: 'Register',
  },
  videoSection: {
    heading: 'Tournament Stream',
  },
  details: {
    detailsSectionHeading: 'Details',
    ruleSectionHeading: 'Rules',
    howToJoinSection: {
      heading: '어떻게 {{tournamentName}} 토너먼트에 참여하나요',
      content: [
        '토너먼트 세부 사항에 대해 알아 보려면 Discord의 # tournament-info 채널을 확인해 주세요.',
        '# tournament-info 채널 하단에서 # tournament-lobby를 클릭하십시오.',
        '토너먼트에 참여하려면 # tournament-lobby 채널에서 !register를 입력하십시오.',
        'Tourney 봇이 DM을 보낼것입니다; !joinsolo를 입력해주세요',
        '{{tournamentName}} 토너먼트에 성공적으로 등록했습니다.',
      ],
      imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
};
