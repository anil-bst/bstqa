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
      mobile: {
        logoUrl:
          game && game.media && game.media.mobile
            ? game.media.mobile['logoUrl']['en']
            : '',
        bannerUrl:
          game && game.media && game.media.mobile
            ? game.media.mobile['bannerUrl']['en']
            : '',
        stretchImageUrl:
          game && game.media && game.media.mobile
            ? game.media.mobile['stretchImageUrl']['en']
            : '',
      },
      desktop: {
        logoUrl:
          game && game.media && game.media.desktop
            ? game.media.desktop['logoUrl']['en']
            : '',
        bannerUrl:
          game && game.media && game.media.desktop
            ? game.media.desktop['bannerUrl']['en']
            : '',
        stretchImageUrl:
          game && game.media && game.media.desktop
            ? game.media.desktop['stretchImageUrl']['en']
            : '',
      },
      default: {
        logoUrl:
          game && game.media && game.media.default
            ? game.media.default['logoUrl']['en']
            : '',
        bannerUrl:
          game && game.media && game.media.default
            ? game.media.default['bannerUrl']['en']
            : '',
        stretchImageUrl:
          game && game.media && game.media.default
            ? game.media.default['stretchImageUrl']['en']
            : '',
      },
    };
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
