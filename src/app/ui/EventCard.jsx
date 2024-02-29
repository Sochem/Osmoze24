"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import EventService from "../Services/event.js";
import { UserAuth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import "../styles/modalWindow.css";
import { RxCross1 } from "react-icons/rx";

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
    <div className="blur-background">
      <div className="modal-overlay">
        {/* <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Edit Modal"
          className="modal-background "
        > */}
        {events.map((doc, index) => {
          if (doc.id == id) {
            return (
              <div
                key={doc.id}
                className="flex justify-center items-center w-5/12 h-5/6 "
              >
                <div className=" window-bg bg-cover text-white  mx-auto mt-8 p-8 bg-gray-100 rounded-md">
                  <div className="flex justify-end items-end mb-4 ">
                    <button
                      onClick={closeModal}
                      className=" hover:border-2 hover:rounded-md hover:border-white p-1"
                    >
                      <RxCross1 />
                    </button>
                  </div>

                  <h2 className="mb-6">Theme: {doc.theme}</h2>
                  <span className="mt-50">{doc.description}</span>
                  <div className="grid grid-cols-6 gap-4 mt-6">
                    <div className="col-start-1 col-end-3 ">
                      {doc.coordinator_1}
                    </div>
                    <div className="col-end-7 col-span-2 ">
                      {doc.coordinator_2}
                    </div>
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
                        className=" bg-blue-500 border-white  border-1 text-white p-2 rounded-xl  hover:bg-blue-700 mt-10 w-32  sm:text-sm sm:w-10 md:w-28"
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
        {/* </Modal> */}
      </div>
    </div>
  );
};

export default EventCard;
