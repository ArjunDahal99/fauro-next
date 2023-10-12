import React from "react";
import ReviewCard from "../mainPage/ReviewCard";
import { Review } from "@/config/Review";

const ReviewSection = () => {
  return (
    <>
      <section className="flex flex-col items-center min-h-screen mt-20 ">
        <h1 className="text-6xl text-center"> Reviews & Rating</h1>
        <div className="flex flex-wrap w-full mt-20 justify-evenly">
          {Review.map((e) => (
            <ReviewCard data={e} key={e.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ReviewSection;
