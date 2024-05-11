import type { PrismaClient } from "@prisma/client";
import type { Server, Socket } from "socket.io";
import { SocketConnected } from "./connected";
import { SocketWriteMessage } from "./writeMessage";

export function SocketManager(
  prisma: PrismaClient,
  io: Server,
  socket: Socket
) {
  //@ts-ignore
  socket.prisma = prisma;
  socket.on("connected", SocketConnected);
  socket.on("writeMessage", SocketWriteMessage);
}
