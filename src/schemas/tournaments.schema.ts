import * as mongoose from 'mongoose';
import { generate } from 'rxjs';

// todo: have to create another file for enums and import enums from there
const localeEnum = [
  'en-US',
  'ru-RU',
  'pt-BR',
  'es-ES',
  'it-IT',
  'de-DE',
  'tr-TR',
  'fr-FR',
  'ja-JP',
  'th-TH',
  'zh-TW',
  'vi-VN',
  'ko-KR',
  'pl-PL',
  'others',
];
const geoEnum = [
  'br',
  'ca',
  'id',
  'fr',
  'de',
  'in',
  'it',
  'jp',
  'kr',
  'pl',
  'ru',
  'es',
  'se',
  'tw',
  'th',
  'tr',
  'us',
  'am',
  'others',
];
const deviceEnum = ['default', 'mobile', 'desktop', 'tablet'];
const timeZoneEnum = [{}];
const platformEnum = ['web', 'discord'];
const matchStyleEnum = ['lobby', 'brackets'];

export const TournamentsSchema = new mongoose.Schema({
  tournamentId: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  createdBy: [
    {
      userId: {
        type: String,
        // require: true
      },
      userName: {
        type: String,
        require: true,
      },
    },
  ],
  platform: {
    type: String,
    enum: platformEnum,
  },
  gameFormat: {
    type: String,
  },
  adminLocale: {
    type: String,
    enum: localeEnum,
    required: true,
  },
  adminTimeZone: {
    type: Object,
    enum: timeZoneEnum,
  },
  geo: {
    type: String,
    enum: geoEnum,
  },
  gamePkg: {
    type: String,
    require: true,
  },
  game: {
    name: [
      {
        text: {
          type: String,
          require: true,
        },
        locale: {
          type: String,
          // enum: localeEnum
        },
      },
    ],
    slug: {
      type: String,
    },
    media: mongoose.Schema.Types.Mixed,
  },
  media: {
    mobile: {
      logoUrl: {
        type: String,
        default: '',
      },
      bannerUrl: {
        type: String,
      },
    },
    desktop: {
      logoUrl: {
        type: String,
        default: '',
      },
      bannerUrl: {
        type: String,
      },
    },
    default: {
      logoUrl: {
        type: String,
        default: '',
      },
      bannerUrl: {
        type: String,
      },
    },
  },
  prizes: [
    {
      quantity: {
        type: Number,
      },
      unit: {
        type: String,
      },
      name: {
        type: String,
      },
    },
  ],
  status: {
    type: String,
  },
  tournamentGuild: {
    type: String,
  },
  tournamentStartDate: {
    type: Date,
    require: true,
  },
  tournamentEndDate: {
    type: Date,
    require: true,
  },
  registrationStartDate: {
    type: Date,
    require: true,
  },
  registrationEndDate: {
    type: Date,
    require: true,
  },
  maxTeams: {
    type: Number,
    require: true,
  },
  maxTeamPerMatch: {
    type: Number,
    require: true,
  },
  maxPlayerPerTeam: {
    type: Number,
    require: true,
  },
  minPlayerPerTeam: {
    type: Number,
    require: true,
  },
  matchStyle: {
    type: String,
    enum: matchStyleEnum,
  },
  // need to figure it, and replace by url
  discordUrl: {
    type: String,
  },
  streamUrl: {
    type: String,
  },
  esportsUrl: {
    type: String,
  },
  isRandomTeamAllowed: {
    type: Boolean,
  },
  isCheckInRequired: {
    type: Boolean,
  },
  updatedBy: {
    type: String,
  },
  updateAt: {
    type: Date,
    default: new Date(),
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
