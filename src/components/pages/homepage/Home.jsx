import React from "react";
import WhiteButton from "/src/components/WhiteButton.jsx";
import PatternCircle from "/public/images/home/desktop/bg-pattern-hero-home.svg";
import HeroPhone from "/public/images/home/desktop/image-hero-phone.png";
import { WebDesign } from "./WebDesign";
import { Illustrations } from "./Illustrations.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="sm:max-w-[689px]  lg:flex-row xl:max-w-[1110px] lg:max-w-[850px]  mx-auto sm:rounded-xl h-[843px] lg:h-[640px] w-full bg-peach flex flex-col  items-center text-center relative overflow-hidden">
        <img
          className="absolute sm:scale-100 lg:right-0  top-1/2 -translate-y-1/2 -right-1/4 scale-150"
          src={PatternCircle}
          alt="pattern"
        />
        <div className="text-white  lg:w-[340px] lg:h-[350px] lg:ms-[95px]  lg:mt-0 lg:items-start lg:text-start px-[24px] mt-[80px] flex flex-col items-center gap-[14px]">
          <h1 className="sm:text-[48px] sm:w-[573px] lg:w-[350px] lg:text-[35px] lg:leading-[48px] lg:h-[165px] lg:mb-[11px] leading-h1 text-[32px] xl:w-[573px] xl:text-[48px] font-medium">
            Award-winning custom designs and digital branding solutions
          </h1>
          <h2 className="lg:w-[350px] xl:w-[445px] sm:w-[445px] sm:text-[16px] text-[15px] leading-body font-light">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </h2>
          <Link className="z-20 sm:mt-[19px] lg:mt-[40px]" to={"/about"}>
            <WhiteButton>LEARN MORE</WhiteButton>
          </Link>
        </div>
        <div className="h-[573px] w-[284px] absolute lg:right-[96px] lg:-bottom-[294px] -bottom-1/2 -translate-y-52">
          <img
            className="object-cover h-full w-full scale-150"
            src={HeroPhone}
            alt="phone-img"
          />
        </div>
      </div>
      <WebDesign />
      <Illustrations />
    </div>
  );
};
