import prisma from "@/db/database.config"
import { NextRequest, NextResponse } from "next/server"



export const POST = async (req: NextRequest) =>
{


    const { userId, imageId }: any = await req.json()
    const likedArray = await prisma.like.findFirst({
        where: {
            imageId,
            user_id: userId
        }
    })

    if (likedArray)
    {
        const removeLike = await prisma.like.deleteMany({
            where: {
                imageId,
                user_id: userId,
            }
        })

        return NextResponse.json({ message: "Unliked" }, { status: 200 })
    }
    else
    {

        const addLike = await prisma.like.create({
            data: {
                imageId,
                user_id: userId,
            }
        })
    }

    return NextResponse.json({ message: "Liked" }, { status: 200 })
}