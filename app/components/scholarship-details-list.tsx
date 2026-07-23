import { getScholarship } from "@/lib/admin-scholarship-queries";
import ScholarshipDetailsCard from "./scholarship-details-card";

const ScholarshipDetailsList = async ({ id }: { id: string }) => {
  const scholarshipDetails = await getScholarship(id);

  return (
    <>
      <ScholarshipDetailsCard scholarshipDetails={scholarshipDetails} />
    </>
  );
};

export default ScholarshipDetailsList;
