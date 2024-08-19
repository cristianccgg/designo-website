import React, { useState, useEffect } from "react";

export const SampleDesign = ({ data }) => {
  const [designs, setDesigns] = useState(data);

  return (
    <div className="flex flex-col gap-[40px] w-[325px] xl:gap-[36px] xl:max-h-[1110px] xl:grid xl:grid-cols-3 sm:w-full mx-auto mt-[96px]">
      {designs.map((design, index) => (
        <div
          key={index}
          className="w-[327px] h-[478px] sm:h-[310px] xl:h-[478px] flex flex-col xl:flex sm:grid sm:grid-cols-2 sm:w-full justify-between rounded-xl overflow-hidden"
        >
          <img
            className="sm:h-[310px] sm:w-full object-cover xl:h-[320px]"
            src={design.image}
            alt="img"
          />
          <div className="bg-verylightpeach px-[29px] h-full flex flex-col items-center justify-center gap-[16px]">
            <h2 className="uppercase text-h3 tracking-h3 text-peach">
              {design.title}
            </h2>
            <p className="text-center text-body font-light">
              {design.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
