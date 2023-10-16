import prisma from "@/db/database.config";
import { NextRequest, NextResponse } from "next/server"



export const DELETE = async (req: NextRequest) => {

    const data = await req.json();
    const deleteDataFromDB = await prisma.image.delete({
        where: {
            id: data
        }
    })


    return NextResponse.json("Deleted")
}