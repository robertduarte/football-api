import "reflect-metadata";
import "dotenv/config";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { loadResolvers } from "@resolvers";

(async () => {
  await createConnection();
  const schema = await loadResolvers();
  const server = new ApolloServer({ schema });
  await server.listen(process.env.PORT || 4000);
  console.log("Server has started!");
})();
