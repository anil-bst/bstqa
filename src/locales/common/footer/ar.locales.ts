import { IFooterLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.ARABIC;

export const FooterLocaleArabic: IFooterLocale = {
  navigationMenu: [
    {
      subMenu: [
        {
          name: 'تعرف على Tourney',
          link: `/${language}`,
        },
        {
          name: 'البطولات',
          link: `/${language}/find-tournaments`,
        },
        {
          name: 'الأوامر',
          link: `/${language}/how-to-use-tourney?tab=command`,
        },
        {
          name: 'كيفية استخدام Tourney',
          link: `/${language}/how-to-use-tourney`,
        },
        {
          name: 'الرعايات',
          link: `/${language}/sponsorships`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'المستثمرين',
          link: `/${language}/investors`,
        },
        {
          name: 'الفريق',
          link: `/${language}/team`,
        },
        {
          name: 'اتصل بنا',
          link: `/${language}/contact`,
        },
      ],
    },
    {
      subMenu: [
        {
          name: 'شروط الاستخدام وسياسة الخصوصية',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'حقوق الطبع والنشر سياسة النزاع',
          link: `/${language}/terms-and-privacy`,
        },
        {
          name: 'سياسة ملفات الارتباط',
          link: `/${language}/cookie-policy`,
        },
        {
          name: 'نهاية اتفاقية ترخيص المستخدم',
          link: `/${language}/license-agreement`,
        },
      ],
    },
    {
      subMenu: [
        {
          link: '/dashboard',
          name: 'لوحة القيادة',
          target: '_blank',
        },
      ],
    },
  ],
  // copyrightNotice: 'حقوق التأليف والنشر © game.tv. كل الحقوق محفوظة.',
  copyrightNotice: 'Copyright©game.tv. All rights reserved.',
};
