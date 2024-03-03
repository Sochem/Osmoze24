"use client"
import Image from "next/image";
import bluecir from "../image/bluecir.png";
import Link from 'next/link';
import home2 from "../image/home2.png";
import ari from "../image/ari.jpg";
import Ozmo from "../image/Ozmo.png";
import irc from "../image/irc.png";
import text1 from "../image/text1.png";
import text3 from "../image/text3.png";
import lovin from "../image/lovin.jpg";
import Sponsors from "../image/Sponsors.png";
import ASL from "../image/ASL.jpg";
import home from "../image/home.png";
import magic from "../image/magic.png";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";


const Homepage = () => {

  return (
    <div >
      <section className="text-gray-400 body-font bg-cover min-h-screen grid place-item-center">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col relative">
          <Image
            className="w-220 h-220 absolute top-1300 z-10"
            src={home}
            width={600}
            height={600}
            alt="Picture of the author"
          />
          <Image
            className="animated rotate-animation  top-0 w-220 h-220 flex z-0"
            src={bluecir}
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>
        <div className="container ml-15 mr-15 mx-10 flex px-20 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <Image
              src={text1}
              width={900}
              height={900}
              alt="Picture of the author"
            />
            <Image
              src={Ozmo}
              width={800}
              height={800}
              alt="Picture of the author"
            />
            <div className="flex w-full md:justify-start justify-center mx-1 items-end">
              <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-flex text-white bg-indigo-500 border-1 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <Link href="/aboutUs">Explore</Link>
              </button>
            </div>
            <div className="flex lg:flex-row md:flex-col text-gray-300"></div>
          </div>
          <div className="lg:max-w-xlg mr-55 lg:w-full md:w-1/3 w-5/6 container mx-auto flex px-5 py-24 items-center justify-center flex-col relative">
            <Image
              className="w-520 h-520 absolute top-1300 z-0"
              src={home2}
              width={800}
              height={800}
              alt="Picture of the author"
            />
            <Image
              className="w-220 h-220 absolute top-40 z-10"
              src={magic}
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <Image
                  src={text3}
                  width={600}
                  height={360}
                  alt="Picture of the author"
                />
            <div className="flex text-gray-300"></div>
          </div>
        </div>
        <div className="container px-5 py-24 my-50 mx-auto">
          <div className="w-full flex flex-col mb-16 items-center text-center0">
          <Image
                  src={Sponsors}
                  width={400}
                  height={600}
                  alt="Picture of the author"
                />
          </div>
          <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
        <div class="rounded-lg h-84 overflow-hidden">
        <Image
                  src={irc}
                  width={600}
                  height={600}
                  alt="Picture of the author"
                />
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
      <div class="rounded-lg h-84 overflow-hidden">
        <Image
                  src={ASL}
                  width={600}
                  height={600}
                  alt="Picture of the author"
                />
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
      <div class="rounded-lg h-84 overflow-hidden">
        <Image
                  src={lovin}
                  width={600}
                  height={600}
                  alt="Picture of the author"
                />
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
      <div class="rounded-lg h-84 overflow-hidden">
        <Image
                  src={ari}
                  width={600}
                  height={600}
                  alt="Picture of the author"
                />
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
        {/*<div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={home2}
                  width={600}
                  height={360}
                  alt="Picture of the author"
                />
                <p class="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki  DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={home2}
                  width={600}
                  height={360}
                  alt="Picture of the author"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy +1 kinfolk. Single-origin coffee ennui
                  shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <Image
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={home2}
                  width={600}
                  height={360}
                  alt="Picture of the author"
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  HENRY LETHAM
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
  </div>*/}
        
      </section>
    </div>
  );
};

export default Homepage;

