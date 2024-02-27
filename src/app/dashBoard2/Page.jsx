"use client"
import home from '../image/home.png';
import React from 'react';
import Image from 'next/image';
import Osmoze from '../image/osmoze.png';
import Link from 'next/link';




const page = () => {
  

  return (
    <>
    
    <section className="sticky text-[#8DD5FF]  bg-[#07000B] bg-opacity-70 lg:h-[100vh] lg:flex lg:flex:col shadow-md tracking-wide shadow-black/5 w-1/5">
  <div className="container mx-auto flex lg:gap-y-10 flex-wrap pb-5 flex-col lg:flex-col">
    <ul className="flex  lg:flex-col flex-wrap lg:gap-y-8  text-base  lg:text-[1.4rem] text-center">
     
      <li className="hover:underline hover:text-[1.43rem]"><Link href="/dashBoard">Dashboard</Link></li>
      <li className="hover:underline hover:text-[1.43rem]"><Link href="/eventRegistration">Events Registration</Link></li>
      <li className="hover:underline hover:text-[1.43rem]"><Link href="/contactUs">Contact Us</Link></li>
      <li className="hover:underline hover:text-[1.43rem]"><Link href="profile">Profile</Link></li>
    </ul>
    <div className=" order-first    lg:flex m-0 p-2 ">
    <Link href="/">
        
    <Image src={Osmoze} alt="" width="" height="" className='ml-8 h-[120px] w-[150px] '/>

    
    </Link>   
      
    </div>
    <div className='flex lg:align-bottom lg:justify-center mt-20'>
    <Image src={home} width="" height="" alt="" className='h-[50px] w-[150px] mb-0' />
    </div>
    
  </div>
</section > 


  
    </>
  )
}

export default page;