// src/components/Button.tsx

import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const Navbutton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick} 
      className="
        px-[26px] py-2
        bg-[#f26969] text-neutral-900
        font-bold
        border-2 border-[#020014]
        rounded-3xl
        shadow-[3px_3px_1px_rgba(0,0,0)]
        transition-transform duration-150 ease-in-out
        transform active:translate-y-1 active:shadow-md
        focus:outline-none
        hover:bg-[#e35d5d]
        whitespace-nowrap
      "
    >
      {children}
    </button>
  );
};

export default Navbutton;
