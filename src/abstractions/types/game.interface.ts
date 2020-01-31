import { ITournamentType } from './tournament-type.interface';
import { IApiResponseMetaData } from './api-response-metadata.interface';
import { IMedia } from './media.interface';

export interface IGame {
  id?: string;
  slug: string;
  media?: IMedia;
  name: string;
  description?: string;
  tournamentTypes?: ITournamentType[];
  metaData?: IApiResponseMetaData;
  [key: string]: any;
  source?: string;
}
