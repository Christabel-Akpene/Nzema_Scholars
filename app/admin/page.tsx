import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { auth } from "@/auth"

const StatCard = ({ number, text }: {number: number; text: string}) => (
  <div className="h-32 w-full shadow-sm border-border-strong border-2 flex flex-col justify-center space-y-2 bg-card m-auto p-4 transition-all duration-300 hover:-translate-y-1">
    <h3 className="text-brand text-2xl md:text-4xl font-bold">
      {number}
    </h3>
    <p className="text-text-secondary uppercase">{text}</p>
  </div>
);

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
        <div className="mb-4">
          <h1 className="text-2xl font-semibold text-brand">Overview</h1>
          <p>
            A live summary of all applications received across the platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 justify-center gap-4 md:grid-cols-3 md:mb-6 mb-3">
            <StatCard number={10} text="scholarship applications" />
            <StatCard number={10} text="university applications" />
            <StatCard number={10} text="mentorship requests" />
        </div>

        {/* recent scholarship applications */}
      </div>
    );
}