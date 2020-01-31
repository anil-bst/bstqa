import { IHowToUseTourneyLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const HowToUseTourneyLocaleItalian: IHowToUseTourneyLocale = {
  metadata: {
    title: 'Game.tv - Come usare Tourney',
    description: 'Scopri come utilizzare Tourney per la tua community',
  },
  navigationSections: [
    {
      id: 'create_new_accoutn',
      title: 'Creare un nuovo account',
      isActive: true,
      navSectionItems: [
        {
          title: `1. (Questo passaggio è solo per i partner game.tv. Se stai creando tornei sul tuo server, vai al passaggio 2.) Condividi il tuo nickname Discord e l'ID utente su game.tv admin`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0.jpg',
              imageCaption:
                'Discord nickname should include 4-digit numeric tag',
              steps: [
                'Discord ID: ecco come trovare il tuo ID utente<a href="https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-">https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-</a>',
                `Attendi che l'amministratore di game.tv confermi con te che l'account è stato impostato per la creazione del torneo.`,
              ],
            },
          ],
        },
        {
          title: `2. Visita<a href='https://esports.game.tv/nimda'>https://esports.game.tv/nimda</a>`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(1).png',
              imageCaption: 'Fai clic su "Accedi con Discord"',
            },
            {
              imageCaption: 'Fai clic su "Autorizza"',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(2).png',
            },
          ],
        },
      ],
    },
    {
      id: 'setting_up_tourney',
      title: 'Configurare Tourney Bot per il tuo Discord Server',
      navSectionItems: [
        {
          title:
            '1. Dal menu principale a sinistra, fai clic sul pulsante "Crea torneo"',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. Dalla pagina Modelli torneo, trova un gioco per cui desideri creare un torneo e fai clic su Personalizza.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title:
            '3. Nella pagina Personalizza torneo, fai clic su Aggiungi un altro collegamento al server.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(5).png',
            },
          ],
        },
        {
          title: `4. Verrà visualizzato il browser che mostrerà l'interfaccia utente di Discord, chiedendo di selezionare il server a cui aggiungere il Bot.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(6).png',
              steps: [
                `Solo i server in cui sei l'amministratore verranno visualizzati nel menu a discesa.`,
                'Seleziona il server su cui desideri installare il bot, quindi fai clic su Autorizza.',
              ],
            },
          ],
        },
        {
          title:
            '5. Se autorizzato correttamente, verrà visualizzata una schermata di conferma nello stesso browser. Ora Tourney Bot è installato nel tuo server Discord.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(7).png',
            },
          ],
        },
        {
          title:
            '6. Controllare il server Discord per assicurarsi che il bot sia stato installato.',
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
      title: 'Modalità AI del torneo',
      description: `<p>La modalità "Tourney AI" consente a Tourney AI Bot di creare, lanciare e gestire tornei da solo!</p> <p><i>** Nota che questa modalità sarà disponibile solo per gli amministratori del server. Altri ruoli con permesso di torneo non avranno accesso a questa modalità.</i></p> <p><i>** Solo i giochi in modalità parentesi sono disponibili per la modalità AI. (ad es. PUBG M, Free Fire escluso)</i></p>`,
      navSectionItems: [
        {
          title: `1. Sulla tua dashboard c'è il pulsante AI di Tourney. Cliccaci sopra.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(9).png',
            },
          ],
        },
        {
          title:
            '2. Nella pagina delle impostazioni del bot, selezionare prima il server dal menu a discesa. Quindi fare clic su Abilita AI.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(10).png',
              steps: [
                'Puoi aggiungere Tourney Bot al tuo server selezionando Aggiungi server qui se Tourney Bot non è stato ancora installato.',
                'Facendo clic sul pulsante Abilita AI si aprirà un nuovo menu per te.',
              ],
            },
          ],
        },
        {
          title: '3. Impostazione moderatore',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(11).png',
              steps: [
                `Moderatore modalità: i tuoi amministratori verranno elencati qui. Ogni moderatore può avere impostazioni diverse. Seleziona l'amministratore che desideri utilizzare.`,
                `Ruoli da menzionare: in questa sezione, dovrai dire al bot AI quali ruoli eseguire il ping per ogni gioco del torneo AI. Se non selezioni il ruolo, il bot AI citerà @tutti che potresti non voler.`,
                `4. Impostazioni di gioco`,
              ],
            },
          ],
        },
        {
          title: `4. Impostazioni di gioco`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(12).png',
              steps: [
                `Attiva selezione automatica: se attivi questa opzione, il bot AI deciderà quale gioco sarà il più popolare per il tuo server, quindi non dovrai scegliere manualmente.`,
                `Se Activate Auto Pick è disattivato, devi semplicemente selezionare i giochi su cui vuoi avere tornei sul tuo server. Il robot AI eseguirà tornei solo all'interno del pool di giochi selezionato.`,
              ],
            },
          ],
        },
        {
          title: `5. Impostazioni programma`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(13).png',
              steps: [
                `Scegli automaticamente gli orari: se lo attivi, il robot AI deciderà quale ora attirerà il maggior numero di partecipanti e avvierà i tornei in quel periodo.`,
                `Se l'opzione Seleziona automaticamente ore è disattivata, devi semplicemente selezionare l'intervallo di tempo in cui vuoi che i bot AI lancino i tornei. L'IA bot lancerà tornei entro l'intervallo di tempo selezionato.`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'discord_commands',
      title: 'Elenco completo dei comandi Discord',
      navSectionItems: [
        {
          title: `1. Utilizzabile nella lobby del torneo`,
          innerContentList: [
            {
              steps: [
                `<strong>!Register</strong>: Ciò consentirà di iniziare il processo di registrazione. È utilizzabile solo dopo l'inizio della registrazione.`,
                `<strong>!unregister</strong> :This will remove your spot from the registration and also from your team.Questo rimuoverà il tuo posto dalla registrazione e anche dal tuo team.`,
                `<strong>!timer</strong> : Questo ti dirà la fase successiva del processo del torneo e quanto tempo è rimasto fino a quella fase.`,
                `<strong>!myteam</strong> : Questo ti dirà chi è nel tuo team e il loro stato di registrazione.`,
              ],
            },
          ],
        },
        {
          title: `2. Utilizzabile in DM con Tourney Bot`,
          innerContentList: [
            {
              steps: [
                `<strong>!createteam</strong> <b class='highlight'><team name> <ingame username></b>: Questo registrerà una nuova squadra nel roster. Sarai l'unica persona in quella squadra fino a quando non condividi il codice della squadra e fai in modo che altri si uniscano alla tua squadra.`,
                `<strong>!jointeam</strong> <b class='highlight'><team code> <ingame username></b>: Questo ti metterà nella squadra esistente che qualcun altro ha creato.`,
                `<strong>!joinsolo</strong> <b class='highlight'><ingame username></b> : Questo ti registrerà per un torneo da solista.`,
                `<strong>!checkin</strong> <b class='highlight'><code provided></b>: Se è richiesto il check-in e se è iniziato l'orario del check-in, ciò ti consentirà di effettuare il check-in e completare la registrazione.`,
              ],
            },
          ],
        },
        {
          title: '3. Utilizzabile nella lobby di gioco',
          innerContentList: [
            {
              steps: [
                `<strong>!risultato</strong> <b class='highlight'><team name></b>: Ecco come inviare il risultato della partita al bot. È necessario allegare uno screenshot della schermata della vittoria insieme al comando.`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'create_new_tournament',
      title: 'Creare un nuovo torneo',
      description:
        '<i>Step 1) ~ 2) sono esattamente gli stessi mostrati sopra nella sezione Configurare Tourney Bot per il tuo Discord Server. Se hai già eseguito questi passaggi, puoi andare al passaggio 3).</i>',
      navSectionItems: [
        {
          title: `1. Dal menu principale a sinistra, fai clic sul pulsante 'Crea torneo'`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (3) .png',
            },
          ],
        },
        {
          title:
            ' 2. Dalla pagina Modelli torneo, trova un gioco per cui desideri creare un torneo e fai clic su Personalizza. ',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (4) .png',
            },
          ],
        },
        {
          title:
            '3. In “Customize Tournament” page, scroll to the very bottom and select Advanced Settings.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (15) .png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(16).png',
              steps: [
                'Prompt ti chiederà di confermare questa azione. Basta selezionare Procedi.',
              ],
            },
          ],
        },
        {
          title: '4. Compila la sezione Informazioni di base',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (17) .png',
              steps: [
                'Nome del torneo: digita il nome del tuo torneo. Questo verrà visualizzato come titolo della categoria in Discord. Le lettere saranno visualizzate in maiuscolo. Gli emoji sono ammessi in questa sezione.',
                'Gioco: scegli il tuo gioco, quindi scegli il formato del gioco. (es. PUBG M -> Duo) Questo deciderà se il tuo torneo sarà un torneo a parentesi o un torneo di lobby.',
                `Programma: scegli l'ora di inizio della registrazione, l'ora di fine della registrazione e l'ora di inizio del torneo. Queste date verranno visualizzate nella parte inferiore dell'annuncio del torneo.<div class='inner-content'> <p>Ora inizio registrazione: questo è il momento in cui i giocatori potranno iniziare a registrarsi per il tuo torneo nel canale Discord. Prima di questo momento, i giocatori non saranno in grado di registrarsi e il comando \'! Register\' non funzionerà nel canale.</p> <p>Ora fine registrazione: dopo questo tempo, i giocatori non saranno più in grado di registrarsi. L'ora di fine della registrazione non può essere inferiore a 10 minuti prima dell'ora di inizio del torneo. Il processo di check-in può iniziare solo al termine della registrazione. Inoltre, puoi creare staffe o lobby solo al termine della registrazione.</p> <p>Ora di inizio del torneo: è l'ora di inizio del torneo.</p> </div>`,
                `Stream: se sei uno streamer e desideri annunciare il tuo canale di streaming insieme all'annuncio del torneo, fai clic su 'Abilita collegamento' e inserisci qui il tuo link di streaming.`,
                `Regione: seleziona qui il tuo paese. Questo deciderà quale lingua saranno i testi generici nell'annuncio. (es. USA -> I testi generici dell'annuncio saranno in inglese.)`,
              ],
            },
          ],
        },
        {
          title: '5. Compila la sezione Dettagli',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (18) .png',
              steps: [
                `Descrizione: puoi inserire informazioni generali sul tuo torneo qui. (es. data e ora, modalità di gioco, limite del giocatore, orario di check-in ecc.) Queste informazioni verranno visualizzate nell'annuncio nella parte superiore dell'annuncio appena sotto il titolo.`,
                `Regole: puoi mettere qualsiasi regola specifica che desideri aggiungere al tuo torneo. (es. divieto, limite di tempo, meglio di 3 ecc.) Queste informazioni verranno visualizzate nell'annuncio appena sotto la descrizione.`,
                `Premi: puoi inserire le informazioni sul tuo premio in questa sezione. Essere il più specifici possibile; i giocatori sono sensibili ai premi e all'importo in dollari. Queste informazioni verranno visualizzate nell'annuncio appena sotto le Regole.`,
              ],
            },
          ],
        },
        {
          title: '6. Compila la sezione Piattaforma',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (19) .png',
              steps: [
                `Scegli piattaforma: scegli Discord`,
                `Discord Server: scegli il server in cui vuoi annunciare il tuo torneo.`,
                `Ruoli da menzionare: questo è il ruolo che il torneo eseguirà il ping quando viene annunciato in Discord.`,
                `Mostra ai ruoli: questo ruolo sarà in grado di vedere l'annuncio del torneo e i canali senza essere sottoposto a ping. (Il ruolo consigliato è @everyone a meno che tu non voglia fare un torneo privato.)`,
                `Visibilità del canale: quando crei parentesi / lobby, il bot creerà canali privati ​​per i giocatori registrati. Il ruolo selezionato qui sarà in grado di vedere quei canali privati. Quindi seleziona un ruolo con cui tu (amministratore del torneo) sei taggato. Altrimenti, non sarai in grado di vedere i canali privati.`,
              ],
            },
          ],
        },
        {
          title: '7. Compila la sezione Impostazioni partita',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(20).png',
              steps: [
                `Formato del torneo: questo è già deciso dal gioco e dal formato di gioco selezionati nella sezione Informazioni di base.`,
                `Registrazione personale (solo per eventi di squadra): selezionare questa opzione se si desidera formare squadre in modo casuale e non consentire squadre premade.`,
                `Numero massimo di giocatori / squadre ammessi: seleziona la squadra massima che desideri consentire.`,
                `Numero di vincitori: selezionare il numero di vincitori desiderato. (1 ~ 3)`,
                `Check-in: fai clic su questo pulsante se desideri abilitare la procedura di check-in per il tuo torneo. I giocatori registrati devono effettuare il check-in per partecipare all'evento`,
                `Check In Time : This time will decide how long of check-in time you’re going to allow before the tournament begins. There is a default 10-minute window between check-in and tournament start time. This window is adjustable. (ex. If you select 20 min, check-in process will begin 30 minutes before the tournament and end 10 minutes before the tournament time.)`,
                `Waitlist : Check this on if you want to enable waitlist for your tournament. When off, you will be able to receive players up to the Max Players/Teams that you selected above.`,
                `Automatically Post Results : By checking this on, you’re allowing bots to take over the result verification for each round. (ex. Team1 submits results to the bot -> Bot asks Team2 if the result is true -> If Team2 confirms or does not respond, bot proceeds to advance Team1 with you having to interfere.) By checking this off, you will verify each match result and advance winners manually.`,
                `Consenti squadra incompleta (solo per eventi di squadra): spuntando questa opzione, i giocatori potranno registrarsi come squadra anche se la loro squadra non è completa. Ciò è utile quando si desidera consentire ai leader della squadra di iscrivere prima la propria squadra per salvare un posto nel torneo. Se questa opzione è disattivata, la registrazione sarebbe completa solo quando tutti i membri di ciascuna squadra avessero terminato la propria registrazione individuale.`,
              ],
            },
          ],
        },
        {
          title: '8. Fare clic su Crea per procedere',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(21).png',
              steps: [
                'Facendo clic<i>Creare</i>non annuncia immediatamente il torneo. Lo strumento del torneo ti chiede immediatamente se vuoi<i>Pubblicare</i> il torneo. <i>editoriale</i>annuncerà il torneo nel tuo server Discord. Puoi sempre<i>Pubblicare</i> più tardi facendo clic <i>Dopo.</i>',
                'Be sure to review all information before publishing your tournament. Once published, you will not be able to edit the announcement.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: `tournament_dashboard`,
      title: `Cruscotto del torneo`,
      navSectionItems: [
        {
          title: `1. Una volta creato il tuo torneo, sarai in grado di vedere il tuo torneo elencato nella Dashboard.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (24) .png`,
            },
          ],
        },
        {
          title: `2. Fai clic su un torneo per visualizzare i dettagli e i giocatori registrati, gestire staffe e lobby e inviare premi. (La funzione Premio è disponibile solo per i tornei partner di game.tv sul server BlueStacks Discord.)`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (25) .png`,
              steps: [
                `Modifica: puoi modificare tutte le informazioni che desideri utilizzando questo pulsante. Tieni presente che la modifica delle informazioni nello strumento non cambierà le informazioni che sono già state annunciate nel tuo server Discord.`,
                `Pubblica / Annulla pubblicazione: se hai creato il tuo torneo e non lo hai ancora pubblicato, puoi fare clic sul pulsante Pubblica per renderlo attivo. Se hai già pubblicato il tuo torneo, ma desideri restare indietro per ottenere una nuova registrazione, puoi farlo facendo clic su Annulla pubblicazione. (Unpublish non rimuoverà o eliminerà l'annuncio nel tuo server Discord.)`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `during_registration_period`,
      title: `Durante il periodo di registrazione`,
      navSectionItems: [
        {
          title: `1. Durante questo periodo, gli utenti Discord saranno in grado di registrarsi nel canale # torneo-lobby digitando il comando '! Register' se la registrazione è aperta in quel momento.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(26).jpg`,
            },
          ],
        },
        {
          title: `2. Non appena viene immesso il comando '! Register', gli utenti riceveranno un messaggio diretto da Tourney Bot, chiedendo ulteriori informazioni sull'ID di gioco e sul nome della squadra.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (27) .png`,
            },
          ],
        },
        {
          title: `3. Una volta che l'utente risponde al Bot Tourney usando i comandi corretti in DM, riceverà un messaggio di completamento della registrazione dal Bot. (Se non hanno ricevuto il messaggio di completamento, non sono registrati per il torneo e dovrebbero provare a registrarsi di nuovo dall'inizio.)`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(28).png`,
              steps: [
                `Non appena il processo di registrazione è completo, il partecipante riceverà un nuovo ruolo; il nome del ruolo è esattamente lo stesso del nome del tuo torneo.`,
              ],
            },
          ],
        },
        {
          title: `4. Mentre gli utenti Discord si stanno registrando per il torneo, sarai in grado di vedere quanti utenti si sono registrati per il tuo torneo nella nostra dashboard. Puoi anche controllare i loro nomi, rimuovere il giocatore o rimuovere la squadra da questo strumento.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (29) .png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (30) .png`,
            },
          ],
        },
        {
          title: `5. If Check-In is on, the check-in process will begin at the time that you have set. (ex. If you set 30 min as check-in time, check-in process will begin 30 minutes before the tournament.)`,
        },
        {
          title: `6. Sia gli utenti registrati che quelli in lista di attesa riceveranno una richiesta di check-in dal Tourney Bot tramite un messaggio diretto in Discord. Gli utenti devono seguire correttamente le istruzioni di Tourney Bot e immettere correttamente il comando di check-in per qualificarsi per l'evento.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(31).png`,
            },
          ],
        },
        {
          title: `7. Gli utenti riceveranno un messaggio di completamento del check-in da Bot Tourney se hanno inserito correttamente il comando di check-in.`,
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
      title: `Torneo di coordinamento - Concorso a parentesi`,
      navSectionItems: [
        {
          title: `1. Esistono 3 condizioni che ti consentono di creare un bracketing per il tuo torneo:`,
          innerContentList: [
            {
              steps: [
                `un. Il tuo torneo è pieno e non hai consentito la lista d'attesa.`,
                `b. La tua registrazione è terminata e non hai attivato la procedura di check-in.`,
                `c. La registrazione e il check-in sono entrambi terminati. (10 minuti prima del tempo del torneo)`,
              ],
            },
          ],
        },
        {
          title: `2. Quando una di queste 3 condizioni è soddisfatta, vedrai il pulsante Crea parentesi nella scheda Staffe. Cliccaci sopra per creare la tua parentesi.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (33) .png`,
            },
          ],
        },
        {
          title: `3. As soon as bracket is created in your tournament tool, the same bracket will be announced in the Discord channel, pinging all the registered tournament participant.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (34) .png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (35) .png`,
            },
          ],
        },
        {
          title: `4. Insieme all'annuncio della parentesi, il bot creerà anche canali privati ​​per tutte le partite dal vivo. Ogni canale privato invita solo i partecipanti alla partita. I partecipanti possono utilizzare questo canale privato per comunicare tra loro sulla propria partita (ad es. Condividere il codice della stanza, condividere l'ID del giocatore) e riportare il risultato`,
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
                `Una volta inviato il risultato correttamente, il bot risponderà con conferma.`,
              ],
            },
          ],
        },
        {
          title: `6. Una volta inviato il risultato, apparirà un punto rosso sulla partita in modo che tu (amministratore del torneo) possa vedere che il risultato è stato inviato.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (38) .png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(39).png`,
              steps: [
                `Se 'Pubblica automaticamente risultati' è attivo, il bot prenderà il primo risultato inviato come risultato reale. Se non viene inviato alcun nuovo risultato entro 5 minuti, il bot farà avanzare la squadra vincente nella prima presentazione del risultato.`,
                `Se 'Pubblica automaticamente risultati' è disattivato, dovrai guardare il file allegato, verificare il risultato, quindi avanzare manualmente il vincitore. (es. fai clic sul vincitore, quindi seleziona Aggiorna risultato.)`,
              ],
            },
          ],
        },
        {
          title: `7. Quando il bracketing raggiunge la fine e viene selezionato il vincitore finale, il bot annuncerà automaticamente il vincitore nel canale del torneo.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(40).png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (41) .png`,
            },
          ],
        },
      ],
    },
    {
      id: `coordinating_tournament_lobbied`,
      title: `Torneo di coordinamento - Concorso a premi`,
      navSectionItems: [
        {
          title: `1. Esistono 3 condizioni che ti consentono di creare lobby per il tuo torneo:`,
          innerContentList: [
            {
              steps: [
                `un. Il tuo torneo è pieno e non hai consentito la lista d'attesa.`,
                `b. La tua registrazione è terminata e non hai attivato la procedura di check-in.`,
                `c. La registrazione e il check-in sono entrambi terminati. (10 minuti prima del tempo del torneo)`,
              ],
            },
          ],
        },
        {
          title: `2. Quando una di queste 3 condizioni è soddisfatta, vedrai il pulsante Crea lobby nella scheda Lobby. Cliccaci sopra per creare le tue lobby.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (42) .png`,
            },
          ],
        },
        {
          title: `3. Per ogni lobby, fai clic sul pulsante del menu a 3 righe, quindi fai clic su Crea canale. In questo modo creerai un canale Discord privato per ogni lobby rigorosamente per i giocatori in ogni lobby.`,
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
          title: `4. Se tu (amministratore del torneo) desideri inviare un messaggio a ciascuna lobby (ad es. Codice di corrispondenza e pw), puoi utilizzare la funzione Invia messaggio da ogni lobby. Il mittente sarà Tourney (bot), quindi probabilmente catturerà l'attenzione dei giocatori. Oppure puoi inviare un messaggio direttamente sul canale digitandolo. (Invia sarai tu in questo caso.)`,
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
          title: `5. Se non stai creando ogni partita per i giocatori, puoi semplicemente assegnare un giocatore in ciascun canale privato per creare una sala giochi e condividere codice / pw.`,
        },
        {
          title: `6. I giocatori possono riportare i risultati nel canale privato, usando il '! Risultato<team name>'Comando. Lo screenshot deve essere allegato affinché il comando! Result sia registrato correttamente.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (37) .png`,
              steps: [
                `Una volta inviato il risultato correttamente, il bot risponderà con conferma.`,
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
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (48) .png`,
            },
          ],
        },
        {
          title: `8. Per selezionare i vincitori di ciascuna lobby,`,
          innerContentList: [
            {
              imageCaption: `Fare clic sul pulsante del menu a 3 righe, quindi fare clic sul pulsante Registra punteggio.`,
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (49) .png`,
              steps: [
                `Registra i punteggi dei giocatori in base ai risultati inviati. (I giocatori vincenti dovrebbero ottenere punteggi più alti.)`,
                `Per una partita a più round, fai clic sul pulsante Crea round in basso. Quindi registra più punteggi in base ai risultati.`,
              ],
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(50).png`,
              steps: [`Al termine della registrazione, fai clic su Aggiorna.`],
            },
          ],
        },
      ],
    },
    {
      id: `transferring_players`,
      title: `Trasferimento di giocatori in nuove lobby`,
      navSectionItems: [
        {
          title: `1. Se devi avere un torneo di lobby in cui i giocatori avanzano / trasferiscono in nuove lobby, devi selezionare 'Eliminazione' in Formato torneo.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (51) .png`,
              steps: [
                `Lobby conta: quante lobby iniziali vuoi avere per i tuoi giri preliminari`,
                `Conteggi squadra: quante squadre ci saranno per ogni lobby`,
              ],
            },
            {
              imageCaption: `<i>* Se crei un torneo Lobby singola o Lobby multipla, non avrai la possibilità di creare nuove lobby e, pertanto, non sarai in grado di spostare / far avanzare i giocatori verso nuove lobby. Come puoi vedere nell'esempio seguente (Torneo a lobby multiple), manca il pulsante “+” per creare una nuova lobby.</i>`,
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (52) .png`,
            },
          ],
        },
        {
          title: `2. Se l'opzione 'Eliminazione' è selezionata come formato del torneo, vedrai un'opzione per creare una nuova lobby oltre ai conteggi iniziali della lobby che hai selezionato.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (53) .png`,
            },
          ],
        },
        {
          title: `3. Mentre le tue lobby iniziali sono ancora attive, fai clic sul pulsante “+” per creare una nuova lobby. Questa nuova lobby è dove farai avanzare / trasferire i tuoi giocatori per il round futuro.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(54).png`,
              steps: [
                `La nuova lobby dovrebbe essere vuota al momento della creazione.`,
                `Se devi creare più nuove lobby, fai di nuovo clic sul pulsante '+'.`,
              ],
            },
          ],
        },
        {
          title: `4. Per far avanzare / trasferire i giocatori nella nuova lobby, devi FARE prima le lobby esistenti. (Per favore riferisci a<a href='how-to-use-tourney?tab=tournament-lobbied-competition'>Termine di un torneo - Competizione a lobby</a> sezione su come terminare una lobby) Una volta terminate le lobby, fare clic sul pulsante 'Modifica lobby' nella nuova lobby.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (55) .png`,
              steps: [
                `<i>* ATTENZIONE, NON terminare l'intero torneo! Quando finisci tutte le lobby, lo strumento ti darà una finestra pop-up, chiedendo se vuoi terminare il torneo. Se finisci il tuo torneo, NON sarai in grado di trasferire giocatori o aggiungere nuove lobby.</i>`,
              ],
            },
          ],
        },
        {
          title: `5. Seleziona una lobby dalla quale vuoi spostare i giocatori.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (56) .png`,
              steps: [
                `È possibile fare clic su Aggiungi lobby per eseguire trasferimenti di massa da più lobby.`,
                `In questo esempio, solo la Lobby 1 e la Lobby 2 sono terminate. La lobby 3 è ancora attiva. Ecco perché vedi solo le lobby 1 e 2 come opzioni.`,
              ],
            },
          ],
        },
        {
          title: `6. Seleziona le posizioni dei giocatori che vuoi spostare.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(57).png`,
              steps: [
                `È possibile selezionare più posizioni.`,
                `Position refers to the placement of player after lobby has ended. (Position 1 = 1st place player/team in that lobby)`,
                `Ad esempio, se vuoi far avanzare i primi 2 giocatori dalla Lobby 1, dovresti selezionare le posizioni 1 e 2.`,
              ],
            },
          ],
        },
        {
          title: `7. Dopo aver selezionato i giocatori che si desidera trasferire, fare clic sul pulsante Salva. Trasferimento completato!`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (58) .png`,
            },
          ],
        },
      ],
    },
    {
      id: 'ending_a_tournament_bracketed_competition',
      title: 'Termine di un torneo - Competizione con staffa',
      description: `Il tuo torneo terminerà automaticamente non appena verrà selezionato il vincitore finale nella scheda Staffe.`,
    },
    {
      id: `ending_a_tournament_lobbied_competition`,
      title: `Termine di un torneo - Competizione a lobby`,
      navSectionItems: [
        {
          title: `1. Una volta che tutte le lobby sono state aggiornate con punteggi e vincitori accurati, fai clic sul pulsante del menu a 3 righe, quindi fai clic sul pulsante Termina lobby per ogni lobby. Fallo per tutte le lobby. (È buona norma terminare la lobby non appena è stata aggiornata. Non sarai in grado di spostare i giocatori se le lobby non sono terminate.)`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(59).png`,
            },
          ],
        },
        {
          title: `2. Once all lobbies are ended, game.tv tool will tell you that your tournament will end and that results will be published. `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (60) .png`,
              steps: [
                `If you wish to end tournament and publish results, click <i>Continue.</i>`,
                `Se non desideri interrompere il torneo o pubblicare i risultati, fai clic su <i>Vicino.</i> (Il tuo torneo non finirà e i risultati non saranno pubblicati.)`,
                `Ci sarà un'opzione per terminare il torneo e pubblicare i risultati se lo desideri<i>Vicino.</i>`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `sending_prizes_to_winners`,
      title: `Sending Prizes to Winners`,
      description: `<p><i>** Questa funzione è disponibile solo per i partner game.tv che stanno producendo tornei sui server BlueStacks Discord.</i></p>`,
      navSectionItems: [
        {
          title: `1. Once winners are selected and the tournament is ended correctly, you will be able to see the winners listed in the Prizes tab. `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(61).png`,
            },
          ],
        },
        {
          title: `2. Simply fill out the information for each winner. `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(62).png`,
              steps: [
                `Be sure to double check the prize preference with your winners (ie. geos, type of prize etc.)`,
                `Some options may not be available for certain geos. To view all available prize options, please visit <a href='https://www.seagm.com/'>https://www.seagm.com/</a>`,
                `È possibile impostare più premi per ciascun vincitore. (ad esempio per il premio di $ 20 di Google Play (US), dovrai impostare due dei premi di $ 10 di Google Play (US).)`,
                `(Per NA) In generale, stiamo bene spendendo fino a $ 4 in più per trovare un'opzione / importo del premio adeguato. Per Steam,<div class='inner-content'> - Per $ 5 / $ 10, utilizzare Steam (Hong Kong) 40 HKD / 80 HKD rispettivamente.<br> - Per $ 20 / $ 25, si prega di utilizzare Steam (Malesia) RM 80 / RM 100 rispettivamente. </div>`,
              ],
            },
          ],
        },
        {
          title: `3. Dopo che tutte le informazioni sono state compilate accuratamente, fare clic sul pulsante Invia premio.`,
          innerContentList: [
            {
              steps: [
                `Questo invierà una richiesta di distribuzione del premio all'amministratore di game.tv. Esamineranno le informazioni sul premio, quindi approveranno o respingeranno la richiesta.`,
                `Una volta approvata la richiesta, i vincitori riceveranno un DM dal Tourney Bot che contiene codici regalo riscattabili. Vedrai anche che la consegna è stata completata nella scheda Premi.`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `cloning_existing_tournaments`,
      title: `Clonazione di tornei esistenti`,
      description: `<p> Clonando i tornei esistenti, l'host dei tornei può facilmente duplicare ripetutamente i tornei dello stesso formato senza dover impostare i dettagli ogni volta. <br /><i>** Non puoi clonare un torneo e cambiarne la modalità: lobby contro staffa.</i> </p>`,
      navSectionItems: [
        {
          title: `1. Trova un torneo che desideri duplicare dalla tua dashboard. All'estremità destra del torneo, fai clic sul pulsante del menu a 3 punti.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(63).png`,
              steps: [
                `Se hai già terminato il torneo, il pulsante Modifica e Pausa non sarà disponibile.`,
                `If you have already cleaned up the tournament, Clean up button will not be available.`,
              ],
            },
          ],
        },
        {
          title: `2. Fare clic su <i>Clone</i>. Verrà visualizzata una nuova schermata in cui è necessario inserire alcune informazioni minime.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0 (64) .png`,
              steps: [
                `Nome del torneo: questo non verrà trasferito dal torneo esistente. Dovrai inserire un nuovo nome per il torneo`,
                `Discord Server : This will carry over from the existing tournament. Choose a different server if you want to duplicate the existing tournament to another server.`,
                `Gioco: le modalità di gioco verranno trasferite dal torneo esistente. Personalizza la configurazione se desideri cambiare.`,
                `Schedule : Schedule will not carry over from the existing tournament. You will have to input a new schedule.`,
                `Premi: le informazioni sui premi verranno trasferite dal torneo esistente. Modifica se desideri cambiare.`,
                `Stream: questo verrà trasferito dal torneo esistente. Modifica se desideri cambiare.`,
                `Impostazioni avanzate: se si desidera modificare altri dettagli di configurazione, facendo clic su questo si accederà alle opzioni di configurazione originali.`,
              ],
            },
          ],
        },
      ],
    },
  ],
};
