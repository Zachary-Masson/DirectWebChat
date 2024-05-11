import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { PrismaClient } from "@prisma/client";

// Import Middlewares
import PrismaMiddleware from "./middlewares/prisma";

// Import Routes
import AuthRouter from "./routes/auth";
import MessagesRouter from "./routes/messages";

// Import Socket
import { SocketManager } from "./sockets/socketManager";

const app = express();
const io = new Server({});
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(PrismaMiddleware(prisma));

// Routes
app.use("/auth", AuthRouter);
app.use("/messages", MessagesRouter);

io.on("connection", (socket) => {
  SocketManager(prisma, io, socket);
});

io.listen(3000);

app.listen(3001);
