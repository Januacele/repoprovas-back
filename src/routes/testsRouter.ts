import { Router } from "express";
import { jwtAutenticateMiddleware } from "../middlewares/autenticateJwtMiddleware";
import { insertTest, getTestsByDiscipline, getCategories } from "../controllers/testController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { testSchema } from "../schemas/testSchema";

const testsRouter = Router();


testsRouter.use(jwtAutenticateMiddleware);
testsRouter.post("/tests", validateSchemaMiddleware(testSchema), insertTest);
testsRouter.get("/tests/discipline/:name", getTestsByDiscipline);
testsRouter.get("/tests/categories", getCategories);

export default testsRouter;