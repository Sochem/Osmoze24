"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import EventService from "../Services/event.js";
import UserService from "../Services/services.js";
import { UserAuth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
import {
  doc,
  getDoc,
  getDocs,
  query,
  collection,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase";
import "../styles/modalWindow.css";
import { RxCross1 } from "react-icons/rx";
import { arrayUnion } from "firebase/firestore";
import Cookies from "js-cookie";

const EventCard = ({ isOpen, id }) => {
  const { events, setEvents, isModalOpen, setIsModalOpen } = UserAuth();
  const userID = Cookies.get("User");
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
  const checkIfValueExists = async (
    collectionName,
    fieldName,
    value,
    userID
  ) => {
    const q = query(
      collection(db, collectionName),
      where(fieldName, "array-contains", value),
      where("userId", "==", userID) // Add a condition to filter by userID
    );
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  // Example usage:
  const handleRegister = async (e, id) => {
    const valueExists = await checkIfValueExists(
      "users",
      "registeredEvents",
      id,
      userID
    );

    try {
      if (id !== undefined && id !== "") {
        const updatedUser = {
          registeredEvents: arrayUnion(id),
        };
        await UserService.updateUser(userID, updatedUser);

        closeModal(e);
        toast.success("  You are successfully registered for the event! ");
      } else {
        closeModal(e);
        toast.success("  You already registered for the event! ");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="blur-background">
      <div className="modal-overlay">
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

                  <h2 className="mb-7 font-semibold text-xl text-center">
                    {doc.theme}
                  </h2>
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
                    <div className="col-start-1 col-end-3 ">
                      {doc.coordinator_1_contact}
                    </div>
                    <div className="col-end-7 col-span-2 ">
                      {doc.coordinator_2_contact}
                    </div>
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
      </div>
    </div>
  );
};

export default EventCard;
