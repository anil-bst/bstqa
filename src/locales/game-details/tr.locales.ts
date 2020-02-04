import { IGameDetailsLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
import { HowToJoinTurkish } from './../how-to-join/tr.locales';
const language = SupportedLocalesEnum.TURKISH;

export const GameDetailsLocalesTurkish: IGameDetailsLocale = {
  metadata: {
    title: '{{gameName}} Esports Turnuvalarına Katılın | Game.tv',
    description:
      'Dünya çapında her gün milyonlarca kez oynanan günlük {{gameName}} turnuvalarına katılın.',
  },
  gameDetail:
    '{{gameName}} topluluğunu dünya çapında {{communityCount}} ayrı sunucuda gerçekleşen turnuvalarla sunar. {{gameName}} turnuvasına katılmak için ‘Join’ (Katıl) ’ı tıklayın.',
  gameInfo: {
    title: 'Beğendiğiniz bir turnuva görmüyor musunuz?',
    content: 'Kendi turnuvanızı oluşturun',
    linkUrl: `/${language}/create-a-tournament`,
    noTournamentsTitle: 'Hata! Yaklaşan bir Turnuva mevcut değil!',
    noTournamentsContent: 'Mevcut turnuvaları görüntüleyin',
    noTournamentsLink: 'Canlı ya da Geçmiş',
  },
  tournamentTitle: 'Turnuvalar',
  platformStr: 'PLATFORM',
  discord: 'DISCORD',
  vs: 'VS',
  joinHeading: 'KATIL',
  viewMore: 'Daha Fazla',
  tournamentTypes: {
    heading: '{{gameName}} Turnuva Türleri',
    blocks: [
      {
        content:
          'Klasik Turnuva (lobi stili) - Solo, İkili ve Takım - max 100 oyuncu',
        imageUrl: 'https://cdn.game.tv/tournaments/group-26.png',
      },
      {
        content: 'Erangle Hızlı Maç (lobi stili) - Solo - 28 oyuncu',
        imageUrl: 'https://cdn.game.tv/tournaments/group-27.png',
      },
      {
        content:
          // tslint:disable-next-line: quotemark
          "Takımlı Ölüm Maçı (lobi stili) - 2'li Ekip - En fazla 8 oyuncu",
        imageUrl: 'https://cdn.game.tv/tournaments/group-28.png',
      },
      {
        content: 'Infection Modu (lobi stili) - 12 oyuncu',
        imageUrl: 'https://cdn.game.tv/tournaments/group-29.png',
      },
    ],
  },
  prizeTypes: {
    heading: '{{gameName}} Turnuvaları İçin Ödül Türleri',
    description:
      'Bu turnuvaların sahipleri herhangi bir ödül vermeksizin sadece eğlence amaçlı turnuvalar düzenleyebilmektedir. Turnuva sayfasında listelenen ödülleri bulabilirsiniz. İşte bazı {{gameName}} turnuvalarına ev sahipliği yapan ödüller.',
    blocks: [
      {
        content: 'Nakit Ödüller',
        imageUrl: 'https://cdn.game.tv/tournaments/group-13.png',
      },
      {
        content: 'Steam Cüzdan Kodları',
        imageUrl: 'https://cdn.game.tv/tournaments/group-24.png',
      },
      {
        content: 'Hediye Kartları - Google Play, Amazon, Steam ve diğerleri',
        imageUrl: 'https://cdn.game.tv/tournaments/group-23.png',
      },
      {
        content: 'Abonelik Kodları - Netflix, Apple Music ve Spotify',
        imageUrl: 'https://cdn.game.tv/tournaments/group-22.png',
      },
      {
        content: 've çok daha fazlası',
        imageUrl: 'https://cdn.game.tv/tournaments/group-20.png',
      },
    ],
  },
  joinTournament: {
    heading: '{{gameName}} Turnuvasına Nasıl Katılırım?',
    blocks: HowToJoinTurkish.blocks,
  },
  startTournament: {
    heading: '{{gameName}} Turnuvasını Nasıl Başlatırım?',
    blocks: [
      {
        gamePlatform: 'Discord',
        stepsHeading: 'Adımlar',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "<a href='/user' class='click-here'>Tourney Bot'u Davet Et</a>'e tıklayıp Discord sunucunuza davet edin, oturum açın ve “Yetkilendir” e tıklayın.",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
          },
          {
            stepItem:
              'Soldaki ana menüden “Turnuva Oluştur” düğmesine tıklayın.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/3.jpg',
          },
          {
            stepItem:
              'Çok çeşitli turnuva oyunları arasından seçim yapın - Önceden tanımlanmış turnuva şablonlarını kullanmak için “özelleştir” düğmesine tıklayarak veya “Şimdi Yayınla” düğmesine tıklayarak turnuva ayrıntılarını özelleştirin.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/4.jpg',
          },
          {
            stepItem:
              'Turnuvayı kişiselleştir bölümünün altında, gereksinimlerinize göre özel Turnuva açıklaması, kuralları ve ödülleri ekleyin.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/5.jpg',
          },
          {
            stepItem:
              'Bir kere yayınlandığında, bot otomatik olarak #tournament-info ve #turnuva-lobisi kanallarını Discord sunucunuzda oluşturacaktır; doğrulama için turnuva lobi kanalına !register yazınız ve {{gameName}} turnuva oluşturma işleminin başarılı olup olmadığını kontrol ediniz.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/discord/6.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/discord/1.jpg',
      },
      {
        gamePlatform: 'Game.tv web app',
        stepsHeading: 'Adımlar',
        stepsContent: [
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "<a href='/user' class='click-here'>Web App</a>'i ziyaret edin, \"Twitter/Discord hesabınızla giriş yap\"ı ve \"Yetkilendir\" i tıklayın.",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
          },
          {
            stepItem:
              'Ekranınızın altındaki kontrol çubuğundaki “+” simgesine tıklayın',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2-new.png',
          },
          {
            stepItem:
              'Soldaki ana menüden “Turnuva Oluştur” düğmesine tıklayın.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/2.jpg',
          },
          {
            stepItem:
              'Çeşitli turnuva oyunları arasından seçim yapın. Önceden tanımlanmış turnuva şablonlarını kullanmak için “özelleştir” düğmesine tıklayarak veya “Şimdi Yayınla” düğmesine tıklayarak turnuva ayrıntılarını kişiselleştirebilirsiniz.',
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/3.jpg',
          },
          {
            stepItem:
              // tslint:disable-next-line: quotemark
              "Yayınlandıktan sonra, {{gameName}} turnuvanız Game.tv Web App <a class='click-here' href='/user'>Anasayfa</a> bölümünde yer alır.",
            imgUrl:
              'https://cdn.game.tv/game-page/start-tournament/Game.tv/4.jpg',
          },
        ],
        firstImage:
          'https://cdn.game.tv/game-page/start-tournament/Game.tv/1.jpg',
      },
    ],
  },
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
