import React from "react";

const NavItem = ({ children, className }) => {
  return <div className={`nav-item ${className}`}>{children}</div>;
};

export default NavItem;
