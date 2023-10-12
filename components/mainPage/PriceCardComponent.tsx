import { PriceType } from "@/config/Price";
import { Button } from "../ui/button";
import { CheckCircle2Icon } from "lucide-react";

const PriceCardComponent = ({ data }: PriceType) => {
  return (
    <>
      <div className="h-[550px]  mt-10 w-[400px]  max-sm:w-[300px]  bg-gradient-to-b  dark:from-black dark:via-stone-900 dark:to-violet-900 rounded-lg shadow-2xl ">
        <h1 className="text-3xl font-bold text-center "> {data.title}</h1>
        <div className="flex flex-col h-full rounded-lg FeatureList">
          <div className="flex flex-col h-[70%] justify-evenly ">
            {(data?.features).map((feature) => (
              <h1 key={feature} className="flex justify-evenly">
                {feature}
                <CheckCircle2Icon className="ml-2 text-green-400 " />
              </h1>
            ))}
          </div>

          <div className="flex flex-col items-center mb-6 Price">
            <h1 className="text-6xl font-bold ">{data.price}</h1>
            <Button className="px-10 mt-5   text-black font-bold bg-white shadow-xl hover:bg-gradient-to-r hover:text-white from-[#4158d0] via-[#c850c0] to-[#ffcc70]">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceCardComponent;
