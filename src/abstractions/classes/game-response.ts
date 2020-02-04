import { IMedia } from '../types/media.interface';
import { ITournamentType } from '../types/tournament-type.interface';

export class GameResponse {
  constructor(game: any, locale: string) {
    this.primaryPkg = game ? game.primaryPkg : '';
    this.gameId = game.gameId;
    this.bstId = game.bstId;
    this.name =
      game && game.name
        ? (
            game.name.find(ele => ele.locale === locale) ||
            game.name.find(ele => ele.locale === 'en')
          ).text
        : '';
    this.description =
      game && game.description
        ? (
            game.description.find(ele => ele.locale === locale) ||
            game.description.find(ele => ele.locale === 'en')
          ).text
        : '';
    this.slug = game ? game.slug : '';
    this.developer = game ? game.developer : '';
    this.totalRating = game ? game.totalRating : '';
    this.avgRating = game ? game.avgRating : '';
    this.media = {
      mobile: { logoUrl: '', bannerUrl: '', stretchImageUrl: '', iconUrl: '' },
      desktop: { logoUrl: '', bannerUrl: '', stretchImageUrl: '', iconUrl: '' },
      default: { logoUrl: '', bannerUrl: '', stretchImageUrl: '', iconUrl: '' },
    };
    if (game && game.media && game.media.mobile) {
      if (game.media.mobile['logoUrl']) {
        this.media.mobile['logoUrl'] = game.media.mobile['logoUrl']['en'] || '';
      }
      if (game.media.mobile['bannerUrl']) {
        this.media.mobile['bannerUrl'] =
          game.media.mobile['bannerUrl']['en'] || '';
      }
      if (game.media.mobile['stretchImageUrl']) {
        this.media.mobile['stretchImageUrl'] =
          game.media.mobile['stretchImageUrl']['en'] || '';
      }
      if (game.media.mobile['iconUrl']) {
        this.media.mobile['iconUrl'] = game.media.mobile['iconUrl']['en'] || '';
      }
    }

    if (game && game.media && game.media.desktop) {
      if (game.media.desktop['logoUrl']) {
        this.media.desktop['logoUrl'] =
          game.media.desktop['logoUrl']['en'] || '';
      }
      if (game.media.desktop['bannerUrl']) {
        this.media.desktop['bannerUrl'] =
          game.media.desktop['bannerUrl']['en'] || '';
      }
      if (game.media.desktop['stretchImageUrl']) {
        this.media.desktop['stretchImageUrl'] =
          game.media.desktop['stretchImageUrl']['en'] || '';
      }
      if (game.media.desktop['iconUrl']) {
        this.media.desktop['iconUrl'] =
          game.media.desktop['iconUrl']['en'] || '';
      }
    }

    if (game && game.media && game.media.default) {
      if (game.media.default['logoUrl']) {
        this.media.default['logoUrl'] =
          game.media.default['logoUrl']['en'] || '';
      }
      if (game.media.default['bannerUrl']) {
        this.media.default['bannerUrl'] =
          game.media.default['bannerUrl']['en'] || '';
      }
      if (game.media.default['stretchImageUrl']) {
        this.media.default['stretchImageUrl'] =
          game.media.default['stretchImageUrl']['en'] || '';
      }
      if (game.media.default['iconUrl']) {
        this.media.default['iconUrl'] =
          game.media.default['iconUrl']['en'] || '';
      }
    }
    this.tournamentTypes =
      game && game.tournamentTypes
        ? game.tournamentTypes.map(type => {
            return {
              ...{
                name: type
                  ? (
                      type.name.find(ele => ele.locale === locale) ||
                      type.name.find(ele => ele.locale === 'en')
                    ).text
                  : '',
                media: {
                  mobile: {
                    imageUrl: type.media.mobile
                      ? type.media.mobile['imageUrl']['en']
                      : '',
                  },
                  desktop: {
                    imageUrl: type.media.desktop
                      ? type.media.desktop['imageUrl']['en']
                      : '',
                  },
                  default: {
                    imageUrl: type.media.default
                      ? type.media.default['imageUrl']['en']
                      : '',
                  },
                },
                description: type
                  ? (
                      type.description.find(ele => ele.locale === locale) ||
                      type.description.find(ele => ele.locale === 'en')
                    ).text
                  : '',
              },
            };
          })
        : {};
  }

  primaryPkg: string;
  name: string;
  slug: string;
  media: IMedia;
  description: string;
  tournamentTypes: ITournamentType[];
  developer: object;
  totalRating: number;
  avgRating: number;
  gameId: string;
  bstId: string;
}
