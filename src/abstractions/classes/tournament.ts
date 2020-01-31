import { ITournament } from '../types/tournament.interface';
import { IGame } from '../types/game.interface';
import { IMedia } from '../types/media.interface';
import { GameResponse } from './game-response';

export class Tournament implements ITournament {
  constructor(tournaments: any, locale: string, gameData?: any) {
    this.tournamentId = tournaments.tournament_id;
    this.adminLocale = tournaments.admin_locale || 'others';
    this.adminTimeZone = tournaments.admin_timezone || '';
    this.description = tournaments.details || '';
    this.esportsUrl = tournaments.tournament_url || '';
    this.gameFormat = tournaments.game_format || '';
    this.geo = tournaments.geo || 'others';
    this.media = {
      default: {
        logoUrl: '',
        bannerUrl: tournaments.cover_url || '',
      },
    };
    this.name = tournaments.name || '';
    this.platform = tournaments.tournament_type
      ? tournaments.tournament_type.toLowerCase()
      : '';
    this.registrationEndDate = tournaments.reg_end_date || '';
    this.registrationStartDate = tournaments.reg_start_date || '';
    this.streamUrl = tournaments.stream_url || '';
    this.tournamentEndDate = tournaments.end_date || '';
    this.tournamentStartDate = tournaments.start_date || '';
    this.primaryPkg = tournaments.game_pkg || '';
    this.createdBy = {
      userId: tournaments.owners || '',
      userName: tournaments.admin_username || '',
    };
    this.tournamentSlug = tournaments.tournament_slug;
    this.gameName = tournaments.game_name;
    this.gameCategory = tournaments.game_category;
    this.gameId = tournaments.game_id;
    this.gameIconUrl = tournaments.game_icon_url;
    this.rules = tournaments.rules;
    this.prizes = tournaments.prizes;
    this.teamSize = tournaments.team_size;
    this.discordUrl = tournaments.discord_url || '';
    this.pwaUrl = tournaments.pwa_url || '';
    if (gameData && gameData.gameId) {
      this.game = new GameResponse(gameData, locale);
    }
  }

  name: string;
  game?: IGame;
  media?: IMedia;
  description?: string;
  platform?: string;
  tournamentStartDate?: Date;
  tournamentEndDate?: Date;
  registrationStartDate?: Date;
  registrationEndDate?: Date;
  [key: string]: any;
}
