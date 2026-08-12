import {z} from "zod"

export const UserScholarshipSchema = z.object({
    fullname: z.string().min(3, "Name must be at least 3 characters"),
    email: z.email("Invalid email address"),
    phonenumber: z.string().min(10, "Phone number must be at least 10 characters"),
    current_location: z.string().min(3, "Current location must be at least 3 characters"),
    hometown: z.string().min(3, "Hometown must be at least 3 characters"),
    dob: z.coerce.date(),
    gender: z.enum(["male", "female", "prefer_not"], {
        error: "Please select a gender",
    }),

    // academic information
    school: z.string().min(3, "School must be at least 3 characters"),
    level: z.enum(["undergraduate", "diploma", "shs"], {
        error: "Please select your educational level",
    }),
    current_year: z.enum(["first", "second", "third", "fourth"], {
        error: "Please select your current year of study",
    }),
    programme: z.string().min(3, "Programme of study must be at least 3 characters"),
    gpa: z.string().min(1, "GPA must be at least 1 character"),

    // application status
    has_applied: z.enum(["yes", "no"], {
        error: "Please indicate if you have already applied"})
})

export type UserScholarship = z.infer<typeof UserScholarshipSchema>;



