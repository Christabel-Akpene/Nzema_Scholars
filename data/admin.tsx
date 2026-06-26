import type { SideBarItem } from "@/interfaces/admin";
import { LayoutDashboard, GraduationCap, School, BriefcaseBusiness,  } from "lucide-react";

export const sidebarItems:  SideBarItem[] = [
    {
        icon: LayoutDashboard,
        href: "#",
        label: "Dashboard"
    },
    {
        icon: GraduationCap,
        href: "#",
        label: "Scholarships"
    },
    {
        icon: School,
        href: "#",
        label: "School"
    },
    {
        icon: BriefcaseBusiness,
        href: "#",
        label: "Career & Mentorship"
    },
]