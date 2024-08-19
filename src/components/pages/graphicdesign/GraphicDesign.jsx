import React from "react";
import { Hero } from "../../Hero";
import json from "/public/portfolio.json";
import { SampleDesign } from "../../SampleDesign";
import { DesignItem } from "../../DesignItem";

export const GraphicDesign = () => {
  return (
    <div className="mb-[220px] xl:mb-[100px] flex flex-col items-center sm:w-[689px] lg:w-[850px] xl:w-[1112px]">
      <Hero>
        <h1 className="font-medium text-h2 sm:text-[48px]">Graphic Design</h1>
        <h2 className="font-light text-body">
          We deliver eye-catching branding materials that are{" "}
          <br className="hidden sm:block" /> tailored to meet your business
          objectives.
        </h2>
      </Hero>
      <SampleDesign data={json.mobile.graphicdesign} />
      <div className="h-[524px] w-full  mx-auto mt-[120px] flex flex-col justify-between">
        <DesignItem
          title="APP DESIGN"
          link="/appdesign"
          bgClass="bg-appdesign-mobile sm:bg-appdesign-desktop"
          bgCover="bg-cover"
        />
        <DesignItem
          title="WEB DESIGN"
          link="/webdesign"
          bgClass="bg-webdesign-mobile sm:bg-webdesign-desktop sm:bg-bottom"
          bgCover="bg-cover"
        />
      </div>
    </div>
  );
};
