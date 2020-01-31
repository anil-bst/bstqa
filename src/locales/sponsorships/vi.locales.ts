import { ISponsorshipsLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const SponsorshipsLocalesVietnamese: ISponsorshipsLocale = {
  metadata: {
    title: 'Tài trợ thể thao điện tử di động với Tourney và Game.tv',
    description: 'Tài trợ thể thao điện tử di động với Tourney và Game.tv',
  },
  sponsorshipSection: {
    title: 'Tài trợ thể thao điện tử cho cộng đồng của bạn',
    contents: [],
    imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship-banner.png',
  },
  playSponsorSection: {
    blocks: [
      {
        title: 'Làm cách nào để người chơi nhận tài trợ',
        contents: [
          'Khi bạn điều hành một giải đấu trong cộng đồng của mình, Tourney sẽ theo dõi mọi hiệu suất của người chơi trên tất cả các máy chủ có cài đặt Tourney. 8 cầu thủ hàng đầu ở mỗi quốc gia vào cuối mỗi mùa sẽ nhận được khoản tài trợ $ 500 / tháng mỗi tháng.',
          'Như một phần thưởng cho cộng đồng đã giúp những người chơi này phát triển, cộng đồng cũng sẽ nhận được một phần thưởng độc quyền!',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/get-sponsorship.png',
        imageAlt: 'Nhận tài trợ',
      },
      {
        title: 'Tài trợ',
        contents: [
          'Khi người chơi tham giai giải đấu của cộng đồng của bạn, họ sẽ kiếm được nhiều đặc quyền khác nhau. Khi họ đạt được cấp trò Vàng, họ đủ điều kiện cho Bảng xếp hạng quốc gia. Mỗi tháng là một mùa giải mới, nơi chúng tôi chọn 8 người chơi hàng đầu từ bảng xếp hạng quốc gia. Nếu máy chủ của bạn có các thành viên trên toàn thế giới, thì điều đó cũng tốt. Người chơi sẽ cần xác minh quốc gia cư trú trong hồ sơ của họ và chúng tôi khuyến khích bạn giúp cộng đồng của bạn làm điều đó.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship.png',
        imageAlt: 'Tài trợ',
      },
    ],
  },
  verifiedBadgeSection: {
    blocks: [
      {
        title: 'Huy hiệu Đã Xác Nhận',
        contents: [
          'Người chơi đạt cấp Bạc, họ sẽ có thể được "Xác nhận" và nhận huy hiệu đặc biệt trên trang hồ sơ của mình cho mọi người xem. Chỉ những người chơi đã được xác minh có thể tham gia Vàng và kiếm được tài trợ.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/verified-badge.png',
        imageAlt: 'Huy hiệu Đã Xác Nhận',
      },
      {
        title: 'Mùa giải',
        contents: [
          'Tourney sẽ biến máy chủ của bạn thành một giải đấu của riêng mình. Người chơi sẽ cạnh tranh trong các sự kiện bạn chạy bằng uHost hoặc tự động thông qua aiHost. Tourney sẽ thông báo cho người chơi về hiệu suất và vai trò của họ thông qua các lệnh trong room chat hoặc người chơi có thể xem hồ sơ của họ trên Game.tv/users.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/leagues-spons.png',
        imageAlt: 'Mùa giải',
      },
    ],
  },
  leaderboardSection: {
    title: 'Bản xếp hạng quốc gia',
    contents: [
      'Người chơi trong cộng đồng của bạn sẽ có một thứ hạng trong liên minh cộng đồng của bạn, họ cũng có thể kiểm tra vị trí của họ trong bảng xếp hạng quốc gia của họ trên hồ sơ Game.tv hoặc  sử dụng lệnh ‘! Myposeition. Chỉ những người chơi được xác minh mới có thể tiếp cận bảng xếp hạng quốc gia',
    ],
    desktopImageUrl:
      'https://cdn.game.tv/images/meet-tourney/leaderboard-desk.png',
    mobImageUrl: 'https://cdn.game.tv/images/meet-tourney/leaderboard-mob.png',
  },
  tiersSection: {
    content: {
      title: 'Danh hiệu',
      contents: [
        `Khi người chơi của bạn giành chiến thắng, họ thăng hạng trong các giải đấu và kiếm được nhiều đặc quyền khác nhau. Khi họ đạt hạng cấp VÀNG, họ đủ điều kiện tham gia bảng xếp hạng Quốc gia và có thể kiếm được tài trợ mỗi tháng khi họ ở trong 8 vị trí hàng đầu. Người chơi có thể xem xếp hạng của họ trong hồ sơ hoặc bằng cách gọi lệnh ‘!myrating'`,
      ],
    },
    graphContent: {
      previousTitle: 'Trước đó',
      nextTitle: 'Tiếp theo',
      perksTitle: 'Đặc quyền',
      forTitle: 'Dành cho',
      graphList: [
        {
          type: 'Đồng',
          imageCaption: 'Đồng',
          imageAlt: 'Đồng',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: 'ELO 800 - 1300',
          perks: ['Biểu tượng Tourney độc quyền', 'Hồ sơ và huy hiệu'],
        },
        {
          type: 'Bạc',
          imageCaption: 'Bạc',
          imageAlt: 'Bạc',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: 'ELO 1301 - 1800',
          perks: ['Huy hiệu Hồ Sơ Đã Xác Nhận'],
        },
        {
          type: 'Vàng',
          imageCaption: 'Vàng',
          imageAlt: 'Vàng',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: 'ELO 1800+',
          perks: ['Biểu tượng Tourney độc quyền'],
        },
      ],
    },
  },
};
