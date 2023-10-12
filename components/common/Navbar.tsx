import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./themetoggle";
import Image from "next/image";
import { LogoImg } from "@/public/images";

import { DropdownMenuCheckboxes } from "./ProfileBox";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full ">
        <Link href={"/"}>
          <div className="flex items-center">
            <Image src={LogoImg} alt="logo" className="w-20" />
            <h1 className="text-4xl font-bold max-sm:text-xl ">Fauro</h1>
          </div>
        </Link>

        <ul className="flex items-center mr-2 space-x-4">
          <li>
            <ModeToggle />
          </li>
          <li>
            <DropdownMenuCheckboxes />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
