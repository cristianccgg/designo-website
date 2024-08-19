import React from "react";
import { Link } from "react-router-dom";
import WhiteButton from "/src/components/WhiteButton.jsx";

export const LetsTalk = () => {
  return (
    <div className="bg-peach sm:w-[690px] lg:w-[850px] xl:flex-row xl:w-[1111px] xl:h-[292px] xl:px-[96px] xl:justify-between w-[327px] mx-auto rounded-xl flex flex-col items-center text-white py-[64px] px-[24px]">
      <div className="xl:w-[459px] xl:space-y-[26px] flex flex-col items-center xl:items-start">
        <h1 className="sm:w-[335px] sm:text-[40px] xl:w-[268px] xl:tracking-normal  xl:h-[98px]  xl:text-start text-[32px] leading-h2 tracking-h2 text-center font-medium">
          Let’s talk about your project
        </h1>
        <p className="sm:w-[573px] xl:text-start text-center text-body leading-body mb-[32px] mt-[6px]">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Link to={"/contact"}>
        <WhiteButton>GET IN TOUCH</WhiteButton>
      </Link>
    </div>
  );
};
