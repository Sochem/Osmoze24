


"use client";
import Page2 from '../dashBoard2/Page.jsx'
import React from "react";
import { useEffect, useState } from "react";
import UserDataService from "../Services/services.js";
import { UserAuth } from "../firebase/firebaseConfig.js";
import Cookies from "js-cookie";
import EditModal from "../ui/EditModal.jsx";
const Page = () => {
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
  // const updateUserData = async (id) => {
  //   await UserDataService.updateUser(id, { userName: "shruti" });
  // };

  // const deleteHandler = async (id) => {
  //   await UserDataService.deleteUser(id);
  //   getUser();
  // };

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

    <div className=' font-serif flex m-0'>
    <Page2/>
    <table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>UserName</th>
            <th>Branch</th>
            <th>Email id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((doc, index) => {
            // console.log(doc)
            if (doc.id == Cookies.get("User")) {
              return (
                <tr key={index + 1}>
                  <td>{doc.userName}</td>
                  <td>{doc.branch}</td>
                  <td>{doc.email}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        openModal(e);
                        getUserId(doc.id);
                      }}
                      className="border border-white rounded-sm ml-2 p-2"
                    >
                      Edit Data
                    </button>
                    <EditModal isOpen={isModalOpen} />
                    {/* <button
                      variant="danger"
                      className="delete"
                      onClick={(e) => deleteHandler(doc.id)}
                    >
                      Delete
                    </button> */}
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>

</div>
  

      
    </>
  );
};

export default Page;
