import { IGameDetailsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
import { HowToJoinJapanese } from './../how-to-join/ja.locales';
const language = SupportedLocalesEnum.JAPANESE;

export const GameDetailsLocalesJapanese: IGameDetailsLocale = {
  metadata: {
    title: '{{gameName}}のeスポーツトーナメント（Game.tv）に参加しよう。',
    description:
      '世界中の無数のゲーミングコミュニティにおいて毎日開催されている{{gameName}}のトーナメントに参加しよう。',
  },
  gameDetail:
    '{{communityCount}}の各国のコミュニティが開催している{{gameName}}のeスポーツトーナメントを見つけよう。「エントリー」をクリックして{{gameName}}のトーナメントに参加しよう！',
  gameInfo: {
    title: 'お探しのトーナメントがありませんか？',
    content: '自分のトーナメントを作ろう！',
    linkUrl: `/${language}/create-a-tournament`,
    noTournamentsTitle: '現在エントリー可能なトーナメントはありません。',
    noTournamentsContent: 'エントリー可能なトーナメントをすべて表示',
    noTournamentsLink: '現在開催中、または過去のトーナメント',
  },
  tournamentTitle: 'トーナメント',
  platformStr: 'プラットフォーム',
  discord: 'DISCORD',
  vs: 'VS',
  joinHeading: '参加する',
  viewMore: 'さらに表示',
  tournamentTypes: {
    heading: '{{gameName}}のトーナメント形式',
    blocks: [
      {
        content:
          'クラシックトーナメント（ルーム形式）- ソロ、デュオ、チーム - 最大100人',
        imageUrl: 'https://cdn.game.tv/tournaments/group-26.png',
      },
      {
        content: 'Erangelクイックマッチ（ルーム形式）- ソロ - 28人',
        imageUrl: 'https://cdn.game.tv/tournaments/group-27.png',
      },
      {
        content: 'チームデスマッチ（ルーム形式）- 2チーム - 最大8人',
        imageUrl: 'https://cdn.game.tv/tournaments/group-28.png',
      },
      {
        content: 'Infection（感染）モード（ルーム形式）- 12人',
        imageUrl: 'https://cdn.game.tv/tournaments/group-29.png',
      },
    ],
  },
  prizeTypes: {
    heading: '{{gameName}}のトーナメントの賞品形式',
    description:
      'トーナメントの賞品は完全に主催者依存となっており、主催者は賞品なしのカジュアルなトーナメントを開催することも可能です。賞品のリストはトーナメントページにて確認できます。こちらは多数の{{gameName}}のトーナメントで提供される賞品になります。',
    blocks: [
      {
        content: '賞金',
        imageUrl: 'https://cdn.game.tv/tournaments/group-13.png',
      },
      {
        content: 'Steam ウォレットコード',
        imageUrl: 'https://cdn.game.tv/tournaments/group-24.png',
      },
      {
        content: 'ギフトカード - Google Play、Amazon、Steamなど',
        imageUrl: 'https://cdn.game.tv/tournaments/group-23.png',
      },
      {
        content: 'サービス利用コード - Netflix、Apple Music、Spotifyなど',
        imageUrl: 'https://cdn.game.tv/tournaments/group-22.png',
      },
      {
        content: '他にも様々な種類の賞品があります。',
        imageUrl: 'https://cdn.game.tv/tournaments/group-20.png',
      },
    ],
  },
  joinTournament: {
    heading: '{{gameName}}のトーナメントへのエントリー方法',
    blocks: HowToJoinJapanese.blocks,
  },
  startTournament: {
    heading: '{{gameName}}のトーナメントを開始する方法',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: '手順',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "<a href='/user' class='click-here'>Tourney</a>ボットをDiscordサーバーに招いて、サインインして「認証」を押します。",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
          },
          {
            stepItem:
              '左側のメインメニューから「トーナメントの作成」ボタンを押します。',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'トーナメントを開催するゲームをテンプレートリストより選択して「このテンプレートを選択」ボタンを押し、トーナメント内容を編集します。',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/4.jpg',
          },
          {
            stepItem:
              'トーナメント編集ページにて、トーナメントの詳細説明、ルール、賞品、条件などといった様々な項目を記載することができます。',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/5.jpg',
          },
          {
            stepItem:
              'トーナメント投稿後、#tournament-infoと#tournament-lobbyチャンネルがボットによってDiscordサーバー上に作成されます。#tournament-lobbyチャンネルにて「!register」と入力してエントリーして{{gameName}}のトーナメント作成が正常に行われたことを確認します。',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/6.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Game.tvウェブアプリ',
        stepsHeading: '手順',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "<a href='/user' class='click-here'>ウェブアプリ</a>へアクセスして、TwitterまたはDiscordを選択して「サインイン」を押します。",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
          },
          {
            stepItem: '画面下部にある「+」のアイコンを押します。',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png',
          },
          {
            stepItem:
              '左側のメインメニューから「トーナメントの作成」ボタンを押します。',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'トーナメントを開催するゲームをテンプレートリストより選択して「このテンプレートを選択」ボタンを押し、トーナメント内容を編集します。',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "トーナメント投稿後、{{gameName}}のトーナメントはGame.tvウェブアプリの<a class='click-here' href='/user'>ホーム画面</a>に一覧表示されます。",
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
