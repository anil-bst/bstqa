import { IHowToJoin } from '@app/abstractions';

export const HowToJoinTurkish: IHowToJoin = {
  blocks: [
    {
      gamePlatform: 'Discord',
      type: 'discord',
      stepsHeading: 'Adımlar',
      stepsContent: [
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            "Turnuva ayrıntıları için Discord'ta yer alan #turnuva-bilgisi kanalına gidin",
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
        },
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            "#turnuva-bilgi kanalının altındaki #turnuva-lobisi'ne tıklayın",
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/2.jpg',
        },
        {
          stepItem: 'Turnuvaya katılmak için, #turnuva-lobisi kanalına!',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/3.jpg',
        },
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            "Tourney Botu size bir özel mesaj gönderecek, buraya; !joinsolo &lt;oyun içi gerçek adınız>'ı yazıp, bu mesaja cevap verin.",
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/4.jpg',
        },
        {
          stepItem: '{{howToJoinTitle}} turnuvasına başarıyla kayıt oldunuz.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/discord/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/discord/1.jpg',
    },
    {
      gamePlatform: 'Game.tv web app',
      type: 'web',
      stepsHeading: 'Adımlar',
      stepsContent: [
        {
          stepItem:
            // tslint:disable-next-line: quotemark
            "<a href='/user' class='click-here'>Web App</a>e gidin ve Discord ya da Twitter hesabınızla giriş yapın.",
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
        },
        {
          stepItem:
            'Turnuva Takvimi sekmesinin altında yaklaşmakta olan {{howToJoinTitle}} turnuvalarının listesini bulabilirsiniz.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/2.jpg',
        },
        {
          stepItem:
            'Katılmak istediğiniz turnuvaya tıklayın; Sayfanın sonunda bir Kayıt butonu göreceksiniz.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/3.jpg',
        },
        {
          stepItem:
            'Oyun Adınızı girin ve sayfanın sonundaki Kayıt düğmesine tıklayın.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/4.jpg',
        },
        {
          stepItem: 'Kayıt tamamlandı.',
          imgUrl: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/5.jpg',
        },
      ],
      firstImage: 'https://cdn.game.tv/game-page/join-tournament/Game.tv/1.jpg',
    },
  ],
};
