"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { createScholarship } from "@/lib/scholarship-actions";
import { CirclePlus } from "lucide-react";
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const AdminScholarshipPage = () => {
  const [eligibilityOther, setEligibilityOther] = useState(false);
  const [documentOther, setDocumentOther] = useState(false);
  const [state, action, isPending] = useActionState(createScholarship, null);
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state) return

    if (state.success){
      toast.success(state.message)
      formRef.current?.reset();
    }
    else {
      toast.error(state.message)
    }
  }, [state])


  return (
    <div>
      {/* header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center ">
        <div className="sm:flex-1">
          <h1 className="text-2xl font-bold text-brand">Scholarships</h1>
          <p>Manage and track available scholarships for students</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full p-4 bg-accent sm:w-auto cursor-pointer hover:bg-accent-hover">
              <p className="flex space-x-2 items-center">
                <CirclePlus />
                <span>Add Application</span>
              </p>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Scholarship</DialogTitle>
            </DialogHeader>
            <form action={action}>
              {/* name */}
              <div className="flex flex-col space-y-2 my-3">
                <label htmlFor="name" className="font-semibold">
                  Name of Scholarship:
                </label>
                <input
                  type="text"
                  name="name"
                  className="border p-3 rounded-md"
                />
                {state?.errors?.fieldErrors?.name && (
                  <p className="text-error text-sm">
                    {state.errors.fieldErrors.name[0]}
                  </p>
                )}
              </div>
              {/* about */}
              <div className="flex flex-col space-y-2 my-3">
                <label htmlFor="about" className="font-semibold">
                  About the Scholarship
                </label>
                <textarea
                  name="about"
                  id="about"
                  rows={10}
                  className="w-full border p-3 rounded-md"
                ></textarea>
                {state?.errors?.fieldErrors?.about && (
                  <p className="text-error text-sm">
                    {state.errors.fieldErrors.about[0]}
                  </p>
                )}
              </div>
              {/* url */}
              <div className="flex flex-col space-y-2 my-3">
                <label className="font-semibold" htmlFor="name">
                  Official Scholarship URL
                </label>
                <input
                  type="url"
                  name="url"
                  className="border p-3 rounded-md"
                />
                {state?.errors?.fieldErrors?.url && (
                  <p className="text-error text-sm">
                    {state.errors.fieldErrors.url[0]}
                  </p>
                )}
              </div>
              {/* deadline */}
              <div className="flex flex-col space-y-2 my-3">
                <label htmlFor="date" className="font-semibold">
                  Deadline of Scholarship
                </label>
                <input
                  type="date"
                  name="deadline"
                  id=""
                  className="border p-3 rounded-md"
                />
                {state?.errors?.fieldErrors?.deadline && (
                  <p className="text-error text-sm">
                    {state.errors.fieldErrors.deadline[0]}
                  </p>
                )}
              </div>
              {/* eligibility */}
              <div className="flex flex-col space-y-2 my-3">
                <label htmlFor="eligibility" className="font-semibold">
                  Eligibility Criteria
                </label>
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2 items-center">
                    <input
                      type="checkbox"
                      name="eligibility"
                      id=""
                    />
                    <span>Undergraduate</span>
                  </div>

                  <div className="flex space-x-2 items-center">
                    <input
                      type="checkbox"
                      name="eligibility"
                      value={"Indigene of Western Region"}
                      id=""
                    />
                    <span>Indigene of Western Region</span>
                  </div>

                  <div className="flex space-x-2 items-center">
                    <input
                      type="checkbox"
                      name="eligibility"
                      value={"Minimum GPA of 2.0"}
                      id=""
                    />
                    <span>Minimum GPA of 2.0 </span>
                  </div>

                  <div className="flex space-x-2 items-center">
                    <input
                      type="checkbox"
                      name="eligibility"
                      value={"Must be starting SHS or TVET"}
                      id=""
                    />
                    <span> Must be starting SHS or TVET</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="eligibility"
                      value={
                        "Must not be a beneficiary of any other scholarship scheme"
                      }
                      id=""
                    />
                    <span>
                      Must not be a beneficiary of any other scholarship scheme
                    </span>
                  </div>

                  <div className="flex space-x-2 items-center">
                    <input
                      type="checkbox"
                      name="eligibility"
                      id=""
                      checked={eligibilityOther}
                      onChange={(e) => setEligibilityOther(e.target.checked)}
                    />
                    <span>Other</span>
                  </div>
                  {eligibilityOther && (
                    <input
                      type="text"
                      name="other_eligibility"
                      className="border p-3 rounded-md"
                    />
                  )}
                  {state?.errors?.fieldErrors?.eligibility && (
                    <p className="text-error text-sm">
                      {state.errors.fieldErrors.eligibility[0]}
                    </p>
                  )}
                </div>
              </div>
              {/* documents */}
              <div className="flex flex-col space-y-2 my-3">
                <label htmlFor="documents" className="font-semibold">
                  Required Documents
                </label>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="documents"
                      value={"Admission Letter"}
                      id=""
                    />
                    <span>Admission Letter</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="documents"
                      value={"Curriculum Vitae(CV)"}
                      id=""
                    />
                    <span>Curriculum Vitae(CV)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="documents"
                      value={"Letters of Recommendation"}
                      id=""
                    />
                    <span>Letters of Recommendation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="documents"
                      value={"Passport Picture"}
                      id=""
                    />
                    <span>Passport Picture</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="documents"
                      id=""
                      checked={documentOther}
                      onChange={(e) => setDocumentOther(e.target.checked)}
                    />
                    <span>Other</span>
                  </div>
                  {documentOther && (
                    <input
                      type="text"
                      name="other_document"
                      className="border p-3 rounded-md"
                    />
                  )}
                </div>
                {state?.errors?.fieldErrors?.documents && (
                  <p className="text-error text-sm">
                    {state.errors.fieldErrors.documents[0]}
                  </p>
                )}
              </div>
              <DialogFooter>
                <Button className="cursor-pointer" type="submit" disabled={isPending}>
                  { isPending ? "Submitting" : "Save Details"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div></div>
    </div>
  );
}

export default AdminScholarshipPage