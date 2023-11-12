
"use client"
import { HeroImg } from "@/public/images";
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowRight, CompassIcon } from "lucide-react";
import Link from "next/link";
import { Tilt } from 'react-tilt'


const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 35,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
const HeroSection = () =>
{



  return (
    <>
      <section className="flex items-center mt-10 justify-evenly max-md:flex-col">
        <div className="">
          <p className="text-[70px] max-sm:text-[30px]  text-gradient font-[1000] max-sm:w-[300px] w-[700px] md:text-6xl ">
            Turn Your Imagination into Reality with FauroAI
          </p>
          <Link href={"/generate"}>
            <Button className="mt-3 text-black font-bold bg-white shadow-xl hover:bg-gradient-to-r hover:text-white from-[#4158d0] via-[#c850c0] to-[#ffcc70]">
              Start Creating <ArrowRight />
            </Button>
          </Link>
          <Link href={"/browse"}>
            <Button className="mt-3 ml-2 px-7 text-black font-bold bg-white shadow-xl hover:bg-gradient-to-r hover:text-white from-[#4158d0] via-[#c850c0] to-[#ffcc70]">
              Explore <CompassIcon className=" ml-3" />
            </Button>
          </Link>
        </div>

        <Tilt options={defaultOptions} >
          <Image
            src={HeroImg}
            className=" max-sm:w-[300px] max-lg:w-[350px] w-[500px] mt-5 "
            alt="hero"
          />
        </Tilt>

      </section>
    </>
  );
};

export default HeroSection;
