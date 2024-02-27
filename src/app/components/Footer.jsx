import Image from 'next/image';
import facebook from '../image/facebook2.png';
import instagram from '../image/insta.png';
import linkedin from '../image/linkedin2.png';
import osmoze from '../image/osmoze.png';




export default function Home() {

  
  return (
    <>
    <footer className="h-[280px] w-full mt-auto   bg-[#07000B] bg-opacity-70 text-white">
      <div className="container mx-auto py-3">
      <div className="flex text-[#8DD5FF] font-serif tracking-wider md:text-xl text-sm">
        <section className="flex  w-1/2">
          <div>
            

            <Image src={osmoze} alt='' height='' width=''/>
            
          </div>
          <div className="flex flex-col text-base md:text-2xl justify-center align-middle gap-y-5 md:gap-y-8">
            <h1 className="text-xl  md:text-2xl">
              Osmoze&apos;24
            </h1>
            <p className="">
              The Annual 
              Chemical Extravaganzo
            </p>
          </div>
        </section>
        <section className=" w-1/2 pl-2 flex flex-col justify-center align-middle gap-y-5 md:gap-5 mr-10">
          <div className="flex md:gap-x-[8rem] mt-3 md:mt-5 gap-x-2 md:justify-end">
            <p>
              Contact Us
            </p>
            <p className='text-base text-white'>
              abc
            </p>
            <p className='font-mono text-base text-white'>
             XXXXXXXXXX
            </p>
          </div>
          <div className="flex flex-col mb-3  md:flex-row md:gap-x-[8rem] md:justify-end ">
            <p className='flex justify-center mb-1'>
              Follow Us
            </p>
            <div className="flex gap-x-[2rem] md:gap-x-[4.5rem] justify-center ">
             <a href="https://www.facebook.com/Sochem.iitbhu/"><Image src={facebook} width="" height="" alt=""/></a>
             <a href="https://www.instagram.com/sochem_iitbhu/"><Image src={instagram} width="" height="" alt=""/></a>
             <a href="https://www.linkedin.com/in/sochem/"><Image src={linkedin} width="" height="" alt=""/></a>
            </div>
          </div>
        </section>
      </div>
      <hr className='mt-5 md:mt-0 border-[1.5px] border-sky-400 shadow-md' />
      <div className='mt-2 md:mt-4 text-center text-sm'>
      <p>&#169; 2023 All Rights Reserved</p>
      </div>
      </div>
    </footer>
    </>
  )
}