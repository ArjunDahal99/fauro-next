import { FoxGIF } from "@/public/icons";
import Image from "next/image";
import React from "react";

export const LoadingFox = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full mt-20 ">
        <Image src={FoxGIF} width={80} height={80} alt="fox" />
        <h1 className="text-4xl font-bold text-pop">Fauro is Working... </h1>
      </div>
    </>
  );
};
