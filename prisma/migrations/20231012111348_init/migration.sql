-- CreateEnum
CREATE TYPE "Order" AS ENUM ('NORMAL', 'MEDIUM', 'HIGH');

-- CreateTable
CREATE TABLE "Issue" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "attachment" TEXT NOT NULL,
    "order" "Order" NOT NULL,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Issue_email_key" ON "Issue"("email");
