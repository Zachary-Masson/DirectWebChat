import { Request, Response } from "express";

export async function AuthRegister(
  req: Request<null, null, { username: string }>,
  res: Response
) {
  const prisma = req.prisma;
  const { username } = req.body;

  if (await prisma.user.findFirst({ where: { username } }))
    return res.sendStatus(400);

  const user = await prisma.user.create({
    data: {
      username,
    },
  });

  return res.send({ uuid: user.uuid });
}
