import React, { Children } from "react";
// import { Button } from "./ui/button";
import Navbutton from "./Navbutton";
import { Poppins, Inria_Sans, DM_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
const inria = Inria_Sans({
  subsets: ["latin"],
  weight: "700",
});

const Navbar = () => {
  return (
    <>
      <nav className="justify-between items-center inline-flex gap-72">
        <h1 className={`text-red-700 text-2xl font-bold ${inria.className}`}>
          Tasky
        </h1>
        <ul className="inline-flex justify-between items-center gap-9">
          <li className="text-neutral-950 text-base font-semibold font-poppins cursor-pointer">
            Home
          </li>
          <li
            className={`text-neutral-500 hover:text-neutral-950 hover:font-semibold text-base font-medium ${poppins.className} cursor-pointer whitespace-nowrap`}
          >
            About us
          </li>
          <li
            className={`text-neutral-500 hover:text-neutral-950 hover:font-semibold text-base font-medium ${poppins.className} cursor-pointer`}
          >
            Features
          </li>
          <li
            className={`text-neutral-500 hover:text-neutral-950 hover:font-semibold text-base font-medium ${poppins.className} cursor-pointer`}
          >
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
