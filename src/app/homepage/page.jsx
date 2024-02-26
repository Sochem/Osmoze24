
import Image from "next/image";
import home from '../image/home.png';
import home2 from '../image/home2.png';
import bg_img from '../image/bg_img.jpg';
import React from "react";

const homepage = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font bg-[url(/bg_img.jpg)] bg-cover min-h-screen grid place-item-center">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            src={home2}
            width={800}
            height={800}
            alt="Picture of the author"
          />
        </div>
        <div className="container ml-30 mr-30 flex px-20 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h5 className="title-font sm:text-xl text-xl mb-4 font-small text-white">
              Welcome to Annual
            </h5>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Chemical Extravaganza
            </h1>
            <h1 className="title-font sm:text-7xl text-6xl mb-4 font-xl text-blue-500">
              Osmoze&apos;<span className="text-sky-600">24</span>
            </h1>
            <div className="flex w-full md:justify-start justify-center items-end">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Explore
              </button>
            </div>
            <div className="flex lg:flex-row md:flex-col text-gray-300"></div>
          </div>
          <div className="lg:max-w-lg mr-55 lg:w-full md:w-1/3 w-5/6">
            <Image
              src={home2}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Knausgaard typewriter readymade marfa
            </h1>
            <p className="mb-8 leading-relaxed">
              Kickstarter biodiesel roof party wayfarers cold-pressed. Palo
              santo live-edge tumeric scenester copper mug flexitarian. Prism
              vice offal plaid everyday carry. Gluten-free chia VHS squid
              listicle artisan.
            </p>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Neutra shabby chic ramps, viral fixie.
            </p>
            <div className="flex text-gray-300"></div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-l title-font:Modern Antiqua mb-4 text-white">
              Meet our Sponsors
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
              <Image
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={home2}
              width={600}
              height={360}
              alt="Picture of the author"
            />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
              <Image
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={home2}
              width={600}
              height={360}
              alt="Picture of the author"
            />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
              <Image
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={home2}
              width={600}
              height={360}
              alt="Picture of the author"
            />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    The 400 Blows
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <Image
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={home2}
                  width={600}
                  height={360}
                  alt="Picture of the author"
                />
                <p class="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
                <p class="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
              <Image
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={home2}
                  width={600}
                  height={360}
                  alt="Picture of the author"
                />
                <p class="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy +1 kinfolk. Single-origin coffee ennui
                  shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>
                <p class="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 p-4">
              <div class="h-full text-center">
              <Image
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={home2}
                  width={600}
                  height={360}
                  alt="Picture of the author"
                />
                <p class="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  HENRY LETHAM
                </h2>
                <p class="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-l title-font:Modern Antiqua mb-4 text-white">
                About Sochem!
              </h1>
            </div>
            <div class="rounded-lg h-64 overflow-hidden">
              <Image
                src={home2}
                width={1200}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-white text-lg">
                    Phoebe Caulfield
                  </h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base text-gray-400">
                    Raclette knausgaard hella meggs normcore williamsburg enamel
                    pin sartorial venmo tbh hot chicken gentrify portland.
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">
                  Meggings portland fingerstache lyft, post-ironic fixie man bun
                  banh mi umami everyday carry hexagon locavore direct trade art
                  party. Locavore small batch listicle gastropub farm-to-table
                  lumbersexual salvia messenger bag. Coloring book flannel
                  truffaut craft beer drinking vinegar sartorial, disrupt
                  fashion axe normcore meh butcher. Portland scenester
                  vexillologist forage post-ironic asymmetrical, chartreuse
                  disrupt butcher paleo intelligentsia pabst before they sold
                  out four loko. 3 wolf moon brooklyn.
                </p>
                <a class="text-indigo-400 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default homepage;
