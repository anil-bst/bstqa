import { ICommunityTournamentsType } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.VIETNAMESE;

export const CreateATournamentLocalesLocaleVietnamese: ICommunityTournamentsType = {
  metadata: {
    title: 'Làm cách nào để vận hành các Giải Đấu Esports Di Động | Game.tv',
    description:
      'Bắt đầu các giải đấu và giải đấu của riêng bạn bằng cách sử dụng Game.tv, Discord bot Tourney hoặc ứng dụng Game.tv.',
  },
  heroSection: {
    heading: 'Tạo giải - Quản lý giải - Chơi',
    content:
      'Tạo các giải đấu trực tiếp trong cộng đồng Discord của bạn hoặc trên ứng dụng của chúng tôi trong một vài bước đơn giản',
    bannerDeskTopImageUrl: 'https://cdn.game.tv/create_tournament/banner.png',
    bannerMobImageUrl: 'https://cdn.game.tv/create_tournament/banner-mob.png',
  },
  discordSection: {
    heading: 'Discord',
    content:
      'Chạy các giải đấu trong cộng đồng Discord của bạn có nghĩa là người chơi không bao giờ phải rời khỏi máy chủ của bạn. Mọi thứ họ cần làm để đăng ký, điểm danh và tham gia sẽ trực tiếp từ các câu lệnh tin nhắn. Tourney sẽ đảm bảo trận đấu công bằng nhất. Sau trò chơi, người chơi có thể kiểm tra thứ hạng và điểm GELO trên trang hồ sơ của riêng họ.',
    btnText: 'Mời Tourney',
    steps: [
      {
        title: 'Mời Tourney và đi đến',
        linkString: 'Bảng điều khiển',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step1.png',
        linkUrl: '/dashboard',
      },
      {
        title: 'Nhấn "Tạo Giải Đấu" và chọn game của bạn',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step2.png',
      },
      {
        title: 'Tùy chỉnh giải đấu hoặc sử dụng các mẫu hiện có của chúng tôi',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step3.png',
      },
      {
        title:
          'Nhấp vào "Thông Báo"  và Tourney sẽ tạo phòng chờ hoặc bảng thi đấu trong máy chủ Discord của bạn.',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step4.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/discord_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/discord.png',
  },
  gameSection: {
    heading: 'Ứng dụng Game.tv',
    content:
      'Nếu bạn không có máy chủ Discord hoặc muốn mời người chơi từ bên ngoài Discord, bạn có thể sử dụng ứng dụng của chúng tôi để tạo các giải đấu. Giống như đối với Discord, Tourney sẽ tạo, tổ chức và điều hành các giải đấu của bạn. Bạn và những người tham gia của bạn sẽ nhận được thông báo trực tiếp trong ứng dụng về các trận đấu sắp tới, cập nhật bảng đấu và hơn thế nữa. Bạn cũng có thể kết nối tài khoản Twitter của mình và chia sẻ tiến trình trận đấu cũng như cho phép mọi người tham gia trực tiếp thông qua Twitter.',
    btnText: 'Chạy Ứng Dụng',
    steps: [
      {
        title: 'Đi đến',
        linkString: 'Ứng dụng Game.tv',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step1.png',
        linkUrl: '/user',
      },
      {
        title:
          'Đăng nhập và nhấn vào dấu + trong thanh điều khiển bên dưới màn hình',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step2.png',
      },
      {
        title: 'Tùy chỉnh giải đấu hoặc sử dụng các mẫu hiện có của chúng tôi',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step3.png',
      },
      {
        title:
          'Nhấp vào "Thông Báo"  và Tourney sẽ tạo phòng chờ hoặc bảng thi đấu trong máy chủ Discord của bạn.',
        imgUrl: 'https://cdn.game.tv/crete_tournament/step-4-1-new.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/game_global_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/game.png',
  },
  locales: `/${language}`,
};
