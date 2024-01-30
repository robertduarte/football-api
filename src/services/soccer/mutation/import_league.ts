import FootballApi from "@adapters/football_api";
import { Competition, Team, Player } from "@models";
import { createQueryRunner } from "@database";

export async function mutationImportLeague(
  leagueCode: string
): Promise<Competition> {
  const [competitionData, teamsData] = await Promise.all([
    FootballApi.getCompetition(leagueCode),
    FootballApi.getCompetitionTeams(leagueCode),
  ]);

  const saveDataPromises: Array<Promise<Player>> = [];

  const queryRunner = await createQueryRunner();
  await queryRunner.startTransaction();

  const competition = Competition.create({
    id: competitionData.id,
    name: competitionData.name,
    code: competitionData.code,
    areaName: competitionData.area.name,
  });
  await competition.save();

  teamsData.teams.forEach(async (teamData) => {
    const team = await Team.findOne(teamData.id);

    if (team) {
      const competitionAlreadyExists = !!team.competitions.find(
        (comp) => comp.id === competition.id
      );

      if (!competitionAlreadyExists) {
        team.competitions.push(competition);
        await team.save();
      }
    } else {
      const newTeam = Team.create({
        id: teamData.id,
        address: teamData.address,
        name: teamData.name,
        shortName: teamData.shortName,
        tla: teamData.tla,
        areaName: teamData.area.name,
        competitions: [competition],
      });
      await newTeam.save();

      teamData.squad.forEach((playerData) => {
        const player = Player.create({
          id: playerData.id,
          dateOfBirth: playerData.dateOfBirth,
          name: playerData.name,
          nationality: playerData.nationality,
          position: playerData.position,
          team: {
            id: teamData.id,
          },
        });
        saveDataPromises.push(player.save());
      });

      if (!Array.isArray(teamData.squad) || teamData.squad.length === 0) {
        const player = Player.create({
          dateOfBirth: teamData.coach.dateOfBirth,
          name: teamData.coach.name,
          nationality: teamData.coach.nationality,
        });
        saveDataPromises.push(player.save());
      }
    }
  });

  await Promise.all(saveDataPromises);

  await queryRunner.commitTransaction();
  await queryRunner.release();

  return competition;
}
