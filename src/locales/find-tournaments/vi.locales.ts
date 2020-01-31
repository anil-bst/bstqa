import { IFindTournamentLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.VIETNAMESE;

export const FindTournamentLocalesVietnamese: IFindTournamentLocale = {
  metadata: {
    title: 'Tìm Các Giải Đấu Esports - Không Phí Tham Dự | Game.tv',
    description:
      'Tìm kiếm các giải đấu esports bạn có thể tham gia miễn phí diễn ra trên toàn thế giới',
  },
  heading: 'Tìm giải đấu',
  content:
    'Tìm các giải đấu esports diễn ra trong hàng triệu máy chủ Discord cho các trò chơi trên thiết bị di động và PC.',
  searchForm: {
    formPlaceholder: 'Tìm game, ví dụ: PUBG',
    searchInfo: 'Xem các giải đấu',
    noresult: 'Không tìm thấy trò chơi! Vui lòng tìm trò chơi khác.',
  },
  gameInfo: {
    title: 'Không tìm thấy giải đấu bạn thích?',
    content: 'Tạo cho riêng bạn',
    noTournamentsTitle: 'Ôi! Không có giải đấu nào sẵn có ngay lúc này!',
    noTournamentsContent: 'Xem các giải đấu sẵn có',
    noTournamentsLink: 'Trực tiếp hoặc đã diễn ra',
    linkUrl: `/${language}/create-a-tournament`,
  },
  topGameSection: { title: 'Top Trò chơi' },
  tournamentTitle: 'Giải đấu',
  platformStr: 'NỀN TẢNG',
  joinHeading: 'THAM GIA',
  viewMore: 'Xem nhiều hơn',
  gamePageUrl: `/${language}/find-tournaments`,
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
