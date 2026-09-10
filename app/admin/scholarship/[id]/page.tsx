import ApplicantTable from '@/app/components/admin-applicant-table';
import { getScholarship, getScholarshipApplications } from '@/lib/admin-scholarship-queries'
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

const IndividualApplicantPage = async ({params}: {params: Promise<{id: string}>}) => {

  const { id } = await params;
    const [scholarship, applications] = await Promise.all([
        getScholarship(id),
        getScholarshipApplications(id)
    ])
  return (
    <div>
      <div className="flex items-center space-x-3">
        <MoveLeft />
        <Link href={"/admin/scholarship"}>Back to Scholarships</Link>
      </div>
      <h1 className='my-4 text-brand text-bold text-2xl'>{scholarship?.name}</h1>
      {
        applications.length === 0 ? 
        <p>No applications found for this scholarship.</p> :
        <ApplicantTable applications={applications} />
      }
    </div>
  );
}

export default IndividualApplicantPage