import { Router } from "express";
import { getQuestions } from "../controllers/question.controllers";

const router = Router();

router.get("/questions", getQuestions);

export default router;
