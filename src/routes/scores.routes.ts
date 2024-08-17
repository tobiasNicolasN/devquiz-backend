import { Router } from "express";
import { addScore, getScores } from "../controllers/scores.controllers";
import { scoreSchema } from "../schemas/score.schemas";
import { validatorSchema } from "../middlewares/validatorSchema.middleware";

const router = Router();

router.post("/scores", validatorSchema(scoreSchema), addScore);
router.get("/scores", getScores);

export default router;
