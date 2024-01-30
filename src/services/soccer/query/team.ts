import { Team } from "@models";

export async function queryTeam(name: string): Promise<Team> {
  return Team.findOneOrFail({
    relations: ["players"],
    where: [{ name }, { shortName: name }],
  });
}
