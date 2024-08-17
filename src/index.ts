import { PORT } from "./config";
import { conectDB } from "./db";
import { createTable } from "./controllers/scores.controllers";
import { app } from "./app";

app.listen(PORT || 3000);
console.log("Server listen on port: ", PORT);
conectDB();
createTable();
