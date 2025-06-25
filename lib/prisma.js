import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();   // "|| -->if global prisma exits then reuse it else take new prismaClient() " 

if (process.env.NODE_ENV !== "production") {   //that means in development mode
  globalThis.prisma = db;
}

// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your application
// reloads, a new instance of the Prisma client would be created, potentially leading
// to connection issues.