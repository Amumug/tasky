import React from "react";
import { Kumbh_Sans, Poppins, Inter } from "next/font/google";
import Image from "next/image";

const kumbh = Kumbh_Sans({
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
          <span className="relative z-10">Amplify</span>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-1 mt-2 z-0 w-[150px] h-[50px] bg-green-300" />
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
                style={{ marginBottom: "-12px" }}
              />
            </span>
          </span>
        </h1>
      </div>
    </>
  );
};

export default Hero;
