import { IFindTournamentLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.ARABIC;
export const FindTournamentLocalesArabic: IFindTournamentLocale = {
  metadata: {
    title: 'البحث عن بطولات Esports - لا رسوم الدخول | Game.tv',
    description:
      'يمكنك البحث عن دورات الرياضات الإلكترونية التي يمكنك الانضمام إليها مجانًا في جميع أنحاء العالم.',
  },
  heading: 'تصفح البطولات',
  content:
    'ابحث عن دورات الرياضات التي تحدث في ملايين من خوادم Discord عبر عشرات الألعاب المحمولة وأجهزة الكمبيوتر.',
  searchForm: {
    formPlaceholder: 'لعبة البحث على سبيل المثال. Pubg',
    searchInfo: 'عرض البطولات لـ',
    noresult: 'اللعبة لم يتم العثور على! يرجى البحث لعبة أخرى.',
  },
  gameInfo: {
    title: 'ألا ترى دورة تحبها؟',
    content: 'إنشاء الخاصة بك',
    noTournamentsTitle: ' لا توجد دورات قادمة متوفرة الآن!',
    noTournamentsContent: 'عرض جميع البطولات المتاحة',
    noTournamentsLink: 'العيش أو الماضي',
    linkUrl: `/${language}/create-a-tournament`,
  },
  topGameSection: {
    title: 'أفضل الألعاب',
  },
  tournamentTitle: 'البطولات',
  platformStr: 'برنامج',
  joinHeading: 'انضم',
  viewMore: 'عرض المزيد',
  gamePageUrl: `/${language}/find-tournaments`,
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
