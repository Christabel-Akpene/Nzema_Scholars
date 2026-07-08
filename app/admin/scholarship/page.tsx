"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";
import { useState } from "react";

const AdminScholarshipPage = () => {
  const [eligibilityOther, setEligibilityOther] = useState(false);
  const [documentOther, setDocumentOther] = useState(false);

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
            <form action="">
              {/* name */}
              <div className="flex flex-col space-y-2 my-3">
                <label htmlFor="name" className="font-semibold">
                  Name of Scholarship:
                </label>
                <input type="text" className="border p-3 rounded-md" />
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
              </div>
              {/* url */}
              <div className="flex flex-col space-y-2 my-3">
                <label className="font-semibold" htmlFor="name">
                  Official Scholarship URL
                </label>
                <input type="url" className="border p-3 rounded-md" />
              </div>
              {/* deadline */}
              <div className="flex flex-col space-y-2 my-3">
                <label htmlFor="date" className="font-semibold">
                  Deadline of Scholarship
                </label>
                <input
                  type="date"
                  name="date"
                  id=""
                  className="border p-3 rounded-md"
                />
              </div>
              {/* eligibility */}
              <div className="flex flex-col space-y-2 my-3">
                <label htmlFor="eligibility" className="font-semibold">
                  Eligibility Criteria
                </label>
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" name="eligibility" id="" />
                    <span>Undergraduate</span>
                  </div>

                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" name="eligibility" id="" />
                    <span>Indigene of Western Region</span>
                  </div>

                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" name="eligibility" id="" />
                    <span>Minimum GPA of 2.0 </span>
                  </div>

                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" name="eligibility" id="" />
                    <span> Must be starting SHS or TVET</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" name="eligibility" id="" />
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
                    <input type="text" name="eligibility" className="border p-3 rounded-md" />
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
                    <input type="checkbox" name="documents" id="" />
                    <span>Admission Letter</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" name="documents" id="" />
                    <span>Curriculum Vitae(CV)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" name="documents" id="" />
                    <span>Letters of Recommendation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" name="documents" id="" />
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
                      name="documents"
                      className="border p-3 rounded-md"
                    />
                  )}
                </div>
              </div>
              <DialogFooter>
                <Button className="cursor-pointer">Cancel</Button>
                <Button className="cursor-pointer" type="submit">
                  Save Details
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