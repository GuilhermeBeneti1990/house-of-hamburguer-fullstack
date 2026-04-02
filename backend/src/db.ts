import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };

export async function connection() {
  try {
    await prisma.$connect();
    console.log("Conectado com o banco de dados!");
  } catch (error) {
    console.log(error);
  }
}
