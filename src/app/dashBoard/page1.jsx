"use client";

import React from "react";
import Page from "../dashBoard2/Page.jsx";

import Link from "next/link";
import Image from "next/image";
import Image1 from "../image/image1.png";
import "../styles/globals.css";
import Image2 from "../image/image2.png";
import Event from "./Event.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect } from "react";
import { UserAuth } from "../firebase/firebaseConfig.js";
const Dashboard = () => {
  const {
    userId,
    setUserId,
    userName,
    setUserName,
    email,
    setEmail,
    branch,
    setBranch,
    users,
    setUsers,
    currentUserId,
    setCurrentUserId,
    isModalOpen,
    setIsModalOpen,
  } = UserAuth();

  useEffect(() => {
    const getUser = async () => {
      const data = await UserDataService.getAllUser();
      // console.log(data.docs)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };
  const getUserId = (id) => {
    console.log("The ID of document to be edited: ", id);
    setUserId(id);
  };
  return (
    <>
      <div className=" font-serif flex m-0">
        <Page />

        <section className="w-4/5 h-[100vh] bg-[#86B6F6] flex flex-col my-auto justify-center">
          <div className="p-6 ">
            <div className="flex justify-between lg:flex-col">
              <div className=" mx-auto">
                <h1 className="ml-5 text-5xl">Profile</h1>
              </div>
              <div className="mx-auto mt-5">
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
            <div className="p-2 ml-10 mr-10 text-xl bg-[#07000B] text-[#BDE8F6] mt-10 mx-auto text-center">
              <h2>Registered events</h2>
            </div>

            {/* <div className=" mt-10 mb-10 ml-12  gap-x-20 flex overflow-x-scroll pb-10 hide-scroll-bar">
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
            </div> */}

            {/* horizontal scrolling */}

            <div class=" flex overflow-x-scroll pb-0 hide-scroll-bar mt-14 mb-5  w-4/5 m-auto">
              <div class="flex flex-nowrap lg:ml-16 md:ml-20 ml-10 ">
                <div class="inline-block px-3">
                  <div class=" max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <Event />
                  </div>
                </div>
                <div class="inline-block px-3">
                  <div class=" max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <Event />
                  </div>
                </div>
                <div class="inline-block px-3">
                  <div class=" max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <Event />
                  </div>
                </div>
                <div class="inline-block px-3">
                  <div class=" max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <Event />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
