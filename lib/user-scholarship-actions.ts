"use server"

import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { UserScholarshipSchema} from "@/interfaces/user-scholarship";
import { auth } from "@/auth";
import { headers } from "next/headers";
import z from "zod";

export type ActionResponse = {
    success: boolean;
    message: string;
    errors?: {
        formErrors: string[],
        fieldErrors: Record<string, string[] | undefined>
    }
    error?: string;
}

export async function createUserScholarship(prevState: ActionResponse | null, formData: FormData): Promise<ActionResponse>{
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        if (!session){
            redirect("/signin")
        }

        const data = {
            fullname: formData.get("fullname") as string,
            email: formData.get("email") as string, 
            phonenumber: formData.get("phonenumber") as string,
            current_location: formData.get("current_location") as string,
            hometown: formData.get("hometown") as string,
            dob: formData.get("dob") as string,
            gender: formData.get("gender"),
            // academic information
            school: formData.get("school") as string,
            level: formData.get("level"),
            current_year: formData.get("current_year"),
            programme: formData.get("programme") as string,
            gpa: formData.get("gpa") as string,
            // application status
            has_applied: formData.get("has_applied")    
        }

        const validationResult = UserScholarshipSchema.safeParse(data);

        
        if (!validationResult.success){
            return {
                success: false,
                message: "Validation failed",
                errors: z.flattenError(validationResult.error)
            }
        }

        const validatedData = validationResult.data;
        const scholarshipId = formData.get("scholarshipId") as string;

        await prisma.$transaction(async (tx) => {
          const profile = await tx.userProfile.create({
            data: {
              userId: session.user.id,
              fullname: validatedData.fullname,
              phone: validatedData.phonenumber,
              email: validatedData.email,
              currentLocation: validatedData.current_location,
              hometown: validatedData.hometown,
              dateOfBirth: new Date(validatedData.dob),
              gender: validatedData.gender,
              school: validatedData.school,
              educationLevel: validatedData.level,
              currentYear: validatedData.current_year,
              programme: validatedData.programme,
              gpa: validatedData.gpa,
              hasApplied: validatedData.has_applied,
            },
          });

          await tx.scholarshipApplication.create({
            data: {
              userProfileId: profile.id,
              scholarshipId: scholarshipId,
            },
          });
        });
        
        return {
            success: true,
            message: "Scholarship profile created successfully"
        }
    }
    catch (error){
        console.error("Error creating scholarship profile: ", error);
        return {
            success: false,
            message: "Failed to create scholarship profile",
            error: "Failed to create scholarship"
        }
    }
}