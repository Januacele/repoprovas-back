import { Router } from "express";
import testeRouter from "../routes/testeRouter";

const router = Router();

router.use(testeRouter);

export default router;