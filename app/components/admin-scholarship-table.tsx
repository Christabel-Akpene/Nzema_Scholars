import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import { getScholarshipList } from "@/lib/admin-scholarship-queries";

type AdminScholarshipTableProps = {
  scholarship: Awaited<ReturnType<typeof getScholarshipList>>[number];
};

const AdminScholarshipTable = ({ scholarship }: AdminScholarshipTableProps) => {
  return (
    <div>
       <Table>
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
          <TableRow>
            {
              scholarship && (
                <>
                <TableCell>{scholarship.name}</TableCell>
                <TableCell>{scholarship.deadline ? scholarship.deadline.toLocaleDateString() : "N/A"}</TableCell>
                <TableCell>{scholarship._count.applications}</TableCell>
                <TableCell>

                </TableCell>
                </>
              )
            }
          </TableRow>
        </TableBody>
       </Table> 
    </div>
  )
}

export default AdminScholarshipTable