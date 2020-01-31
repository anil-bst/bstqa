import { IHowToUseTourneyLocale } from '@app/abstractions';
// tslint:disable: max-line-length

export const HowToUseTourneyLocalePortuguese: IHowToUseTourneyLocale = {
  metadata: {
    title: 'Game.tv - Como utilizar o Tourney',
    description: 'Aprenda como utilizar o Tourney para sua comunidade',
  },
  navigationSections: [
    {
      id: `create_new_accoutn`,
      title: `Criando Uma Nova Conta `,
      isActive: true,
      navSectionItems: [
        {
          title: `1. (Esta etapa é apenas para parceiros game.tv. Se você estiver criando torneios em seu próprio servidor, pule para a etapa 2.) Compartilhe seu apelido e ID de usuário do Discord com game.tv admin`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0.jpg`,
              imageCaption: `O apelido no Discord deve incluir os 4 dígitos numéricos `,
              steps: [
                `Discord ID : Aqui está como você pode descobrir o seu ID de usuário <a href='https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-'>https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-</a>`,
                `Aguarde o administrador da game.tv confirmar com você que a conta foi configurada para a criação do torneio.`,
              ],
            },
          ],
        },
        {
          title: `2. Visite <a href='https://esports.game.tv/nimda'>https://esports.game.tv/nimda</a>`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(1).png`,
              imageCaption: `Clique em 'Entrar com Discord' `,
            },
            {
              imageCaption: `Clique 'Autorizar'`,
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(2).png`,
            },
          ],
        },
      ],
    },
    {
      id: `setting_up_tourney`,
      title: `Configurando o Tourney Bot para Seu Servidor do Discord `,
      navSectionItems: [
        {
          title: `1. No menu principal à esquerda, clique no botão 'Criar torneio'`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png`,
            },
          ],
        },
        {
          title: `2. Na página Modelos de Torneio, localize um jogo para o qual você deseja criar um torneio e clique em Personalizar.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png`,
            },
          ],
        },
        {
          title: `3. Na página Personalizar Torneio, clique em Adicionar outro link do servidor`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(5).png`,
            },
          ],
        },
        {
          title: `4. O navegador aparecerá e mostrará a interface do usuário do Discord, solicitando que você selecione o servidor que deseja adicionar o Bot.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(6).png`,
              steps: [
                `Apenas servidores nos quais você é administrador aparecerão no menu suspenso.`,
                `Selecione o servidor que você deseja instalar o bot e clique em Autorizar.`,
              ],
            },
          ],
        },
        {
          title: `5. Quando autorizado corretamente, você receberá uma tela de confirmação no mesmo navegador. Agora o Tourney Bot está instalado no seu servidor Discord.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(7).png`,
            },
          ],
        },
        {
          title: `6. Verifique o seu servidor do Discord para garantir que o bot foi instalado.`,
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
      title: `Modo IA do Tourney `,
      description: `<p>'Modo de IA do Tourney, permite que a AI do Tourney Bot crie, lance e opere torneios sozinho'</p><p><i> ** Saiba que esse modo só está disponível para o administrador do servidor. Outros cargos com permissão de torneio não terão acesso à esse modo. </i></p><p><i> ** Apenas jogos no estilo com chaves estão disponíveis para o modo IA. (Ex. PUBM M, Free Fire não estão disponíveis)</i></p>`,
      navSectionItems: [
        {
          title: `1. No seu painel de controle, há o botão IA do Tourney. Clique nele. `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(9).png`,
            },
          ],
        },
        {
          title: `2. Na página de configurações do Bot, primeiro selecione seu servidor no menu. Em seguida, clique em Ativar IA.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(10).png`,
              steps: [
                `Você pode adicionar o Tourney Bot ao seu servidor selecionando Adicionar servidor aqui se o Tourney Bot ainda não estiver instalado.`,
                `Clicar no botão Ativar IA abrirá um novo menu para você.`,
              ],
            },
          ],
        },
        {
          title: `3. Configuração de Moderador`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(11).png`,
              steps: [
                `Modo de Moderador: Seus administradores serão listados aqui. Cada moderador pode ter configurações diferentes. Selecione o administrador que você deseja usar.`,
                `Cargos a serem mencionados: Nesta seção, você terá que informar ao Bot da IA quais cargos mencionar em cada jogo de torneio da IA. Se você não selecionar um cargo, a IA do Bot ​​mencionará @everyone, que você pode não querer.`,
                `Visibilidade do Canal da Partida: Selecione um cargo que você deseja que tenha visibilidade dos canais privados do torneio. `,
              ],
            },
          ],
        },
        {
          title: `4. Configuração de Jogos`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(12).png`,
              steps: [
                `Ativar Seleção Automática: se você ativar isso, a IA do Bot decidirá qual jogo será o mais popular para o seu servidor, para que você não precise escolher manualmente.`,
                `Se a opção Ativar Seleção Automática estiver desativada, basta selecionar os jogos que você deseja ter torneios no seu servidor. A IA do Bot estará executando torneios apenas entre os jogos selecionados.`,
              ],
            },
          ],
        },
        {
          title: `5. Configurações de Calendário`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(13).png`,
              steps: [
                `Escolher Horas Automaticamente: se você ativar isso,  a IA do Bot decidirá qual horário atrairá mais participantes e lançará torneios nesse período.`,
                `Se a opção Escolher Horário Automaticamente estiver desativada, basta selecionar o intervalo de tempo em que você deseja que a IA do Bot inicie torneios. a IA do Bot lançará torneios dentro do intervalo de tempo selecionado.`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `discord_commands`,
      title: `Lista Completa dos Comandos no Discord `,
      navSectionItems: [
        {
          title: `1  - Aplicáveis no Lobby do Torneio  `,
          innerContentList: [
            {
              steps: [
                `<strong>!register</strong> : Isso permitirá que o processo de registro comece para você. Só é utilizável após o início das inscrições.`,
                `<strong>!unregister</strong> : Isso removerá sua vaga do registro e também da sua equipe.`,
                `<strong>!timer</strong> : Isso informará a próxima etapa do processo do torneio e quanto tempo resta até essa etapa.`,
                `<strong>!myteam</strong> : Isso informará quem está em sua equipe e o status dos seus registros.`,
              ],
            },
          ],
        },
        {
          title: `2. Aplicáveis nas mensagens privadas (DM) do Tourney Bot `,
          innerContentList: [
            {
              steps: [
                `<strong>!createteam</strong> <b class='highlight'><team name> <ingame username></b> : Isso registrará uma nova equipe na lista. Você será a única pessoa nessa equipe até compartilhar o código da equipe e fazer com que outras pessoas entrem na sua equipe.`,
                `<strong>!jointeam</strong> <b class='highlight'><team code> <ingame username></b> : Isso colocará você na equipe existente que outra pessoa criou.`,
                `<strong>!joinsolo</strong> <b class='highlight'><ingame username></b> : Isso irá registrá-lo para um torneio solo.`,
                `<strong>!checkin</strong> <b class='highlight'><code provided></b> : Se houver necessidade de check-in e se o horário do check-in tiver começado, isso permitirá que você faça o check-in e conclua seu registro.`,
              ],
            },
          ],
        },
        {
          title: `3. Aplicáveis no Game Lobby`,
          innerContentList: [
            {
              steps: [
                `<strong>!result</strong> <b class='highlight'><team name></b> : É assim que você envia o resultado da partida para o bot. É necessário anexar uma captura de tela da sua tela de vitória junto com o comando.`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `create_new_tournament`,
      title: `Criando um Novo Torneio `,
      description: `</i>Etapa 1)~2) são exatamente iguais aos mostrados acima na seção Configurando o Tourney Bot para o seu servidor do Discord. Se você já executou essas etapas, poderá pular para a etapa 3).</i>`,
      navSectionItems: [
        {
          title: `1. No menu principal à esquerda, clique no botão 'Criar torneio'`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png`,
            },
          ],
        },
        {
          title: `2. Na página Modelos de Torneio, localize um jogo para o qual você deseja criar um torneio e clique em Personalizar.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png`,
            },
          ],
        },
        {
          title: `3. Na página 'Personalizar Torneio', role até o final e selecione Configurações Avançadas.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(15).png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(16).png`,
              steps: [
                `O aviso irá lhe pedir para confirmar essa ação. Simplesmente selecione Continuar.  `,
              ],
            },
          ],
        },
        {
          title: `4. Preencha a seção Informações Básicas`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(17).png`,
              steps: [
                `Nome do Torneio: Digite o nome do seu torneio. Isso aparecerá como título de categoria no seu Discord. As letras serão exibidas em letras maiúsculas. Emojis são permitidos nesta seção.`,
                `Jogo: Escolha o seu jogo, depois escolha o formato do seu jogo. (ex. PUBG M -> Duo) Isso decidirá se o seu torneio será um torneio entre chaves ou um lobby.`,
                `Horários: Escolha o horário de início das inscrições, o horário de término do registro e o horário de início do torneio. Essas datas serão exibidas na parte inferior do anúncio do seu torneio.<div class='inner-content'><p> Horário de Início das Inscrições: É quando os jogadores poderão começar a se registrar no seu torneio no canal do Discord. Antes desse período, os jogadores não poderão se registrar e o comando '! Register' não funcionará no canal. </p> <p> Horário do Final dos Registros: Após esse período, os jogadores não poderão mais se registrar. O horário de término do registro não pode ser inferior a 10 minutos antes do horário de início do torneio. O processo de check-in só pode ser iniciado após o término do registro. Além disso, você só pode criar chaves ou lobbies após o término do registro. </p> <p> Horário de Início do Torneio: esse é o horário que o seu torneio começa. </p></div> `,
                `Stream : Se você é um streamer e deseja anunciar seu canal de stream junto com o anúncio do torneio, clique em 'Ativar Link' e coloque o link do stream aqui.`,
                `Região: selecione seu país aqui. Isso decidirá em qual idioma os textos genéricos estarão no anúncio. (por exemplo, EUA -> os textos genéricos do anúncio estarão em inglês.)`,
              ],
            },
          ],
        },
        {
          title: `4. Preencha a seção Detalhes `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(18).png`,
              steps: [
                `Descrição: Você pode colocar informações gerais sobre o seu torneio aqui. (por exemplo, data e hora, modo de jogo, limite de jogadores, horário de check-in etc.) Essas informações serão exibidas no anúncio na parte superior do anúncio logo abaixo do título.`,
                `Regras: você pode colocar qualquer regra específica que queira adicionar ao seu torneio. (por exemplo, ban, limite de tempo, melhor de 3 etc.) Essas informações serão exibidas no anúncio logo abaixo de Descrição.`,
                `Prêmios: Você pode colocar suas informações sobre prêmios nesta seção. Seja o mais específico possível; os jogadores são sensíveis a prêmios e quantias em Reais. Esta informação será exibida no anúncio logo abaixo das Regras.`,
              ],
            },
          ],
        },
        {
          title: `6. Preencha a seção Plataforma `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(19).png`,
              steps: [
                `Escolher Plataforma: Escolha Discord`,
                `Servidor do Discord: Escolha o servidor em que você deseja anunciar seu torneio.`,
                `Cargos para Mencionar: Esse é o cargo que o torneio irá avisar quando for anunciado no Discord. `,
                `Mostrar para Cargos: Esse cargo será capaz de ver os anúncios do torneio e os canais sem ser mencionado. (O cargo recomendado é @everyone, ao menos que você deseja que o torneio seja privado.) `,
                `Visibilidade do Canal: Quando você cria chaves/ lobbies, o bot cria canais privados para jogadores registrados. O cargo que você selecionar aqui poderá ver esses canais privados. Portanto, selecione um cargo com o qual você (administrador do torneio) está marcado. Caso contrário, você não poderá ver os canais privados.`,
              ],
            },
          ],
        },
        {
          title: `4. Preencha a seção Configurações da Partida `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(20).png`,
              steps: [
                `Formato do Torneio: Isso já é decidido pelo jogo e formato de jogo que você selecionou na seção Informações Básicas.`,
                `Registro Solo (apenas para eventos de equipe): marque esta opção se desejar formar equipes aleatoriamente e não permitir equipes pré-combinadas.`,
                `Máximo de jogadores / equipes permitidos: selecione o máximo de times que você deseja permitir.`,
                `Número de Vencedores: Selecione o número de vencedores que você deseja. (1 ~ 3)`,
                `Check-in: Clique aqui se desejar ativar o processo de check-in para o seu torneio. Jogadores registrados devem fazer check-in para participar do evento`,
                `Tempo do check-in: esse tempo decidirá quanto tempo você dará antes do início do torneio. Há uma janela padrão de 10 minutos entre o check-in e a hora de início do torneio. Esta janela é ajustável. (por exemplo, se você selecionar 20 min, o processo de check-in começará 30 minutos antes do torneio e terminará 10 minutos antes da hora do torneio.)`,
                `Lista de espera: Marque esta opção se desejar ativar a lista de espera para o seu torneio. Quando desativado, você poderá receber jogadores até o máximo de jogadores / equipes que você selecionou acima.`,
                `Postar Resultados Automaticamente: Ao marcar isso, você está permitindo que os Bots controlem a verificação de resultados para cada rodada. (por exemplo, o Time 1 envia os resultados para o bot -> Bot pergunta ao Time 2 se o resultado é verdadeiro -> Se o Time 2 confirma ou não responde, o bot irá continuar o avanço do Time 1 , sem a necessidade de você de interferir.) Ao marcar isso, você verificará cada resultado da partida e avançará vencedores manualmente.`,
                `Permitir Equipe Incompleta (somente para eventos da equipe): Ao marcar esta opção, os jogadores serão capazes de registrar-se como uma equipe, mesmo se sua equipe não está completa. Isso é útil quando você deseja permitir que os líderes de equipe inscrevam sua equipe primeiro, a fim de salvar um lugar no torneio. Se estiver desligada, então o registro só será completo quando todos os membros de cada equipe tenham terminado a sua inscrição individual.`,
              ],
            },
          ],
        },
        {
          title: `8. Clique Criar para continuar `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(21).png`,
              steps: [
                `Clicando <i> Criar </i> não anuncia o torneio imediatamente. A ferramenta de torneio pergunta imediatamente se você deseja <i> Publicar </i> o torneio. <i> Fazer a Publicação </i> irá anunciar o torneio no seu servidor do Discord. Você pode sempre <i> Publicar </i> ele mais tarde ao clicar <i> Mais Tarde. </i>`,
                `Não deixe de revisar todas as informações antes de publicar seu torneio. Depois de publicado, você não poderá editar o anúncio.`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `tournament_dashboard`,
      title: `Painel de Controle do Torneio `,
      navSectionItems: [
        {
          title: `1. Depois que seu torneio for criado, você poderá vê-lo listado no Painel de Controle. `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(24).png`,
            },
          ],
        },
        {
          title: `2. Clique em um torneio para visualizar detalhes e jogadores registrados, gerenciar chaves e lobbies e enviar prêmios. (O recurso de prêmio está disponível apenas para torneios de parceiros game.tv no servidor do Discord BlueStacks.)`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(25).png`,
              steps: [
                `Editar: Você pode alterar qualquer informação que desejar usando este botão. Lembre-se de que a edição de informações na ferramenta não altera as informações já anunciadas no servidor do Discord.`,
                `Publicar / Cancelar Publicação: Se você criou apenas o seu torneio e ainda não o publicou, clique no botão Publicar para torná-lo ativo. Se você já publicou o seu torneio, mas deseja aguardar para obter um novos registros, clique em Cancelar publicação. ( Cancelar a publicação não removerá ou excluirá o anúncio no servidor do Discord.)`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `during_registration_period`,
      title: `Durante Período de Inscrições `,
      navSectionItems: [
        {
          title: `1. Durante esse período, usuários do Discord serão capazes de fazer a inscrição no canal  #tournament-lobby ao digitar o comando !register, se as inscrições estiverem abertas naquela hora. `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(26).jpg`,
            },
          ],
        },
        {
          title: `2. Assim que o comando '! Register' for inserido, os usuários receberão uma mensagem direta do Tourney Bot, solicitando mais informações sobre seu ID no jogo e nome da equipe.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(27).png`,
            },
          ],
        },
        {
          title: `3. Depois que o usuário responder ao Tourney Bot usando os comandos corretos no DM, ele receberá uma mensagem de conclusão do registro do Bot. (Se eles não receberam a mensagem de conclusão, não estão registrados para o torneio e devem tentar se registrar desde o início novamente.)`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(28).png`,
              steps: [
                `Assim que o processo de inscrição estiver concluído, o participante receberá um novo cargo; o nome do cargo é exatamente igual ao nome do seu torneio.`,
              ],
            },
          ],
        },
        {
          title: `4. Na medida que os usuários do Discord estão se registrando para o torneio, você poderá ver quantos usuários se inscreveram no seu torneio em nosso painel. Você também pode verificar seus nomes, remover jogadores ou remover equipes através dessa ferramenta.`,
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
          title: `5. Se o Check-In estiver ativado, o processo de check-in começará na hora que você definiu. (por exemplo, se você definir 30 minutos como horário de check-in, o processo de check-in começará 30 minutos antes do torneio.)`,
        },
        {
          title: `6. Tanto os usuários registrados e os que estão na lista de espera receberão uma solicitação de check-in do Tourney Bot por mensagem direta no Discord. Os usuários devem seguir as instruções do Tourney Bot e inserir o comando de check-in corretamente para se qualificarem para o evento.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(31).png`,
            },
          ],
        },
        {
          title: `7. Os usuários receberão uma mensagem de conclusão do check-in do Tourney Bot se digitarem o comando de check-in corretamente.`,
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
      title: `Coordenando Torneio - Competições em Chaves `,
      navSectionItems: [
        {
          title: `1. Existem 3 condições que permitem criar chaves para o seu torneio:`,
          innerContentList: [
            {
              steps: [
                `a. Seu torneio está cheio e você não permitiu a lista de espera.`,
                `b. Suas inscrições estão encerradas e você não ativou o processo de check-in.`,
                `c. Seu registro e check-in terminaram. (10 minutos antes da hora do torneio)`,
              ],
            },
          ],
        },
        {
          title: `2. Quando qualquer uma dessas 3 condições for atendida, você verá o botão Criar Chaves na aba Chaves. Clique nele para criar sua chave.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(33).png`,
            },
          ],
        },
        {
          title: `3. Assim que a chave for criada no painel do torneio, a mesma chave será anunciada no canal Discord, avisando todos participantes registrados no torneio.`,
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
          title: `4. Juntamente com o anúncio das chaves, o bot também criará canais privados para todas as partidas. Cada canal privado convida apenas os participantes da partida. Os participantes podem usar este canal privado para se comunicar entre si sobre sua partida (por exemplo, compartilhar o código da sala, compartilhar o ID do jogador) e informar o resultado. `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(36).png`,
            },
          ],
        },
        {
          title: `5. Os jogadores devem divulgar os resultados no canal privado, usando o comando ' !result <team name> '. A captura de tela deve ser anexada para que o comando !result seja registrado corretamente.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png`,
              steps: [
                `Depois que o resultado for enviado corretamente, o bot responderá com a confirmação.`,
              ],
            },
          ],
        },
        {
          title: `6. Depois que um resultado é enviado, um ponto vermelho aparecerá na partida para que você (administrador do torneio) possa ver que o resultado foi enviado.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(38).png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(39).png`,
              steps: [
                `Se a opção 'Publicar Resultados Automaticamente' estiver ativada, o bot receberá o primeiro resultado enviado como o resultado verdadeiro. Se nenhum novo resultado for enviado em 5 minutos, o bot avançará a equipe vencedora no envio do primeiro resultado.`,
                `Se a opção “Publicar Automaticamente Resultados” estiver desativada, você deverá examinar o arquivo anexado, verificar o resultado e avançar o vencedor manualmente. (ou seja, clique no vencedor e selecione Atualizar resultado.)`,
              ],
            },
          ],
        },
        {
          title: `7. Quando as chaves chegarem ao fim e o vencedor final for selecionado, o bot anunciará o vencedor no canal do torneio automaticamente.`,
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
      title: `Coordenando Torneio - Competições em Lobbies `,
      navSectionItems: [
        {
          title: `1. Existem 3 condições que permitem criar lobbies para o seu torneio:`,
          innerContentList: [
            {
              steps: [
                `a. Seu torneio está cheio e você não permitiu a lista de espera.`,
                `b. Suas inscrições estão encerradas e você não ativou o processo de check-in.`,
                `c. Seu registro e check-in terminaram. (10 minutos antes da hora do torneio)`,
              ],
            },
          ],
        },
        {
          title: `2. Quando qualquer uma dessas 3 condições for atendida, você verá o botão Criar Lobby na aba Lobby. Clique nele para criar seus lobbies.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(42).png`,
            },
          ],
        },
        {
          title: `3. Para cada lobby, clique no botão do menu de 3 linhas e, em seguida, clique em Criar Canal. Isso criará um canal privado do Discord para cada lobby, estritamente para os jogadores de cada lobby.`,
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
          title: `4. Se você (administrador do torneio) deseja enviar uma mensagem para cada lobby (por exemplo, código da sala e senha), pode usar o recurso Enviar mensagem disponível em cada lobby. O remetente será o Tourney(bot), por isso provavelmente chamará a atenção dos jogadores. Ou você pode enviar uma mensagem diretamente no canal digitando-a. (Você será quem envia ela neste caso.)`,
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
          title: `5. Se você não está criando cada partida para os jogadores, pode simplesmente atribuir um jogador em cada canal privado para criar uma sala de jogos e compartilhar código / senha.`,
        },
        {
          title: `6. Os jogadores podem divulgar os resultados no canal privado, usando o comando ' !result <team name> '. A captura de tela deve ser anexada para que o comando !result seja registrado corretamente.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png`,
              steps: [
                `Depois que o resultado for enviado corretamente, o bot responderá com a confirmação.`,
              ],
            },
          ],
        },
        {
          title: `7. Depois que um resultado é enviado, um ponto vermelho aparecerá na partida para que você (administrador do torneio) possa ver que o resultado foi enviado. Clique em Visualizar resultados para ver as capturas de tela enviadas.`,
          innerContentList: [
            {
              imageCaption: `Você não precisa aguardar o envio do resultado, se já o conhece. (ou seja, se você estava assistindo a partida, provavelmente já sabe o resultado.)`,
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(47).png`,
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(48).png`,
            },
          ],
        },
        {
          title: `8. Para selecionar o(s) vencedor(es) de cada lobby,`,
          innerContentList: [
            {
              imageCaption: `Clique no botão do menu de 3 linhas e, em seguida, clique no botão Gravar Pontuação.`,
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(49).png`,
              steps: [
                `Registre as pontuações dos jogadores de acordo com os resultados apresentados. (Jogadores vencedores devem obter pontuações mais altas.)`,
                `Para uma partida de várias rodadas, clique no botão Criar Rodada na parte inferior. Em seguida, registre mais pontuações de acordo com os resultados.`,
              ],
            },
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(50).png`,
              steps: [
                `Uma vez que a marcação estiver pronta, clique em Atualizar `,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `transferring_players`,
      title: `Transferindo Jogadores para Novos Lobbies `,
      navSectionItems: [
        {
          title: `1. Se você precisar fazer lobbies para um torneio em que os jogadores avançam / ou sejam transferidos para novos lobbies, você deve selecionar 'Eliminação' em Formato do Torneio.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(51).png`,
              steps: [
                `Contagens de Lobby: Quantos lobbies iniciais você deseja ter para as rodadas preliminares`,
                `Contagem de equipes: quantas equipes haverá para cada lobby`,
              ],
            },
            {
              imageCaption: `<i> * Se você criar um torneio de Lobby Único ou Múltiplos Lobbies, não terá a opção de criar novos lobbies e, portanto, não poderá mover / avançar jogadores para novos lobbies. Como você pode ver no exemplo abaixo (torneio Múltiplos Lobbies), o botão '+' para criar um novo lobby está ausente. </i>`,
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(52).png`,
            },
          ],
        },
        {
          title: `2. Se “Eliminação” estiver selecionada como seu formato de torneio, você verá uma opção para criar um novo lobby além das contagens iniciais de lobby que você selecionou.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(53).png`,
            },
          ],
        },
        {
          title: `3. Enquanto seus lobbies iniciais ainda estiverem ativos, clique no botão '+' para criar um novo lobby. Este novo lobby é onde você estará avançando / transferindo seus jogadores para a próxima rodada.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(54).png`,
              steps: [
                `O novo lobby deverá estar vazio quando você criar ele. `,
                `Se você precisar criar vários novos lobbies, basta clicar no botão '+' novamente.`,
              ],
            },
          ],
        },
        {
          title: `4. Para avançar / transferir jogadores para o novo lobby, você deve primeiro terminar os lobbies existentes. (Por favor consulte <a href='how-to-use-tourney?tab=tournament-lobbied-competition'> Finalizando Torneio - Competição com Lobbies </a> para ver como encerrar um lobby). Uma vez que você encerrar os seus lobbies, clique no botão 'Editar Lobby' em seu novo lobby. `,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(55).png`,
              steps: [
                `<i> * Por favor, TENHA CUIDADO para não terminar o torneio inteiro! Quando você encerra todos os lobbies, a ferramenta exibe uma janela pop-up, perguntando se você deseja encerrar o torneio. Se você terminar o seu torneio, NÃO poderá transferir jogadores ou adicionar novos lobbies. </i>`,
              ],
            },
          ],
        },
        {
          title: `5. Selecione um lobby do qual você deseja mover jogadores.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(56).png`,
              steps: [
                `Você pode clicar em Adicionar Lobby para transferir de vários lobbies. `,
                `Neste exemplo, apenas o Lobby 1 e o Lobby 2 são finalizados. O lobby 3 ainda está ativo. É por isso que você vê apenas os Lobby 1 e 2 como opções.`,
              ],
            },
          ],
        },
        {
          title: `6. Selecione a(s) posição(ões) dos jogadores que você deseja mover.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(57).png`,
              steps: [
                `Você pode selecionar várias posições.`,
                `A posição refere-se à colocação do jogador após o término do lobby. (Posição 1 = 1º jogador / time nesse lobby)`,
                `Por exemplo, se você quiser avançar os 2 melhores jogadores do Lobby 1, selecione as posições 1 e 2`,
              ],
            },
          ],
        },
        {
          title: `7. Depois de selecionar os jogadores que deseja transferir, clique no botão Salvar. Transferência Completa!`,
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
      title: `Finalizando Torneio - Competições em Chaves `,
      description: `Seu torneio terminará automaticamente assim que o vencedor final for selecionado na aba Chaves.`,
    },
    {
      id: `ending_a_tournament_lobbied_competition`,
      title: `Finalizando Torneio - Competições em Lobbies`,
      navSectionItems: [
        {
          title: `1. Depois que todos os lobbies forem atualizados com pontuações e vencedores corretos, clique no botão do menu de 3 linhas e, em seguida, clique no botão Finalizar Lobby para cada lobby. Faça isso para todos os lobbies. (É uma boa prática encerrar o lobby assim que ele for atualizado. Você não poderá mover jogadores se o lobby não terminar.)`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(59).png`,
            },
          ],
        },
        {
          title: `2. Quando todos os lobbies terminarem, a ferramenta game.tv informará que seu torneio será encerrado e que os resultados serão publicados.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(60).png`,
              steps: [
                `Se você deseja terminar o torneio e publicar resultados, clique em <i> Continuar </i>`,
                `Se você deseja não terminar o torneio nem publicar resultados, clique em <i> Fechar. </i> (Seu torneio não terminará e os resultados não serão publicados.)`,
                `Haverá uma opção para encerrar o torneio e publicar os resultados se você escolher <i> Fechar. </i>`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `sending_prizes_to_winners`,
      title: `Enviando Prêmios aos Vencedores `,
      description: `<p><i>** esse recurso está disponível apenas para parceiros da game.tv que estão organizando torneios nos servidores do Discord da BlueStacks.</i></p>`,
      navSectionItems: [
        {
          title: `1. Depois que os vencedores forem selecionados e o torneio terminar corretamente, você poderá ver os vencedores listados na aba Prêmios.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(61).png`,
            },
          ],
        },
        {
          title: `2. Basta preencher as informações de cada vencedor.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(62).png`,
              steps: [
                `Certifique-se de verificar a preferência do prêmio com seus vencedores (por exemplo, países, tipo de prêmio etc.)`,
                `Algumas opções podem não estar disponíveis para determinadas áreas geográficas. Para ver todas as opções de prêmios disponíveis, visite<a href='https://www.seagm.com/'>https://www.seagm.com/</a>`,
                `Você pode configurar vários prêmios para cada vencedor. (por exemplo, para o prêmio de US $ 20 do Google Play (EUA), você precisará configurar dois dos prêmios de US $ 10 do Google Play (EUA).)`,
                `(Para a América do Norte em geral) estamos abertos a gastar $4 a mais para encontrar um opção/quantidade adequada de prêmio. Para Steam, <div class='inner-content'> - Para $5 / $10, por favor utilize Steam (Hong Kong) 40 HKD / 80 HKD respectivamente. <br> Para $20 / $25, por favor utilize Steam (Malásia) RM 80 / RM 100 respectivamente. </div>`,
              ],
            },
          ],
        },
        {
          title: `3. Depois que todas as informações forem preenchidas corretamente, clique no botão Enviar prêmio`,
          innerContentList: [
            {
              steps: [
                `Isso enviará uma solicitação de distribuição de prêmios para o administrador da game.tv. Eles revisarão as informações do prêmio e aprovarão ou rejeitarão a solicitação.`,
                `Depois que a solicitação for aprovada, os vencedores receberão um DM do Tourney Bot que contém códigos de gift cards. Você também verá que a entrega foi concluída na aba Prêmios.`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: `cloning_existing_tournaments`,
      title: `Clonando Torneios Existentes `,
      description: `<p>Ao clonar torneios existentes, o host dos torneios pode duplicar facilmente torneios do mesmo formato repetidas vezes, sem precisar configurar detalhes a cada vez. <i><br />* Você não pode clonar um torneio e mudar seu modo de torneio: lobby x chaves. </i></p>`,
      navSectionItems: [
        {
          title: `1. Encontre um torneio que você deseja duplicar no seu painel. No lado direito do torneio, clique no botão do menu de 3 pontos.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(63).png`,
              steps: [
                `Se você já terminou o torneio, os botões Editar e Pausar não estarão disponíveis. `,
                `Se você já limpou o torneio, o botão Limpar não estará disponível.`,
              ],
            },
          ],
        },
        {
          title: `2. Clique em <i> Clonar </i>. Uma nova tela será exibida onde você precisará inserir algumas informações mínimas.`,
          innerContentList: [
            {
              imageUrl: `https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(64).png`,
              steps: [
                `Nome do Torneio: Não será transferido do torneio existente. Você terá que inserir um novo nome para o torneio`,
                `Servidor do Discord: Isso será transferido do torneio existente. Escolha um servidor diferente se você deseja duplicar o torneio existente para outro servidor.`,
                `Jogo: Os modos de jogo serão transferidos do torneio existente. Personalize a configuração se desejar alterar.`,
                `Horário: O horário não será transferido do torneio existente. Você precisará inserir um novo horário. `,
                `Prêmios: As informações do prêmio serão transferidas do torneio existente. Edite se você deseja alterar.`,
                `Stream: Isso será transferido do torneio existente. Edite se você deseja alterar.`,
                `Configuração Avançada: se você quiser alterar outros detalhes da configuração, clicar aqui levará às opções de configuração originais.`,
              ],
            },
          ],
        },
      ],
    },
  ],
};
