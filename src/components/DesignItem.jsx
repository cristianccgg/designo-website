import React from "react";
import { Link } from "react-router-dom";

export const DesignItem = ({ title, link, bgClass, bgCover }) => {
  return (
    <div
      className={`relative rounded-md text-white bg-no-repeat ${bgCover} h-[250px] flex flex-col items-center justify-center ${bgClass}`}
    >
      <div className="bg-black absolute inset-0 bg-opacity-50 rounded-md"></div>
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-[28px] tracking-[1.4px]">{title}</h1>
        <Link to={link} className="text-h3 tracking-h3 leading-h3 font-light">
          VIEW PROJECTS
        </Link>
      </div>
    </div>
  );
};
