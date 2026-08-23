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
    <Table>
      <TableHeader>
        <TableRow className="bg-[var(--section-bg)] hover:bg-[var(--section-bg)] border-b border-[var(--border)]">
          <TableHead className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider pl-5 py-3">
            Scholarship Name
          </TableHead>
          <TableHead className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-3">
            Deadline
          </TableHead>
          <TableHead className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-3">
            Applications
          </TableHead>
          <TableHead className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-3">
            Status
          </TableHead>
          <TableHead className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-3">
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
  );
};

export default AdminScholarshipList;
