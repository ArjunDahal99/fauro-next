"use client";

import { rowOneImages, rowTwoImages } from "@/config/images";
import Image from "next/image";
import React, { useEffect } from "react";
import MarQuee from 'react-fast-marquee'

const CreativeSection = () => {
 
  


  return (
    <>
      <section className="min-h-screen flex flex-col  items-center justify-center p-6">
      <p className="md:text-[70px] text-[30px]    text-center mt-10  ">
            Unlease your prompt into <span className="  text-violet-500  font-bold">  Reality</span>
          </p>
        <div className=" w-[70%]  rotate-[-4deg] mt-10 md:mt-[6.5rem]">
          <MarQuee>
            { rowOneImages.map((i,index)=>(
              <Image
              src={i.url}
              alt='image'
              key={index}
              width={500}
              height={300}
              className="md:m-4 w-[200px] m-2 md:w-[300px] rounded-[20px]"
              />
            ))}
          </MarQuee>
          <MarQuee>
              {rowTwoImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] m-2 md:w-[450px] rounded-[20px]"
                  width={500}
                  height={300}
                />
              ))}
            </MarQuee>

        </div>

   
      </section>
    </>
  );
};

export default CreativeSection;
