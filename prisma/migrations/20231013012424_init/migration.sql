-- CreateEnum
CREATE TYPE "Order" AS ENUM ('NORMAL', 'MEDIUM', 'HIGH');

-- CreateTable
CREATE TABLE "Issue" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "order" "Order" NOT NULL DEFAULT 'NORMAL',

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Issue_email_key" ON "Issue"("email");
