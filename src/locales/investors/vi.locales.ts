// tslint:disable: quotemark
import { IInvestorsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';

const language = SupportedLocalesEnum.VIETNAMESE;
export const InvestorsLocaleVietnamese: IInvestorsLocale = {
  metadata: {
    title: 'Nhà đầu tư - Game.tv',
    description:
      'Đọc thêm về những người ủng hộ và đối tác làm cho Game.tv trở thành cái tên lớn nhất trong nền thể thao điện tử',
  },
  heading: 'Nhà đầu tư',
  teamLink: `/${language}/team`,
  content:
    'game.tv được hỗ trợ bởi 5 công ty liên doanh ở Thung lũng Silicon, một số nhà phát triển trò chơi và đối tác chiến lược quan trọng trên toàn thế giới bao gồm Nhật Bản và Hàn Quốc. Chúng tôi chia sẻ một tầm nhìn chung rằng Mobile + 5G sẽ tạo ra một hệ sinh thái eSports di động khổng lồ và game.tv được định vị để nắm bắt cơ hội này.',
  buttonText: 'Tìm hiểu về đội ngũ của chúng tôi',
};
