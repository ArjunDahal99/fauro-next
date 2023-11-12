"use client"
import { ImagePropsType } from '@/types'
import React, { useEffect } from 'react'
import { LoadingFox } from '../common/Loading'
import BrowseCardContainer from './BrowseCardContainer'
import { useRouter } from 'next/navigation'

const BrowseGallery = ({ data }: { data: ImagePropsType[] }) =>
{

    return (
        <section className="  grid grid-cols-gallery auto-rows-[10px] md:w-[60%]  ">
            {data ? (
                data.map((photo, index) => (
                    <BrowseCardContainer key={index} data={photo} />
                ))
            ) : (
                <LoadingFox />
            )}
        </section>

    )
}

export default BrowseGallery