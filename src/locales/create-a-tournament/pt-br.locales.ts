import { ICommunityTournamentsType } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.PORTUGUESE;

export const CreateATournamentLocalesLocalePortuguese: ICommunityTournamentsType = {
  metadata: {
    title: 'Como Rodar Torneios de E-Sports Mobile  | Game.tv',
    description:
      'Inicie seus próprios torneios e ligas usando o Discord bot Tourney da Game.tv ou o aplicativo Game.tv.',
  },
  heroSection: {
    heading: 'Crie - Organize - Jogue ',
    content:
      'Crie torneios diretamente dentro da sua comunidade Discord ou em nosso aplicativo em poucas etapas ',
    bannerDeskTopImageUrl: 'https://cdn.game.tv/create_tournament/banner.png',
    bannerMobImageUrl: 'https://cdn.game.tv/create_tournament/banner-mob.png',
  },
  discordSection: {
    heading: 'Discord',
    content:
      'Realizar torneios dentro da sua comunidade do Discord significa que os jogadores nunca precisam sair do seu servidor. Tudo o que eles precisam fazer para se registrar, fazer check-in e jogar acontece por meio de cargos e mensagens personalizadas. O Tourney cuida das partidas, o que significa confrontos mais justos. Após o jogo, os jogadores podem verificar suas classificações e a pontuação em sua própria página de perfil.',
    btnText: 'Convidar o Tourney ',
    steps: [
      {
        title: 'Instale o Tourney e vá até o ',
        linkString: 'painel de controle ',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step1.png',
        linkUrl: '/dashboard',
      },
      {
        title: 'Clique em "Criar Torneio" e escolha seu jogo',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step2.png',
      },
      {
        title: 'Personalize o torneio ou use nossos modelos existentes',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step3.png',
      },
      {
        title:
          'Clique em "Publicar" e o Tourney criará o lobby ou as chaves no seu servidor Discord.',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step4.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/discord_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/discord.png',
  },
  gameSection: {
    heading: 'Aplicativo Game.tv ',
    content:
      'Se você não possui um servidor Discord ou deseja convidar jogadores de fora do Discord, pode usar nosso aplicativo para criar torneios. Assim como no Discord, o Tourney criará, organizará e administrará seus torneios. Você e seus participantes receberão notificações diretamente no aplicativo sobre as próximas partidas, matchmaking, atualizações de chaves e muito mais. Você também pode conectar sua conta do Twitter e compartilhar o progresso da partida, além de permitir que as pessoas se juntem diretamente através do Twitter. ',
    btnText: 'Abra o aplicativo ',
    steps: [
      {
        title: 'Vá até ',
        linkString: 'Aplicativo Game.tv ',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step1.png',
        linkUrl: '/user',
      },
      {
        title:
          'Faça login e clique no + na barra de controle na parte inferior da tela',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step2.png',
      },
      {
        title: 'Personalize o torneio ou use nossos modelos existentes',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step3.png',
      },
      {
        title:
          'Clique em "Publicar" e o Tourney criará o lobby ou as chaves no seu servidor Discord.',
        imgUrl: 'https://cdn.game.tv/crete_tournament/step-4-1-new.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/game_global_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/game.png',
  },
  locales: `/${language}`,
};
