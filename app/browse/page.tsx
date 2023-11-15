
import BrowseGallery from '@/components/browse/BrowseGallery'
import { Separator } from '@/components/ui/separator'
import prisma from '@/db/database.config'
import { ImagePropsType } from '@/types'
import axios from 'axios'
import { CompassIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { format } from 'timeago.js';


const Browse = async () =>
{
    const images = await prisma.image.findMany({
        include: {
            Like: true,
            BackgroundColor: true,
            createdBy: true
        },
        orderBy: {
            created_At: "desc"
        }
    })

    const filteredData: ImagePropsType[] = images.map((image: any) => (
        console.log(image),
        {
            imageId: image.id,
            height: image.height,
            width: image.width,
            created_At: format(image.created_At),
            pp: image.createdBy.pp,
            prompt: image.prompt,
            tags: image.tags,
            url: image.url,
            likes: image.Like.map((l: any) => l.user_id),
            username: image.createdBy.username,
            backgroundColor: image.BackgroundColor.map((bgColor: any) => ({
                color: bgColor.color,
                colorCode: bgColor.colorCode,
                percentage: bgColor.percentage,
            })),

        }
    ))


    return (
        <div className=" h-screen flex flex-col items-center ">
            <div className=" flex justify-center space-x-4 items-center h-40">
                <h1 className=' text-4xl font-bold md:text-6xl lg:text-7xl '>Explore</h1>
                <CompassIcon className=' w-16 h-16 md:w-24 md:h-24 lg:w-30 lg:h-30  ' />
            </div>
            <Separator className=' my-2' />
            <BrowseGallery data={filteredData} />
        </div>
    )
}

export default Browse