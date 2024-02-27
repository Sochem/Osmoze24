import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex flex-col m-0 min-h-screen'>
      <Navbar/>

      {/* Background Image */}
      <div className="grid-place-items-center p-6 lg:p-0 sm:m-auto w-full">
        <div className=" bg-cover min-h-screen grid place-items-center">

          {/* Header */}
          <Image
          className="inline-block w-8/12 mt-8 lg:w-2/12"
          src="/Events.png"
          width={400}
          height={115}
          alt='events'
          />

          <p className="text-white text-sm m-auto w-11/12 font-thin lg:text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, exercitationem.</p> 

          {/* Header Ends */}
          

          {/* Events Block */}

          <div className=" lg:flex lg:gap-12">

           {/* first card */}
          <div className="border border-gray-200/15 bg-gray-200/15  mt-9 w-11/12  flex flex-col lg:w-4/12">

                <div className=' h-300px w-11/12 m-auto my-4 placeholder-opacity-100 grid place-items-center lg:p-2 lg:m-4 '>
                <Image
                className="inline-block "
                src="/image.png"
                width={300}
                height={300}
                alt='events'
                />
            </div>
            <p className='text-3xl m-auto text-white mb-2 ' >OsmoCross 
            </p> 
              <div className='flex flex-row-reverse mr-2'><a href='#' className='font-thin mb-2 w-3/12 text-center text-black border rounded-md border-white bg-white'>Read more </a></div>
            </div>

            {/* First Card ends */}



            <div className="border border-gray-200/15 bg-gray-200/15  mt-9 w-11/12  flex flex-col lg:w-4/12">

                <div className=' h-300px w-11/12 m-auto my-4 placeholder-opacity-100 grid place-items-center lg:p-2 lg:m-4 '>
                <Image
                className="inline-block "
                src="/image.png"
                width={300}
                height={300}
                alt='events'
                />
            </div>
            <p className='text-3xl m-auto text-white mb-2 ' >OsmoCross 
            </p> 
              <div className='flex flex-row-reverse mr-2'><a href='#' className='font-thin mb-2 w-3/12 text-center text-black border rounded-md border-white bg-white'>Read more </a></div>
            </div>




            <div className="border border-gray-200/15 bg-gray-200/15  mt-9 w-11/12  flex flex-col lg:w-4/12">

                <div className=' h-300px w-11/12 m-auto my-4 placeholder-opacity-100 grid place-items-center lg:p-2 lg:m-4 '>
                <Image
                className="inline-block "
                src="/image.png"
                width={300}
                height={300}
                alt='events'
                />
            </div>
            <p className='text-3xl m-auto text-white mb-2 ' >OsmoCross 
            </p> 
              <div className='flex flex-row-reverse mr-2'><a href='#' className='font-thin mb-2 w-3/12 text-center text-black border rounded-md border-white bg-white'>Read more </a></div>
            </div>


            </div>


            {/* Next Row */}

            <div className="lg:flex lg:gap-12 mb-6">


            <div className="border border-gray-200/15 bg-gray-200/15  mt-9 w-11/12  flex flex-col lg:w-4/12">

                <div className=' h-300px w-11/12 m-auto my-4 placeholder-opacity-100 grid place-items-center lg:p-2 lg:m-4 '>
                <Image
                className="inline-block "
                src="/image.png"
                width={300}
                height={300}
                alt='events'
                />
            </div>
            <p className='text-3xl m-auto text-white mb-2 ' >OsmoCross 
            </p> 
              <div className='flex flex-row-reverse mr-2'><a href='#' className='font-thin mb-2 w-3/12 text-center text-black border rounded-md border-white bg-white'>Read more </a></div>
            </div>

            {/* First Card ends */}



            <div className="border border-gray-200/15 bg-gray-200/15  mt-9 w-11/12  flex flex-col lg:w-4/12">

                <div className=' h-300px w-11/12 m-auto my-4 placeholder-opacity-100 grid place-items-center lg:p-2 lg:m-4 '>
                <Image
                className="inline-block "
                src="/image.png"
                width={300}
                height={300}
                alt='events'
                />
            </div>
            <p className='text-3xl m-auto text-white mb-2 ' >OsmoCross 
            </p> 
              <div className='flex flex-row-reverse mr-2'><a href='#' className='font-thin mb-2 w-3/12 text-center text-black border rounded-md border-white bg-white'>Read more </a></div>
            </div>




            <div className="border border-gray-200/15 bg-gray-200/15  mt-9 w-11/12  flex flex-col lg:w-4/12">

                <div className=' h-300px w-11/12 m-auto my-4 placeholder-opacity-100 grid place-items-center lg:p-2 lg:m-4 '>
                <Image
                className="inline-block "
                src="/image.png"
                width={300}
                height={300}
                alt='events'
                />
            </div>
            <p className='text-3xl m-auto text-white mb-2 ' >OsmoCross 
            </p> 
              <div className='flex flex-row-reverse mr-2'><a href='#' className='font-thin mb-2 w-3/12 text-center text-black border rounded-md border-white bg-white'>Read more </a></div>
            </div>


          





          </div>

        </div>
      </div>
      

      
      <Footer/>
    </div>
  );
};

export default page;
