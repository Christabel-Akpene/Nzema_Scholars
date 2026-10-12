import AdminScholarshipForm from "@/app/components/admin-scholarship-form";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function EditScholarshipPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const scholarship = await prisma.scholarship.findUnique({
    where: { id },
    include: { eligibility: true, documents: true },
  });

  if (!scholarship) notFound();

  return (
    <AdminScholarshipForm
      scholarship={{
        id: scholarship.id,
        name: scholarship.name,
        about: scholarship.about,
        url: scholarship.url,
        deadline: scholarship.deadline
          ? scholarship.deadline.toISOString().split("T")[0]
          : null,
        eligibility: scholarship.eligibility.map((e) => e.label),
        documents: scholarship.documents.map((d) => d.label),
      }}
    />
  );
}
