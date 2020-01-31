import { ISponsorshipsLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const SponsorshipsLocalesArabic: ISponsorshipsLocale = {
  metadata: {
    title: 'رعاية Esports للهواتف المحمولة مع Tourney و Game.tv',
    description: 'رعاية Esports للهواتف المحمولة مع Tourney و Game.tv',
  },
  sponsorshipSection: {
    title: 'برعاية Esports لمجتمعك',
    contents: [],
    imageUrl:
      'https://cdn.game.tv/images/meet-tourney/sponsorship-banner-ar.png',
  },
  playSponsorSection: {
    blocks: [
      {
        title: 'كيف يحصل اللاعبون على رعاية؟',
        contents: [
          'عندما تدير إحدى الدوريات داخل مجتمعك ، يتتبع Tourney أداء كل لاعب عبر جميع الخوادم مع تثبيت Tourney. سيحصل أفضل 8 لاعبين في كل بلد في نهاية كل موسم على رعاية بقيمة 500 دولار شهريًا.',
          'كمكافأة للمجتمع الذي ساعد هؤلاء اللاعبين على النمو ، سوف يحصل المجتمع أيضًا على مكافأة حصرية أيضًا!',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/get-sponsorship.png',
        imageAlt: 'الحصول على برعاية',
      },
      {
        title: 'رعاية',
        contents: [
          'نظرًا لأن اللاعبين يتنافسون في دوري خادمك ، فإنهم سيحققون أدوارًا في كسب مزايا مختلفة. بمجرد وصولهم إلى الدور ذهب ، يصبحون مؤهلين للوحة المتصدرين الوطنية. كل شهر هو موسم جديد حيث نختار أفضل 8 لاعبين من المتصدرين الوطنيين. إذا كان الخادم الخاص بك يحتوي على أعضاء من جميع أنحاء العالم ، فلا بأس بذلك. سيحتاج اللاعبون إلى التحقق من بلد إقامتهم في ملفاتهم الشخصية ، ونحن نشجعكم على مساعدة مجتمعك على القيام بذلك.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship.png',
        imageAlt: 'رعاية',
      },
    ],
  },
  verifiedBadgeSection: {
    blocks: [
      {
        title: 'شارة التحقق',
        contents: [
          'اللاعبون الذين وصلوا إلى فضة ، سيتمكنون من الحصول على "تم التحقق منه" والحصول على شارة خاصة في صفحة ملفهم الشخصي ليراها الجميع. سيتمكن لاعبو "تم التحقق منه" فقط من المشاركة في ذهب وكسب رعاية.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/verified-badge.png',
        imageAlt: 'شارة التحقق',
      },
      {
        title: 'البطولات',
        contents: [
          'سوف يحول Tourney الخادم الخاص بك إلى رابطة خاصة به. سيتنافس اللاعبون في الأحداث التي تجريها باستخدام uHost أو تلقائيًا من خلال aiHost. يخطر Tourney اللاعبين بأدائهم ودورهم إما من خلال أوامر في الدردشة أو يمكن للاعبين إلقاء نظرة على ملفاتهم الشخصية على Game.tv/users.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/leagues-spons.png',
        imageAlt: 'البطولات',
      },
    ],
  },
  leaderboardSection: {
    title: 'المتصدرين الوطني',
    contents: [
      'سيحصل اللاعبون في مجتمعك على تصنيف داخل دوري مجتمعك ولكن يمكنهم أيضًا التحقق من موقعهم في المتصدرين الوطنيين في ملفاتهم الشخصية على Game.tv أو باستخدام أمر "موقعي". يمكن للاعبين المعتمدين فقط الوصول إلى المتصدرين الوطنيين',
    ],
    desktopImageUrl:
      'https://cdn.game.tv/images/meet-tourney/leaderboard-desk.png',
    mobImageUrl: 'https://cdn.game.tv/images/meet-tourney/leaderboard-mob.png',
  },
  tiersSection: {
    content: {
      title: 'الأدوار',
      contents: [
        'عندما يفوز اللاعبون ، يتقدمون في صفوف الدوري ويكسبون مزايا عديدة. بمجرد وصولهم إلى الفئة الماسية ، يصبحون مؤهلين للحصول على المتصدرين الوطنيين ويمكنهم الحصول على رعاية كل شهر يقيمون في المراكز الثمانية الأولى. يمكن للاعبين الاطلاع على تقييماتهم في ملفاتهم الشخصية أو عن طريق استدعاء أمر "تقييمي".',
      ],
    },
    graphContent: {
      previousTitle: 'سابق',
      nextTitle: 'التالى',
      perksTitle: 'بدلات',
      forTitle: 'إلى',
      graphList: [
        {
          type: 'برونز',
          imageCaption: 'برونز',
          imageAlt: 'برونز',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: 'ELO 800 - 1300',
          perks: ['حصري Tourney التعبيرات', 'الملامح والشارة'],
        },
        {
          type: 'فضة',
          imageCaption: 'فضة',
          imageAlt: 'فضة',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: 'ELO 1301 - 1800',
          perks: ['شارة التحقق'],
        },
        {
          type: 'ذهب',
          imageCaption: 'ذهب',
          imageAlt: 'ذهب',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: 'ELO 1800+',
          perks: ['حصري Tourney التعبيرات'],
        },
      ],
    },
  },
};
