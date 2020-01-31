import { IGame } from './game.interface';
import { IApiResponseMetaData } from './api-response-metadata.interface';
import { IMedia } from './media.interface';

export interface ITournament {
  name: string;
  game?: IGame;
  media?: IMedia;
  description?: string;
  platform?: string;
  tournamentStartDate?: Date;
  tournamentEndDate?: Date;
  registrationStartDate?: Date;
  registrationEndDate?: Date;
  metaData?: IApiResponseMetaData;
  [key: string]: any;
}
