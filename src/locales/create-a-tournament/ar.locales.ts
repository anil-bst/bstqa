import { ICommunityTournamentsType } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.ARABIC;

export const CreateATournamentLocalesLocaleArabic: ICommunityTournamentsType = {
  metadata: {
    title: 'كيفية تشغيل بطولات Esports للهواتف المحمولة | Game.tv',
    description:
      'ابدأ بطولاتك ودورياتك الخاصة باستخدام Game.tv’s Discord bot Tourney أو تطبيق Game.tv.',
  },
  heroSection: {
    heading: 'إنشاء - المضيف - اللعب',
    content:
      'قم بإنشاء دورات مباشرة داخل مجتمع Discord أو على تطبيقنا في بضع خطوات سهلة',
    bannerDeskTopImageUrl: 'https://cdn.game.tv/create_tournament/banner.png',
    bannerMobImageUrl: 'https://cdn.game.tv/create_tournament/banner-mob.png',
  },
  discordSection: {
    heading: 'Discord',
    content:
      'تشغيل البطولات داخل مجتمع Discord يعني أن اللاعبين لن يضطروا أبدًا إلى مغادرة الخادم الخاص بك. كل ما يحتاجون إلى القيام به للتسجيل ، وتسجيل الوصول ، واللعب يحدث عبر أدوار مخصصة و DM. تهتم Tourney بالتوفيق مما يعني أعدل التنافسات. بعد اللعبة ، يمكن للاعبين التحقق من ترتيبهم ودرجة GELO على صفحة ملفهم الشخصي.',
    btnText: 'دعوة Tourney',
    steps: [
      {
        title: 'تثبيت Tourney وانتقل إلى',
        linkString: 'لوحة القيادة',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step1.png',
        linkUrl: '/dashboard',
      },
      {
        title: 'انقر فوق "إنشاء بطولة" واختر لعبتك',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step2.png',
      },
      {
        title: 'تخصيص البطولة أو استخدام القوالب الموجودة لدينا',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step3.png',
      },
      {
        title: 'انقر فوق "نشر" وستنشئ Tourney الردهة أو القوس في خادم Discord.',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step4.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/discord_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/discord.png',
  },
  gameSection: {
    heading: 'تطبيق Game.tv',
    content:
      'إذا لم يكن لديك خادم Discord أو ترغب في دعوة لاعبين من خارج Discord ، يمكنك استخدام التطبيق لدينا لإنشاء بطولات. تمامًا مثل Discord ، ستنشئ Tourney البطولات الخاصة بك وتنظمها وتديرها. ستتلقى أنت والمشاركون إشعارات مباشرة في التطبيق حول التطابقات القادمة ، والتوفيق ، وتحديثات القوس ، والمزيد. يمكنك أيضًا ربط حسابك على Twitter ومشاركة تقدم المطابقة الخاص بك وكذلك السماح للأشخاص بالانضمام مباشرة عبر Twitter.',
    btnText: 'إطلاق التطبيق',
    steps: [
      {
        title: 'اذهب الى',
        linkString: 'تطبيق Game.tv',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step1.png',
        linkUrl: '/user',
      },
      {
        title: 'تسجيل الدخول وانقر فوق علامة + في شريط التحكم في أسفل الشاشة',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step2.png',
      },
      {
        title: 'تخصيص البطولة أو استخدام القوالب الموجودة لدينا',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step3.png',
      },
      {
        title: 'انقر فوق "نشر" وستنشئ Tourney الردهة أو القوس في خادم Discord.',
        imgUrl: 'https://cdn.game.tv/crete_tournament/step-4-1-new.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/game_global_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/game.png',
  },
  locales: `/${language}`,
};
