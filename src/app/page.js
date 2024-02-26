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
      <main className="text-[#8DD5FF] flex m-0  bg-[#000018] min-h-screen flex-col items-center justify-between font-serif">
      <div className="z-10 max-w-5xl lg:h-[600px] w-full lg:items-center lg:align-middle align-middle justify-center text-sm lg:flex lg:flex-col">
        <Image src={home} width="" height="" alt="" className='' />
        <h1 className='text-center lg:text-3xl text-lg tracking-widest'>MAGICAL PARTY</h1>
      </div>
      <hr className=' border-1 w-full  border-black'/>
      <div className="z-10 max-w-5xl lg:h-[600px] w-full lg:items-center lg:align-middle align-middle justify-center text-sm lg:flex lg:flex-col">
        <Image src={home} width="" height="" alt="" className='' />
        <h1 className='text-center lg:text-3xl text-lg tracking-widest'>MAGICAL PARTY</h1>
      </div>
    </main>
      <Footer/>
    </body>
   </>
  );
}
