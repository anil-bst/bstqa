import { Module, HttpModule } from '@nestjs/common';
import { TournamentsModule } from './tournaments/tournaments.module';
import { GamesModule } from './games/games.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@app/config/config.module';
import { ConfigService } from '@app/config/config.service';
import { CacheModule } from '../cache/cache.module';

@Module({
  imports: [
    HttpModule,
    TournamentsModule,
    GamesModule,
    CacheModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGO_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: false,
        reconnectTries: Math.max,
        reconnectInterval: 3000,
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [GamesModule, TournamentsModule],
})
export class ApiModule {}
