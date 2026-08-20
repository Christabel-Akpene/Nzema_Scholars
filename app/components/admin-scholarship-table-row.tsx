import { TableCell, TableRow } from "@/components/ui/table";
import { getScholarshipList } from "@/lib/admin-scholarship-queries";
import { Pencil, Trash } from "lucide-react";

type AdminScholarshipTableRowProps = {
  scholarship: Awaited<ReturnType<typeof getScholarshipList>>[number];
};

const AdminScholarshipTableRow = ({ scholarship }: AdminScholarshipTableRowProps) => {
  return (
    <TableRow>
      <TableCell>{scholarship.name}</TableCell>
      <TableCell>
        {scholarship.deadline
          ? scholarship.deadline.toLocaleDateString()
          : "N/A"}
      </TableCell>
      <TableCell>{scholarship._count.applications}</TableCell>
      <TableCell>
        {scholarship.deadline && scholarship.deadline >= new Date() ? (
          <span className="text-green-500">Active</span>
        ) : (
          <span className="text-red-500">Closed</span>
        )}
      </TableCell>
      <TableCell className="flex space-x-2 items-center">
        <Pencil size={16} />
        <Trash size={16} />
      </TableCell>
    </TableRow>
  );
};

export default AdminScholarshipTableRow;
