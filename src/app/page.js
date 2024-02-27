import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/globals.css";
import Image from 'next/image'
import home from '../app/image/home.png'

export default function Home() {
  return (
    <>
    <body className='flex flex-col m-0 min-h-screen' >
      <Navbar/>
      
      <Footer/>
    </body>
   </>
  );
}
