import { IHowToUseTourneyLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const HowToUseTourneyLocaleVietnamese: IHowToUseTourneyLocale = {
  metadata: {
    title: 'Game.tv -Cách sử dụng Tourney',
    description: 'Tìm hiểu cách sử dụng Tourney cho cộng đồng của bạn',
  },
  navigationSections: [
    {
      id: 'create_new_account',
      title: 'Tạo tài khoản mới',
      isActive: true,
      navSectionItems: [
        {
          title:
            '1. (Bước này chỉ dành cho đối tác của game.tv. Nếu bạn đang tạo các giải đấu trên máy chủ của riêng mình, vui lòng bỏ qua bước 2.) Chia sẻ Discord và ID người dùng của bạn cho quản trị viên game.tv',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0.jpg',
              imageCaption: 'Nickname Discord phải bao gồm thẻ số gồm 4 chữ số',
              steps: [
                `Discord ID : Cách tìm ID <a href='https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-'>https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-</a>`,
                'Đợi cho quản trị viên game.tv xác nhận với bạn rằng tài khoản đã được thiết lập để tạo giải đấu.',
              ],
            },
          ],
        },
        {
          title: `2. Visit <a href='https://esports.game.tv/nimda'>https://esports.game.tv/nimda</a>`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(1).png',
              imageCaption: 'Nhấn “Sign in with Discord”',
            },
            {
              imageCaption: 'Nhấn “Authorize”',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(2).png',
            },
          ],
        },
      ],
    },
    {
      id: 'setting_up_tourney',
      title: 'Thiết lập Bot Tourney cho Máy chủ Discord của bạn',
      navSectionItems: [
        {
          title:
            '1. Từ menu chính của bạn ở bên trái, nhấp vào nút Tạo Giải đấu',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. Từ trang Giải Đấu Mẫu, chọn một trò chơi mà bạn muốn tạo giải đấu và nhấp vào Tùy chỉnh.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title:
            '3. Trong trang Tùy chỉnh Giải đấu, nhấp vào Thêm liên kết máy chủ khác.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(5).png',
            },
          ],
        },
        {
          title:
            '4. Trình duyệt sẽ bật lên và hiển thị Giao diện người dùng Discord, yêu cầu bạn chọn máy chủ để thêm Bot vào.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(6).png',
              steps: [
                'Chỉ các máy chủ mà bạn trong đó là quản trị viên sẽ xuất hiện trong menu này',
                'Chọn máy chủ bạn muốn cài đặt bot, sau đó bấm Cấp quyền.',
              ],
            },
          ],
        },
        {
          title:
            '5. Khi được ủy quyền chính xác, bạn sẽ nhận được màn hình xác nhận trong cùng một trình duyệt. Bây giờ Tourney Bot đã được cài đặt trong máy chủ Discord của bạn.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(7).png',
            },
          ],
        },
        {
          title:
            '6. Kiểm tra máy chủ Discord của bạn để đảm bảo rằng bot đã được cài đặt.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(8).png',
            },
          ],
        },
      ],
    },
    {
      id: 'tourney_ai_mode',
      title: 'Chế độ Tourney AI',
      description:
        '<p>"Chế độ AI Tourney A"I cho phép Tourney AI Bot tự tạo, khởi chạy và vận hành các giải đấu! </p><p><i>** Lưu ý rằng chế độ này sẽ chỉ khả dụng cho quản trị viên máy chủ. Các vai trò khác với sự cho phép của giải đấu sẽ không có quyền truy cập vào chế độ này. </i></p><p><i>** Chỉ các game có chế độ đánh loại theo bảng mới có chế độ AI. (PUBGM, Free Fire là ngoại lệ)</i></p>',
      navSectionItems: [
        {
          title:
            '1. Trên bảng điều khiển của bạn, có nút Tourney AI. Hãy nhấn vào.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(9).png',
            },
          ],
        },
        {
          title:
            '2. Trên trang cài đặt Bot, trước tiên hãy chọn máy chủ của bạn từ menu thả xuống. Sau đó bấm vào Bật AI.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(10).png',
              steps: [
                'Bạn có thể thêm Tourney Bot vào máy chủ của mình bằng cách chọn Thêm máy chủ tại đây nếu Tourney Bot chưa được cài đặt.',
                'Nhấp vào nút Bật AI sẽ mở ra một menu mới cho bạn.',
              ],
            },
          ],
        },
        {
          title: '3. Chế độ quản trị',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(11).png',
              steps: [
                'Chế độ quản trị: Quản trị viên của bạn sẽ được liệt kê ở đây. Mỗi quản trị viên điều hành có thể có các cài đặt khác nhau. Chọn quản trị viên mà bạn muốn sử dụng.',
                'Vai trò cần đề cập: Trong phần này, bạn sẽ phải cho AI bot biết vai trò nào để ping tới mỗi trò chơi giải đấu AI. Nếu bạn không chọn vai trò, AI bot sẽ đề cập đến @everyone mà bạn có thể không muốn.',
                'Hiển thị kênh giải đấu: Chọn vai trò mà bàn muốn hiển thị kênh giải đấu riêng tư',
              ],
            },
          ],
        },
        {
          title: '4. Thiết lập game',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(12).png',
              steps: [
                'Kích hoạt tính năng chọn tự động: Nếu bạn bật tính năng này, AI bot sẽ quyết định trò chơi nào sẽ phổ biến nhất cho máy chủ của bạn để bạn không cần phải chọn thủ công.',
                'Nếu Tính Năng Tự Chọn bị tắt, bạn chỉ cần chọn các trò chơi mà bạn muốn có các giải đấu trên máy chủ của mình. AI bot sẽ chỉ chạy các giải đấu trong nhóm trò chơi đã chọn.',
              ],
            },
          ],
        },
        {
          title: '5. Thiết lập thời gian',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(13).png',
              steps: [
                'Tự động chọn giờ: Nếu bạn bật tính năng này, AI bot sẽ quyết định thời gian nào sẽ thu hút nhiều người tham gia nhất và khởi động các giải đấu vào khoảng thời gian đó.',
                'Nếu tính năng tự động chọn giờ bị tắt, bạn chỉ cần chọn phạm vi thời gian mà bạn muốn AI bot khởi động các giải đấu. AI bot sẽ ra mắt các giải đấu trong phạm vi thời gian đã chọn.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'discord_commands',
      title: 'Danh sách đầy đủ các lệnh Discord',
      navSectionItems: [
        {
          title: '1. Dùng cho phòng chờ đăng ký giải đấu (tournament lobby)',
          innerContentList: [
            {
              steps: [
                '<strong>!register</strong>: lệnh này sẽ cho phép quá trình đăng ký bắt đầu .Chỉ có thể sử dụng sau khi thông báo đăng ký đã mở.',
                '<strong>!unregister</strong> :  Lệnh này sẽ xóa vị trí của bạn khi đã đăng ký cũng như xóa trong nhóm của bạn',
                '<strong>!timer</strong> :  Lệnh này sẽ cho bạn biết thời gian của ván đấu tiếp theo sẽ diễn ra cũng như nói là còn bao lâu',
                '<strong>!myteam</strong> :  Lệnh này sẽ cho bạn biết ai trong đội và tình trạng đăng ký của họ',
              ],
            },
          ],
        },
        {
          title: '2. Sử dụng trong tin nhắn cá nhân với bot',
          innerContentList: [
            {
              steps: [
                `<strong>!createteam</strong> <b class='highlight'><team name> <ingame username></b> : Lệnh này sẽ đăng ký một team mới trong danh sách. Bạn sẽ là người đầu tiên trong team này cho đến khi bạn chia sẽ mã đội nhóm để người khác tham gia team bạn.`,
                `<strong>!jointeam</strong> <b class='highlight'><team code> <ingame username></b> : Lệnh này sẽ mang bạn vào một team có sẵn`,
                `<strong>!joinsolo</strong> <b class='highlight'><ingame username></b> : Lệnh này sẽ giúp bạn đăng ký giải đấu solo`,
                `<strong>!checkin</strong> <b class='highlight'><code provided></b> : Nếu như giải đấu yêu cầu điểm danh, bạn sẽ cần dùng lệnh này khi thời gian điểm danh bắt đầu để hoàn tất và tham gia giải đấu`,
              ],
            },
          ],
        },
        {
          title: '3. Sử dụng trong phòng chờ thi đấu',
          innerContentList: [
            {
              steps: [
                `<strong>!result</strong> <b class='highlight'><team name></b> : Đây là lệnh gửi kết quả trận đấu của bạn đến bot. Và bạn cần đính kèm một ảnh chụp màn hình của màn hình chiến thắng cùng với lệnh nói trên`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'create_new_tournament',
      title: 'Tạo  giải đấu mới',
      description:
        '<i>Bước 1)~ 2) hoàn toàn giống như hiển thị ở trên trong Thiết lập Bot Tourney cho máy chủ Discord của bạn. Nếu bạn đã thực hiện các bước này rồi, bạn có thể bỏ qua bước 3)</i>',
      navSectionItems: [
        {
          title:
            '1. Từ menu chính của bạn ở bên trái, nhấp vào nút Tạo Tạo Giải đấu',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. Từ trang Giải Đấu Mẫu, chọn một trò chơi mà bạn muốn tạo giải đấu và nhấp vào Tùy chỉnh.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title:
            '3. Trong trang Tùy chỉnh Giải đấu, hãy cuộn xuống dưới cùng và chọn Cài đặt nâng cao.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(15).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(16).png',
              steps: [
                'Một thông báo sẽ nhắc bạn xác nhận hành động này. Chỉ cần nhấn vào Tiếp tục',
              ],
            },
          ],
        },
        {
          title: '4. Điền vào phần Thông tin cơ bản',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(17).png',
              steps: [
                'Tên giải đấu: Nhập tên giải đấu của bạn. Tên này sẽ xuất hiện dưới dạng tiêu đề Loại Game của bạn trong Discord. Các chữ cái sẽ được hiển thị bằng chữ in hoa. Biểu tượng cảm xúc được cho phép trong phần này.',
                'Trò chơi: Chọn trò chơi của bạn, sau đó chọn định dạng trò chơi của bạn. (ví dụ: PUBG M -> Duo) Điều này sẽ quyết định xem giải đấu của bạn sẽ là giải đấu có chia bảng hay giải đấu có nhiều người tham gia.',
                `Lịch thi đấu: Chọn thời gian bắt đầu đăng ký, thời gian kết thúc đăng ký và thời gian bắt đầu giải đấu. Thời gian này sẽ được hiển thị ở dưới cùng tại thông báo giải đấu của bạn. <div class='inner-content'><p>Thời gian bắt đầu đăng ký: là khi người chơi có thể bắt đầu đăng ký giải đấu của bạn trong kênh Discord. Trước thời điểm này, người chơi đã không thể đăng ký và lệnh !register sẽ không hoạt động trong thời điểm này. </p><p>Thời gian kết thúc đăng ký: Sau thời gian này, người chơi không thể đăng ký nữa. Thời gian kết thúc đăng ký không thể ít hơn 10 phút so với thời gian bắt đầu giải đấu. Quá trình điểm danh chỉ có thể bắt đầu sau khi đăng ký kết thúc. Ngoài ra, bạn chỉ có thể chia bảng đấu hoặc phòng chờ sau khi đăng ký kết thúc. </p><p>Thời gian bắt đầu giải đấu: Đây là thời gian giải đấu của bạn bắt đầu.</p></div>`,
                'Stream: Nếu bạn là một streamer và bạn muốn thông báo kênh phát video trực tuyến của mình cùng với thông báo giải đấu, hãy nhấp và " Bật Liên kết "và ghi đường link của bạn tại đây.',
                'Khu vực: Chọn quốc gia của bạn ở đây. Điều này sẽ quyết định ngôn ngữ của các văn bản sẽ có trong thông báo. (ví dụ: Hoa Kỳ -> Thông báo sẽ bằng tiếng Anh.)',
              ],
            },
          ],
        },
        {
          title: '5. Điền vào phần Chi tiết',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(18).png',
              steps: [
                'Mô tả: Bạn có thể ghi thông tin chung về giải đấu của bạn ở đây. (ví dụ: ngày & giờ, chế độ trò chơi, giới hạn người chơi, thời gian đăng ký, v.v.) Thông tin này sẽ được hiển thị trong thông báo ở đầu thông báo ngay bên dưới tiêu đề.',
                'Thể lệ: Bạn có thể đặt bất kỳ quy tắc cụ thể nào mà bạn muốn thêm vào giải đấu của mình. (ví dụ: cấm, giới hạn thời gian, BO3, v.v.) Thông tin này sẽ được hiển thị trong thông báo ngay bên dưới Mô tả.',
                'Giải thưởng: Bạn có thể ghi thông tin giải thưởng của mình vào phần này. Càng cụ thể càng tốt; Người chơi thường rất nhạy cảm về giải thưởng và số tiền. Thông tin này sẽ được hiển thị trong thông báo ngay bên dưới Thể Lệ.',
              ],
            },
          ],
        },
        {
          title: '6. Điền vào phần Nền tảng',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(19).png',
              steps: [
                'Chọn nền tảng: Chọn Discord',
                'Máy chủ Discord: Chọn máy chủ mà bạn muốn thông báo giải đấu của mình.',
                'Vai trò đề cập: Đây là vai trò người chơi sẽ được ping khi giải đấu được công bố trong Discord.',
                'Hiển thị cho các vai trò: Vai trò này sẽ có thể xem các thông báo và kênh giải đấu mà không bị ping. (Vai trò được đề xuất là @everyone trừ khi bạn muốn tạo một giải đấu riêng.)',
                'Khả năng hiển thị kênh: Khi bạn tạo bảng đấu / phòng chờ, bot sẽ tạo các kênh riêng cho người chơi đã đăng ký. Dựa theo vai trò mà bạn chọn ở đây thì họ có thể xem các kênh riêng đó. Vì vậy, chọn một vai trò mà bạn (quản trị viên giải đấu) được gắn thẻ. Nếu không, bạn đã không thể xem các kênh riêng.',
              ],
            },
          ],
        },
        {
          title: '7. Điền vào phần Cài đặt trận đấu',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(20).png',
              steps: [
                'Định dạng giải đấu: Điều này đã được quyết định bởi định dạng trò chơi và trò chơi mà bạn đã chọn trong phần Thông tin cơ bản.',
                'Đăng ký riêng lẻ (chỉ dành cho các giải đấu đội): Chọn tùy chọn này nếu bạn muốn thành lập các đội một cách ngẫu nhiên và không ưu tiên cho các team đã đăng ký trước đó',
                'Tối đa người chơi / Đội được phép: Chọn đội tối đa mà bạn muốn cho phép.',
                'Số lượng người chiến thắng: Chọn số lượng người chiến thắng mà bạn muốn. (1 ~ 3)',
                'Điểm danh Nhấp vào đây nếu bạn muốn kích hoạt quy trình điểm danh cho giải đấu của mình. Người chơi đã đăng ký phải điểm danh để tham gia vào sự kiện',
                'Thời gian điểm danh: Thời gian này sẽ quyết định thời gian điểm danh mà bạn sẽ cho phép trước khi giải đấu bắt đầu. Có một cửa sổ 10 phút sẽ xuất hiện mặc định giữa thời gian nhận phòng và thời gian bắt đầu giải đấu. Cửa sổ này có thể điều chỉnh. (ví dụ: nếu bạn chọn 20 phút, quy trình điểm danh sẽ bắt đầu 30 phút trước giải đấu và kết thúc 10 phút trước giờ giải đấu.)',
                'Danh sách chờ: Chọn tùy chọn này nếu bạn muốn bật danh sách chờ cho giải đấu của mình. Khi tắt, bạn chỉ có thể nhận người chơi tối đa như mặc định',
                'Tự động đăng kết quả: Khi chọn điều này, bạn có thể cho phép bot kiểm tra kết quả xác minh cho mỗi vòng. (ví dụ Team 1 gửi kết quả cho bot -> Bot hỏi Team 2 nếu kết quả đó là đúng -> Nếu Team 2 xác nhận hoặc không trả lời, bot sẽ cần bạn phải can thiệp.) Khi không chọn điều này, bạn sẽ xác minh từng kết quả trận đấu và người chiến thắng bằng tay.',
                'Cho phép Đội Chưa Hoàn Thành (chỉ dành cho các giải đấu đội): Bằng cách chọn điều này, người chơi sẽ có thể đăng ký tạo đội ngay cả khi đội của họ chưa hoàn thành. Điều này rất hữu ích khi bạn muốn cho phép các trưởng nhóm đăng ký đội của mình trước để giữ một vị trí trong giải đấu. Nếu điều này bị tắt, đăng ký sẽ chỉ hoàn thành khi tất cả các thành viên của mỗi đội đã hoàn thành đăng ký cá nhân.',
              ],
            },
          ],
        },
        {
          title: '8. Nhấp vào Tạo Mới để tiếp tục',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(21).png',
              steps: [
                'Nhấp vào <i>Tạo Mới</i> sẽ không thông báo giải đấu ngay lập tức. Công cụ giải đấu hỏi ngay nếu bạn muốn Xuất bản giải đấu. Xuất bản nó sẽ thông báo giải đấu trong máy chủ Discord của bạn. Bạn có thể luôn xuất bản nó sau bằng cách nhấp vào sau.',
                'Hãy chắc chắn xem xét tất cả các thông tin trước khi thông báo giải đấu của bạn. Sau khi thông báo, bạn sẽ không thể chỉnh sửa nữa.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'tournament_dashboard',
      title: 'Bảng Điều Khiển Giải Đấu',
      navSectionItems: [
        {
          title:
            '1. Khi giải đấu của bạn được tạo, bạn sẽ có thể thấy giải đấu của mình được liệt kê trong Bảng điều khiển.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(24).png',
            },
          ],
        },
        {
          title:
            '2. Nhấp vào một giải đấu để xem chi tiết và người chơi đã đăng ký, để quản lý bảng đấu và phòng chới hay gửi giải thưởng. (Tính năng giải thưởng chỉ khả dụng cho các giải đấu đối tác của game.tv trên máy chủ BlueStacks Discord.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(25).png',
              steps: [
                'Chỉnh sửa: Bạn có thể thay đổi bất kỳ thông tin nào bạn muốn bằng nút này. Hãy nhớ rằng việc chỉnh sửa thông tin trong công cụ sẽ không thay đổi thông tin mà đã được công bố trong máy chủ Discord của bạn.',
                'Công Bố / Không Công Bố: Nếu bạn chỉ tạo giải đấu của mình và chưa Công Bố thì bạn có thể nhấp vào nút Công Bố để thông báo. Nếu bạn đã Công Bố giải đấu của mình, nhưng muốn giữ đăng ký mới, bạn có thể làm như vậy bằng cách nhấp vào Không Công Bố. (Không Công Bố sẽ không xóa hoặc xóa thông báo trong máy chủ Discord của bạn.)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'during_registration_period',
      title: 'Trong thời gian đăng ký',
      navSectionItems: [
        {
          title:
            '1. Trong khoảng thời gian này, người dùng Discord sẽ có thể đăng ký tại kênh #tournament-lobby  bằng cách nhập lệnh !register lệnh nếu đăng ký mở tại thời điểm đó.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(26).jpg',
            },
          ],
        },
        {
          title:
            '2. Sau khi người dùng nhập lệnh "!register", họ sẽ nhận được một tin nhắn trực tiếp từ Bot Tourney để hỏi về thông tin tên nhân vật trong game của họ',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(27).png',
            },
          ],
        },
        {
          title:
            '3. Khi người dùng phản hồi lại Tourney Bot bằng lệnh chính xác trong tin nhắn trực tiếp, họ sẽ nhận được thông báo hoàn tất đăng ký từ Bot. (Nếu bạn không nhận được thông báo hoàn thành, thì xem như không đăng ký tham gia giải đấu và bạn nên thử đăng ký lại từ đầu.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(28).png',
              steps: [
                'Ngay khi quá trình đăng ký hoàn tất, người tham gia sẽ nhận được một vai trò mới trong discord; Tên của vai trò giống với tên của giải đấu của bạn.',
              ],
            },
          ],
        },
        {
          title:
            '4. Khi người dùng Discord đang đăng ký giải đấu, bạn sẽ có thể thấy có bao nhiêu người dùng đã đăng ký cho giải đấu của bạn trong bảng điều khiển của chúng tôi. Bạn cũng có thể kiểm tra tên của họ, xóa người chơi phát hoặc xóa nhóm bằng công cụ này.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(29).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(30).png',
            },
          ],
        },
        {
          title:
            '5. Nếu Điểm Danh được chọn, quy trình điểm danh sẽ bắt đầu tại thời điểm bạn đã đặt. (ví dụ: nếu bạn đặt 30 phút làm thời gian điểm danh, quá trình đăng ký sẽ bắt đầu 30 phút trước giải đấu.)',
        },
        {
          title:
            '6. Cả người dùng đã đăng ký và người dùng trong danh sách chờ sẽ nhận được yêu cầu điểm danh ký từ Tourney Bot qua tin nhắn trực tiếp trong Discord. Người dùng phải tuân theo hướng dẫn điểm danh Tourney Bot kèm theo và nhập lệnh chính xác để đủ điều kiện tham gia sự kiện.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(31).png',
            },
          ],
        },
        {
          title:
            '7. Người dùng sẽ nhận được thông báo điểm danh để hoàn tất đăng ký từ Tourney Bot nếu họ nhập đúng lệnh đăng ký.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(32).png',
            },
          ],
        },
      ],
    },
    {
      id: 'coordinating_tournament_bracketed',
      title: 'Giải đấu phối hợp - Thi đấu có chia bảng',
      navSectionItems: [
        {
          title:
            '1. Có 3 điều kiện cho phép bạn tạo bảng cho giải đấu của mình:',
          innerContentList: [
            {
              steps: [
                'a. Giải đấu của bạn đã đầy, và bạn đã không cóp mặt vì nằm trong danh sách chờ.',
                'b. Việc đăng ký của bạn đã kết thúc và bạn đã không cho phép quá trình điểm danh.',
                'c. Đăng ký và điểm danh của bạn đã kết thúc. (10 phút trước giờ thi đấu)',
              ],
            },
          ],
        },
        {
          title:
            '2. Khi bất kỳ một trong 3 điều kiện này được đáp ứng, bạn sẽ thấy nút Tạo khung trong tab Bảng Đấu. Nhấn vào để tạo bảng đấu của bạn.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(33).png',
            },
          ],
        },
        {
          title:
            '3. Ngay sau khi khung được tạo trong công cụ giải đấu của bạn, cùng một khung sẽ được công bố trong kênh Discord, đưa tất cả người tham gia giải đấu đã đăng ký.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(34).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(35).png',
            },
          ],
        },
        {
          title:
            '\n4. Cùng với thông báo bảng đấu, bot cũng sẽ tạo các kênh riêng cho tất cả các trận đấu trực tiếp. Mỗi kênh riêng chỉ mời những người tham gia trận đấu. Những người tham gia có thể sử dụng kênh riêng này để liên lạc với nhau về trận đấu của họ (ví dụ: chia sẻ mã phòng, chia sẻ ID người chơi) và báo cáo kết quả',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(36).png',
            },
          ],
        },
        {
          title:
            '5. Người chơi phải báo cáo kết quả trong kênh riêng, sử dụng lệnh <team name>"!register có kèm Kết quả được đăng ký chính xác.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                'Sau khi kết quả được gửi chính xác, bot sẽ trả lời xác nhận.',
              ],
            },
          ],
        },
        {
          title:
            '6. Khi kết quả được gửi, một chấm đỏ sẽ xuất hiện trên trận đấu để bạn (quản trị viên giải đấu) có thể thấy rằng kết quả đã được gửi.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(38).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(39).png',
              steps: [
                'Nếu hệ thống tự động đăng kết quả được chọn, thì bot sẽ lấy kết quả đầu tiên được gửi làm kết quả thực sự. Nếu không có kết quả mới nào được gửi trong 5 phút, bot sẽ tiến lên đội chiến thắng trong lần gửi kết quả đầu tiên.',
                'Nếu Tự động đăng kết quả bị tắt, sau đó bạn sẽ phải xem tệp đính kèm, xác minh kết quả, sau đó chọn người chiến thắng theo cách thủ công. (tức là nhấp vào người chiến thắng, sau đó chọn Cập nhật kết quả.)',
              ],
            },
          ],
        },
        {
          title:
            '7. Khi bảng đấu cuối và người chiến thắng cuối cùng được chọn, bot sẽ tự động thông báo người chiến thắng trong kênh giải đấu.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(40).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(41).png',
            },
          ],
        },
      ],
    },
    {
      id: 'coordinating_tournament_lobbied',
      title: 'Giải đấu phối hợp - Thi đấu tranh phòng chờ',
      navSectionItems: [
        {
          title:
            '1. Có 3 điều kiện cho phép bạn tạo phòng chờ cho giải đấu của mình:',
          innerContentList: [
            {
              steps: [
                'a. giải đầu đã đầy và không cho phép danh sách chờ',
                'b. Khi quá trình đăng ký kết thúc, và bạn không mở chức năng điểm danh',
                'c. Quá trình đăng ký và điểm danh đã kết thúc (10 phút trước giải đấu)',
              ],
            },
          ],
        },
        {
          title:
            '2. Khi bất kỳ một trong 3 điều kiện này được đáp ứng, bạn sẽ thấy nút Tạo phòng chờ sảnh trong tab Phòng Chờ. Nhấn vào đó để tạo phòng chờ của bạn.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(42).png',
            },
          ],
        },
        {
          title:
            '3. Khi trong phòng chờ, nhấp vào nút menu 3 dòng, sau đó nhấp vào Tạo Kênh. Làm như vậy sẽ tạo ra một kênh Discord riêng cho từng sảnh cho người chơi ở mỗi sảnh.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(43).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(44).png',
            },
          ],
        },
        {
          title:
            '4. Nếu bạn (quản trị viên giải đấu) muốn gửi tin nhắn đến từng sảnh (ví dụ: ID trận đấu và password), bạn có thể sử dụng tính năng Gửi tin nhắn từ mỗi sảnh. Người gửi sẽ là Tourney (bot), vì vậy sẽ bắt mắt người chơi. Hoặc bạn có thể gửi tin nhắn trực tiếp trên kênh bằng cách gõ ra. (bạn sẽ tự gửi trong trường hợp này.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(45).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(46).png',
            },
          ],
        },
        {
          title:
            '5. Nếu bạn không tạo từng trận đấu cho người chơi, bạn chỉ cần chỉ định một người chơi trong mỗi kênh riêng để tạo phòng trò chơi và chia sẻ mã / pw.',
        },
        {
          title:
            '6. Người chơi có thể báo cáo kết quả trong kênh riêng bằng cách sử dụng lệnh <team name>" command" Ảnh chụp màn hình phải được đính kèm để kiểm tra kết quả được đăng ký chính xác.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                'Sau khi kết quả được gửi chính xác, bot sẽ trả lời với xác nhận.',
              ],
            },
          ],
        },
        {
          title:
            '7. Khi kết quả được gửi, một chấm đỏ sẽ xuất hiện trên trận đấu để bạn (quản trị viên giải đấu) có thể thấy rằng kết quả đã được gửi. Nhấp vào Xem kết quả để xem ảnh chụp màn hình được gửi.',
          innerContentList: [
            {
              imageCaption:
                'Bạn không cần đợi kết quả nộp tới nếu bạn đã biết kết quả. (tức là nếu bạn đang theo dõi trận đấu, và có thể bạn đã biết kết quả rồi.)',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(47).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(48).png',
            },
          ],
        },
        {
          title: '8. Để chọn người chiến thắng của mỗi phòng chờ',
          innerContentList: [
            {
              imageCaption:
                'Nhấp vào nút menu 3 dòng, sau đó nhấp vào nút Ghi Lại Điểm',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(49).png',
              steps: [
                'Ghi điểm người chơi theo kết quả đã nộp. (Người chơi chiến thắng sẽ nhận được điểm số cao hơn.)',
                'Đối với trận đấu nhiều vòng, nhấp vào nút Tạo vòng ở phía dưới. Sau đó ghi thêm điểm theo kết quả.',
              ],
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(50).png',
              steps: ['Sau khi ghi xong, bấm vào Cập nhật.'],
            },
          ],
        },
      ],
    },
    {
      id: 'transferring_players',
      title: 'Chuyển người chơi sang phòng chờ',
      navSectionItems: [
        {
          title:
            '1. Nếu bạn cần có phòng chờ / chuyển sang phòng chờ  mới, bạn phải chọn Loại bỏ sự loại bỏ theo Định dạng Giải đấu.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(51).png',
              steps: [
                'Số lượng phòng chờ: Có bao nhiêu hành lang ban đầu mà bạn muốn có cho vòng sơ khảo của mình',
                'Đếm đội: Sẽ có bao nhiêu đội cho phòng chờ',
              ],
            },
            {
              imageCaption:
                '<i>* Nếu bạn tạo một giải đấu Sảnh đơn hoặc Nhiều người chơi, bạn sẽ không có tùy chọn để tạo ra các phòng chờ mới và do đó, bạn sẽ di chuyển / nâng cấp người chơi sang các phòng chờ mới. Như bạn có thể thấy trong ví dụ bên dưới (Giải đấu nhiều người chơi), nút + + để tạo một phòng chờ mới bị thiếu.</i>',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(52).png',
            },
          ],
        },
        {
          title:
            '2. Nếu Elimination được chọn làm Định dạng Giải đấu của bạn, bạn sẽ thấy một tùy chọn để tạo một phòng mới bên cạnh Số lượng phòng  ban đầu bạn đã chọn.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(53).png',
            },
          ],
        },
        {
          title:
            '3. Trong khi các phòng chờ ban đầu của bạn vẫn còn hoạt động, hãy nhấp vào nút + + để tạo một sảnh mới. Phòng chờ mới này là nơi bạn sẽ nâng cấp/ chuyển người chơi của mình cho vòng trong tương lai.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(54).png',
              steps: [
                'Phòng chờ nên trống khi bạn tạo ra',
                'Nếu bạn cần tạo nhiều phòng chờ mới, chỉ cần nhấp lại vào nút + + nữa.',
              ],
            },
          ],
        },
        {
          title:
            '4. Để nâng cấp / chuyển người chơi sang phòng chờ mới, trước tiên bạn phải KẾT THÚC phòng chờ. (Vui lòng tham khảo phần Kết thúc Giải đấu - Cuộc thi có tiền thưởng về cách kết thúc phòng chờ) Sau khi bạn kết thúc phòng chờ của mình, hãy nhấp vào nút Chỉnh sửa phòng chờ tại sảnh mới của bạn.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(55).png',
              steps: [
                '<i>* Xin hãy CẨN THẬN để không kết thúc toàn bộ giải đấu! Khi bạn kết thúc tất cả các phòng chờ, công cụ sẽ cung cấp cho bạn một cửa sổ bật lên, hỏi bạn có muốn kết thúc giải đấu không. Nếu bạn kết thúc giải đấu của mình, bạn sẽ KHÔNG thể chuyển người chơi hoặc thêm phòng chờ mới </i>',
              ],
            },
          ],
        },
        {
          title: '5. Chọn một phòng chờ mà bạn muốn di chuyển người chơi.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(56).png',
              steps: [
                'Bạn có thể nhấp vào Thêm Phòng chờ để thực hiện chuyển số lượng lớn từ nhiều Phòng chờ',
                'Trong ví dụ này, chỉ có Phòng 1 và Phòng 2 được kết thúc. Phòng 3 vẫn còn . Đó là lý do tại sao bạn chỉ xem Phòng 1 & 2 là tùy chọn.',
              ],
            },
          ],
        },
        {
          title: '6. Chọn vị trí của người chơi mà bạn muốn di chuyển.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(57).png',
              steps: [
                'Bạn có thể chọn nhiều vị trí.',
                'Vị trí ưu tiên đến vị trí của người chơi sau khi phòng chờ đã kết thúc. (Vị trí 1 = người chơi / đội hạng nhất trong sảnh đó)',
                'Ví dụ: nếu bạn muốn thăng hạng 2 người chơi hàng đầu từ Sảnh 1, bạn sẽ chọn vị trí 1 & 2.',
              ],
            },
          ],
        },
        {
          title:
            '7. Khi bạn đã hoàn tất việc chọn người chơi mà bạn muốn chuyển, hãy nhấp vào nút Lưu. ',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(58).png',
            },
          ],
        },
      ],
    },
    {
      id: 'ending_a_tournament_bracketed_competition',
      title: 'Kết thúc giải đấu - Giải Đấu Chia Bảng',
      description:
        'Giải đấu của bạn sẽ tự động kết thúc ngay khi người chiến thắng cuối cùng được chọn trong tab Bảng Thi Đấu',
    },
    {
      id: 'ending_a_tournament_lobbied_competition',
      title: 'Kết thúc giải đấu - Giải đấu phòng chờ',
      navSectionItems: [
        {
          title:
            '1. Khi tất cả các phòng chờ được cập nhật với điểm số và người chiến thắng chính xác, nhấp vào nút menu 3 dòng, sau đó nhấp vào nút Kết thúc phòng chờ cho mỗi phòng chờ. Hãy làm như vậy cho tất cả các phòng chờ. (Đó là một cách thực hành tốt để kết thúc phòng chờ ngay khi được cập nhật. Bạn sẽ không thể di chuyển người chơi nếu phòng chờ không kết thúc.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(59).png',
            },
          ],
        },
        {
          title:
            '2. Khi tất cả các phòng chờ đã được kết thúc, công cụ game.tv sẽ cho bạn biết rằng giải đấu của bạn sẽ kết thúc và kết quả sẽ được công bố.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(60).png',
              steps: [
                'Nếu bạn muốn kết thúc giải đấu và công bố kết quả, nhấp vào <i>Continue.</i>',
                'Nếu bạn muốn không kết thúc giải đấu cũng như không công bố kết quả, hãy nhấp vào <i>Close.</i> (Giải đấu của bạn sẽ không kết thúc và kết quả sẽ không được công bố.)',
                'Sẽ có một tùy chọn để kết thúc giải đấu và công bố kết quả nếu bạn chọn <i>Close.</i>',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sending_prizes_to_winners',
      title: 'Gửi giải thưởng cho người chiến thắng',
      description:
        '<p><i>** Tính năng này chỉ khả dụng cho các đối tác game.tv đang vận hành các giải đấu trên máy chủ BlueStacks Discord.</i></p>',
      navSectionItems: [
        {
          title:
            '1. Khi người chiến thắng được chọn và giải đấu kết thúc chính xác, bạn sẽ có thể thấy những người chiến thắng được liệt kê trong tab Giải thưởng.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(61).png',
            },
          ],
        },
        {
          title: '2. Chỉ cần điền thông tin cho mỗi người chiến thắng.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(62).png',
              steps: [
                'Hãy chắc chắn kiểm tra kỹ giải thưởng và người chiến thắng của bạn (ví dụ: khu vực, loại giải thưởng, v.v.)',
                'Một số tùy chọn có thể không dành cho một số khu vực nhất định. Để xem tất cả các tùy chọn giải thưởng có sẵn, vui lòng truy cập 1https: //www.seagm.com/1',
                'Bạn có thể thiết lập nhiều giải thưởng cho mỗi người chiến thắng. (ví dụ: đối với giải thưởng $ 20 của Google Play (US), bạn sẽ cần thiết lập hai giải thưởng $ 10 của Google Play (US).)',
                `(Dành cho NA) Nói chung, chúng tôi rất ổn với việc chi thêm tới 4 đô la để tìm một lựa chọn/số tiền thưởng phù hợp. Đối với Steam, - <div class='inner-content'>Với giá $ 5 / $ 10, vui lòng sử dụng lần lượt Steam (Hồng Kông) 40 HKD / 80 HKD. - <br>Với giá $ 20 / $ 25, vui lòng sử dụng Steam (Malaysia) tương ứng 80 RM / 100 RM.</div>`,
              ],
            },
          ],
        },
        {
          title:
            '3. Sau khi tất cả thông tin được điền chính xác, nhấp vào nút Gửi giải thưởng.',
          innerContentList: [
            {
              steps: [
                'Điều này sẽ gửi yêu cầu phân phối giải thưởng cho quản trị viên game.tv. Họ sẽ xem xét thông tin giải thưởng, sau đó chấp thuận hoặc từ chối yêu cầu.',
                'Khi yêu cầu được chấp thuận, người chiến thắng sẽ nhận được tin nhắn  từ Tourney Bot có chứa mã quà tặng có thể đổi được. Bạn cũng sẽ thấy rằng việc gửi quà đã được hoàn thành trong tab Giải thưởng.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cloning_existing_tournaments',
      title: 'Nhân bản các giải đấu hiện có',
      description:
        '<p>Bằng cách nhân bản các giải đấu hiện có, người tạo giải đấu có thể dễ dàng lặp lại các giải đấu có cùng định dạng nhiều lần mà không phải thiết lập chi tiết mỗi lần.<br /><i> ** Bạn không được sao chép một giải đấu và thay đổi chế độ giải đấu trước đó: phòng chờ và bảng thi đấu.</i></p>',
      navSectionItems: [
        {
          title:
            '1. Tìm một giải đấu mà bạn muốn sao chép từ bảng điều khiển của bạn. Ở cuối bên phải của giải đấu, nhấp vào nút menu 3 chấm.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(63).png',
              steps: [
                'Nếu bạn đã kết thúc giải đấu, nút Chỉnh sửa và Tạm dừng sẽ không khả dụng.',
                'Nếu bạn đã dọn sạch giải đấu, nút Clean up sẽ không khả dụng.',
              ],
            },
          ],
        },
        {
          title:
            '2. Nhấp vào <i>Nhân Bản</i>. Một màn hình mới sẽ hiển thị và bạn phải nhập một số thông tin tối thiểu.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(64).png',
              steps: [
                'Tên giải đấu: không được giống giải cũ. Bạn sẽ phải nhập một tên mới cho giải đấu',
                'Máy chủ Discord : tiếp tục từ giải đấu hiện tại. Chọn một máy chủ khác nếu bạn muốn sao chép giải đấu hiện tại sang một máy chủ khác.',
                'Trò chơi: Chế độ trò chơi sẽ tiếp tục từ giải đấu hiện có. Tùy chỉnh thiết lập nếu bạn muốn thay đổi.',
                'Lịch thi đấu: Lịch thi đấu sẽ không tiếp tục từ giải đấu hiện tại. Bạn sẽ phải nhập một lịch trình mới.',
                'Giải thưởng: Thông tin giải thưởng sẽ được chuyển từ giải đấu hiện tại. Chỉnh sửa nếu bạn muốn thay đổi.',
                'Stream: Điều này sẽ tiếp tục từ các giải đấu hiện có. Chỉnh sửa nếu bạn muốn thay đổi.',
                'Cài đặt nâng cao: Nếu bạn muốn thay đổi các chi tiết thiết lập khác, nhấp vào đây sẽ đưa bạn đến các tùy chọn thiết lập ban đầu.',
              ],
            },
          ],
        },
      ],
    },
  ],
};
