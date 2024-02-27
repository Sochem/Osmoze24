"use client";
import React from "react";
import Page from "../dashBoard2/Page.jsx";

const page = () => {
  return (
    <>
      <div className=" font-serif flex m-0">
        <Page />
        <section className="w-4/5 h-[100vh] bg-[#86B6F6] flex flex-col">
          introduction
        </section>
      </div>
    </>
  );
};

export default page;
