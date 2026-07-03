import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";

const AdminScholarshipPage = () => {
  return (
    <div>
      {/* header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center ">
        <div className="sm:flex-1">
          <h1 className="text-2xl font-bold text-brand">Scholarships</h1>
          <p>Manage and track available scholarships for students</p>
        </div>
        <Dialog>
          <form action="">
            <DialogTrigger asChild>
              <Button className="w-full p-4 bg-accent sm:w-auto cursor-pointer hover:bg-accent-hover">
                <p className="flex space-x-2 items-center">
                  <CirclePlus />
                  <span>Add Application</span>
                </p>
              </Button>
            </DialogTrigger>
            <DialogContent>
                
            </DialogContent>
          </form>
        </Dialog>
      </div>

      <div></div>
    </div>
  );
}

export default AdminScholarshipPage