import type { LucideIcon } from "lucide-react";
import {z} from "zod"

export interface SideBarItem {
    icon: LucideIcon;
    href: string,
    label: string
}

export const scholarshipSchema = z.object({
  name: z.string().min(3, "Name muist be at least 3 characters"),
  about: z.string().min(3, "Scholarship details must be about 3 characters"),
  deadline: z.coerce.date().optional(),
  url: z.url(),
  eligibility: z.array(
    z.string().min(1, "Select at least one eligibility criteria"),
  ),
  documents: z.array(
    z.string().min(1, "Select at least one eligibility criteria"),
  ),
});

export type ScholarshipData = z.infer<typeof scholarshipSchema>