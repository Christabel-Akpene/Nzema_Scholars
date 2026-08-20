"use client";

import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import AddScholarshipDialog from "@/app/components/add-scholarship-dialog";

const ScholarshipPageHeader = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
        <div className="sm:flex-1">
          <h1 className="text-2xl font-bold text-brand">Scholarships</h1>
          <p>Manage and track available scholarships for students</p>
        </div>
        <Button
          className="w-full p-4 bg-accent sm:w-auto cursor-pointer hover:bg-accent-hover"
          onClick={() => setDialogOpen(true)}
        >
          <p className="flex space-x-2 items-center">
            <CirclePlus />
            <span>Add Scholarship</span>
          </p>
        </Button>
      </div>
      <AddScholarshipDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default ScholarshipPageHeader;
