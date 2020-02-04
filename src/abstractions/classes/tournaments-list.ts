import { Tournament } from './tournament';

export class TournamentsList {
  constructor(tournamentObj: any, locale: any, gamesMap: any) {
    const tournaments =
      tournamentObj && tournamentObj.data && tournamentObj.data.tournaments
        ? tournamentObj.data.tournaments
        : [];
    this.success =
      tournamentObj && tournamentObj.success ? tournamentObj.success : false;
    this.data = tournaments.length
      ? tournaments.reduce((tournamnetsData, tournamnet) => {
          if (gamesMap && gamesMap[tournamnet.game_id]) {
            tournamnetsData.push(
              new Tournament(tournamnet, locale, gamesMap[tournamnet.game_id]),
            );
          } else {
            // console.log(tournamnet.game_id, ':::not found');
          }
          return tournamnetsData;
        }, [])
      : [];
    this.msg = `success`;
    this.metaData = {
      count: tournamentObj.data ? tournamentObj.data.tournament_count : 0,
      cursor: tournamentObj.data ? tournamentObj.data.cursor : '',
      isLastBatch: tournamentObj.data ? tournamentObj.data.is_last_batch : true,
    };
  }

  data: any;
  metaData: any;
  msg: string;
  success: boolean;
}
