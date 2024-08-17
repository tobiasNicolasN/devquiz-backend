import { Client } from "pg";

// const client = new Client("postgres://admin:test1234@localhost:5432/db_name")

// Docker command
// docker run --name test-postgres -e POSTGRES_PASSWORD=test1234 -e POSTGRES_USER=admin -e POSTGRES_DB=db_name -p 5432:5432 -d p

const client = new Client({
  port: 5432,
  user: "admin",
  host: "localhost",
  database: "db_name",
  password: "test1234",
});

export const conectDB = () => {
  try {
    client.connect();
    console.log('DB is connected');
  } catch (error) {
    console.log(error);
  }
};
