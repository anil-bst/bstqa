import { ITournamentDetailLocale } from '@app/abstractions';
export const TournamentDetailLocaleArabic: ITournamentDetailLocale = {
  metadata: {
    title: 'License Agreement - Game.tv',
    description: 'Game.tv License Agreement',
  },
  linkToAllTournaments: 'All Tournaments',
  noPrizeInfo: 'see more',
  registerSection: {
    heading: 'Click ‘Register’ to get a seat in the tournament.',
    btnText: 'Register',
  },
  videoSection: {
    heading: 'Tournament Stream',
  },
  details: {
    detailsSectionHeading: 'Details',
    ruleSectionHeading: 'Rules',
    howToJoinSection: {
      heading: 'كيفية الانضمام إلى {{tournamentName}} البطولة',
      content: [
        'انتقل إلى #tournament-info النص معلومات المسابقة في Discord لمعرفة تفاصيل البطولة',
        'انقر على #tournament-lobby في الجزء السفلي من #tournament-info channel',
        'للمشاركة في البطولة ، اكتب! قم بالتسجيل في#tournament-lobby',
        'سوف يقوم Tourney  بإرسال رسالة مباشرة إليك ؛ اكتب !joinsolo & lt!؛ اسم المستخدم الخاص بك في اللعبة> في رسالة مباشرة',
        'لقد قمت بالتسجيل بنجاح في {{tournamentName}} البطولة.',
      ],
      imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    prizeSectionHeading: 'Prize',
  },
  organiserText: 'Organised by',
};
