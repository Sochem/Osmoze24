"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import EventService from "../Services/event.js";
import { UserAuth } from "../firebase/page";
import toast from "react-hot-toast";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/modalWindow.css";
const EventCard = ({ isOpen, id }) => {
  const { events, setEvents, isModalOpen, setIsModalOpen } = UserAuth();

  useEffect(() => {
    const getEvent = async () => {
      const data = await EventService.getAllEvents();
      setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEvent();
  }, []);
  const closeModal = (e) => {
    console.log("closing");
    e.preventDefault();
    console.log("closing again");
    setIsModalOpen(false);
  };
  const handleRegister = async (e, id) => {
    const docRef = doc(db, "events", id);
    const docSnap = await getDoc(docRef);
    const isRegistered = docSnap.data().registered;

    try {
      if (id !== undefined && id !== "" && isRegistered == false) {
        await EventService.updateEvent(id, { registered: true });
        closeModal(e);
        toast.success("  You are successfully registered for the event! ");
      } else {
        closeModal(e);
        toast.success("  You already registered for the event! ");
      }
    } catch (err) {
      console.log(err);
    }

    // try {
    //   if (id !== undefined && id !== "") {
    //     await EventService.updateEvent(id, { registered: true });
    //     closeModal(e);
    //     toast.success("  You are successfully registered for the event! ");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Modal"
      className="bgg"
    >
      {events.map((doc, index) => {
        if (doc.id == id) {
          return (
            <div key={doc.id} className="flex justify-center items-center">
              <div className="bg-[url('../image/bg.png')] bg-cover text-white w-fit h-fit mx-auto mt-8 p-8 bg-gray-100 rounded-md">
                <h2 className="mb-6">Theme: {doc.Theme}</h2>
                <span className="mt-50">{doc.description}</span>
                <div className="grid grid-cols-6 gap-4 mt-6">
                  <div className="col-start-1 col-end-3 ">Pratham Aggarwal</div>
                  <div className="col-end-7 col-span-2 ">Arpna</div>
                </div>
                <div className="grid grid-cols-6 gap-4 mt-1">
                  <div className="col-start-1 col-end-3 ">XXXXXXXXXX</div>
                  <div className="col-end-7 col-span-2 "> XXXXXXXXXX</div>
                </div>
                <div className="grid grid-cols-6 gap-4 mt-1">
                  <div className="col-start-1 col-end-3 mt-10 w-32">
                    Prize Worth: XXX
                  </div>
                  <div className="col-end-7 col-span-2 ">
                    {" "}
                    <button
                      onClick={(e) => handleRegister(e, id)}
                      className=" bg-blue-500 text-white p-2 rounded-xl  hover:bg-blue-700 mt-10 w-32  sm:text-sm sm:w-10 md:w-28"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </Modal>
  );
};

export default EventCard;
