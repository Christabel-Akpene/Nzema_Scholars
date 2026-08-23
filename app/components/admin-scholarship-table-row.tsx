import { TableCell, TableRow } from "@/components/ui/table";
import { getScholarshipList } from "@/lib/admin-scholarship-queries";
import { Pencil, Trash } from "lucide-react";

type AdminScholarshipTableRowProps = {
  scholarship: Awaited<ReturnType<typeof getScholarshipList>>[number];
};

const AdminScholarshipTableRow = ({ scholarship }: AdminScholarshipTableRowProps) => {
    const isActive = scholarship.deadline && scholarship.deadline >= new Date();
    const appCount = scholarship._count.applications;
  return (
    <TableRow className="group border-b border-slate-100 hover:bg-slate-50/60 transition-colors duration-150">
      {/* Name with left status stripe */}
      <TableCell className="pl-5 py-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-1 h-8 rounded-full shrink-0 ${isActive ? "bg-teal-400" : "bg-slate-200"}`}
          />
          <span className="text-sm font-medium text-slate-800">
            {scholarship.name}
          </span>
        </div>
      </TableCell>

      {/* Deadline */}
      <TableCell className="py-4">
        <span className="text-sm text-slate-500">
          {scholarship.deadline ? (
            scholarship.deadline.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
          ) : (
            <span className="text-slate-300 italic">No deadline</span>
          )}
        </span>
      </TableCell>

      {/* Application count */}
      <TableCell className="py-4">
        <div className="flex items-center gap-1.5">
          <span
            className={`text-sm font-semibold ${appCount > 0 ? "text-teal-600" : "text-slate-400"}`}
          >
            {appCount}
          </span>
          <span className="text-xs text-slate-300">
            {appCount === 1 ? "applicant" : "applicants"}
          </span>
        </div>
      </TableCell>

      {/* Status badge */}
      <TableCell className="py-4">
        {isActive ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-100">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Active
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-400 border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            Closed
          </span>
        )}
      </TableCell>

      {/* Actions */}
      <TableCell className="py-4">
        <div className="flex items-center gap-1">
          <button className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer">
            <Pencil size={14} />
          </button>
          <button className="p-1.5 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer">
            <Trash size={14} />
          </button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default AdminScholarshipTableRow;
