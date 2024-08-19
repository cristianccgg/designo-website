import React from "react";
import patternHero from "/public/images/shared/desktop/bg-pattern-small-circle.svg";

export const Hero = ({ children }) => {
  return (
    <div className="relative w-full overflow-hidden sm:rounded-xl">
      <div className="bg-peach  text-center px-[24px] h-[320px]  flex flex-col items-center justify-center gap-[24px] text-white">
        {children}
      </div>
      <img
        className="absolute top-1/2 -translate-y-1/2 left-32 scale-150"
        src={patternHero}
        alt="patter"
      />
    </div>
  );
};
