import { getScholarshipList } from "@/lib/admin-scholarship-queries"
import AdminScholarshipTable from "./admin-scholarship-table";

const AdminScholarshipList = async () => {
    const scholarships = await getScholarshipList();
  return (
    <div>
        {scholarships.map((scholarship) => {
            return (
                <AdminScholarshipTable key={scholarship.id} scholarship={scholarship} />
            )
        })}
    </div>
  )
}

export default AdminScholarshipList