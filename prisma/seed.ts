import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const operations = await prisma.department.upsert({
    where: { name: "Operations" },
    update: {},
    create: { name: "Operations", description: "Digital operations and execution" }
  });

  const passwordHash = await bcrypt.hash("ChangeMe123!", 12);

  await prisma.user.upsert({
    where: { email: "ceo@nexora.local" },
    update: {},
    create: { name: "Nexora CEO", email: "ceo@nexora.local", passwordHash, role: "CEO" }
  });

  await prisma.user.upsert({
    where: { email: "manager@nexora.local" },
    update: {},
    create: { name: "AI Manager", email: "manager@nexora.local", passwordHash, role: "AI_MANAGER", departmentId: operations.id }
  });

  await prisma.user.upsert({
    where: { email: "head@nexora.local" },
    update: {},
    create: { name: "Operations Head", email: "head@nexora.local", passwordHash, role: "DEPARTMENT_HEAD", departmentId: operations.id }
  });
}

main().finally(() => prisma.$disconnect());
