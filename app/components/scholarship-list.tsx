import { getScholarshipCard } from "@/lib/scholarship-queries"
import ScholarshipCard from "./scholarship-card"


const  ScholarshipList = async () => {
  const scholarships = await getScholarshipCard();
  
  return (
    <div className="grid gap-6 px-6 pb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          scholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.id} scholarship={scholarship}/>
          ))
        }
    </div>
  )
}

export default ScholarshipList