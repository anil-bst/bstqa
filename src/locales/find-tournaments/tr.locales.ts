import { IFindTournamentLocale } from '@app/abstractions';
import { SupportedLocalesEnum } from '@app/enums';
const language = SupportedLocalesEnum.TURKISH;

export const FindTournamentLocalesTurkish: IFindTournamentLocale = {
  metadata: {
    title: 'Esports Turnuvaları Bul - Giriş Ücreti Yok | Game.tv',
    description:
      'Tüm dünyada ücretsiz olarak katılabileceğiniz esports turnuvalarını arayın.',
  },
  heading: 'Turnuvalara Göz Atın',
  content:
    'Düzinelerce mobil ve PC oyununda milyonlarca Discord sunucusunda gerçekleşen esports turnuvalarını bulun.',
  searchForm: {
    formPlaceholder: 'Oyun Arama örn. Pubg',
    searchInfo: 'Turnuvaları göster',
    noresult: 'Oyun bulunamadı! Lütfen başka bir oyun arayın.',
  },
  gameInfo: {
    title: 'Beğendiğiniz bir turnuva görmüyor musunuz?',
    content: 'Kendinize özel oluşturun',
    noTournamentsTitle:
      'Hata! Şu anda yaklaşmakta olan bir Turnuva bulunmuyor.',
    noTournamentsContent: 'Mevcut tüm turnuvaları görüntüleyin',
    noTournamentsLink: 'Canlı ya da Geçmiş',
    linkUrl: `/${language}/create-a-tournament`,
  },
  topGameSection: { title: 'En İyi Oyunlar' },
  tournamentTitle: 'Turnuvalar',
  platformStr: 'PLATFORM',
  joinHeading: 'KATIL',
  viewMore: 'Daha fazla göster',
  gamePageUrl: `/${language}/find-tournaments`,
  filterIcon: 'https://cdn.game.tv/tournaments/filter.png',
  discordIcon: 'https://cdn.game.tv/tournaments/discord.png',
  locales: `/${language}`,
};
