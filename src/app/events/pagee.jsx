"use client";
import EventCard from "../ui/EventCard";
import { UserAuth } from "../firebase/page";
import React, { useState, useEffect } from "react";
import EventDataService from "../Services/event.js";
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
  const openModal = () => {
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
    <div>
      {events.map((doc, index) => {
        return (
          <>
            <h2>{doc.event_name}</h2>
            <button
              onClick={(e) => {
                handleId(doc.id);

                openModal(e);
              }}
              className="border border-white rounded-sm ml-2 p-2"
            >
              Read More
            </button>

            <EventCard isOpen={isModalOpen} id={eventId} />
          </>
        );
      })}
    </div>
  );
};

export default Page;
