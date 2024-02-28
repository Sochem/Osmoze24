"use client";
import React from "react";
import Osmoze from "../image/osmoze2.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <header className=" p-4 sticky text-[#8DD5FF] bg-[#09051B] bg-opacity-70 lg:h-[80px] w-full lg:flex lg:items-center font-serif shadow-md tracking-wide shadow-black/5">
        <div className="container mx-auto flex flex-wrap lg:justify-between pb-5 flex-col lg:flex-row items-center lg:pt-1">
          <ul className="flex lg:w-3/5 lg:justify-start flex-wrap items-center gap-x-5 text-base md:ml-auto lg:gap-x-[2rem] lg:text-xl">
            <li className="hover:text-[1.28rem] transition duration-300 ease-in-out transform hover:scale-105">
              <Link href="/aboutUs">About Us</Link>
            </li>
            <li className="hover:text-[1.28rem] transition duration-300 ease-in-out transform hover:scale-105">
              <Link href="/team">Team</Link>
            </li>
            <li className="hover:text-[1.28rem] transition duration-300 ease-in-out transform hover:scale-105">
              <Link href="/events">Events</Link>
            </li>
            <li className="hover:text-[1.28rem] transition duration-300 ease-in-out transform hover:scale-105">
              <Link href="/dashBoard">Dashboard</Link>
            </li>
            <li className="hover:text-[1.28rem] transition duration-300 ease-in-out transform hover:scale-105">
              <a href="https://www.instagram.com/sochem_iitbhu/">
                Announcement
              </a>
            </li>
          </ul>

          <div className="order-first lg:order-first lg:w-1/5 lg:flex lg:justify-start m-0 p-0">
            <Link href="/">
              <Image
                src={Osmoze}
                alt=""
                width={70}
                height={70}
                className="h-[70px] w-[70px] rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              />
            </Link>
          </div>

          <div className="lg:w-1/5 order-last lg:flex lg:justify-end m-0 p-0">
            <button className="bg-[#8DD5FF] text-sm lg:text-base mt-2 rounded-md lg:h-[30px] h-[25px] lg:w-[70px] w-[50px] text-black hover:text-[1.05rem] hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
              <Link href="/signUp">Login</Link>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
