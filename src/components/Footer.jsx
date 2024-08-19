import React from "react";
import { Link } from "react-router-dom";
import logo from "/public/images/shared/desktop/logo-light.png";
import facebook from "/public/images/shared/desktop/icon-facebook.svg";
import instagram from "/public/images/shared/desktop/icon-instagram.svg";
import pinterest from "/public/images/shared/desktop/icon-pinterest.svg";
import twitter from "/public/images/shared/desktop/icon-twitter.svg";
import youtube from "/public/images/shared/desktop/icon-youtube.svg";
import { LetsTalk } from "/src/components/LetsTalk.jsx";

export const Footer = () => {
  return (
    <div className="bg-black  w-full mt-[211px] sm:pt-[223px] pt-[253px] px-[24px] pb-[64px] flex flex-col items-center relative">
      <div className="absolute sm:-top-[452px] -top-1/2 translate-y-1/2 xl:-top-[250px]">
        <LetsTalk />
      </div>
      <Link to={"/"}>
        <img className="w-[202px] sm:hidden" src={logo} alt="logo" />
      </Link>
      <hr className="w-80 border border-DarkGrey my-[32px] sm:hidden" />
      <div className="flex flex-col items-center gap-[40px] sm:gap-[20px]  text-center">
        <div className="text-white sm:mt-[0px] sm:flex-row flex flex-col gap-[32px] items-center text-[14px] tracking-h3 leading-h3">
          <Link to={"/"}>
            <img className="w-[202px] hidden sm:block" src={logo} alt="logo" />
          </Link>
          <Link to={"/about"}>
            <h2>OUR COMPANY</h2>
          </Link>
          <Link to={"/locations"}>
            <h2>LOCATIONS</h2>
          </Link>
          <Link to={"/contact"}>
            <h2>CONTACT</h2>
          </Link>
        </div>
        <hr className="w-full border border-DarkGrey my-[31px]" />
        <div className="flex flex-col gap-[40px] sm:flex-row">
          <div className="text-lightGrey leading-body font-extralight">
            <p className="font-medium">Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className="text-lightGrey leading-body font-extralight">
            <p className="font-medium">Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <div className="flex gap-[16px]">
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};
