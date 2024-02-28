"use client";
import { useContext, createContext, useState } from "react";
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase";
import "firebase/firestore";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [userId, setUserId] = useState("");
  const [eventId, setEventId] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [currentUserId, setCurrentUserId] = useState("");
  const [users, setUsers] = useState([]);
  const [year, setYear] = useState("");
  const [phone, setPhone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        googleSignIn,
        logOut,
        userId,
        setUserId,
        userName,
        email,
        branch,
        setUserName,
        setEmail,
        setBranch,
        password,
        setPassword,
        message,
        setMessage,
        currentUserId,
        setCurrentUserId,
        users,
        setUsers,
        year,
        setYear,
        phone,
        setPhone,
        isModalOpen,
        setIsModalOpen,
        events,
        setEvents,
        eventId,
        setEventId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const UserAuth = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, UserAuth };
