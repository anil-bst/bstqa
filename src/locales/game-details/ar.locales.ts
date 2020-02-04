import { IGameDetailsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
import { HowToJoinArabic } from './../how-to-join/ar.locales';
const language = SupportedLocalesEnum.ARABIC;

export const GameDetailsLocalesArabic: IGameDetailsLocale = {
  metadata: {
    title: 'انضم إلى {{gameName}} الرياضة البطولات | Game.tv',
    description:
      'انضم إلى دورات {{gameName}} اليومية التي تعمل داخل الملايين من مجتمعات الألعاب حول العالم.',
  },
  gameDetail:
    'ابحث عن دورات الرياضات {{gameName}} التي يديرها المجتمع والتي تحدث عبر مجتمعات {{communityCount}} في جميع أنحاء العالم. انقر فوق "الانضمام" للدخول إلى {{gameName}} البطولة.',
  gameInfo: {
    title: 'ألا ترى دورة تحبها؟',
    content: 'إنشاء الخاصة بك',
    linkUrl: `/${language}/create-a-tournament`,
    noTournamentsTitle: ' لا توجد دورات قادمة متوفرة الآن!',
    noTournamentsContent: 'عرض جميع البطولات المتاحة',
    noTournamentsLink: 'العيش أو الماضي',
  },
  tournamentTitle: 'البطولات',
  platformStr: 'برنامج',
  discord: 'DISCORD',
  vs: 'ضد',
  joinHeading: 'انضم',
  viewMore: 'عرض المزيد',
  tournamentTypes: {
    heading: '{{gameName}} أنواع الدورات',
    blocks: [
      {
        content:
          'Classic Tournament (نمط الردهة) - Solo و Duo و Squad - 100 لاعب كحد أقصى',
        imageUrl: 'https://cdn.game.tv/tournaments/group-26.png',
      },
      {
        content: 'Erangle Quick Match (أسلوب اللوبي) - منفرد - 28 لاعبًا',
        imageUrl: 'https://cdn.game.tv/tournaments/group-27.png',
      },
      {
        content: 'Team Deathmatch (نمط اللوبي) - 2 فرق - 8 لاعبين كحد أقصى',
        imageUrl: 'https://cdn.game.tv/tournaments/group-28.png',
      },
      {
        content: 'وضع العدوى (نمط اللوبي) - 12 لاعب',
        imageUrl: 'https://cdn.game.tv/tournaments/group-29.png',
      },
    ],
  },
  prizeTypes: {
    heading: 'أنواع الجوائز لبطولات {{gameName}}',
    description:
      'الجوائز لهذه البطولات هي المضيف بالكامل وقد يقوم بعض المضيفين بإدارة البطولات للمتعة فقط ، دون أي جوائز. يمكنك العثور على الجوائز المدرجة في صفحة البطولة. في ما يلي بعض الجوائز التي منحها مضيفو الجوائز لمختلف دورات {{gameName}}.',
    blocks: [
      {
        content: 'المكافآت النقدية',
        imageUrl: 'https://cdn.game.tv/tournaments/group-13.png',
      },
      {
        content: 'رموز محفظة Steam',
        imageUrl: 'https://cdn.game.tv/tournaments/group-24.png',
      },
      {
        content: 'بطاقات الهدايا - Google play و Amazon و Steam وغيرها',
        imageUrl: 'https://cdn.game.tv/tournaments/group-23.png',
      },
      {
        content: 'رموز الاشتراك - Netflix و Apple Music و Spotify',
        imageUrl: 'https://cdn.game.tv/tournaments/group-22.png',
      },
      {
        content: 'و أكثر من ذلك بكثير',
        imageUrl: 'https://cdn.game.tv/tournaments/group-20.png',
      },
    ],
  },
  joinTournament: {
    heading: 'كيفية الانضمام إلى {{gameName}} البطولة',
    blocks: HowToJoinArabic.blocks,
  },
  startTournament: {
    heading: 'كيف تبدأ دورة {{gameName}}',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'خطوات',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "قم <a href='/user' class='click-here'>بدعوة برنامج Tourney</a> في خادم الفتنة ، سجّل الدخول وانقر على \"تفويض\"",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
          },
          {
            stepItem:
              'من القائمة الرئيسية على اليسار ، انقر فوق الزر "إنشاء بطولة"',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'اختر من بين مجموعة متنوعة من ألعاب الدورات - تخصيص تفاصيل الدورة من خلال النقر على زر "تخصيص" أو انقر على "نشر الآن" لاستخدام قوالب الدورات المحددة مسبقًا',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/4.jpg',
          },
          {
            stepItem:
              'ضمن تخصيص الدورة ، أضف وصفًا مخصصًا للبطولة وقواعدها وجوائزها وفقًا لمتطلباتك',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/5.jpg',
          },
          {
            stepItem:
              'بمجرد النشر ، سيقوم الروبوت تلقائيًا بإنشاء # # معلومات البطولة و # دورات البطولة - اللوبي في خادم الفتنة الخاص بك ؛ اكتب! قم بالتسجيل في القناة النصية # Tournament-lobby للمشاركة والتحقق من نجاح إنشاء الدورة {{gameName}}.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/6.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'تطبيق الويب Game.tv',
        stepsHeading: 'خطوات',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              'انتقل إلى <a href=\'/user\' class=\'click-here\'>تطبيق الويب</a> ، وانقر على "تسجيل الدخول باستخدام Twitter / Discord" وانقر فوق "تفويض"',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
          },
          {
            stepItem: 'انقر على أيقونة "+" في شريط التحكم أسفل الشاشة',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png',
          },
          {
            stepItem:
              'من القائمة الرئيسية على اليسار ، انقر فوق الزر "إنشاء بطولة"',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'اختر من بين مجموعة واسعة من ألعاب البطولة. يمكنك إما تخصيص تفاصيل الدورة من خلال النقر على زر "تخصيص" أو النقر على "نشر الآن" لاستخدام قوالب الدورات المحددة مسبقًا',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "بمجرد النشر ، سيتم إدراج دورة {{gameName}} في <a class='click-here' href='/user'>الصفحة الرئيسية</a> لتطبيق تطبيق Game.tv على الويب",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
      },
    ],
  },
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
