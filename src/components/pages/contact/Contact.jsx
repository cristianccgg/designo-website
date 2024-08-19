import React from "react";
import WhiteButton from "/src/components/WhiteButton.jsx";
import { Countries } from "../../Countries";

export const Contact = () => {
  return (
    <div className="xl:-mb-[100px]">
      <div className="bg-peach sm:w-[689px] lg:w-[850px] xl:w-[1112px] sm:px-[58px] sm:mx-auto sm:rounded-xl xl:flex-row  flex flex-col gap-[48px] items-center justify-center py-[72px] px-[24px] text-white font-light">
        <div className="flex flex-col gap-[24px] items-center sm:items-start ">
          <h1 className="text-[32px] font-medium sm:text-[48px]">Contact Us</h1>
          <p className="text-center leading-[25px] sm:text-start xl:w-[445px] ">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <form
          className="flex flex-col gap-[25px] items-center w-full xl:w-[380px]"
          action=""
        >
          <input
            className="bg-transparent text-white placeholder:text-white border-b w-full border-white p-[11px]"
            type="text"
            placeholder="Name"
          />
          <input
            className="bg-transparent text-white placeholder:text-white border-b w-full border-white p-[11px]"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="bg-transparent text-white placeholder:text-white border-b w-full border-white p-[11px]"
            type="text"
            placeholder="Phone"
          />
          <textarea
            className="bg-transparent text-white placeholder:text-white border-b w-full border-white p-[11px] mb-[15px] h-[96px]"
            name=""
            id=""
            placeholder="Your Message"
          ></textarea>
          <div className="sm:self-end">
            <WhiteButton>SUBMIT</WhiteButton>
          </div>
        </form>
      </div>
      <Countries />
    </div>
  );
};
