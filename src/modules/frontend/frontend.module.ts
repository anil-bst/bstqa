import { Module, HttpModule } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { SitemapController } from './controllers/sitemap/sitemap.controller';
import { ApiService } from './services/api/api.service';
import { GamePagesController } from './controllers/game-pages/game-pages.controller';
import { TournamentPagesController } from './controllers/tournaments/tournament-pages.controller';
import { StaticPagesController } from './controllers/static-pages/static-pages.controller';
import { ApiModule } from '../api';
import { GamesModule } from '../api/games/games.module';
import { TournamentsModule } from '../api/tournaments/tournaments.module';
import { GamesController } from '../api/games/games.controller';
import { TournamentsPrivateController } from '../api/tournaments/tournaments-private/tournaments-private.controller';

const subModules = [];
const providers = [ApiService];

@Module({
  providers,
  imports: [
    ApiModule,
    GamesModule,
    TournamentsModule,
    HttpModule.register({ timeout: 25000 }),
    SharedModule,
    ...subModules,
  ],
  exports: [...subModules, ...providers],
  controllers: [
    SitemapController,
    GamePagesController,
    TournamentPagesController,
    StaticPagesController,
    GamesController,
    TournamentsPrivateController,
    TournamentsPrivateController,
  ],
})
export class FrontendModule {}
