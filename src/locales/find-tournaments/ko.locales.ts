import { IFindTournamentLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.KOREAN;

export const FindTournamentLocalesKorean: IFindTournamentLocale = {
  metadata: {
    title: 'E스포츠 토너먼트 찾기-무료임 | Game.tv',
    description: '전 세계에서 무료로 열리는 e스포츠 토너먼트를 검색해보세요.',
  },
  heading: '토너먼트 검색',
  content:
    '수백만개의 Discord 서버에서 진행되는 수십만 개의 모바일 및 PC 게임 e스포츠 토너먼트를 찾아보세요.',
  searchForm: {
    formPlaceholder: '게임 검색 예: 펍지',
    searchInfo: '토너먼트 보기',
    noresult: '게이믈 찾을 수 없습니다! 다른 게임을 검색해 보세요.',
  },
  gameInfo: {
    title: '원하는 토너먼트가 없나요?',
    content: '직접 토너먼트를 만들어 보세요',
    noTournamentsTitle: '죄송합니다! 현재 예정된 토너먼트가 없습니다!',
    noTournamentsContent: '참여 가능한 모든 토너먼트보기',
    noTournamentsLink: '진행중인 또는 이전 경기',
    linkUrl: `/${language}/create-a-tournament`,
  },
  topGameSection: { title: '상위 게임들' },
  tournamentTitle: '토너먼트',
  platformStr: '플랫폼',
  joinHeading: '참여하기',
  viewMore: '더보기',
  gamePageUrl: `/${language}/find-tournaments`,
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
