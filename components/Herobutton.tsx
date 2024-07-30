// src/components/Button.tsx

import { DM_Sans } from "next/font/google";
import React from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: "700",
});

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const Herobutton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <div className="flex justify-center items-center">
    <button
      onClick={onClick}
      className={`px-[35px] py-2 mt-8
        bg-red-500 text-neutral-50
        font-bold
        border-2 border-[#BF0000]
        rounded-3xl
        shadow-[3px_3px_1px_rgba(191,0,0)]
        transition-transform duration-150 ease-in-out
        transform active:translate-y-1 active:shadow-md
        focus:outline-none
        hover:bg-red-600
        whitespace-nowrap
        ${dmSans.className}`}
    >
      {children}
    </button>

    </div>
  );
};

export default Herobutton;
