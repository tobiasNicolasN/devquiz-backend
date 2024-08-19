import { PORT } from "./config";
import { client, conectDB } from "./db";
import { createTable } from "./controllers/scores.controllers";
import { app } from "./app";
import {
  createTableQuestions,
  createTableResponses,
} from "./controllers/question.controllers";

app.listen(PORT || 3000);
console.log("Server listen on port: ", PORT);
conectDB();
createTable();
createTableQuestions();
createTableResponses();
