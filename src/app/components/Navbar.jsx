"use client";
import React from "react";
import Osmoze from "../image/osmoze.png";
import Link from "next/link";
import signIn from "../../../src/app/signIn/page.jsx";
import { useEffect } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
const Navbar = () => {
  // document.addEventListener("DOMContentLoaded", function () {
  //   function updateUI() {
  //     var authButton = document.getElementById("authButton");
  //     var isLoggedIn = Cookies.get('User')

  //     if (!isLoggedIn) {
  //       authButton.setAttribute('value', 'Login');

  //     } else {
  //       authButton.setAttribute('value', 'Logout');
  //     }
  //   }
  //   document
  //     .getElementById("authButton")
  //     .addEventListener("click", function () {
  //       var user = Cookies.get('User');

  //       if (user) {
  //         Cookies.remove('User')
  //         console.log("calledif")
  //       } else {
  //         console.log("calledelse")
  //         // Cookie.set('User', "true", 7);
  //       }
  //       updateUI();
  //     });
  //   updateUI();
  // });
  // useEffect(() => {
  //   // Ensure code only runs on the client-side
  //   if (typeof document !== "undefined" && typeof Cookies !== "undefined") {
  //     function updateUI() {
  //       var authButton = document.getElementById("authButton");
  //       var isLoggedIn = Cookies.get("User");
  //       if (!isLoggedIn) {
  //         authButton.innerText = "Login";
  //       } else {
  //         authButton.innerText = "Logout";
  //       }
  //     }

  //     // Run updateUI function when the DOM content is loaded
  //     updateUI();
  //   }
  // }, []);
  const isLoggedIn = Cookies.get("User");
  const handleLogOut = (e) => {
    e.preventDefault();
    document.cookie = "User=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
  };
  return (
    <>
      <header className="sticky text-[#8DD5FF]  bg-[#09051B] lg:h-[80px] w-full lg:flex lg:align-middle font-serif shadow-md tracking-wide shadow-black/5 fixed">
        <div className="container mx-auto flex flex-wrap lg:justify-between  pb-5 flex-col lg:flex-row gap-between  items-center lg:pt-1">
          <ul className="flex lg:w-3/5 lg:justify-start flex-wrap items-center gap-x-5 text-base md:ml-auto lg:gap-x-[4rem]  lg:text-xl">
            <li className=" hover:text-[1.26rem]">
              <Link href="/aboutUs">About Us</Link>
            </li>
            <li className=" hover:text-[1.26rem]">
              <Link href="/team">Team</Link>
            </li>
            <li className=" hover:text-[1.26rem]">
              <Link href="/events">Events</Link>
            </li>
            <li className=" hover:text-[1.26rem]">
              <a href="https://www.instagram.com/sochem_iitbhu/">
                Announcement
              </a>
            </li>
            {isLoggedIn && (
              <li className="hover:text-[1.26rem]">
                <Link href="/dashBoard">Dashboard</Link>
              </li>
            )}
          </ul>

          <div className=" order-first lg:order-first lg:w-1/5   lg:flex lg:justify-start m-0 p-0">
            <Link href="/">
              <Image
                src={Osmoze}
                alt=""
                width=""
                height=""
                className="h-[70px] w-[110px] "
              />
            </Link>
          </div>
          <div className="  lg:w-1/5  order-last lg:flex lg:justify-end m-0 p-0">
            {isLoggedIn ? (
              <button
                onClick={(e) => handleLogOut(e)}
                className="bg-[#8DD5FF] test-s lg:text:base mt-2 rounded-md lg:h-[30px] h-[25px] lg:w-[70px] w-[50px] text-black hover:text-[1.05rem] hover:text-blue-700"
              >
                Log Out
              </button>
            ) : (
              <button className="bg-[#8DD5FF] test-s lg:text:base mt-2 rounded-md lg:h-[30px] h-[25px] lg:w-[70px] w-[50px] text-black hover:text-[1.05rem] hover:text-blue-700">
                <Link href="/signUp">Register</Link>
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
