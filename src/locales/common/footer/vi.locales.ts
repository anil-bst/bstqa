import { IFooterLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.VIETNAMESE;

export const FooterLocaleVietnamese: IFooterLocale = {
  navigationMenu: [
    {
      subMenu: [
        {
          name: 'Gặp Tourney',
          link: `/${language}`,
        },
        {
          name: 'Giải đấu',
          link: `/${language}/find-tournaments`,
        },
        {
          name: 'Các câu lệnh',
          link: `/${language}/how-to-use-tourney?tab=command`,
        },
        {
          name: 'Cách sử dụng Tourney',
          link: `/${language}/how-to-use-tourney`,
        },
        {
          name: 'Tài trợ',
          link: `/${language}/sponsorships`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Nhà đầu tư',
          link: `/${language}/investors`,
        },
        {
          name: 'Nhóm',
          link: `/${language}/team`,
        },
        {
          name: 'Liên hệ',
          link: `/${language}/contact`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'Điều khoản sử dụng và chính sách bảo mật',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Chính sách tranh chấp bản quyền',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'Chính sách Cookie',
          link: `/${language}/cookie-policy`,
        },
        {
          name: 'Thỏa thuận cấp phép người dùng cuối',
          link: `/${language}/license-agreement`,
        },
      ],
    },
    {
      subMenu: [
        {
          link: '/dashboard',
          name: 'Bảng điều khiển',
          target: '_blank',
        },
      ],
    },
  ],
  // copyrightNotice: 'Bản quyền©game.tv. Đã đăng ký Bản quyền.',
  copyrightNotice: 'Copyright©game.tv. All rights reserved.',
};
