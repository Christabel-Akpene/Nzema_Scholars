import ScholarshipDetailsList from "@/app/components/scholarship-details-list"
import { MoveLeft } from "lucide-react"
import Link from "next/link"

const ScholarshipDetails = async ({params}: {params: Promise<{id: string}>}) => {
  const { id } = await params

  return (  
    <div className="bg-background w-[90%] mx-auto p-6 md:p-12">
        <div className="flex items-center space-x-3">
            <MoveLeft/>
            <Link href={"/scholarships"}>Back to Scholarships</Link>
        </div>
    <ScholarshipDetailsList id={id}/>    
    </div>
  )
}

export default ScholarshipDetails