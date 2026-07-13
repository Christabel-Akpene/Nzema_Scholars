import { prisma } from "./prisma";

export async function getScholarships() {
    return await prisma.scholarship.findMany({
        where:{
            deadline: { gte: new Date() }
        },
        include:{
            eligibility: true,
            documents: true
        },
        orderBy: {
            createdAt: "desc"
        }
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