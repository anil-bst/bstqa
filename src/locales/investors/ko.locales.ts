import { IInvestorsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';

const language = SupportedLocalesEnum.KOREAN;
export const InvestorsLocaleKorean: IInvestorsLocale = {
  metadata: {
    title: '투자자 - Game.tv',
    description:
      'Game.tv를 모바일 e스포츠에서 가장 유명하게 만든 지원자와 파트너에 대해 자세히 읽어보시기 바랍니다.',
  },
  heading: '투자자',
  teamLink: `/${language}/team`,
  content:
    'game.tv는 실리콘 밸리의 5개 벤처 기업, 여러 게임 개발업체 및 일본과 한국을 포함한 전 세계의 주요 전략적 파트너의 지원을 받고 있습니다. 우리는 Mobile + 5G가 대규모 모바일 e-스포츠 생태계를 조성할 것이라는 공통된 비전을 가지고 있으며, game.tv는 이를 포착할 수 있는 유일한 포지션을 차지하고 있습니다.',
  buttonText: '팀 보기',
};
