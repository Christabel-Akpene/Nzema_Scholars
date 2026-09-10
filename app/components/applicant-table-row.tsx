import { TableRow, TableCell } from "@/components/ui/table";
import { getScholarshipApplications } from "@/lib/admin-scholarship-queries";

type ApplicantTableRowProps = {
  application: Awaited<ReturnType<typeof getScholarshipApplications>>[number];
};

const ApplicantTableRow = ({ application }: ApplicantTableRowProps) => {
  const profile = application.userProfile;

  return (
    <TableRow className="border-b border-border hover:bg-brand-light/40 transition-colors duration-150">

      {/* Name + Email */}
      <TableCell className="py-4">
        <span className="text-sm font-medium">{profile.fullname}</span>

        <div className="flex flex-col gap-1">
          <a
            href={`mailto:${profile.email}`}
            className="text-sm  text-muted-foreground hover:underline"
          >
            {profile.email}
          </a>
        </div>
      </TableCell>

        {/* Contact */}
      <TableCell className="py-4">
        <span className="text-sm">
          <a href={`tel:${profile.phone}`} className="text-sm hover:underline">
            {profile.phone}
          </a>
        </span>
      </TableCell>

      {/* School + Year */}
      <TableCell className="py-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm">{profile.school}</span>
          <span className="text-xs text-muted-foreground capitalize">
            {profile.currentYear} year
          </span>
        </div>
      </TableCell>

      {/* Level */}
      <TableCell className="py-4 capitalize">
        <span className="text-sm">{profile.educationLevel}</span>
      </TableCell>

      {/* Programme */}
      <TableCell className="py-4">
        <span className="text-sm">{profile.programme}</span>
      </TableCell>

      {/* GPA */}
      <TableCell className="py-4">
        <span className="text-sm font-medium">{profile.gpa}</span>
      </TableCell>

      {/* Hometown + Current Location */}
      <TableCell className="py-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm">{profile.hometown}</span>
        </div>
      </TableCell>

      <TableCell className="py-4">
        <span className="text-sm">{profile.currentLocation}</span>
      </TableCell>

      {/* Has Applied */}
      <TableCell className="py-4">
        <span className="text-sm">
          {profile.hasApplied === "yes" ? "Yes" : "No"}
        </span>
      </TableCell>
    </TableRow>
  );
};

export default ApplicantTableRow;
