import { PrismaClient } from "@prisma/client";
import { Socket } from "socket.io";

// Importez vos types personnalisés si nécessaire
// import { CustomType } from './path/to/custom/types';

export {};

/**
 * Étend le type Socket de Socket.io pour inclure des propriétés personnalisées.
 */
declare module "socket.io" {
  interface Socket {
    // Ajoutez ici vos propriétés personnalisées
    // par exemple : customProperty: CustomType;
    prisma: PrismaClient;
  }
}
