import { IHomeLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.ARABIC;
export const HomeLocaleArabic: IHomeLocale = {
  metadata: {
    title: 'Tourney - Esports Discord Bot مدعوم من الذكاء الاصطناعي',
    description:
      'يمكنك استضافة وتشغيل الآلاف من بطولات Esports المحمولة في أي مجتمع ألعاب من خلال بوت البطولة لدينا ، Tourney.',
  },
  heroSection: {
    heading: 'تعرف على Tourney',
    content:
      'مساعد Esports مدعوم من الذكاء الاصطناعي. يدير بطولتك حتى تتمكن من التركيز على مجتمعك',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/global.png',
        logoExtraClasses: 'global-logo',
        link: '/user',
        name: 'إطلاق التطبيق',
        extraClasses: 'alternate-background',
      },
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        logoExtraClasses: 'discord-logo',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'دعوة Tourney',
      },
    ],
    discoverButtonTitle: 'إكتشف أكثر',
  },
  whyTourneySection: {
    heading: 'لماذا Tourney',
    content:
      'من الصعب إدارة دورة لمجتمعك. تتبع من يلعب ضد من ، الذي ينضم إلى الانضمام ، ما هي أعدل المنافسات ، ويثبت من فاز - هذا كثير. ستقوم Tourney بإدارة بطولاتك إما كمساعد أو بمفرده اعتمادًا على مجتمعك. يمكن أن يساعدك الذكاء الاصطناعى القوي وميزاته على بناء مجتمع أقوى وأكثر متعة.',
  },
  uHostSection: {
    heading: 'استضفت و  استضفت - الذكاء الاصطناعي  و مضيف الذكاء الاصطناعي',
    content:
      'تمنحك ثلاثة أوضاع رئيسية للبطولة حرية كاملة في كيفية تشغيل الألعاب.',
    hostTypes: [
      {
        heading: 'استضفت',
        imageAlt: 'uHost',
        content:
          'اختر من قالب دورة أو تخصيص الخاصة بك. نشر. افت ، ستنشئ Tourney جميع القنوات و رسالة مباشرة الأدوار التي ترغب في الحصول على الكرة المتداول.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost.png',
      },
      {
        heading: 'استضفت - الذكاء الاصطناعي',
        imageAlt: 'uHost AI-Assistant',
        content:
          'يساعدك Tourney على إدارة بطولتك ويوفر إرشادات لكل لاعب فيما بين المباريات وأكثر من ذلك بكثير.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost-assistant.png',
      },
      {
        heading: 'مضيف الذكاء',
        imageAlt: 'aiHost',
        content:
          'سيختار Tourney اللعبة والوقت والشكل ويدير البطولة بالكامل بمفرده من البداية إلى النهاية.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/ai-Host.png',
      },
    ],
    templateSection: {
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/templates.png',
      imageAlt: 'Templates',
      heading: 'قوالب',
      content:
        'يأتي Tourney مع العشرات من قوالب الدورات التي تم تكوينها مسبقًا حتى تتمكن من النقر فوق نشر والذهاب.',
    },
    messagingSection: {
      imageAlt: 'DMs and Messaging',
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/dms.png',
      heading: 'رسالة ورسائل مباشرة',
      content:
        'يمكن لـ Tourney إرسال رسائل خاصة بأدوار اللعبة أو أي دور تختاره لإعلامهم بدورة جديدة. يحدث كل التنظيم في قناة جديدة تنشئها Tourney ويتم إرسال جميع دعوات اللوبي والتوفيق عبر رسالة مباشرة.',
    },
  },
  perksSection: {
    heading: 'بدلات',
    content: 'لن تكون جولة Tourney كاملة بدون الكثير من الامتيازات.',
    perksList: [
      {
        content: 'تشغيل طن من البطولات؟ عظيم لدينا نظام الطبقة لمكافأتك.',
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/perk-tournaments.png',
        imageAlt: 'مكافأة بطولة تيير',
      },
      {
        content: 'تيار البطولات الخاصة بك؟ مثالي ، لدينا ملحق OBS لعرضه',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-obs.png',
        imageAlt: 'في المنزل OBS البرنامج المساعد للتدفق',
      },
      {
        content:
          'ترغب في تشغيل الدوري في الخادم الخاص بك؟ بينجو ، لدينا ذلك أيضًا!',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-league.png',
        imageAlt: 'تنظيم الدوريات!',
      },
    ],
  },
  graphsSection: {
    heading: 'الأدوار',
    content:
      'لمزيد من البطولات التي تجريها مع Tourney ، كلما زادت المنافع التي تفتحها. يظهر دورك في لوحة المتصدرين على خادم Game.tv Discord وتتلقى كل مجموعة من الامتيازات بمجرد الانتقال إلى الدور التالي.',
    graphContent: {
      previousTitle: 'سابق',
      nextTitle: 'التالى',
      perksTitle: 'بدلات',
      forTitle: 'إلى',
      graphList: [
        {
          type: 'bronze',
          imageCaption: 'برونز',
          imageAlt: 'Bronze',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: '1 - 6 بطولات في الأسبوع',
          perks: [
            'حصري Tourney التعبيرات',
            'الملامح والشارة',
            'فتح تورني الذكاء الاصطناعي',
          ],
        },
        {
          type: 'silver',
          imageCaption: 'فضة',
          imageAlt: 'Silver',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: '7+ بطولات في الأسبوع',
          perks: ['2  Nitro لخادم Discord الخاص بك', 'فتح البطولات'],
        },
        {
          type: 'gold',
          imageCaption: 'ذهب',
          imageAlt: 'Gold',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration:
            'قم بإجراء دوري يضم 300 مشارك أو أكثر من المشاركين / الموسم',
          perks: ['رعاية مضمونة جائزة الدوري'],
        },
      ],
    },
  },
  tourneyEmotesSection: {
    heading: 'تعبيرات Tourney',
    content:
      'مقفلة في البرونزية ، يمكنك الحصول على 42 مشاعر مذهلة وعالية الوضوح لاستخدامها في الخادم الخاص بك. فهي مسبقة الحجم ، وقح ، وعلى استعداد للذهاب.',
  },
  profilesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/profiles.png',
        heading: 'مظهر',
        imageAlt: 'Profiles',
        content:
          'غير مقفلة بالبرونز ، يحصل اللاعبون في دوراتك تلقائيًا على ملفات شخصية يمكنهم تخصيصها. يعرض كل ملف تعريف الألعاب التي تم لعبها وسجل الفوز / الخسارة وتصنيف اللاعب. تساعد تصنيفات اللاعبين في التوفيق والتقدم في الدوري.',
      },
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/badges.png',
        heading: 'شارات',
        imageAlt: 'Badges',
        content:
          'اربح الألعاب واربح شارات لاظهار مهاراتك. مع زيادة ELO أو فوزك بالبطولات والجوائز ، تكسب شارات حصرية في ملفك الشخصي والتي تأتي في بعض الأحيان مع بعض الامتيازات الإضافية فائقة السرية والحصرية.',
        reverse: true,
      },
    ],
  },
  tourneyAiSection: {
    heading: 'Tourney الذكاء الإصطناعي',
    content1:
      'بمجرد أن تضغط على البرونزية ، تفتح الذكاء الاصطناعي. يمكن تمكين الذكاء الاصطناعي و Tourney تشغيل البطولات تلقائيًا في مجتمعك. ضع في اعتبارك أن بطولات  استضفت هي فقط التي تعتمد على تقدم المستوى الخاص بك. لا تحسب دورات الذكاء الاصطناعي (لكنها رهيبة ويجب تشغيلها بجانب استضفت).',
    content2: '',
  },
  leaguesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/league.png',
        heading: 'البطولات',
        imageAlt: 'Leagues',
        content:
          'غير مقفلة بالذهب ، يمكن لـ Tourney إدارة دوري كامل في الخادم الخاص بك. ستتاح للاعبين على الخادم الخاص بك الفرصة للتنافس على نظام متوازي المستوى وكسب رعاية شهرية إذا احتلوا المرتبة الأولى في قائمة المتصدرين الوطنيين.',
      },
    ],
  },
  getBoostedSection: {
    heading: 'الحصول على دفعة',
    content:
      'تصل فضة وسنقدم لك خادم Discord ليس واحدًا ، ولكن اثنين من التعزيزات لتحصل على هذه المزايا الرائعة من المستوى 1. طالما تدير سبع دورات أو أكثر كل أسبوع (من الاثنين إلى الأحد) ، فسوف نستمر في تعزيز الخادم الخاص بك. إذا سقطت أقل من سبع بطولات كل أسبوع ، فبإمكاننا إزالة التعزيزات حتى تعود إلى سبع بطولات أو أكثر. بالإضافة إلى ذلك ، يمكنك فتح القدرة على إنشاء بطولات دوري لمجتمعك باستخدام Tourney’s AI.',
    imgDesktopUrl: 'https://cdn.game.tv/images/meet-tourney/get-boosted.png',
    imgMobile1Url:
      'https://cdn.game.tv/images/meet-tourney/get-boosted-mob1.png',
    imgMobile2Url:
      'https://cdn.game.tv/images/meet-tourney/get-boosted-mob2.png',
    backgroundImgUrl:
      'https://cdn.game.tv/images/meet-tourney/get-boosted-bg.png',
    getBoostedLevels: {
      perks: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-white.png',
        heading: 'اكراميات المستوى 1 - مفتوح ',
        mainlabel: 'مفتوح',
        subheading: 'اكراميات الخادم المعززة -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/emoji.png',
            label: '+50 خادم فتحات الرموز التعبيرية (ليصبح المجموع 100)',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/audio.png',
            label: '128 كيلو بايت في الثانية جودة الصوت',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/gif-icon.png',
            label: 'أيقونة خادم متحرك',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/server.png',
            label: 'خادم مخصص دعوة الخلفية',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/live.png',
            label: '720p 60fps انتقل إلى البث المباشر',
          },
        ],
      },
      boostedServer: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-gold.png',
        heading: 'التأهل لخادم معززة',
        subheading: 'ما تحتاج إلى معرفته -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'يجب أن تكون البطولات استضفت أو استضفت الذكاء الإصطناعي ، بطولات الذكاء الإصطناعي  لا تتناسب مع المعدل الأسبوعي.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'يجب أن يكون معدل البطولات 50٪ كحد أدنى للتأهل. (وهذا يعني أنه في  حالة وجود ست عشرة دورة في مسابقة ، فإن ثمانية أشخاص على الأقل  يحتاجون إلى اللعب في الدورة الخاصة بك لحساب متوسط ​​أسبوعي.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'نحن ننظر إلى متوسط ​​البطولات الخاصة بك في الأسبوع. تشغيل ثلاث بطولات يومًا واحدًا  وأربع بطولات أخرى يشبه تنظيم دورة واحدة كل يوم.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'يمكن إزالة التعزيزات إذا انخفض متوسط ​​بطولتك إلى أقل من سبعة في أسبوع معيّن  - الجمعة (بتوقيت المحيط الهادئ).',
          },
        ],
      },
    },
  },
  prizeSponsorshipSection: {
    items: [
      {
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/prize-sponsorships.png',
        heading: 'رعاية الجائزة',
        imageAlt: 'رعاية الدوري',
        content:
          'بمجرد وصولك للذهب من خلال إدارة دوري في مجتمعك ، سنقوم برعاية جوائز الدوري لكل موسم طويل في الشهر. ستأتي الجوائز من شركائنا الرائعين مثل MSI و Intel ومئات من مطوري الألعاب وقد تشمل النقود أو بطاقات الهدايا أو الأجهزة أو البضائع أو العناصر الموجودة داخل اللعبة.',
      },
    ],
  },
  availableGamesSection: {
    heading: 'الألعاب المتاحة',
    content: 'تمت الإضافة أسبوعيًا',
    viewMoreGames: 'عرض المزيد',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'دعوة Tourney',
      },
    ],
  },
  gamelink: `/${language}/find-tournaments`,
};
