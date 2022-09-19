import { Router } from "express";
import { jwtAutenticateMiddleware } from "../middlewares/autenticateJwtMiddleware";
import { insertTest, getTestsByDiscipline } from "../controllers/testController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { testSchema } from "../schemas/testSchema";

const testsRouter = Router();


testsRouter.use(jwtAutenticateMiddleware);
testsRouter.post("/tests", validateSchemaMiddleware(testSchema), insertTest);
testsRouter.get("/tests/discipline/:name", getTestsByDiscipline);


export default testsRouter;