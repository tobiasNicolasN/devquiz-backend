import { Router } from "express";
import { getQuestions, getResponses } from "../controllers/question.controllers";

const router = Router();

router.get("/questions", getQuestions);
router.get("/responses", getResponses);

export default router;
