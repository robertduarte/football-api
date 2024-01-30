import { BaseApi } from "@adapters/base_api";
import { IGetCompetitionResponse, IGetCompetitionTeamsResponse } from "./dto";

class FootballApi extends BaseApi {
  constructor() {
    super({
      headers: {
        "X-Auth-Token": process.env.FOOTBALL_API_TOKEN,
      },
      baseURL: "http://api.football-data.org/",
    });
  }

  async getCompetition(code: string): Promise<IGetCompetitionResponse> {
    const { data } = await this.client.get(`/v4/competitions/${code}`);
    return data;
  }

  async getCompetitionTeams(id: string): Promise<IGetCompetitionTeamsResponse> {
    const { data } = await this.client.get(`/v4/competitions/${id}/teams`);
    return data;
  }
}

export default new FootballApi();
