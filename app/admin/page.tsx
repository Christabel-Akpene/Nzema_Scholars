import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { auth } from "@/auth"
import { Compass, File, GraduationCap, School } from "lucide-react"


export default async function AdminPage(){
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session){
        redirect("/signin")
    }

    if (session.user.role !== "admin"){
        redirect("/dashboard")
    }
    
    return (
      <div>
        <div className="my-4">
          <h1 className="text-2xl font-semibold text-brand">
            Ecosystem Overview
          </h1>
          <p>
            Keep track of the progress of Nzema Scholars and manage the
            infrastructure of the community
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 justify-center gap-4 md:grid-cols-4 md:mb-6 mb-3">
          <div className=" h-full w-full shadow-md border-border-strong border-2 rounded-2xl flex flex-col space-y-2 bg-card mx-auto p-4 transition-all duration-300 hover:-translate-y-1">
            <div className="p-2 rounded-md bg-brand text-green-200 w-12">
              <GraduationCap className="mx-auto" />
            </div>
            <h3 className="text-brand text-2xl font-semibold">10</h3>
            <p className="text-text-secondary uppercase">total scholarships</p>
          </div>
          <div className=" h-full w-full shadow-md border-border-strong border-2 rounded-2xl flex flex-col space-y-2 bg-card mx-auto p-4 transition-all duration-300 hover:-translate-y-1">
            <div className="p-2 rounded-md bg-accent text-yellow-200 w-12">
              <School className="mx-auto" />
            </div>
            <h3 className="text-brand text-2xl font-bold">10</h3>
            <p className="text-text-secondary uppercase">total schools</p>
          </div>
          <div className=" h-full w-full shadow-md border-border-strong border-2 rounded-2xl flex flex-col space-y-2 bg-card mx-auto p-4 transition-all duration-300 hover:-translate-y-1">
            <div className="p-2 rounded-md bg-brand text-green-200 w-12">
              <File className="mx-auto" />
            </div>
            <h3 className="text-brand text-2xl font-bold">10</h3>
            <p className="text-text-secondary uppercase">
              mentorship requests
            </p>
          </div>
          <div className=" h-full w-full shadow-md border-border-strong border-2 rounded-2xl flex flex-col space-y-2 bg-card mx-auto p-4 transition-all duration-300 hover:-translate-y-1">
            <div className="p-2 rounded-md bg-accent text-yellow-200 w-12">
              <Compass className="mx-auto" />
            </div>
            <h3 className="text-brand text-2xl font-bold">10</h3>
            <p className="text-text-secondary uppercase">total applications</p>
          </div>
        </div>

        {/* recent scholarship applications */}

        
      </div>
    );
}