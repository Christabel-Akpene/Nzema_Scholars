"use client";

import { Button } from "@/components/ui/button";
import {
  createScholarship,
  editScholarship,
} from "@/lib/admin-scholarship-actions";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const ELIGIBILITY_OPTIONS = [
  "Undergraduate",
  "Indigene of Western Region",
  "Minimum GPA of 2.0",
  "Must be starting SHS or TVET",
  "Must not be a beneficiary of any other scholarship scheme",
];

const DOCUMENT_OPTIONS = [
  { value: "Admission Letter", label: "Admission Letter" },
  { value: "Curriculum Vitae(CV)", label: "Curriculum Vitae (CV)" },
  { value: "Letters of Recommendation", label: "Letters of Recommendation" },
  { value: "Passport Picture", label: "Passport Picture" },
];

export type ScholarshipFormData = {
  id: string;
  name: string;
  about: string;
  url: string;
  deadline: string | null; // "YYYY-MM-DD"
  eligibility: string[]; // labels
  documents: string[]; // labels
};

type Props = {
  scholarship?: ScholarshipFormData;
};

const AdminScholarshipForm = ({ scholarship }: Props) => {
  const isEditing = !!scholarship;
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  // Split saved labels into "preset" ones (checkboxes) and custom ones ("Other")
  const presetEligibility = ELIGIBILITY_OPTIONS;
  const presetDocuments = DOCUMENT_OPTIONS.map((d) => d.value);

  const selectedEligibility = scholarship?.eligibility ?? [];
  const selectedDocuments = scholarship?.documents ?? [];

  const customEligibility =
    selectedEligibility.find((l) => !presetEligibility.includes(l)) ?? "";
  const customDocument =
    selectedDocuments.find((l) => !presetDocuments.includes(l)) ?? "";

  const [eligibilityOther, setEligibilityOther] = useState(!!customEligibility);
  const [documentOther, setDocumentOther] = useState(!!customDocument);

  const [state, action, isPending] = useActionState(
    isEditing ? editScholarship : createScholarship,
    null,
  );

  const [prevState, setPrevState] = useState(state);
  if (state !== prevState) {
    setPrevState(state);
    if (state?.success && !isEditing) {
      setEligibilityOther(false);
      setDocumentOther(false);
    }
  }

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message);
      if (isEditing) {
        router.push("/admin/scholarship");
      } else {
        formRef.current?.reset();
      }
    } else {
      toast.error(state.message);
    }
  }, [state, isEditing, router]);

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
        {isEditing ? "Edit Scholarship" : "Add New Scholarship"}
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        {isEditing
          ? "Update the details below and save your changes."
          : "Fill in the details below to list a new scholarship."}
      </p>

      <form ref={formRef} action={action} className="flex flex-col gap-6">
        {/* id is only sent when editing */}
        {isEditing && <input type="hidden" name="id" value={scholarship.id} />}

        {/* name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold">
            Name of Scholarship
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={scholarship?.name}
            className="border p-3 rounded-md"
          />
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
            defaultValue={scholarship?.about}
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
          <input
            type="url"
            id="url"
            name="url"
            defaultValue={scholarship?.url}
            className="border p-3 rounded-md"
          />
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
            id="deadline"
            type="date"
            name="deadline"
            defaultValue={scholarship?.deadline ?? ""}
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
            {ELIGIBILITY_OPTIONS.map((value) => (
              <div key={value} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="eligibility"
                  value={value}
                  defaultChecked={selectedEligibility.includes(value)}
                />
                <span>{value}</span>
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
                defaultValue={customEligibility}
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
            {DOCUMENT_OPTIONS.map((item) => (
              <div key={item.value} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="documents"
                  value={item.value}
                  defaultChecked={selectedDocuments.includes(item.value)}
                />
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
                defaultValue={customDocument}
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
          {isPending
            ? isEditing
              ? "Saving..."
              : "Submitting..."
            : isEditing
              ? "Update Details"
              : "Save Details"}
        </Button>
      </form>
    </div>
  );
};

export default AdminScholarshipForm;
