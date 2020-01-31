import { IHowToUseTourneyLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const HowToUseTourneyLocaleJapanese: IHowToUseTourneyLocale = {
  metadata: {
    title: 'Game.tv大会開催者用マニュアル',
    description: 'コミュニティでTourneyを使用する方法を学ぶ',
  },
  navigationSections: [
    {
      id: 'create_new_accoutn',
      title: '新規アカウント作成',
      isActive: true,
      navSectionItems: [
        {
          title: `1.（この手順はGame.tvパートナー専用です。自身のサーバーでトーナメントを作成する場合、こちらの手順は飛ばしてください）DiscordのニックネームとユーザーIDをGame.tv管理者と共有してください。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0.jpg',
              imageCaption:
                'Discordのニックネームには4桁の数字タグを含める必要があります。',
              steps: [
                `Dsicord ID : ユーザーIDの確認方法は以下を参照してください。<a
            href="https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-">https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-</a>`,
                `トーナメント用のアカウントが作成されたことをGame.tv管理者が確認するまで待ちます`,
              ],
            },
          ],
        },
        {
          title: `2. <a href="/dashboard">https://game.tv/dashboard</a> へアクセスします。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(1).png',
              imageCaption: '「Discordでサインイン」をクリックします。',
            },
            {
              imageCaption: '「認証」をクリックします。',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(2).png',
            },
          ],
        },
      ],
    },
    {
      id: 'setting_up_tourney',
      title: 'Tourneyボットの設定（Discordサーバー用）',
      navSectionItems: [
        {
          title: `1. メインメニューの左下にある「トーナメントの作成」をクリックします。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title: `2. トーナメントテンプレートページから、トーナメントを作成するゲームを見つけて「カスタマイズ」をクリックします。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title: `3. トーナメントのカスタマイズページにて「サーバーを追加する」のリンクをクリックします。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(5).png',
            },
          ],
        },
        {
          title: `4. ブラウザが現れると同時にDiscord UIが表示され、ボットを追加するサーバーの選択が求められます。
          `,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(6).png',
              steps: [
                '自分が管理者であるサーバーのみがドロップダウンメニューに表示されます。',
                'ボットを追加するサーバーを選択して「認証」をクリックします。',
              ],
            },
          ],
        },
        {
          title: `5.正しく認証されると、同じブラウザ上に確認画面が表示されます。 TourneyボットのDiscordサーバーへの追加はこれで完了です。
          `,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(7).png',
            },
          ],
        },
        {
          title: `6.  Discordサーバーをチェックして、ボットが追加されていることを確認します。`,
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
      title: 'Tourney AIモード',
      description: `<p>「Tourney AI」モードでは、Tourney AIボットが独自にトーナメントの作成、開始、操作を行います。</p>
      <p><i>このモードを使用できるのはサーバー管理者のみです。トーナメント許可を持つ他の役職はこのモードは利用できません。</i></p>
        <p><i>** AIモードを使えるのは、勝ち抜き形式のゲームのみです。（PUBG MOBILE、Free Fireなどは利用不可）
        </i></p>`,
      navSectionItems: [
        {
          title: `1. ダッシュボードにあるTourney AIボタンをクリックします。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(9).png',
            },
          ],
        },
        {
          title: `2. ボット設定ページにて、ドロップダウンメニューからサーバーを選択した後「AIを有効にする」をクリックします。
          `,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(10).png',
              steps: [
                `Tourneyボットがまだ追加されていない場合は、ここで「サーバーの追加」を選択して、ボットをサーバーに追加できます。`,
                `「AIを有効にする」のボタンをクリックすると新たなメニューが開きます。`,
              ],
            },
          ],
        },
        {
          title: `3.モデレーター設定`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(11).png',
              steps: [
                `モードモデレーター：管理者がここにリストアップされます。 各モデレーターは異なる設定を持つことができます。 使用する管理者を選択します。`,
                `メンションする役職：こちらでは、各AIトーナメントの試合においてメンションする役職を選択します。役職を選択していない場合、@everyoneのメンション設定になります。`,
                `試合チャンネルの公開範囲：プライベートのトーナメントチャンネルを見ることができる役職を選択します。`,
              ],
            },
          ],
        },
        {
          title: `4.  ゲーム設定`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(12).png',
              steps: [
                `自動選択を有効にする：有効にすると、AIボットがサーバーで最も人気のあるゲームを自動で決定します。`,
                `自動選択が無効になっている場合、サーバーでトーナメントを行いたいゲームを手動で選択する必要があります。 AIボットは、選択されたゲームの範囲内でのみトーナメントを実行します。`,
              ],
            },
          ],
        },
        {
          title: `5. 日程設定`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(13).png',
              steps: [
                `自動時間選択：有効すると、AIボットが参加者が最も多く集まる時間帯を算出し、その時間帯の前後でトーナメントを開始します`,
                `自動時間選択が無効になっている場合、AIボットがトーナメントを開始する時間帯を手動で選択する必要があります。`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'discord_commands',
      title: 'Discord上で利用可能なコマンドのリスト',
      navSectionItems: [
        {
          title: `1. トーナメントロビーにて利用可能`,
          innerContentList: [
            {
              steps: [
                `<strong>!register</strong> :  参加登録を行うためのコマンドです。トーナメントの参加登録が開始された後にのみ使用できます。
                `,
                `<strong>!unregister</strong> : トーナメントの参加登録を取り消すためのコマンドです`,
                `<strong>!timer</strong> : トーナメントの進行状況と各プロセスの残り時間を表示させることができます。`,
                `<strong>!myteam</strong> : チームに参加しているメンバーとメンバーの登録状況を確認することができます。`,
              ],
            },
          ],
        },
        {
          title: `2. DM内で利用可能なコマンド`,
          innerContentList: [
            {
              steps: [
                `<strong>!createteam</strong> <b class="highlight">&lt;team name&gt; &lt;ingame username&gt;</b> : 新規のチームを作成、登録するためのコマンドです。チームの作成、登録後はチームコードを他のプレイヤーと共有してチームに参加してもらう必要があります。`,
                `<strong>!jointeam</strong> <b class="highlight">&lt;team code&gt; &lt;ingame username&gt;</b> :作成済みの既存のチームに参加するためのコマンドです。`,
                `<strong>!joinsolo</strong> <b class="highlight">&lt;ingame username&gt;</b> : 個人でトーナメントに参加するためのコマンドです。`,
                `<strong>!checkin</strong> <b class="highlight">&lt;code provided&gt;</b> : チェックインが要求されるトーナメントにてチェックイン時間中にチェックインを行うためのコマンドです。`,
              ],
            },
          ],
        },
        {
          title: `3.  試合ロビーにて利用可能なコマンド
          `,
          innerContentList: [
            {
              steps: [
                `<strong>!result</strong> <b class="highlight">&lt;team name&gt;</b> : ボットに試合結果を送信するためのコマンドで、コマンドとともに勝利画面のスクリーンショットを添付する必要があります。`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'create_new_tournament',
      title: '新規トーナメント作成',
      description: `<i>手順1〜2はDiscordサーバーにTourneyボットを追加に記載されている内容と同じです。これらの手順を既に完了している場合は、手順3からお読みください。</i>`,
      navSectionItems: [
        {
          title: ` 1. 画面の左側にあるメインメニューから、「トーナメント作成」ボタンをクリックします。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png`,
            },
          ],
        },
        {
          title: ` 2.トーナメントのテンプレートのページから、トーナメントを作成したいゲームを見つけ、「カスタマイズ」をクリックします。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png`,
            },
          ],
        },
        {
          title: `3. 「トーナメントのカスタマイズ」ページの一番下にある「高度な設定」を選択します。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(15).png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(16).png`,
              steps: [
                `確認のメッセージが表示されるので「進む」をクリックします。`,
              ],
            },
          ],
        },
        {
          title: `4. 基本情報を入力します。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(17).png`,
              steps: [
                `トーナメント名：トーナメント名を入力します。トーナメント名はDiscordにてカテゴリタイトルとして大文字で表示されます。また、絵文字の使用が可能です`,
                `ゲーム：ゲームを選択してから、ゲーム形式を選択します（例：PUBG M-> Duo）。選択するゲームによって選択可能なトーナメントの形式が変わります。`,
                `日程：登録開始時刻、登録終了時刻、およびトーナメント開始時刻を選択します。 これらの日付はトーナメント投稿後、Discordチャンネルのトーナメント概要欄に表示されます。

                  <div class="inner-content">
                    <p>登録開始： Discordチャンネルにてトーナメントへの参加登録が開始される時間です。登録が開始されるまで「!register」のコマンドは機能しません。</p>
                    <p>登録終了：登録が締め切られる時間です。登録終了時間は、トーナメント開始時間の10分以上前に設定する必要があります。 チェックイン受付、組み合わせ表作成、ロビー作成が行えるのは登録終了後となります。
                    </p>
                    <p>トーナメント開始：トーナメントの開始時刻です。</p>
                  </div>`,
                `配信： トーナメントの発表とともに配信チャンネルを公開したい場合は「リンクを有効にする」をクリックして、ここに配信用のリンクを貼り付けます。`,
                `地域：国を選択します。これにより、大会告知のテキスト言語が決まります（アメリカにした場合、告知のテキストは英語になります）。`,
              ],
            },
          ],
        },
        {
          title: `5.  詳細について`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(18).png',
              steps: [
                `詳細説明： トーナメントに関する一般的な情報を記載する箇所です（例：日付と時刻、ゲームの形式、プレイヤーの制限、チェックイン時間など）。こちらはトーナメントロビーの大会告知画面に表示されます。`,
                `ルール：トーナメントに追加する特定のルールを記載できます （例：禁止事項、制限時間など）。こちらは詳細説明の下に表示されます`,
                `賞品：トーナメントの賞品に関する情報を記載できます。こちらはルールの下に表示されます。`,
              ],
            },
          ],
        },
        {
          title: `6. プラットフォームについて`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(19).png',
              steps: [
                `プラットフォームの選択： Discordを選択します。`,
                `Discordサーバー：トーナメントを公開するサーバーを選択します。`,
                `メンションする役職： Discordでトーナメントが公開された際に通知を受け取る役職を選択します。`,
                `表示する役職：トーナメントのチャンネルを見ることができ、メンションされない役職です （プライベートトーナメントを除き、推奨される役割は@everyoneです）。`,
                `試合チャンネルの公開範囲：組み合わせ表/ロビーが作成されると、ボットによって参加者用の個別のチャンネルが作成されます。ここで選択した役職を持つ人は、これらの個別チャンネルにアクセスできます。トーナメント管理者にタグ付けされている役職を選択していないと、個別チャンネルの閲覧はできません。`,
              ],
            },
          ],
        },
        {
          title: `7. 試合設定について`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(20).png',
              steps: [
                `トーナメント形式： 基本情報のセクションで選択されたゲームとゲーム形式を基にトーナメント形式が表示されます。`,
                `単独登録（チーム戦のみ）：すでに作成されたチームではなく、ランダムで新たなチームを作成する際に使うオプションです。`,
                `参加可能なプレイヤー/チームの定員：トーナメントに参加可能なプレイヤー/チームの最大数を選択します。`,
                `勝利者数： 勝利者の数を選択します （例：1位～3位）。`,
                `チェックイン： トーナメントにチェックインの手順を組み入れるためのオプションです。 参加登録を済ませたプレイヤーは、試合開始前にチェックインしなければなりません。`,
                `チェックイン時間：トーナメントが始まるまでのチェックイン時間を決定します。チェックインとトーナメント開始時間の間には、デフォルトで10分間の間隔が設けられています（時間の変更は可能）。※20分を選択した場合、チェックインはトーナメントの30分前に開始され、トーナメントの開始10分前に終了します。`,
                `補欠員リスト：何らかの理由でプレイヤー/チームが出場資格を失った場合や削除された場合に備えて補欠員を登録するためのオプションです。`,
                `自動結果： ボットに試合結果の認証を行わせるオプションです（チーム1が試合結果を送信 →　ボットが送信された結果に誤りがないかをチーム2に確認→ チーム2が結果を承認するか、返答がなかった場合、ボットがチーム1の勝利を確定するかどうかを管理者に確認します）。無効にしている場合、試合結果の認証、勝者の選択はすべて手動で行う必要があります。`,
                `定員に満たないチームの参加を許可（チーム戦のみ）：チームメンバーが定員に達していない場合でも、プレイヤーがチームとして登録できるようにするオプションです。トーナメントの枠を押さえる目的で、最初にチームのリーダー1人をトーナメントに登録させる場合に便利です。無効になっている場合、各チームはすべてのメンバーが参加登録を行うまで登録完了となりません。
                `,
              ],
            },
          ],
        },
        {
          title: `8. 「作成」をクリックして進みます`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(21).png',
              steps: [
                `作成」ボタンをクリックすると、トーナメントを投稿するかどうかを尋ねるメッセージが表示されます。「投稿」を選択した場合、Discordサーバーにて即座にトーナメントが公開されます。すぐに投稿しない場合は「あとで」を選択してください`,
                `投稿した後は変更できない項目もあるので、トーナメント投稿時には再度、情報をすべて確認してください。`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'tournament_dashboard',
      title: 'トーナメントダッシュボード',
      navSectionItems: [
        {
          title: `1.  トーナメントが作成されると、ダッシュボードに作成したトーナメントが表示されます。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(24).png',
            },
          ],
        },
        {
          title: `2. トーナメントをクリックして詳細、登録済みプレイヤーの確認、組み合わせ表とロビーの管理、賞品の送信を行うことができます。（賞金送信の機能はGame.tvのDiscordサーバー上で行われるパートナートーナメントでのみ利用可能です）。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(25).png',
              steps: [
                `編集：こちらでトーナメントの情報を変更できます。Discordサーバーで既に公開されている情報は変更することはできません。`,
                `公開/非公開：トーナメントを作成したのみで、まだ投稿していない場合は「投稿」ボタンをクリックして投稿します。 トーナメントは既に投稿しているが、参加登録を受け付けたくない場合は「停止」をクリックします（停止しても、Discordサーバーのトーナメントアナウンスは削除されません）。`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'during_registration_period',
      title: '参加登録期間',
      navSectionItems: [
        {
          title: `1. 参加登録の受付期間中、Discordユーザーは#tournament-lobbyのチャンネルにて「!register」のコマンドを入力することで参加登録を行うことができます。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(26).jpg',
            },
          ],
        },
        {
          title: `2. 「!register」のコマンドが入力されると、Tourneyボットからゲーム内ユーザー名やチーム名といった追加情報の入力を求めるDM（ダイレクトメッセージ）が送信されます。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(27).png',
            },
          ],
        },
        {
          title: `3. ユーザーがDMにて正しいコマンドを入力してTourneyボットに応答すると、ボットから登録完了メッセージが送られます（完了メッセージを受け取らなかった場合、参加登録は完了していませんのでコマンド、手順に間違いがないかを再度確認してください）。
        `,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(28).png',
              steps: [
                `参加登録が完了すると同時に参加者には新しい役職が付与されます。役職の名前はトーナメント名と同じものになります。`,
              ],
            },
          ],
        },
        {
          title: `4. トーナメント管理者はダッシュボードにて参加登録を済ませたプレイヤー/チームの名前、人数の確認、また削除を行うことができます。`,
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
          title: `5. チェックインが有効になっている場合、チェックインは設定した時間に開始されます。（例：チェックイン時間として30分を設定した場合、チェックインはトーナメントの30分前に開始されます）。`,
        },
        {
          title: `6. 登録済みユーザーと補欠員リストのユーザーは、DiscordのDMを介してボットからチェックイン要求を受け取ります。ユーザーはボットの指示に従い、チェックイン用のコマンドを入力してチェックインを行います。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(31).png',
            },
          ],
        },
        {
          title: `7. チェックインのコマンドが正しく入力された際にはボットからチェックイン完了を伝えるメッセージが送られます。`,
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
      title: 'トーナメントの進め方 - 組み合わせ形式のトーナメント',
      navSectionItems: [
        {
          title: `1.  組み合わせ表を作成してトーナメント進めるには以下の3つの条件の内いずれかが満たされている必要があります。`,
          innerContentList: [
            {
              steps: [
                `a. トーナメントが定員に達しており、補欠員リストを許可していない。`,
                `b. 参加登録の受付が終了しており、チェックインは有効にしていない。`,
                `c. 参加登録受付とチェックインの両方が終了している 。（トーナメント開始の10分前）`,
              ],
            },
          ],
        },
        {
          title: `2. これら3つの条件のいずれかが満たされると「組み合わせ表」タブに「組み合わせ表の作成」ボタンが表示されるのでそちらをクリックして組み合わせ表を作成します。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(33).png',
            },
          ],
        },
        {
          title: `3. ダッシュボードにて組み合わせ表が作成されるとすぐに、Discordチャンネル上で同じ組み合わせ表が投稿され、参加登録済みのすべての参加者に通知が送信されます。`,
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
          title: `4.  組み合わせ表が投稿されると、ボットによって各試合の個別チャンネルが作成されます。各個別チャンネルに招待されるのは試合の参加者のみです。参加者はこの個別チャンネル内で試合についてのやりとり（ルームコード、プレイヤー名の共有など）を行ったり、試合結果を報告することができます。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(36).png',
            },
          ],
        },
        {
          title: `5. プレイヤーは、 “!result <team name>”のコマンドを使用して、専用チャンネルにて試合結果を報告する必要があります。  !resultのコマンドが正しく登録されるように画像を添付してください。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                `試合結果が正しく送信されると、ボットが確認用のメッセージを送信します。`,
              ],
            },
          ],
        },
        {
          title: `6. 試合結果が送信されると試合に赤い点が表示され、トーナメントの管理者に結果が提出されたことを知らせます。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(38).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(39).png',
              steps: [
                `「自動で結果を公開」がオンになっている場合は、ボットが最初に送信された結果を正式な試合結果として認識します。5分以内に新しい結果が提出されなければ、最初の結果報告にある勝者を次の試合へ進出させます。`,
                `「自動で結果を公開」がオフになっている場合は、添付されたファイルを開いて結果を確認し、手動(勝者をクリックし最新の結果をアップデート)で勝者を次の試合へ進出させてください。`,
              ],
            },
          ],
        },
        {
          title: `7. 組み合わせ表の最後の試合が終了し勝者が決定すると、ボットがトーナメントのチャンネルで勝者を発表します。`,
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
      title: 'トーナメントの進め方 - ロビー形式のトーナメント',
      navSectionItems: [
        {
          title: `1. トーナメントのロビーを作成してトーナメントを進めるには3つの条件のいずれかを満たす必要があります。`,
          innerContentList: [
            {
              steps: [
                `a. トーナメントの定員を満たし、補欠員リストを許可していない。`,
                `b. 参加登録の受付が終了しており、チェックインは有効にしていない。`,
                `c. 参加登録の受付とチェックインの両方を終了している。(トーナメントの10分前)`,
              ],
            },
          ],
        },
        {
          title: `2. この条件のいずれかを満たすと、ロビー画面に「ロビー作成」のボタンが表示されます。ボタンをクリックしてロビーを作成してください。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(42).png',
            },
          ],
        },
        {
          title: `3.各ロビーで、3本線のアイコンで表示されたメニューボタンをクリックし、チャンネル作成をクリックします。これにより、各ロビーのプレイヤーだけがアクセスできる専用のDiscordチャンネルを作成することができます。`,
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
          title: `4. 各ロビーからメッセージ送信の機能を使用すると、トーナメントの管理者が各ロビーに試合のコードやパスワードなどのメッセージを送信することができます。メッセージがプレイヤーの目に留まるように送信者はボットのTourneyになります。
          または、チャンネルで直接メッセージを入力して送信することもできます。(この場合、送信者は管理者自身になります。)
          `,
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
          title: `5. 各試合を作成しない場合は、専用チャンネルにプレイヤーを振り分けてゲームルームを作成し、コードとパスワードを共有します。`,
        },
        {
          title: `6. プレイヤーは、“!result <team name>”のコマンドを使用して専用チャンネルで 試合結果を報告することがでます。この場合、!resultのコマンドが正しく登録されるように画像を添付する必要があります。 `,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                `試合結果が正しく送信されると、ボットが確認用のメッセージを送信します。`,
              ],
            },
          ],
        },
        {
          title: `7. 試合結果が送信されると、試合に赤い点が表示され、試合の管理者に結果が提出されたことを知らせます。結果を表示をクリックして、提出された画像を確認してください。`,
          innerContentList: [
            {
              imageCaption: `試合結果がすでに判明している場合は、結果報告の提出を待つ必要はありません。(試合を観戦していた場合など)`,
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
          title: `8. 各ロビーの勝者を選択するには以下の手順に従ってください。`,
          innerContentList: [
            {
              imageCaption: `3本線のアイコンで表示されたメニューボタンをクリックし、「スコア記録」ボタンをクリックします。`,
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(49).png',
              steps: [
                `提出された結果に従い、プレイヤーのスコアを登録します。（勝者に高スコアをつける)`,
                `複数ラウンドがある試合では、下方にある「ラウンド作成」のボタンをクリックし、結果通りに複数のスコアを登録します。`,
              ],
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(50).png',
              steps: [`登録が完了したら、「更新」をクリックします。`],
            },
          ],
        },
      ],
    },
    {
      id: 'transferring_players',
      title: 'プレイヤーを新規ロビーへ移動',
      navSectionItems: [
        {
          title: `1. ロビー形式のトーナメントで、プレイヤーを新規ロビーに進出/移動させる場合は、トーナメント形式の項目で「予選」を選択する必要があります。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(51).png',
              steps: [
                `ロビー数 :予選用に作成するロビーの数`,
                `チーム数 : 各ロビーで対戦するチーム数`,
              ],
            },
            {
              imageCaption: `<i>*.単一ロビーか複数ロビーのトーナメントを作成した場合、新規ロビーを作成する選択肢はなく、プレイヤーを進出/移動させることはできません。以下の画像は複数ロビーのトーナメントの例ですが、新規ロビーを作成するための「+」ボタンは表示されていません。</i>`,
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(52).png',
            },
          ],
        },
        {
          title: `2. トーナメント形式の項目で「予選」を選択すると、最初に作成したロビーに加えて、新規ロビーを作成する選択肢が表示されます。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(53).png',
            },
          ],
        },
        {
          title: `3. 最初に作成したロビーがまだ稼働している状態で、「+」ボタンをクリックします。ここで新規ロビーを作成することにより、次ラウンドでプレイヤーを進出/移動させることができます。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(54).png',
              steps: [
                `新規ロビーの作成時、ロビーにはプレイヤーは追加されていない状態になっています。`,
                `複数の新規ロビーを作成する場合には、再度「+」ボタンをクリックしてください。`,
              ],
            },
          ],
        },
        {
          title: `4. 新規ロビーにプレイヤーを進出/移動させるには、まず最初に既存のロビーを「終了」する必要があります。(詳しくはトーナメント終了 - ロビー形式トーナメントを参照してください)
          ロビーを終了後、新規ロビーのタブで「ロビー編集」をクリックしてください。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(55).png',
              steps: [
                `<i>*全トーナメントを終了しないようにご注意ください。すべてのロビーを終了すると、ポップアップウィンドウにトーナメントを終了するかを尋ねるメッセージが表示されます。
                トーナメントを終了してしまうと、プレイヤーの移動や新規ロビーを作成することができません。
                </i>`,
              ],
            },
          ],
        },
        {
          title: `5. どのロビーからプレイヤーを移動させるかを選択してください`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(56).png',
              steps: [
                `ロビーを追加」をクリックして複数のロビーから一度に移動させることができます。`,
                `この例では、ロビー1とロビー2だけが終了され、ロビー3はまだ稼働しています。そのため、ロビー1と2のみが選択肢として表示されています。`,
              ],
            },
          ],
        },
        {
          title: `6. 移動させたいプレイヤーの順位を選択します。`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(57).png',
              steps: [
                `複数の順位を選択することができます。`,
                `順位は、ロビー終了後のプレイヤーの位置づけを表します。(1=チーム/ロビーでの首位)`,
                `例えば、ロビーの上位2人のプレイヤーを移動させたい場合は、1と2を選択します。`,
              ],
            },
          ],
        },
        {
          title: `7. 移動させたいプレイヤーを選択後、「保存」のボタンをクリックすると移動が完了します！
        `,
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
      title: 'トーナメント終了 - 組み合わせ形式のトーナメント',
      description: `組み合わせ形式のトーナメントでは、組み合わせ表の画面で最終的な勝者が選択されると同時に、トーナメントは自動的に終了します。
      `,
    },
    {
      id: 'ending_a_tournament_lobbied_competition',
      title: 'トーナメント終了 - ロビー形式のトーナメント',
      navSectionItems: [
        {
          title: `1. すべてのロビーでスコアと勝者が更新し、3本線のアイコンで表示されたメニューボタンをクリックします。「ロビー終了」をクリックして各ロビーを終了し、すべてのロビーを終了させます。（ロビーの更新が終わったらすぐにロビーを終了させるようにしてください。終了していないロビーからはプレイヤーを移動させることができません）。
      `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(59).png`,
            },
          ],
        },
        {
          title: `2. すべてのロビーを終了させると、Game.tvのツールによりトーナメントの終了と結果の公開を促すメッセージが表示されます。
        `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(60).png`,
              steps: [
                `トーナメント終了と結果の公開を実行する場合は、「続行」をクリックしてください。`,
                `トーナメント終了と結果の公開を実行しない場合は、「閉じる」をクリックしてください。(トーナメントを終了しないと、結果は公開されません)
                `,
                `「閉じる」を選択した場合もトーナメント終了と結果を結果を公開する方法が1つあります。`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sending_prizes_to_winners',
      title: '賞品の送信方法',
      description: `<p><i>** この機能は、DiscordのBlueStacksのサーバーでトーナメントを行っているGame.tvのパートナーのみ利用することができます。</i></p>`,
      navSectionItems: [
        {
          title: `1. 勝者が選ばれトーナメントが適切に終了すると、賞品の画面で勝者の一覧を確認することができます。
      `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(61).png`,
            },
          ],
        },
        {
          title: `2. 各勝者の欄で賞品の情報を入力してください。
          `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(62).png`,
              steps: [
                `勝者の賞品に関する希望(国、賞品の種類など)を確認してください。 `,
                `特定の地域では贈呈できない賞品もあります。利用できるすべての賞品については、こちらのページ https://www.seagm.com/.をご覧ください。`,
                `各プレイヤーに贈呈する賞品を複数用意することができます(例:  Google Play (米) $20の賞品の場合、Google Play (米) $10 の賞品を2つ用意する必要があります）。`,
                `(For NA) In general, we’re okay with spending upto $4 more to find an adequate prize
                option/amount.
                For Steam,
                <div class="inner-content">
                  - For $5 / $10, please use Steam (Hong Kong) 40 HKD / 80 HKD respectively.<br>
                  - For $20 / $25, please use Steam (Malaysia) RM 80 / RM 100 respectively.
                </div>`,
              ],
            },
          ],
        },
        {
          title: `3. すべての情報を正しく入力し、「賞品を送信」というボタンをクリックしてください。`,
          innerContentList: [
            {
              steps: [
                `これによりGame.tvの運営部に賞品配布のリクエストが送信されます。賞品の情報は審査され、リクエスト承認の可否が決定されます`,
                `-リクエストが承認されると、勝者はボットのTourneyからギフトコードが記載されたメッセージを受け取ります。管理者は賞品画面で送信が完了したかどうかを確認することができます。`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cloning_existing_tournaments',
      title: '既存トーナメントの複製',
      description: `<p> 既存のトーナメントを複製することで、トーナメントの主催者は簡単に同じトーナメントを何度も作成することができ、毎回詳細を入力する必要はありません。
      <br /><i>** トーナメントと形式(ロビー形式と組み合わせ形式)を変更する場合は複製できません
      .</i> </p>`,
      navSectionItems: [
        {
          title: `1. ダッシューボードより、複製したいトーナメントを見つけ、欄の右端にある3点のアイコンで表示されたメニューボタンをクリックします。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(63).png`,
              steps: [
                `すでにトーナメントを終了している場合、「編集」と「一時停止」のボタンは利用できません。`,
                `すでにトーナメントのクリーンアップを完了している場合、「クリーンアップボタンは利用できません。`,
              ],
            },
          ],
        },
        {
          title: `2. 「複製」をクリックします。最低限の情報を入力するための新しい画面が表示されます。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(64).png`,
              steps: [
                `トーナメント名 : トーナメント名は引き継がれません。新しい名前を入力してください。`,
                `Discord サーバー : 既存のトーナメントより引き継がれます。他のサーバーにトーナメントを複製したい場合には、他のサーバーを選択してください。`,
                `ゲーム : ゲームモードは引き継がれます。変更した場合は再度カスタマイズしてください。`,
                `日程 : 日程は引き継がれません。新しい日程を入力する必要があります。`,
                `賞品 : 賞品情報は引き継がれます。賞品を変更する場合は編集してください。`,
                `動画配信 :既存のトーナメントより引き継がれます。変更する場合は編集してください。`,
                `詳細設定 : 設定を変更したい場合にはこのボタンをクリックしてください。オリジナルのトーナメントの設定画面に移動します。`,
              ],
            },
          ],
        },
      ],
    },
  ],
};
