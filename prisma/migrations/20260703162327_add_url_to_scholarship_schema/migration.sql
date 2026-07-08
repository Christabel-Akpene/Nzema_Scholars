/*
  Warnings:

  - Added the required column `url` to the `Scholarship` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Scholarship" ADD COLUMN     "url" TEXT NOT NULL;
