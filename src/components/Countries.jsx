import React from "react";
import { Link } from "react-router-dom";
import countriesJson from "/public/countries.json";
import pattern from "/images/shared/desktop/bg-pattern-small-circle.svg";

export const Countries = () => {
  return (
    <div className="flex flex-col gap-[48px] py-[120px] xl:flex-row xl:w-[1110px] xl:justify-between xl:px-14">
      {countriesJson.map((country, index) => (
        <div className="flex flex-col items-center" key={index}>
          <img
            className="relative mb-[48px]"
            src={country.image}
            alt={country.name}
          />
          <img className="absolute" src={pattern} alt="" />
          <h2 className="text-[20px] font-medium text-center mb-[32px]">
            {country.name}
          </h2>
          <Link to={`/locations`}>
            <button className="bg-peach w-[152px] h-[56px] rounded-md text-center flex items-center justify-center">
              {country.button}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};
