import { IHeaderLocale } from '@app/abstractions/locale/common';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.ARABIC;
export const HeaderLocaleArabic: IHeaderLocale = {
  link: `/${language}`,
  navigationMenu: [
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
    {
      name: 'لوحة القيادة',
      link: '/dashboard',
      target: '_blank',
    },
    {
      name: '',
      link: 'javascript:void(0)',
      classes: 'nav-search-block',
    },
    {
      name: 'دعوة Tourney',
      link:
        'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
      target: '_blank',
      classes: 'menu-box',
    },
  ],
  searchForm: {
    formPlaceholder: 'لعبة البحث على سبيل المثال. Pubg',
    searchInfo: 'عرض البطولات لـ',
    noresult: 'اللعبة لم يتم العثور على! يرجى البحث لعبة أخرى.',
  },
};
