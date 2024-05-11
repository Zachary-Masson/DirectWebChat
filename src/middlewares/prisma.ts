import { PrismaClient } from "@prisma/client";
import type { NextFunction, Request, Response } from "express";

/**
 * Middleware that attaches a PrismaClient instance to the request object.
 * @param prisma - The PrismaClient instance.
 * @returns The middleware function.
 */
function PrismaMiddleware(prisma: PrismaClient) {
  return (req: Request, res: Response, next: NextFunction) => {
    req.prisma = prisma;
    next();
  };
}

export default PrismaMiddleware;
