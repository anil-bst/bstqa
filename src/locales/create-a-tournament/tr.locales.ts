import { ICommunityTournamentsType } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.TURKISH;

export const CreateATournamentLocalesLocaleTurkish: ICommunityTournamentsType = {
  metadata: {
    title: 'Mobil Esporlar Turnuvaları Game.tv',
    description:
      'Game.tv’nin Discord bot Tourney veya Game.tv uygulamasını kullanarak kendi turnuvalarınızı ve liglerinizi başlatın.',
  },
  heroSection: {
    heading: 'Oluştur - Evsahipliği Yap - Oyna',
    content:
      'Birkaç kolay adımda doğrudan Discord topluluğunuzda veya uygulamamızda turnuvalar oluşturun',
    bannerDeskTopImageUrl: 'https://cdn.game.tv/create_tournament/banner.png',
    bannerMobImageUrl: 'https://cdn.game.tv/create_tournament/banner-mob.png',
  },
  discordSection: {
    heading: 'Discord',
    content:
      // tslint:disable-next-line: quotemark
      "Discord topluluğunuzdaki turnuvaları yürütmek, oyuncuların hiçbir zaman sunucunuzu terk etmeleri gerekmediği anlamına gelir. Kayıt olmak, giriş yapmak ve oynamak için yapmaları gereken her şey özel roller ve DM'ler aracılığıyla gerçekleşir. Tourney, en uygun eşleşmeleri ifade eden eşleştirmeye özen gösterir. Oyundan sonra oyuncular sıralarını ve GELO puanlarını kendi profil sayfalarından kontrol edebilirler.",
    // tslint:disable-next-line: quotemark
    btnText: "Tourney'ye Davet Et",
    steps: [
      {
        title:
          // tslint:disable-next-line: quotemark
          "Tourney'yi indir ve",
        linkString:
          // tslint:disable-next-line: quotemark
          "dashboard'a git",
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step1.png',
        linkUrl: '/dashboard',
      },
      {
        title: '“Turnuva Oluştur” u tıklayın ve oyununuzu seçin',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step2.png',
      },
      {
        title: 'Turnuvayı özelleştirin veya mevcut şablonlarımızı kullanın',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step3.png',
      },
      {
        title:
          '“Yayınla” ya tıkladığınızda, Tourney Discord sunucunuzdaki lobiyi veya eşlemeyi oluşturacaktır.',
        imgUrl: 'https://cdn.game.tv/create_tournament/discord_step4.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/discord_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/discord.png',
  },
  gameSection: {
    heading: 'Game.tv Uygulaması',
    content:
      // tslint:disable-next-line: quotemark
      "Bir Discord sunucunuz yoksa veya Discord'un dışındaki oyuncuları davet etmek istiyorsanız, turnuva oluşturmak için uygulamamızı kullanabilirsiniz. Tıpkı Discord için olduğu gibi, Tourney de turnuvalarınızı yaratacak, organize edecek ve yönetecektir. Siz ve katılımcılarınız doğrudan uygulamada yaklaşan eşleşmeler, eşleştirme, ayraç güncellemeleri ve daha fazlası hakkında bildirim alacaksınız. Ayrıca, Twitter hesabınızı bağlayabilir ve maç ilerlemenizi paylaşabilir, ayrıca kişilerin doğrudan Twitter üzerinden katılmasına izin verebilirsiniz.",
    btnText: 'Uygulamayı başlat',
    steps: [
      {
        title: 'Game.tv uygulamasına',
        linkString: 'gidin',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step1.png',
        linkUrl: '/user',
      },
      {
        title:
          'Giriş yapın ve ekranın altındaki kontrol çubuğundaki + işaretini tıklayın.',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step2.png',
      },
      {
        title: 'Turnuvayı özelleştirin veya mevcut şablonlarımızı kullanın',
        imgUrl: 'https://cdn.game.tv/create_tournament/game_step3.png',
      },
      {
        title:
          '“Yayınla” ya tıkladığınızda, Tourney Discord sunucunuzdaki lobiyi veya eşleştirmeyi oluşturacaktır.',
        imgUrl: 'https://cdn.game.tv/crete_tournament/step-4-1-new.png',
      },
    ],
    iconUrl: 'https://cdn.game.tv/create_tournament/game_global_icon.png',
    imageUrl: 'https://cdn.game.tv/create_tournament/game.png',
  },
  locales: `/${language}`,
};
