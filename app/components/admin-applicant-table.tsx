import { Table, TableHeader, TableHead, TableRow, TableBody } from "@/components/ui/table";
import { getScholarshipApplications } from "@/lib/admin-scholarship-queries";
import ApplicantTableRow from "./applicant-table-row";

type ApplicationTableProps = {
  applications: Awaited<ReturnType<typeof getScholarshipApplications>>;
};

const ApplicantTable = ({applications}: ApplicationTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-(--section-bg) hover:bg-(--section-bg) border-b border-border">
          <TableHead className="text-xs font-semibold uppercase tracking-wider py-3">
            Name
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wider py-3">
            Contact
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wider py-3">
            School
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wider py-3">
            Level
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wider py-3">
            Programme
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wider py-3">
            GPA
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wider py-3">
            Hometown
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wider py-3">
            Current Location
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wider py-3">
            Has Applied
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.map((application) => (
          <ApplicantTableRow key={application.id} application={application} />
        ))}
      </TableBody>
    </Table>
  );
}

export default ApplicantTable