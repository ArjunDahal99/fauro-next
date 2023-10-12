import { CatImg } from "@/public/images";
import Image from "next/image";
import { Button } from "../ui/button";

const HowSection = () => {
  return (
    <>
      <section className="flex justify-center min-h-screen max-md:items-center max:md max-md:flex-col md:flex md:justify-evenly">
        <div className="">
          <h1 className="text-3xl font-bold text-purple-500 md:text-7xl max-md:text-center">
            How To generate AI Images
          </h1>
          <ol className="flex flex-col space-y-5 h-1/2 justify-evenly md:text-4xl">
            <li className="items-center space-x-4 md:flex">
              <span className="mr-6 text-5xl font-bold max-md:text-2xl">
                1.
              </span>
              Login or Create your Account
              <Button className=" p-5   text-black font-bold bg-white shadow-xl hover:bg-gradient-to-r hover:text-white from-[#4158d0] via-[#c850c0] to-[#ffcc70]">
                {" "}
                Login Now
              </Button>
            </li>
            <li>
              <span className="mr-6 text-5xl font-bold max-md:text-2xl">
                2.
              </span>
              Click Create Button at Top Right corner
            </li>
            <li>
              <span className="mr-6 text-5xl font-bold max-md:text-2xl">
                3.
              </span>
              Enter your Prompt
            </li>
          </ol>
        </div>
        <Image
          src={CatImg}
          alt="cat"
          className="rounded-md  max-md:w-[300px] "
        />
      </section>
    </>
  );
};

export default HowSection;

<section className="flex min-h-screen space-x-2 sm:flex-col md:justify-evenly">
  <div className="w-1/2 sm:w-full sm:mt-20 ">
    <h1 className="text-[70px] md:text-[40px] sm:text-[30px]  text-pop font-[1000]  ">
      How to generate AI images
    </h1>
    <ol className="flex flex-col space-y-4 text-2xl md:mt-10 sm:text-sm ">
      <li>
        <span className="mr-6 text-5xl font-bold max-md:text-2xl">1.</span>
        Login or Create your Account
      </li>
      <Button className=" w-fit"> Login Now</Button>
      <li>
        <span className="mr-6 text-5xl font-bold max-md:text-2xl">2.</span>
        Click Create Button at Top Right corner
      </li>
      <li>
        <span className="mr-6 text-5xl font-bold max-md:text-2xl">3.</span>
        Enter your Prompt
      </li>
    </ol>
  </div>
  <div className="flex justify-center ">
    <Image
      className="w-[400px] h-[500px] sm:w-[270px] sm:h-[400px] rounded-xl "
      src={CatImg}
      alt="cat"
    ></Image>
  </div>
</section>;
