// scholarship-list-skeleton.tsx
import ScholarshipCardSkeleton from "./scholarship-card-skeleton";

const ScholarshipListSkeleton = () => {
  return (
    <div className="grid gap-6 px-6 pb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <ScholarshipCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default ScholarshipListSkeleton;
