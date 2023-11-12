"use client"
import { ImagePropsType } from '@/types'
import Image from 'next/image';
import usePreviewModal from '@/hooks/use-dialog-box';
import { HeartIcon } from 'lucide-react';
import { useUserStore } from '@/store/store';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';



const BrowseCardContainer = ({ data }: { data: ImagePropsType }) =>
{

    const userId = useUserStore(state => state.id)
    const [isLoading, setIsLoading] = useState(false)
    const [likeCount, setLikeCount] = useState(data.likes.length)
    const [isLikedOnFrontEnd, setIsLikedOnFrontEnd] = useState(data.likes.includes(userId!));
    const previewModal = usePreviewModal();
    const widthHeightRatio = data.height / data.width;
    const galleryHeight = Math.ceil(350 * widthHeightRatio);
    const photoSpans = Math.ceil(galleryHeight / 10) + 1;
    const onPreview = (event: any) =>
    {
        event.stopPropagation();
        previewModal.onOpen(data);
    };


    const addOrRemoveLike = async (userId: string, imageId: number) =>
    {
        setIsLoading(true);
        if (!userId) return alert("Must be Logged in");
        const { data } = await axios.post("/api/like", { userId, imageId });
        if (data.message === "Liked")
        {
            setIsLikedOnFrontEnd(true);
        } else
        {
            setIsLikedOnFrontEnd(false);
        }

        if (isLikedOnFrontEnd)
        {
            setLikeCount((prev) => prev - 1);
        } else
        {
            setLikeCount((prev) => prev + 1);
        }
        setIsLoading(false);
    };



    return (
        <>
            <div
                style={{ gridRow: `span ${photoSpans}` }}
                className="w-[350px] group justify-self-center relative "
            >
                <div

                    className="relative overflow-hidden group rounded-xl "
                >
                    {/* // top part that consist of user information */}
                    <div className="absolute text-white font-bold  z-10 flex items-center justify-between w-full p-2 space-x-3 transition duration-500 ease-in-out opacity-0 bg-gradient-to-b from-black group-hover:opacity-100">
                        {/* //user information */}
                        <div className=" flex items-center gap-x-2">
                            <Image
                                src={data.pp}
                                alt='user'
                                width={40}
                                height={40}
                                className="w-10 h-10 rounded-full "
                            />
                            <h1 className="text-lg font-bold tracking-wider">
                                {data.username}
                            </h1>
                        </div>
                        {/* like button */}
                        <div className=" flex space-x-3  items-center">
                            <h1>{likeCount}</h1>
                            <button disabled={isLoading}>
                                {isLikedOnFrontEnd ?
                                    <HeartIcon onClick={() => addOrRemoveLike(userId!, data.imageId)} className=' cursor-pointer' size={40} fill='red' stroke='red' />
                                    :
                                    <HeartIcon onClick={() => addOrRemoveLike(userId!, data.imageId)} className=' cursor-pointer' size={40} />
                                }
                            </button>


                        </div>




                    </div>
                    {/* //actual img */}
                    <Image
                        onClick={onPreview}
                        src={data.url}
                        alt={data.prompt}
                        width={350}
                        height={galleryHeight}
                        sizes="250px"
                        className=""
                    />
                    {/* // bottom */}
                    <div className=" absolute z-10 text-white font-bold  pb-2 w-full transition duration-500 ease-in-out opacity-0 bottom-0 bg-gradient-to-t from-black group-hover:opacity-100">
                        <h1> {data.prompt.length > 20 ? data.prompt.slice(0, 40) + "..." : data.prompt}</h1>
                        <h1 className="text-[15px]  ">
                            Created {data.created_At}
                        </h1>
                    </div>
                </div>
            </div>

        </>

    );
}

export default BrowseCardContainer