import { Router } from "express";
import { jwtAutenticateMiddleware } from "../middlewares/autenticateJwtMiddleware";
import { insertTest } from "../controllers/testController";

const testsRouter = Router();


testsRouter.use(jwtAutenticateMiddleware);
testsRouter.get("/tests", insertTest);


export default testsRouter;