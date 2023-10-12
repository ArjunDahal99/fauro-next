"use client";
import { StarIcon } from "@/public/icons";
import Image from "next/image";
import React from "react";

const ReviewCard = ({ data }: any) => {
  return (
    <div
      className="h-[550px]  w-[400px]  max-md:w-[300px] max-md:h-[550px] mb-2 bg-gradient-to-b
      dark:from-black dark:via-stone-900 dark:to-violet-900 rounded-[20px] shadow-2xl "
    >
      <div className="flex flex-col items-center h-full p-10 rounded-lg ">
        <Image
          className="h-[215px] rounded-full w-[210px]"
          src={data?.image_url}
          alt="start"
        />
        <h1 className="text-2xl font-bold text-center "> {data.user}</h1>
        <p className="text-sm text-center ">{data.comment}</p>
        <div className="flex  ml-[-40px] ">
          {data.rating.map((e: any) => (
            <Image key={e} src={StarIcon} width={60} height={60} alt="Star" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
