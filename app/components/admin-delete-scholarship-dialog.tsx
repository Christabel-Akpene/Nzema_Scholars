"use client"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { deleteScholarship } from "@/lib/admin-scholarship-actions"
import { Trash } from "lucide-react"
import { toast } from "sonner"

const DeleteDialog = ({ id, name}: { id: string; name: string }) => {
      const handleDelete = async (e: React.MouseEvent) => {
        e.stopPropagation();
        const result = await deleteScholarship(id);
        if (result.success) {
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          onClick={(e) => e.stopPropagation()}
          className="p-1.5 rounded-md text-text-muted hover:text-error hover:bg-red-50 transition-colors"
        >
          <Trash size={14} cursor="pointer" />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Delete Scholarship</AlertDialogTitle>
        <AlertDialogDescription>
          This will permanently delete {name}.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className=" cursor-pointer bg-error hover:bg-error-hover text-white"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteDialog