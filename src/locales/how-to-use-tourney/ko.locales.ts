import { IHowToUseTourneyLocale } from '@app/abstractions';
// tslint:disable: quotemark
export const HowToUseTourneyLocaleKorean: IHowToUseTourneyLocale = {
  metadata: {
    title: 'Game.tv - Tourney를 사용하는 방법',
    description: '커뮤니티를 위해 Tourney 사용하는법 배우기',
  },
  navigationSections: [
    {
      id: 'create_new_accoutn',
      title: '새로운 계정 생성',
      isActive: true,
      navSectionItems: [
        {
          title:
            '1. (이 단계는 game.tv 파트너 전용입니다. 자체 서버에서 토너먼트를 작성하는 경우 2단계로 건너뛰어 주십시오.) game.tv에 디스코드 닉네임과 사용자 ID를 공유합니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0.jpg',
              imageCaption:
                '디스코드 닉네임은 4자리 숫자 태그가 포함되어야 합니다.',
              steps: [
                "디스코드 ID : 이곳에서 유저 ID를 찾는 법을 확인하십시오 <a href='https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-'>https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-</a>",
                'game.tv 관리자가 토너먼트를 생성하기 위해 계정이 설정되었는지 확인합니다.',
              ],
            },
          ],
        },
        {
          title:
            "2. <a href='https://esports.game.tv/nimda'>https://esports.game.tv/nimda</a>를 방문하십시오",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(1).png',
              imageCaption: '“디스코드로 로그인” 클릭하기',
            },
            {
              imageCaption: '"권한 부여" 클릭하기',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(2).png',
            },
          ],
        },
      ],
    },
    {
      id: 'setting_up_tourney',
      title: '디스코드 서버에 Tourney 봇을 설정합니다 ',
      navSectionItems: [
        {
          title: '1. 왼쪽 메인 메뉴에서 "토너먼트 생성" 버튼을 클릭합니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. 토너먼트 템플릿 페이지에서, 토너먼트를 진행할 게임을 찾아 사용자지정으로 진행합니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title:
            '3. 사용자 지정 토너먼트 페이지에서 다른 서버 링크를 추가하기를 클릭하세요.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(5).png',
            },
          ],
        },
        {
          title:
            '4. 브라우저가 나타나고 봇을 추가할 서버를 선택하라는 디스코드 UI가 표시됩니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(6).png',
              steps: [
                '사용자가 관리자인 서버만 드롭다운 메뉴에 표시됩니다',
                '서버에 설치하고자 하는 봇을 선택하고, 권한부여를 클릭하십시오.',
              ],
            },
          ],
        },
        {
          title:
            '5. 올바르게 승인되면, 동일한 브라우저에 확인 화면이 나타납니다. 이제 Tourney 봇이 디스코드 서버에 설치되었습니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(7).png',
            },
          ],
        },
        {
          title: '6. 디스코드 서버를 확인하여 봇이 설치되었는지 확인합니다.',
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
      title: 'Tourney AI 모드',
      description:
        '<p>“Tourney AI” 모드는 Tourney AI 봇 생성, 실행, 자신만의 토너먼트 실행을 허용합니다!</p> <p><i>** 해당 모드는 서버 관리자만 이용 가능합니다. 다른 토너먼트 진행은 이 모드에 접근할 수 없습니다. </i></p> <p><i>** 대진표 모드 게임은 AI 모드만 가능합니다. (PUBG M, Free Fire 제외)</i></p>',
      navSectionItems: [
        {
          title:
            '1. 귀하의 대시보드에, Tourney AI 버튼이 있습니다. 클릭하십시오.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(9).png',
            },
          ],
        },
        {
          title:
            '2. 봇 설정 페이지의 드롭다운 메뉴에서 먼저 서버를 선택합니다. 그런 다음 AI 활성화를 클릭합니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(10).png',
              steps: [
                'Tourney 봇이 아직 설치되지 않은 경우 여기에 서버 추가를 선택하여 서버에 Tourney bot을 추가할 수 있습니다.',
                'AI 활성화 버튼을 클릭하면 새 메뉴가 열립니다.',
              ],
            },
          ],
        },
        {
          title: '3. 운영자 설정',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(11).png',
              steps: [
                '모드 운영자 : 서버에서 토너먼트를 할 수 있는 운영자가 여기에 리스트됩니다. 각 운영자는 서로 다른 설정을 가질 수 있습니다. 사용할 운영자를 선택합니다.',
                '언급할 역할 : 이 섹션에서는 AI 토너먼트 게임마다 어떤 역할을 지정해야 하는지 AI 봇에게 알려야 합니다. 역할을 선택하지 않으면, 원하지 않는 사람에게도 AI 봇이 @everyone 에게 알릴 것입니다.',
                '경기 채널 : 프라이빗 토너먼트 채널에 대한 스트리밍 등의 역할을 선택합니다.',
              ],
            },
          ],
        },
        {
          title: '4. 게임 설정',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(12).png',
              steps: [
                '자동 선택 활성화 : 이 기능을 켜면 AI 봇이 일일히 내가 지정을 하지 않아도 되도록 서버에 가장 인기 있는 게임을 결정합니다.',
                '자동 선택 활성화가 꺼져 있으면 서버에서 토너먼트를 할 게임을 선택하면 됩니다. AI 봇은 선택된 게임 풀 내에서만 토너먼트를 실행합니다.',
              ],
            },
          ],
        },
        {
          title: '5. 스케줄 설정',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(13).png',
              steps: [
                '자동 시간 선택 : 이 기능을 켜면 AI 봇이 가장 많은 참가자를 유치할 시간을 결정하고, 그 무렵 토너먼트를 시작합니다.',
                '자동으로 시간 선택을 해제한 경우, AI 봇이 토너먼트를 시작할 시간 범위를 선택합니다. AI 봇은 선택된 시간 범위 내에 토너먼트를 시작할 것입니다.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'discord_commands',
      title: '전체 디스코드 명령 목록',
      navSectionItems: [
        {
          title: '1. 토너먼트 로비에서 사용 가능합니다.',
          innerContentList: [
            {
              steps: [
                '<strong>!register</strong> : 토너먼트에 참여할 수 있는 등록 프로세스가 시작됩니다. 토너먼트 플레이어 등록이 시작된 후에만 사용할 수 있습니다.',
                '<strong>!unregister</strong> :  토너먼트 등록과 팀에서 등록된 사항이 전부 취소됩니다.',
                '<strong>!timer</strong> : 토너먼트 과정의 다음 단계와 그 단계까지 얼마나 많은 시간이 남았는지 알 수 있습니다.',
                '<strong>!myteam</strong> : 팀 구성원과 등록 상태를 알 수 있습니다.',
              ],
            },
          ],
        },
        {
          title: '2. Tourney 봇과 DM 활성화',
          innerContentList: [
            {
              steps: [
                "<strong>!createteam</strong> <b class='highlight'><team name> <ingame username></b> :  새 팀이 만들어지고 등록됩니다. 팀 코드를 팀원에게 공유하고 팀원이 합류될 수 있게 합니다.",
                "<strong>!jointeam</strong> <b class='highlight'><team code> <ingame username></b> : 팀장이 만든 기존 팀에 들어가게 됩니다.",
                "<strong>!joinsolo</strong> <b class='highlight'><ingame username></b> : 팀원 없이 혼자 토너먼트에 등록됩니다.",
                "<strong>!checkin</strong> <b class='highlight'><code provided></b> : 체크인이 허용된 토너먼트에서 활성화 되며, 체크인 시간에 명령어 입력시 체크인이 됩니다. 시간내에 반드시 등록을 완료하여야 합니다.",
              ],
            },
          ],
        },
        {
          title: '3. 게임 로비 활성화',
          innerContentList: [
            {
              steps: [
                "<strong>!result</strong> <b class='highlight'><team name></b> : 토너먼트 결과를 봇에 제출하는 방법입니다. 명령어와 함께 게임 승리한의 스크린샷을 첨부해야 합니다.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'create_new_tournament',
      title: '새로운 토너먼트 생성',
      description:
        '<i>단계 1)~2) 디스코드 서버에 대한 Tourney 봇 설정 섹션에 나와 있는 것과 정확히 동일합니다. 이러한 단계를 이미 수행한 경우 3) 단계로 건너뛸 수 있습니다.</i>',
      navSectionItems: [
        {
          title: '1. 왼쪽의 메인 메뉴에서 "토너먼트 생성" 버튼을 클릭합니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            '2. 토너먼트 템플릿 페이지에서, 토너먼트 생성하기 원하는 게임을 찾아 사용자지정을 클릭하십시오.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title:
            '3. “사용자 지정 토머먼트”페이지에서, 맨 아래로 스크롤하고 고급 설정을 선택합니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(15).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(16).png',
              steps: [
                '이 작업을 확인하라는 메시지가 표시됩니다. 진행을 선택하기만 하면 됩니다.',
              ],
            },
          ],
        },
        {
          title: '4. 기본 정보 섹션 입력하기',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(17).png',
              steps: [
                '토너먼트 이름 : 토너먼트 이름을 입력합니다. 디스코드에 카테고리 제목으로 표시됩니다. 이모티콘이 허용되며 영문은 대문자로 표시됩니다.',
                '게임: 게임을 선택한 다음, 게임 형식을 선택합니다. (예: PUBG M -> 듀오) 이렇게 하면 토너먼트가 등급이 지정된 토너먼트가 될 것인지 아니면 로비가 있는 토너먼트가 될 것인지를 결정합니다.',
                '경기 예약 : 등록 시작 시간, 등록 종료 시간, 토너먼트 시작 시간을 선택합니다. 이 날짜는 토너먼트 공지의 맨 아래에 표시됩니다. <div class=\'inner-content\'> <p>등록 시작 시간 : 플레이어가 디스코드 채널에서 토너먼트에 등록을 시작할 수 있습니다. 이 시간 전에는 플레이어를 등록할 수 없으며 "!register" 명령은 채널에서 작동하지 않습니다.</p> <p>등록 종료 시간 : 이 시간이 지나면 플레이어들은 더 이상 등록할 수 없게 됩니다. 토너먼트 등록시간은 반드시 10분 이상이어야 합니다. 체크인은 등록이 종료된 후에만 시작할 수 있습니다. 또한 등록이 끝난 후에만 대진표나 로비를 만들 수 있습니다.</p> <p>토너먼트 시작 시간 : 이시간이야말로 당신의 토너먼트가 시작되는 시간입니다.</p> </div>',
                '스트리밍 : 혹시 스트리머인가요? 그럼 바로 채널 링크를 추가해보세요. 대회 공지와 함께 스트리밍 채널이 홍보됩니다. "링크 활성화"를 클릭하고 링크를 넣어주세요.',
                '지역 : 귀하의 국가를 선택하십시오. 이 경우 공지사항에 기본 텍스트로 보여질 언어가 결정됩니다. (예: USA -> 공지사항의 기본 텍스트는 영어로 표시됩니다.) ',
              ],
            },
          ],
        },
        {
          title: '5. 세부사항 섹션을 작성합니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(18).png',
              steps: [
                '설명 : 토너먼트에 대한 일반적인 정보를 여기에 넣을 수 있습니다. (예시 : 날짜와 시간, 게임 모드, 플레이어 제한, 체크인 시간 등) 이 정보는 제목 바로 아래의 공지사항 상단에 표시됩니다.',
                '규칙 : 해당 토너먼트에 추가하고 싶은 특정 규칙을 넣을 수 있습니다. (예시. 금지, 시간 제한, 강퇴사유 등.) 이 정보는 아래 설명에 보여집니다.',
                '상품 : 이 섹션에 상금 및 보상 정보를 넣을 수 있습니다. 가능한 한 구체적으로 설명해주세요; 선수들은 상품과 액수에 매우 민감합니다. 이 정보는 규칙 바로 아래의 공지사항에 표시됩니다.',
              ],
            },
          ],
        },
        {
          title: '6. 플랫폼 섹션을 작성합니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(19).png',
              steps: [
                '플랫폼 선택하기 : 디스코드 선택하기',
                '디스코드 서버 : 토너먼트를 발표할 서버를 선택하십시오.',
                '언급할 역할: 디스코드에서 발표될 때 토너먼트가 공지해야할 역할입니다.',
                '역할 보여주기 : 이 역할은 토너먼트 발표와 채널에 고정없이 볼 수 있습니다. (프라이빗 토너먼트를 만들기 원하지 않으면 권장되는 역할은 @everyone 입니다.)',
                '채널 보여주기 : 대진표/로비를 만들면 봇이 등록된 플레이어의 프라이빗 채널을 만듭니다. 여기서 선택하는 역할은 이러한 프라이빗 채널을 볼 수 있습니다. 그러면 토너먼트 관리자가 태그할 역할을 선택합니다. 그렇지 않으면 프라이빗 채널을 볼 수 없습니다.',
              ],
            },
          ],
        },
        {
          title: '7. 경기 설정 섹션을 작성합니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(20).png',
              steps: [
                '토너먼트 형식 : 기본 정보 섹션에서 선택한 게임 및 게임 형식에 따라 사전에 결정됩니다.',
                '솔로 등록(팀 이벤트만 해당) : 사전에 미리 팀을 짜는 것이아니라 랜덤으로 등록된 플레이어들을 팀으로 묶어서 진행할 경우 선택해 주세요.',
                '최대 플레이어/허용된 팀 : 허용할 최대 팀을 선택합니다.',
                '우승자 수 : 원하는 우승자 수를 선택하세요. (1~3)',
                '체크인 : 토너먼트에 체크인 기능을 넣을 수 있습니다. 토너먼트 시작전에 플레이어들이 전부 와있는지 확인하는 기능이며, 이는 플레이어들이 직접 시간내에 명령어를 통해 체크인을 해야합니다.',
                '체크인 시간 : 이 시간에는 토너먼트가 시작하기 전에 체크인 시간을 얼마나 허용할지가 결정됩니다. 체크인 시간과 토너먼트 실제 시작시간 사이에는 최소 10분간의 텀이 있습니다. (예: 20분을 선택하면 실제 토너먼트 시작 30분 전부터 체크인이 가능하고, 토너먼트 10분전에 마감됩니다.) ',
                '대기 리스트 : 토너먼트의 대기 리스트 만들 수 있습니다. 기존 참가자가 토너먼트 당일에 참여하지 않는 경우 순서대로 대기 리스트에 있는 참가자를 토너먼트에 참여시킵니다. 설정하지 않을 경우 먼저 결정한 최대 플레이어/팀까지만 플레이에 참여할 수 있습니다.',
                '자동으로 결과 게시: 각 라운드의 결과 확인을 봇이 대신할 수 있습니다. (예시. 팀1이 결과를 봇에게 제출한다. -> 봇은 결과가 맞는지 팀2에게 물어본다. -> 팀2가 확인해 주거나, 응답하지 않으면, 봇은 팀1에게 확인 요청을 한다) . 만약 설정하지 않을 경우 수동으로 우승자를 확인하고 선발합니다.',
                '완료되지 않은 팀 허용(팀 이벤트에 한해 지원) : 팀원이 전부 차지 않아도 플레이어가 팀전에 등록할 수 있습니다. 이 경우 팀을 먼저 토너먼트에 등록해 두고 팀원을 받는 형식으로 토너먼트 신청을 빠르게 진행 할 수 있습니다. 기능이 비활성화 될 경우 모든 팀 구성원이 팀으로 구성되고 난 후에 토너먼트에 팀을 등록할 수 있습니다.',
              ],
            },
          ],
        },
        {
          title: '8. 계속하려면 생성을 클릭하십시오',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(21).png',
              steps: [
                '생성을 <i>클릭해도</i> 토너먼트가 즉시 공지되지 않습니다. 토너먼트 도구는 토너먼트를 <i>공지할지 여부를 </i> 즉시 묻습니다. <i>공지는</i> 디스코드 서버에 토너먼트가 표시됩니다. 나중에 <i>공지</i>를 원하면 <i>나중에</i>를 클릭하십시오.',
                '토너먼트를 공지하기 전에 모든 정보를 검토해야 합니다. 공지되면 공지사항을 편집할 수 없습니다.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'tournament_dashboard',
      title: '토너먼트 대시보드',
      navSectionItems: [
        {
          title:
            '1. 토너먼트가 만들어지면 대시보드에 나열된 토너먼트를 볼 수 있습니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(24).png',
            },
          ],
        },
        {
          title:
            '2. 토너먼트 세부사항과 등록된 플레이어를 보고, 대진표와 로비를 관리하고 상품을 보낼 수 있습니다. (수상 기능은 BlueStacks 디스코드 서버 game.tv 파트너 토너먼트만 가능합니다.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(25).png',
              steps: [
                '편집 : 이 버튼을 사용하여 원하는 정보를 변경할 수 있습니다. 도구의 정보를 편집해도 디스코드 서버에서 이미 발표된 정보는 변경되지 않습니다.',
                '등록/등록 취소 : 토너먼트를 만들고 아직 공지하지 않은 경우, 등록 버튼을 클릭하여 라이브로 만들 수 있습니다. 토너먼트를 이미 공지했지만 새 등록 취소를 보류하려면, 공지 취소를 클릭하여 등록 취소를 할 수 있습니다. (등록 취소는 디스코드 서버에서 알림을 제거하거나 삭제하지 않습니다).',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'during_registration_period',
      title: '등록 기간 동안',
      navSectionItems: [
        {
          title:
            '1. 이 기간 동안 디스코드 사용자 등록이 열려 있는 경우 "!register" 명령을 입력하여 #tournam-lobby 채널에 등록할 수 있습니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(26).jpg',
            },
          ],
        },
        {
          title:
            '2. "!register" 명령을 입력하는 즉시, 사용자는 Tourney 봇으로부터 자신의 ID와 팀 이름에 대한 자세한 정보를 요청하는 직접 메시지를 받게 됩니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(27).png',
            },
          ],
        },
        {
          title:
            '3. 사용자가 DM에서 올바른 명령을 사용하여 Tourney 봇에 다시 응답하면, 봇으로부터 등록 완료 메시지를 받게 됩니다. (완료 메시지가 수신되지 않은 경우, 토너먼트에 등록되지 않은 상태로 처음부터 다시 등록해야 합니다.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(28).png',
              steps: [
                '등록 절차가 완료되는 즉시 참가자는 새로운 역할을 받게 됩니다. 역할의 이름은 토너먼트 이름과 정확히 동일합니다.',
              ],
            },
          ],
        },
        {
          title:
            '4. 디스코드 사용자가 토너먼트에 등록할 때 대시보드에서 얼마나 많은 사용자가 토너먼트에 등록했는지 확인할 수 있습니다. 또한 이름을 확인하거나, 플레이어를 제거하거나, 이 도구에서 팀을 제거할 수도 있습니다.',
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
            '5. 체크인이 켜져 있으면 설정한 시간에 체크인 프로세스가 시작됩니다 (예. 체크인 시간으로 30분을 설정하면 토너먼트 30분 전에 체크인 절차가 시작됩니다.)',
        },
        {
          title:
            '6. 등록된 사용자와 대기자 명단 사용자 모두 디스코드의 DM을 통해 Tourney 봇으로부터 체크인 요청을 받게 됩니다. 토너먼트 참여 자격을 얻으려면 Tourney 봇의 지시와 입력 체크인 명령을 올바르게 따라야 합니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(31).png',
            },
          ],
        },
        {
          title:
            '7. 체크인 명령을 올바르게 입력하면 Tourney 봇에서 체크인 완료 메시지가 표시됩니다.',
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
      title: '토너먼트 조정 - 경쟁 대진표',
      navSectionItems: [
        {
          title:
            '1. 토너먼트에 맞는 대진표를 만들 수 있는 조건은 다음과 같습니다.',
          innerContentList: [
            {
              steps: [
                'a. 토너먼트를 진행할 참가자가 충분하고, 대기자 명단도 허용하지 않았습니다.',
                'b. 등록이 종료되었으며 체크인 프로세스를 활성화하지 않았습니다.',
                'c. 토너먼트의 등록 & 체크인 모두 종료되었습니다. (토너먼트 시간 10분 전입니다.)',
              ],
            },
          ],
        },
        {
          title:
            '2. 이 세 가지 조건 중 하나가 충족되면, 대진표 탭 아래에 대진표 생성 버튼이 표시됩니다. 대진표를 만들려면 클릭하십시오.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(33).png',
            },
          ],
        },
        {
          title:
            '3. 토너먼트 도구에 대진표가 생성되는 즉시 디스코드 채널에서 대진표가 발표되며, 등록된 모든 토너먼트 참가자에게 공지됩니다.',
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
            '4. 대진표 발표와 함께, 봇도 모든 라이브 매치 전용 채널을 만들 예정입니다. 각 프라이빗 채널은 경기 참가자만 초대합니다. 참가자는 이 프라이빗 채널을 사용하여 서로 경기(즉, 룸 코드 공유, 플레이어 ID 공유)에 대해 이야기하고 결과를 보고할 수 있습니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(36).png',
            },
          ],
        },
        {
          title:
            '5. 플레이어는 프라이빗 채널에서 “!result 명령을 이용해 <team name>” 반드시 결과를 제출해야 합니다. !result 명령을 올바르게 등록하려면 반드시 스크린샷이 첨부되어야 합니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: ['결과가 올바르게 제출되면 봇이 확인과 함께 응답합니다.'],
            },
          ],
        },
        {
          title:
            '6. 결과가 제출되면, 빨간색 점이 경기에 나타나게 되고 토너먼트 관리자는 결과가 제출되었음을 확인할 수 있습니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(38).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(39).png',
              steps: [
                '"자동으로 결과 게시"가 켜져 있는 경우, 봇은 첫 번째 결과를 실제 결과로 간주합니다. 5분 안에 새로운 결과가 제출되지 않으면 봇이 1차 결과 제출에서 우승팀을 공지합니다.',
                '"결과 자동 게시"가 꺼져 있으면 첨부된 파일을 보고 결과를 확인한 다음 승자를 수동으로 진행해야 합니다. (즉, 승자를 클릭한 다음 결과 업데이트를 선택하십시오.)',
              ],
            },
          ],
        },
        {
          title:
            '7. 대진표가 끝에 도달하여 최종 우승자를 선택하면 봇이 토너먼트 채널에서 우승자를 자동으로 발표합니다.',
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
      title: '토너먼트 조정 - 로비 버전',
      navSectionItems: [
        {
          title:
            '1. 토너먼트를 위한 로비를 만들 수 있는 세 가지 조건이 있습니다:',
          innerContentList: [
            {
              steps: [
                'a. 토너먼트 참여 인원이 가득 찼고, 대기자 명단도 허용하지 않았습니다.',
                'b. 등록이 종료되었으며 체크인 프로세스를 활성화하지 않았습니다.',
                'c. 귀하의 등록 & 체크인 모두 종료되었습니다. (토너먼트 시간 10분 전입니다)',
              ],
            },
          ],
        },
        {
          title:
            '2. 이 세 가지 조건 중 하나가 충족되면 로비 탭 아래에 로비 작성 버튼이 표시됩니다. 로비를 만들려면 클릭하세요.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(42).png',
            },
          ],
        },
        {
          title:
            '3. 각 로비에 대해 3줄 메뉴 버튼을 클릭한 다음 채널 생성을 클릭합니다. 이렇게 하면 각 로비에서 플레이어를 위한 전용 디스코드 채널이 만들어집니다.',
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
            '4. 토너먼트 관리자 각 로비에 메시지를 보내고 싶은 경우 (즉. 경기 코드와 비밀번호) 각 로비에 메세지 기능을 사용해 보낼 수 있습니다. 전송자는 Tourney(봇)입니다. 혹은 직접 작성하여 즉시 메시지를 보낼수 있습니다. (이 경우 보내드립니다.)',
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
            '5. 플레이어 경기를 생성하지 않을 경우, 각 프라이빗 채널에 플레이어를 할당하여 게임룸을 만들고 코드/비밀번호를 공유할 수 있습니다.',
        },
        {
          title:
            '6. 플레이어는 "!result <team name>” 명령을 사용하여 프라이빗 채널에 결과를 보고할 수 있습니다. !result 명령을 올바르게 등록하려면 스크린샷을 첨부해야 합니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: ['결과가 올바르게 제출되면 봇이 확인과 함께 응답합니다.'],
            },
          ],
        },
        {
          title:
            '7. 결과가 제출되면, 시합에 빨간색 점이 나타나서, 토너먼트 관리자가 결과가 제출되었음을 확인할 수 있습니다. 결과 보기를 클릭하여 제출된 스크린샷을 봅니다.',
          innerContentList: [
            {
              imageCaption:
                '결과를 이미 알고 있는 경우에는 결과 제출을 기다릴 필요가 없습니다. (예시: 경기를 관람하고 있다면, 결과를 이미 알고 있을 것입니다.)',
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
          title: '8. 각 로비에서 우승자를 선택하기 위해, ',
          innerContentList: [
            {
              imageCaption:
                '3줄 메뉴 버튼을 클릭한 다음, 점수 기록 버튼을 클릭하십시오.',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(49).png',
              steps: [
                '제출된 결과에 따라 플레이어 점수를 기록합니다. (승리한 선수들은 더 높은 점수를 받아야 합니다.)',
                '멀티 라운드 매치에 대해, 하단의 라운드 생성 버튼을 클릭합니다. 그런 다음 결과에 따라 더 많은 점수를 기록합니다.',
              ],
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(50).png',
              steps: ['기록이 완료되면, 업데이트를 클릭하십시오.'],
            },
          ],
        },
      ],
    },
    {
      id: 'transferring_players',
      title: '플레이어를 새 로비로 이전합니다.',
      navSectionItems: [
        {
          title:
            '1. 참가자들이 새 로비에 진출하는 토너먼트에 참가를 해야 할 경우, 토너먼트 형식에서 "제거"를 선택해야 합니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(51).png',
              steps: [
                '로비 카운트 : 예비 라운드에 사용할 초기 로비를 몇 개나 여시겠습니까?',
                '팀 카운트 : 각 로비마다 몇 개의 팀이 있을 예정입니까',
              ],
            },
            {
              imageCaption:
                '<i>* 싱글 로비 또는 멀티 로비 토너먼트를 만들 경우, 새로운 로비를 만들 수 없으므로 플레이어를 새로운 로비로 옮길 수 없습니다. 아래 예시(멀티 로비 토너먼트)에서 볼 수 있듯이, 새로운 로비를 만들 수 있는 "+" 버튼이 없습니다. </i>',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(52).png',
            },
          ],
        },
        {
          title:
            '2. "제거"를 토너먼트 형식으로 선택한 경우, 선택한 초기 로비 카운트와 함께 새 로비를 작성하는 옵션이 표시됩니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(53).png',
            },
          ],
        },
        {
          title:
            '3. 초기 로비가 여전히 라이브 상태이면, “+”버튼을 클릭하여 새로운 로비를 생성하십시오. 새로운 로비는 플레이어의 새 라운드 이동에 도움이 될 것입니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(54).png',
              steps: [
                '새 로비를 만들 때는 비어 있어야 합니다.',
                '여러 개의 새 로비를 만들어야 하는 경우 "+" 버튼을 다시 클릭하기만 하면 됩니다',
              ],
            },
          ],
        },
        {
          title:
            '4. 플레이어를 새 로비로 전송하려면, 먼저 기존 로비를 종료해야 합니다. (토너먼트를 종료하려면 다음을 참조하십시오<a href=\'how-to-use-tourney?tab=tournament-lobbied-competition\'> 로비 버전</a> 섹션 로비를 끝내는 방법) 귀하의 로비를 끝내면, 새로운 로비에서 "로비 편집" 버튼을 클릭하십시오.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(55).png',
              steps: [
                '<i>* 전체 토너먼트가 종료되지 않도록 주의해 주십시오! 모든 로비를 끝내면, 이 도구는 토너먼트를 종료할 것인지 묻는 팝업창을 제공합니다. 토너먼트를 마치면 선수를 옮기거나 새 로비를 추가할 수 없습니다.</i>',
              ],
            },
          ],
        },
        {
          title: '5. 플레이어를 이동할 로비를 선택합니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(56).png',
              steps: [
                '로비 추가를 클릭하여 여러 로비에서 대량 전송을 수행할 수 있습니다.',
                '이 예시에서는, 로비 1과 로비 2만 종료됩니다. 로비 3은 아직 라이브 상태입니다. 그래서 로비 1 & 2만 옵션에서 보이는 것입니다.',
              ],
            },
          ],
        },
        {
          title: '6. 이동할 플레이어의 위치를 선택합니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(57).png',
              steps: [
                '여러 포지션을 선택할 수 있습니다.',
                '포지션은 로비가 끝난 후 플레이어를 배치하는 것을 말합니다. (위치 1 = 해당 로비의 1위 선수/팀)',
                '예를 들어, 로비 1에서 상위 2명의 선수를 진출시키려면 포지션 1 & 2를 선택합니다.',
              ],
            },
          ],
        },
        {
          title:
            '7. 전송하려는 플레이어 선택을 마치면 저장 버튼을 클릭합니다. 전송이 완료되었습니다!',
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
      title: '토너먼트 종료 - 경쟁 대진표',
      description:
        '대진표탭에서 최종 우승자를 선택하면 토너먼트가 자동으로 종료됩니다.',
    },
    {
      id: 'ending_a_tournament_lobbied_competition',
      title: '토너먼트 종료 - 로비 버전',
      navSectionItems: [
        {
          title:
            '1. 모든 로비가 정확한 점수와 우승자들로 업데이트 되면, 3줄 메뉴 버튼을 클릭하십시오, 그리고 각 로비마다 끝내기 로비 버튼을 클릭하십시오. 모든 로비에서 이렇게 하십시오. (업데이트와 동시에 끝내기 로비를 하는 것은 좋은 연습이 될 것입니다. 로비가 끝나지 않으면 플레이어를 이동시킬 수 없습니다.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(59).png',
            },
          ],
        },
        {
          title:
            '2. 모든 로비가 끝나면, game.tv 도구는 토너먼트가 종료되고 결과가 발표될 것임을 알려줍니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(60).png',
              steps: [
                '토너먼트를 종료하고 결과를 게시하려면 계속<i>을 클릭합니다.</i>',
                '귀하가 토너먼트를 끝내길 원하지 않거나 결과 제출 발행을 원치 않으면, 닫기<i>를 클릭하십시오.</i> (귀하의 토너먼트가 끝나지 않으면, 결과는 발행되지 않습니다.)',
                '닫기 <i>를 선택한 경우 토너먼트를 종료하고 결과를 게시할 수 있는 옵션이 있습니다.</i>',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sending_prizes_to_winners',
      title: '상을 우승자들에게 보냅니다',
      description:
        '<p><i>** 이 기능은 BlueStacks 디스코드 서버에서 토너먼트를 생성하는 파트너만 사용할 수 있습니다.</i></p>',
      navSectionItems: [
        {
          title:
            '1. 우승자를 선택하고 토너먼트가 올바르게 종료되면, 수상탭에 나열된 우승자를 볼 수 있습니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(61).png',
            },
          ],
        },
        {
          title: '2. 우승자별로 간단하게 정보를 기입해주십시오.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(62).png',
              steps: [
                '우승자(즉, 지역, 상품 종류 등)와 함께 상품 선호도를 두 번 확인하시기 바랍니다.',
                "일부 옵션은 특정 지역에 사용할 수 없습니다. 사용 가능한 모든 상품 옵션을 보려면 다음을 수행합니다,이곳을 방문해주십시오 <a href='https://www.seagm.com/'>https://www.seagm.com/</a>",
                '각 수상자에 대해 여러 개의 상품을 설정할 수 있습니다. (예: Google Play (미국) 20달러 상은 Google Play (미국) 10달러 상 두 개를 설정해야 합니다.)',
                "(NA 경우) 일반적으로, 적절한 상품 옵션/금액을 찾기 위해 최대 4달러를 더 지출해도 괜찮습니다. 스트리밍의 경우, <div class='inner-content'> - 5달러 / 10달러의 경우, 각각 40HKD / 80HKD를 스트리밍을(홍콩) 사용해 주십시오.<br> - 20달러/25달러에 각각 스트리밍(말레이시아) RM 80 / RM 100을 사용해 주십시오. </div>",
              ],
            },
          ],
        },
        {
          title:
            '3. 모든 정보가 정확하게 입력된 후, 상 보내기 버튼을 클릭합니다.',
          innerContentList: [
            {
              steps: [
                'game.tv 관리자에게 상품 배포 요청이 전송됩니다. 당첨 정보를 검토한 다음 요청을 승인하거나 거부합니다.',
                '요청이 승인되면, Tourney 봇으로부터 승리자는 교환가능한 상품 코드를 담은 DM을 받게 됩니다. 또한 수상탭에서 배송이 완료되었음을 확인할 수 있습니다.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cloning_existing_tournaments',
      title: '기존 토너먼트 복제',
      description:
        '<p> 기존 토너먼트를 복제함으로써 토너먼트는 매번 세부사항을 설정하지 않고도 동일한 형식의 토너먼트를 반복해서 쉽게 복제할 수 있습니다. <br /><i>* 토너먼트를 복제하면 토너먼트 모드(로비 vs 대진표)를 변경할 수 없습니다.</i> </p>',
      navSectionItems: [
        {
          title:
            '1. 대시보드에서 복제할 토너먼트를 찾습니다. 토너먼트 오른쪽 끝에서 3개의 점 메뉴 버튼을 클릭합니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(63).png',
              steps: [
                '이미 토너먼트를 종료한 경우 편집 및 일시 중지 버튼을 사용할 수 없습니다.',
                '토너먼트를 이미 정리한 경우, 정리 버튼을 사용할 수 없습니다.',
              ],
            },
          ],
        },
        {
          title:
            '2. <i>복제</i>를 클릭하십시오. 최소한의 정보를 입력해야 하는 곳에 새 화면이 나타납니다.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(64).png',
              steps: [
                '토너먼트 이름 :  기존 토너먼트에서 넘어가지 않습니다. 토너먼트의 새 이름을 입력해야 합니다.',
                '디스코드 서버 : 기존 토너먼트에서 넘어올 것입니다. 기존 토너먼트를 다른 서버에 복제하려면 다른 서버를 선택합니다.',
                '게임 : 게임 모드는 기존 토너먼트부터 이어지게 됩니다. 변경하려는 경우 설정을 사용자 지정합니다.',
                '일정 예약 : 기존 토너먼트에서 이어지지 않습니다. 새로운 일정 예약을 해야합니다.',
                '상 : 기존 토너먼트에서 이어지게 됩니다. 변경하려는 경우 편집하십시오.',
                '스트리밍 : 기존 토너먼트에서 이어지게 됩니다. 변경하려는 경우 편집하십시오.',
                '고급 설정 : 설정 세부사항을 변경하려면, 클릭하여 기본 설정 옵션을 변경할 수 있습니다.',
              ],
            },
          ],
        },
      ],
    },
  ],
};
