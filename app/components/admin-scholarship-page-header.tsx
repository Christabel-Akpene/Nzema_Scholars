"use client";

import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { useRouter } from "next/navigation";

const ScholarshipPageHeader = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
      <div className="sm:flex-1">
        <h1 className="text-2xl font-bold text-brand">Scholarships</h1>
        <p>Manage and track available scholarships for students</p>
      </div>
      <Button
        className="w-full bg-accent sm:w-auto cursor-pointer hover:bg-accent-hover p-6"
        onClick={()=> router.push("/admin/scholarship/new")}
      >
        <CirclePlus />
          <span>Add Scholarship</span>
      </Button>
    </div>
  );
};

export default ScholarshipPageHeader;
