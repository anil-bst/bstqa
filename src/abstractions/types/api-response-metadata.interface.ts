import { IGame } from './game.interface';
export interface IApiResponseMetaData {
  totalCount?: number;
  page?: number;
  limit?: number;
  appliedFilters?: {};
}

export interface IAPIGameResponseMetaData {
  data: IGame[];
  metaData: {
    count: number;
    page: number;
    limit: number;
  };
  source?: string;
}
