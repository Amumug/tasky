import React from "react";
import { Kumbh_Sans, Poppins, Inter } from "next/font/google";
import Image from "next/image";
import Herobutton from "./Herobutton";
import Socialproof from "./Socialproof";

const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  weight: "variable",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
});

const Hero = () => {
  return (
    <>
      <div className="relative">
        <h1
          className={`${kumbh.className} mt-32 leading-[68px] text-center font-bold text-neutral-950 text-4xl`}
        >
          Simplify Your Day,{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#E0F4E8]">Amplify</span>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-1 mt-2 z-0 w-[150px] h-[50px] bg-green-400" />
          </span>{" "}
          Your
          <br />
          <span className="relative inline-block">
            Productivity
            <span className="absolute inset-0 flex justify-center items-center">
              <Image
                src={"Vector.svg"}
                alt=""
                width={300}
                height={100}
                style={{ marginBottom: "-10px" }}
              />
            </span>
          </span>
        </h1>
        <span className="absolute inset-0 left-32 -top-[75px] animate-move-image">
          <Image
            src={"Arrow-Pointy-Back-Short--Streamline-Beveled-Scribbles.svg"}
            alt=""
            width={111}
            height={111}
          />
        </span>
        <span className="absolute inset-0 left-auto right-32 -top-11">
          <Image
            src={"Highlight-Quote-Right--Streamline-Beveled-Scribbles.svg"}
            alt=""
            width={84}
            height={84}
          />
        </span>
        <p
          className={`text-neutral-500 text-center mt-2 text-base font-medium ${inter.className} leading-[25px]`}
        >
          Say goodbye to scattered notes and missed deadlines. Tasky brings all
          your tasks
          <br /> into one streamlined platform.
        </p>
        <Herobutton >Get Started!</Herobutton>
        <span className="absolute inset-0 left-[390px] top-[178px] pointer-events-none">
          <Image
            src={"Crown--Streamline-Beveled-Scribbles.svg"}
            alt=""
            width={80}
            height={80}
          />
        </span>
        <Socialproof/>
      </div>
    </>
  );
};

export default Hero;
