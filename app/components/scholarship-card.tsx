import { getScholarshipCard } from "@/lib/admin-scholarship-queries";
import { Calendar } from "lucide-react";
import Link from "next/link";

type ScholarshipCardProps = {
  scholarship: Awaited<ReturnType<typeof getScholarshipCard>>[number];
};

const ScholarshipCard = ({ scholarship }: ScholarshipCardProps) => {
  return (
    <div className="rounded-md bg-card p-5 shadow-sm">
      <div className="flex justify-end items-center space-x-3 text-error">
        <Calendar size={14} />
        <span>
          {scholarship.deadline?.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-brand">
        {scholarship.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {scholarship.about.length > 120
          ? scholarship.about.slice(0, 120) + "..."
          : scholarship.about}
      </p>

      <Link href={`/scholarships/${scholarship.id}`}>
        <button
          type="button"
          className="mt-5 w-full items-center justify-center bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-hover cursor-pointer"
        >
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ScholarshipCard;
