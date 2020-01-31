import { IHowToUseTourneyLocale } from '@app/abstractions';
// tslint:disable: quotemark
export const HowToUseTourneyLocaleGerman: IHowToUseTourneyLocale = {
  metadata: {
    title: 'Game.tv - Wie benutzt man Tourney?',
    description: 'Lerne, wie du Tourney für deine Community nutzt',
  },
  navigationSections: [
    {
      id: 'create_new_account',
      title: 'Erstelle ein neues Konto',
      isActive: true,
      navSectionItems: [
        {
          title:
            '1. (Dieser Schritt ist nur für game.tv-Partner. Wenn du Turniere auf deinem eigenen Server erstellst fahre mit Schritt 2 fort.) Teile deinen Discord-Nicknamen und deine User-ID dem game.tv-Administrator mit',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0.jpg',
              imageCaption:
                'Der Discord-Nickname sollte einen 4-stelligen numerischen Tag enthalten',
              steps: [
                `Discord-ID: So findest du deine User-ID <a href='https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-'>https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-</a>`,
                'Warte bis der game.tv-Administrator dir bestätigt hat, dass das Konto für die Turniererstellung eingerichtet wurde.',
              ],
            },
          ],
        },
        {
          title: `2. Besuche <a href='https://esports.game.tv/nimda'>https://esports.game.tv/nimda</a>`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(1).png',
              imageCaption: 'Klicke auf "Mit Discord anmelden"',
            },
            {
              imageCaption: 'Klicke auf "Autorisieren"',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(2).png',
            },
          ],
        },
      ],
    },
    {
      id: 'setting_up_tourney',
      title: 'Tourney-Bot für deinen Discord-Server einrichten',
      navSectionItems: [
        {
          title:
            '1. Klicke links im Hauptmenü auf die Schaltfläche "Turnier erstellen"',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. Suche auf der Seite "Turniervorlagen" ein Spiel, für das du ein Turnier erstellen möchtest, und klicke auf "Anpassen".',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title: `3. Klicke auf der Seite "Turnier anpassen" auf "Einen weiteren Server hinzufügen".`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(5).png',
            },
          ],
        },
        {
          title:
            '4. Der Browser öffnet sich und zeigt die Benutzeroberfläche von Discord an. Du wirst aufgefordert, den Server auszuwählen, zu dem der Bot hinzugefügt werden soll.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(6).png',
              steps: [
                'Im Dropdown-Menü werden nur Server angezeigt, auf denen du der Administrator bist.',
                'Wähle den Server aus, auf dem du den Bot installieren möchtest und klicke auf "Autorisieren"',
              ],
            },
          ],
        },
        {
          title:
            '5. Nach erfolgreicher Autorisierung erhältst du im selben Browser einen Bestätigungsbildschirm. Jetzt ist Tourney-Bot auf deinem Discord-Server installiert.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(7).png',
            },
          ],
        },
        {
          title:
            '6. Überprüfe deinen Discord-Server, um sicherzustellen, dass der Bot installiert wurde.',
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
      title: 'Tourney-KI-Modus',
      description: `<p>Mit dem Modus „Tourney KI“ kann der Tourney-KI-Bot Turniere selbst erstellen, starten und durchführen!</p> <p><i>** Beachte, dass dieser Modus nur für Serveradministratoren verfügbar ist. Andere Rollen mit Turnierberechtigung haben keinen Zugriff auf diesen Modus.</i></p> <p><i>** Für den KI-Modus sind nur Spiele im Bracket-Modus verfügbar. (z. B. PUBG M, Free Fire sind ausgeschlossen).</i></p>`,
      navSectionItems: [
        {
          title:
            '1. Auf deinem Dashboard befindet sich die Tourney-KI-Schaltfläche. Klicke auf sie.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(9).png',
            },
          ],
        },
        {
          title:
            '2. Wähle auf der Seite mit den Bot-Einstellungen zunächst deinen Server aus dem Dropdown-Menü aus. Klicke dann auf "KI aktivieren".',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(10).png',
              steps: [
                'Du kannst Tourney Bot zu deinem Server hinzufügen, indem du hier Server hinzufügen auswählst, falls Tourney-Bot noch nicht installiert wurde.',
                `Durch Klicken auf die Schaltfläche "KI aktivieren" wird ein neues Menü für dich geöffnet.`,
              ],
            },
          ],
        },
        {
          title: '3. Moderatoreinstellungen',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(11).png',
              steps: [
                'Modus-Moderator: Deine Admins werden hier aufgelistet. Jeder Moderator kann unterschiedliche Einstellungen haben. Wähle den Administrator aus, den du verwenden möchtest.',
                'Rollen, die erwähnt werden sollen: In diesem Abschnitt musst du KI-Bot mitteilen, welche Rollen für jedes KI-Turnierspiel gepingt werden sollen. Wenn du keine Rolle auswählst, pingt der KI-Bot @everyone, was du möglicherweise nicht möchtest.',
                'Sichtbarkeit des Match-Kanals: Wähle eine Rolle aus, für die die privaten Turnierkanäle sichtbar sein sollen.',
              ],
            },
          ],
        },
        {
          title: '4. Spieleinstellungen',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(12).png',
              steps: [
                'Automatische Auswahl aktivieren: Wenn du diese Option aktivierst, entscheidet der KI-Bot, welches Spiel für deinen Server am beliebtesten ist, sodass du es nicht manuell auswählen musst.',
                `Wenn "Automatische Auswahl aktivieren" deaktiviert ist, musst du nur die Spiele auswählen, für die du Turniere auf deinem Server organisieren möchtest. Ein KI-Bot führt Turniere nur innerhalb des ausgewählten Spielpools durch.`,
              ],
            },
          ],
        },
        {
          title: '5. Zeitplaneinstellungen',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(13).png',
              steps: [
                'Automatisch Stunden auswählen: Wenn du diese Option aktivierst, entscheidet der KI-Bot, zu welcher Zeit die meisten Teilnehmer kommen, und startet um diese Zeit Turniere.',
                `Wenn die Option "Stunden automatisch auswählen" deaktiviert ist, musst du lediglich den Zeitraum auswählen, in dem der KI-Bot Turniere starten soll. KI-Bot startet Turniere innerhalb des ausgewählten Zeitraums.`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'discord_commands',
      title: 'Vollständige Liste der Discord-Commands',
      navSectionItems: [
        {
          title: '1. Verwendbar in der Turnierlobby',
          innerContentList: [
            {
              steps: [
                '<strong>!register</strong> : Dadurch kann der Registrierungsprozess beginnen. Dies kann nur verwendet werden, wenn die Registrierungszeit begonnen hat.',
                '<strong>!unregister</strong> : Dadurch wird deine Registrierung und dein Platz in einem Team entfernt.',
                '<strong>!timer</strong> : Dies zeigt dir die nächste Phase des Turnierprozesses und die verbleibende Zeit bis zu dieser Phase.',
                '<strong>!myteam</strong> : Hier erfährst du die Mitglieder deines Teams und deren Registrierungsstatus.',
              ],
            },
          ],
        },
        {
          title: '2. Verwendbar in DMs mit Tourney-Bot',
          innerContentList: [
            {
              steps: [
                "<strong>!createteam</strong> <b class='highlight'><team name> <ingame username></b> :  Dadurch wird ein neues Team in die Liste aufgenommen. Du bist die einzige Person in diesem Team, bis du den Team-Code teilst und andere Mitglieder in dein Team aufnimmst.",
                "<strong>!jointeam</strong> <b class='highlight'><team code> <ingame username></b> : Dies versetzt dich in das bestehende Team, das jemand anderes erstellt hat.",
                "<strong>!joinsolo</strong> <b class='highlight'><ingame username></b> :  Dadurch wirst du für ein Soloturnier registriert.",
                "<strong>!checkin</strong> <b class='highlight'><code provided></b> : Wenn ein Check-in erforderlich ist und die Check-in-Zeit bereits angefangen hat, kannst du einchecken und deine Registrierung abschließen.",
              ],
            },
          ],
        },
        {
          title: '3. Verwendbar in der Spielelobby',
          innerContentList: [
            {
              steps: [
                "<strong>!result</strong> <b class='highlight'><team name></b> :  So sendest du dein Match-Ergebnis an den Bot. Es ist notwendig, einen Screenshot deines Sieges zusammen mit dem Command abzusenden.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'create_new_tournament',
      title: 'Neues Turnier erstellen',
      description:
        '<i>Schritt 1)~2) sind genau die gleichen wie oben im Abschnitt Einrichten von Tourney-Bot für deinen Discord-Server. Wenn du diese Schritte bereits ausgeführt hast, kannst du mit Schritt 3) fortfahren.</i>',
      navSectionItems: [
        {
          title:
            '1. Klicke links im Hauptmenü auf die Schaltfläche "Turnier erstellen"',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. Suche auf der Seite "Turniervorlagen" ein Spiel, für das du ein Turnier erstellen möchtest, und klicke auf "Anpassen".',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title:
            '3. Scrolle auf der Seite „Turnier anpassen“ ganz nach unten und wähle "Erweiterte Einstellungen".',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(15).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(16).png',
              steps: [
                'Du wirst aufgefordert, diese Aktion zu bestätigen. Wähle einfach "Weiter".',
              ],
            },
          ],
        },
        {
          title: '4. Fülle den Abschnitt Grunddaten aus',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(17).png',
              steps: [
                'Turniername: Gib deinen Turniernamen ein. Dies wird als dein Kategorietitel in deinem Discord angezeigt. Die Buchstaben werden in Großbuchstaben angezeigt. Emojis sind in diesem Bereich erlaubt.',
                'Spiel: Wähle dein Spiel und dann dein Spielformat. (z. B. PUBG M -> Duo) Dies entscheidet, ob es sich bei deinem Turnier um ein Bracket-Turnier oder ein Lobby-Turnier handelt.',
                'Zeitplan: Wähle deine Startzeit für die Registrierung, die Endzeit für die Registrierung und die Startzeit für das Turnier. Diese Daten werden am unten in deiner Turnierankündigung angezeigt.<div class=\'inner-content\'> <p>Beginn der Registrierung: Ab diesem Zeitpunkt können sich die Spieler für dein Turnier im Discord-Kanal registrieren. Vor diesem Zeitpunkt können sich die Spieler nicht registrieren, und der Befehl "!register" funktioniert im Kanal nicht.</p> <p>Ende der Registrierung: Nach diesem Zeitpunkt können sich die Spieler nicht mehr registrieren. Die Endzeit der Registrierung darf nicht weniger als 10 Minuten vor der Startzeit des Turniers liegen. Der Check-in kann erst nach Beendigung der Registrierung beginnen. Außerdem kannst du einen Turnierbaum, oder eine Lobby erst nach Beendigung der Registrierung erstellen. </p> <p>Beginn des Turniers: Dies ist die Zeit, zu der dein Turnier beginnt.</p> </div>',
                'Stream: Wenn du ein Streamer bist und deinen Stream-Kanal zusammen mit dem Turnier ankündigen möchtest, klicke auf "Link aktivieren" und füge deinen Stream-Link hier ein.',
                'Region: Wähle hier dein Land aus. Dies wirkt sich auf die Sprache der generischen Texte in der Ankündigung aus. (z. B. USA -> Die generischen Texte der Ankündigung werden in englischer Sprache verfasst.)',
              ],
            },
          ],
        },
        {
          title: '5. Fülle den Abschnitt Details aus',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(18).png',
              steps: [
                'Beschreibung: Hier kannst du allgemeine Informationen zu deinem Turnier eingeben. (z. B. Datum und Uhrzeit, Spielmodus, Spielerlimit, Eincheckzeit usw.) Diese Informationen werden in der Ankündigung ganz oben direkt unter dem Titel angezeigt.',
                'Regeln: Hier kannst du jede beliebige Regel festlegen, die du zu deinem Turnier hinzufügen möchten. (z. B. Verbote, Zeitlimit, Best of 3 usw.) Diese Information wird in der Ankündigung direkt unter der Beschreibung angezeigt.',
                'Preise: In diesen Bereich kannst du deine Preisinformationen eintragen. Sei so genau wie möglich. Spieler reagieren sensibel auf Preise und Eurobetrag. Diese Informationen werden in der Ankündigung direkt unter Regeln angezeigt.',
              ],
            },
          ],
        },
        {
          title: '6. Fülle den Abschnitt Plattform aus',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(19).png',
              steps: [
                'Plattform wählen: Wähle Discord',
                'Discord Server: Wähle den Server, auf dem du dein Turnier ankündigen möchtest.',
                'Rollen, die erwähnt werden sollen: Dies ist die Rolle, die das Turnier erwähnen wird, wenn es in Discord angekündigt wird.',
                'Diesen Rollen anzeigen: Diese Rolle wird in der Lage sein, die Turnierankündigung und die Kanäle zu sehen, ohne einen Ping zu erhalten. (Die empfohlene Rolle ist @everyone, es sei denn, du möchtest ein privates Turnier veranstalten.)',
                'Sichtbarkeit des Match-Kanals: Wenn du ein Bracket/eine Lobby erstellst, erstellt der Bot private Kanäle für registrierte Spieler. Die hier ausgewählte Rolle kann diese privaten Kanäle sehen. Wähle also eine Rolle aus, die du hast (z. B. Turnieradministrator). Andernfalls kannst du die privaten Kanäle nicht sehen.',
              ],
            },
          ],
        },
        {
          title: '7. Fülle den Abschnitt Match-Einstellungen aus',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(20).png',
              steps: [
                'Turnierformat: Dies wird bereits durch das Spiel und das Spielformat bestimmt, das du im Abschnitt "Grunddaten ausgewählt hast.',
                'Einzelregistrierung (nur für Team-Events): Aktiviere dieses Option, wenn du Teams nach dem Zufallsprinzip bilden und keine vorgefertigten Teams zulassen möchtest.',
                'Max. Spieler/Teams erlaubt: Wähle die maximale Anzahl an Teams, die zu zulassen möchtest.',
                'Anzahl der Gewinner: Wähle die Anzahl der gewünschten Gewinner. (1~3)',
                'Check-In: Klicke hier, wenn du den Check-In für dein Turnier aktivieren möchtest. Registrierte Spieler müssen sich einchecken, um am Turnier teilnehmen zu können',
                'Eincheck-Fenster: Diese Zeit bestimmt, wie lange die Check-In-Zeit ist, bevor das Turnier beginnt. Zwischen dem Einchecken und dem Beginn des Turniers gibt es ein Standardfenster von 10 Minuten. Dieses Fenster ist einstellbar. (Beispiel: Wenn du 20 Minuten auswählst, beginnt der Check-in 30 Minuten vor dem Turnier und endet 10 Minuten vor der Turnierbeginn.)',
                'Warteliste: Aktiviere diese Option, wenn du die Warteliste für dein Turnier aktivieren möchtest. Wenn diese Option deaktiviert ist, sind Registrierungen auf die maximale Anzahl von Spielern/Teams beschränkt, die du oben ausgewählt hast.',
                'Ergebnisse automatisch posten: Wenn du diese Option aktivierst, können Bots die Ergebnisüberprüfung für jede Runde übernehmen. (Beispiel: Team1 sendet Ergebnisse an den Bot. -> Bot fragt Team2, ob das Ergebnis wahr ist. -> Wenn Team2 bestätigt oder nicht antwortet, fährt der Bot damit fort, Team1 in die nächste Runde vorzurücken). Wenn du diese Option deaktivierst, musst du jedes Match-Ergebnis überprüfen und die Gewinner manuell vorrücken.',
                'Unvollständige Teams erlauben (nur für Team-Events): Wenn diese Option aktiviert ist, können sich die Spieler auch dann als Team registrieren, wenn ihr Team nicht vollständig ist. Dies ist nützlich, wenn du den Teamleitern erlauben möchtest, sich einfach zu registrieren, um einen Platz für ihr Team zu reservieren. Wenn diese Option deaktiviert ist, ist die Registrierung erst dann abgeschlossen, wenn alle Mitglieder jedes Teams ihre individuelle Registrierung abgeschlossen haben.',
              ],
            },
          ],
        },
        {
          title: '8. Klicke auf Erstellen, um fortzufahren',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(21).png',
              steps: [
                'Durch Klicken auf <i>Erstellen</i> wird das Turnier nicht sofort angekündigt. Das Turnier-Tool fragt sofort, ob du das Turnier <i>veröffentlichen</i> möchtest. Wenn du es <i>veröffentlichst</i> wird das Turnier auf deinem Discord-Server angekündigt. Du kannst es jederzeit später <i>veröffentlichen</i> indem du auf <i>Später</i> klickst.',
                'Lies dir alle Informationen sorgfältig durch, bevor du dein Turnier veröffentlichst. Nach der Veröffentlichung kannst du die Ankündigung nicht mehr bearbeiten.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'tournament_dashboard',
      title: 'Turnier-Dashboard',
      navSectionItems: [
        {
          title:
            '1. Sobald dein Turnier erstellt wurde, kannst du dein Turnier im Dashboard sehen.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(24).png',
            },
          ],
        },
        {
          title:
            '2. Klicke auf ein Turnier, um Details und registrierte Spieler anzuzeigen, Brackets und Lobbys zu verwalten und Preise zu versenden. (Die Preisfunktion ist nur für game.tv-Partnerturniere auf dem BlueStacks-Discord-Server verfügbar.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(25).png',
              steps: [
                'Bearbeiten: Über diese Schaltfläche kannst du alle gewünschten Informationen ändern. Beachte dass durch das Bearbeiten der Informationen im Tool die Informationen, die bereits auf deinem Discord-Server angekündigt wurden, nicht geändert werden.',
                'Veröffentlichen/Pause: Wenn du dein Turnier nur erstellt und noch nicht veröffentlicht hast, kannst du auf die Schaltfläche "Veröffentlichen" klicken, um es live zu schalten. Wenn du dein Turnier bereits veröffentlicht hast, aber keine neue Registrierung erhalten möchtest, klicke auf "Pause". (Durch das Pausieren wird die Ankündigung auf deinem Discord-Server nicht gelöscht.)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'during_registration_period',
      title: 'Während des Anmeldezeitraums',
      navSectionItems: [
        {
          title:
            '1. Während dieses Zeitraums können sich Discord-Benutzer im #tournament-lobby Kanal registrieren, indem sie den Command "!register" eingeben, wenn die Registrierung zu diesem Zeitpunkt geöffnet ist.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(26).jpg',
            },
          ],
        },
        {
          title:
            '2. Sobald der Command "!register" eingegeben wurde, erhalten Benutzer eine Privatnachricht von Tourney-Bot, in der sie nach weiteren Informationen zu ihrer Ingame-ID und ihrem Teamnamen gefragt werden.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(27).png',
            },
          ],
        },
        {
          title:
            '3. Sobald der Benutzer mit den richtigen Commands in der DM mit Tourney-Bot antwortet, erhält er eine Nachricht, dass seine Registrierung abgeschlossen ist. (Wenn er die Meldung nicht erhalten hat, ist er nicht für das Turnier registriert und sollten erneut versuchen, sich von Anfang an zu registrieren.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(28).png',
              steps: [
                'Sobald der Registrierungsprozess abgeschlossen ist, erhält der Teilnehmer eine neue Rolle. Der Name der Rolle ist genau der gleiche wie der Name deines Turniers.',
              ],
            },
          ],
        },
        {
          title:
            '4. Während sich Discord-Benutzer für das Turnier registrieren, kannst du in unserem Dashboard sehen, wie viele Benutzer sich für dein Turnier registriert haben. Du kannst über dieses Tool auch deren Namen überprüfen, Spieler entfernen, oder ein Team löschen.',
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
            '5. Wenn der Check-In aktiviert ist, beginnt der Check-In zu dem von dir festgelegten Zeitpunkt. (Beispiel: Wenn du 20 Minuten als Eincheckzeit festlegst, beginnt der Eincheckvorgang 30 Minuten vor dem Turnier.)',
        },
        {
          title:
            '6. Sowohl registrierte Benutzer als auch Benutzer auf der Warteliste erhalten eine Eincheckanfrage von Tourney-Bot per Privatnachricht in Discord. Benutzer müssen die Anweisungen von Tourney-Bot befolgen und den Check-in-Befehl korrekt eingeben, um sich für die Veranstaltung zu qualifizieren.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(31).png',
            },
          ],
        },
        {
          title:
            '7. Benutzer erhalten eine Nachricht über die Bestätigung des Check-Ins von Tourney-Bot, wenn sie den Befehl zum Einchecken korrekt eingegeben haben.',
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
      title: 'Turnierorganisation - Bracket-Turnier',
      navSectionItems: [
        {
          title:
            '1. Es gibt 3 Bedingungen unter denen du ein Bracket für dein Turnier erstellen kannst:',
          innerContentList: [
            {
              steps: [
                'a. Das Turnier ist voll und die hast die Warteliste nicht aktiviert.',
                'b. Die Anmeldung ist beendet und du hast keinen Check-In aktiviert.',
                'c. Die Anmeldung & Check-In sind beide beendet. (10 Minuten vor Turnierbeginn)',
              ],
            },
          ],
        },
        {
          title:
            '2. Sobald eine dieser 3 Bedingungen erfüllt ist, wird im Tab "Brackets" die Schaltfläche "Brackets erstellen" angezeigt. Klicke darauf, um deinen Turnierbaum zu erstellen.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(33).png',
            },
          ],
        },
        {
          title:
            '3. Sobald in deinem Turnier-Tool ein Turnierbaum (Bracket) erstellt wurde, wird dasselbe Bracket im Discord-Kanal angekündigt, und alle registrierten Turnierteilnehmer werden per Ping benachrichtigt.',
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
            '4. Zusammen mit der Ankündigung der Brackets erstellt der Bot auch private Kanäle für alle Live-Matches. Jeder private Kanal ist nur die Teilnehmer des Matches sichtbar. Die Teilnehmer können diesen privaten Kanal nutzen, um über ihr Match miteinander zu kommunizieren (z. B. Raumcode teilen, Spieler-ID teilen) und um das Ergebnis einzureichen',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(36).png',
            },
          ],
        },
        {
          title:
            '5. Spieler müssen Ergebnisse im privaten Kanal mit dem Command "!result" <team name>melden. Der Screenshot muss angehängt werden, damit der Command !result korrekt registriert wird.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                'Sobald das Ergebnis richtig eingereicht wurde, antwortet der Bot mit einer Bestätigung.',
              ],
            },
          ],
        },
        {
          title:
            '6. Sobald ein Ergebnis eingereicht wurde, erscheint ein roter Punkt auf dem Match, damit du (Turnieradministrator) sehen kannst, dass das Ergebnis eingereicht wurde.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(38).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(39).png',
              steps: [
                'Wenn "Ergebnisse automatisch posten" aktiviert ist, nimmt der Bot das erste eingereichte Ergebnis als echtes Ergebnis. Wenn innerhalb von 5 Minuten kein neues Ergebnis eingereicht wird, rückt der Bot das Gewinnerteam aus ersten Ergebniseinreichung vor.',
                'Wenn "Ergebnisse automatisch posten" deaktiviert ist, musst du die angehängte Datei ansehen, das Ergebnis überprüfen und den Gewinner manuell ermitteln. (d. h. auf den Gewinner klicken und dann Ergebnis aktualisieren.)',
              ],
            },
          ],
        },
        {
          title:
            '7. Sobald das Bracket das Ende erreicht und der endgültige Gewinner ausgewählt ist, gibt der Bot den Gewinner automatisch im Turnierkanal bekannt.',
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
      title: 'Turnierorganisation - Lobby-Turnier',
      navSectionItems: [
        {
          title:
            '1. Es gibt 3 Bedingungen unter denen du Lobbys dein Turnier erstellen kannst:',
          innerContentList: [
            {
              steps: [
                'a. Das Turnier ist voll und die hast die Warteliste nicht aktiviert.',
                'b. Die Anmeldung ist beendet und du hast keinen Check-In aktiviert.',
                'c. Die Anmeldung & Check-In sind beide beendet. (10 Minuten vor Turnierbeginn)',
              ],
            },
          ],
        },
        {
          title:
            '2. Sobald eine dieser 3 Bedingungen erfüllt ist, wird im Tab "Lobby" die Schaltfläche "Lobbys erstellen" angezeigt. Klicke darauf, um deine Lobbys zu erstellen.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(42).png',
            },
          ],
        },
        {
          title:
            '3. Klicke für jede Lobby auf die 3-zeilige Menüschaltfläche und dann auf Kanal erstellen. Dadurch wird ein privater Discord-Kanal für jede Lobby erstellt, der ausschließlich Spielern der jeweiligen Lobby zur Verfügung steht.',
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
            '4. Wenn du (Turnieradministrator) eine Nachricht an jede Lobby senden möchtest (z. B. Matchcode und Passwort), kannst du die Funktion "Nachricht senden" von jeder Lobby aus verwenden. Der Absender wird Tourney (Bot) sein, daher ist es wahrscheinlich, dass er die Aufmerksamkeit der Spieler auf sich zieht. Du kannst die Nachricht auch direkt in dem Kanal senden, indem du sie eingibst. (Sender wirst in diesem Fall du sein.)',
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
            '5. Wenn du nicht jedes Macht für die Spieler erstellst, kannst du einfach einen Spieler in jedem privaten Kanal bestimmen, der die Spiellobby erstellt und Code/Passwort teilt.',
        },
        {
          title:
            '6. Spieler können Ergebnisse im privaten Kanal mit dem Command "!result" <team name>melden. Der Screenshot muss angehängt werden, damit der Command !result korrekt registriert wird.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                'Sobald das Ergebnis richtig eingereicht wurde, antwortet der Bot mit einer Bestätigung.',
              ],
            },
          ],
        },
        {
          title:
            '7. Sobald ein Ergebnis eingereicht wurde, erscheint ein roter Punkt auf dem Match, damit du (Turnieradministrator) sehen kannst, dass das Ergebnis eingereicht wurde. Klicke auf "Ergebnis ansehen", um den eingereichten Screenshot anzusehen.',
          innerContentList: [
            {
              imageCaption:
                'Du musst nicht auf die Einreichung des Ergebnisses warten, wenn du das Ergebnis bereits kennst (Wenn du beispielsweise das Spiel gesehen hast, kennst du das Ergebnis höchstwahrscheinlich bereits.)',
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
          title: '8. Um die Gewinner jeder Lobby auszuwählen,',
          innerContentList: [
            {
              imageCaption:
                'Klicken Sie auf die 3-zeilige Menüschaltfläche und dann auf die Schaltfläche "Ergebnis aufzeichnen".',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(49).png',
              steps: [
                'Trage die Punkte anhand des eingereichten Ergebnisses ein. (Gewinner sollten höhere Punktzahlen erhalten.)',
                'Für ein Match über mehrere Runden, klicke unten auf die Schaltfläche "Runde erstellen". Zeichne dann weitere Punkte anhand des Ergebnisses auf.',
              ],
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(50).png',
              steps: [
                'Sobald du mit den Aufzeichnungen fertig bist, klicke auf "Aktualisieren".',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'transferring_players',
      title: 'Verschiebe Spieler in neue Lobbys',
      navSectionItems: [
        {
          title:
            '1. Wenn du ein Lobbyturnier benötigst, bei dem die Spieler in neue Lobbys vorrücken/wechseln, musst du unter Turnierformat die Option „Elimination“ auswählen',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(51).png',
              steps: [
                'Lobby-Anzahl: Wie viele anfängliche Lobbys möchtest du in deiner ersten Runde haben',
                'Team-Anzahl: Anzahl der Teams: Wie viele Teams wird es für jede Lobby geben',
              ],
            },
            {
              imageCaption:
                '<i>* Wenn du ein Turnier mit einer einzelnen oder mehreren Lobbys erstellst, kannst du später keine neuen Lobbys erstellen. Infolgedessen kannst du Spieler nicht in neue Lobbys vorrücken. Wie du im folgenden Beispiel sehen kannst (Turnier mit mehreren Lobbys), fehlt die Schaltfläche "+", um eine neue Lobby zu erstellen.</i>',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(52).png',
            },
          ],
        },
        {
          title:
            '2. Wenn "Elimination" als Turnierformat ausgewählt ist, siehst du eine Option zum Erstellen einer neuen Lobby, zusätzlich zu der von dir ausgewählten anfänglichen Lobby-Anzahl.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(53).png',
            },
          ],
        },
        {
          title:
            '3. Während deine anfänglichen Lobbys noch live sind, klicke auf die Schaltfläche "+", um eine neue Lobby zu erstellen. In diese neue Lobby kannst du die Spieler für die nächste Runde verschieben.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(54).png',
              steps: [
                'Die neuen Lobbys sollten leer sein, wenn du sie erstellst.',
                'Wenn du mehrere neue Lobbys erstellen willst, klicke einfach nochmal auf die Schaltfläche "+".',
              ],
            },
          ],
        },
        {
          title:
            '4. Damit du Spieler in die neue Lobby verschieben kannst, musst du zuerst vorhandene Lobbys BEENDEN. (Informationen zum Beenden einer Lobby findest du im Abschnitt <a href=\'how-to-use-tourney?tab=tournament-lobbied-competition\'>Turnier beenden - Lobby-Turnier</a>). Wenn du deine Lobbys beendet hast, klicke in deiner neuen Lobby auf die Schaltfläche "Lobby bearbeiten".',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(55).png',
              steps: [
                '<i>* Bitte BEACHTE, dass du nicht das gesamte Turnier beendest! Wenn du alle Lobbys beendet hast, öffnet sich ein Popup-Fenster, in dem du gefragt wirst, ob du das Turnier beenden möchtest. Wenn du dein Turnier beendest, kannst du KEINE Spieler verschieben oder neue Lobbys hinzufügen.</i>',
              ],
            },
          ],
        },
        {
          title:
            '5. Wähle eine Lobby aus, aus der du Spieler verschieben möchtest.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(56).png',
              steps: [
                'Du kannst auf Lobby hinzufügen klicken, um Massentransfers aus mehreren Lobbys durchzuführen.',
                'In diesem Beispiel wurden nur Lobby 1 und Lobby 2 beendet. Lobby 3 ist noch live. Aus diesem Grund siehst du nur Lobby 1 und 2 als Optionen.',
              ],
            },
          ],
        },
        {
          title:
            '6. Wähle die Position(en) der Spieler aus, die du bewegen möchtest.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(57).png',
              steps: [
                'Du kannst mehrere Positionen auswählen.',
                'Die Position bezieht sich auf die Platzierung der Spieler nach dem Ende der Lobby. (Position 1 = 1. Platz Spieler/Team in dieser Lobby)',
                'Wenn du beispielsweise die Top-2-Spieler aus Lobby 1 verschieben möchtest, wählst du Position 1 & 2 aus.',
              ],
            },
          ],
        },
        {
          title:
            '7. Wenn du alle Spieler ausgewählt hast, die du verschieben möchtest, klicke auf die Schaltfläche "Speichern". Transfer vollständig!',
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
      title: 'Turnier beenden - Bracket-Turnier',
      description:
        'Dein Turnier endet automatisch, sobald der endgültige Gewinner im Tab "Brackets" ausgewählt wurde.',
    },
    {
      id: 'ending_a_tournament_lobbied_competition',
      title: 'Turnier beenden - Lobby-Turnier',
      navSectionItems: [
        {
          title:
            '1. Sobald alle Lobbys mit genauen Ergebnissen und Gewinnern aktualisiert wurden, klicke auf die 3-zeilige Menüschaltfläche und dann für jede Lobby auf die Schaltfläche "Lobby beenden". Tu dies für alle Lobbys. (Es ist ratsam, die Lobby zu beenden, sobald sie aktualisiert wurde. Du kannst keine Spieler verschieben, wenn die Lobby nicht beendet wird.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(59).png',
            },
          ],
        },
        {
          title:
            '2. Sobald alle Lobbys beendet wurden, teilt das game.tv-Tool dir mit, dass dein Turnier endet und die Ergebnisse veröffentlicht werden.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(60).png',
              steps: [
                'Wenn du das Turnier beenden und die Ergebnisse veröffentlichen möchtest, klicke auf <i>Fortfahren.</i>',
                'Wenn du weder das Turnier beenden, noch die Ergebnisse veröffentlichen willst, klicke auf <i>Schließen.</i> (Dein Turnier wird nicht beendet und die Ergebnisse nicht veröffentlicht.)',
                'Es gibt eine Option das Turnier zu beenden und die Ergebnisse zu veröffentlichen, wenn du <i>Schließen</i> ausgewählt hast.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sending_prizes_to_winners',
      title: 'Preise an Gewinner senden',
      description:
        '<p><i>** Diese Funktion steht nur game.tv-Partnern zur Verfügung, die Turniere auf BlueStacks-Discord-Servern organisieren.</i></p>',
      navSectionItems: [
        {
          title:
            '1. Sobald die Gewinner ausgewählt wurden und das Turnier korrekt beendet wurde, kannst du die Gewinner im Tab "Preise" sehen.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(61).png',
            },
          ],
        },
        {
          title: '2. Fülle einfach die Informationen für jeden Gewinner aus.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(62).png',
              steps: [
                'Stelle sicher, dass du die Preispräferenz mit deinen Gewinnern (z. B. Region, Preistyp usw.) abklärst.',
                "Einige Optionen sind möglicherweise für bestimmte Regionen nicht verfügbar. Um alle verfügbaren Preisoptionen anzuzeigen, besuche bitte<a href='https://www.seagm.com/'>https://www.seagm.com/</a>",
                'Du kannst für jeden Gewinner mehrere Preise festlegen. (Beispiel: Für einen Preis von 20$ für Google Play (US) musst du zwei von 10$ für Google Play (US) festlegen.)',
                "(Für NA) Im Allgemeinen können wir bis zu 4$ mehr ausgeben, um eine angemessene Preisoption/-summe zu finden. Für Steam, <div class='inner-content'> - Für 5$/10$ verwende bitte Steam (Hong Kong) 40 HKD/80 HKD.<br> - Für 20$/25$ verwende bitte Steam (Malaysia) RM 80/RM 100. </div> ",
              ],
            },
          ],
        },
        {
          title:
            '3. Nachdem alle Informationen korrekt ausgefüllt wurden, klicke auf die Schaltfläche "Preis senden".',
          innerContentList: [
            {
              steps: [
                'Daraufhin wird eine Anfrage zur Preisverteilung an den game.tv-Administrator gesendet. Sie überprüfen die Preisinformationen und genehmigen die Anfrage oder lehnen sie ab.',
                'Sobald die Anfrage genehmigt wurde, erhalten die Gewinner von Tourney-Bot eine DM mit einlösbaren Geschenkcodes. Du wirst im Tab "Preise" auch sehen, dass die Lieferung abgeschlossen wurde.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cloning_existing_tournaments',
      title: 'Bestehende Turniere klonen',
      description:
        '<p>Durch das Klonen vorhandener Turniere, kann der Veranstalter Turniere desselben Formats problemlos immer wieder duplizieren, ohne jedes Mal Details einrichten zu müssen.  <br /><i>** Du kannst ein Turnier nicht klonen und dessen Turniermodus ändern: Lobby vs. Brackets.</i> </p>',
      navSectionItems: [
        {
          title:
            '1. Suche in deinem Dashboard ein Turnier, das du duplizieren möchtest. Klicke am rechten Ende des Turniers auf die 3-Punkte-Menüschaltfläche.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(63).png',
              steps: [
                'Wenn du das Turnier bereits beendet hast, sind die Schaltflächen "Bearbeiten" und "Pause" nicht verfügbar.',
                'Wenn du das Turnier bereits aufgeräumt hast, ist die Schaltfläche "Aufräumen" nicht verfügbar.',
              ],
            },
          ],
        },
        {
          title:
            '2. Klicke auf <i>Klonen</i>. Ein neuer Bildschirm wird angezeigt, in dem du einige minimale Informationen eingeben musst.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(64).png',
              steps: [
                'Turniername: Dieser wird nicht vom bestehenden Turnier übernommen. Du musst einen neuen Namen für das Turnier eingeben',
                'Discord-Server: Dieser wird aus dem bestehenden Turnier übernommen. Wähle einen anderen Server, wenn du das vorhandene Turnier auf einen anderen Server duplizieren möchtest.',
                'Spiel: Die Spielmodi werden aus dem vorhandenen Turnier übernommen. Passe das Setup an, wenn du es ändern möchtest.',
                'Zeitplan: Der Zeitplan wird nicht aus dem bestehenden Turnier übernommen. Du musst einen neuen Zeitplan eingeben.',
                'Preise: Die Preisinformationen werden aus dem bestehenden Turnier übernommen. Bearbeite sie, wenn du etwas ändern möchtest.',
                'Stream: Dies wird aus dem bestehenden Turnier übernommen. Bearbeite es, wenn du etwas ändern möchtest.',
                'Erweiterte Einstellungen: Wenn du andere Einrichtungsdetails ändern möchtest, klicke auf diese Schaltfläche, um zu den ursprünglichen Einrichtungsoptionen zu gelangen.',
              ],
            },
          ],
        },
      ],
    },
  ],
};
