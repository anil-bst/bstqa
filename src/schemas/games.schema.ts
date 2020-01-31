import * as mongoose from 'mongoose';

// todo: have to create another file for enums and import enums from there

const localeEnum = ['en', 'de', 'fr'];
const geoEnum = ['us', 'in', 'asp'];
const deviceEnum = ['default', 'mobile', 'desktop', 'tablet'];
const statusEnum = ['draft', 'published', 'archieved'];
const categoryEnum = ['Adventure'];
const tournamentsTypesEnum = ['web', 'discord'];

export const GamesSchema = new mongoose.Schema({
  // game_id from tournaments
  gameId: {
    type: String,
    require: true,
  },
  // md5 of gameId
  bstId: {
    type: String,
    require: true,
  },
  primaryPkg: {
    type: String,
    require: true,
  },
  primaryGeo: {
    type: String,
    default: 'us',
  },
  supportedGeos: [
    {
      type: String,
      enum: geoEnum,
    },
  ],
  pkgName: [
    {
      name: {
        type: String,
        require: true,
      },
      locale: [
        {
          type: String,
          // enum: localeEnum
        },
      ],
    },
  ],
  name: [
    {
      text: {
        type: String,
        require: true,
      },
      locale: {
        type: String,
        enum: localeEnum,
      },
    },
  ],
  slug: {
    type: String,
    require: true,
  },
  media: mongoose.Schema.Types.Mixed,
  description: [
    {
      text: {
        type: String,
        require: true,
      },
      locale: {
        type: String,
        enum: localeEnum,
      },
    },
  ],
  prizes: [
    {
      unit: {
        type: String,
      },
      name: {
        type: String,
      },
    },
  ],
  tournamentTypes: [
    {
      name: [
        {
          text: {
            type: String,
            require: true,
          },
          locale: {
            type: String,
            enum: localeEnum,
          },
        },
      ],
      media: mongoose.Schema.Types.Mixed,
      description: [
        {
          text: {
            type: String,
            require: true,
          },
          locale: {
            type: String,
            enum: localeEnum,
          },
        },
      ],
    },
  ],
  category: {
    type: String,
    enum: categoryEnum,
  },
  // todo: have to create ref of other pkg
  similarGames: [
    {
      type: String,
    },
  ],
  dveloper: {
    name: {
      type: String,
    },
    id: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  totalRating: {
    type: Number,
  },
  avgRating: {
    type: Number,
  },
  communityCount: {
    type: Number,
  },
  tournamentCount: {
    type: Number,
  },
  // #todo: have to change seo schema
  seo: {
    type: mongoose.Schema.Types.Mixed,
  },
  status: {
    type: String,
    enum: statusEnum,
    default: 'draft',
  },
  startingInstruction: [
    {
      tournamentType: {
        type: String,
        enum: tournamentsTypesEnum,
      },
      instructions: [
        {
          text: [
            {
              type: {
                type: String,
              },
              locale: {
                type: String,
              },
            },
          ],
          position: {
            type: Number,
          },
        },
      ],
    },
  ],
  createdBy: {
    type: String,
    require: true,
  },
  updatedBy: {
    type: String,
    require: true,
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
