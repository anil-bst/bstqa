import { IHowToUseTourneyLocale } from '@app/abstractions';
// tslint:disable: max-line-length
// tslint:disable: quotemark
export const HowToUseTourneyLocaleArabic: IHowToUseTourneyLocale = {
  metadata: {
    title: 'Game.tv - كيفية استخدام Tourney',
    description: 'تعلم كيفية استخدام Tourney لمجتمعك',
  },
  navigationSections: [
    {
      id: 'create_new_accoutn',
      title: 'انشاء حساب جديد',
      isActive: true,
      navSectionItems: [
        {
          title:
            '1. (هذه الخطوة مخصصة لشركاء game.tv فقط. إذا كنت تنشئ بطولات على الخادم الخاص بك ، فيرجى الانتقال إلى الخطوة 2.) قم بمشاركة اسم مستعار Discord الخاص بك ومعرف المستخدم لمشرف game.tv',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0.jpg',
              imageCaption:
                'يجب أن يشتمل الاسم المستعار للخلاف على رقم رقمي مكون من 4 أرقام',
              steps: [
                "معرف الخلاف: إليك كيفية العثور على معرف المستخدم الخاص بك <a href='https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-'>https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-</a>",
                'انتظر game.tv admin لتأكيد معك أنه تم إعداد الحساب لإنشاء البطولة.',
              ],
            },
          ],
        },
        {
          title:
            "2. زيارة<a href='https://esports.game.tv/nimda'> https://esports.game.tv/nimda</a>",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(1).png',
              imageCaption: 'انقر فوق "تسجيل الدخول باستخدام Discord"',
            },
            {
              imageCaption: 'انقر فوق "تفويض"',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(2).png',
            },
          ],
        },
      ],
    },
    {
      id: 'setting_up_tourney',
      title: 'إعداد Tourney Bot لخادم Discord الخاص بك',
      navSectionItems: [
        {
          title:
            '1. من القائمة الرئيسية على اليسار ، انقر فوق الزر "إنشاء بطولة"',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. من صفحة قوالب الدورات ، ابحث عن لعبة ترغب في إنشاء دورة لها وانقر فوق تخصيص.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title: '3. في صفحة تخصيص الدورة ، انقر فوق إضافة رابط خادم آخر.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(5).png',
            },
          ],
        },
        {
          title:
            '4. سوف يطفو المتصفح ويظهر Discord واجهة المستخدم ، ويطلب منك تحديد خادم لإضافة Bot إلى.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(6).png',
              steps: [
                'ستظهر فقط الخوادم التي كنت المسؤول فيها في القائمة المنسدلة.',
                'حدد الخادم الذي تريد تثبيت الروبوت عليه ، ثم انقر فوق تفويض.',
              ],
            },
          ],
        },
        {
          title:
            '5. عند التصريح بشكل صحيح ، ستحصل على شاشة تأكيد في المتصفح نفسه. الآن تم تثبيت Tourney Bot في خادم Discord الخاص بك.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(7).png',
            },
          ],
        },
        {
          title: '6. تحقق من خادم Discord للتأكد من أن الروبوت قد تم تثبيته.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(8).png',
            },
          ],
        },
      ],
    },
    {
      id: 'tourney_ai_mode',
      title: 'وضع تورني الذكاء الاصطناعي',
      description:
        '<p>يسمح وضع "Tourney الذكاء الاصطناعي" لـ Tourney الذكاء الاصطناعي Bot بإنشاء البطولات وتشغيلها وتشغيلها بمفردها! </p><p><i>** لاحظ أن هذا الوضع سيكون متاحًا فقط لمشرفي الخادم. لن تتمكن الأدوار الأخرى بإذن البطولة من الوصول إلى هذا الوضع.</i></p><p><i> ** تتوفر ألعاب وضع الأقواس فقط لوضع AI. (على سبيل المثال ، PUBG M ، تم استبعاد Free Fire)</i></p>',
      navSectionItems: [
        {
          title:
            '1. في لوحة القيادة ، يوجد زر Tourney الذكاء الاصطناعي. انقر عليه.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(9).png',
            },
          ],
        },
        {
          title:
            '2. في صفحة إعدادات Bot ، حدد الخادم أولاً من القائمة المنسدلة. ثم انقر على تمكين الذكاء الاصطناعى.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(10).png',
              steps: [
                'يمكنك إضافة Tourney Bot إلى الخادم الخاص بك عن طريق تحديد إضافة الخادم هنا إذا لم يتم تثبيت Tourney Bot حتى الآن.',
                'سيؤدي النقر فوق زر تمكين الذكاء الاصطناعي إلى فتح قائمة جديدة لك.',
              ],
            },
          ],
        },
        {
          title: '3. إعداد المشرف',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(11).png',
              steps: [
                'مشرف الوضع: سيتم سرد مدراءك هنا. يمكن أن يكون لكل مشرف إعدادات مختلفة. حدد المسؤول الذي تريد استخدامه.',
                'الأدوار التي يجب ذكرها: في هذا القسم ، سيتعين عليك إخبار الذكاء الاصطناعي bot بالأدوار التي يجب اختبارها لكل لعبة من دورات AI. إذا لم تختر الدور ، فسيذكر الذكاء الاصطناعي boteveryone الذي قد لا تريده.',
                'مطابقة رؤية القناة: حدد الدور الذي ترغب في الحصول على رؤية لقنوات الدورات الخاصة به.',
              ],
            },
          ],
        },
        {
          title: '4. إعدادات اللعبة',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(12).png',
              steps: [
                'تنشيط الانتقاء التلقائي: إذا قمت بتشغيل هذا الخيار ، فسيحدد الذكاء الاصطناعي bot اللعبة التي ستكون الأكثر شعبية لخادمك حتى لا تضطر إلى اختيار الأداة.',
                'إذا كان تنشيط الانتقاء التلقائي  في وضع إيقاف التشغيل ، فأنت تحتاج ببساطة إلى تحديد الألعاب التي ترغب في تنظيم دورات بها على الخادم لديك. سيتم تشغيل الذكاء الاصطناعي bot في البطولات ضمن مجموعة الألعاب المحددة فقط.',
              ],
            },
          ],
        },
        {
          title: '5. جدولة الإعدادات',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(13).png',
              steps: [
                'انتقاء الساعات تلقائيًا: إذا قمت بتشغيل هذا ، فإن الذكاء الاصطناعي bot سيحدد الوقت الذي سيجذب معظم المشاركين ويطلق البطولات في ذلك الوقت.',
                'في حالة إيقاف تشغيل "انتقاء الساعات تلقائيًا" ، فأنت تحتاج ببساطة إلى تحديد النطاق الزمني الذي تريد أن يقوم الذكاء الاصطناعي bot به لإطلاق البطولات. ستطلق منظمة العفو الدولية بوت البطولات ضمن النطاق الزمني المحدد.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'discord_commands',
      title: 'قائمة كاملة لأوامر Discord',
      navSectionItems: [
        {
          title: '1. صالحة للاستعمال في ردهة البطولة',
          innerContentList: [
            {
              steps: [
                '<strong>register!</strong>: سيسمح لك هذا بعملية التسجيل للبدء. يمكن استخدامه فقط بعد بدء التسجيل.',
                '<strong>unregister!</strong>: سيؤدي ذلك إلى إزالة موقعك من التسجيل وأيضًا من فريقك.',
                '<strong>timer!</strong>: هذا سيخبرك بالمرحلة القادمة من عملية البطولة وكم من الوقت المتبقي حتى تلك المرحلة.',
                '<strong>myteam!</strong>: هذا سيخبرك من هو في فريقك وحالة تسجيلهم.',
              ],
            },
          ],
        },
        {
          title: '2. قابلة للاستخدام في رسالة مباشرة مع Tourney Bot',
          innerContentList: [
            {
              steps: [
                "<strong>createteam!</strong><b class='highlight'><team name><ingame username></b>: سيؤدي هذا إلى تسجيل فريق جديد في القائمة. ستكون الشخص الوحيد في هذا الفريق حتى تشارك رمز الفريق وتدعو الآخرين للانضمام إلى فريقك.",
                "<strong>jointeam!</strong><b class='highlight'><team code><ingame username></b>: هذا سيضعك في الفريق الحالي الذي أنشأه شخص آخر.",
                "<strong>joinsolo!</strong><b class='highlight'><ingame username></b>: هذا سوف يسجل لك لبطولة منفردة.",
                "<strong>checkin!</strong><b class='highlight'><code provided></b>: إذا كان هناك شرط لتسجيل الوصول وإذا بدأ وقت تسجيل الوصول ، فسيسمح لك ذلك بتسجيل الوصول وإكمال تسجيلك.",
              ],
            },
          ],
        },
        {
          title: '3. قابلة للاستخدام في لعبة اللوبي',
          innerContentList: [
            {
              steps: [
                "<strong>result!</strong><b class='highlight'><team name></b>: هذه هي كيفية إرسال نتيجة المطابقة إلى bot. يُطلب منك إرفاق لقطة شاشة لشاشة النصر مع الأمر.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'create_new_tournament',
      title: 'خلق بطولة جديدة',
      description:
        '<i>الخطوة 1) ~ 2) هي نفسها كما هو موضح أعلاه في إعداد Tourney Bot لخادم Discord  الخاص بك. إذا كنت قد قمت بهذه الخطوات بالفعل ، فيمكنك الانتقال إلى الخطوة 3).</i>',
      navSectionItems: [
        {
          title:
            '1. من القائمة الرئيسية على اليسار ، انقر فوق الزر "إنشاء بطولة"',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. من صفحة قوالب الدورات ، ابحث عن لعبة ترغب في إنشاء دورة لها وانقر فوق تخصيص.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title:
            '3. في صفحة "تخصيص البطولة" ، قم بالتمرير إلى الأسفل وحدد الإعدادات المتقدمة.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(15).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(16).png',
              steps: [
                'سوف يطلب منك موجه لتأكيد هذا الإجراء. ببساطة حدد المضي قدما.',
              ],
            },
          ],
        },
        {
          title: '4. ملء قسم المعلومات الأساسية',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(17).png',
              steps: [
                'اسم البطولة: اكتب اسم البطولة الخاص بك. سيظهر هذا كعنوان للفئة الخاصة بك في Discord الخاص بك. سيتم عرض الحروف بحروف كبيرة. يسمح الرموز التعبيرية في هذا القسم.',
                'اللعبة: اختر لعبتك ، ثم اختر تنسيق لعبتك. (على سبيل المثال ، PUBG M -> Duo) سيحدد هذا ما إذا كانت بطولتك ستكون بطولة بين قوسين أو دورة ضيقة.',
                'الجدول الزمني: اختر وقت بدء التسجيل ووقت انتهاء التسجيل ووقت بدء البطولة. سيتم عرض هذه التواريخ في الجزء السفلي من إعلان البطولة. <div class=\'inner-content\'><p>وقت بدء التسجيل: سيكون هذا عندما يكون اللاعبون قادرين على بدء التسجيل في بطولتك في قناة Discord. قبل هذا الوقت ، لن يتمكن اللاعبون من التسجيل ، ولن يعمل أمر "!تسجيل" في القناة. </p><p>وقت انتهاء التسجيل: بعد هذا الوقت ، لن يتمكن اللاعبون من التسجيل بعد الآن. لا يمكن أن يكون وقت انتهاء التسجيل أقل من 10 دقائق قبل وقت بدء البطولة. لا يمكن أن تبدأ عملية تسجيل الوصول إلا بعد انتهاء التسجيل.</p><p> أيضًا ، يمكنك إنشاء قوس أو لوبي فقط بعد انتهاء التسجيل. وقت بدء البطولة: هذا هو الوقت الذي تبدأ فيه البطولة.</p></div>',
                'البث: إذا كنت عضوًا مؤقتًا وتريد الإعلان عن قناة البث إلى جانب إعلان الدورة ، انقر فوق "تمكين الرابط" ثم ضع رابط البث هنا.',
                'المنطقة: اختر بلدك هنا. هذا سيحدد اللغة التي ستكون النصوص العامة في الإعلان. (على سبيل المثال الولايات المتحدة الأمريكية -> ستكون النصوص العامة للإعلان باللغة الإنجليزية.)',
              ],
            },
          ],
        },
        {
          title: '5. ملء قسم التفاصيل',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(18).png',
              steps: [
                'الوصف: يمكنك وضع معلومات عامة عن بطولتك هنا. (على سبيل المثال التاريخ والوقت ، وطريقة اللعب ، وحد اللاعب ، ووقت تسجيل الوصول ، إلخ.) سيتم عرض هذه المعلومات في الإعلان أعلى الإعلان أسفل العنوان مباشرة.',
                'القواعد: يمكنك وضع أي قاعدة محددة ترغب في إضافتها إلى بطولتك. (على سبيل المثال الحظر ، الحد الزمني ، أفضل 3) إلخ.) سيتم عرض هذه المعلومات في الإعلان الموجود أسفل الوصف.',
                'الجوائز: يمكنك وضع معلومات الجائزة الخاصة بك في هذا القسم. أن تكون محددة قدر الإمكان؛ اللاعبون حساسون بشأن الجوائز والمبلغ بالدولار. سيتم عرض هذه المعلومات في الإعلان الموجود أسفل القواعد مباشرة.',
              ],
            },
          ],
        },
        {
          title: '6. ملء قسم النظام الأساسي',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(19).png',
              steps: [
                'اختر النظام الأساسي: اختر Discord',
                'Discord الخادم: اختر الخادم الذي تريد الإعلان عن البطولة الخاصة بك على.',
                'الأدوار الواجب ذكرها: هذا هو الدور الذي ستلعبه البطولة عند إعلانها في Discord.',
                'العرض إلى الأدوار: سيكون هذا الدور قادرًا على مشاهدة إعلان البطولة والقنوات دون التعرض للضرب. (الدور الموصى به هو @everyone إلا إذا كنت ترغب في إنشاء بطولة خاصة.)',
                'إمكانية رؤية القناة: عندما تنشئ قوسًا / ردهة ، سينشئ الروبوت قنوات خاصة للاعبين المسجلين. سيكون الدور الذي تحدده هنا قادراً على رؤية هذه القنوات الخاصة. لذا حدد الدور الذي يتم تمييزك به (مشرف البطولة). وإلا ، فلن تتمكن من مشاهدة القنوات الخاصة.',
              ],
            },
          ],
        },
        {
          title: '7. ملء قسم إعدادات المباراة',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(20).png',
              steps: [
                'تنسيق البطولة: تم تحديد ذلك بالفعل من خلال تنسيق اللعبة والألعاب التي حددتها في قسم "المعلومات الأساسية".',
                'التسجيل المنفرد (لأحداث الفريق فقط): تحقق من ذلك إذا كنت تريد تشكيل فرق بشكل عشوائي وعدم السماح بفرق العرض.',
                'الحد الأقصى المسموح به للاعبين / الفرق: حدد فريق الحد الأقصى الذي تريد السماح به.',
                'عدد الفائزين: حدد عدد الفائزين الذين تريدهم. (1 ~ 3)',
                'تسجيل الدخول: انقر فوق هذا إذا كنت تريد تمكين عملية تسجيل الوصول الخاصة بدوريتك. يجب على اللاعبين المسجلين تسجيل الوصول للمشاركة في الحدث',
                'Check In Time: ستحدد هذه المرة مدة تسجيل الوصول التي ستسمح بها قبل بدء البطولة. هناك نافذة افتراضية لمدة 10 دقائق بين تسجيل الوصول ووقت بدء البطولة. هذه النافذة قابلة للتعديل. (على سبيل المثال ، إذا حددت 20 دقيقة ، فستبدأ عملية تسجيل الوصول قبل 30 دقيقة من البطولة وتنتهي قبل 10 دقائق من وقت البطولة.)',
                'قائمة الانتظار: حدد هذا الخيار إذا كنت تريد تمكين قائمة الانتظار لدوريتك. عند إيقاف التشغيل ، سوف تكون قادرًا على استقبال لاعبين يصل عددهم إلى Max Players / Teams التي حددتها أعلاه.',
                'نشر النتائج تلقائيًا: بتحديد هذا الخيار ، فأنت تسمح للروبوتات بتولي عملية التحقق من النتائج لكل جولة. (على سبيل المثال ، Team1 يقدم النتائج إلى bot -> Bot يسأل Team2 إذا كانت النتيجة صحيحة -> إذا أكد Team2 أو لم يستجب ، فإن bot تستمر في تقدم Team1 بحيث تضطر إلى التدخل.) من خلال تحديد هذا ، نتيجة المباراة والفائزين مسبقا يدويا.',
                'السماح لفريق غير كامل (لأحداث الفريق فقط): من خلال تحديد هذا الخيار ، سيتمكن اللاعبون من التسجيل كفريق واحد حتى لو لم يكتمل فريقهم. يكون هذا مفيدًا عندما تريد السماح لقادة الفرق بالتسجيل في فريقه أولاً من أجل حفظ مكان في البطولة. إذا تم إيقاف التشغيل ، فلن يكون التسجيل مكتملًا إلا عند انتهاء جميع أعضاء كل فريق من تسجيلهم الفردي.',
              ],
            },
          ],
        },
        {
          title: '8. انقر فوق "إنشاء" للمتابعة',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(21).png',
              steps: [
                'النقر فوق <i>إنشاء</i> لا يُعلن عن البطولة على الفور. تسأل أداة البطولة على الفور ما إذا كنت تريد <i>نشر</i> الدورة. سيؤدي <i>نشرها</i> إلى الإعلان عن البطولة في خادم Discord. يمكنك دائمًا <i>نشره</i> لاحقًا بالنقر فوق <i>لاحقًا</i>.',
                'تأكد من مراجعة جميع المعلومات قبل نشر البطولة. بمجرد النشر ، لن تتمكن من تعديل الإعلان.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'tournament_dashboard',
      title: 'لوحة معلومات البطولة',
      navSectionItems: [
        {
          title:
            '1. بمجرد إنشاء الدورة ، ستتمكن من رؤية بطولتك مدرجة في لوحة المعلومات.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(24).png',
            },
          ],
        },
        {
          title:
            '2. انقر فوق إحدى الدورات لعرض التفاصيل واللاعبين المسجلين ، لإدارة الأقواس واللوبيات ، وإرسال الجوائز. (ميزة الجائزة متاحة فقط لبطولات شركاء game.tv على خادم BlueStacks Discord.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(25).png',
              steps: [
                'التعديل: يمكنك تغيير أي معلومات تريدها باستخدام هذا الزر. ضع في اعتبارك أن تحرير المعلومات في الأداة لن يغير المعلومات التي تم الإعلان عنها بالفعل في خادم Discord.',
                'نشر / إلغاء النشر: إذا قمت بإنشاء الدورة الخاصة بك فقط ولم تنشرها بعد ، فيمكنك النقر فوق الزر نشر لتنشيطها. إذا كنت قد قمت بالفعل بنشر دورتك ، لكنك تريد التراجع عن الحصول على تسجيل جديد ، فيمكنك القيام بذلك عن طريق النقر فوق "إلغاء النشر". (لن يؤدي إلغاء النشر إلى إزالة أو حذف الإعلان في خادم Discord.)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'during_registration_period',
      title: 'خلال فترة التسجيل',
      navSectionItems: [
        {
          title:
            '1. خلال هذه الفترة ، سيتمكن مستخدمو Discord من التسجيل في قناة #tournament-lobby من خلال كتابة أمر "!تسجيل" إذا كان التسجيل مفتوحًا في ذلك الوقت.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(26).jpg',
            },
          ],
        },
        {
          title:
            '2. بمجرد إدخال أمر "!تسجيل" ، سيتلقى المستخدمون رسالة مباشرة من Tourney Bot ، يطلبون مزيدًا من المعلومات حول معرّف اللعبة واسم الفريق.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(27).png',
            },
          ],
        },
        {
          title:
            '3. بمجرد أن يرد المستخدم على Tourney Bot باستخدام الأوامر الصحيحة في رسالة مباشرة ، سيتلقى رسالة إكمال التسجيل من Bot. (إذا لم يتلقوا رسالة الإكمال ، فلن يكونوا مسجلين في البطولة وعليهم محاولة التسجيل من البداية مرة أخرى.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(28).png',
              steps: [
                'بمجرد اكتمال عملية التسجيل ، سيتلقى المشارك دورًا جديدًا ؛ اسم الدور هو بالضبط اسم البطولة الخاصة بك.',
              ],
            },
          ],
        },
        {
          title:
            '4. نظرًا لأن مستخدمي Discord يسجلون في البطولة ، فستتمكن من معرفة عدد المستخدمين الذين سجلوا اسمك في الدورة الخاصة بنا في لوحة المعلومات. يمكنك أيضًا التحقق من أسمائهم أو إزالة المشغل أو إزالة الفريق من هذه الأداة.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(29).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(30).png',
            },
          ],
        },
        {
          title:
            '5. في حالة تشغيل تسجيل الوصول ، ستبدأ عملية تسجيل الوصول في الوقت الذي حددته. (على سبيل المثال ، إذا قمت بتعيين 30 دقيقة كوقت لتسجيل الوصول ، فستبدأ عملية تسجيل الوصول قبل 30 دقيقة من البطولة.)',
        },
        {
          title:
            '6. سيتلقى كل من المستخدمين المسجلين والمستخدمين المدرجين في القائمة طلب تسجيل وصول من Tourney Bot عبر رسالة مباشرة في Discord. يجب أن يتبع المستخدمون تعليمات Tourney Bot وأمر تسجيل الوصول بشكل صحيح للتأهل للحدث.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(31).png',
            },
          ],
        },
        {
          title:
            '7. سيتلقى المستخدمون رسالة إكمال تسجيل الوصول من Tourney Bot إذا قاموا بإدخال أمر تسجيل الوصول بشكل صحيح.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(32).png',
            },
          ],
        },
      ],
    },
    {
      id: 'coordinating_tournament_bracketed',
      title: 'بطولة تنسيق - مسابقة بين قوسين',
      navSectionItems: [
        {
          title: '1. هناك 3 شروط تسمح لك بإنشاء قوس لك في البطولة:',
          innerContentList: [
            {
              steps: [
                'ا. دورتك ممتلئة ، ولم تسمح بقائمة انتظار.',
                'ب. انتهى تسجيلك ولم تقم بتمكين عملية تسجيل الوصول.',
                'ج. انتهى تسجيلك وتسجيل الوصول. (قبل 10 دقائق من وقت البطولة)',
              ],
            },
          ],
        },
        {
          title:
            '2. بمجرد استيفاء أي شرط من هذه الشروط الثلاثة ، سترى زر إنشاء قوس ضمن علامة تبويب الأقواس. انقر عليها لإنشاء قوس الخاص بك.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(33).png',
            },
          ],
        },
        {
          title:
            '3. بمجرد إنشاء قوس في أداة الدورة الخاصة بك ، سيتم الإعلان عن نفس الشريحة في قناة Discord ، مما يؤدي إلى اختبار كل مشارك مشارك في البطولة.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(34).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(35).png',
            },
          ],
        },
        {
          title:
            '4. بالإضافة إلى إعلان القوس ، سيقوم الروبوت أيضًا بإنشاء قنوات خاصة لجميع المباريات الحية. كل قناة خاصة تدعو فقط المشاركين في المباراة. يمكن للمشاركين استخدام هذه القناة الخاصة للتواصل مع بعضهم البعض بشأن مطابقتهم (مثال: رمز غرفة المشاركة ومعرف لاعب المشاركة) والإبلاغ عن النتيجة',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (36) .png',
            },
          ],
        },
        {
          title:
            '5. Players must report results in the private channel, using the “!نتيجة<team name>” command. Screenshot must be attached in order for the !result command to be registered correctly.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                'بمجرد تقديم النتيجة بشكل صحيح ، سيرد الروبوت مع التأكيد.',
              ],
            },
          ],
        },
        {
          title:
            '6. بمجرد إرسال النتيجة ، ستظهر نقطة حمراء في المباراة حتى تتمكن (مسؤول البطولة) من معرفة أن النتيجة قد تم إرسالها.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(38).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(39).png',
              steps: [
                'إذا كانت "نشر النتائج تلقائيًا" قيد التشغيل ، فسيأخذ الروبوت النتيجة الأولى التي يتم تقديمها كنتيجة حقيقية. إذا لم يتم تقديم نتيجة جديدة في غضون 5 دقائق ، فسيقوم الروبوت بتقدم الفريق الفائز في تقديم النتيجة الأولى.',
                'في حالة إيقاف تشغيل "نشر النتائج تلقائيًا" ، سيتعين عليك إلقاء نظرة على الملف المرفق ، والتحقق من النتيجة ، ثم تقدم الفائز يدويًا. (على سبيل المثال ، انقر فوق الفائز ، ثم حدد تحديث النتيجة.)',
              ],
            },
          ],
        },
        {
          title:
            '7. بمجرد أن تصل الشريحة إلى النهاية ويتم اختيار الفائز النهائي ، سيعلن الروبوت تلقائيًا عن الفائز في قناة البطولة.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(40).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(41).png',
            },
          ],
        },
      ],
    },
    {
      id: 'coordinating_tournament_lobbied',
      title: 'بطولة التنسيق - مسابقة لوبيد',
      navSectionItems: [
        {
          title: '1. هناك 3 شروط تسمح لك بإنشاء لوبيات لك:',
          innerContentList: [
            {
              steps: [
                'ا. دورتك ممتلئة ، ولم تسمح بقائمة انتظار.',
                'ب. انتهى تسجيلك ولم تقم بتمكين عملية تسجيل الوصول.',
                'ج. انتهى تسجيلك وتسجيل الوصول. (قبل 10 دقائق من وقت البطولة)',
              ],
            },
          ],
        },
        {
          title:
            '2. بمجرد استيفاء أي من هذه الشروط الثلاثة ، سترى زر إنشاء ردهة تحت علامة التبويب ردهة. اضغط عليها لإنشاء ردهاتك.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(42).png',
            },
          ],
        },
        {
          title:
            '3. لكل ردهة ، انقر فوق زر القائمة المكون من 3 أسطر ، ثم انقر فوق "إنشاء قناة". سيؤدي القيام بذلك إلى إنشاء قناة Discord خاصة لكل ردهة بشكل صارم للاعبين في كل ردهة.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(43).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(44).png',
            },
          ],
        },
        {
          title:
            '4. إذا كنت (مشرف الدورة) ترغب في إرسال رسالة إلى كل ردهة (أي رمز التطابق و pw) ، يمكنك استخدام ميزة إرسال الرسائل من كل ردهة. المرسل سيكون Tourney (بوت) ، لذلك من المحتمل أن يلفت انتباه اللاعبين. أو يمكنك إرسال رسالة مباشرة على القناة عن طريق كتابتها. (إرسال سيكون لك في هذه الحالة.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(45).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(46).png',
            },
          ],
        },
        {
          title:
            '5. إذا كنت لا تنشئ كل مباراة للاعبين ، يمكنك ببساطة تعيين لاعب في كل قناة خاصة لإنشاء غرفة ألعاب ومشاركة الكود / pw.',
        },
        {
          title:
            '5. Players must report results in the private channel, using the “!نتيجة<team name>” command. Screenshot must be attached in order for the !result command to be registered correctly.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                'بمجرد تقديم النتيجة بشكل صحيح ، سيرد الروبوت مع التأكيد.',
              ],
            },
          ],
        },
        {
          title:
            '7. بمجرد تقديم النتيجة ، ستظهر نقطة حمراء في المباراة حتى تتمكن (مسؤول البطولة) من معرفة أن النتيجة قد تم إرسالها. انقر على عرض النتائج لعرض لقطات الشاشة المقدمة.',
          innerContentList: [
            {
              imageCaption:
                'لا تحتاج إلى انتظار تقديم النتائج إذا كنت تعرف النتيجة بالفعل. (على سبيل المثال ، إذا كنت تراقب المباراة ، فمن المحتمل أن تعرف النتيجة بالفعل).',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(47).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(48).png',
            },
          ],
        },
        {
          title: '8. من أجل اختيار الفائز (الفائزين) من كل ردهة ،',
          innerContentList: [
            {
              imageCaption:
                'انقر فوق زر القائمة المكون من 3 أسطر ، ثم انقر فوق زر تسجيل النقاط.',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(49).png',
              steps: [
                'سجل درجات اللاعب وفقًا للنتائج المقدمة. (يجب أن يحصل اللاعبون الفائزون على درجات أعلى.)',
                'لمباراة متعددة الجولة ، انقر فوق الزر "إنشاء جولة" في الأسفل. ثم سجل المزيد من النتائج وفقًا للنتائج.',
              ],
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(50).png',
              steps: ['بمجرد الانتهاء من التسجيل ، انقر فوق "تحديث".'],
            },
          ],
        },
      ],
    },
    {
      id: 'transferring_players',
      title: 'نقل اللاعبين إلى جماعات الضغط الجديدة',
      navSectionItems: [
        {
          title:
            '1. إذا كنت بحاجة إلى دورة ضاغطة حيث يتقدم اللاعبون / ينتقلون إلى مجموعات ضغط جديدة ، فيجب اختيار "القضاء" ضمن تنسيق الدورة.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(51).png',
              steps: [
                'تهم الردهة: كم عدد جماعات الضغط الأولية التي تريد أن تحصل عليها في جولاتك الأولية',
                'تهم الفريق: كم عدد الفرق سيكون لكل ردهة',
              ],
            },
            {
              imageCaption:
                '<i>* إذا أنشأت دورة "ردهة مفردة" أو "لوبيات متعددة" ، فلن يكون لديك خيار لإنشاء لوبيات جديدة ، وبالتالي ، فلن تكون قادرًا على نقل / تقدم اللاعبين إلى لوبيات جديدة. كما ترون في المثال أدناه (بطولة Lobbies المتعددة) ، فإن زر "+" لإنشاء ردهة جديدة مفقود.</i>',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(52).png',
            },
          ],
        },
        {
          title:
            '2. إذا تم اختيار "إزالة" كتنسيق البطولة الخاص بك ، فسترى خيارًا لإنشاء ردهة جديدة بالإضافة إلى "تهم اللوبي" الأولي التي حددتها.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(53).png',
            },
          ],
        },
        {
          title:
            '3. بينما لا تزال ردهاتك الأولية حية ، انقر فوق الزر "+" لإنشاء ردهة جديدة. هذا اللوبي الجديد هو المكان الذي تتقدم فيه / تنقل اللاعبين لديك للجولة المستقبلية.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(54).png',
              steps: [
                'يجب أن يكون اللوبي الجديد فارغًا عند إنشائه.',
                'إذا كنت بحاجة إلى إنشاء ردهات جديدة متعددة ، فما عليك سوى النقر فوق الزر "+" مرة أخرى.',
              ],
            },
          ],
        },
        {
          title:
            '4. لكي تقدم / تنقل اللاعبين إلى اللوبي الجديد ، يجب عليك إنهاء اللوبيات الحالية أولاً. (يرجى الرجوع إلى <a href=\'how-to-use-tourney?tab=tournament-lobbied-competition\'>قسم إنهاء مسابقة</a> حول كيفية إنهاء ردهة) بمجرد أن تنهي جماعات الضغط الخاصة بك ، انقر فوق الزر "تعديل الردهة" في الردهة الجديدة.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(55).png',
              steps: [
                '<i>* يرجى توخي الحذر لعدم إنهاء البطولة بأكملها! عندما تنتهي من جميع جماعات الضغط ، ستمنحك الأداة نافذة منبثقة ، تسأل عما إذا كنت ترغب في إنهاء البطولة. إذا أنهيت دوريتك ، فلن تتمكن من نقل اللاعبين أو إضافة ردهات جديدة.</i>',
              ],
            },
          ],
        },
        {
          title: '5. حدد لوبي تريد نقل اللاعبين منه.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(56).png',
              steps: [
                'يمكنك النقر فوق "إضافة ردهة" للقيام بتحويلات جماعية من جماعات الضغط المتعددة.',
                'في هذا المثال ، تم إنهاء الردهة 1 والردهة 2 فقط. اللوبي 3 لا يزال حيا. لهذا السبب ترى فقط اللوبي 1 و 2 كخيارين.',
              ],
            },
          ],
        },
        {
          title: '6. حدد موقع (أوضاع) اللاعبين الذين تريد نقلهم.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(57).png',
              steps: [
                'يمكنك اختيار مواقع متعددة.',
                'يشير الموضع إلى موضع اللاعب بعد انتهاء اللوبي. (المنصب 1 = لاعب / فريق المركز الأول في هذا الردهة)',
                'على سبيل المثال ، إذا كنت ترغب في تقدم أفضل لاعبين من ردهة 1 ، فستختار الموضع 1 و 2.',
              ],
            },
          ],
        },
        {
          title:
            '7. بمجرد الانتهاء من اختيار اللاعبين الذين تريد نقلهم ، انقر فوق الزر "حفظ". نقل كامل!',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(58).png',
            },
          ],
        },
      ],
    },
    {
      id: 'ending_a_tournament_bracketed_competition',
      title: 'إنهاء بطولة - مسابقة بين قوسين',
      description:
        'ستنتهي دورتك تلقائيًا بمجرد اختيار الفائز النهائي في علامة تبويب الأقواس.',
    },
    {
      id: 'ending_a_tournament_lobbied_competition',
      title: 'إنهاء مسابقة - لوبي المسابقة',
      navSectionItems: [
        {
          title:
            '1. بمجرد تحديث جميع مجموعات الضغط بدقة وعشرات الفائزين ، انقر فوق زر القائمة المكون من 3 أسطر ، ثم انقر فوق زر "إنهاء الردهة" لكل ردهة. افعل هذا لجميع جماعات الضغط. (من الممارسات الجيدة إنهاء الضغط بمجرد تحديثه. لن تتمكن من نقل اللاعبين إذا لم تنته جماعات الضغط.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(59).png',
            },
          ],
        },
        {
          title:
            '2. بمجرد انتهاء جميع جماعات الضغط ، ستخبرك أداة game.tv بأن دورتك ستنتهي وسيتم نشر النتائج.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(60).png',
              steps: [
                'إذا كنت ترغب في إنهاء الدورة ونشر النتائج ، فانقر فوق<i> متابعة</i>.',
                'إذا كنت ترغب في عدم إنهاء الدورة أو نشر النتائج ، فانقر فوق <i>إغلاق</i>. (لن تنتهي دورتك ، ولن يتم نشر النتائج.)',
                'سيكون هناك خيار لإنهاء البطولة ونشر النتائج إذا اخترت <i>إغلاق</i>.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sending_prizes_to_winners',
      title: 'إرسال الجوائز للفائزين',
      description:
        '<p><i>** هذه الميزة متاحة فقط لشركاء game.tv الذين ينتجون البطولات على خوادم BlueStacks Discord.</i></p>',
      navSectionItems: [
        {
          title:
            '1. بمجرد اختيار الفائزين وتنتهي البطولة بشكل صحيح ، ستتمكن من رؤية الفائزين مدرجين في علامة التبويب الجوائز.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(61).png',
            },
          ],
        },
        {
          title: '2. ببساطة ملء المعلومات لكل فائز.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(62).png',
              steps: [
                'تأكد من التحقق من تفضيلات الجائزة مع الفائزين (على سبيل المثال ، الجغرافية ، نوع الجائزة ، إلخ.)',
                "قد لا تكون بعض الخيارات متاحة لبعض المواقع الجغرافية. لعرض جميع خيارات الجائزة المتاحة ، يرجى زيارة <a href='https://www.seagm.com/'>https://www.seagm.com/</a>",
                'يمكنك إعداد جوائز متعددة لكل فائز. (على سبيل المثال ، للحصول على جائزة جوجل بلاي (الولايات المتحدة) بقيمة 20 دولارًا ، ستحتاج إلى إعداد جائزتين من جوائز Google Play (الولايات المتحدة) بقيمة 10 دولارات.)',
                '(بالنسبة إلى NA) بشكل عام ، نحن على ما يرام مع إنفاق ما يصل إلى 4 دولارات أخرى لإيجاد خيار / مبلغ جائزة مناسب. بالنسبة إلى Steam ، - مقابل 5 دولارات / 10 دولارات ، يرجى استخدام Steam (Hong Kong) 40 HKD / 80 HKD على التوالي. - مقابل 20 دولارًا / 25 دولارًا ، يرجى استخدام Steam (ماليزيا) RM 80 / RM 100 على التوالي.',
              ],
            },
          ],
        },
        {
          title: '3. بعد ملء جميع المعلومات بدقة ، انقر على زر إرسال جائزة.',
          innerContentList: [
            {
              steps: [
                'سيؤدي هذا إلى إرسال طلب توزيع جائزة إلى مسؤول game.tv. سيقومون بمراجعة معلومات الجائزة ، ثم يوافقون على الطلب أو يرفضونه.',
                'بمجرد الموافقة على الطلب ، سيحصل الفائزون على رسالة مباشرة من Tourney Bot يحتوي على رموز هدية قابلة للاسترداد. سترى أيضًا أن عملية التسليم قد اكتملت ضمن علامة التبويب "الجوائز".',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cloning_existing_tournaments',
      title: 'استنساخ البطولات الحالية',
      description:
        '<p>من خلال استنساخ الدورات الحالية ، يمكن لمضيف البطولات تكرار البطولات بنفس التنسيق مرارًا وتكرارًا دون الحاجة إلى إعداد التفاصيل في كل مرة.<br /><i> ** لا يجوز لك استنساخ دورة ما وتغيير وضع البطولة: ردهة مقابل قوس.</i></p>',
      navSectionItems: [
        {
          title:
            '1. ابحث عن دورة تريد تكرارها من لوحة القيادة. في الطرف الأيمن من البطولة ، انقر فوق زر القائمة 3 نقاط.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(63).png',
              steps: [
                'إذا كنت قد أنهيت الدورة بالفعل ، فلن يتوفر الزر "تعديل وإيقاف مؤقت".',
                'إذا قمت بتنظيف الدورة بالفعل ، فلن يتوفر زر التنظيف.',
              ],
            },
          ],
        },
        {
          title:
            '2. انقر على <i>استنساخ</i>. ستظهر شاشة جديدة حيث يجب عليك إدخال بعض المعلومات البسيطة.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(64).png',
              steps: [
                'اسم البطولة: هذا لن ينتقل من البطولة الحالية. سيكون عليك إدخال اسم جديد للبطولة',
                'خادم الفتنة: سينتهي هذا من البطولة الحالية. اختر خادمًا مختلفًا إذا كنت تريد تكرار الدورة الحالية إلى خادم آخر.',
                'اللعبة: سوف تستمر أوضاع اللعبة من البطولة الحالية. تخصيص الإعداد إذا كنت ترغب في التغيير.',
                'الجدول الزمني: لن يتم ترحيل الجدول من البطولة الحالية. سوف تضطر إلى إدخال جدول جديد.',
                'الجوائز: سوف تنتقل معلومات الجائزة من البطولة الحالية. تعديل إذا كنت ترغب في التغيير.',
                'البث: سيتم ترحيله من البطولة الحالية. تعديل إذا كنت ترغب في التغيير.',
                'الإعداد المتقدم: إذا كنت ترغب في تغيير تفاصيل الإعداد الأخرى ، فإن النقر فوق هذا سينقلك إلى خيارات الإعداد الأصلية.',
              ],
            },
          ],
        },
      ],
    },
  ],
};
