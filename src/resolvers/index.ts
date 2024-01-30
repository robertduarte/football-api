import { buildSchema } from "type-graphql";
import { SoccerResolver } from "./SoccerResolver";

export async function loadResolvers() {
  return await buildSchema({
    resolvers: [SoccerResolver],
  });
}
