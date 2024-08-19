import React from "react";

const WhiteButton = ({ children }) => {
  return (
    <button className="bg-white rounded-md text-nowrap  px-[24px] py-[18px] text-black text-body w-[152px]">
      {children}
    </button>
  );
};

export default WhiteButton;
