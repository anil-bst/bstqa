import { ICommunityTournamentsType } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.GERMAN;

export const CreateATournamentLocalesLocaleGerman: ICommunityTournamentsType = {
  metadata: {
    title: 'So führst du Mobile Esports Turniere durch | Game.tv',
    description:
      'Starte deine eigenen Turniere und Ligen mit Game.TVs Discord Bot Tourney oder der Game.TV-App.',
  },
  heroSection: {
    heading: 'Erstellen - Hosten - Spielen',
    content:
      'Erstelle Turniere in wenigen einfachen Schritten direkt in deiner Discord-Community oder in unserer App',
    bannerDeskTopImageUrl: 'https://cdn.game.tv/create_tournament/banner.png',
    bannerMobImageUrl: 'https://cdn.game.tv/create_tournament/banner-mob.png',
  },
  discordSection: {
    heading: 'Discord',
    content:
      'Wenn du Turniere in deiner Discord-Community durchführst, müssen die Spieler deinen Server nie verlassen. Alles, was sie tun müssen, um sich zu registrieren, einzuchecken und zu spielen, geschieht über benutzerdefinierte Rollen und DMs. Tourney kümmert sich um Matchmaking, was die fairsten Matchups bedeutet. Nach dem Spiel können die Spieler ihre Wertung und ihren GELO-Score auf ihrer eigenen Profilseite überprüfen.',
    btnText: 'Tourney einladen',
    steps: [
      {
        title: 'Installiere Tourney und gehe zum',
        linkString: 'Dashboard',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step1.png',
        linkUrl: '/dashboard',
      },
      {
        title: 'Klicke auf "Turnier erstellen" und wähle dein Spiel aus',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step2.png',
      },
      {
        title: 'Passe das Turnier an oder verwende unsere vorhandenen Vorlagen',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step3.png',
      },
      {
        title:
          'Klicke auf "Veröffentlichen" und Tourney erstellt die Lobby oder Turnierbaum auf deinem Discord-Server.',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step4.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/discord_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/discord.png',
  },
  gameSection: {
    heading: 'Game.tv-App',
    content:
      'Wenn du keinen Discord-Server hast oder Spieler von außerhalb von Discord einladen möchtest, kannst du mit unserer App Turniere erstellen. Genau wie bei Discord erstellt, organisiert und führt Tourney deine Turniere durch. Du und deine Teilnehmer erhalten direkt in der App Benachrichtigungen über bevorstehende Spiele, Matchmaking, Turnierbaum-Updates und mehr. Du kannst dich auch mit deinem Twitter-Konto verbinden und deinen Spielfortschritt teilen sowie Personen über Twitter direkt beitreten lassen.',
    btnText: 'App starten',
    steps: [
      {
        title: 'Gehe zur',
        linkString: 'Game.tv-App',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step1.png',
        linkUrl: '/user',
      },
      {
        title:
          'Melde dich an und klicke auf das + in der Steuerleiste am unteren Bildschirmran',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step2.png',
      },
      {
        title: 'Passe das Turnier an oder verwende unsere vorhandenen Vorlagen',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step3.png',
      },
      {
        title:
          'Klicke auf "Veröffentlichen" und Tourney erstellt die Lobby oder den Turnierbaum auf deinem Discord-Server.',
        imgUrl: 'https://cdn.game.tv/crete_tournament/step-4-1-new.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/game_global_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/game.png',
  },
  locales: `/${language}`,
};
