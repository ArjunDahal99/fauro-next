"use client";
import { MobileSidebar } from "@/components/generate/MobileSideBar";
import { SelectEngine } from "@/components/generate/SelectEngine";

import Sidebar from "@/components/generate/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useInput, usePulbishToggle, useToggle, useUserStore } from "@/store/store";
import { FlameIcon, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getHeightnWidth } from "@/components/generate/GetSize";
import axios from "axios";
import Image from "next/image";

import ImagePlaceHolder from "@/components/generate/ImagePlaceHolder";
import { LoadingFox } from "@/components/common/Loading";
import TogglePublish from "@/components/generate/TogglePublish";
const Generate = () =>
{
  const [textInputPrompt, setTextInputPrompt] = useState("");
  const [textNegativeInputPrompt, setTextNegativeInputPrompt] = useState("");
  const [negativeToggle, setNegativeToggle] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [imageFromApi, setImageFromApi] = useState();

  //global store
  const toggle = useToggle((state) => state.showToggle);
  const switchMobileToggle = useToggle((state) => state.switchToggle);
  const inputDiamention = useInput((state) => state.inputDiamention);
  const outputNumber = useInput((state) => state.inputOutputNo);
  const Engine = useInput((state) => state.engineModel);
  const getUserDataFromDataBase = useUserStore((state) => state.getUser);
  const isFeatured = usePulbishToggle((state) => state.showToggle)

  // getting session
  const { data: session } = useSession();
  console.log(session)
  if (!session) redirect("/");

  //api callz
  const generateImageFromApi = async () =>
  {
    setIsLoading(true);

    try
    {
      if (textInputPrompt.length <= 0) return alert("Empty Field");
      const diamention = getHeightnWidth(inputDiamention);
      const objdata = {
        prompt: textInputPrompt,
        engineModel: Engine,
        email: session?.user?.email,
        height: diamention?.height,
        width: diamention?.width,
        isFeatured: isFeatured
      };
      const { data }: any = await axios.post(
        // "https://wide-eyed-lime-overshirt.cyclic.app/api/generate",
        "http://localhost:8000/api/generate",
        objdata
      );

      getUserDataFromDataBase(session?.user?.id!);
      setImageFromApi(data.url);
      //reduce the token from the user ..updating the data after the query
    } catch (error)
    {
      alert("Try different model");
    }
    setIsLoading(false);
  };

  return (
    <>
      <section className="flex ">
        {/* sidebar portion */}
        <div className="">
          <Sidebar />
        </div>
        {/* left section */}
        <div className="flex flex-col w-full space-x-4 ">
          {/* input section */}

          <div className="flex justify-center  w-[90%] max-md:w-full ">
            <Input
              type="text"
              className=""
              value={textInputPrompt}
              onChange={(e) => setTextInputPrompt(e.target.value)}
              placeholder="Enter your prompt..."
            />
            <Button
              disabled={isLoading}
              onClick={() => generateImageFromApi()}
              className="px-4 rounded-sm bg-gradient-to-bl  from-[#D750A6] via-[#A057F6] to-[#6E7AFB] "
            >
              Generate
              <FlameIcon className="ml-3 fill-white stroke-white" />
            </Button>
          </div>
          {/* value from the input box */}
          <div className="flex flex-wrap items-center mt-4 space-x-4 gap-y-6">
            <SelectEngine />
            <h1 className="px-1 text-sm font-bold text-white rounded-full text-purple-60 bg-primary w-fit">
              Size:{inputDiamention}
            </h1>
            <h1 className="px-1 text-sm font-bold text-white rounded-full text-purple-60 bg-primary w-fit">
              output:{outputNumber}
            </h1>
            <TogglePublish />
          </div>
          {/* next input */}
          <div className="flex items-center mt-3 space-x-3">
            <Switch onClick={() => setNegativeToggle((prev) => !prev)} />
            <Input
              type="text"
              className=" w-[1090px] max-2xl:w-[700px] max-xl:w-[600px]  max-lg:w-fit"
              placeholder="Enter Negative Prompt..."
              disabled={negativeToggle}
              value={textNegativeInputPrompt}
              onChange={(e) => setTextNegativeInputPrompt(e.target.value)}
            />
            <Settings
              onClick={() => switchMobileToggle()}
              className="hidden max-md:block"
            />
          </div>

          {/* image section */}
          <div className="flex items-center justify-center w-[90%] ">
            {isLoading ? (
              <LoadingFox />
            ) : imageFromApi ? (
              <Image
                src={imageFromApi}
                alt="generatedImg"
                width={500}
                height={500}
                className="mt-10 "
              />
            ) : (
              <div className="w-[500px] max-lg:w-[400px] md:mt-6 h-[500px] max-md:h-[500px] flex justify-center">
                <ImagePlaceHolder />
              </div>
            )}
          </div>

          {/* end of image section */}

          {/* setting for mobile */}
          {toggle && <MobileSidebar />}
        </div>
      </section>
    </>
  );
};

export default Generate;
