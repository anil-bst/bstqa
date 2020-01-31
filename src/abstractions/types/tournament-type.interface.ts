import { IMedia } from './media.interface';

export interface ITournamentType {
  name?: string;
  description?: string;
  media?: IMedia;
  imageUrl?: string;
  [key: string]: any;
}
