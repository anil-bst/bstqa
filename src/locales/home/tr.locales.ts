// tslint:disable: quotemark
import { IHomeLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.TURKISH;
export const HomeLocaleTurkish: IHomeLocale = {
  metadata: {
    title: "Tourney- AI Destekli E-spor Discord Bot'u",
    description:
      'Turnuva botumuz Tourney ile herhangi bir oyun topluluğunda binlerce mobil Esport turnuvasına ev sahipliği yapın.',
  },
  heroSection: {
    heading: "Tourney'le Tanışın",
    content:
      'E-spor asistanımız AI tarafından desteklenmektedir. O turnuvanızı yönetiyor, böylece topluluğunuza konsantre olabilirsiniz',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/global.png',
        logoExtraClasses: 'global-logo',
        link: '/user',
        name: 'Uygulamayı Başlat',
        extraClasses: 'alternate-background',
      },
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        logoExtraClasses: 'discord-logo',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: "Tourney'e Davet Et ",
      },
    ],
    discoverButtonTitle: 'Daha fazla keşfet',
  },
  whyTourneySection: {
    heading: 'Neden Tourney?',
    content:
      'Topluluğunuz için bir turnuva düzenlemek zor. Kimin kime karşı oynadığı, hangi lobiye katılacağı, en uygun eşleşmelerin hangileri olduğunu, kimin kazandığını kanıtlamak - bu çok fazla. Tourney, turnuvalarınızı asistan olarak ya da tamamen kendi topluluğunuza dayanarak yürütecektir. Güçlü AI ve özellikleri, daha güçlü ve daha eğlenceli bir topluluk oluşturmanıza yardımcı olabilir.',
  },
  uHostSection: {
    heading: 'uHost, uHost AI-Assistant, ve AI-Host',
    content:
      'Üç ana turnuva moduyla, oyununuzu daha özgür bir şekilde kişiselleştirebilirsiniz.',
    hostTypes: [
      {
        heading: 'uHost',
        imageAlt: 'uHost',
        content:
          'Bir turnuva şablonundan birini seçin veya kendinizinkini özelleştirin. Yayınla. Poof, Tourney tüm kanalları yaratacak ve topun dönmesini istediğiniz rolleri DM yapacak.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost.png',
      },
      {
        heading: 'uHost AI-Asistanı',
        imageAlt: 'uHost AI-Assistant',
        content:
          'Tourney, turnuvanızı yönetmenize yardımcı olur ve her oyuncu için maçlar arasında ve çok daha fazlasında rehberlik eder.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/uHost-assistant.png',
      },
      {
        heading: 'AI-Host',
        imageAlt: 'aiHost',
        content:
          'Tourney oyunu, zamanı, formatı seçecek ve turnuvayı baştan sona tamamen kendi başına yönetecek.',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/ai-Host.png',
      },
    ],
    templateSection: {
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/templates.png',
      imageAlt: 'Templates',
      heading: 'Şablonlar ',
      content:
        'Tourney, önceden yapılandırılmış düzinelerce turnuva şablonu ile birlikte gelir, böylece Yayınlama seçeneğine tıklayarak devam edebilirsiniz.',
    },
    messagingSection: {
      imageAlt: 'DMs and Messaging',
      imageUrl: 'https://cdn.game.tv/images/meet-tourney/dms.png',
      heading: "DM'ler ve Mesajlaşma",
      content:
        'eTurnuva oyununa özgü rolleri veya yeni bir turnuva hakkında onları bilgilendirmeyi seçtiğiniz herhangi bir rolü iletebilir. Tüm organizasyon yeni bir kanalda gerçekleşir, Tourney lobi davetleri oluşturur ve eşeştirme DM aracılığıyla yapılır ',
    },
  },
  perksSection: {
    heading: 'Faydaları',
    content: 'Tourney, birçok faydaya sahiptir',
    perksList: [
      {
        content:
          'Bir ton turnuva mı yönetiyorsun? Harika, sizi ödüllendirecek kademeli bir sistemimiz var.',
        imageUrl:
          'https://cdn.game.tv/images/meet-tourney/perk-tournaments.png',
        imageAlt: 'Turnuva Katmanlarınının Ödülleri',
      },
      {
        content:
          'Turnuvalarınızı yayınlıyor musunuz? Mükemmel, gösterilecek bir OBS eklentisi var',
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-obs.png',
        imageAlt: "Yayın İçi OBS Plugin'i",
      },
      {
        content:
          "Server'ınızda bir lig mi yürütmek istiyorsunuz? Evet, bunu da yapabilirsiniz.",
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/perk-league.png',
        imageAlt: 'Ligler Düzenle',
      },
    ],
  },
  graphsSection: {
    heading: 'Roller',
    content:
      'Tourney ile ne kadar fazla turnuva yaparsanız, o kadar çok avantajın kilidini açarsınız. Rolünüz Game.tv Discord topluluğunda liderlik tablosunda belirir ve bir sonraki role geçtiğinizde yeni avantajlardan faydalanırsınız.',
    graphContent: {
      previousTitle: 'Önceki',
      nextTitle: 'Sonraki',
      perksTitle: 'İkramiye',
      forTitle: 'İÇİN',
      graphList: [
        {
          type: 'bronze',
          imageCaption: 'Bronz',
          imageAlt: 'Bronze',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: 'Haftada 1-6 Turnuva',
          perks: [
            'Özel Tourney Heyecanları ',
            "Profiller ve Badge'ler",
            "Tourney AI'nin Kilidini Aç",
          ],
        },
        {
          type: 'silver',
          imageCaption: 'Gümüş',
          imageAlt: 'Silver',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: 'Haftada 7+ turnuva ',
          perks: [
            "Discord server'ınız için 2 Nitro Boost ",
            'Liglerin Kilidini Aç',
          ],
        },
        {
          type: 'gold',
          imageCaption: 'Altın',
          imageAlt: 'Gold',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration:
            '300 veya daha fazla benzersiz katılımcı / sezon ile lig kurun',
          perks: ['Garantili lig ödülü sponsorluğu'],
        },
      ],
    },
  },
  tourneyEmotesSection: {
    heading: 'Tourney Heyecanları',
    content:
      "Bronze'dekilidi açılan, topluluğunuzda kullanmanız gereken 42 harika, yüksek çözünürlüklü ifade elde edersiniz. ",
  },
  profilesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/profiles.png',
        heading: 'Profiller',
        imageAlt: 'Profiles',
        content:
          "Bronz'da kilit açılır, turnuvadaki oyuncular otomatik olarak özelleştirebilecekleri profilleri alırlar. Her profil, oynanan oyunları, kazanma / kaybetme kaydını ve oyuncu derecelendirmesini gösterir. Oyuncu derecelendirme çöpçatanlık ve ligin ilerlemesinde yardımcı olur.",
      },
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/badges.png',
        heading: 'Rozetler',
        imageAlt: 'Badges',
        content:
          "Oyunlarınızı kazanın ve yeteneklerinizi göstermek için rozetler kazanın. ELO'nuz arttıkça veya turnuvalar ve ödüller kazandıkça, profilinizde bazen süper gizli ve özel ek avantajlarla gelen özel rozetler kazanırsınız.",
        reverse: true,
      },
    ],
  },
  tourneyAiSection: {
    heading: 'Tourney AI',
    content1:
      "Bronz'a ulaştıktan sonra AI-Host'u açın. AI-Host ve Tourney'i etkinleştirmek topluluğunuzdaki turnuvaları otomatik olarak çalıştırabilir. Yalnızca uHost turnuvalarının sizin kademeli ilerlemenize göre sayıldığını unutmayın. AI-Host turnuvaları sayılmaz ( onları uHost ile birlikte oynamalısınız).",
    content2: '',
  },
  leaguesSection: {
    items: [
      {
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/league.png',
        heading: 'Ligler',
        imageAlt: 'Leagues',
        content:
          "Gold'da açılan Tourney, sunucunuzda ligin tamamını yönetebilir. Sunucunuzdaki oyuncular, paralel kademeli sistemlerinde rekabet ederlerse ve ulusal liderlik listelerinde ilk 8'in altında yer alırlarsa aylık sponsorluk kazanma şansına sahip olacaklar.",
      },
    ],
  },
  getBoostedSection: {
    heading: 'Güçlen',
    content:
      "Silver seviyesine ulaşın ve Discord sunucunuza bir tane değil, Seviye 1 Perks'i elde etmek için iki destek vereceğiz. Her hafta yedi veya daha fazla turnuva düzenlediğiniz sürece (pazartesiden pazara), sunucunuzu güçlendirmeye devam edeceğiz. Her hafta yedi turnuvanın altına düşerseniz, yükselişlerinizi yedi veya daha fazla hale gelene kadar kaldırabiliriz. Ek olarak, Tourney’in AI’sını kullanarak topluluğunuz için ligleri oluşturma yeteneğinin kilidini açarsınız.",
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
        heading: '1. Seviye Özellikleri',
        mainlabel: 'Açıldı',
        subheading: 'Öne çıkartılan sunucu avantajları şunları içerir -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/emoji.png',
            label: '+50 sunucu emojisi (toplam 100)',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/audio.png',
            label: '128 Kbps ses kalitesi',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/gif-icon.png',
            label: 'Animasyonlu sunucu simgesi',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/server.png',
            label: 'Özel sunucu davet arka planı',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/live.png',
            label: '720p 60fps Go Live yayınları',
          },
        ],
      },
      boostedServer: {
        mainIconUrl: 'https://cdn.game.tv/images/meet-tourney/ruby-gold.png',
        heading: 'Öne Çıkartılmış Sunucu Olma Çekilişi',
        subheading: 'Bilmen Gerekenler -',
        items: [
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Turnuvalar uHost veya uHost AI-Assistant olmalıdır, AI-Host turnuvalar haftalık turnuva olarak sayılmaz ve turnuva sayınızı etkilemez.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Turnuvaların kalifiye olması için minimum% 50 doluluk oranına sahip olması gerekir. (Bu, demek olur ki eğer bir turnuvada on altı yer varsa, buna en az sekiz kişinin katılması ve oynaması anlamına gelir ki bu haftalık turnuva sayınıza etki etsin.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Haftalık ortalama turnuva sayılarınıza bakıyoruz. Bir günde üç turnuva düzenleyip diğer gün dört turnuva yapmakla, her gün birer turnuva düzenlemek aynı şeydir.',
          },
          {
            iconUrl: 'https://cdn.game.tv/images/meet-tourney/right-green.png',
            label:
              'Eğer haftalık turnuva ortalamanız yedinin altına düşerse, sunucunuzu öne çıkartma işlemi durdurulabilir hafta, Pazartesi-Cuma (Pasifik Zaman Dilimi) olarak hesaplanır.',
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
        heading: 'Ödül Sponsorlukları',
        imageAlt: 'LeagPrize Sponsorlukları',
        content:
          'Topluluğunuzda bir lig yöneterek Altın’a ulaştığınızda, her takvim ayı sezonu adına, lig ödülleri için sponsorluk yapacağız. Ödüller MSI, Intel ve yüzlerce oyun geliştiricisi gibi harika ortaklarımızdan gelecek ve para, hediye kartları, donanım, ticari ürünler veya oyun içi eşyalar içerebilirler.',
      },
    ],
  },
  availableGamesSection: {
    heading: 'Müsait Oyunlar',
    content: 'Haftalık Olarak Eklenir',
    viewMoreGames: 'Daha Fazla Göster',
    appLaunchButtons: [
      {
        logoUrl: 'https://cdn.game.tv/discord_logo_white.png',
        link:
          'https://www.game.tv/oauthv2/begin?partner=add-discord-bot&redirect_url=%2Ftournament%2Fapi%2Fadd_guild_owner',
        name: "Tourney'ye Davet Et",
      },
    ],
  },
  gamelink: `/${language}/find-tournaments`,
};
