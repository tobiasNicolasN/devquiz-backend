import { Request, Response, response } from "express";
import { client } from "../db";

export const addScore = async (request: Request, response: Response) => {
  const { score, name } = request.body;

  try {
    const res = await client.query(
      "INSERT INTO scores (name, score) VALUES ($1, $2)",
      [name, score]
    );
    console.log("Score added", res.rowCount);
    response.status(200).json({ scoreAdded: res.rowCount });
  } catch (error) {
    console.error(error);
    response.status(400).json({ error: error });
  }
};

export const createTable = async () => {
  // Se hace una consulta para saber si la tabla 'scores' existe
  const res = await client.query(
    "SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = $1);",
    ["scores"]
  );
  const table = res.rows[0].exists;

  if(table) console.log('Table scores exists')

  // Crea la tabla 'scores' si no existe
  if (!table) {
    const createTableQuery = `
    CREATE TABLE scores (
        id SERIAL PRIMARY KEY,
        name VARCHAR(30) NOT NULL,
        score INT NOT NULL
    );
    `;

    try {
      await client.query(createTableQuery);
      console.log("Table scores created");
    } catch (error) {
      console.error("Failure creating table: ", error);
    }
  }
};

export const getScores = async () => {};
