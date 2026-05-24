"use client"
import { Menu, X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuProps {
    openMenu: boolean;
    setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

const headerLinks = [
    {name: "Home", href: "/"},
    {name: "Scholarship", href: "/scholarships"},
    {name: "Education", href: "/school"},
    {name: "Career Guidance", href: "/career"},
    {name: "Contact", href: "/contact"},
]

export default function Navigation(){
    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState(false);

    return (
      <>
        <header className="bg-brand-light border-b border-brand fixed">
          <div className="mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold text-brand">Nzema Scholars</h1>
            <div className="md:hidden">
              {!openMenu && (
                <Menu
                  onClick={() => setOpenMenu(!openMenu)}
                  className="cursor-pointer"
                />
              )}
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <ul className="flex gap-4 px-6">
                {headerLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`${pathname === link.href ? "text-accent" : ""} py-2 cursor-pointer text-sm uppercase hover:text-brand-hover transition-colors font-semibold block`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden md:flex items-center">
              <button className="bg-brand text-text-inverse font-semibold px-3 py-2 rounded">
                Sign In
              </button>
            </div>
          </div>
        </header>
        {openMenu && <div className="fixed inset-0 bg-black/50"></div>}
        <MenuComponent openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </>
    );
}

const MenuComponent = ({openMenu, setOpenMenu} : MenuProps) => {
    const pathname = usePathname();
    return (
      <div
        className={`fixed top-0 right-0 w-[80%] sm:w-[60%] bg-brand-light p-4 h-dvh z-50 transform transition-transform duration-300 ease-in-out ${openMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="flex justify-end p-4 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </div>
        <div className="h-0.5 bg-border w-full mb-3"></div>
        <ul className="flex flex-col gap-4 px-6">
          {headerLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                onClick={() => setOpenMenu(false)}
                className={`${pathname === link.href ? "text-accent" : ""} py-2 cursor-pointer uppercase text-lg hover:text-accent-hover transition-colors font-semibold block`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="text-brand uppercase text-lg font-semibold">Sign In</li>
        </ul>
      </div>
    );
}