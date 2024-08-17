import express from "express";
import { PORT } from "./config";
import { conectDB } from "./db";

const app = express();

app.listen(PORT || 3000);
conectDB()
console.log("Server listen on port: ", PORT);
