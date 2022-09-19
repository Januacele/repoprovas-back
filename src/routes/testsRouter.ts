import { Router } from "express";
import { jwtAutenticateMiddleware } from "../middlewares/autenticateJwtMiddleware";
import { insertTest } from "../controllers/testController";

const testsRouter = Router();


testsRouter.use(jwtAutenticateMiddleware);
testsRouter.post("/tests", insertTest);


export default testsRouter;