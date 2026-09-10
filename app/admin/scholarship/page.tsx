import AdminScholarshipList from "@/app/components/admin-scholarship-list";
import ScholarshipPageHeader from "@/app/components/admin-scholarship-page-header";

const AdminScholarshipPage = () => {
  return (
    <div>
      <ScholarshipPageHeader />

      <div className="mt-4">
        <AdminScholarshipList />
      </div>
    </div>
  );
};

export default AdminScholarshipPage;
