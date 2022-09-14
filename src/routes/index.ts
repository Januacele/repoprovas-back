import { Router } from "express";
import testeRouter from "./authRouter";

const router = Router();

router.use(testeRouter);

export default router;