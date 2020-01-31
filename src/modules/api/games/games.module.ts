import { Module, HttpModule } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesSchema } from '@app/schemas/games.schema';
import { TournamentsSchema } from '@app/schemas/tournaments.schema';
import { TournamentsService } from '../tournaments/tournaments.service';
import { CacheModule } from '@app/modules/cache/cache.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Games', schema: GamesSchema },
      { name: 'Tournaments', schema: TournamentsSchema },
    ]),
    CacheModule,
    HttpModule,
  ],
  controllers: [GamesController],
  providers: [GamesService, TournamentsService],
  exports: [GamesService],
})
export class GamesModule {}
