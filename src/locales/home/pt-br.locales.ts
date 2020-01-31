import { IHomeLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.PORTUGUESE;
export const HomeLocalePortuguese: IHomeLocale = {
  metadata: {
    title: 'Tourney - Bot de E-Sports para Discord Operado por IA ',
    description:
      'Organize e execute milhares de torneios de E-Sports mobile em qualquer comunidade de jogos com o nosso bot de torneios, Tourney.',
  },
  heroSection: {
    heading: 'Conheça o Tourney ',
    content:
      'O assistente de E-Sports operado por IA. Ele executa o seu torneio para que você possa se concentrar na sua comunidade',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/global.png',
        logoExtraClasses: 'global-logo',
        link: '/user',
        name: 'Abra o aplicativo ',
        extraClasses: 'alternate-background',
      },
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        logoExtraClasses: 'discord-logo',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Convidar o Tourney ',
      },
    ],
    discoverButtonTitle: 'Descubra Mais ',
  },
  whyTourneySection: {
    heading: 'Por que Tourney ',
    content:
      'É difícil realizar um torneio para sua comunidade. Manter o controle de quem joga contra quem, qual lobby fazer parte, quais são os confrontos mais justos, provar quem venceu - isso é muito. O Tourney realizará seus torneios como um assistente ou completamente por conta própria, com base na sua comunidade. Sua IA e recursos poderosos podem ajudá-lo a criar uma comunidade mais forte e divertida.',
  },
  uHostSection: {
    heading: 'uHost, uHost AI-Assistant, and AI-Host',
    content:
      'Três modos principais de torneio oferecem total liberdade na maneira como você executa seus jogos.',
    hostTypes: [
      {
        heading: 'uHost',
        imageAlt: 'uHost',
        content:
          'Escolha um modelo de torneio ou personalize o seu. Publique. Verifique, Tourney criará todos os canais e enviará mensagens para os cargos que você desejar. ',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost.png',
      },
      {
        heading: 'uHost AI-Assistant',
        imageAlt: 'uHost AI-Assistant',
        content:
          'O Tourney ajuda a moderar o seu torneio e fornece orientação para cada jogador entre as partidas e muito mais.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost-assistant.png',
      },
      {
        heading: 'AI-Host',
        imageAlt: 'aiHost',
        content:
          'O Tourney escolherá o jogo, a hora, o formato e executará o torneio completamente sozinho, do começo ao fim.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/ai-Host.png',
      },
    ],
    templateSection: {
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/templates.png',
      imageAlt: 'Templates',
      heading: 'Modelos',
      content:
        'O torneio vem com dezenas de modelos de torneio pré-configurados, para que você possa clicar em Publicar e só.',
    },
    messagingSection: {
      imageAlt: 'DMs and Messaging',
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/dms.png',
      heading: 'Mensagens Diretas e Privadas ',
      content:
        'O Tourney pode enviar mensagens para cargos específicos de jogos ou qualquer outro que você escolher para notificá-los sobre um novo torneio. Toda a organização acontece em um novo canal que o Tourney cria e todos os convites e partidas ou lobbies são enviados por mensagem privada.',
    },
  },
  perksSection: {
    heading: 'Vantagens ',
    content: 'O Tourney não seria completo sem uma tonelada de vantagens.',
    perksList: [
      {
        content:
          'Você organiza vários torneios? Ótimo, temos um sistema de níveis para recompensar você.',
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/perk-tournaments.png',
        imageAlt: 'Níveis Gratificantes de Torneios  ',
      },
      {
        content:
          'Você transmite seus torneios? Perfeito, temos um OBS plugin para você usar',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-obs.png',
        imageAlt: 'OBS Plugin especial para transmitir ',
      },
      {
        content:
          'Quer organizar uma liga em seu servidor? Ótimo, nós temos isso também!',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-league.png',
        imageAlt: 'Organize Ligas!',
      },
    ],
  },
  graphsSection: {
    heading: 'Cargos ',
    content:
      'Quanto mais torneios você organiza com o Tourney, mais vantagens você desbloqueia. Seu cargo aparece na tabela de classificação da comunidade Game.tv no Discord e você recebe cada conjunto de vantagens depois que passa para o próximo cargo.',
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
          forDuration: '1 - 6 Torneios Por Semana ',
          perks: [
            'Emotes Exclusivos do Tourney ',
            'Perfil e emblema ',
            'Desbloqueia a IA do Tourney ',
          ],
        },
        {
          type: 'silver',
          imageCaption: 'Prata ',
          imageAlt: 'Silver',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: '7+ Torneios Por Semana ',
          perks: [
            '2 Nitro Boosts para o seu servidor Discord ',
            'Desbloqueia Ligas',
          ],
        },
        {
          type: 'gold ',
          imageCaption: 'Ouro ',
          imageAlt: 'Gold',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration:
            'Organize uma liga com 300 ou mais participantes únicos por temporada',
          perks: ['Patrocínios garantidos para prêmios da liga '],
        },
      ],
    },
  },
  tourneyEmotesSection: {
    heading: 'Emotes do Tourney ',
    content:
      'Desbloqueado no Bronze, você obtém 42 emoticons incríveis de alta definição para usar em sua comunidade. Eles são pré-dimensionados, atrevidos e prontos para serem usados. ',
  },
  profilesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/profiles.png',
        heading: 'Perfis ',
        imageAlt: 'Profiles',
        content:
          'Desbloqueado no Bronze, os jogadores em seus torneios recebem automaticamente perfis que podem ser personalizados. Cada perfil mostra os jogos disputados, o registro de vitórias / derrotas e a classificação do jogador. As classificações dos jogadores ajudam na combinação de partidas e na progressão da liga.',
      },
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/badges.png',
        heading: 'Emblemas ',
        imageAlt: 'Badges',
        content:
          'Vença jogos e ganhe distintivos para mostrar suas habilidades. À medida que sua pontuação ELO aumenta ou você ganha torneios e prêmios, você ganha insígnias exclusivas em seu perfil que às vezes vêm com algumas vantagens adicionais super secretas e exclusivas.',
        reverse: true,
      },
    ],
  },
  tourneyAiSection: {
    heading: 'IA do Tourney ',
    content1:
      'Depois de atingir o Bronze, você desbloqueia o AI-Host. Ative o AI-Host e o Tourney poderá executar torneios automaticamente em sua comunidade. Lembre-se de que apenas os torneios uHost contam para a sua progressão. Os torneios AI-Host não contam (mas são incríveis e você deve executá-los ao lado do uHost).',
    content2: '',
  },
  leaguesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/league.png',
        heading: 'Ligas',
        imageAlt: 'Leagues',
        content:
          'Desbloqueado em Ouro, o Tourney pode executar uma liga inteira no seu servidor. Os jogadores do seu servidor terão a oportunidade de competir em um sistema de níveis paralelos e ganhar um patrocínio mensal se ficarem entre os 8 primeiros no ranking nacional.',
      },
    ],
  },
  getBoostedSection: {
    heading: 'Ganhe um "Boost"',
    content:
      'Alcance Silver e nós daremos ao seu servidor Discord não um, mas dois "Boosts" para você obter as doces vantagens do nível 1. Desde que você realize sete ou mais torneios toda semana (de segunda a domingo), continuaremos aumentando o seu servidor. Se você cair abaixo de sete torneios a cada semana, podemos remover seus aumentos até você voltar aos sete ou mais. Além disso, você desbloqueia a capacidade de organizar ligas para sua comunidade usando a IA do Tourney.',
    imgDesktopUrl: 'https://cdn.game.tv/images/meet-tourney/get-boosted.png',
    imgMobile1Url:
      'https://cdn.game.tv/images/meet-tourney/get-boosted-mob1.png',
    imgMobile2Url:
      'https://cdn.game.tv/images/meet-tourney/get-boosted-mob2.png',
    backgroundImgUrl:
      'https://cdn.game.tv/images/meet-tourney/get-boosted-bg.png',
    getBoostedLevels: {
      perks: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-white.png',
        heading: 'Vantagens de nível 1',
        mainlabel: 'Desbloqueadas',
        subheading: 'Vantagens do servidor com "Boost" incluem -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/emoji.png',
            label: '50 slots de emoji para servidores (para um total de 100)',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/audio.png',
            label: 'Qualidade de áudio de 128 Kbps',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/gif-icon.png',
            label: 'Ícone do servidor animado',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/server.png',
            label: 'Fundo do convite para o servidor personalizado',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/live.png',
            label: '720p 60fps Go Live streams',
          },
        ],
      },
      boostedServer: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-gold.png',
        heading: 'Requisitos para um Servidor Impulsionado',
        subheading: 'O que você precisa saber -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Os torneios devem ser uHost ou uHost AI-Assistant, e os torneios AI-Host não contam para a sua média semanal.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Os torneios devem ter uma taxa mínima de preenchimento de 50% para se qualificar. (isso significa que se um torneio tem dezesseis slots, pelo menos oito pessoas precisam jogar no seu torneio para contar para a sua média semanal.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Analisamos média de torneios por semana. Executando três torneios um dia e quatro no outro é o mesmo que organizar um torneio por dia.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Os impulsionamentos podem ser removidos se sua média de torneios cair abaixo de sete em um dada semana  entre Segunda e Sexta (horário do Pacífico)',
          },
        ],
      },
    },
  },
  prizeSponsorshipSection: {
    items: [
      {
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/prize-sponsorships.png',
        heading: 'Patrocínio de Prêmios ',
        imageAlt: 'Patrocínios e Prêmios Para Ligas ',
        content:
          'Quando você alcançar o Ouro organizando uma liga em sua comunidade, patrocinaremos os prêmios da liga para todas as temporadas (com um mês de duração). Os prêmios virão de nossos parceiros incríveis, como MSI, Intel e centenas de desenvolvedores de jogos, e podem incluir dinheiro, cartões-presente, hardware, mercadorias ou itens do jogo.',
      },
    ],
  },
  availableGamesSection: {
    heading: 'Jogos Disponíveis ',
    content: 'Mais Adicionados Semanalmente ',
    viewMoreGames: 'Ver Mais',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: 'Convidar o Tourney ',
      },
    ],
  },
  gamelink: `/${language}/find-tournaments`,
};
