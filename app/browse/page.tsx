
import BrowseGallery from '@/components/browse/BrowseGallery'
import { Separator } from '@/components/ui/separator'
import prisma from '@/db/database.config'
import { ImagePropsType } from '@/types'
import { CompassIcon } from 'lucide-react'
import { revalidatePath, revalidateTag } from 'next/cache'
import React from 'react'
import { format } from 'timeago.js';
import getFilteredImages from '../../actions/get-image-by-filter'
import { Button } from '@/components/ui/button'
import ImageFilter from '@/components/browse/ImageFilter'
import { useRouter } from 'next/router'



interface BrowserPageProps
{
    params: {

    },
    searchParams: {
        color?: string
        tag?: string
        like?: boolean
        latest?: boolean
        userId?: string
    };
}

const Browse: React.FC<BrowserPageProps> = async ({ params, searchParams }) =>
{

    const images = await getFilteredImages({
        like: searchParams.like,
        latest: searchParams.latest,
        color: searchParams.color,
        tag: searchParams.tag,
        userId: searchParams.userId
    })

    const filteredData: ImagePropsType[] = images.map((image: any) => (
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