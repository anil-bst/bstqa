import { IHowToJoin } from '@app/abstractions';

export const HowToJoinArabic: IHowToJoin = {
  blocks: [
    {
      gamePlatform: 'Discord',
      type: 'discord',
      stepsHeading: 'خطوات',
      stepsContent: [
        {
          stepItem:
            'انتقل إلى tournament-info# النص معلومات المسابقة في Discord لمعرفة تفاصيل البطولة',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
        },
        {
          stepItem:
            'انقر على tournament-lobby# في الجزء السفلي من tournament-info channel#',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
        },
        {
          stepItem:
            'للمشاركة في البطولة ، اكتب! قم بالتسجيل في tournament-lobby#',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
        },
        {
          stepItem:
            'سوف يقوم Tourney  بإرسال رسالة مباشرة إليك ؛ اكتب joinsolo! & lt!؛ اسم المستخدم الخاص بك في اللعبة> في رسالة مباشرة',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
        },
        {
          stepItem: 'لقد قمت بالتسجيل بنجاح في {{howToJoinTitle}} البطولة.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    {
      gamePlatform: 'تطبيق الويب Game.tv',
      type: 'web',
      stepsHeading: 'خطوات',
      stepsContent: [
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            "انتقل إلى <a href='/user' class='click-here'>تطبيق الويب</a> وتسجيل الدخول باستخدام حساب Discord أو Twitter",
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
        },
        {
          stepItem:
            'ضمن علامة تبويب تقويم الدورة ، يمكنك العثور على قائمة البطولات القادمة {{howToJoinTitle}}.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
        },
        {
          stepItem:
            'انقر على البطولة التي تريد الانضمام إليها ؛ سترى زر التسجيل في نهاية الصفحة',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
        },
        {
          stepItem:
            'أدخل اسم داخل اللعبة الخاص بك وانقر فوق الزر "تسجيل" في نهاية الصفحة',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
        },
        {
          stepItem: 'اكتمل التسجيل الآن.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
    },
  ],
};
