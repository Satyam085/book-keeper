/*
  Warnings:

  - Made the column `categoryId` on table `Books` required. This step will fail if there are existing NULL values in that column.
  - Made the column `publisherId` on table `Books` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Books" DROP CONSTRAINT "Books_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Books" DROP CONSTRAINT "Books_publisherId_fkey";

-- AlterTable
ALTER TABLE "Books" ALTER COLUMN "categoryId" SET NOT NULL,
ALTER COLUMN "publisherId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "Books_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "Books_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
