"use client";
import Link from "next/link";
function Navbar() {
  return (
    <div className="border-b-2 w-full flex items-center justify-between ">
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/events">Events</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/profile">Profile</Link>
        </li>
      </ul>

      <ul className="flex ">
        <li className="p-2 cursor-pointer">
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
