import { Controller, Get, Query } from '@nestjs/common';
import { TournamentsService } from '../tournaments.service';
import { Tournaments } from '../tournaments.interface';

@Controller('/api-web/public/v1/tournaments')
export class TournamentsPublicController {
  constructor(private readonly tournamentService: TournamentsService) {}

  @Get('/')
  async getTournaments(@Query() reqQueries: any): Promise<Tournaments[]> {
    return await this.tournamentService.getTournaments(reqQueries);
  }

  @Get('/test')
  async abc(
    @Query('tournamnetId') tournamnetId: string,
    @Query('locale') locale: any,
  ): Promise<Tournaments[]> {
    return await this.tournamentService.getTournamentById(tournamnetId, locale);
  }
}
