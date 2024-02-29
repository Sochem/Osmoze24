import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Image from "next/image";
import "./styles/globals.css";
import "./styles/background.scss";

export default function Home() {
  return (
    <div className="flex flex-col m-0 min-h-screen">
      <Navbar />
      <Homepage/>
      <Footer />
    </div>
  );
}
