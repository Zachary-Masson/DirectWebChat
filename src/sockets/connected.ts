import { Socket } from "socket.io";

export function SocketConnected(socket: Socket) {
  socket.join("global");
}
