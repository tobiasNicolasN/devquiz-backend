import { Client } from "pg";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./config";

// const client = new Client("postgres://admin:test1234@localhost:5432/db_name")

// Docker command
// docker run --name test-postgres -e POSTGRES_PASSWORD=test1234 -e POSTGRES_USER=admin -e POSTGRES_DB=db_name -p 5432:5432 -d p

export const client = new Client({
  port: parseInt(DB_PORT!),
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
});

export const conectDB = async () => {
  try {
    await client.connect();
    console.log("DB is connected");
  } catch (error) {
    console.error(error);
  }
};
