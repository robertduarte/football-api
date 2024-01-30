import { Connection, getConnection as getConnectionTypeorm } from "typeorm";

export async function getConnection(): Promise<Connection> {
  return getConnectionTypeorm();
}

export async function createQueryRunner() {
  const conn = await getConnection();
  return conn.createQueryRunner();
}
