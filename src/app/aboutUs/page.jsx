import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import about1 from "../image/about1.png";
import about2 from "../image/about2.png";

const page = () => {
  return (
    <div className="flex flex-col m-0 min-h-screen">
      <Navbar />
      <section className="text-gray-400 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg ml-10 lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <Image
            className=""
            src={about1}
            width={600}
            height={600}
            alt="Picture of the author"
          />
          </div>
          <div className="lg:flex-grow mr-32 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Who are we?
              <br className="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed ">
            The Society of Chemical Engineers a.k.a SoChem is a society run by the students of the department for the students of the department. SoChem ensures that each and every student within the department gets the most out of their time with us at IIT(BHU) Varanasi.The society as a whole has strong links with various industries in the engineering and financial sectors. The society organizes presentations from company representatives and application days, held within the department itself, directly aimed at chemical engineering students.The society also organizes its departmental fest: Osmoze once in a year which extract out the prestigious innovations of students.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-400 body-font">
        <div className="container mx-auto flex px-5 py-4 pb-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow mr-32 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center pt-40">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
               Our Mission
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
            The society involves various budding chemical engineers from all the years. The society provides a platform for students to improve on their skills & personality. It also brings back the experience of our esteemed alumni for the benefit of the students. Various activities such as workshops, GDs, case studies, placement & internship sessions are organized by the society throughout the year. The society also organizes its departmental fest: Osmoze once in a year which extract out the prestigious innovations of students.
            </p>
          </div>
          <div className="lg:max-w-lg mr-10 lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <Image
            className="top-0"
            src={about2}
            width={600}
            height={600}
            alt="Picture of the author"
          />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
