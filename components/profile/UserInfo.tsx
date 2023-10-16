"use client";

import { AtSign, MailIcon, MapPinIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const UserInfo = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="flex items-center font-[500] justify-center m-20 space-x-7 profilecontainer ">
        <Image
          src={session?.user?.image!}
          alt="pp"
          className="rounded-full "
          height={150}
          width={150}
        />
        <div className=" side_part">
          <h1 className="text-3xl font-bold capitalize text-[#767676] ">
            {session?.user?.name}
          </h1>

          {/* info container */}
          <div className="flex flex-wrap items-start mt-2 space-x-5 info-container">
            <div className="flex items-center justify-start space-x-2 ">
              <MapPinIcon />
              <h1>Kathmandu,Nepal</h1>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <AtSign />
              <h1>{session?.user?.email}</h1>
            </div>
          </div>
          {/* about me container */}
          <h1 className="mt-3 capitalize">
            <span className="text-3xl "> 👋🏼 </span>
            {` Hello there, it's me ${session?.user?.name}`}
          </h1>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
