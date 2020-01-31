import { IFindTournamentLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.CHINESE;

export const FindTournamentLocalesChinese: IFindTournamentLocale = {
  metadata: {
    title: '查找電子競技比賽-免費入場 | Game.tv',
    description: '搜尋電子競技比賽，您可以免費參加世界各地的比賽。',
  },
  heading: '瀏覽錦標賽',
  content:
    '在數百萬台Discord伺服器中，搜尋數十種手遊及PC遊戲正在舉辦的電子競技比賽。',
  searchForm: {
    formPlaceholder: '搜尋遊戲，例如：PubG',
    searchInfo: '查看比賽',
    noresult: '找不到遊戲！ 請搜尋其他遊戲。',
  },
  gameInfo: {
    title: '找不到您喜歡的比賽嗎？',
    content: '自行創建',
    noTournamentsTitle: '糟糕！ 現在沒有即將舉行的錦標賽！',
    noTournamentsContent: '查看所有可用的比賽',
    noTournamentsLink: '直播中或是過往影片',
    linkUrl: `/${language}/create-a-tournament`,
  },
  topGameSection: { title: '熱門遊戲' },
  tournamentTitle: '錦標賽',
  platformStr: '平台',
  joinHeading: '加入',
  viewMore: '查看更多',
  gamePageUrl: `/${language}/find-tournaments`,
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
