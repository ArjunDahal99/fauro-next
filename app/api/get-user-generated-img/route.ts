import prisma from "@/db/database.config";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) =>
{


    const { userId } = await req.json()


    const data = await prisma.image.findMany({
        where: {
            userId,
        }
    })


    return NextResponse.json(data)

}