-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_scholarshipId_fkey";

-- DropForeignKey
ALTER TABLE "Eligibility" DROP CONSTRAINT "Eligibility_scholarshipId_fkey";

-- AddForeignKey
ALTER TABLE "Eligibility" ADD CONSTRAINT "Eligibility_scholarshipId_fkey" FOREIGN KEY ("scholarshipId") REFERENCES "Scholarship"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_scholarshipId_fkey" FOREIGN KEY ("scholarshipId") REFERENCES "Scholarship"("id") ON DELETE CASCADE ON UPDATE CASCADE;
