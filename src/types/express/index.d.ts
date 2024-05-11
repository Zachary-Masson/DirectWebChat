import { PrismaClient, Users } from "@prisma/client";

export {};

/**
 * Extends the Express Request interface to include the `prisma` property.
 */
declare global {
  namespace Express {
    export interface Request {
      prisma: PrismaClient;
    }
  }
}
