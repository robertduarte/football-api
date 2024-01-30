import { Player } from "@models";

export async function queryPlayers(leagueCode: string): Promise<Array<Player>> {
  return Player.createQueryBuilder()
    .innerJoin("Player.team", "team")
    .innerJoin("team.competitions", "competition")
    .where("competition.code = :code", { code: leagueCode })
    .getMany();
}
