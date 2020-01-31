import { IHowToUseTourneyLocale } from '@app/abstractions';
// tslint:disable: quotemark
export const HowToUseTourneyLocaleFrench: IHowToUseTourneyLocale = {
  metadata: {
    title: 'Game.tv - Comment utiliser Tourney',
    description: 'Apprenez à utiliser Tourney pour votre communauté',
  },
  navigationSections: [
    {
      id: 'create_new_account',
      title: 'Créer un Nouveau Compte',
      isActive: true,
      navSectionItems: [
        {
          title:
            "1. (Cette étape s'adresse uniquement aux partenaires de game.tv. Si vous créez des tournois sur votre propre serveur, veuillez s'il vous plaît passer à l'étape 2). Partagez votre pseudo Discord et votre ID d'utilisateur aux administrateurs game.tv",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0.jpg',
              imageCaption:
                'Le pseudo Discord doit inclure un tag numérique à 4 chiffres',
              steps: [
                "ID Discord: Voici comment vous pouvez trouver votre ID d'utilisateur <a href='https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-'>https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID</a>",
                "Attendez que l'administrateur de game.tv vous confirme que le compte a été configuré pour la création de tournoi. ",
              ],
            },
          ],
        },
        {
          title:
            "2. Consultez <a href='https://esports.game.tv/nimda'>https://esports.game.tv/nimda</a>",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(1).png',
              imageCaption: 'Cliquez sur "Se connecter avec Discord"',
            },
            {
              imageCaption: 'Cliquez sur "Autoriser"',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(2).png',
            },
          ],
        },
      ],
    },
    {
      id: 'setting_up_tourney',
      title: 'Configurer le Bot Tourney pour votre serveur Discord',
      navSectionItems: [
        {
          title:
            '1. Dans le menu principal à gauche, cliquez sur le bouton "Créer un Tournoi"',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. Sur la page Modèles de Tournois, recherchez le jeu sur lequel vous souhaitez créer un tournoi et cliquez sur Personnaliser.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title:
            '3. Dans la page Personnaliser le tournoin cliquez sur Ajouter un autre lien de serveur.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(5).png',
            },
          ],
        },
        {
          title:
            "4. Une fenêtre du navigateur apparaîtra et montrera l'UI de Discord vous demandant de sélectionner le serveur sur lequel vous souhaitez ajouter le Bot. ",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(6).png',
              steps: [
                'Seuls les serveurs sur lesquels vous êtes administrateur apparaissent dans le menu déroulant. ',
                'Sélectionnez le serveur sur lequel vous souhaitez installer le bot puis cliquez sur Autoriser. ',
              ],
            },
          ],
        },
        {
          title:
            '5. Une fois autorisé, vous obtenez un écran de confirmation dans cette même fenêtre du navigateur. Le Bot Tourney est maintenant installé sur votre serveur Discord. ',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(7).png',
            },
          ],
        },
        {
          title:
            '6. Vérifiez que le Bot a été correctement installé sur votre serveur Discord. ',
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
      title: 'Mode IA de Tourney',
      description:
        "<p>Le mode \"IA Tourney\" permet à l'IA de Tourney de créer, lancer et gérer des tournois par lui-même!</p><p><i> **Notez que ce mode ne sera disponible que pour les administrateurs de serveur. Les autres rôles ayant les permissions d'organisation de tournois n'auront pas accès à ce mode.</i></p><p><i>** Seuls les jeux utilisant le mode brackets sont actuellement disponibles avec le mode IA (par exemple, PUBG M, Free Fire en sont exclus). </i></p>",
      navSectionItems: [
        {
          title:
            '1. Sur votre tableau de bord, il y a le bouton IA Tourney. Cliquez dessus',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(9).png',
            },
          ],
        },
        {
          title:
            "2. Sur la page des paramètres du Bot, veuille d'abord sélectionner votre serveur dans le menu déroulant. Cliquez ensuite sur Activer l'IA. ",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(10).png',
              steps: [
                "Vous pouvez ajouter le Bot Tourney à votre serveur en sélectionnant Ajouter un serveur s'il n'a pas encore été installé. ",
                "En cliquant sur le bouton Activer l'IA, un nouveau menu s'ouvrira pour vous. ",
              ],
            },
          ],
        },
        {
          title: '3. Paramètres de modérateur ',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(11).png',
              steps: [
                "Mode modérateur: Vos administrateurs seront listés ici. Chaque modérateur peut avoir différents paramètres. Sélectionnez l'administrateur que vous souhaitez utiliser. ",
                "Rôles à mentionner: Dans cette section, vous devrez indiquer à l'IA du bot quels sont les rôles à ping pour chaque tournoi de l'IA. Si vous ne sélectionnez pas de rôle, l'IA du bot mentionnera @everyone alors que vous le souhaitez peut être pas. ",
                'Visibilité des Salons des Matchs: Sélectionnez un rôle pouvant voir les salons privés du tournoi. ',
              ],
            },
          ],
        },
        {
          title: '4. Paramètres de jeu',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(12).png',
              steps: [
                "Activer la sélection automatique: si vous activez cette option, l'IA du bot décidera du jeu qui sera le plus populaire pour votre serveur, de sorte que vous n’aurez pas à le choisir manuellement.",
                'Si "Activer la sélection automatique" est désactivé, vous devrez simplement sélectionner les jeux pour lesquels vous souhaitez organiser des tournois sur votre serveur. Le bot AI organisera des tournois dans le cercle de jeux sélectionné uniquement.',
              ],
            },
          ],
        },
        {
          title: '5. Paramètres de planification',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(13).png',
              steps: [
                "Choisir automatiquement les heures: Si vous activez cette option, l'IA du bot décidera quelle heure attirera le plus de participants et lancera des tournois à cette heure-là.",
                "Si l'option \"Choisir automatiquement les heures\" est désactivée, il vous suffit de sélectionner la plage horaire pendant laquelle vous souhaitez que l'IA du bot lance les tournois. L'IA du bot lancera des tournois dans la plage horaire sélectionnée.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'discord_commands',
      title: 'Liste complète des commandes Discord',
      navSectionItems: [
        {
          title: '1. Utilisable dans le lobby du tournoi',
          innerContentList: [
            {
              steps: [
                "<strong>!register</strong> : Cela permettra au processus d'inscription de commencer. Il n’est utilisable qu’au début des inscriptions.",
                '<strong>!unregister</strong> : Cela supprimera votre inscription et ainsi que de votre place dans une équipe.',
                '<strong>!timer</strong> : Cela vous indiquera la prochaine étape du processus du tournoi et combien de temps il reste avant cette étape.',
                '<strong>!myteam</strong> : Cela vous indiquera les membres de votre équipe et leur statut d’inscription.',
              ],
            },
          ],
        },
        {
          title: '2. Utilisable en MP avec Tourney Bot',
          innerContentList: [
            {
              steps: [
                "<strong>!createteam</strong> <b class='highlight'><team name> <ingame username></b> : Cela enregistrera une nouvelle équipe dans la liste. Vous serez la seule personne de cette équipe jusqu'à ce que vous partagiez le code de l'équipe et que d'autres personnes rejoignent votre équipe.",
                "<strong>!jointeam</strong> <b class='highlight'><team code> <ingame username></b> : Cela vous mettra dans l'équipe existante que quelqu'un d'autre a créée.",
                "<strong>!joinsolo</strong> <b class='highlight'><ingame username></b> : Cela vous inscrira à un tournoi solo.",
                "<strong>!checkin</strong> <b class='highlight'><code provided></b> : Si un check-in est exigé et si l'heure de check-in a commencé, cela vous permettra de vous enregistrer et de terminer votre inscription.",
              ],
            },
          ],
        },
        {
          title: '3. Utilisable dans le lobby du jeu',
          innerContentList: [
            {
              steps: [
                "<strong>!result</strong> <b class='highlight'><team name></b> : Voici comment soumettre le résultat de votre match au bot. Il est nécessaire de joindre une capture d’écran de votre victoire avec la commande.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'create_new_tournament',
      title: 'Créer un Nouveau Tournoi',
      description:
        '<i>Les étapes 1) à 2) sont exactement les mêmes que celles indiquées ci-dessus dans la section Configuration de Tourney Bot pour votre serveur Discord. Si vous avez déjà effectué ces étapes, vous pouvez passer à l’étape 3).</i>',
      navSectionItems: [
        {
          title:
            '1. Dans le menu principal à gauche, cliquez sur le bouton "Créer un Tournoi"',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. Sur la page Modèles de Tournois, recherchez le jeu sur lequel vous souhaitez créer un tournoi et cliquez sur Personnaliser.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title:
            '3. Dans la page "Personnaliser le tournoi", allez tout en bas et sélectionnez Réglages Avancés. ',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(15).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(16).png',
              steps: [
                'Une fenêtre vous demandera de confirmer cette action. Il suffit de cliquer sur Continuer. ',
              ],
            },
          ],
        },
        {
          title: '4. Remplissez la section Informations Basiques',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(17).png',
              steps: [
                'Nom du Tournoi: Tapez le nom de votre tournoi. Cela apparaîtra comme titre de catégorie sur votre Discord. Les lettres seront affichées en majuscules. Les Emojis sont autorisés dans cette section. ',
                'Jeu: Choisissez votre jeu, puis choisissez votre format de jeu. (ex: PUBG M -> Duo) Ceci déterminera si votre tournoi sera un tournoi en bracket ou un tournoi en lobby. ',
                "Programme: Choisissez l'heure du début des inscriptions, l'heure de fin des inscriptions et l'heure du début du tournoi. Ces dates seront affichées en bas de l'annonce de votre tournoi. <div class='inner-content'><p> Heure du début des inscriptions: C'est à ce moment que les joueurs pourront commencer à s'inscrire à votre tournoi dans le salon Discord. Avant cette heure, les joueurs ne pourront pas s'inscrire et la commande \"!register\" ne fonctionnera pas. </p><p>Heure de la Fin des inscriptions: Après cette heure, les joueurs ne pourront plus s'inscrire. L'heure de fin des inscriptions ne peut être inférieure à 10 minutes avant l'Heure du Début du Tournoi. Le processus de check-in ne peut commencer que lorsque les inscriptions sont terminées. </p><p>Heure du Début du Tournoi: Il s'agit de l'heure à laquelle votre tournoi commence.</p></div>",
                'Stream: Si vous êtes un streamer et que vous souhaitez afficher votre chaîne lors de l\'annonce du tournoi, cliquez sur "Activer le lien" et placez de lien de votre chaîne ici. ',
                "Région: Sélectionnez votre pays ici. Cela impactera la langue des textes génériques qui seront dans l'annonce. (ex. USA -> Les textes génériques de l'annonce seront en Anglais.)",
              ],
            },
          ],
        },
        {
          title: '5. Remplissez la section Détails',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(18).png',
              steps: [
                "Description: Ici, vous pouvez mettre des informations générales concernant votre tournoi. (ex: date et heure, mode de jeu, limite de joueurs, heure du check-in etc.). Ces informations seront affichées en haut de l'annonce, juste après le titre du tournoi. ",
                "Règles: Vous pouvez ajouter n'importe quelle règle que vous souhaitez pour votre tournoi (ex: interdiction, limite de temps, best of 3 etc). Ces informations seront affichées dans l'annonce, juste en dessous de la Description. ",
                "Prix: Vous pouvez mettre les informations relatives aux prix dans cette section. Soyez aussi précis que possible, les joueurs sont sensibles aux prix et au montant en Euros. Ces informations seront affichées dans l'annonce juste en dessous des Règles. ",
              ],
            },
          ],
        },
        {
          title: '6. Remplissez la section Plate-forme',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(19).png',
              steps: [
                'Choisissez la Plate-forme: Choisissez Discord',
                'Serveur Discord: Choisissez le serveur sur lequel vous souhaitez annoncer votre tournoi. ',
                "Rôles à mentionner : Il s'agit du rôle que le tournoi mentionnera lorsqu'il sera annoncé sur Discord. ",
                "Montrer aux Rôles: Les personnes ayant ce rôle pourront voir l'annonce du tournoi et les salons sans pour autant se faire mentionner. (Le rôle recommandé est @everyone sauf si vous souhaitez créer un tournoi privé.)",
                'Visilité des Salons: Lorsque vous créez un des brackets/lobby, le bot créé des salons privés pour les joueurs inscrits. Le rôle que vous sélectionnez ici pourra voir ces salons privés. Sélectionnez donc un rôle que vous possédez (organisateur de tournoi par exemple). Sinon, vous ne pourrez pas voir ces salons privés. ',
              ],
            },
          ],
        },
        {
          title: '7. Remplissez la section Paramètres des Matchs',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(20).png',
              steps: [
                "Format du Tournoi: Cela dépend tout d'abord du jeu et du format du jeu que vous avez sélectionnés dans la section des Informations Basiques. ",
                'Inscriptions Solo (uniquement pour les événements par équipe): Cochez cette case si vous souhaitez former des équipes de manière aléatoire et ne pas autoriser les équipes prédéfinies. ',
                'Nombre maximal de Joueurs/Équipes autorisés: Sélectionnez le nombre max que vous souhaitez autoriser. ',
                'Nombre de Gagnants: Sélectionnez le nombre de gagnants que vous souhaitez (de 1 à 3).',
                'Check In: Cliquez dessus si vous souhaitez activer le processus de check-in pour votre tournoi. Les joueurs inscrits doivent effectuer le check-in pour pouvoir participer au tournoi',
                "Heure du Check-in: Cette heure déterminera la durée du check-in que vous allez autorisé avant le début du tournoi. Il existe fenêtre par défaut de 10 minutes entre le check-in et le début du tournoi. Cette fenêtre de durée est réglable (par exemple, si vous sélectionnez 20 minutes, le processus de check-in commencera 30 minutes avant le début du tournoi et se terminera 10 minutes avant l'heure du début du tournoi.)",
                "Liste d'attente: Cochez cette case si vous souhaitez activer la liste d'attente pour votre tournoi. Lorsque cette option est désactivée, les inscriptions sont limitées au nombre maximum de joueurs/équipes que vous avez sélectionné ci-dessus. ",
                "Publier Automatiquement les résultats: En cochant cette case, vous autorisez le bot à prendre en charge la vérification des résultats pour chaque tour (ex. l'équipe 1 soumet les résultats au bot -> le Bot demande à l'équipe 2 si le résultat en correct -> Si l'équipe 2 confirme ou ne répond pas, le bot fait avancer l'équipe 1 à l'étape suivante). En ne cochant pas cette case, vous devrez vérifier les résultats de chaque match et faire avancer les gagnants vers l'étape suivante manuellement. ",
                "Autoriser les Équipes Incomplètes (uniquement pour les tournois par équipes): En cochant cette case, les joueurs pourront s'inscrire en tant qu'équipe même si leur équipe n'est pas complète. Cela est utile lorsque vous souhaitez permettre aux chefs d'équipe de simplement s'inscrire afin de réserver une place à son équipe. Si cette option est désactivée, l'inscription ne sera complète que lorsque tous les membres de chaque équipe auront terminé leur inscription individuelle. ",
              ],
            },
          ],
        },
        {
          title: '8. Cliquez sur Créer pour continuer',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(21).png',
              steps: [
                "Cliquer sur <i>Créer</i> n'annonce pas le tournoi immédiatement. L'outil  de tournoi vous demande immédiatement si vous souhaitez le <i>Publier</i>. En le <i>Publiant</i>, le tournoi sera annoncé sur votre serveur Discord. Vous pouvez toujours le <i>Publier</i> plus tard en cliquant sur <i>Plus tard.</i>",
                "Veuillez vérifier toutes les informations avant de publier votre tournoi. Une fois publié, vous ne pourrez plus éditer l'annonce. ",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'tournament_dashboard',
      title: 'Tableau de bord du Tournoi',
      navSectionItems: [
        {
          title:
            '1. Une fois votre tournoi créé, vous pourrez voir votre tournoi dans le Tableau de bord.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(24).png',
            },
          ],
        },
        {
          title:
            '2. Cliquez sur un tournoi pour afficher les détails et les joueurs inscrits, pour gérer les brackets et les lobbies, et pour envoyer des prix. (La fonctionnalité de prix est uniquement disponible pour les tournois partenaires de game.tv sur le serveur BlueStacks Discord.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(25).png',
              steps: [
                "Modifier: vous pouvez modifier les informations souhaitées à l’aide de ce bouton. N'oubliez pas que la modification des informations de l'outil ne modifiera pas les informations déjà annoncées sur votre serveur Discord.",
                "Publier / Annuler la publication: Si vous avez uniquement créé votre tournoi et ne l'avez pas encore publié, vous pouvez cliquer sur le bouton Publier pour le rendre disponible. Si vous avez déjà publié votre tournoi, mais que vous souhaitez vous empêcher d'obtenir une nouvelle inscription, vous pouvez le faire en cliquant sur Annuler la publication. (L'annulation de la publication ne supprime pas l'annonce sur votre serveur Discord.)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'during_registration_period',
      title: "Pendant la période d'inscription",
      navSectionItems: [
        {
          title:
            '1. Pendant cette période, les utilisateurs de Discord pourront s’inscrire dans le canal #tournament-lobby en tapant la commande «!register» si l’inscription est ouverte à ce moment-là.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(26).jpg',
            },
          ],
        },
        {
          title:
            '2. Dès que la commande «!register» est entrée, les utilisateurs recevront un message direct de Tourney Bot leur demandant plus d’informations sur leur identifiant de jeu et leur nom d’équipe.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(27).png',
            },
          ],
        },
        {
          title:
            "3. Une fois que l'utilisateur a répondu au Bot Tourney en utilisant les commandes appropriées en MP, il recevra un message indiquant que son inscription est terminée. (S'ils ne reçoivent pas ce message, cela signifie qu'ils ne sont pas inscrits et ils doivent essayer de s'inscrire à nouveau depuis le début.)",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(28).png',
              steps: [
                "Dès que le processus d'inscription est terminé, le participant se voit attribuer un nouveau rôle. Le nom du rôle correspond au nom du tournoi. ",
              ],
            },
          ],
        },
        {
          title:
            "4. Vous pourrez voir combien d'utilisateurs se sont inscrits à votre tournoi dans le tableau de bord. Vous pouvez également vérifier leurs noms, supprimer des joueurs ou supprimer une équipe via cet outil. ",
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
            "5. Si le Check-in est activé, le processus de check-in commencera à l'heure que vous avez définie (ex: Si vous définissez une fenêtre de check-in de 30 minutes, le processus commencera 30 minutes avant le début du tournoi). ",
        },
        {
          title:
            "6. Les utilisateurs enregistrés et les utilisateurs sur liste d'attente recevront une demande de check-in de la part du Bot Tourney par message direct dans Discord. Les utilisateurs doivent suivre les instructions du Bot Tourney et entrer la commande de check-in pour pouvoir participer au tournoi. ",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(31).png',
            },
          ],
        },
        {
          title:
            '7. Les utilisateurs recevront un message confirmant leur check-in de la part du Bot Tourney si ils ont correctement saisi la commande de check-in. ',
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
      title: 'Organiser le Tournoi - Compétition avec Bracket',
      navSectionItems: [
        {
          title:
            '1. Il y a 3 conditions qui vous permettent de créer un bracket pour votre tournoi:',
          innerContentList: [
            {
              steps: [
                'a. Votre tournoi est complet et vous n’avez pas autorisé la liste d’attente.',
                "b. Votre inscription est terminée et vous n'avez pas activé le checkin.",
                "c. Votre inscription et votre checkin ont tous deux pris fin. (10 minutes avant l'heure du début du tournoi)",
              ],
            },
          ],
        },
        {
          title:
            '2. Une fois que l’une de ces 3 conditions sont remplies, vous verrez le bouton "Créer un Bracket" sous l’onglet Brackets. Cliquez dessus pour créer votre bracket.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(33).png',
            },
          ],
        },
        {
          title:
            '3. Dès que le bracket est créé dans votre outil de tournoi, le même bracket sera annoncé dans le salon Discord, en envoyant un ping à tous les participants inscrits au tournoi.',
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
            "4. Parallèlement à l'annonce du bracket, le bot créera également des salons privés pour tous les matches en direct. Chaque salon privé invite uniquement les participants du match. Les participants peuvent utiliser ces salons privés pour communiquer entre eux à propos de leur match (partage de code room, ID de joueur, par exemple) et pour rapporter les résultats.",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(36).png',
            },
          ],
        },
        {
          title:
            "5. Les joueurs doivent rapporter les résultats sur le channel privé, à l'aide de la commande «!result <team name>». Une capture d’écran doit être jointe pour que la commande !result soit correctement enregistrée.",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                'Une fois le résultat correctement envoyé, le bot répondra avec une confirmation.',
              ],
            },
          ],
        },
        {
          title:
            '6. Une fois le résultat soumis, un point rouge apparaît sur le match pour que vous (administrateur du tournoi) puissiez voir que le résultat a été soumis.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(38).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(39).png',
              steps: [
                "Si «Publier automatiquement les résultats» est activé, le bot prendra le premier résultat soumis comme résultat réel. Si aucun nouveau résultat n'est soumis dans les 5 minutes, le bot fera avancer l'équipe gagnante lors du premier envoi de résultat.",
                'Si “Publier automatiquement les résultats” est désactivé, vous devrez alors consulter le fichier joint, vérifier le résultat, puis avancer le gagnant manuellement. (c-à-d. cliquez sur le gagnant, puis sélectionnez Mettre à jour le résultat.)',
              ],
            },
          ],
        },
        {
          title:
            '7. Une fois que le bracket atteint la fin et que le gagnant final est sélectionné, le bot annoncera automatiquement le gagnant dans le channel du tournoi.',
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
      title: 'Organiser le Tournoi - Compétition avec Lobby',
      navSectionItems: [
        {
          title:
            '1. Il y a 3 conditions qui vous permettent de créer des lobby pour votre tournoi:',
          innerContentList: [
            {
              steps: [
                'a. Votre tournoi est complet et vous n’avez pas autorisé la liste d’attente.',
                "b. Votre inscription est terminée et vous n'avez pas activé le checkin.",
                "c. Votre inscription et votre checkin ont tous deux pris fin. (10 minutes avant l'heure du tournoi)",
              ],
            },
          ],
        },
        {
          title:
            '2. Une fois l’une de ces 3 conditions remplie, vous verrez le bouton "Créer un lobby" sous l’onglet Lobby. Cliquez dessus pour créer vos lobbies.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(42).png',
            },
          ],
        },
        {
          title:
            '3. Pour chaque lobby, cliquez sur le bouton du menu représentant 3 lignes, puis cliquez sur Créer un canal. Cela créera un salon Discord privé pour chaque lobby strictement réservé aux joueurs de chaque lobby.',
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
            "4. Si vous (administrateur du tournoi) souhaitez envoyer un message à chaque lobby (c'est-à-dire, envoyer le code et le mot de passe), vous pouvez utiliser la fonction Envoyer un message de chaque lobby. L’expéditeur sera Tourney (bot), ce qui risque de retenir l’attention des joueurs. Ou vous pouvez envoyer un message directement sur le salon en le tapant. (l'expéditeur se sera vous dans ce cas.)",
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
            '5. Si vous ne créez pas chaque match pour les joueurs, vous pouvez simplement affecter cette tâche un joueur dans chaque canal privé pour créer une salle de jeu et partager le code / mot de passe.',
        },
        {
          title:
            '6. Les joueurs peuvent rapporter les résultats dans le salon privé, en utilisant la commande "!result <team name>". Une capture d’écran doit être jointe pour que la commande !result soit correctement enregistrée.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                'Une fois le résultat correctement envoyé, le bot répondra avec une confirmation.',
              ],
            },
          ],
        },
        {
          title:
            '7. Une fois le résultat soumis, un point rouge apparaît sur le match pour que vous (administrateur du tournoi) puissiez voir que le résultat a été soumis. Cliquez sur "Afficher les résultats" pour afficher les captures d\'écran soumises.',
          innerContentList: [
            {
              imageCaption:
                "Vous n'avez pas besoin d'attendre la soumission du résultat si vous connaissez déjà le résultat. (c-à-d. si vous regardiez le match, vous connaissez probablement déjà le résultat.)",
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
          title: '8. Afin de sélectionner le(s) gagnant(s) de chaque lobby,',
          innerContentList: [
            {
              imageCaption:
                'Cliquez sur le bouton du menu représentant 3 lignes, puis cliquez sur le bouton "Enregistrer les scores".',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(49).png',
              steps: [
                'Enregistrez les scores des joueurs en fonction des résultats soumis. (Les joueurs gagnants devraient obtenir des scores plus élevés.)',
                'Pour un match à plusieurs tours, cliquez sur le bouton Créer un tour en bas. Puis enregistrez plus de scores en fonction des résultats.',
              ],
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(50).png',
              steps: [
                "Une fois l'enregistrement terminé, cliquez sur Mettre à jour.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'transferring_players',
      title: 'Transférer des joueurs dans de nouveaux lobbys',
      navSectionItems: [
        {
          title:
            '1. Si vous devez faire un tournoi où les joueurs avancent / sont transférés dans de nouveaux lobbys, vous devez sélectionner «Élimination» sous Format du tournoi.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(51).png',
              steps: [
                'Nombre de lobby: combien de lobbys initiaux vous souhaitez avoir pour vos premiers rounds',
                "Nombre d'équipes: Combien d'équipes y aura-t-il pour chaque lobby",
              ],
            },
            {
              imageCaption:
                "<i>* Si vous créez un tournoi à un ou plusieurs lobbys, vous n’aurez pas la possibilité de créer de nouveaux lobbys. Par conséquent, vous ne pourrez pas déplacer / faire avancer les joueurs vers de nouveaux lobbys. Comme vous pouvez le voir dans l'exemple ci-dessous (tournoi à plusieurs lobbys), il manque le bouton “+” pour créer un nouveau lobby.</i>",
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(52).png',
            },
          ],
        },
        {
          title:
            "2. Si “Elimination” est sélectionné comme format de tournoi, une option vous permettant de créer un nouveau lobby s'ajoute au Nombre de Lobby que vous avez sélectionnés.",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(53).png',
            },
          ],
        },
        {
          title:
            '3. Pendant que vos lobbys initiaux sont encore en direct, cliquez sur le bouton “+” pour créer un nouveau lobby. Ce nouveau lobby est l’endroit où vous allez faire avancer / transférer vos joueurs pour le round suivant.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(54).png',
              steps: [
                'Le nouveau lobby devrait être vide lorsque vous le créez.',
                'Si vous avez besoin de créer plusieurs nouveaux lobbys, cliquez à nouveau sur le bouton “+”.',
              ],
            },
          ],
        },
        {
          title:
            "4. Pour que vous puissiez faire avancer / transférer les joueurs dans le nouveau lobby, vous devez d'abord TERMINER les lobbys existants. (Veuillez vous reporter à la section <a href='how-to-use-tourney?tab=tournament-lobbied-competition'>Terminer un tournoi - Compétition avec Lobby</a> pour savoir comment mettre fin à un lobby) Une fois vos lobbys fermés, cliquez sur le bouton «Modifier le lobby» dans votre nouveau lobby.",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(55).png',
              steps: [
                "<i>* S'il vous plaît SOYEZ PRUDENT pour ne pas terminer le tournoi entier! Lorsque vous mettez fin à tous les lobbys, l'outil affiche une fenêtre contextuelle vous demandant si vous souhaitez mettre fin au tournoi. Si vous terminez votre tournoi, vous ne pourrez PAS transférer de joueurs ni ajouter de nouveaux lobbys.</i>",
              ],
            },
          ],
        },
        {
          title:
            '5. Sélectionnez le lobby à partir duquel vous souhaitez déplacer les joueurs.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(56).png',
              steps: [
                'Vous pouvez cliquer sur Ajouter un lobby pour effectuer des transferts groupés de plusieurs lobbys.',
                'Dans cet exemple, seuls le Lobby 1 et le Lobby 2 sont fermés. Le Lobby 3 est toujours en ligne. C’est pourquoi vous ne voyez que les Lobby 1 et 2 comme options.',
              ],
            },
          ],
        },
        {
          title:
            '6. Sélectionnez la ou les position(s) des joueurs que vous souhaitez déplacer.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(57).png',
              steps: [
                'Vous pouvez sélectionner plusieurs positions.',
                'La position fait référence au placement du joueur après la fermeture du lobby. (Position 1 = 1er joueur / équipe dans ce lobby)',
                'Par exemple, si vous souhaitez faire avancer les 2 meilleurs joueurs du Lobby 1, sélectionnez les positions 1 et 2.',
              ],
            },
          ],
        },
        {
          title:
            '7. Une fois que vous avez sélectionné les joueurs que vous souhaitez transférer, cliquez sur le bouton Enregistrer. Transfert achevé!',
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
      title: 'Terminer un tournoi - Compétition avec Bracket',
      description:
        "Votre tournoi se terminera automatiquement dès que le vainqueur final sera sélectionné dans l'onglet Brackets.",
    },
    {
      id: 'ending_a_tournament_lobbied_competition',
      title: 'Terminer un tournoi - Compétition avec Lobby',
      navSectionItems: [
        {
          title:
            '1. Une fois que tous les lobbys ont été mis à jour avec les scores et les gagnants, cliquez sur le bouton du menu représentant 3 lignes, puis sur le bouton Terminer le lobby pour chaque lobby. Faites cela pour tous les lobbys. (C’est une bonne habitude à prendre de mettre fin au lobby dès qu’il a été mis à jour. Vous ne pourrez pas déplacer les joueurs si les lobbys ne sont pas fermés.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(59).png',
            },
          ],
        },
        {
          title:
            '2. Une fois que tous les lobbies sont terminés, l’outil game.tv vous indiquera que votre tournoi se terminera et que les résultats seront publiés.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(60).png',
              steps: [
                'Si vous souhaitez terminer le tournoi et publier les résultats, cliquez sur <i>Continuer.</i>',
                'Si vous souhaitez ne pas terminer le tournoi ni publier les résultats, cliquez sur <i>Fermer.</i> (Votre tournoi ne se terminera pas et les résultats ne seront pas publiés.)',
                'Il y aura une option pour terminer le tournoi et publier les résultats si vous avez choisi <i>Fermer.</i>',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sending_prizes_to_winners',
      title: 'Envoi de prix aux gagnants',
      description:
        '<p><i>** Cette fonctionnalité est uniquement disponible pour les partenaires de game.tv qui produisent des tournois sur des serveurs BlueStacks Discord.</i></p>',
      navSectionItems: [
        {
          title:
            "1. Une fois que les gagnants sont sélectionnés et que le tournoi est terminé correctement, vous pourrez voir les gagnants répertoriés dans l'onglet Prix.",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(61).png',
            },
          ],
        },
        {
          title:
            '2. Remplissez simplement les informations pour chaque gagnant.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(62).png',
              steps: [
                'Assurez-vous de vérifier la préférence du prix avec vos gagnants (c.-à-d. région, type de prix, etc.)',
                "Certaines options peuvent ne pas être disponibles pour certaines régions. Pour voir toutes les options de prix disponibles, veuillez consulter <a href='https://www.seagm.com/'>https://www.seagm.com/</a>",
                'Vous pouvez configurer plusieurs prix pour chaque gagnant. (par exemple, pour le prix Google Play (US) de 20 $, vous devrez configurer deux lots Google Play (US) de 10 $).',
                "(Pour NA) En général, nous sommes prêts à dépenser jusqu’à 4 $ de plus pour trouver une option / montant de prix adéquat. Pour Steam, <div class='inner-content'> - Pour 5 $ / 10 $, veuillez utiliser Steam (Hong Kong) 40 HKD / 80 HKD respectivement.<br> - Pour 20 $ / 25 $, veuillez utiliser Steam (Malaisie) RM 80 / RM 100 respectivement.</div>",
              ],
            },
          ],
        },
        {
          title:
            '3. Lorsque toutes les informations sont correctement remplies, cliquez sur le bouton Envoyer le prix.',
          innerContentList: [
            {
              steps: [
                'Cela enverra une demande de distribution de prix aux administrateurs de game.tv. Ils examineront les informations relatives au prix, puis approuveront ou rejetteront la demande.',
                "Une fois la demande approuvée, les gagnants recevront un MP de Tourney Bot contenant les codes cadeaux échangeables. Vous verrez également que la livraison a été effectuée sous l'onglet Prix.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cloning_existing_tournaments',
      title: 'Clonage de tournois existants',
      description:
        "<p>En clonant des tournois existants, l'hôte de tournois peut facilement dupliquer des tournois du même format, encore et encore, sans avoir à configurer les détails à chaque fois. <br /><i> ** Vous ne pouvez pas cloner un tournoi et en changer le mode: lobby contre bracket.</i></p>",
      navSectionItems: [
        {
          title:
            '1. Recherchez un tournoi que vous souhaitez dupliquer à partir de votre tableau de bord. À la fin du tournoi, cliquez sur le bouton de menu 3 points.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(63).png',
              steps: [
                'Si vous avez déjà terminé le tournoi, les boutons Modifier et Pause ne seront pas disponibles.',
                'Si vous avez déjà nettoyé le tournoi, le bouton Nettoyer ne sera pas disponible.',
              ],
            },
          ],
        },
        {
          title:
            '2. Cliquez sur <i>Cloner</i>. Un nouvel écran apparaîtra où vous devez entrer les informations minimales.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(64).png',
              steps: [
                'Nom du tournoi: Ceci ne sera pas reporté depuis le tournoi existant. Vous devrez entrer un nouveau nom pour le tournoi.',
                'Serveur Discord: Ceci sera reporté depuis le tournoi existant. Choisissez un autre serveur si vous souhaitez dupliquer le tournoi existant sur un autre serveur. ',
                'Jeu: Les modes de jeu seront reportés depuis le tournoi existant. Personnalisez sa configuration si vous voulez le changer. ',
                'Programme: Le calendrier ne sera pas reporté depuis le tournoi existant. Vous devrez entrer un nouveau calendrier. ',
                'Prix: les informations sur les prix seront reportées du tournoi existant. Modifiez si vous souhaitez changer.',
                'Stream: Ceci sera reporté depuis le tournoi existant. Modifiez-le si vous souhaitez le changer. ',
                "Paramètre avancé: Si vous souhaitez modifier d'autres détails de configuration, cliquez sur ceci pour accéder aux options de configuration d'origine.",
              ],
            },
          ],
        },
      ],
    },
  ],
};
