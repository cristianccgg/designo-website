import React from "react";
import friendly from "/images/home/desktop/illustration-friendly.svg";
import passionate from "/images/home/desktop/illustration-passionate.svg";
import resourceful from "/images/home/desktop/illustration-resourceful.svg";
import pattern from "/images/shared/desktop/bg-pattern-small-circle.svg";

export const Illustrations = () => {
  return (
    <div className="mt-[120px] sm:pb-[820px] sm:w-[690px] sm:h-[670px] h-[1396px] w-[327px]  lg:mt-[240px] xl:pb-[120px]  xl:mt-[240px] xl:w-[1111px] xl:h-[350px] lg:w-[850px] xl:flex-row  mx-auto flex flex-col items-center gap-[80px]">
      <div className="flex flex-col sm:flex-row xl:flex-col items-center gap-[32px]">
        <img
          className="relative w-[188px] h-[162px]"
          src={pattern}
          alt="patter-img"
        />
        <img
          className="w-[188px] h-[162px] absolute"
          src={passionate}
          alt="passionate-img"
        />

        <div className="flex flex-col items-center sm:items-start xl:items-center gap-[24px]">
          <h2 className="text-h3 leading-h3 tracking-h3 ">PASSIONATE</h2>
          <p className="text-body leading-body text-center sm:text-start xl:text-center">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row xl:flex-col items-center gap-[32px]">
        <img
          className="relative w-[188px] h-[162px]"
          src={pattern}
          alt="patter-img"
        />
        <img
          className="w-[188px] h-[162px] absolute"
          src={resourceful}
          alt="passionate-img"
        />
        <div className="flex flex-col items-center sm:items-start xl:items-center gap-[24px]">
          <h2 className="text-h3 leading-h3 tracking-h3">Resourceful</h2>
          <p className="text-body leading-body text-center sm:text-start xl:text-center">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row xl:flex-col items-center gap-[32px]">
        <img
          className="relative w-[188px] h-[162px]"
          src={pattern}
          alt="patter-img"
        />
        <img
          className="w-[188px] h-[162px] absolute"
          src={friendly}
          alt="passionate-img"
        />
        <div className="flex flex-col items-center sm:items-start xl:items-center gap-[24px]">
          <h2 className="text-h3 leading-h3 tracking-h3">Friendly</h2>
          <p className="text-body leading-body text-center sm:text-start xl:text-center">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </div>
  );
};
