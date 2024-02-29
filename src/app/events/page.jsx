"use client";
import EventCard from "../ui/EventCard";
import { UserAuth } from "../firebase/firebaseConfig";
import React, { useState, useEffect } from "react";
import EventDataService from "../Services/event.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
const Page = () => {
  const {
    events,
    setEvents,
    eventId,
    setEventId,
    isModalOpen,
    setIsModalOpen,
  } = UserAuth();

  useEffect(() => {
    const getEvent = async () => {
      const data = await EventDataService.getAllEvents();
      setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEvent();
  }, []);
  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };
  const handleId = (id) => {
    setEventId(id);
  };
  return (
    <div className="flex flex-col m-0 min-h-screen">
      <Navbar />

      {/* Background Image */}
      <div className="grid-place-items-center p-6 lg:p-0 sm:m-auto w-full">
        <div className=" bg-cover min-h-screen grid place-items-center">
          {/* Header */}
          <Image
            className="inline-block w-8/12 mt-8 lg:w-2/12"
            src="/Events.png"
            width={400}
            height={115}
            alt="events"
          />

          {/* <p className="text-white text-sm m-auto w-11/12 font-thin lg:text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            exercitationem.
          </p> */}

          {/* Header Ends */}
          <div className="  grid grid-cols-3 gap-4 mb-4">
            {events?.map((doc, index) => {
              return (
                <>
                  <div
                    className="border border-gray-200/15 rounded-2xl bg-gray-200/15  mt-9 w-11/12  flex flex-col lg:w-11/12"
                    key={doc.id}
                  >
                    <div className=" h-300px w-11/12 m-auto my-4 placeholder-opacity-100 grid place-items-center lg:p-2 lg:m-4 ">
                      <Image
                        className=" border rounded-2xl inline-block "
                        src="/image.png"
                        width={300}
                        height={300}
                        alt="events"
                      />
                    </div>
                    <p className="text-3xl m-auto text-white mb-2 ">
                      {doc.name}
                    </p>
                    <div className="m-auto w-4/12 mb-2 p-1">
                      <button
                        onClick={(e) => {
                          handleId(doc.id);

                          openModal(e);
                        }}
                        className="font-thin p-1  mb-2 w-11/12   text-center text-black border rounded-md border-white bg-white"
                      >
                        Read more
                      </button>
                    </div>
                  </div>

                  {/* <EventCard isOpen={isModalOpen} id={eventId} /> */}
                </>
              );
            })}
          </div>
          <Footer />
        </div>
      </div>
      {isModalOpen && <EventCard isOpen={isModalOpen} id={eventId} />}
    </div>
  );
};

export default Page;
