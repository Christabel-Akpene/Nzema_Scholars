import Footer from "../components/footer"
import Navigation from "../components/navigation"
export default async function PublicLayout({children}: {children: React.ReactNode}){
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation/>
            <main className="flex-1 pt-16">
                {children}
            </main>
            <Footer/>
        </div>
    )
}