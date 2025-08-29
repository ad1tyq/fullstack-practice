import { PrismaClient } from "@prisma/client";

// This block tells TypeScript to expect a global `prisma` variable.
// This is necessary for the hot-reloading in development.
declare global {
  var prisma: PrismaClient | undefined;
}

// This logic prevents creating multiple instances of Prisma Client in development.
// It either uses the existing global instance or creates a new one.
const prisma = global.prisma || new PrismaClient();

// In a non-production environment, we save the instance to the global object.
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

// We default export the single, correctly typed instance.
export default prisma;

