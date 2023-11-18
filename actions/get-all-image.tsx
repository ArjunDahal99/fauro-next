import prisma from '@/db/database.config'
import { cache } from 'react'

export const revalidate = 1 // revalidate the data at most every hour

export const getAllImage = cache(async () =>
{
    const image = await prisma.image.findMany({
        where: {
            isFeatured: true
        },
        include: {
            Like: true,
            BackgroundColor: true,
            createdBy: true
        },
        orderBy: {
            created_At: "desc"
        }
    })
    return image
})