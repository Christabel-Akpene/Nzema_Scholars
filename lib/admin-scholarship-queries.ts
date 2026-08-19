import { prisma } from "./prisma";

export async function getScholarship(id: string) {
    return await prisma.scholarship.findUnique({
        where:{
            id: id
        },
        include:{
            eligibility: true,
            documents: true
        },
    })
}


export async function getScholarshipCard(){
    return await prisma.scholarship.findMany({
        where: {
            deadline: {gte: new Date()}
        },
        orderBy: {
            createdAt: "desc"
        },
        select: {
            id: true,
            name: true,
            about: true, 
            deadline: true,   
        }
    })
}

export async function getScholarshipList(){
    return await prisma.scholarship.findMany({
        select: {
            id: true,
            name: true,
            deadline: true,
            _count: {
                select: {
                    applications: true
                }
            }
        },
    })
}


