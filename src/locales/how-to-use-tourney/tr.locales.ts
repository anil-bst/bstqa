import { IHowToUseTourneyLocale } from '@app/abstractions';
// tslint:disable: quotemark
export const HowToUseTourneyLocaleTurkish: IHowToUseTourneyLocale = {
  metadata: {
    title: 'Game.tv - Tourney nasıl kullanılır',
    description: "Tourney'i topluluğunuz için nasıl kullanacağınızı öğrenin",
  },
  navigationSections: [
    {
      id: 'yeni_hesap_oluştur',
      title: 'Yeni Hesap Oluşturma',
      isActive: true,
      navSectionItems: [
        {
          title:
            "1. (Bu adım sadece game.tv ortakları içindir. Kendi sunucunuzda turnuvalar oluşturuyorsanız, lütfen adım 2'ye geçin.) Discord takma adınızı ve kullanıcı adınızı game.tv admin ile paylaşın.",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0.jpg',
              imageCaption: 'Takma adı 4 basamaklı sayısal etiket içermelidir',
              steps: [
                "Discord ID : Kullanıcı ID'nizi nasıl görüntüleyebileceğinizi öğrenin <a href='https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-'>https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-</a>",
                "Game.tv admin'in hesabı onaylamasını bekleyin.",
              ],
            },
          ],
        },
        {
          title:
            "2. Ziyaret Edin <a href='https://esports.game.tv/nimda'>https://esports.game.tv/nimda</a>",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(1).png',
              imageCaption: '“Discord ile giriş yap” seçeneğini tıklayın',
            },
            {
              imageCaption: '“Yetkilendir” e tıklayın',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(2).png',
            },
          ],
        },
      ],
    },
    {
      id: 'setting_up_tourney',
      title: 'Discord Sunucunuz için Tourney Botunu Ayarlama',
      navSectionItems: [
        {
          title:
            '1. Soldaki ana menünüzden “Turnuva Oluştur” düğmesine tıklayın.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            "2. Turnuva Şablonları sayfasından, turnuva oluşturmak istediğiniz bir oyun bulun ve Özelleştir'i tıklayın.",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title:
            '3. Turnuva Özelleştir sayfasında, Başka bir sunucu ekle bağlantısı tıklayın.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(5).png',
            },
          ],
        },
        {
          title:
            "4. Tarayıcı açılacak ve Discord UI'yi göstererek, Bot'un ekleneceği sunucuyu seçmenizi isteyecek.",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(6).png',
              steps: [
                'Açılır menüde yalnızca yönetici olduğunuz sunucular görünecektir.',
                "Botu kurmak istediğiniz sunucuyu seçin ve ardından Yetkilendir'e tıklayın.",
              ],
            },
          ],
        },
        {
          title:
            '5. Doğru yetki verildiğinde, aynı tarayıcıda bir onay ekranı göreceksiniz. Şimdi Tourney Bot Discord sunucunuzda kuruludur.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(7).png',
            },
          ],
        },
        {
          title:
            '6. Botun kurulu olduğundan emin olmak için Discord sunucunuzu kontrol edin.',
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
      title: 'Tourney AI Modu',
      description:
        "<p>“Tourney AI” modu, Tourney AI Bot'un turnuvaları tek başına yaratmasına, başlatmasına ve işletmesine izin verir!</p><p><i>** Bu modun yalnızca sunucu yöneticileri tarafından kullanılabileceğini unutmayın. Turnuva iznine sahip diğer roller bu moda erişemez.</i></p><p><i> **AI modu için yalnızca vs. modlu oyunlar kullanılabilir. (örn. PUBG M, Free Fire hariç)</i></p>",
      navSectionItems: [
        {
          title:
            '1. Kontrol panelinizde, Tourney AI düğmesi var. Üstüne tıklayın.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(9).png',
            },
          ],
        },
        {
          title:
            "2. Bot ayarları sayfasında, önce açılır menüden sunucunuzu seçin. Ardından AI Etkinleştir'i tıklayın.",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(10).png',
              steps: [
                "Tourney Bot henüz kurulmadıysa, burada Sunucu ekle seçeneğini seçerek Tourney Bot'u sunucunuza ekleyebilirsiniz.",
                'AI Etkinleştir düğmesine tıkladığınızda sizin için yeni bir menü açılacaktır.',
              ],
            },
          ],
        },
        {
          title: '3. Moderatör Ayarı',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(11).png',
              steps: [
                'Mode moderatör: Yöneticileriniz burada listelenecek. Her moderatör farklı ayarlara sahip olabilir. Aktif olmasını istediğiniz yöneticiyi seçin.',
                'Bahsettiğimiz roller: Bu bölümde, AI botlarına, her bir AI turnuvası oyunu için hangi rolleri atayacağını söylemelisiniz. Rol seçmezseniz, AI bot herkese bildirim gönderecektir.',
                'Kanal Görünürlüklerini Eşleştir: Özel turnuva kanallarında görünür olmasını istediğiniz bir rol seçin.',
              ],
            },
          ],
        },
        {
          title: '4. Oyun Ayarları',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(12).png',
              steps: [
                'Otomatik Seçimi Etkinleştir: Bunu açarsanız, AI bot hangi oyunun sunucunuz için en popüler olacağına karar verir, böylece sizin seçmeniz gerekmez.',
                'Otomatik Seçimi Etkinleştir kapalıysa, sunucunuzda turnuva yapmak istediğiniz oyunları seçmeniz yeterlidir. AI bot yalnızca seçilen oyun havuzundaki turnuvaları yürütür.',
              ],
            },
          ],
        },
        {
          title: '5. Ayarları Programlama',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(13).png',
              steps: [
                'Saatleri Otomatik Seçme: Bunu açarsanız, AI bot en çok hangi saatte katılımcıları çekeceğine karar verir ve bu süre zarfında turnuvaları başlatır.',
                'Saatleri Otomatik Seçme kapalıysa, AI botunun turnuvaları başlatmasını istediğiniz zaman aralığını seçmeniz yeterlidir. AI bot seçilen zaman aralığında turnuvaları başlatıyor olacak.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'discord_commands',
      title: 'Discord Komutlarının Tam Listesi',
      navSectionItems: [
        {
          title: '1. Turnuva Lobisinde Kullanılabilir',
          innerContentList: [
            {
              steps: [
                '<strong>!register</strong> : Bu, kayıt işlemlerinin sizin için başlamasına izin verecektir. Sadece kayıt başladıktan sonra kullanılabilir.',
                '<strong>!unregister1</strong> : Bu komut, kaydınızı silecek ve ayrıca ekipten kaldıracaktır.',
                '<strong>!timer</strong> : Bu size turnuva sürecinin bir sonraki aşamasını ve bu aşamaya kadar ne kadar zaman kaldığını söyleyecektir.',
                '<strong>!myteam</strong> : This will tell you who’s in your team and their registration status.',
              ],
            },
          ],
        },
        {
          title: '2. Tourney Bot ile Özel Mesaj Kullanılabilir',
          innerContentList: [
            {
              steps: [
                "<strong>!createteam</strong> <b class='highlight'><team name><ingame username></b> : Bu, kadroya yeni bir takım kaydedecek. Takım kodunu paylaşana ve başkalarının takıma katılmasını sağlayıncaya kadar o takımdaki tek kişi siz olacaksınız.",
                "<strong>!jointeam</strong> <b class='highlight'><team code> <ingame username></b> : Bu sizi başka birisinin yarattığı mevcut takıma sokacaktır.",
                "<strong>!joinsolo</strong> <b class='highlight'><ingame username></b> : Bu sizi solo turnuvaya kaydeder.",
                "<strong>!checkin</strong> <b class='highlight'><code provided></b> : Check-in gereksinimi varsa ve check-in saati başlamışsa, bu kayıt işleminizi kontrol etmenizi ve tamamlamanızı sağlar.",
              ],
            },
          ],
        },
        {
          title: '3. Oyun Lobisinde Kullanılabilir',
          innerContentList: [
            {
              steps: [
                "<strong>!result</strong> <b class='highlight'><team name></b> : Maç sonucunuzu bot'a bu şekilde gönderebilirsiniz. Komut ile birlikte zafer ekranınızın ekran görüntüsünü eklemeniz gerekir.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'create_new_tournament',
      title: 'Yeni Bir Turnuva Oluşturmak',
      description:
        '<i> Adım 1) ve 2) Discord Sunucunuz için Turnuva Botunun Ayarlanması bölümünde yukarıda gösterildiği gibidir. Bu adımları zaten yaptıysanız, 3. adıma geçebilirsiniz.</i>',
      navSectionItems: [
        {
          title:
            '1. Soldaki ana menünüzden “Turnuva Oluştur” düğmesine tıklayın.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(3).png',
            },
          ],
        },
        {
          title:
            "2. Turnuva Şablonları sayfasından, turnuva oluşturmak istediğiniz bir oyun bulun ve Özelleştir'i tıklayın.",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(4).png',
            },
          ],
        },
        {
          title:
            "3. “Turnuva Özelleştir” sayfasında, en altına gidin ve Gelişmiş Ayarlar'ı seçin.",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(15).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(16).png',
              steps: [
                "Bu işlemi onaylamanızı isteyecektir. Sadece İlerle'yi seçin.",
              ],
            },
          ],
        },
        {
          title: '4. Temel Bilgiler bölümünü doldurun',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(17).png',
              steps: [
                "Turnuva Adı: Turnuva adınızı yazın. Bu, Discord'unuzda Kategori başlığı olarak görünecektir. Harfler büyük harflerle gösterilir. Bu bölümde emojilere izin verilir.",
                'Oyun: Dlediğinizi seçin, sonra oyun formatınızı seçin. (örn. PUBG M -> İkili) Bu, turnuvanızın vs. bir turnuva mı yoksa lobili bir turnuva mı olacağını belirler.',
                "Program: Kayıt başlangıç zamanınızı, kayıt bitiş zamanınızı ve turnuva başlangıç zamanınızı seçin. Bu tarihler turnuva duyurunuzun altında gösterilir. <div class='inner-content'><p> Kayıt Başlama Saati: Oyuncular turnuva için Discord kanalına kaydolmaya başlayabilirler. Bu saatten önce, oyuncular kayıt yapamazlar ve “!Register” komutu kanalda çalışmaz. </p> <p>Kayıt Sonu: Bu saatten sonra oyuncular artık kayıt olamaz. Kayıt Bitiş Süresi, Turnuva Başlangıç Saatinden 10 dakikadan az olamaz. Check-in işlemi ancak kayıt bittikten sonra başlayabilir. Ayrıca, kayıt bittikten sonra yalnızca eşleşme veya lobi oluşturabilirsiniz. </p><p> Turnuva Başlama Saati: Bu, turnuvanızın başladığı zamandır. </p> </div>",
                'Yayın: Eğer bir yayıncı iseniz ve kanalınızı turnuva duyurusu ile birlikte duyurmak istiyorsanız, “Bağlantıyı Etkinleştir” seçeneğini tıklayın ve yayın linkinizi buraya yerleştirin.',
                'Bölge: Ülkenizi buradan seçin. Bu, genel metinlerin hangi dilde yayınlanacağını belirler. (örneğin TR -> Duyuru’nun genel metinleri Türkçe olacaktır.)',
              ],
            },
          ],
        },
        {
          title: '5. Ayrıntılar bölümünü doldurun',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(18).png',
              steps: [
                'Açıklama: Turnuvanız hakkında genel bilgileri buraya yazabilirsiniz. (örn. tarih ve saat, oyun modu, oyuncu limiti, giriş saati vb.) Bu bilgi, duyuruda başlığın hemen altındaki ilanda gösterilecektir.',
                "Kurallar: Turnuvaya eklemek istediğiniz herhangi bir kuralı belirleyebilirsiniz. (ör. yasaklama, zaman sınırı, en iyi 3 vb.) Bu bilgi Açıklama'nın hemen altındaki duyuruda gösterilecektir.",
                'Ödüller: Ödül bilgilerinizi bu bölüme ekleyebilirsiniz. Mümkün olduğunca spesifik olun; oyuncular ödüller ve ödül miktarı konusunda hassastır. Bu bilgiler Kuralların hemen altındaki duyuruda gösterilecektir.',
              ],
            },
          ],
        },
        {
          title: '6. Platform bölümünü doldurun',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(19).png',
              steps: [
                'Platform Seç: Discord Seç',
                'Discord Server: Turnuvanızı duyurmak istediğiniz sunucuyu seçin.',
                "Roller: Bu, turnuva Discord'da ilan edildiğinde ping yapacağı roldür.",
                'Gösterilen Roller: Bu rol ile herhangi ping olmadan turnuva duyuruları görülebilir. (Özel bir turnuva yapmak istemediğiniz sürece, önerilen rol @ herkesdir.)',
                'Kanal Görünürlüğü: Vs./lobi oluşturduğunuzda, bot kayıtlı oyuncular için özel kanallar yaratacaktır. Burada seçtiğiniz rol bu özel kanalları görebilecek. Bu yüzden (turnuva yöneticisi) olarak etiketlendiğiniz bir rol seçin. Aksi takdirde, özel kanalları göremezsiniz.',
              ],
            },
          ],
        },
        {
          title: '7. Eşleşme Ayarları bölümünü doldurun',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(20).png',
              steps: [
                'Turnuva Formatı: Buna zaten Temel Bilgiler bölümünde seçtiğiniz oyun ve oyun formatı tarafından karar verilmiştir.',
                'Yalnız Kayıt (yalnızca takım etkinlikleri için): Rastgele takım oluşturmak ve önceden hazırlanmış takımlara izin vermek istemiyorsanız bunu kullanın.',
                'Maksimum Oyuncular / İzin Verilen Takımlar: İzin vermek istediğiniz maksimum takımı seçin.',
                'Kazanan Sayısı: İstediğiniz kazanan sayısını seçin. (~ 1: 3)',
                'Check In: Turnuvanız için giriş işlemini etkinleştirmek istiyorsanız bunu tıklayın. Etkinliğe katılmak için kayıtlı oyuncuların giriş yapması gerekir.',
                'Check In Süresi: Bu süre, turnuva başlamadan önce ne kadar süre giriş yapmanıza izin verileceğine karar verecektir. Check-in ve turnuva başlama zamanı arasında varsayılan 10 dakikalık bir süre vardır. Bu süre ayarlanabilir. (örn. 20 dakika seçtiyseniz, check-in işlemi turnuvadan 30 dakika önce başlayacak ve turnuva saatinden 10 dakika önce bitecektir.)',
                "Bekleme listesi: Turnuvanız için bekleme listesini etkinleştirmek istiyorsanız bunu kontrol edin. Kapalıyken, yukarıda seçtiğiniz Maks. Oyuncu / Ekip'e kadar oyuncuları alabileceksiniz.",
                "Sonuçları Otomatik Olarak Gönder: Bunu işaretleyerek, botların her bir tür için sonuç doğrulamasına izin veriyorsunuz. (örn. Team1 sonuçları bot'a iletir -> Bot, sonuç doğru mu - Team2'nin doğru olup olmadığını soruyorsa - Team2, onay verir.) Bunu kontrol ederek, her birini doğrulamanız gerekir. Sonucu eşleştirin ve kazananları manuel olarak ilerletin.",
                'Tamamlanmamış Takıma İzin Ver (yalnızca takım etkinlikleri için): Bunu seçerek, oyuncular takımları tamamlanmamış olsa bile takım olarak kaydolabileceklerdir. Bu, takım liderlerinin turnuvada yer açmak için ilk önce ekibine kaydolmalarına izin vermek istediğinizde yararlıdır. Bu kapalıysa, kayıt ancak her ekibin tüm üyeleri kişisel kayıtlarını tamamladığında tamamlanmış olur.',
              ],
            },
          ],
        },
        {
          title: "8. Devam etmek için Oluştur'u tıklayın.",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(21).png',
              steps: [
                '<i>Oluştur</i> öğesine tıklamak turnuvayı hemen ilan etmez. Turnuva aracı, turnuvayı <i>Yayınla</i> işlemini gerçekleştirmek isteyip istemediğinizi hemen sorar. <i>Yayınlamak</i> turnuvayı Discord sunucunuzda ilan eder. <i>Sonra</i> seçeneğini tıklayarak daha sonra <i>Yayınla</i> işlemi gerçekleştirebilirsiniz.',
                'Turnuvalarınızı yayınlamadan önce tüm bilgileri incelediğinizden emin olun. Bir kez yayınlandıktan sonra duyuruyu düzenleyemezsiniz.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'tournament_dashboard',
      title: 'Turnuva Gösterge Tablosu',
      navSectionItems: [
        {
          title:
            '1. Turnuvanız oluşturulduktan sonra, turnuvalarınızı Gösterge Tablosunda listelendiğini görebileceksiniz.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(24).png',
            },
          ],
        },
        {
          title:
            '2. Ayrıntıları ve kayıtlı oyuncuları görüntülemek, eşleşme ve lobileri yönetmek ve ödülleri göndermek için bir turnuvaya tıklayın. (Ödül özelliği yalnızca BlueStacks Discord sunucusundaki game.tv ortak turnuvalarında kullanılabilir.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(25).png',
              steps: [
                'Düzenleme: Bu düğmeyi kullanarak istediğiniz herhangi bir bilgiyi değiştirebilirsiniz. Araçtaki bilgileri düzenlemenin, Discord sunucunuzda zaten duyurulan bilgileri değiştirmeyeceğini unutmayın.',
                "Yayınla / Yayından Kaldır: Eğer sadece turnuvanızı yarattıysanız ve henüz yayınlamadıysanız, yayınlanmak için Yayımla düğmesine tıklayabilirsiniz. Turnuvanızı zaten yayınladıysanız, ancak yeni kayıt almaya devam etmek istiyorsanız, bunu Yayından Kaldır'ı tıklatarak yapabilirsiniz. (Yayından kaldır, Discord sunucunuzdaki duyuruyu kaldırmaz veya silmez.)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'during_registration_period',
      title: 'Kayıt Döneminde',
      navSectionItems: [
        {
          title:
            '1. Bu süre zarfında Discord kullanıcıları, kayıt o sırada açıksa “!Register” komutunu yazarak #turnuva lobisine kayıt olabilirler.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(26).jpg',
            },
          ],
        },
        {
          title:
            "2. “!Register” komutu girildiği anda, kullanıcılar Tourney Bot'tan oyun içi kimlikleri ve takım adları hakkında daha fazla bilgi isteyen doğrudan bir mesaj alırlar.",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(27).png',
            },
          ],
        },
        {
          title:
            "3. Kullanıcı özel mesajda doğru komutları kullanarak Tourney Bot'a geri döndüğünde, Bot'tan bir kayıt tamamlama mesajı alır. (Tamamlama iletisini almadılarsa, turnuva için kayıt olmadılar ve baştan kayıt olmayı tekrar denemelilerdir.)",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(28).png',
              steps: [
                'Kayıt işlemi tamamlanır tamamlanmaz, katılımcı yeni bir rol alacaktır; Rolün adı tam olarak turnuva adınızla aynı.',
              ],
            },
          ],
        },
        {
          title:
            '4. Discord kullanıcıları turnuvaya kaydolurken, turnuvanız için kaç kullanıcının kayıt olduğunu görebileceksiniz. Ayrıca isimlerini kontrol edebilir, oyuncuları kaldırabilir veya takımı kaldırabilirsiniz.',
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
            '5. Check-In açıksa, check-in işlemi ayarladığınız saatte başlayacaktır. (örn. Giriş süresini 30 dakika olarak belirlerseniz, giriş süreci turnuvadan 30 dakika önce başlayacaktır.)',
        },
        {
          title:
            "6. Hem kayıtlı kullanıcılar hem de bekleme listesindeki kullanıcılar, Tourney Bot'tan Discord'larına doğrudan mesajla bir check-in isteği alacaktır. Kullanıcılar, katılmaya hak kazanmak için Tourney Bot’un talimat ve giriş giriş komutunu doğru şekilde izlemelidir.",
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(31).png',
            },
          ],
        },
        {
          title:
            "7. Kullanıcılar, check-in komutunu doğru girmişlerse Tourney Bot'tan check-in tamamlama mesajı alacaklardır.",
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
      title: 'Turnuva Koordinasyonu - Eşleşme Rekabeti',
      navSectionItems: [
        {
          title:
            '1. Turnuva için eşleşme oluşturmanıza izin veren 3 koşul vardır:',
          innerContentList: [
            {
              steps: [
                'a. Turnuvanız dolu ve bekleme listesine izin vermediniz.',
                'b. Kaydınız sona erdi ve check-in işlemlerini etkinleştirmediniz.',
                'c. Kayıt ve giriş işlemleriniz sona erdi. (Turnuva saatinden 10 dakika önce)',
              ],
            },
          ],
        },
        {
          title:
            '2. Bu 3 koşuldan herhangi biri gerçekleştiğinde, Parantez sekmesinin altında Parantez Oluştur düğmesini göreceksiniz. Braketinizi oluşturmak için üzerine tıklayın.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(33).png',
            },
          ],
        },
        {
          title:
            '3. Turnuva aracınızda braket oluşturulduktan sonra, aynı braket Discord kanalında ilan edilecek ve tüm kayıtlı turnuva katılımcısına ping atılacaktır.',
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
            '4. Braket duyurusu ile birlikte, bot ayrıca tüm canlı maçlar için özel kanallar yaratacaktır. Her özel kanal sadece maçın katılımcılarını davet eder. Katılımcılar, bu özel kanalı, birbirleriyle eşleşmeleri hakkında iletişim kurmak (örneğin, oda kodunu paylaşmak, oyuncu kimliğini paylaşmak) ve sonucu bildirmek için kullanabilirler.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(36).png',
            },
          ],
        },
        {
          title:
            '5. Oyuncular “!Result <team name>” komutunu kullanarak sonuçları özel kanalda rapor etmelidir. !Result komutunun doğru şekilde kaydedilmesi için ekran görüntüsü eklenmelidir.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                'Sonuç doğru bir şekilde gönderildikten sonra, bot onayla cevap verecektir.',
              ],
            },
          ],
        },
        {
          title:
            '6. Bir sonuç gönderildiğinde, maçta kırmızı bir nokta görünecektir, böylece siz (turnuva yöneticisi) sonucun gönderildiğini görebilirsiniz.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(38).png',
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(39).png',
              steps: [
                '“Sonuçları Otomatik Olarak Gönder” açıksa, bot gerçek sonuç olarak gönderilen ilk sonucu alır. 5 dakika içinde yeni bir sonuç gönderilmezse, bot ilk sonuç gönderiminde kazanan takımı kazanan olarak ilan eder.',
                '“Sonuçları Otomatik Olarak Gönder” kapalıysa, ekli dosyaya bakmanız, sonucu doğrulamanız ve kazananı el ile girmeniz gerekir. (yani, kazananı tıklayın, ardından Sonuçları güncelle öğesini seçin.)',
              ],
            },
          ],
        },
        {
          title:
            '7. Maç sona erdiğinde ve finalist seçildiğinde, bot kazananı turnuva kanalında otomatik olarak ilan edecektir.',
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
      title: 'Turnuva Koordinasyonu - Lobi Yarışması',
      navSectionItems: [
        {
          title:
            '1. Turnuva için lobiler yaratmanıza izin veren 3 koşul vardır:',
          innerContentList: [
            {
              steps: [
                'a. Turnuvanız dolu ve bekleme listesine izin vermediniz.',
                'b. Kaydınız sona erdi ve check-in işlemlerini etkinleştirmediniz.',
                'c. Kayıt ve giriş işlemleriniz sona erdi. (Turnuva saatinden 10 dakika önce)',
              ],
            },
          ],
        },
        {
          title:
            '2. Bu 3 koşuldan herhangi biri yerine getirildiğinde, Lobi sekmesi altında Lobi Yarat düğmesini göreceksiniz. Lobilerinizi oluşturmak için üzerine tıklayın.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(42).png',
            },
          ],
        },
        {
          title:
            "3. Her lobide, 3 çizgili menü düğmesine ve ardından Kanal Oluştur'a tıklayın. Bunu yapmak, her lobide kesinlikle her lobide bulunan oyuncular için özel bir Discord kanalı oluşturacaktır.",
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
            '4. Siz (turnuva yöneticisi) her lobiye mesaj göndermek istiyorsanız (ör. Eşleşme kodu ve pw), her lobiden Mesaj gönder özelliğini kullanabilirsiniz. Gönderen, Tourney (bot) olacak, bu nedenle oyuncuların dikkatini çekecek gibi görünüyor. Veya yazarak doğrudan kanala mesaj gönderebilirsiniz. (Gönder bu durumda sen olacaksın.)',
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
            '5. Oyuncular için her bir eşleşme oluşturmuyorsanız, yalnızca bir oyun odası oluşturmak ve kod / pw paylaşmak için her özel kanalda bir oyuncu atayabilirsiniz.',
        },
        {
          title:
            '6. Oyuncular “!result <team name>” komutunu kullanarak sonuçları özel kanalda bildirebilirler. !result komutunun doğru şekilde kaydedilmesi için ekran görüntüsü eklenmelidir.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(37).png',
              steps: [
                'Sonuç doğru bir şekilde gönderildikten sonra, bot onayla cevap verecektir.',
              ],
            },
          ],
        },
        {
          title:
            '7. Bir sonuç gönderildiğinde, maçta kırmızı bir nokta görünecektir, böylece siz (turnuva yöneticisi) sonucun gönderildiğini görebilirsiniz. Gönderilen ekran görüntülerini görüntülemek için Sonuçları görüntüle üzerine tıklayın.',
          innerContentList: [
            {
              imageCaption:
                'Sonucu zaten biliyorsanız sonuç gönderimini beklemenize gerek yoktur. (örneğin, maçı izliyorsanız, sonucu zaten biliyorsunuzdur.)',
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
          title: '8. Her lobinin kazananlarını seçmek için,',
          innerContentList: [
            {
              imageCaption:
                '3 çizgili menü düğmesine ve ardından Puan Kayıt düğmesine tıklayın.',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(49).png',
              steps: [
                'Gönderilen sonuçlara göre oyuncu puanlarını kaydedin. (Kazanan oyuncular daha yüksek puanlar almalıdır.)',
                'Çok turlu eşleşme için, alttaki Round Oluştur düğmesini tıklayın. Sonra sonuçlarına göre daha fazla puan kaydedin.',
              ],
            },
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(50).png',
              steps: ['Kayıt yapıldıktan sonra Güncelle düğmesine tıklayın.'],
            },
          ],
        },
      ],
    },
    {
      id: 'transferring_players',
      title: 'Oyuncuları Yeni Lobilere Aktarma',
      navSectionItems: [
        {
          title:
            '1. Eğer oyuncuların yeni lobilere ilerlediği / transfer edildiği lobide bir turnuvaya ihtiyacınız varsa, Turnuva Formatı altında “Eleme” yi seçmelisiniz.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(51).png',
              steps: [
                'Lobby Sayısı: İlk turunuz için kaç tane başlangıç lobisi istiyorsunuz?',
                'Takım Sayısı: Her lobi için kaç takım olacak?',
              ],
            },
            {
              imageCaption:
                '<i>* Tek Lobi veya Birden Çok Lobi turnuvası oluşturursanız, yeni lobiler oluşturma seçeneğiniz olmaz ve bu nedenle oyuncuları yeni lobilere taşıyamaz / ilerletemezsiniz. Aşağıdaki örnekte görebileceğiniz gibi (Çoklu Lobi turnuvası), yeni bir lobi oluşturmak için “+” düğmesi eksik.</i>',
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(52).png',
            },
          ],
        },
        {
          title:
            '2. Turnuva Formatınız olarak “Eleme” usulü seçiliyse, seçtiğiniz ilk Lobi Sayılarına ek olarak yeni bir lobi oluşturma seçeneği göreceksiniz.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(53).png',
            },
          ],
        },
        {
          title:
            '3. İlk lobileriniz hala aktif de olsa, yeni bir lobi oluşturmak için “+” düğmesine tıklayın. Bu yeni lobi, oyuncularınızı gelecek dönem boyunca ilerleteceğiniz/transfer edeceğiniz yerdir.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(54).png',
              steps: [
                'Yeni lobi, oluşturduğunuzda boş olmalıdır.',
                'Birden fazla yeni lobi yaratmanız gerekiyorsa, tekrar “+” düğmesine tıklayın.',
              ],
            },
          ],
        },
        {
          title:
            '4. Oyuncuları yeni lobiye ilerletmek / transfer etmek için önce mevcut lobileri SONLANDIRMALIDIR. (Lütfen bir lobinin nasıl sonlandırılacağına ilişkin <a href=\'how-to-use-tourney?tab=tournament-lobbied-competition\'>Turnuva Sonlandırma - Lobbi Yarışması</a> bölümüne bakın) Lobilerinizi bitirdikten sonra, yeni lobinizdeki "Lobiyi Düzenle" düğmesine tıklayın.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(55).png',
              steps: [
                '<i> * Tüm turnuvayı sonlandırmamak için lütfen dikkatli olun! Tüm lobileri bitirdiğinizde, size turnuvayı sonlandırmak isteyip istemediğinizi soran bir pencere açar. Turnuvayı sonlandırırsan, oyuncu transfer edemez veya yeni lobiler ekleyemezsin.</i>',
              ],
            },
          ],
        },
        {
          title: '5. Oyuncuları taşımak istediğiniz lobiyi seçin.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(56).png',
              steps: [
                "Birden fazla lobiden toplu transferler yapmak için Lobi Ekle'yi tıklayabilirsiniz.",
                "Bu örnekte, sadece Lobi 1 ve Lobi 2 sona erdi. Lobi 3 hala aktif. Bu yüzden Lobi 1 ve 2'yi sadece seçenek olarak görüyorsunuz.",
              ],
            },
          ],
        },
        {
          title: '6. Taşımak istediğiniz oyuncuların pozisyonlarını seçin.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(57).png',
              steps: [
                'Birden fazla pozisyon seçebilirsiniz.',
                'Pozisyon lobi bittikten sonra oyuncunun yerleştirilmesini ifade eder. (1. pozisyon = o lobide birinci olan oyuncu / takım)',
                "Örneğin, Lobby 1'den ilk 2 oyuncuyu ilerletmek istiyorsanız, 1 ve 2 pozisyonlarını seçersiniz.",
              ],
            },
          ],
        },
        {
          title:
            '7. Aktarmak istediğiniz oyuncuları seçtikten sonra, Kaydet düğmesine tıklayın. Transfer tamamlandı!',
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
      title: 'Bir Turnuvayı Sonlandırmak - Bracketed Rekabet',
      description:
        'Brackets sekmesinde final kazanan seçildikten sonra turnuva otomatik olarak sona erecektir.',
    },
    {
      id: 'ending_a_tournament_lobbied_competition',
      title: 'Turnuvayı Sonlandırmak - Lobi Rekabeti',
      navSectionItems: [
        {
          title:
            '1. Tüm lobiler doğru skorlarla ve kazananlarla güncellendiğinde, 3 çizgili menü düğmesine, ardından her lobi için Lobi Sonlandır düğmesine tıklayın. Bunu tüm lobiler için yapın. (Güncelleştirildiği anda lobiyi sonlandırmak iyi bir uygulamadır. Lobiler sona ermediğinde oyuncuları ilan edemezsiniz.)',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(59).png',
            },
          ],
        },
        {
          title:
            '2. Tüm lobiler sona erdiğinde, game.tv aracı size turnuvanızın biteceğini ve sonuçların yayınlanacağını söyleyecektir.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(60).png',
              steps: [
                `Turnuvayı sonlandırmak ve sonuçları yayınlamak istiyorsanız, <i>Devam</i>'ı tıklayın.`,
                `Turnuvayı sonlandırmak veya sonuçları yayınlamak istemiyorsanız, <i>Kapat.</i>'ı tıklayın (Turnuva bitmeyecek ve sonuçlar yayınlanmayacak.)`,
                `<i>Kapat</i>'ı seçtiyseniz, turnuvayı sonlandırma ve sonuçları yayınlama seçeneği olacaktır.`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sending_prizes_to_winners',
      title: 'Kazananlara Ödül Gönderme',
      description:
        '<p><i>** Bu özellik yalnızca BlueStacks Discord sunucularında turnuva üreten game.tv ortakları için geçerlidir.</i></p>',
      navSectionItems: [
        {
          title:
            '1. Kazananlar seçildikten ve turnuva doğru bir şekilde sona erdikten sonra, Ödüller sekmesinde listelenen kazananları görebilirsiniz.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(61).png',
            },
          ],
        },
        {
          title: '2. Her bir kazanan için bilgileri doldurmanız yeterlidir.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(62).png',
              steps: [
                `Ödül tercihini kazananlarla iki kez kontrol ettiğinizden emin olun (ör. Ülke, ödül türü vb.)',
                "Bazı seçenekler bazı coğrafi konumlar için geçerli olmayabilir. Mevcut tüm ödül seçeneklerini görmek için lütfen <a href='https://www.seagm.com/'>https: //www.seagm.com/</a> adresini ziyaret edin.`,
                `Her kazanan için birden fazla ödül ayarlayabilirsin. (örn. Google Play (ABD) 20 ABD doları ödülü için iki Google Play (ABD) 10 ABD doları ödülü ayarlamanız gerekir.)`,
                `Genel olarak, yeterli bir ödül seçeneği / tutarı bulmak için 4 $ 'a kadar harcama yapmamız yeterlidir. Steam için, 1 - 5 $ / 10 $ için lütfen sırasıyla Steam (Hong Kong) 40 HKD / 80 HKD kullanın.2 - 20 $ / 25 $ için lütfen Steam (Malezya) RM 80 / RM 100 kullanın.`,
              ],
            },
          ],
        },
        {
          title:
            '3. Tüm bilgiler doğru bir şekilde doldurulduktan sonra, Ödül gönder düğmesine tıklayın.',
          innerContentList: [
            {
              steps: [
                "Bu, game.tv admin'e bir ödül dağıtım isteği gönderecektir. Ödül bilgilerini gözden geçirecek, sonra isteği onaylayacak veya reddedeceklerdir.",
                "Talep onaylandıktan sonra kazananlar, ödüllendirilebilir hediye kodları içeren Tourney Bot'tan bir özel mesaj alacaklardır. Ayrıca, teslimatın Ödüller sekmesi altında tamamlandığını göreceksiniz.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'cloning_existing_tournaments',
      title: 'Mevcut Turnuvaları Klonlamak',
      description:
        '<p>Mevcut turnuvaları klonlayarak, turnuva sahipleri her defasında detaylar ayarlamak zorunda kalmadan aynı formattaki turnuvaları kolayca tekrar tekrar yapabilirler.<br /><i> ** Lobi ve bracket şeklinde oluşturulan bir turnuvayı klonlayamaz ve turnuva modunu değiştiremezsiniz.</i></p>',
      navSectionItems: [
        {
          title:
            '1. Panonuzdan çoğaltmak istediğiniz bir turnuva bulun. Turnuvanın sağ ucunda, 3 çizgili menü düğmesine tıklayın.',
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(63).png',
              steps: [
                'Turnuvayı bitirdiyseniz, Düzenle ve Duraklat düğmesi kullanılamaz.',
                'Turnuvayı daha önce temizlediyseniz, Temizle düğmesine basılamaz.',
              ],
            },
          ],
        },
        {
          title: `2. <i>Kopyala</i>'ya tıklayın. Birtakım minimum bilgileri girmeniz gereken yeni bir ekran görünecektir.`,
          innerContentList: [
            {
              imageUrl:
                'https://cdn.game.tv/images/meet-tourney/dock-images/pasted image 0(64).png',
              steps: [
                'Turnuva Adı: Bu, mevcut turnuvadan devredilemez. Turnuva için yeni bir isim girmeniz gerekir.',
                'Discord Server: Bu mevcut turnuvadan devam edecek. Mevcut turnuvayı başka bir sunucuya kopyalamak istiyorsanız farklı bir sunucu seçin.',
                'Oyun: Oyun modları mevcut turnuvadan devam eder. Değiştirmek istiyorsanız kurulumu özelleştirin.',
                'Takvimi: Takvimi mevcut turnuvadan devralmayacak. Yeni bir program girmeniz gerekecek.',
                'Ödüller: Ödül bilgisi mevcut turnuvadan taşınır. Değiştirmek istiyorsanız düzenleyin.',
                'Yayın: Bu mevcut turnuvadan devam edecek. Değiştirmek istiyorsanız düzenleyin.',
                'Gelişmiş Ayarlar: Diğer kurulum ayrıntılarını değiştirmek istiyorsanız, bunu tıklamanız sizi orijinal kurulum seçeneklerine götürür.',
              ],
            },
          ],
        },
      ],
    },
  ],
};
