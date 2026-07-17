import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { getScholarship } from "@/lib/scholarship-queries";
import { ClipboardCheck, File, Star } from "lucide-react";
import Link from "next/link";

type ScholarshipDetailsCardProps = {
  scholarshipDetails: Awaited<ReturnType<typeof getScholarship>>;
};

const ScholarshipDetailsCard = ({
  scholarshipDetails,
}: ScholarshipDetailsCardProps) => {
  


  return (
    <div className="my-4 md:my-8">
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Scholarship Details */}
        <div className="w-full md:w-[60%] my-2 md:my-4">
          <p className="font-bold text-brand text-2xl capitalise tracking-wide">
            {scholarshipDetails?.name}
          </p>
          <p className="my-4 md:my-8 font-semibold">About this Scholarship</p>
          <p className="my-4 md:my-8">{scholarshipDetails?.about}</p>
        </div>
        {/* Deadline */}
        <div className="order-first md:order-0 flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 items-center md:items-start my-2 md:my-0">
          <p className="text-brand uppercase tracking-wide">Deadline:</p>
          <p className="text-error">
            {scholarshipDetails?.deadline?.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 my-8">
        {/* Criteria Card */}
        <div className="bg-card p-3 border border-border rounded-md flex-1">
          <div className="flex items-center space-x-3 p-3">
            <ClipboardCheck className="text-brand" size={16} />
            <p className="text-brand font-semibold">Eligibility Criteria</p>
          </div>
          <div>
            {scholarshipDetails?.eligibility.map((criteria, index) => (
              <p key={index} className="flex items-center space-x-3">
                <Star className="text-accent shrink-0" size={14} />
                <span>{criteria.label}</span>
              </p>
            ))}
          </div>
        </div>
        {/* Documents Card */}
        <div className="bg-card p-3 border border-border rounded-md flex-1">
          <div className="flex items-center space-x-3 p-3">
            <File className="text-brand" size={16} />
            <p className="text-brand font-semibold">Required Documents</p>
          </div>
          <div>
            {scholarshipDetails?.documents.map((document, index) => (
              <p key={index} className="flex items-center space-x-3">
                <Star className="text-accent shrink-0" size={14} />
                <span>{document.label}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="my-8 flex flex-col items-center justify-center bg-brand-light p-4 md:p-8">
        <p className="my-4 text-center">Ready to apply for this opportunity?</p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:space-x-8">
          <Link href={scholarshipDetails?.url ?? "#"} rel="noopener noreferrer">
            <Button className="w-full sm:w-auto text-white bg-brand p-6 cursor-pointer hover:bg-brand-hover">
              Visit Official Scholarship Page
            </Button>
          </Link>
          <Link href={`/scholarships/${scholarshipDetails!.id}/apply`}>
                    <Button className="w-full sm:w-auto bg-transparent border border-brand text-brand p-6 cursor-pointer hover:bg-transparent">
            Submit Application Details
          </Button>
          </Link>

        </div>
        <div className="my-4 text-sm text-center">
          <p>
            Apply through the official scholarship page, then submit your
            details here.
          </p>
          <p>
            This helps you track your application and allows us to provide
            better assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetailsCard;
