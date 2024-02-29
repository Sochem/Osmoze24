"use client";
import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import UserDataService from "../Services/services.js";
import { UserAuth } from "../firebase/firebaseConfig.js";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase.js";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import Image from "next/image.js";
import Osmoze from "../image/osmoze.png";
import Osmoze2 from "../image/osmoze2.png";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Google from "../image/google.svg";

export default function Page() {
  const {
    userName,
    email,
    branch,
    password,
    message,
    userId,
    setBranch,
    setEmail,
    setMessage,
    setUserName,
    setUserId,
    setPassword,
    users,
    setUsers,
    setCurrentUserId,
  } = UserAuth();

  //For Google Connect!
  const { googleSignIn } = UserAuth();
  const router = useRouter();

  // const SignUpWithGoogle = () => {
  //   signInWithPopup(auth, provider)
  //     .then((data) => {
  //       console.log(data);
  //       setEmail(data.user.email);

  //       toast.custom((t) => (
  //         <div
  //           className={`${
  //             t.visible ? "animate-enter" : "animate-leave"
  //           } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  //         >
  //           <div className="flex-1 w-0 p-4">
  //             <div className="flex items-start">
  //               <div className="ml-3 flex-1">
  //                 <p className="mt-1 text-sm text-gray-500">
  //                   Fill your details below
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="flex border-l border-gray-200">
  //             <button
  //               onClick={() => {
  //                 toast.dismiss(t.id);
  //                 setTimeout(() => {
  //                   router.push("/register");
  //                 }, 500);
  //               }}
  //               className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
  //             >
  //               OK
  //             </button>
  //           </div>
  //         </div>
  //       ));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const SignUpWithGoogle = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      const userEmail = data.user.email;
      if (userEmail.endsWith("@itbhu.ac.in")) {
        if (users.find((doc) => doc.email == data.user.email) == undefined) {
          setEmail(data.user.email);

          toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="ml-3 flex-1">
                    <p className="mt-1 text-sm text-gray-500">
                      Fill your details below
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    setTimeout(() => {
                      router.push("/register");
                    }, 500);
                  }}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
                >
                  OK
                </button>
              </div>
            </div>
          ));
          setTimeout(() => {
            router.push("/register");
          }, 6000);
        } else {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="ml-3 flex-1">
                    <p className="mt-1 text-sm text-gray-500">
                      You already have an account ! Please Sign in with your
                      Institute mail Id.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    setTimeout(() => {
                      router.push("/signIn");
                    }, 500);
                  }}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
                >
                  OK
                </button>
              </div>
            </div>
          ));
          setTimeout(() => {
            router.push("/signIn");
          }, 5000);
        }
      } else {
        toast.error("Only itbhu.ac.in domain emails are allowed to log in.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setMessage("");
  //   if (userName === "" || email === "") {
  //     setMessage({ error: true, msg: "All fields are mandatory!" });
  //     return;
  //   }

  //   const newUser = {
  //     userName,
  //     branch,
  //     password,
  //     email,
  //   };
  //   console.log(newUser);

  //   try {
  //     const data = await UserDataService.addUser(newUser);
  //     console.log("userId:", data.id);
  //     const UserId = data.id;
  //     Cookies.set("User", UserId);
  //     setMessage({ error: false, msg: "New User added successfully!" });
  //   } catch (err) {
  //     setMessage({ error: true, msg: err.message });
  //   }

  //   setUserName("");
  //   setBranch("");
  //   setEmail("");
  //   setPassword("");
  //   toast.success("  You are successfully registered! ");
  //   setTimeout(() => {
  //     router.push("/");
  //   }, 1000);
  // };

  useEffect(() => {
    const getUser = async () => {
      const data = await UserDataService.getAllUser();
      console.log(data.docs);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, [setUsers]);

  return (
    <div className="m-0 min-h-screen">
      <Navbar />
      <main className="flex text-center px-20 mt-5 mb-10 flex-col  items-center justify-center ">
        <div className="w-4/12 mx-auto mt-8 p-8 bg-gray-100 rounded-md">
          <div className="flex flex-col items-center justify-center">
            <Image src={Osmoze2} alt="osmoze" width={160} height={160} />
            <h2 className="text-2xl font-bold mb-1 text-black">
              Osmoze&apos;<span className="text-sky-600">24</span>
            </h2>

            <span className="text-black text-xs mb-1">SIGN UP WITH</span>
            <button
              onClick={SignUpWithGoogle}
              className="text-black text-sm m-2 flex mb-5  border-2 border-gray-300 rounded-md shadow-md hover:shadow-lg hover:text-blue-600  py-1 px-2"
            >
              <Image
                alt="..."
                className=" mr-1"
                width={20}
                height={20}
                src={Google}
              />
              Google
            </button>
          </div>
          
        <div className="flex flex-wrap">
          <div className="text-center w-full m-auto">
            <small className="text-grey-100 text-sm text-black ">
              Already Registered?
              <span className="bg-cyan-500 text-white px-2 py-2 rounded ml-1 mr-1 mb-1 uppercase shadow-md hover:shadow-lg inline-flex items-center font-bold text-xs">
                <Link href="/signIn">Login</Link>
              </span>
            </small>
          </div>
        </div>
        </div>

          {/* <form className="mt-6">
            <div className="mb-4 text-left">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                USERNAME
              </label>

              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                id="username"
                name="username"
                className="w-full p-2 border text-black border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4 text-left">
              <label
                htmlFor="branch"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                BRANCH
              </label>
              <input
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                type="text"
                id="branch"
                name="branch"
                className="w-full p-2 text-black border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4 text-left">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                EMAIL
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className="w-full p-2 text-black border border-gray-300 rounded"
                required
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            >
              SIGN UP
            </button>
          </form> */}
        
      </main>
      <Footer />
    </div>
  );
}
