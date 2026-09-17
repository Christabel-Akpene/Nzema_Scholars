"use client";

import { Button } from "@/components/ui/button";
import { createScholarship } from "@/lib/admin-scholarship-actions";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const AddScholarshipPage = () => {
  const [eligibilityOther, setEligibilityOther] = useState(false);
  const [documentOther, setDocumentOther] = useState(false);
  const [state, action, isPending] = useActionState(createScholarship, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message);
      formRef.current?.reset();
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link
        href="/admin/scholarship"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand mb-6"
      >
        <ArrowLeft size={16} />
        Back to Scholarships
      </Link>

      <h1 className="text-2xl font-bold text-brand mb-1">
        Add New Scholarship
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        Fill in the details below to list a new scholarship.
      </p>

      <form ref={formRef} action={action} className="flex flex-col gap-6">
        {/* name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold">
            Name of Scholarship
          </label>
          <input type="text" name="name" className="border p-3 rounded-md" />
          {state?.errors?.fieldErrors?.name && (
            <p className="text-error text-sm">
              {state.errors.fieldErrors.name[0]}
            </p>
          )}
        </div>

        {/* about */}
        <div className="flex flex-col gap-2">
          <label htmlFor="about" className="font-semibold">
            About the Scholarship
          </label>
          <textarea
            name="about"
            id="about"
            rows={6}
            className="w-full border p-3 rounded-md"
          />
          {state?.errors?.fieldErrors?.about && (
            <p className="text-error text-sm">
              {state.errors.fieldErrors.about[0]}
            </p>
          )}
        </div>

        {/* url */}
        <div className="flex flex-col gap-2">
          <label htmlFor="url" className="font-semibold">
            Official Scholarship URL
          </label>
          <input type="url" name="url" className="border p-3 rounded-md" />
          {state?.errors?.fieldErrors?.url && (
            <p className="text-error text-sm">
              {state.errors.fieldErrors.url[0]}
            </p>
          )}
        </div>

        {/* deadline */}
        <div className="flex flex-col gap-2">
          <label htmlFor="deadline" className="font-semibold">
            Deadline
          </label>
          <input
            type="date"
            name="deadline"
            className="border p-3 rounded-md"
          />
          {state?.errors?.fieldErrors?.deadline && (
            <p className="text-error text-sm">
              {state.errors.fieldErrors.deadline[0]}
            </p>
          )}
        </div>

        {/* eligibility */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Eligibility Criteria</label>
          <div className="flex flex-col gap-2">
            {[
              { value: "Undergraduate", label: "Undergraduate" },
              {
                value: "Indigene of Western Region",
                label: "Indigene of Western Region",
              },
              { value: "Minimum GPA of 2.0", label: "Minimum GPA of 2.0" },
              {
                value: "Must be starting SHS or TVET",
                label: "Must be starting SHS or TVET",
              },
              {
                value:
                  "Must not be a beneficiary of any other scholarship scheme",
                label:
                  "Must not be a beneficiary of any other scholarship scheme",
              },
            ].map((item) => (
              <div key={item.value} className="flex items-center gap-2">
                <input type="checkbox" name="eligibility" value={item.value} />
                <span>{item.label}</span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={eligibilityOther}
                onChange={(e) => setEligibilityOther(e.target.checked)}
              />
              <span>Other</span>
            </div>
            {eligibilityOther && (
              <input
                type="text"
                name="other_eligibility"
                placeholder="Specify other eligibility"
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
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Required Documents</label>
          <div className="flex flex-col gap-2">
            {[
              { value: "Admission Letter", label: "Admission Letter" },
              { value: "Curriculum Vitae(CV)", label: "Curriculum Vitae (CV)" },
              {
                value: "Letters of Recommendation",
                label: "Letters of Recommendation",
              },
              { value: "Passport Picture", label: "Passport Picture" },
            ].map((item) => (
              <div key={item.value} className="flex items-center gap-2">
                <input type="checkbox" name="documents" value={item.value} />
                <span>{item.label}</span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={documentOther}
                onChange={(e) => setDocumentOther(e.target.checked)}
              />
              <span>Other</span>
            </div>
            {documentOther && (
              <input
                type="text"
                name="other_document"
                placeholder="Specify other document"
                className="border p-3 rounded-md"
              />
            )}
            {state?.errors?.fieldErrors?.documents && (
              <p className="text-error text-sm">
                {state.errors.fieldErrors.documents[0]}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full sm:w-auto bg-accent hover:bg-accent-hover cursor-pointer py-6"
        >
          {isPending ? "Submitting..." : "Save Details"}
        </Button>
      </form>
    </div>
  );
};

export default AddScholarshipPage;
