import { Request, Response } from "express";
import { client } from "../db";

export const getQuestions = async (_request: Request, response: Response) => {
  try {
    const res = await client.query("SELECT * FROM questions");
    return response.status(200).json(res.rows);
  } catch (error) {
    console.error("Failure getting table questions: ", error);
    return response.status(400).json({ error: error });
  }
};

export const createTableQuestions = async () => {
  // Se hace una consulta para saber si la tabla 'questions' existe
  const res = await client.query(
    "SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = $1);",
    ["questions"]
  );
  const table = res.rows[0].exists;

  if (table) console.log("Table questions exists");

  // Crea la tabla 'questions' si no existe
  if (!table) {
    const createTableQuery = `
      CREATE TABLE questions (
        id SERIAL PRIMARY KEY,
        question_text TEXT NOT NULL,
        language VARCHAR(2) NOT NULL -- 'es' para español, 'en' para inglés
        );
      `;

    try {
      await client.query(createTableQuery);
      console.log("Table questions created");
    } catch (error) {
      console.error("Failure creating table: ", error);
    }
  }
};

export const createTableResponses = async () => {
  // Se hace una consulta para saber si la tabla 'responses' existe
  const res = await client.query(
    "SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = $1);",
    ["responses"]
  );
  const table = res.rows[0].exists;

  if (table) console.log("Table responses exists");

  // Crea la tabla 'responses' si no existe
  if (!table) {
    const createTableQuery = `
        CREATE TABLE responses (
            id SERIAL PRIMARY KEY,
            question_id INTEGER REFERENCES questions(id),
            response_text TEXT NOT NULL,
            correct BOOLEAN NOT NULL
                );
        `;

    try {
      await client.query(createTableQuery);
      console.log("Table responses created");
    } catch (error) {
      console.error("Failure creating table: ", error);
    }
  }
};
