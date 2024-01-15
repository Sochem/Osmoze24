import Image from 'next/image';
import facebook from '../image/facebook2.png';
import instagram from '../image/insta.png';
import linkedin from '../image/linkedin2.png';



export default function Home() {

  
  return (
    <>
    <footer className="h-[230px] w-full mt-auto   bg-[#050512] text-white">
      <div className="container mx-auto py-3">
      <div className="flex font-serif tracking-wider text-xl">
        <section className="flex gap-0 w-1/2">
          <div>
            <img src="https://www.osmoze.in/images/Osmoze.svg" alt=""  className="h-[160px]"/>
          </div>
          <div className="flex flex-col justify-center align-middle gap-y-8">
            <h1 className="text-2xl">
              Osmoze'24
            </h1>
            <p className="">
              The Annual 
              Chemical Extravaganzo
            </p>
          </div>
        </section>
        <section className=" w-1/2 flex flex-col justify-center align-middle gap-5 mr-10">
          <div className="flex md:gap-x-[8rem] md:mt-5 gap-x-4 md:justify-end">
            <p>
              Contact Us
            </p>
            <p className='text-base'>
              abc
            </p>
            <p className='font-mono text-base'>
             XXXXXXXXXX
            </p>
          </div>
          <div className="flex flex-col justify-center md:flex-row md:gap-x-[8rem] md:justify-end ">
            <p className=''>
              Follow Us
            </p>
            <div className="flex md:gap-x-[4.5rem]">
             <a href=""><Image src={facebook} width="" height="" /></a
             ><a href="https://www.instagram.com/sochem_iitbhu/"><Image src={instagram} width="" height="" /></a>
             <a href="https://www.linkedin.com/in/sochem/"><Image src={linkedin} width="" height="" /></a>
            </div>
          </div>
        </section>
      </div>
      <hr className='border-[1.5px] border-sky-400 shadow-md' />
      <div className=' mt-4 text-center text-sm'>
      <p>&#169; 2023 All Rights Reserved</p>
      </div>
      </div>
    </footer>
    </>
  )
}