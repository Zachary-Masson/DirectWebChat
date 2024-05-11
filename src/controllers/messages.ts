import { Request, Response } from "express";

export async function GetAllMessage(req: Request, res: Response) {
  const prisma = req.prisma;
  const messages = await prisma.message.findMany();
  return res.send(messages);
}
