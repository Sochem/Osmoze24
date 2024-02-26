// EditModal.js
"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { UserAuth } from "../firebase/page";
import UserDataService from "../Services/page.js";
const EditModal = ({ isOpen }) => {
  const {
    userName,
    setUserName,
    email,
    setEmail,
    branch,
    setBranch,
    year,
    setYear,
    phone,
    setPhone,
    setUsers,
    userId,
    setUserId,
    isModalOpen,
    setIsModalOpen,
  } = UserAuth();

  const closeModal = (e) => {
    console.log("closing");
    e.preventDefault();
    console.log("closing again");
    setIsModalOpen(false);
  };
  const handleSave = async (e) => {
    e.preventDefault();
    const newUser = {
      userName,
      email,
      branch,
    };
    console.log(newUser);

    try {
      if (userId !== undefined && userId !== "") {
        await UserDataService.updateUser(userId, newUser);
        setUserId("");
      }
    } catch (err) {
      console.log(err);
    }

    setEmail("");
    setUserName("");
    setBranch("");
    closeModal(e);
    location.reload();
  };

  const editHandler = async () => {
    // setMessage("");
    try {
      const docSnap = await UserDataService.getUser(userId);
      console.log("the record is :", docSnap.data());
      setUserName(docSnap.data().userName);
      setEmail(docSnap.data().email);
      setBranch(docSnap.data().branch);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("The id here is : ", userId);
    if (userId !== undefined && userId !== "") {
      editHandler();
    }
  }, [userId]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Modal"
    >
      <h2 className="text-black">Edit Data</h2>
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
          <input
            type="text"
            id="branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full p-2 border text-black border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4 text-left">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border text-black border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          onClick={(e) => handleSave(e)}
        >
          Save
        </button>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 mt-3"
          onClick={(e) => closeModal(e)}
        >
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default EditModal;
