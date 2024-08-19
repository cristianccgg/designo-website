import React, { useState } from "react";
import logoDark from "/public/images/shared/desktop/logo-dark.png";
import hambIcon from "/public/images/shared/mobile/icon-hamburger.svg";
import iconClose from "/public/images/shared/mobile/icon-close.svg";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="flex justify-between items-center sm:mb-[64px] mt-[35px] sm:mt-0 mx-auto mb-[35px] xl:max-w-[1112px] lg:max-w-[895px] sm:max-w-[689px] w-full px-[16px] z-20">
      <Link
        to={"/"}
        className="flex items-center h-[24px] z-30"
        style={{ width: "auto" }}
      >
        <img className="h-[24px] cursor-pointer" src={logoDark} alt="logo" />
      </Link>
      <div className="hidden sm:flex gap-[42px] text-[14px] tracking-[2px]">
        <Link to={"/about"}>
          <NavItem>OUR COMPANY</NavItem>
        </Link>
        <Link to={"/locations"}>
          <NavItem>LOCATIONS</NavItem>
        </Link>
        <Link to={"/contact"}>
          <NavItem>CONTACT</NavItem>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden z-20">
        <img
          className="w-[24px] h-[20px]"
          onClick={toggleMenu}
          src={!openMenu ? hambIcon : iconClose}
          alt="hamb-icon"
        />
        {openMenu && (
          <div className="absolute top-[90px] inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50 h-[235px]">
            <div className="flex flex-col items-start gap-[32px] text-[24px] text-white tracking-h2 h-[235px] justify-center w-full bg-black p-[24px]">
              <Link to={"/about"}>
                <NavItem>OUR COMPANY</NavItem>
              </Link>
              <Link to={"/locations"}>
                <NavItem>LOCATIONS</NavItem>
              </Link>
              <Link to={"/contact"}>
                <NavItem>CONTACT</NavItem>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
