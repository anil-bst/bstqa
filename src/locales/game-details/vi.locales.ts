import { IGameDetailsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.VIETNAMESE;

export const GameDetailsLocalesVietnamese: IGameDetailsLocale = {
  metadata: {
    title: 'Tham gia giải đấu esports {{gameName}} | Game.tv',
    description:
      'Tham gia các giải đấu {{gameName}} mỗi ngày được chạy trong hàng triệu cộng đồng trên toàn thế giới',
  },
  gameDetail:
    // tslint:disable-next-line: quotemark
    "Tìm các cộng đồng có các giải đấu esports {{gameName}} diễn ra trên toàn cầu {{communityCount}}. Nhấn 'Tham Gia' để thi đấu tại giải {{gameName}}",
  gameInfo: {
    title: 'Không tìm thấy giải đấu bạn thích?',
    content: 'Tạo cho riêng bạn',
    linkUrl: `/${language}/create-a-tournament`,
    noTournamentsTitle: 'Ôi! Không có giải đấu nào sẵn có ngay lúc này!',
    noTournamentsContent: 'Xem các giải đấu sẵn có',
    noTournamentsLink: 'Trực tiếp hoặc đã diễn ra',
  },
  tournamentTitle: 'Giải đấu',
  platformStr: 'NỀN TẢNG',
  discord: 'DISCORD',
  vs: 'VS',
  joinHeading: 'THAM GIA',
  viewMore: 'Xem nhiều hơn',
  tournamentTypes: {
    heading: '{{gameName}} Các loại giải đấu',
    blocks: [
      {
        content:
          'Giải đấu cổ điển (phòng chờ) - Solo, Duo và Squad- tối đa 100 người chơi',
        imageUrl: 'https://cdn.game.tv/tournaments/group-26.png',
      },
      {
        content: 'Erangle Quick Match (phòng chờ) - Solo - 28 người chơi',
        imageUrl: 'https://cdn.game.tv/tournaments/group-27.png',
      },
      {
        content: 'Team Deathmatch (phòng chờ) - 2 Squads - 8 người chơi',
        imageUrl: 'https://cdn.game.tv/tournaments/group-28.png',
      },
      {
        content: 'Infection Mode (phòng chờ) - 12 người chơi',
        imageUrl: 'https://cdn.game.tv/tournaments/group-29.png',
      },
    ],
  },
  prizeTypes: {
    heading: 'Nhập quà thưởng cho giải đấu {{gameName}}',
    description:
      // tslint:disable-next-line: quotemark
      'Các giải thưởng cho các giải đấu này hoàn toàn thuộc về nhà tổ chức và họ có thể vận hành các giải đấu chỉ để giải trí mà không có bất kỳ giải thưởng nào. Bạn có thể tìm thấy các giải thưởng được liệt kê trên trang giải đấu. Dưới đây là một số giải thưởng mà nhà tổ chức đã tặng cho các giải đấu {{gameName}} khác nhau.',
    blocks: [
      {
        content: 'Thưởng tiền mặt',
        imageUrl: 'https://cdn.game.tv/tournaments/group-13.png',
      },
      {
        content: 'Mã Steam wallet',
        imageUrl: 'https://cdn.game.tv/tournaments/group-24.png',
      },
      {
        content: 'Thẻ quà tặng - Google play, Amazon, Steam...',
        imageUrl: 'https://cdn.game.tv/tournaments/group-23.png',
      },
      {
        content: 'Mã nạp Netflix, Apple Music và Spotify',
        imageUrl: 'https://cdn.game.tv/tournaments/group-22.png',
      },
      {
        content: 'Và nhiều hơn thế',
        imageUrl: 'https://cdn.game.tv/tournaments/group-20.png',
      },
    ],
  },
  joinTournament: {
    heading: 'Làm thế nào để tham gia giài đấu {{gameName}}',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'Các bước',
        stepsContent: [
          {
            stepItem:
              'Vào kênh #tournament-info trong Discord để biết chi tiết giải đấu',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
          },
          {
            stepItem:
              'Nhấn vào #tournament-lobby ở bên dưới kênh #tournament-info',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
          },
          {
            stepItem:
              'Để tham gia giải đấu, hãy gõ !register trong channel #tournament-lobby',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
          },
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              'Bot Tourney sẽ gửi cho bạn một tin nhắn trực tiếp (Direct Message - DM), bạn hãy gõ !joinsolo <tên-trong-game> tại đây',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
          },
          {
            stepItem: 'Bạn đã đăng ký thành công cho giải đấu {{gameName}} ',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Ứng dụng web Game.tv',
        stepsHeading: 'Các bước',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "Truy cập <a href='/user' class='click-here'>Web App</a> và đăng nhập bằng tài khoản Discord hoặc Twitter của bạn",
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
          },
          {
            stepItem:
              'Trong tab Lịch giải đấu, bạn có thể tìm thấy danh sách các giải đấu {{gameName}} sắp tới',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'Bấm vào giải đấu bạn muốn tham gia; bạn sẽ thấy nút Đăng ký ở cuối trang',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              'Nhập IGN của bạn (TÊN TRONG GAME - IN GAME NAME) và nhấp vào nút Đăng ký ở cuối trang',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
          },
          {
            stepItem: 'Việc đăng ký đã hoàn tất.',
            imgUrl:
              'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
      },
    ],
  },
  startTournament: {
    heading: 'Cách bắt đầu một giải đấu {{gameName}}',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'Steps',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "<a href='/user' class='click-here'>Mời Tourney</a> tham gia máy chủ Discord của bạn, đăng nhập và nhấp vào \"Ủy Quyền\"",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
          },
          {
            stepItem: 'Từ menu chính bên trái, nhấp vào nút "Tạo Giải đấu"',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'Chọn trong số nhiều giải đấu khác nhau  - Bạn có thể tùy chỉnh chi tiết giải đấu bằng cách nhấp vào "tùy chỉnh" hoặc "thông báo" khi dùng các mẫu có sẵn',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/4.jpg',
          },
          {
            stepItem:
              'Tại phần tùy chỉnh giải đấu, bạn có thể thêm vào nội dung, quy định và phần thưởng như mong muốn',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/5.jpg',
          },
          {
            stepItem:
              'Khi đã thông báo. bot sẽ tự động tạo kênh #tournament-info và #tournament-lobby trong máy chủ discord của bạn, gõ !register trong kênh #tournament-lobby để tham gia giải đấu {{gameName}}\xa0',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/6.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Ứng dụng web Game.tv',
        stepsHeading: 'Các bước',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              'Truy cập <a href=\'/user\' class=\'click-here\'>Web App</a> nhấn vào "đăng nhập bằng tài khoản Discord hoặc Twitter" và nhấn "Xác Thực"',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
          },
          {
            stepItem:
              'Đăng nhập và nhấn vào dấu "+" trong thanh điều khiển bên dưới màn hình',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png',
          },
          {
            stepItem: 'Từ menu chính bên trái, nhấp vào nút "Tạo Giải đấu"',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'Chọn trong số nhiều giải đấu khác nhau  - Bạn có thể tùy chỉnh chi tiết giải đấu bằng cách nhấp vào "tùy chỉnh" hoặc "thông báo" khi dùng các mẫu có sẵn',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "Khi đã thông báo, giải đấu {{gameName}} của bạn sẽ có trên danh sách của <a class='click-here' href='/user'>home page</a> ứng dụng web Game.tv",
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
