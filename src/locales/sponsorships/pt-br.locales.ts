import { ISponsorshipsLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const SponsorshipsLocalesPortuguese: ISponsorshipsLocale = {
  metadata: {
    title: 'Patrocínios de E-Sports Mobile com Tourney e Game.tv',
    description: 'Patrocínios de E-Sports Mobile com Tourney e Game.tv',
  },
  sponsorshipSection: {
    title: 'Patrocínios de E-Sports para sua comunidade\xa0',
    contents: [],
    imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship-banner.png',
  },
  playSponsorSection: {
    blocks: [
      {
        title: 'Como os Jogadores Conseguem Patrocínio? ',
        contents: [
          // tslint:disable-next-line: quotemark
          'Quando você opera uma liga em sua comunidade, o Tourney rastreia o desempenho de todos os jogadores em todos os servidores com o Tourney instalado. Os 8 melhores jogadores de cada país no final de cada temporada receberão um patrocínio de US $ 500 por mês, a cada mês.',
          'Como um bônus para a comunidade que ajudou esses jogadores a crescer, a comunidade também receberá uma recompensa exclusiva!',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/get-sponsorship.png',
        imageAlt: 'Seja Patrocinado ',
      },
      {
        title: 'Patrocínio ',
        contents: [
          // tslint:disable-next-line: quotemark
          'À medida que os jogadores competem na liga do seu servidor, eles avançam em cargos ganhando várias vantagens. Quando atingem o cargo de Ouro, eles se qualificam para a Classificação Nacional. Todo mês é uma nova temporada, onde escolhemos os 8 melhores jogadores do ranking nacional. Se o seu servidor tiver membros em todo o mundo, tudo bem também. Os jogadores precisarão verificar seu país de residência em seus perfis e recomendamos que você ajude sua comunidade a fazer isso.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship.png',
        imageAlt: 'Sponsorship',
      },
    ],
  },
  verifiedBadgeSection: {
    blocks: [
      {
        title: 'Emblema de Verificado ',
        contents: [
          // tslint:disable-next-line: quotemark
          'Os jogadores que obterem Prata poderão obter "Verificado" e obter um emblema especial em sua página de perfil para que todos possam ver. Somente jogadores "verificados" poderão participar do Ouro e ganhar um patrocínio.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/verified-badge.png',
        imageAlt: 'Emblema de Verificado ',
      },
      {
        title: 'Ligas',
        contents: [
          // tslint:disable-next-line: quotemark
          'O Tourney transformará seu servidor em uma liga própria. Os jogadores competirão nos eventos que você executa usando o uHost ou automaticamente através do aiHost. O torneio notifica os jogadores sobre seu desempenho e função por meio de comandos no chat ou os jogadores podem ver seus perfis no Game.tv/usuários.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/leagues-spons.png',
        imageAlt: 'Liga ',
      },
    ],
  },
  leaderboardSection: {
    title: 'Classificação Nacional ',
    contents: [
      // tslint:disable-next-line: quotemark
      "Os jogadores da sua comunidade terão uma classificação na liga da comunidade, mas também poderão verificar sua posição na tabela de classificação nacional nos perfis do Game.tv ou usando o comando '! Myposition'. Somente jogadores verificados podem alcançar a classificação nacional",
    ],
    desktopImageUrl:
      'https://cdn.game.tv/images/meet-tourney/leaderboard-desk.png',
    mobImageUrl: 'https://cdn.game.tv/images/meet-tourney/leaderboard-mob.png',
  },
  tiersSection: {
    content: {
      title: 'Cargos ',
      contents: [
        // tslint:disable-next-line: quotemark
        "À medida que seus jogadores vencem, eles avançam nos níveis da liga e ganham várias vantagens. Quando atingem o nível Ouro, eles se qualificam para a tabela de Classificação Nacional e podem ganhar um patrocínio todos os meses em que ficarem entre os 8 primeiros colocados. Os jogadores podem ver suas classificações em seus perfis ou chamando o comando '! Myrating'.",
      ],
    },
    graphContent: {
      previousTitle: 'Anterior ',
      nextTitle: 'Próximo ',
      perksTitle: 'Vantagens ',
      forTitle: 'PARA',
      graphList: [
        {
          type: 'bronze',
          imageCaption: 'Bronze',
          imageAlt: 'Bronze',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: 'Pontuação ELO  800 - 1300',
          perks: ['Emotes Exclusivos do Tourney ', 'Perfil e emblema '],
        },
        {
          type: 'prata ',
          imageCaption: 'Prata ',
          imageAlt: 'Prata ',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: 'Pontuação ELO 1301 - 1800',
          perks: ['Emblema de Perfil Verificado '],
        },
        {
          type: 'ouro ',
          imageCaption: 'Ouro ',
          imageAlt: 'Ouro ',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: 'Pontuação ELO 1800+',
          perks: ['Emotes Exclusivos do Tourney '],
        },
      ],
    },
  },
};
