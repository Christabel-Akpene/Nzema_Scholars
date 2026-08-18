import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

const AdminScholarshipDetails = () => {
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
       </Table> 
    </div>
  )
}

export default AdminScholarshipDetails