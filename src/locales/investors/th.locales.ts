import { IInvestorsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';

const language = SupportedLocalesEnum.THAI;
export const InvestorsLocaleThai: IInvestorsLocale = {
  metadata: {
    title: 'Investors - Game.tv',
    description: 'รายละเอียดของผู้สนับสนุนและพันธมิตรในการพัฒนา Game.tv',
  },
  heading: 'Investors',
  teamLink: `/${language}/team`,
  content:
    'game.tv ได้รับการสนับสนุนจาก 5 สถาบันการลงทุนใน Silicon Valley, บริษัทผู้พัฒนาเกมและพาร์ทเนอร์สำคัญจากทั่วโลกรวมถึงในญี่ปุ่นและเกาหลี เรามีความเชื่อมั่นร่วมกันว่า Mobile + 5G จะสร้างระบบฟันเฟืองของอีสปอร์ตเกมมือถือให้เข้มเเข็ง และ  game.tv ก็อยู่ในสถานะที่แสนพิเศษที่จะสามารถเป็นผู้นำในวงการได้',
  buttonText: 'ดูทีมของเรา',
};
