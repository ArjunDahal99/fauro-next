import React from "react";

import { PriceData } from "@/config/Price";
import PriceCardComponent from "../mainPage/PriceCardComponent";

const PricingSection = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen ">
        <h1 className="mt-10 space-y-8 text-3xl font-bold text-center text-purple-500 md:text-6xl ">
          Pricing and Usage
        </h1>
        <div className="flex flex-wrap w-full md:mt-20 justify-evenly">
          {PriceData.map((e) => (
            <PriceCardComponent key={e.id} data={e} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PricingSection;
