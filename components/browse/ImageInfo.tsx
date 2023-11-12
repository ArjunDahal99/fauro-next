"use client"
import { ImagePropsType } from '@/types'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { CopyIcon, DownloadIcon, PaintbrushIcon, PaletteIcon, PenIcon, TagIcon } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"
import useDownloader from 'react-use-downloader';

const ImageInfo = ({ data }: { data: ImagePropsType }) =>
{
    const { size, elapsed, percentage, download, cancel, error, isInProgress } = useDownloader();
    const { toast } = useToast()


    return (
        <>
            <div className=" overflow-y-auto bg-background ">
                <div className=" flex m-2  items-center gap-x-2">
                    <Image src={data.pp} alt='pp' className=' rounded-full' width={40} height={40} />
                    <h1>{data.username}</h1>
                </div>

                <div className="promptcontiner border m-2 rounded-md ">
                    <div className=" flex items-center ml-4 mt-4 space-x-2">
                        <PenIcon className=' w-5 h-5' />
                        <h1 className=' font-bold'> Prompt</h1>
                    </div>
                    <div className='  p-6 rounded-md m-2'>
                        <h1 className=' capitalize indent-2 tracking-wider  '>
                            {data.prompt}
                        </h1>
                        <Button onClick={() =>
                        {
                            navigator.clipboard.writeText(data.prompt), toast({
                                description: ' Copied',
                            });
                        }}
                            className=' mt-5 ' variant={"outline"}> <CopyIcon className=' mx-2' />Copy Prompt</Button>
                        <Button onClick={() => download(data.url, `${data.prompt.slice(0, 10)}.png`)} className=' mt-5 ml-2 ' variant={"outline"}><DownloadIcon className=' mx-2' /> Download</Button>
                    </div>
                </div>

                <div className=" border rounded-md m-2">
                    <div className=" flex items-center m-4 space-x-2">
                        <PaletteIcon className='' />
                        <h1 className='color-gradient font-bold'> Colors</h1>
                    </div>

                    <div className=" collor-pallate flex mb-2 ml-2   rounded-xl flex-col">
                        {data.backgroundColor.map((c, index) => (
                            <div key={index} className=" flex items-center gap-2 border justify-start rounded-full w-fit  px-2">
                                <div style={{ backgroundColor: c.colorCode }} className=' w-5 h-5 rounded-full' />
                                <h1 className=' capitalize'>{c.color} </h1>
                                <h1>{Math.floor(c.percentage)}%</h1>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=" border rounded-md m-2">
                    <div className=" flex items-center m-4 space-x-2">
                        <TagIcon />
                        <h1 className=' font-bold'> Tags</h1>
                    </div>

                    <div className=" tags flex flex-wrap  m-2 gap-y-2  ">
                        {data.tags?.map((t, index) => (
                            <div key={index} className=" border rounded-full px-2">
                                <h1>{t}</h1>
                            </div>
                        ))}
                    </div>
                </div>




            </div>


        </>
    )
}

export default ImageInfo