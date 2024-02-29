"use client"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import  { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import Image from "next/image";
import "./styles/globals.css";
import "./styles/background.scss";

export default function Home() {

  if (typeof document !== 'undefined') {
        window.addEventListener('scroll', function() {
            var navbar = document.getElementById('navbar');
            if (navbar) {
                if (window.scrollY > 450) {
                    navbar.classList.remove('hidden');
                } else {
                    navbar.classList.add('hidden');
                }
            }
        });
}
  
  return (
    <div className="flex flex-col m-0 min-h-screen">
      <div className="fixed top-0 w-full z-10 hidden" id="navbar"><Navbar /></div>
      <Homepage/>
      <Footer />
    </div>
  );
}
