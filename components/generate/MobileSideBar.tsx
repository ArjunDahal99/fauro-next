"use client";

import { XIcon } from "lucide-react";
import { Question } from "./Question";
import Diamention from "./Diamention";
import OutputNo from "./OutputNo";
import Image from "next/image";
import { TokenIcon } from "@/public/icons";
import { useState } from "react";
import { WarninigIcon } from "./Warning";
import { useToggle } from "@/store/store";

export function MobileSidebar() {
  const switchMobileToggle = useToggle((state) => state.switchToggle);

  const [guidenceSlider, setGuidenceSlider] = useState<String | any>("3");

  return (
    <>
      <header className=" absolute h-[calc(100vh-7.6rem)] w-full  left-[-16px]  bg-[#030712] md:hidden">
        <XIcon className="mt-2 ml-auto" onClick={() => switchMobileToggle()} />
        {/* cost portion */}
        <div className="flex justify-evenly text-white font-bold   bg-gradient-to-r  from-[#D750A6] via-[#A057F6] to-[#6E7AFB] items-center w-[150px] rounded-full h-[50px] mx-auto  ">
          <Image src={TokenIcon} className="w-10 h-10" alt="token" />
          <h1>180</h1>
          <Question text={"token will reset after 12 hr"} />
        </div>
        {/* diamention portion */}
        <div className="mt-10 ">
          <div className="flex space-x-3 ">
            <h1 className="ml-2 ">Input Diamention</h1>
            <Question text={"Witdh and Height value respectively"} />
          </div>
          <Diamention />
        </div>
        {/* no of outputs portion */}
        <div className="mt-5 ml-2">
          <div className="flex space-x-3 ">
            <h1 className="ml-2 ">No. of Outputs</h1>
            <WarninigIcon text={"Only 1 output available at the moment"} />
          </div>
          <OutputNo />
        </div>
        {/* guidance scale */}
        <div className="mt-10 ml-2 ">
          <h1>Guidance Scale</h1>
          <div className="flex items-center mt-5 space-x-3">
            <input
              type="range"
              className="h-2 w-[250px] rounded-lg  cursor-pointer range-sm "
              id="customRange1"
              min="0"
              max="7"
              value={guidenceSlider}
              onChange={(e) => setGuidenceSlider(e.target.value)}
            />

            <span> {guidenceSlider}</span>
          </div>
        </div>
      </header>
    </>
  );
}
