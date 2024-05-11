import { Router } from "express";

// Controller
import { AuthRegister } from "../controllers/auth";

const AuthRouter = Router();

AuthRouter.post("/register", AuthRegister);

export default AuthRouter;
