import { Module, MiddlewareConsumer, HttpModule } from '@nestjs/common';
import { TournamentsPublicController } from './tournaments-public/tournaments-public.controller';
import { TournamentsService } from './tournaments.service';
import { MongooseModule } from '@nestjs/mongoose';

import { TournamentsSchema } from '@schemas/tournaments.schema';
import { GamesSchema } from '@schemas/games.schema';

import { PrivateApiMiddleware } from '@middlewares/private-api/private-api.middleware';

import { ConfigModule } from '@config/config.module';
import { CacheModule } from '@app/modules/cache/cache.module';
import { GamesService } from '../games/games.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Games', schema: GamesSchema },
      { name: 'Tournaments', schema: TournamentsSchema },
    ]),
    ConfigModule,
    CacheModule,
    HttpModule,
  ],
  controllers: [TournamentsPublicController],
  providers: [TournamentsService, GamesService],
  exports: [TournamentsService],
})
export class TournamentsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PrivateApiMiddleware).forRoutes('/api-web/private');
  }
}
