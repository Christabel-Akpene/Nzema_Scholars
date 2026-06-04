import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { auth } from "@/auth"


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
        <h1 className="text-3xl">Admin Page</h1>
    )
}