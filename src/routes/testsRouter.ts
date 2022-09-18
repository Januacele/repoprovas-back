import { Router } from "express";
import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware";
import { jwtAutenticateMiddleware } from "../middlewares/autenticateJwtMiddleware";

const authRouter = Router();


authRouter.post("/signup", validateSchemaMiddleware(authSchema.userSchema), signUp);
authRouter.post("/signin", validateSchemaMiddleware(authSchema.loginSchema), signIn);

export default authRouter;