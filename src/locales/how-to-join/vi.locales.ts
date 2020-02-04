import { IHowToJoin } from '@app/abstractions';

export const HowToJoinVietnamese: IHowToJoin = {
  blocks: [
    {
      gamePlatform: 'Discord',
      type: 'discord',
      stepsHeading: 'Các bước',
      stepsContent: [
        {
          stepItem:
            'Vào kênh #tournament-info trong Discord để biết chi tiết giải đấu',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
        },
        {
          stepItem:
            'Nhấn vào #tournament-lobby ở bên dưới kênh #tournament-info',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
        },
        {
          stepItem:
            'Để tham gia giải đấu, hãy gõ !register trong channel #tournament-lobby',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
        },
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            'Bot Tourney sẽ gửi cho bạn một tin nhắn trực tiếp (Direct Message - DM), bạn hãy gõ !joinsolo <tên-trong-game> tại đây',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
        },
        {
          stepItem:
            'Bạn đã đăng ký thành công cho giải đấu {{howToJoinTitle}} ',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    {
      gamePlatform: 'Ứng dụng web Game.tv',
      type: 'web',
      stepsHeading: 'Các bước',
      stepsContent: [
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            "Truy cập <a href='/user' class='click-here'>Web App</a> và đăng nhập bằng tài khoản Discord hoặc Twitter của bạn",
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
        },
        {
          stepItem:
            'Trong tab Lịch giải đấu, bạn có thể tìm thấy danh sách các giải đấu {{howToJoinTitle}} sắp tới',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
        },
        {
          stepItem:
            'Bấm vào giải đấu bạn muốn tham gia; bạn sẽ thấy nút Đăng ký ở cuối trang',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
        },
        {
          stepItem:
            'Nhập IGN của bạn (TÊN TRONG GAME - IN GAME NAME) và nhấp vào nút Đăng ký ở cuối trang',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
        },
        {
          stepItem: 'Việc đăng ký đã hoàn tất.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
    },
  ],
};
