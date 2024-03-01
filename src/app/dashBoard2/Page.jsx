"use client";
import home from "../image/home.png";
import React from "react";
import Image from "next/image";
import Osmoze from "../image/osmoze2.png";
import Link from "next/link";

const Page = () => {
  return (
    <section className="sticky text-[#8DD5FF] bg-[#07000B] bg-opacity-40 lg:h-[100vh] lg:flex lg:flex:col shadow-md tracking-wide shadow-black/5 w-1/5">
      <div className="container mx-auto flex lg:gap-y-10 flex-wrap pb-5 lg:flex-col">
        <div className="order-first mx-auto lg:flex p-2">
          <Link href="/">
            <Image
              src={Osmoze}
              alt=""
              width={120}
              height={120}
              className="h-[120px] w-[120px] mt-10"
            />
          </Link>
        </div>
        <ul className="flex lg:flex-col flex-wrap lg:gap-y-8 text-base lg:text-[1.4rem] text-center">
          <li className="hover:underline hover:text-[1.43rem]">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline hover:text-[1.43rem]">
            <Link href="/dashBoard">Dashboard</Link>
          </li>
        </ul>

        <div className="flex lg:justify-center fixed bottom-0 !mx-8">
          <Image
            src={home}
            width={150}
            height={50}
            alt=""
            className="h-[50px] w-[150px] mb-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
