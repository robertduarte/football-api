export interface IGetCompetitionTeamsResponse {
  teams: {
    id: number;
    name: string;
    tla: string;
    shortName: string;
    area: {
      id: number;
      name: string;
      code: string;
      flag: string;
    };
    address: string;
    coach: {
      id: number;
      name: string;
      dateOfBirth: string;
      nationality: string;
    };
    squad: {
      id: number;
      name: string;
      position: string;
      dateOfBirth: string;
      nationality: string;
    }[];
  }[];
}
