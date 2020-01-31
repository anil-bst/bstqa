import { ISponsorshipsLocale } from '@app/abstractions';
// tslint:disable: max-line-length
export const SponsorshipsLocalesTurkish: ISponsorshipsLocale = {
  metadata: {
    title: 'Tourney ve Game.tv ile Mobil Espor Sponsorlukları',
    description: 'Tourney ve Game.tv ile Mobil Espor Sponsorlukları',
  },
  sponsorshipSection: {
    title: 'Topluluğunuz için Espor Sponsorlukları',
    contents: [],
    imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship-banner.png',
  },
  playSponsorSection: {
    blocks: [
      {
        title: 'Oyuncular Nasıl Sponsorlanır?',
        contents: [
          // tslint:disable-next-line: quotemark
          'Topluluğunuzda bir lig yönettiğinizde, Tourney, her oyuncunun performansını tüm sunucularda izler. Her sezonun sonunda her ülkedeki en iyi 8 oyuncuya her ay 500 ABD Doları / sponsorluk verilecek.',
          'Bu oyuncuların büyümesine yardımcı olan topluluğa bir bonus olarak, topluluk da özel bir ödül kazanacak!',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/get-sponsorship.png',
        imageAlt: 'Sponsor Bulun',
      },
      {
        title: 'Sponsorluk',
        contents: [
          // tslint:disable-next-line: quotemark
          'Oyuncular topluluğunuzun liginde rekabet ettikçe, çeşitli avantajlar kazandıran roller üstleneceklerdir. Altın rolüne ulaştıklarında, Ulusal Liderlik Panosuna hak kazanırlar. Her ay, ulusal liderlik tablosunda en iyi 8 oyuncuyu seçtiğimiz yeni bir sezon. Topluluğunuzun tüm dünyada üyeleri varsa, bu da iyi. Oyuncuların profillerinde ikamet ettikleri ülkeyi doğrulamaları gerekecektir ve topluluğunuzun bunu yapmasına yardımcı olmanızı öneririz.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/sponsorship.png',
        imageAlt: 'Sponsorluk',
      },
    ],
  },
  verifiedBadgeSection: {
    blocks: [
      {
        title: 'Onaylanmış Rozet',
        contents: [
          // tslint:disable-next-line: quotemark
          "Gümüş seviyeye ulaşan oyuncular, “Doğrulandı” onayı alabilecek ve profil sayfasında herkesin görebileceği özel bir rozet alabilecekler. Sadece “Doğrulanmış” oyuncular Altın'a katılabilir ve sponsorluk kazanabilir.",
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/verified-badge.png',
        imageAlt: 'Onaylanmış Rozet',
      },
      {
        title: 'Ligler',
        contents: [
          // tslint:disable-next-line: quotemark
          'Tourney, sunucunuzu kendi ligine dönüştürecek. Oyuncular uHost kullanarak veya aiHost üzerinden otomatik olarak çalıştırdığınız etkinliklerde rekabet eder. Tourney oyunculara performansları ve rolleri hakkında ya sohbet komutları aracılığıyla bilgi verir ya da oyuncular Game.tv/users adresindeki profillerine bakabilir.',
        ],
        imageUrl: 'https://cdn.game.tv/images/meet-tourney/leagues-spons.png',
        imageAlt: 'Ligler',
      },
    ],
  },
  leaderboardSection: {
    title: 'Liderlik Tablosu',
    contents: [
      // tslint:disable-next-line: quotemark
      'Topluluğunuzdaki oyuncular, topluluk liginizde bir sıralamaya sahip olacak, ancak aynı zamanda kendi liderlik sıralamalarındaki yerlerini Game.tv profillerinde veya ‘!myposition’ komutunu kullanarak da kontrol edebilecektir. Ulusal liderlik tablosuna yalnızca doğrulanmış oyuncular erişebilir',
    ],
    desktopImageUrl:
      'https://cdn.game.tv/images/meet-tourney/leaderboard-desk.png',
    mobImageUrl: 'https://cdn.game.tv/images/meet-tourney/leaderboard-mob.png',
  },
  tiersSection: {
    content: {
      title: 'Roller',
      contents: [
        // tslint:disable-next-line: quotemark
        `Oyuncularınız kazandıkça lig kademelerinde ilerler ve çeşitli ödüller kazanırlar. Altın seviyeye ulaştıklarında, Ulusal liderlik panosuna hak kazanırlar ve ilk 8'de kaldıkları her ay sponsorluk kazanabilirler. Oyuncular derecelendirmelerini profillerinde veya “myrating” komutunu arayarak görebilirler.`,
      ],
    },
    graphContent: {
      previousTitle: 'Önceki',
      nextTitle: 'Sonraki',
      perksTitle: 'Perks',
      forTitle: 'İÇİN',
      graphList: [
        {
          type: 'Bronz',
          imageCaption: 'Bronz',
          imageAlt: 'Bronz',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-bronze.png',
          forDuration: 'ELO 800 - 1300',
          perks: ['Özel Tourney Görselleri', 'Profil ve Rozetler'],
        },
        {
          type: 'Gümüş',
          imageCaption: 'Gümüş',
          imageAlt: 'Gümüş',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-silver.png',
          forDuration: 'ELO 1301 - 1800',
          perks: ['Doğrulanmış Profil Rozeti'],
        },
        {
          type: 'Altın',
          imageCaption: 'Altın',
          imageAlt: 'Altın',
          imageUrl: 'https://cdn.game.tv/images/meet-tourney/tier-gold.png',
          forDuration: 'ELO 1800+',
          perks: ['Özel Tourney Görselleri'],
        },
      ],
    },
  },
};
