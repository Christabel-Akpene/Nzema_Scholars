import { Mail } from "lucide-react";
import Link from "next/link";

export default async function Footer() {
  return (
    <footer className="bg-page pt-8 px-4 md:pt-12">
      <div className="grid gap-8 md:grid-cols-3 pb-6 md:ml-16">
        <div className="flex-col gap-4">
          <h3 className="text-brand text-lg md:text-2xl font-bold">
            Nzema Scholars
          </h3>
          <p className="max-w-sm text-text-muted mt-2">
            Rooted in community, growing for the future. We empower the next
            generation of Nzema leaders
          </p>
          <div className="flex gap-2 mt-4">
            <Mail size={16} color="grey"/>
            <Mail size={16} color="grey"/>
            <Mail size={16} color="grey"/>
          </div>
        </div>
        <div className="text-text-muted">
          <h4 className="font-semibold text-lg text-brand">Our Mission</h4>
          <p>About Us</p>
          <p>Scholarships</p>
          <p>Education</p>
          <p>Career Guidance</p>
        </div>
        <div className="text-text-muted">
          <h4 className="font-semibold text-lg text-brand">Support</h4>
          <p className="">About Us</p>
          <p className="">Help Center</p>
          <p className="">FAQ</p>
          <p className="">Privacy Policy</p>
        </div>
      </div>
      <div className="md:text-center border-t border-t-border-strong py-6">
        <p>© 2026 NzemaScholars</p>
      </div>
    </footer>
  ); 
}
