import express from "express";
import scoreRoutes from "./routes/scores.routes";
import questionsRoutes from "./routes/questions.routes";
import morgan from "morgan";
import cors from "cors";

export const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", scoreRoutes);
app.use("/api", questionsRoutes);
