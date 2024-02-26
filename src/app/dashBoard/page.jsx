"use client";

import React from "react";
import Page from "../dashBoard2/Page.jsx";

import Link from "next/link";
import Image from "next/image";
import Image1 from "../image/image1.png";
import Image2 from "../image/image2.png";
import Event from "./Event.jsx";

const page = () => {
  return (
    <>
      <div className=" font-serif flex m-0">
        <Page />

        <section className="w-4/5 h-[100vh] bg-[#86B6F6] flex flex-col">
          <div className="p-6 ">
            <div className="flex justify-between">
              <h1 className="ml-5 text-5xl">Dashboard</h1>
              <div className="">
                <Image
                  src={Image1}
                  alt=""
                  height=""
                  width=""
                  className=" h-28 w-28 "
                />
                <p className="text-center text-lg">Name</p>
              </div>
            </div>
            <div className="p-2 ml-10 mr-10 text-xl bg-[#07000B] text-[#BDE8F6] mt-5">
              <h2>Registered event</h2>
            </div>
            <div className="ml-10 p-2 mr-10 pt-4  bg-[#8DD5FF] text-black text-xl">
              Events
            </div>
            <div className="p-2 ml-10 mr-10 text-xl bg-[#07000B] text-[#BDE8F6]">
              <h2>Not Registered for any event!</h2>
            </div>
            <div className=" mt-10 mb-10 ml-12 flex gap-x-20">
              <Event />
              <Event />
              <Event />
            </div>
            <div className=" ml-10">
              <p className="text-lg">Payments are not refundable</p>
              <hr className="border border-black " />
            </div>
            <div className="text-[1.3rem] flex justify-end mr-10 ">
              <Link href="/">
                <p className="absolute bottom-2 ">Home</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
