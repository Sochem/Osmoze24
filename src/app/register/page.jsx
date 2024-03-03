"use client";
import React from "react";
import Link from "next/link";
import { UserAuth } from "../firebase/firebaseConfig";
import UserDataService from "../Services/services.js";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import Osmoze from "../image/osmoze.png";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer.jsx";
const Page = () => {
  const {
    userName,
    setUserName,
    email,
    branch,
    setBranch,
    year,
    setYear,
    phone,
    setPhone,
    setUsers,
    registeredEvents,
    setRegisteredEvents,
  } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const data = await UserDataService.getAllUser();
      console.log(data.docs);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, [setUsers]);

  const handleRegister = async (e) => {
    e.preventDefault();
    const newUser = {
      userName,
      branch,
      email: Cookies.get("Email"),
      year,
      phone,
      registeredEvents,
    };
    console.log(newUser);

    try {
      const data = await UserDataService.addUser(newUser);
      console.log("userId:", data.id);
      const UserId = data.id;
      Cookies.set("User", UserId);
    } catch (err) {
      console.log(err);
    }

    setUserName("");
    setBranch("");
    setYear("");
    setPhone("");
    setRegisteredEvents([]);
    toast.success("You are successfully registered!");
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <div className="flex flex-col m-0 min-h-screen">
      <Navbar />
      <main className="flex text-center px-20 mt-10 flex-col  items-center justify-center ">
        <div className="w-4/12 mx-auto mt-8 p-8 bg-gray-100 rounded-md">
          <div className="flex flex-col items-center justify-center">
            <Image src={Osmoze} alt="osmoze" width={160} height={160} />
            <h2 className="text-2xl font-bold mb--1 text-black">
              Osmoze&apos;<span className="text-sky-600">24</span>
            </h2>

            <span className="text-black text-xs mb-2">
              COMPLETE YOUR PROFILE
            </span>
            <div className=" border border-1  w-full border-gray-400 shadow-[0_1px_2px_rgba(57,62,86,0.5)]"></div>
          </div>

          <form className="mt-6">
            <div className="mb-4 text-left">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                UserName
              </label>
              <input
                type="text"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 border text-black border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4 text-left">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Branch
              </label>
              <select
                className="w-full p-2 border text-black border-gray-300 rounded "
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              >
                <option></option>
                <option>Chemical Engineering</option>
                <option>Civil Engineering</option>
                <option>Computer Science and Engineering</option>
                <option>Electrical Engineering</option>
                <option>Electronics Engineering</option>
                <option>Mechanical Engineering</option>
                <option>Metallurgical Engineering</option>
                <option>Mining Engineering</option>
                <option>Pharmaceutical Engineering and Technology</option>
                <option>Ceramic Engineering and Technology</option>
                <option>Architecture, Planning and Design</option>
                <option>Department Of Chemistry</option>
                <option>Department Of Mathematical Sciences</option>
                <option>Department Of Physics</option>
                <option>Biochemical Engineering</option>
                <option>Biomedical Engineering</option>
                <option>Materials Science and Technology</option>
                <option>Department Of Humanistic Studies</option>
              </select>

              {/* <input
                type="text"
                id="username"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full p-2 border text-black border-gray-300 rounded"
                required
              /> */}
            </div>

            <div className="mb-4 text-left">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Year
              </label>
              <select
                className="w-full p-2 border text-black border-gray-300 rounded "
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option></option>
                <option>First Year</option>
                <option>Second Year</option>
                <option>Third Year</option>
                <option>Fourth Year</option>
                <option>Fifth Year</option>
              </select>
              {/* <input
                type="text"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full p-2 border text-black border-gray-300 rounded"
                required
              /> */}
            </div>

            <div className="mb-4 text-left">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="password"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border text-black border-gray-300 rounded"
                required
              />
            </div>
            {/* <div className="mb-4 text-left">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="tel"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border text-black border-gray-300 rounded"
                required
              />
            </div> */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              onClick={handleRegister}
            >
              Register
            </button>
          </form>
        </div>
        <div className="flex">
          <div mt-2 className="text-left text-white">
            Already Registered?
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-1 my-2 mx-3 rounded hover:bg-blue-700"
          >
            <Link href="/signIn">Login</Link>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
