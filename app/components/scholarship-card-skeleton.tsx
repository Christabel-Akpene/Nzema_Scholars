import { Skeleton } from "@/components/ui/skeleton";

const ScholarshipCardSkeleton = () => {
  return (
    <div className="rounded-md bg-card p-5 shadow-sm">
      <div className="flex justify-end items-center space-x-3">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-16" />
      </div>

      <Skeleton className="mt-4 h-5 w-3/4" />

      <div className="mt-2 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      <Skeleton className="mt-5 h-9 w-full" />
    </div>
  );
};

export default ScholarshipCardSkeleton;
