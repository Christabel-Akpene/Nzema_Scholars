import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { auth } from "@/auth"

export default async function Dashboard(){

    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session){
        redirect("/signin")
    }

    if (session.user.role === "admin"){
        redirect("/admin");
    }

    return (
        <h1 className="text-3xl text-purple-300">This is the user dashboard</h1>
    )
}