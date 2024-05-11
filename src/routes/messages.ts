import { Router } from "express";

// Controllers
import { GetAllMessage } from "../controllers/messages";

const MessagesRouter = Router();

MessagesRouter.get("/", GetAllMessage);

export default MessagesRouter;
