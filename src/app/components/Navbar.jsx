"use client"
import React from 'react';
import Osmoze from '../image/osmoze.png';
import Link from 'next/link';

import Image from 'next/image';

const Navbar = () => {
  return (
    <>
    <header className="text-[#8DD5FF]  bg-[#07000B] lg:h-[120px] w-full lg:flex lg:align-middle font-serif">
  <div className="container mx-auto flex flex-wrap lg:justify-between  pb-5 flex-col lg:flex-row gap-between  items-center lg:pt-1">
    <ul className="flex lg:w-4/5 lg:justify-start flex-wrap items-center gap-x-5 text-base md:ml-auto lg:gap-x-[4rem]  lg:text-2xl">
      <li className=""><Link href="/aboutUs">About Us</Link></li>
      <li className=""><Link href="/team">Team</Link></li>
      <li className=""><Link href="/events">Events</Link></li>
      <li className=""><Link href="/announcement">Announcement</Link></li>
      <li className=""><Link href="/dashBoard">Dashboard</Link></li>
    </ul>
    <div className=" order-first lg:order-none lg:w-1/5   lg:flex lg:justify-end m-0 p-0">
    <Link href="/">
        
    <Image src={Osmoze} alt="" width="" height="" className='h-[110px] w-[140px]'/>
    </Link>   
      
    </div>
    
  </div>
</header>
    </>
  )
}

export default Navbar
