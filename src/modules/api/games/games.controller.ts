import { Controller, Param, Get, Query } from '@nestjs/common';
import { GamesService } from './games.service';
import { Games } from './games.interface';

@Controller('/api-web/public/v1/games')
export class GamesController {
  constructor(private readonly gameService: GamesService) {}

  @Get('/')
  async getGames(
    @Query('q') queryText: string,
    @Query('page') page: string,
    @Query('limit') limit: string,
    @Query('locale') locale: string,
  ): Promise<Games[]> {
    return await this.gameService.getGameByName(queryText, page, limit, locale);
  }

  @Get('/top')
  async getTopGames(
    @Query('page') page: string,
    @Query('limit') limit: string,
    @Query('locale') locale: string,
  ): Promise<Games[]> {
    return await this.gameService.getTopGame(page, limit, locale);
  }

  @Get('/slugs')
  async getGamesSlugs(): Promise<any> {
    return await this.gameService.getGamesSlugs();
  }

  @Get('/:gameSlug')
  async getGameBySlug(
    @Param('gameSlug') gameSlug: string,
    @Query('locale') locale: string,
  ): Promise<Games[]> {
    return await this.gameService.getGameBySlug(gameSlug, locale);
  }
}
