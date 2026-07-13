import ScholarshipList from "@/app/components/scholarship-list"
import ScholarshipListSkeleton from "@/app/components/scholarship-list-skeleton"
import { Suspense } from "react"

export default function Scholarships() {
  return (
    <div className="bg-secondary/40">
      <div className="flex flex-col items-center justify-center p-8 md:p-16 ">
        <p className="text-2xl md:text-4xl font-bold text-brand capitalize">scholarships</p>
        <p className="my-4 text-center text-text-muted">
          Empowering the next generation of Nzema Leaders with curated financial support and academic opportunities
        </p>
      </div>

      <Suspense fallback={<ScholarshipListSkeleton/>}>
        <ScholarshipList/>
      </Suspense>
    </div>
  )
}
