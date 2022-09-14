import { Router } from "express";
import {signUp, signIn} from "../controllers/authController";
import {validateSchemaMiddleware} from "../middlewares/validateSchemaMiddleware";
import * as authSchema from "../schemas/authSchema";

const authRouter = Router();

authRouter.post("/signup", validateSchemaMiddleware(authSchema.userSchema), signUp);
authRouter.post("/login", validateSchemaMiddleware(authSchema.loginSchema), signIn);

export default authRouter;