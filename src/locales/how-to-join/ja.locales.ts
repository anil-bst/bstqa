import { IHowToJoin } from '@app/abstractions';

export const HowToJoinJapanese: IHowToJoin = {
  blocks: [
    {
      gamePlatform: 'Discord',
      type: 'discord',
      stepsHeading: '手順',
      stepsContent: [
        {
          stepItem:
            'Discordの#tournament-infoチャンネルにてトーナメントの詳細を確認することができます。',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
        },
        {
          stepItem:
            '#tournament-infoチャンネルの下にある#tournament-lobbyをクリックしてください。',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
        },
        {
          stepItem:
            'トーナメントにエントリーする際は、#tournament-lobbyチャンネルにて「!register」と入力します。',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
        },
        {
          stepItem:
            'TourneyボットによってDM（ダイレクトメッセージ）が送信されたら、DM内にて!joinsolo <ゲームで使用しているユーザー名>を入力します。',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
        },
        {
          stepItem: '{{howToJoinTitle}}のトーナメントにエントリーしました。',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    {
      gamePlatform: 'Game.tvウェブアプリ',
      type: 'web',
      stepsHeading: '手順',
      stepsContent: [
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            "<a href='/user' class='click-here'>ウェブアプリ</a>へアクセスしてDiscordまたはTwitterアカウントでサインインします。",
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
        },
        {
          stepItem:
            'トーナメント日程タブの下にて、近日開催予定の{{howToJoinTitle}}のトーナメントのリストを確認できます。',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
        },
        {
          stepItem:
            'エントリーしたいトーナメントを選択します。（ページの最後にエントリーボタンがあります）',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
        },
        {
          stepItem:
            'ゲームで使用している名前を入力し、ページの最後にあるエントリーボタンを押します。',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
        },
        {
          stepItem: 'エントリーが完了しました。',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
    },
  ],
};
