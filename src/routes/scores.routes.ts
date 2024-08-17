import { Router } from "express";
import { createTable } from "../controllers/scores.controllers";

const router = Router()

router.post('/score', createTable)

export default router