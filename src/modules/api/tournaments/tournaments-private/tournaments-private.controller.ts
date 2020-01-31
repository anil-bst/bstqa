import { Controller, Get } from '@nestjs/common';
import { TournamentsService } from '../tournaments.service';
import { Tournaments } from '../tournaments.interface';

@Controller('/api-web/private/v1/tournaments')
export class TournamentsPrivateController {
  constructor(protected readonly tournamentService: TournamentsService) {}
  @Get('/flush-cache')
  async flushCache(): Promise<any> {
    return await this.tournamentService.flushCache();
  }
}
