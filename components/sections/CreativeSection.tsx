"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { CollectionImg } from "@/public/images";
import { Button } from "../ui/button";
import { GoalIcon, PenIcon, SearchIcon } from "lucide-react";
const CreativeSection = () => {
  return (
    <>
      <section className="flex items-center min-h-screen space-x-2 max-md:flex-col-reverse max-md:flex justify-evenly">
        <Image
          className="w-[520px]  h-[620px] max-md:w-[290px] max-md:h-[320px]  rounded-xl "
          src={CollectionImg}
          alt="collection"
        />
        <div className=" md:w-1/2">
          <h1 className=" text-gray-500 font-semibold md:tracking-[-3px] max-md:text-2xl max-sm:w-[300px] md:text-5xl">
            " Creativity is the brush that paints the canvas of innovation,
            turning imagination into reality." - ChatGPT
          </h1>
          <div className="flex space-x-2 ">
            <Button className="mt-5  text-black font-bold bg-white shadow-xl hover:bg-gradient-to-r hover:text-white from-[#4158d0] via-[#c850c0] to-[#ffcc70] ">
              <GoalIcon />
              <h1 className="ml-2">Start Now</h1>
            </Button>
            <Button className="mt-5   text-black font-bold bg-white shadow-xl hover:bg-gradient-to-r hover:text-white from-[#4158d0] via-[#c850c0] to-[#ffcc70]">
              <SearchIcon />
              <h1 className="ml-3">Explore Gallery</h1>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeSection;

{
  /* <section className="flex">
<div className="flex justify-center ">
  <Image
    className="w-[450px]  h-[520px] sm:w-[320px] sm:h-[400px] rounded-xl "
    src={CollectionImg}
    alt="creative"
  ></Image>
</div>

<div className="w-1/2 sm:w-full sm:mt-20 ">
  <h1 className="text-[50px] sm:text-[30px]  md:mt-14 md:text-[35px] text-pop  font-[1000]  ">
    "Creativity is the brush that paints the canvas of innovation,
    turning imagination into reality." - ChatGPT
  </h1>
  <Link href={"/generate"}>
    {" "}
    <Button> Create Now</Button>
  </Link>
</div>
</section> */
}
