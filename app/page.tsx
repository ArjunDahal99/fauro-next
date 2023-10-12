import { AccordionDemo } from "@/components/sections/AccordionSection";
import CreativeSection from "@/components/sections/CreativeSection";
import FindUs from "@/components/sections/FindUs";
import Footer from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import HowSection from "@/components/sections/HowSection";
import PricingSection from "@/components/sections/PriceingSection";
import ReviewSection from "@/components/sections/ReviewSection";
import React from "react";

const Page = () => {
  return (
    <>
      <main className="">
        <HeroSection />
        <CreativeSection />
        <HowSection />
        <PricingSection />
        <ReviewSection />
        <AccordionDemo />
        <FindUs />
        <Footer />
      </main>
    </>
  );
};

export default Page;
