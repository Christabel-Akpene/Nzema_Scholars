import AdminScholarshipList from "@/app/components/admin-scholarship-list";
import ScholarshipPageHeader from "@/app/components/admin-scholarship-page-header";

const AdminScholarshipPage = () => {
  return (
    <div>
      <ScholarshipPageHeader />

      <div className="flex justify-end mt-4">
        <p className="flex items-center p-2 border">All</p>
        <p className="flex items-center p-2 border">Active</p>
        <p className="flex items-center p-2 border">Expired</p>
      </div>

      <div className="mt-4">
        <AdminScholarshipList />
      </div>
    </div>
  );
};

export default AdminScholarshipPage;
