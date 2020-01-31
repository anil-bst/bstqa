import { ICommunityTournamentsType } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.ITALIAN;

export const CreateATournamentLocalesLocaleItalian: ICommunityTournamentsType = {
  metadata: {
    title: 'Come organizzare tornei di Mobile Esport | Game.tv',
    description:
      // tslint:disable-next-line: quotemark
      "Inizia i tuoi tornei e campionati usando il Discord bot Tourney di Game.tv o l'app Game.tv",
  },
  heroSection: {
    heading: 'Crea - Host - Riproduci  ',
    content:
      // tslint:disable-next-line: quotemark
      "Crea tornei direttamente all'interno della tua community Discord o sulla nostra app in pochi semplici passaggi",
    bannerDeskTopImageUrl: 'https://cdn.game.tv/create_tournament/banner.png',
    bannerMobImageUrl: 'https://cdn.game.tv/create_tournament/banner-mob.png',
  },
  discordSection: {
    heading: 'Discord',
    content:
      // tslint:disable-next-line: quotemark
      "Organizzare tornei all'interno della tua community Discord significa che i giocatori non devono mai lasciare il tuo server. Tutto ciò che devono fare per registrarsi, effettuare il check-in e giocare avviene tramite ruoli personalizzati e DM. Tourney si occupa del matchmaking, il che significa che i matchup più equi. Dopo la partita, i giocatori possono controllare la propria classifica e il punteggio GELO sulla propria pagina del profilo.",
    btnText: 'Invita Tourney',
    steps: [
      {
        title: 'Installa Tourney e vai alla',
        linkString: 'Dashboard',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step1.png',
        linkUrl: '/dashboard',
      },
      {
        title: 'Fai clic su "Crea torneo" e scegli il tuo gioco',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step2.png',
      },
      {
        title: 'Personalizza il torneo o usa i nostri modelli esistenti',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step3.png',
      },
      {
        title:
          'Fai clic su "Pubblica" e Tourney creerà la lobby o la staffa nel tuo server Discord.',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step4.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/discord_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/discord.png',
  },
  gameSection: {
    heading: 'App Game.tv',
    content:
      // tslint:disable-next-line: quotemark
      "Se non disponi di un server Discord o desideri invitare giocatori esterni a Discord, puoi utilizzare la nostra app per creare tornei. Proprio come per Discord, Tourney creerà, organizzerà e gestirà i tuoi tornei. Tu e i tuoi partecipanti riceverete notifiche direttamente nell'app su partite imminenti, matchmaking, aggiornamenti di parentesi e altro ancora. Puoi anche connettere il tuo account Twitter e condividere i progressi della partita, nonché consentire alle persone di partecipare direttamente tramite Twitter.",
    // tslint:disable-next-line: quotemark
    btnText: "Avvia l'app",
    steps: [
      {
        title: 'Vai alla',
        linkString: 'App Game.tv',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step1.png',
        linkUrl: '/user',
      },
      {
        title:
          'Accedi e fai clic su + nella barra di controllo nella parte inferiore dello schermo',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step2.png',
      },
      {
        title: 'Personalizza il torneo o usa i nostri modelli esistenti',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step3.png',
      },
      {
        title:
          'Fai clic su "Pubblica" e Tourney creerà la lobby o la staffa nel tuo server Discord.',
        imgUrl: 'https://cdn.game.tv/crete_tournament/step-4-1-new.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/game_global_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/game.png',
  },
  locales: `/${language}`,
};
