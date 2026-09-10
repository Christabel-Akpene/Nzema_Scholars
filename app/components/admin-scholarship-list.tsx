import { getScholarshipList } from "@/lib/admin-scholarship-queries";
import AdminScholarshipTableRow from "./admin-scholarship-table-row";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdminScholarshipList = async () => {
  const scholarships = await getScholarshipList();
  return (
    <div>
      <div className="flex gap-1 text-xs font-medium justify-end my-4">
        <button className="px-3 py-1.5 rounded-md bg-(--brand) text-white">
          All
        </button>
        <button className="px-3 py-1.5 rounded-md text-(--text-muted) hover:bg-(--brand-light) hover:text-(--brand) transition-colors">
          Accepted
        </button>
        <button className="px-3 py-1.5 rounded-md text-(--text-muted) hover:bg-(--brand-light) hover:text-(--brand) transition-colors">
          Rejected
        </button>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-(--section-bg) hover:bg-(--section-bg) border-b border-border">
            <TableHead className="text-xs font-semibold text-(--text-muted) uppercase tracking-wider pl-5 py-3">
              Scholarship Name
            </TableHead>
            <TableHead className="text-xs font-semibold text-(--text-muted) uppercase tracking-wider py-3">
              Deadline
            </TableHead>
            <TableHead className="text-xs font-semibold text-(--text-muted) uppercase tracking-wider py-3">
              Applications
            </TableHead>
            <TableHead className="text-xs font-semibold text-(--text-muted) uppercase tracking-wider py-3">
              Status
            </TableHead>
            <TableHead className="text-xs font-semibold text-(--text-muted) uppercase tracking-wider py-3">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scholarships.map((scholarship) => (
            <AdminScholarshipTableRow
              key={scholarship.id}
              scholarship={scholarship}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminScholarshipList;
