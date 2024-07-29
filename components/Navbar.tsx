import React, { Children } from "react";
// import { Button } from "./ui/button";
import Navbutton from "./Navbutton";

const Navbar = () => {
  return (
    <>
      <nav className="justify-between items-center inline-flex gap-72">
        <h1 className="text-red-700 text-2xl font-bold font-inrea">Tasky</h1>
        <ul className="inline-flex justify-between items-center gap-9">
          <li className="text-[#020014] text-base font-semibold font-inter cursor-pointer">
            Home
          </li>
          <li className="text-[#5b5966] text-base font-medium font-inter cursor-pointer whitespace-nowrap">
            About us
          </li>
          <li className="text-[#5b5966] text-base font-medium font-inter cursor-pointer">
            Features
          </li>
          <li className="text-[#5b5966] text-base font-medium font-inter cursor-pointer">
            Contact
          </li>
          <li className="ml-48 ">
            <Navbutton>Join Free</Navbutton>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
