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
    <Table className="border rounded-lg">
      <TableHeader>
        <TableRow>
          <TableHead>Scholarship Name</TableHead>
          <TableHead>Deadline</TableHead>
          <TableHead>Applications</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
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
