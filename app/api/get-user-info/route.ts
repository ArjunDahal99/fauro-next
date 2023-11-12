import prisma from "@/db/database.config";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) =>
{

    const data = await req.json()

    let user = await prisma.user.findFirst({
        where: {
            id: data.id
        }
    })
    return NextResponse.json(({ user }))
}