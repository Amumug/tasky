import { Inter } from 'next/font/google';
import Image from 'next/image';
import React from 'react'


const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
});

const Socialproof = () => {
  return (
    <>
    <div className='flex justify-center items-center mt-7'>
      <h1 className={`${inter.className} text-neutral-950 text-lg font-medium pr-4`}>Trusted by</h1>
      <div className='flex'>
        <Image
        src={'/avatar1.png'}
        alt=''
        width={40}
        height={40}
        className='-mr-4'
        />
        <Image
        src={'/avatar2.png'}
        alt=''
        width={40}
        height={40}
        className='-mr-4'
        />
        <Image
        src={'/avatar3.png'}
        alt=''
        width={40}
        height={40}
        className='-mr-4'
        />
        <Image
        src={'/avatar1.png'}
        alt=''
        width={40}
        height={40}
        />
      </div>
      <h1 className={`${inter.className} text-neutral-950 text-lg font-medium pl-4`}>28+ companies worldwide</h1>
    </div>
    </>
  )
}

export default Socialproof
