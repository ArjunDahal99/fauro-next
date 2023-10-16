import prisma from "@/db/database.config";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) => {

    const data = await req.json()

    let user = await prisma.user.findFirst({
        where: {
            email: data.email
        }
    })
    return NextResponse.json(({ user }))
}