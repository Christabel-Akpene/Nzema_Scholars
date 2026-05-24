import Footer from "../components/footer"
import Navigation from "../components/navigation"
export default async function PublicLayout({children}: {children: React.ReactNode}){
    return (
        <div className="min-h-screen">
            <Navigation/>
            <main className="container">
                {children}
            </main>
            <Footer/>
        </div>
    )
}