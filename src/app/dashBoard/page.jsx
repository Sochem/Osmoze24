"use client";

import React from "react";
import Page from "../dashBoard2/Page.jsx";

import Link from "next/link";
import Image from "next/image";
import Image1 from "../image/image1.png";
import '../styles/globals.css'
import Image2 from "../image/image2.png";
import Event from "./Event.jsx";

const page = () => {
  return (
    <>
      <div className=" font-serif flex m-0">
        <Page />

        <section className="w-4/5 h-[100vh] bg-[#86B6F6] flex flex-col">
          <div className="p-6 ">
            <div className="flex justify-between lg:flex-col">
              <h1 className="ml-5 text-5xl">Dashboard</h1>
              <div className="m-auto mt-5">
                <Image
                  src={Image1}
                  alt=""
                  height=""
                  width=""
                  className=" h-32 w-32 "
                />
                <p className="text-center text-lg">Name</p>
              </div>
            </div>
            <div className="p-2 ml-10 mr-10 text-xl bg-[#07000B] text-[#BDE8F6] mt-10">
              <h2>Registered event</h2>
            </div>
            
            {/* <div className=" mt-10 mb-10 ml-12  gap-x-20 flex overflow-x-scroll pb-10 hide-scroll-bar">
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
            </div> */}


              {/* horizontal scrolling */}

              


      <div
        class=" flex overflow-x-scroll pb-0 hide-scroll-bar mt-14 mb-5  w-4/5 m-auto"
      >
        <div
          class="flex flex-nowrap lg:ml-16 md:ml-20 ml-10 "
        >
          <div class="inline-block px-3">
            <div
              class=" max-w-xs overflow-hidden lg:rounded-xl shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ><Event/></div>
          </div>
          <div class="inline-block px-3">
            <div
              class=" max-w-xs overflow-hidden lg:rounded-xl shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ><Event/></div>
          </div>
          <div class="inline-block px-3">
            <div
              class=" max-w-xs overflow-hidden lg:rounded-xl shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ><Event/></div>
          </div>
          <div class="inline-block px-3">
            <div
              class=" max-w-xs overflow-hidden lg:rounded-xl shadow-xl bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ><Event/></div>
          </div>
          
          
          
          
        </div>
      </div>
</div>

            <div className=" ml-10 lg:mr-10 ">
              {/* <p className="text-lg">Payments are not refundable</p> */}
              <hr className="border border-black " />
            </div>
            <div className="text-[1.25rem] flex justify-end lg:mt-2 lg:mr-10 ">
              <Link href="/">
                <p className=" ">Home</p>
              </Link>
            </div>
          
        </section>
      </div>
    </>
  );
};

export default page;
