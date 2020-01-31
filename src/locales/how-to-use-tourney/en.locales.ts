import { IHowToUseTourneyLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const HowToUseTourneyLocaleEnglish: IHowToUseTourneyLocale = {
  metadata: {
    title: 'Game.tv - How to use Tourney',
    description: 'Learn how to use Tourney for your community',
  },
  navigationSections: [
    {
      id: 'create_new_accoutn',
      title: 'Creating a New Account',
      isActive: true,
      navSectionItems: [
        {
          title: `1. (This step is for game.tv partners only. If you’re creating tournaments on your own server, please
          skip to step 2.) Share your Discord nickname and user ID to game.tv admin`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0.jpg',
              imageCaption:
                'Discord nickname should include 4-digit numeric tag',
              steps: [
                `Discord ID : Here’s how you can find your user ID <a
            href="https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-">https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-</a>`,
                `Wait for game.tv admin to confirm with you that the account has been set up for tournament
            creation.`,
              ],
            },
          ],
        },
        {
          title: `2. Visit <a href="/dashboard">https://game.tv/dashboard</a>`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(1).png',
              imageCaption: 'Click “Sign in with Discord”',
            },
            {
              imageCaption: 'Click “Authorize”',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(2).png',
            },
          ],
        },
      ],
    },
    {
      id: 'setting_up_tourney',
      title: 'Setting up Tourney Bot for Your Discord Server',
      navSectionItems: [
        {
          title: `1. From your main menu on the left, click on “Create Tournament” button`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title: `2. From Tournament Templates page, find a game that you want to create tournament for and click
        Customize.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title: `3. In Customize Tournament page, click Add another server link.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(5).png',
            },
          ],
        },
        {
          title: `4. Browser will pop up and show Discord UI, asking you to select server to add the Bot to.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(6).png',
              steps: [
                'Only servers in which you’re the admin will appear in the drop-down menu.',
                'Select the server you want to install the bot, then click Authorize.',
              ],
            },
          ],
        },
        {
          title: `5. When authorized correctly, you will get a confirmation screen in the same browser. Now Tourney Bot
        is installed in your Discord server.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(7).png',
            },
          ],
        },
        {
          title: `6. Check your Discord server to make sure that the bot has been installed.`,
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
      title: 'Tourney AI Mode',
      description: `<p>“Tourney AI” mode allows Tourney AI Bot to create, launch, and operate tournaments on its own!</p>
      <p><i>** Note that this mode will only be available to server admins. Other roles with tournament
          permission will not have access to this mode.</i></p>
        <p><i>** Only bracket mode games are available for AI mode. (ie. PUBG M, Free Fire excluded)</i></p>`,
      navSectionItems: [
        {
          title: `1. On your dashboard, there’s is Tourney AI button. Click on it.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(9).png',
            },
          ],
        },
        {
          title: `2. On Bot settings page, first select your server from the dropdown menu. Then click on Enable
          AI.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(10).png',
              steps: [
                `You can add Tourney Bot to your server by selecting Add server here if Tourney Bot has not
                been installed yet.`,
                `Clicking on Enable AI button will open up a new menu for you.`,
              ],
            },
          ],
        },
        {
          title: `3. Moderator Setting`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(11).png',
              steps: [
                `Mode moderator : Your admins will be listed here. Each moderator can have different
                settings. Select the admin that you want to use.`,
                `Roles to mention : In this section, you will have to tell AI bot which roles to ping for
                each AI tournament game. If you don’t select role, AI bot will be mentioning @everyone which
                you might not want.`,
                `Match Channel Visibility : Select a role that you wish to have visibility to private
                tournament channels.`,
              ],
            },
          ],
        },
        {
          title: `4. Game Settings`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(12).png',
              steps: [
                `Activate Auto Pick : If you turn this on, AI bot will decide which game will be the most
               popular for your server so you don’t have to handpick.`,
                `If Activate Auto Pick is off, you simply need to select games that you want to have
               tournaments on your server. AI bot will be running tournaments within the selected game pool
               only.`,
              ],
            },
          ],
        },
        {
          title: `5. Schedule Settings`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(13).png',
              steps: [
                `Automatically Pick Hours : If you turn this on, AI bot will decide which time will attract
             the most participants and launch tournaments around that time.`,
                `If Automatically Pick Hours is off, you simply need to select time range that you want AI
             bot to launch tournaments. AI bot will be launching tournaments within the selected time
             range.`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'discord_commands',
      title: 'Full List of Discord Commands',
      navSectionItems: [
        {
          title: `1. Usable in Tournament Lobby`,
          innerContentList: [
            {
              steps: [
                `<strong>!register</strong> : This will allow registration process to begin for you. It’s only usable after registration has begun.`,
                `<strong>!unregister</strong> : This will remove your spot from the registration and also from your team.`,
                `<strong>!timer</strong> : This will tell you the next stage of the tournament process and how much time is left until that stage.`,
                `<strong>!myteam</strong> : This will tell you who’s in your team and their registration status.`,
              ],
            },
          ],
        },
        {
          title: `2. Usable in DM with Tourney Bot`,
          innerContentList: [
            {
              steps: [
                `<strong>!createteam</strong> <b class="highlight">&lt;team name&gt; &lt;ingame username&gt;</b> : This will register a
            new team into the roster. You will be the only person in that team until you share the team code and have others join your team.`,
                `<strong>!jointeam</strong> <b class="highlight">&lt;team code&gt; &lt;ingame username&gt;</b> : This will put you in the existing team that someone else has created.`,
                `<strong>!joinsolo</strong> <b class="highlight">&lt;ingame username&gt;</b> : This will register you for a solo tournament.`,
                `<strong>!checkin</strong> <b class="highlight">&lt;code provided&gt;</b> : If there is check-in requirement and if check-in time has begun, this will allow you to check in and complete your registration.`,
              ],
            },
          ],
        },
        {
          title: `3. Usable in Game Lobby`,
          innerContentList: [
            {
              steps: [
                `<strong>!result</strong> <b class="highlight">&lt;team name&gt;</b> : This is how to submit your match result to bot.
            It’s required that you attach a screenshot of your victory screen along with the command.`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'create_new_tournament',
      title: 'Creating a New Tournament',
      description: `<i>Step 1)~2) are exactly the same as shown above in Setting up Tourney Bot for Your Discord Server
      section. If you’ve done these steps already, you may skip to step 3).</i>`,
      navSectionItems: [
        {
          title: ` 1. From your main menu on the left, click on “Create Tournament” button `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png`,
            },
          ],
        },
        {
          title: ` 2. From Tournament Templates page, find a game that you want to create tournament for and click
        Customize. `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png`,
            },
          ],
        },
        {
          title: `3. In “Customize Tournament” page, scroll to the very bottom and select Advanced Settings.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(15).png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(16).png`,
              steps: [
                `Prompt will ask you to confirm this action. Simply select Proceed.`,
              ],
            },
          ],
        },
        {
          title: `4. Fill out Basic Info section`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(17).png`,
              steps: [
                `Tournament Name : Type your tournament name. This will appear as your Category title in your
                      Discord. The letters will be displayed in capital letters. Emojis are allowed in this section.`,
                `Game : Choose your game, then choose your game format. (ex. PUBG M -> Duo) This will decide
                whether your tournament will be a bracketed tournament or a lobbied tournament.`,
                `Schedule : Pick your registration start time, registration end time, and tournament start time.
                  These dates will be displayed at the bottom of your tournament announcement.

                  <div class="inner-content">
                    <p>Registration Start Time : This is when the players will be able to start registering for your
                      tournament in the Discord channel. Before this time, players won’t be able to register, and
                      “!register”
                      command will not work in the channel.</p>
                    <p>Registration End Time : After this time, players won’t be able to register anymore.
                      Registration End
                      Time cannot be less than 10-minute before the Tournament Start Time. Check-in process can only
                      begin
                      after registration ends. Also, you may only create bracket or lobby after registration ends.
                    </p>
                    <p>Tournament Start Time : This is the time your tournament begins.</p>
                  </div>`,
                `Stream : If you are a streamer and you want to announce your stream channel along with the
                  tournament announcement, click on “Enable Link” and put your stream link here.`,
                `Region : Select your country here. This will decide which language the generic texts will be in
                  the announcement. (ex. USA -> Announcement’s generic texts will be in English.)`,
              ],
            },
          ],
        },
        {
          title: `5. Fill out Details section`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(18).png',
              steps: [
                `Description : You can put general information about your tournament here. (ex. date & time, game
                mode, player limit, check-in time etc.) This information will be displayed in the announcement at
                the
                top of announcement just below the title.`,
                `Rules : You can put any specific rule that you’d like to add to your tournament. (ex. ban,
                time-limit, best of 3 etc.) This information will be displayed in the announcement just below
                Description.`,
                `Prizes : You can put your prize information in this section. Be as specific as possible; players
              are
              sensitive about prizes and dollar amount. This information will be displayed in the announcement
              just
              below Rules.`,
              ],
            },
          ],
        },
        {
          title: `6. Fill out Platform section`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(19).png',
              steps: [
                `Choose Platform : Choose Discord`,
                `Discord Server : Choose the server that you want to announce your tournament at.`,
                `Roles to Mention : This is the role that the tournament will ping when it gets announced in
                Discord.`,
                `Show to Roles : This role will be able to see the tournament announcement and channels without
                getting pinged. (Recommended role is @everyone unless you want to make a private tournament.)`,
                `Channel Visibility : When you create bracket/lobby, the bot will create private channels for
                registered players. Role that you select here will be able to see those private channels. So
                select a
                role that you (tournament admin) are tagged with. Otherwise, you won’t be able to see the private
                channels.`,
              ],
            },
          ],
        },
        {
          title: `7. Fill out Match Settings section`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(20).png',
              steps: [
                `Tournament Format : This is already decided by the game and game format that you selected in Basic Info section.`,
                `Solo Registration (for team events only) : Check this on if you want to form teams randomly and
                not allow for premade teams.`,
                `Max Players/Teams Allowed : Select the max team that you want to allow.`,
                `Number of Winners : Select the number of winners that you want. (1~3)`,
                `Check In : Click this on if you want to enable check-in process for your tournament. Registered
                players must check in to participate in the event`,
                `Check In Time : This time will decide how long of check-in time you’re going to allow before the
                tournament begins. There is a default 10-minute window between check-in and tournament start time.
                This window is adjustable. (ex. If you select 20 min, check-in process will begin 30 minutes
                before
                the tournament and end 10 minutes before the tournament time.)`,
                `Waitlist : Check this on if you want to enable waitlist for your tournament. When off, you will
                be
                able to receive players up to the Max Players/Teams that you selected above.`,
                `Automatically Post Results : By checking this on, you’re allowing bots to take over the result
                verification for each round. (ex. Team1 submits results to the bot -> Bot asks Team2 if the result
                is
                true -> If Team2 confirms or does not respond, bot proceeds to advance Team1 with you having to
                interfere.) By checking this off, you will verify each match result and advance winners manually.`,
                `Allow Incomplete Team (for team events only) : By checking this on, players will be able to
                register
                as a team even if their team is not complete. This is useful when you want to allow team leaders
                to
                sign up his/her team first in order to save a spot in the tournament. If this is off, then
                registration would only be complete when all members of each team has finished their individual
                registration.`,
              ],
            },
          ],
        },
        {
          title: `8. Click Create to proceed`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(21).png',
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
      id: 'tournament_dashboard',
      title: 'Tournament Dashboard',
      navSectionItems: [
        {
          title: `1. Once your tournament is created, you will be able to see your tournament listed in the Dashboard.
        `,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(24).png',
            },
          ],
        },
        {
          title: `2. Click on a tournament to view details and registered players, to manage brackets and lobbies, and
        to
        send out prizes. (Prize feature is only available to game.tv partner tournaments on BlueStacks Discord
        server.)`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(25).png',
              steps: [
                `Edit : You’re able to change any information you want using this button. Keep in mind that editing
            information in the tool will not change the information that’s already been announced in your
            Discord
            server.`,
                `Publish / Unpublish : If you only created your tournament and not yet published it, then you can
            click on Publish button to make it live. If you already published your tournament, but wants to hold
            off on getting new registration, you can do so by clicking on Unpublish. (Unpublish will not remove
            or
            delete the announcement in your Discord server.)`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'during_registration_period',
      title: 'During Registration Period',
      navSectionItems: [
        {
          title: `1. During this period, Discord users will be able to register in #tournament-lobby channel by typing
          “!register” command if registration is open at that time.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(26).jpg',
            },
          ],
        },
        {
          title: `2. As soon as “!register” command is input, users will receive a direct message from Tourney Bot,
          asking for more information about their ingame ID and team name.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(27).png',
            },
          ],
        },
        {
          title: `3. Once user responds back to Tourney Bot using correct commands in DM, they will receive a
          registration completion message from the Bot. (If they didn’t receive the completion message, then
          they’re not registered for the tournament and they should try registering from the beginning again.)
        `,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(28).png',
              steps: [
                `As soon as the registration process is complete, the participant will receive a new role; the
                name
                of the role is exactly the same as the name of your tournament.`,
              ],
            },
          ],
        },
        {
          title: `4. As Discord users are registering for the tournament, you will be able to see how many users have
          registered for your tournament in our dashboard. You can also check their names, remove player, or
          remove team from this tool.`,
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
          title: `5. If Check-In is on, the check-in process will begin at the time that you have set. (ex. If you set
            30
            min as check-in time, check-in process will begin 30 minutes before the tournament.)`,
        },
        {
          title: `6. Both registered users and waitlisted users will receive a check-in request from Tourney Bot via
          direct message in Discord. Users must follow Tourney Bot’s instruction and input check-in command
          correctly to qualify for the event.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(31).png',
            },
          ],
        },
        {
          title: `7. Users will receive a check-in completion message from Tourney Bot if they entered the check-in
          command correctly.`,
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
      title: 'Coordinating Tournament - Bracketed Competition',
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
          title: `2. Once any one of these 3 conditions are met, you will see Create Bracket button under Brackets tab.
        Click on it to create your bracket.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(33).png',
            },
          ],
        },
        {
          title: `3. As soon as bracket is created in your tournament tool, the same bracket will be announced in the
          Discord channel, pinging all the registered tournament participant.`,
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
          title: `4. Along with the bracket announcement, the bot will also create private channels for all live
          matches.
          Each private channel only invites the participants of the match. The participants can use this private
          channel to communicate with one another about their match (ie. sharing room code, sharing player ID)
          and
          to report result`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(36).png',
            },
          ],
        },
        {
          title: `5. Players must report results in the private channel, using the “!result <team name>” command.
          Screenshot must be attached in order for the !result command to be registered correctly.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                `Once result is submitted correctly, the bot will reply with confirmation.`,
              ],
            },
          ],
        },
        {
          title: `6. Once a result is submitted, a red dot will appear on the match so you (tournament admin) can see
          that the result has been submitted.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(38).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(39).png',
              steps: [
                `If “Automatically Post Results” is on, then the bot will take the first result submitted as
                the true result. If no new result is submitted in 5 minutes, the bot will advance the winning
                team in first result submission.`,
                `If “Automatically Post Results” is off, then you will have to look at the attached file,
                verify the result, then advance the winner manually. (ie. click on the winner, then select
                Update result.)`,
              ],
            },
          ],
        },
        {
          title: `7. Once bracket reaches the end and the final winner is selected, the bot will announce the winner in
          the tournament channel automatically.`,
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
      title: 'Coordinating Tournament - Lobbied Competition',
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
          title: `2. Once any one of these 3 conditions are met, you will see Create Lobby button under Lobby tab.
          Click
          on it to create your lobbies.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(42).png',
            },
          ],
        },
        {
          title: `3. For each lobby, click on 3-line menu button, then click on Create Channel. Doing so will create a
          private Discord channel for each lobby strictly for players in each lobby.`,
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
          title: `4. If you (tournament admin) want to send message to each lobby (ie. match code and pw), you can use
          Send message feature from each lobby. Sender will be Tourney (bot), so it likely to catch players’
          eyes.
          Or you may send message directly on the channel by typing it out. (Send will be you in this case.)`,
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
          title: `5. If you’re not creating each match for players, you can simply assign a player in each private
          channel to create a game room and share code/pw.`,
        },
        {
          title: `6. Players may report results in the private channel, using the “!result <team name>” command.
          Screenshot must be attached in order for the !result command to be registered correctly.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                `Once result is submitted correctly, the bot will reply with confirmation.`,
              ],
            },
          ],
        },
        {
          title: `7. Once a result is submitted, a red dot will appear on the match so you (tournament admin) can see
          that the result has been submitted. Click on View results to view screenshots submitted.`,
          innerContentList: [
            {
              imageCaption: `You do not need to wait for result submission if you already know the result. (ie. if you were
                spectating the match, you most likely know the result already.)`,
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
          title: `8. In order to select winner(s) of each lobby,`,
          innerContentList: [
            {
              imageCaption: `Click on 3-line menu button, then click on Record Score button.`,
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(49).png',
              steps: [
                `Record player scores according to the results submitted. (Winning players should get higher
                scores.)`,
                `For multiple-round match, click on Create Round button at the bottom. Then record more scores
                according to the results.`,
              ],
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(50).png',
              steps: ['Once recording is done, click on Update.'],
            },
          ],
        },
      ],
    },
    {
      id: 'transferring_players',
      title: 'Transferring Players to New Lobbies',
      navSectionItems: [
        {
          title: `1. If you need to have lobbied tournament where players advance/transfer to new lobbies, you must
        select “Elimination” under Tournament Format.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(51).png',
              steps: [
                `Lobby Counts : How many initial lobbies that you want to have for your preliminary rounds`,
                `Team Counts : How many teams will there be for each lobby`,
              ],
            },
            {
              imageCaption: `<i>* If you create a Single Lobby or Multiple Lobbies tournament, you will not have the option to
              create
              new lobbies and, therefore, you won’t be able to move/advance players to new lobbies. As you can see
              in the example below (Multiple Lobbies tournament), “+” button to create a new lobby is missing.</i>`,
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(52).png',
            },
          ],
        },
        {
          title: `2. If “Elimination” is selected as your Tournament Format, you will see an option to create a new
          lobby
          in addition to initial Lobby Counts you selected.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(53).png',
            },
          ],
        },
        {
          title: `3. While your initial lobbies are still live, click on “+” button to create a new lobby. This new
          lobby
          is where you will be advancing/transferring your players for future round.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(54).png',
              steps: [
                `The new lobby should be empty when you create it.`,
                `If you need to create multiple new lobbies, just click on “+” button again.`,
              ],
            },
          ],
        },
        {
          title: `4. For you to advance/transfer players to the new lobby, you must END existing lobbies first. (Please
            refer to <a href="how-to-use-tourney?tab=tournament-lobbied-competition">Ending a Tournament - Lobbied
              Competition</a> section on how to end a lobby) Once
            you end your lobbies, click on “Edit Lobby” button in your new lobby.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(55).png',
              steps: [
                `<i>* Please BE CAREFUL not to end the entire tournament! When you end all lobbies, the tool will give
                you a pop-up window, asking if you want to end the tournament. If you end your tournament, you will
                NOT be able to transfer players or add new lobbies.</i>`,
              ],
            },
          ],
        },
        {
          title: `5. Select a lobby from which you want to move players.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(56).png',
              steps: [
                `You can click on Add Lobby to do bulk transfers from multiple lobbies.`,
                `In this example, only Lobby 1 and Lobby 2 are ended. Lobby 3 is still live. That’s why you only
                see Lobby 1 & 2 as options.`,
              ],
            },
          ],
        },
        {
          title: `6. Select position(s) of players that you want to move.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(57).png',
              steps: [
                `You may select multiple positions.`,
                `Position refers to the placement of player after lobby has ended. (Position 1 = 1st place player/team in that lobby)`,
                `For example, if you want to advance top 2 players from Lobby 1, you would select position 1 & 2.`,
              ],
            },
          ],
        },
        {
          title: `7. Once you’re done selecting players that you want to transfer, click Save button. Transfer
          complete!
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
      title: 'Ending a Tournament - Bracketed Competition',
      description: `Your tournament will automatically end as soon as the final winner is selected in the Brackets tab. `,
    },
    {
      id: 'ending_a_tournament_lobbied_competition',
      title: 'Ending a Tournament - Lobbied Competition',
      navSectionItems: [
        {
          title: `1. Once all lobbies are updated with accurately scores and winners, click on 3-line menu button, then
        click on End Lobby button for each lobby. Do this for all lobbies. (It’s a good practice to end lobby
        as soon as it has been updated. You will not be able to move players if lobbies are not ended.)
      `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(59).png`,
            },
          ],
        },
        {
          title: `2. Once all lobbies are ended, game.tv tool will tell you that your tournament will end and that
          results will be published.
        `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(60).png`,
              steps: [
                `If you wish to end tournament and publish results, click <i>Continue.</i>`,
                `If you wish not to end tournament nor publish results, click <i>Close.</i> (Your tournament
                will not end, and the results will not be published.)`,
                `There will be an option to end tournament and publish the results if you chose <i>Close.</i>`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sending_prizes_to_winners',
      title: 'Sending Prizes to Winners',
      description: `<p><i>** This feature is only available to game.tv partners that are producing tournaments on BlueStacks
      Discord servers.</i></p>`,
      navSectionItems: [
        {
          title: `1. Once winners are selected and the tournament is ended correctly, you will be able to see the
        winners listed in the Prizes tab.
      `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(61).png`,
            },
          ],
        },
        {
          title: `2. Simply fill out the information for each winner.
          `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(62).png`,
              steps: [
                `Be sure to double check the prize preference with your winners (ie. geos, type of prize etc.)`,
                `Some options may not be available for certain geos. To view all available prize options, please
                visit <a href="https://www.seagm.com/">https://www.seagm.com/</a>`,
                `You may set up multiple prizes for each winner. (ex. For Google Play (US) $20 prize, you will
                need to set up two of Google Play (US) $10 prizes.)`,
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
          title: `3. After all information is filled out accurately, click on Send prize button.`,
          innerContentList: [
            {
              steps: [
                `This will send a prize distribution request to game.tv admin. They will review the prize
                information, then either approve or reject the request.`,
                `Once request is approved, winners will receive a DM from Tourney Bot that contains redeemable
                gift codes. You will also see that the delivery has been completed under Prizes tab.`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cloning_existing_tournaments',
      title: 'Cloning Existing Tournaments',
      description: `<p> By cloning existing tournaments, tournaments host can easily duplicate tournaments of the same format
      over and over again without having to set up details each time.
      <br /><i>** You may not clone a tournament and change it’s tournament mode: lobby vs.
        bracket.</i> </p>`,
      navSectionItems: [
        {
          title: `1. Find a tournament that you want to duplicate from your dashboard. At the right end of the
        tournament, click on 3-dotted menu button.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(63).png`,
              steps: [
                `If you have already ended the tournament, Edit and Pause button will not be available.`,
                `If you have already cleaned up the tournament, Clean up button will not be available.`,
              ],
            },
          ],
        },
        {
          title: `2. Click on <i>Clone</i>. A new screen will show up where you have to input some minimal information.
          `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(64).png`,
              steps: [
                `Tournament Name : This will not carry over from the existing tournament. You will have to input
                a new name for the tournament`,
                `Discord Server : This will carry over from the existing tournament. Choose a different server
                if you want to duplicate the existing tournament to another server.`,
                `Game : Game modes will carry over from the existing tournament. Customize the setup if you wish
                to change.`,
                `Schedule : Schedule will not carry over from the existing tournament. You will have to input a
                new schedule.`,
                `Prizes : Prize information will carry over from the existing tournament. Edit if you wish to
                change.`,
                `Stream : This will carry over from the existing tournament. Edit if you wish to change.`,
                `Advanced Setting : If you want to change other setup details, clicking this will take you to
                the original setup options.`,
              ],
            },
          ],
        },
      ],
    },
  ],
};
