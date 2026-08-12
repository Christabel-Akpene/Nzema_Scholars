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

export async function createScholarship(prevState: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
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

    const data = {
      name: formData.get("name") as string,
      about: formData.get("about") as string,
      url: formData.get("url") as string,
      deadline: formData.get("deadline") as string || undefined,
      eligibility: formData.getAll("eligibility") as string[],
      documents: formData.getAll("documents") as string[]
    }

    const otherEligibility = formData.get("other_eligibility") as string
    const otherDocument = formData.get("other_document") as string

    if (otherEligibility){
      data.eligibility.push(otherEligibility)
    }

    if (otherDocument){
      data.documents.push(otherDocument)
    }

    const validationResult = scholarshipSchema.safeParse(data);

    if (!validationResult.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: z.flattenError(validationResult.error),
      };
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

    revalidatePath("/admin/scholarships");
    return { success: true, message: "Scholarship data added successfully"}
    
  } catch (error) {
    console.error("Error creating scholarship: ", error)
    return {
      success: false,
      message: "An error occured while creating scholarship form data",
      error: "Failed to create scholarship form data"
    }

  }
}
