"use server";

import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ScholarshipData, scholarshipSchema } from "@/interfaces/admin";
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
};

export async function createScholarship(data: ScholarshipData): Promise<ActionResponse> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      redirect("/signin");
    }

    if (session.user.role !== "admin") {
      redirect("/dashboard");
    }

    const validationResult = scholarshipSchema.safeParse(data);

    if (!validationResult.success){
        return{
            success: false,
            message: "Validation failed",
            errors: z.flattenError(validationResult.error)
        }
    }
    const validatedData = validationResult.data

    await prisma.scholarship.create({
      data: {
        name: validatedData.name,
        about: validatedData.about,
        url: validatedData.url,
        ...(validatedData.deadline ? { deadline: validatedData.deadline } : {}),
        eligibility:{
          create: validatedData.eligibility.map((label) => ({ label}))
        },
        documents:{
          create: validatedData.documents.map((label) => ({ label}))
        }
      },
    });

    return { success: true, message: "Scholarship data added successfully"}
    
  } catch (error) {
    console.error("Error creating issue: ", error)
    return {
      success: false,
      message: "An error occured while creating scholarship form data",
      error: "Failed to create scholarship form data"
    }

  }
}
