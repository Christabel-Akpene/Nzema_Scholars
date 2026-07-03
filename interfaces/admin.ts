import type { LucideIcon } from "lucide-react";
import {z} from "zod"

export interface SideBarItem {
    icon: LucideIcon;
    href: string,
    label: string
}

export const scholarshipSchema = z.object({
    name: z.string().min(3, "Name is required"),
    about: z.string().min(3, "Provide more details"),
    deadline: z.coerce.date().optional(),
    eligibility: z.array(z.string()).min(1, "Select at least one eligibility"),
    documents: z.array(z.string()).min(1, "Select at least 1 required document")
})

export type ScholarshipData = z.infer<typeof scholarshipSchema>