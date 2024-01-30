import { Query, Resolver, Arg, Mutation } from "type-graphql";
import { Competition, Player, Team } from "@models";
import { mutationImportLeague } from "@services/soccer/mutation";
import { queryPlayers, queryTeam } from "@services/soccer/query";

@Resolver()
export class SoccerResolver {
  @Query(() => [Player])
  async players(@Arg("leagueCode") leagueCode: string): Promise<Player[]> {
    return queryPlayers(leagueCode);
  }

  @Query(() => Team)
  async team(@Arg("name") name: string): Promise<Team> {
    return queryTeam(name);
  }

  @Mutation(() => Competition)
  async importLeague(
    @Arg("leagueCode") leagueCode: string
  ): Promise<Competition> {
    return mutationImportLeague(leagueCode);
  }
}
