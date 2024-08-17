import express from "express";
import { PORT } from "./config";
import { conectDB } from "./db";
import scoreRoutes from "./routes/scores.routes";
import { createTable } from "./controllers/scores.controllers";
import morgan from "morgan";

const app = express();

app.listen(PORT || 3000);
console.log("Server listen on port: ", PORT);
conectDB();
createTable()
app.use(morgan('dev'))
app.use("/api", scoreRoutes);

