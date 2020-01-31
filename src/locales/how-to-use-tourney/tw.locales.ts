import { IHowToUseTourneyLocale } from '@app/abstractions';
// tslint:disable: max-line-length

export const HowToUseTourneyLocaleChinese: IHowToUseTourneyLocale = {
  metadata: {
    title: `Game.tv-如何使用Tourney`,
    description: `了解如何在您的社群中使用Tourney`,
  },
  navigationSections: [
    {
      id: `create_new_accoutn`,
      title: `創建一個新帳號`,
      isActive: true,
      navSectionItems: [
        {
          title: `1.（此步驟僅適用於game.tv合作夥伴。如果要在自己的服務器上創建錦標賽，請跳至步驟2。）與game.tv管理員共享您的Discord暱稱和用戶ID`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0.jpg`,
              imageCaption: `Discord暱稱應包含4位數字標籤`,
              steps: [
                `Discord ID：您可以透過以下方式找到您的用戶ID：https：//support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-`,
                `等待game.tv管理員與您確認已為創建比賽設定了帳號。`,
              ],
            },
          ],
        },
        {
          title: `2. 拜訪 1 https://esports.game.tv/nimda1 `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(1).png`,
              imageCaption: `點擊“使用Discord登入”`,
            },
            {
              imageCaption: `點擊“Authorize”`,
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(2).png`,
            },
          ],
        },
      ],
    },
    {
      id: `setting_up_tourney`,
      title: `為Discord伺服器設置Tourney Bot`,
      navSectionItems: [
        {
          title: `1、請在左側的主選單中，點擊“創建比賽”按鈕`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png`,
            },
          ],
        },
        {
          title: `2、從“錦標賽模組”頁面中，找到要為其創建錦標賽的遊戲，然後點擊“自定義”。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png`,
            },
          ],
        },
        {
          title: `3、在“自定義錦標賽”頁面中，點擊“新增其他伺服器”的連結網址。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(5).png`,
            },
          ],
        },
        {
          title: `4、瀏覽器將彈出並顯示Discord UI，要求您選擇要添加Bot的伺服器。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(6).png`,
              steps: [
                `下拉選單中只會顯示您作為管理員的伺服器。`,
                `請選擇要安裝機器人的伺服器，然後點擊“授權”。`,
              ],
            },
          ],
        },
        {
          title: `5、確認授權後，您將在同一瀏覽器中看到確認的顯示畫面。 現在，Tourney Bot已安裝在Discord伺服器中。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(7).png`,
            },
          ],
        },
        {
          title: `6、檢查您的Discord伺服器，確保已經安裝了該bot。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(8).png`,
            },
          ],
        },
      ],
    },
    {
      id: `tourney_ai_mode`,
      title: `Tourney AI模式`,
      description: `<p>“Tourney AI”模式可讓Tourney AI Bot自行創建、啟動和操作錦標賽！</p><p><i>** 請注意，此模式僅對伺服器管理員可用。 具有錦標賽許可的其他角色將無法訪問此模式。</i></p><p><i>** 僅具有賽程表的遊戲可用於AI模式。 （即PUBG M，不包括免費射擊）</i></p>`,
      navSectionItems: [
        {
          title: `1、請在您的儀表板上找到Tourney AI按鈕，並且 點擊它。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(9).png`,
            },
          ],
        },
        {
          title: `2、在“機器人設定”頁面上，首先從下拉選單中選擇伺服器。 然後點擊啟用AI。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(10).png`,
              steps: [
                `如果尚未安裝Tourney Bot，則可以透過在此處選擇添加伺服器來將Tourney Bot添加到伺服器。`,
                `點擊啟用AI按鈕將為您打開一個新選單。`,
              ],
            },
          ],
        },
        {
          title: `3、版主設置`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(11).png`,
              steps: [
                `模式主持人：您的管理員將在此處列出。 每個主持人可以具有不同的設置。 選擇您要使用的管理員。`,
                `提及的角色：在此部分中，您將必須告訴AI bot對於每個AI錦標賽遊戲要標記哪些身分組。 如果您不選擇身分組，則AI機器人會標記所有人。`,
                `比賽頻道能見度：選擇您希望可見到私人錦標賽頻道的身分組。`,
              ],
            },
          ],
        },
        {
          title: `4、遊戲設定`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(12).png`,
              steps: [
                `啟動自動選擇：如果啟用此功能，則AI機器人將決定哪個遊戲會是伺服器上最受歡迎的遊戲，因此您無需手動選擇。`,
                `如果關閉了啟動自動選擇功能，則只需要選擇要在伺服器上進行比賽的遊戲即可。 AI機器人將僅在選定的遊戲池中進行錦標賽。`,
              ],
            },
          ],
        },
        {
          title: `5、行程表安排設置`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(13).png`,
              steps: [
                `自動選擇時間：如果您啟用此選項，則AI機器人將決定哪個時間吸引最多的參與者並在該時間附近啟動比賽。`,
                `如果關閉了“自動選擇時段”功能，則只需選擇您希望AI機器人啟動錦標賽的時間範圍。 AI機器人將在選定的時間範圍內發起比賽。`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `discord_commands`,
      title: `Discord 指令的完整列表`,
      navSectionItems: [
        {
          title: `1、可用於比賽大廳`,
          innerContentList: [
            {
              steps: [
                `<strong>!register</strong>：這將允許您開始註冊。 僅在註冊開始後才可用。`,
                `<strong>!unregister</strong>：這將從註冊中以及您的團隊中刪除您的位置。`,
                `<strong>!timer</strong>：這將告訴您比賽過程的下一階段，以及該階段還剩下多少時間。`,
                `<strong>!myteam</strong>：這將告訴您團隊中的成員及其註冊狀態。`,
              ],
            },
          ],
        },
        {
          title: `2、可與Tourney Bot一起在私訊中使用`,
          innerContentList: [
            {
              steps: [
                `<strong>!createteam</strong><b class='highlight'><team name><ingame username></b>：這會將一個新團隊註冊到名冊中。 在您共享團隊代碼並讓其他人加入您的團隊之前，您將會是該團隊中唯一存在的選手。`,
                `<strong>!jointeam</strong><b class='highlight'><team code><ingame username></b>：這會使您進入其他人創建的現有團隊。`,
                `<strong>!joinsolo</strong><b class='highlight'><ingame username></b>：這將讓您以一枝獨秀的模式來參與錦標賽。`,
                `<strong>!checking</strong><b class='highlight'><code provided></b>：如果有辦理簽到手續的要求，並且已經開始辦理簽到手續，這將使您可以辦理簽到手續並完成報名。`,
              ],
            },
          ],
        },
        {
          title: `3、可用於遊戲大廳`,
          innerContentList: [
            {
              steps: [
                `<strong>!result</strong><b class='highlight'><team name></b>：這是將比賽結果提交給機器人的方法。 要求您在輸入指令時附上勝利畫面截圖。`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `create_new_tournament`,
      title: `開創一場新的比賽`,
      description: `<i>步驟（1）〜（2）與上述“為Discord Server設定Tourney Bot”部分中顯示的完全相同。 如果您已完成這些步驟，則可以跳至步驟（3）。</i>`,
      navSectionItems: [
        {
          title: `1、在左側的主選單中，點擊“創建比賽”按鈕`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png`,
            },
          ],
        },
        {
          title: `2、從“錦標賽版型”的頁面中，找到要為其創建錦標賽的遊戲，然後點擊“自定義”。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png`,
            },
          ],
        },
        {
          title: `3、在“自定義比賽”頁面中，滑動到最底端，然後選擇“高級設置”。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(15).png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(16).png`,
              steps: [`提示會要求您確認此操作，而您只需選擇繼續。`],
            },
          ],
        },
        {
          title: `4、請填寫基本資訊`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(17).png`,
              steps: [
                `賽事名稱：請輸入您的賽事名稱，這將在“ Discord”中顯示為“類別”的名稱。 若為英文字母將以大寫字母顯示， 此部分允許使用表情符號。`,
                `遊戲：請選擇您的遊戲，然後選擇您的遊戲競賽模式。 （例如PUBG M-> Duo雙人），這將決定您的錦標賽是何種形式的錦標賽。`,
                `行程表：請選擇您的報名開始時間、報名結束時間以及比賽開始時間。 這些日期將顯示在比賽公告的底端。<div class='inner-content'><p>報名開始時間：這是玩家可以在Discord頻道中開始報名您的錦標賽時間。 在此之前，選手將無法報名，而且“!register”命令將無法在該頻道中使用。</p><p> 報名結束時間：此後，玩家將無法報名。 報名結束時間不得少於比賽開始時間的10分鐘。 登記結束後才能開始辦理簽到手續。 另外，您只能在報名結束後創建賽程表或大廳。</p><p> 比賽開始時間：這是比賽開始的時間。</p></div>`,
                `直播：如果您是一名實況主，並且您想在比賽公告中發布自己的直播頻道，請點擊“啟用連結”，然後將您的直播連結網址放於此處。`,
                `地區：在這裡選擇您的國家，這將決定通用文本在公告內會使用哪種語言。 （例如，美國->公告的通用文本為英文。）`,
              ],
            },
          ],
        },
        {
          title: `5、請填寫詳細資訊`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(18).png`,
              steps: [
                `Description : You can put general information about your tournament here. (ex. date & time, game mode, player limit, check-in time etc.) This information will be displayed in the announcement at the top of announcement just below the title.`,
                `Rules : You can put any specific rule that you’d like to add to your tournament. (ex. ban, time-limit, best of 3 etc.) This information will be displayed in the announcement just below Description.`,
                `Prizes : You can put your prize information in this section. Be as specific as possible; players are sensitive about prizes and dollar amount. This information will be displayed in the announcement just below Rules.`,
              ],
            },
          ],
        },
        {
          title: `6. Fill out Platform section`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(19).png`,
              steps: [
                `Choose Platform : Choose Discord`,
                `Discord Server : Choose the server that you want to announce your tournament at.`,
                `Roles to Mention : This is the role that the tournament will ping when it gets announced in Discord.`,
                `Show to Roles : This role will be able to see the tournament announcement and channels without getting pinged. (Recommended role is @everyone unless you want to make a private tournament.)`,
                `Channel Visibility : When you create bracket/lobby, the bot will create private channels for registered players. Role that you select here will be able to see those private channels. So select a role that you (tournament admin) are tagged with. Otherwise, you won’t be able to see the private channels.`,
              ],
            },
          ],
        },
        {
          title: `7. Fill out Match Settings section`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(20).png`,
              steps: [
                `Tournament Format : This is already decided by the game and game format that you selected in Basic Info section.`,
                `Solo Registration (for team events only) : Check this on if you want to form teams randomly and not allow for premade teams.`,
                `Max Players/Teams Allowed : Select the max team that you want to allow.`,
                `Number of Winners : Select the number of winners that you want. (1~3)`,
                `Check In : Click this on if you want to enable check-in process for your tournament. Registered players must check in to participate in the event`,
                `Check In Time : This time will decide how long of check-in time you’re going to allow before the tournament begins. There is a default 10-minute window between check-in and tournament start time. This window is adjustable. (ex. If you select 20 min, check-in process will begin 30 minutes before the tournament and end 10 minutes before the tournament time.)`,
                `Waitlist : Check this on if you want to enable waitlist for your tournament. When off, you will be able to receive players up to the Max Players/Teams that you selected above.`,
                `Automatically Post Results : By checking this on, you’re allowing bots to take over the result verification for each round. (ex. Team1 submits results to the bot -> Bot asks Team2 if the result is true -> If Team2 confirms or does not respond, bot proceeds to advance Team1 with you having to interfere.) By checking this off, you will verify each match result and advance winners manually.`,
                `Allow Incomplete Team (for team events only) : By checking this on, players will be able to register as a team even if their team is not complete. This is useful when you want to allow team leaders to sign up his/her team first in order to save a spot in the tournament. If this is off, then registration would only be complete when all members of each team has finished their individual registration.`,
              ],
            },
          ],
        },
        {
          title: `8. Click Create to proceed`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(21).png`,
              steps: [
                `Clicking <i>Create</i> does not announce the tournament immediately. The tournament tool ask immediately if you want to <i>Publish</i> the tournament. <i>Publishing</i> it will announce the tournament in your Discord server. You can alway <i>Publish</i> it later by clicking <i>Later.</i>`,
                `Be sure to review all information before publishing your tournament. Once published, you will not be able to edit the announcement.`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `tournament_dashboard`,
      title: `Tournament Dashboard`,
      navSectionItems: [
        {
          title: `1. Once your tournament is created, you will be able to see your tournament listed in the Dashboard. `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(24).png`,
            },
          ],
        },
        {
          title: `2. Click on a tournament to view details and registered players, to manage brackets and lobbies, and to send out prizes. (Prize feature is only available to game.tv partner tournaments on BlueStacks Discord server.)`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(25).png`,
              steps: [
                `Edit : You’re able to change any information you want using this button. Keep in mind that editing information in the tool will not change the information that’s already been announced in your Discord server.`,
                `Publish / Unpublish : If you only created your tournament and not yet published it, then you can click on Publish button to make it live. If you already published your tournament, but wants to hold off on getting new registration, you can do so by clicking on Unpublish. (Unpublish will not remove or delete the announcement in your Discord server.)`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `during_registration_period`,
      title: `During Registration Period`,
      navSectionItems: [
        {
          title: `1. During this period, Discord users will be able to register in #tournament-lobby channel by typing “!register” command if registration is open at that time.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(26).jpg`,
            },
          ],
        },
        {
          title: `2. As soon as “!register” command is input, users will receive a direct message from Tourney Bot, asking for more information about their ingame ID and team name.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(27).png`,
            },
          ],
        },
        {
          title: `3. Once user responds back to Tourney Bot using correct commands in DM, they will receive a registration completion message from the Bot. (If they didn’t receive the completion message, then they’re not registered for the tournament and they should try registering from the beginning again.) `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(28).png`,
              steps: [
                `As soon as the registration process is complete, the participant will receive a new role; the name of the role is exactly the same as the name of your tournament.`,
              ],
            },
          ],
        },
        {
          title: `4. As Discord users are registering for the tournament, you will be able to see how many users have registered for your tournament in our dashboard. You can also check their names, remove player, or remove team from this tool.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(29).png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(30).png`,
            },
          ],
        },
        {
          title: `5. If Check-In is on, the check-in process will begin at the time that you have set. (ex. If you set 30 min as check-in time, check-in process will begin 30 minutes before the tournament.)`,
        },
        {
          title: `6. Both registered users and waitlisted users will receive a check-in request from Tourney Bot via direct message in Discord. Users must follow Tourney Bot’s instruction and input check-in command correctly to qualify for the event.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(31).png`,
            },
          ],
        },
        {
          title: `7. Users will receive a check-in completion message from Tourney Bot if they entered the check-in command correctly.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(32).png`,
            },
          ],
        },
      ],
    },
    {
      id: `coordinating_tournament_bracketed`,
      title: `Coordinating Tournament - Bracketed Competition`,
      navSectionItems: [
        {
          title: `1. There are 3 conditions which allow you to create bracket for you tournament:`,
          innerContentList: [
            {
              steps: [
                `a. Your tournament is full, and you didn’t allow waitlist.`,
                `b. Your registration has ended, and you didn’t enable check-in process.`,
                `c. Your registration & check-in have both have ended. (10 minutes before tournament time)`,
              ],
            },
          ],
        },
        {
          title: `2. Once any one of these 3 conditions are met, you will see Create Bracket button under Brackets tab. Click on it to create your bracket.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(33).png`,
            },
          ],
        },
        {
          title: `3. As soon as bracket is created in your tournament tool, the same bracket will be announced in the Discord channel, pinging all the registered tournament participant.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(34).png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(35).png`,
            },
          ],
        },
        {
          title: `4. Along with the bracket announcement, the bot will also create private channels for all live matches. Each private channel only invites the participants of the match. The participants can use this private channel to communicate with one another about their match (ie. sharing room code, sharing player ID) and to report result`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(36).png`,
            },
          ],
        },
        {
          title: `5. Players must report results in the private channel, using the “!result <team name>” command. Screenshot must be attached in order for the !result command to be registered correctly.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png`,
              steps: [
                `Once result is submitted correctly, the bot will reply with confirmation.`,
              ],
            },
          ],
        },
        {
          title: `6. Once a result is submitted, a red dot will appear on the match so you (tournament admin) can see that the result has been submitted.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(38).png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(39).png`,
              steps: [
                `If “Automatically Post Results” is on, then the bot will take the first result submitted as the true result. If no new result is submitted in 5 minutes, the bot will advance the winning team in first result submission.`,
                `If “Automatically Post Results” is off, then you will have to look at the attached file, verify the result, then advance the winner manually. (ie. click on the winner, then select Update result.)`,
              ],
            },
          ],
        },
        {
          title: `7. Once bracket reaches the end and the final winner is selected, the bot will announce the winner in the tournament channel automatically.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(40).png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(41).png`,
            },
          ],
        },
      ],
    },
    {
      id: `coordinating_tournament_lobbied`,
      title: `Coordinating Tournament - Lobbied Competition`,
      navSectionItems: [
        {
          title: `1. There are 3 conditions which allow you to create lobbies for you tournament:`,
          innerContentList: [
            {
              steps: [
                `a. Your tournament is full, and you didn’t allow waitlist.`,
                `b. Your registration has ended, and you didn’t enable check-in process.`,
                `c. Your registration & check-in have both have ended. (10 minutes before tournament time)`,
              ],
            },
          ],
        },
        {
          title: `2. Once any one of these 3 conditions are met, you will see Create Lobby button under Lobby tab. Click on it to create your lobbies.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(42).png`,
            },
          ],
        },
        {
          title: `3. For each lobby, click on 3-line menu button, then click on Create Channel. Doing so will create a private Discord channel for each lobby strictly for players in each lobby.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(43).png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(44).png`,
            },
          ],
        },
        {
          title: `4. If you (tournament admin) want to send message to each lobby (ie. match code and pw), you can use Send message feature from each lobby. Sender will be Tourney (bot), so it likely to catch players’ eyes. Or you may send message directly on the channel by typing it out. (Send will be you in this case.)`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(45).png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(46).png`,
            },
          ],
        },
        {
          title: `5. If you’re not creating each match for players, you can simply assign a player in each private channel to create a game room and share code/pw.`,
        },
        {
          title: `6. Players may report results in the private channel, using the “!result <team name>” command. Screenshot must be attached in order for the !result command to be registered correctly.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png`,
              steps: [
                `Once result is submitted correctly, the bot will reply with confirmation.`,
              ],
            },
          ],
        },
        {
          title: `7. Once a result is submitted, a red dot will appear on the match so you (tournament admin) can see that the result has been submitted. Click on View results to view screenshots submitted.`,
          innerContentList: [
            {
              imageCaption: `You do not need to wait for result submission if you already know the result. (ie. if you were spectating the match, you most likely know the result already.)`,
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(47).png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(48).png`,
            },
          ],
        },
        {
          title: `8. In order to select winner(s) of each lobby,`,
          innerContentList: [
            {
              imageCaption: `Click on 3-line menu button, then click on Record Score button.`,
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(49).png`,
              steps: [
                `Record player scores according to the results submitted. (Winning players should get higher scores.)`,
                `For multiple-round match, click on Create Round button at the bottom. Then record more scores according to the results.`,
              ],
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(50).png`,
              steps: [`Once recording is done, click on Update.`],
            },
          ],
        },
      ],
    },
    {
      id: `transferring_players`,
      title: `Transferring Players to New Lobbies`,
      navSectionItems: [
        {
          title: `1. If you need to have lobbied tournament where players advance/transfer to new lobbies, you must select “Elimination” under Tournament Format.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(51).png`,
              steps: [
                `Lobby Counts : How many initial lobbies that you want to have for your preliminary rounds`,
                `Team Counts : How many teams will there be for each lobby`,
              ],
            },
            {
              imageCaption: `<i>* If you create a Single Lobby or Multiple Lobbies tournament, you will not have the option to create new lobbies and, therefore, you won’t be able to move/advance players to new lobbies. As you can see in the example below (Multiple Lobbies tournament), “+” button to create a new lobby is missing.</i>`,
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(52).png`,
            },
          ],
        },
        {
          title: `2. If “Elimination” is selected as your Tournament Format, you will see an option to create a new lobby in addition to initial Lobby Counts you selected.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(53).png`,
            },
          ],
        },
        {
          title: `3. While your initial lobbies are still live, click on “+” button to create a new lobby. This new lobby is where you will be advancing/transferring your players for future round.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(54).png`,
              steps: [
                `The new lobby should be empty when you create it.`,
                `If you need to create multiple new lobbies, just click on “+” button again.`,
              ],
            },
          ],
        },
        {
          title: `4. For you to advance/transfer players to the new lobby, you must END existing lobbies first. (Please refer to <a href='how-to-use-tourney?tab=tournament-lobbied-competition'>Ending a Tournament - Lobbied Competition</a> section on how to end a lobby) Once you end your lobbies, click on “Edit Lobby” button in your new lobby.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(55).png`,
              steps: [
                `<i>* Please BE CAREFUL not to end the entire tournament! When you end all lobbies, the tool will give you a pop-up window, asking if you want to end the tournament. If you end your tournament, you will NOT be able to transfer players or add new lobbies.</i>`,
              ],
            },
          ],
        },
        {
          title: `5. Select a lobby from which you want to move players.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(56).png`,
              steps: [
                `You can click on Add Lobby to do bulk transfers from multiple lobbies.`,
                `In this example, only Lobby 1 and Lobby 2 are ended. Lobby 3 is still live. That’s why you only see Lobby 1 & 2 as options.`,
              ],
            },
          ],
        },
        {
          title: `6、選擇要移動的玩家位置。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(57).png`,
              steps: [
                `您可以選擇多個位置。`,
                `位置是指大廳結束後玩家的位置。 （位置1 =該大廳中的第一名隊員/團隊）`,
                `例如：如果您想從1號大廳中晉升前2名玩家，則可以選擇排名1和2。`,
              ],
            },
          ],
        },
        {
          title: `7、選擇完要轉移的選手後，點擊保存按鈕。 轉移完成！`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(58).png`,
            },
          ],
        },
      ],
    },
    {
      id: `ending_a_tournament_bracketed_competition`,
      title: `結束比賽-賽程分支表內的競賽`,
      description: `在“賽程分支表”選項中選擇了最終獲勝者後，您的錦標賽將自動結束。`,
    },
    {
      id: `ending_a_tournament_lobbied_competition`,
      title: `結束比賽-大廳賽事`,
      navSectionItems: [
        {
          title: `1、在所有大廳更新了準確的分數和獲勝者後，請點擊具有三條線的選單按鈕，然後為每個大廳點擊“結束大廳”按鈕，並對所有大廳都這樣做。 （這是一個好習慣，請在大廳更新後立即結束。如果大廳沒有結束，您將無法移動玩家。）`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(59).png`,
            },
          ],
        },
        {
          title: `2、所有大廳活動結束後，game.tv小幫手將告知您比賽將結束並且結果將被發布。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(60).png`,
              steps: [
                `如果您希望結束比賽並發布結果，請點擊<i>繼續。</i>`,
                `如果您不想結束比賽或不發布結果，請點擊<i>關閉。</i> （您的比賽將不會結束，結果也不會發布。）`,
                `如果您選擇<i>關閉</i>，將有一個結束比賽並發布結果的選項。`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `sending_prizes_to_winners`,
      title: `向獲獎者發送獎品`,
      description: `<p><i>**此功能僅適用於在BlueStacks Discord伺服器上進行比賽的game.tv合作夥伴。</i></p>`,
      navSectionItems: [
        {
          title: `1、一旦選擇了獲勝者並正確結束了比賽，您將能夠看到在“獎賞”選項中列出的獲勝者。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(61).png`,
            },
          ],
        },
        {
          title: `2、只需填寫每個獲獎者的資訊。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(62).png`,
              steps: [
                `請務必與獲獎者仔細檢查獎項的偏好（例如，地區位置，獎項類型等）`,
                `某些選項可能不適用於某些地區。 要查看所有可用的獎金選項，請訪問https://www.seagm.com/`,
                `您可以為每個獲獎者設置多個獎項。 （例如，對於20美元的Google Play獎金，您需要設置兩個10美元的Google Play獎金。）`,
                `（對於不適用）通常，我們可以多花$ 4 美金來找到合適的獎金選項/金額。 對於Steam，<div class='inner-content'>-$ 5 / $ 10，請分別使用Steam（Hong Kong）40港幣/ 80港幣。<br> -$ 20 / $ 25，請分別使用Steam（Malaysia）RM 80 / RM 100。</div>`,
              ],
            },
          ],
        },
        {
          title: `3、正確填寫所有資料後，點擊“發送獎金”按鈕。`,
          innerContentList: [
            {
              steps: [
                `這會將獎金分配請求發送給game.tv管理員。 他們將審查獎品資訊，然後批准或拒絕請求。`,
                `申請獲得批准後，獲獎者將收到來自Tourney Bot的私訊，其中包含可兌換的獎品代碼。 您還將在“獎勵”選項下看到交付是否已經完成。`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `cloning_existing_tournaments`,
      title: `完整複製現有比賽`,
      description: `<p>透過複製現有的錦標賽，錦標賽主持人可以輕鬆地一遍又一遍地複製相同格式設定的錦標賽，而不必每次都重新設置資訊。<br /> **您可能無法複製比賽並更改其比賽模式，如：大廳與賽程表。<i></p>`,
      navSectionItems: [
        {
          title: `1、從儀表板上找到要複製的錦標賽， 在錦標賽的右邊，點擊有著3個點的選單按鈕。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(63).png`,
              steps: [
                `如果您已經結束比賽，則“編輯以及暫停”按鈕將不可用。`,
                `如果您已經清除了錦標賽，則刪除按鈕將不可用。`,
              ],
            },
          ],
        },
        {
          title: `2、點擊<i>來完整複製</i>.  將出現一個新的提示畫面，您必須在其中輸入一些基本訊息。`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(64).png`,
              steps: [
                `比賽名稱：此名稱不會從現有比賽中延續。 您必須為比賽輸入一個新名稱`,
                `Discord 伺服器：這將從現有錦標賽中延續下來。 如果要將現有錦標賽複製到另一個伺服器，請選擇其他伺服器。`,
                `遊戲：遊戲模式將從現有錦標賽中延續。 如果您要更改，請自定義設置。`,
                `行程表：行程表不會從現有比賽中延續。 您將必須輸入新的行程表。`,
                `獎品：獎品訊息將從現有比賽中延續。 如果要更改，請編輯。`,
                `直播：這將從現有錦標賽中延續下來。 如果要更改，請編輯。`,
                `高級設定：如要更改其他設定細項，請點擊此按鈕將帶您到初始設定選項。`,
              ],
            },
          ],
        },
      ],
    },
  ],
};
