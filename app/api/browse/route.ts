import prisma from "@/db/database.config";
import { NextRequest, NextResponse } from "next/server";



export const GET = async (req: NextRequest) =>
{

    console.log(req.url)
    const { searchParams } = new URL(req.url)
    const data = new URL(req.url)
    console.log(data)

    console.log(searchParams)
    const color = searchParams.get("color") || undefined
    const tag = searchParams.get("tag") || undefined
    const like = searchParams.get("like") || false
    const latest = searchParams.get("latest") || false
    const userId = searchParams.get("userID") || undefined
    console.log(color)
    console.log(tag)
    console.log(like)
    console.log(latest)
    console.log(userId)

    try
    {
        if (like && latest)
        {
            const data = await prisma.image.findMany({
                include: {
                    createdBy: true,
                    BackgroundColor: true,
                    Like: true
                },
                orderBy: {
                    Like: {
                        _count: "desc"
                    },
                }
            })
            console.log(data)
            return NextResponse.json(data)
        }
        if (like)
        {
            const data = await prisma.image.findMany({
                include: {
                    createdBy: true,
                    BackgroundColor: true,
                    Like: true
                },
                orderBy: {
                    Like: {
                        _count: "desc"
                    },
                }
            })
            console.log(data)
            return NextResponse.json(data)


        }
        if (latest)
        {
            const data = await prisma.image.findMany({
                include: {
                    createdBy: true,
                    BackgroundColor: true,
                    Like: true
                },
                orderBy: {
                    created_At: "desc"
                }
            })
            console.log(data)
            return NextResponse.json(data)
        }
        const data = await prisma.image.findMany({
            include: {
                createdBy: true,
                BackgroundColor: true,
                Like: true
            },
        })
        console.log(data)
        return NextResponse.json(data)


    } catch (error)
    {
        console.log(error)
    }


}











