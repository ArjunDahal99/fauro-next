import prisma from "@/db/database.config"
import { NextResponse } from "next/server"


export const GET = async () =>
{
    const images = await prisma.image.findMany({
        include: {
            createdBy: true,
            BackgroundColor: true,
            Like: true
        },
        orderBy: {
            created_At: "desc"
        }
    })
    console.log(images)
    return NextResponse.json(images)
}
