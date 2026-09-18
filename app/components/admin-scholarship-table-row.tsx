"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import { getScholarshipList } from "@/lib/admin-scholarship-queries";
import { Pencil, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import DeleteDialog from "./admin-delete-scholarship-dialog";

type AdminScholarshipTableRowProps = {
  scholarship: Awaited<ReturnType<typeof getScholarshipList>>[number];
};

const AdminScholarshipTableRow = ({ scholarship }: AdminScholarshipTableRowProps) => {
    const isActive = scholarship.deadline && scholarship.deadline >= new Date();
    const appCount = scholarship._count.applications;
    const router = useRouter();
  return (
      <TableRow onClick={() => router.push(`/admin/scholarship/${scholarship.id}`)} className="border-b border-border hover:bg-(--brand-light)/40 transition-colors duration-150 cursor-pointer">
        <TableCell className="pl-5 py-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-1 h-8 rounded-full shrink-0 ${
                isActive ? "bg-brand" : "bg-border-strong"
              }`}
            />
            <span className="text-sm font-medium text-(--text-primary)">
              {scholarship.name}
            </span>
          </div>
        </TableCell>

        {/* Deadline */}
        <TableCell className="py-4">
          {scholarship.deadline ? (
            <span className="text-sm text-(--text-secondary)">
              {scholarship.deadline.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          ) : (
            <span className="text-sm text-(--text-muted) italic">
              No deadline
            </span>
          )}
        </TableCell>

        {/* Application count */}
        <TableCell className="py-4">
          <div className="flex items-center gap-1.5">
            <span
              className={`text-sm font-semibold ${
                appCount > 0 ? "text-accent" : "text-(--text-muted)"
              }`}
            >
              {appCount}
            </span>
            <span className="text-xs text-(--text-muted)">
              {appCount === 1 ? "applicant" : "applicants"}
            </span>
          </div>
        </TableCell>

        {/* Status badge */}
        <TableCell className="py-4">
          {isActive ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-(--brand-light) text-(--brand) border border-(--brand)/20">
              <span className="w-1.5 h-1.5 rounded-full bg-(--brand) animate-pulse" />
              Active
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-(--section-bg) text-(--text-muted) border border-(--border-strong)">
              <span className="w-1.5 h-1.5 rounded-full bg-(--border-strong)" />
              Closed
            </span>
          )}
        </TableCell>

        {/* Actions */}
        <TableCell className="py-4">
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-md text-text-muted hover:text-brand hover:bg-brand-light transition-colors">
              <Pencil size={14} />
            </button>
          <DeleteDialog id={scholarship.id} name={scholarship.name}/>
          </div>
        </TableCell>
      </TableRow>
  );
};

export default AdminScholarshipTableRow;
