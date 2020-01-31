import { ICommunityTournamentsType } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.CHINESE;

export const CreateATournamentLocalesLocaleChinese: ICommunityTournamentsType = {
  metadata: {
    title: '如何運行手機電子競技比賽 | Game.tv',
    description:
      '使用Game.tv的Discord bot Tourney或Game.tv應用程式開始自己的比賽和聯賽。',
  },
  heroSection: {
    heading: '創建-主導-暢玩',
    content:
      '只需幾個簡單的步驟，即可直接在您的Discord社群內部或在我們的應用程式上創建錦標賽',
    bannerDeskTopImageUrl: 'https://cdn.game.tv/create_tournament/banner.png',
    bannerMobImageUrl: 'https://cdn.game.tv/create_tournament/banner-mob.png',
  },
  discordSection: {
    heading: 'Discord',
    content:
      '在Discord社區內運行錦標賽意味著玩家無需離開服務器。 他們報名、報到和比賽所需的一切都透過自定義身分組和私訊進行。 Tourney負責配對，這意味著最公平的對決。 遊戲結束後，玩家可以在自己的個人資料頁面上查看自己的排名和區域得分。',
    btnText: '邀請 Tourney',
    steps: [
      {
        title: '安裝Tourney並前往',
        linkString: '儀表板',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step1.png',
        linkUrl: '/dashboard',
      },
      {
        title: '點擊“創建比賽”並選擇您的遊戲',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step2.png',
      },
      {
        title: '自定義比賽或使用我們現有的套版',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step3.png',
      },
      {
        title: '點擊“發布”，Tourney將在Discord伺服器中創建大廳或支架。',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step4.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/discord_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/discord.png',
  },
  gameSection: {
    heading: 'Game.tv app',
    content:
      '如果您沒有Discord伺服器，或者想從Discord外部邀請玩家，則可以使用我們的應用創建比賽。 就像Discord一樣，Tourney將創建、組織和運行您的錦標賽。 您和您的參與者將直接在應用程序中收到有關即將進行的比賽、配對通知、賽程表更新等等通知。 您還可以串聯您的Twitter帳戶並共享比賽進度，並允許人們直接透過Twitter加入。',
    btnText: '啟動 App',
    steps: [
      {
        title: '前往',
        linkString: 'Game.tv app',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step1.png',
        linkUrl: '/user',
      },
      {
        title: '登入並點擊螢幕底部控制欄中的+。',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step2.png',
      },
      {
        title: '自定義比賽或使用我們現有的模板',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step3.png',
      },
      {
        title: '點擊“發布”，Tourney將在Discord服務器中創建大廳或分支表。',
        imgUrl: 'https://cdn.game.tv/crete_tournament/step-4-1-new.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/game_global_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/game.png',
  },
  locales: `/${language}`,
};
