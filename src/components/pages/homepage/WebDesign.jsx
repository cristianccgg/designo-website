import React from "react";
import { DesignItem } from "../../DesignItem";

export const WebDesign = () => {
  return (
    <div className="h-[798px] w-[327px] sm:w-[689px] lg:w-[850px] lg:h-[640px] xl:w-[1112px] xl:flex-row mx-auto mt-[120px] gap-[24px] flex flex-col justify-between">
      <div className="xl:w-[541px] lg:h-[640px] lg:w-[850px]">
        <DesignItem
          title="WEB DESIGN"
          link="/webdesign"
          bgClass="bg-webdesign-mobile lg:bg-webdesign-desktop xl:h-[640px]"
          bgCover="bg-cover"
        />
      </div>
      <div className="space-y-[24px] xl:w-[541px] xl:h-full lg:w-[850px]">
        <DesignItem
          title="APP DESIGN"
          link="/appdesign"
          bgClass="bg-appdesign-mobile lg:bg-appdesign-desktop xl:h-[308px]"
          bgCover="bg-cover "
        />
        <DesignItem
          title="GRAPHIC DESIGN"
          link="/graphicdesign"
          bgClass="bg-graphicdesing-mobile"
          bgCover="bg-contain lg:bg-cover lg:bg-graphicdesing-desktop xl:h-[308px]"
        />
      </div>
    </div>
  );
};
