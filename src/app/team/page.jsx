import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import dipansh from "../image/dipanshJain.jpg";
import aman from "../image/amanSharma.jpg";
import visham from "../image/visham.jpg";
import harsh from "../image/harsh.jpg";
import Devansh from "../image/devansh.jpeg";
import Pranjal from "../image/pranjal.jpg";
import Amber from "../image/amber.jpg";
import Ajit from "../image/ajit.jpg";
import HarshJain from "../image/harshJain.jpg";
import Manav from "../image/manav.jpg";
import Saumyajeet from "../image/saumyajeet.jpg";
import Aryan from "../image/aryan.jpg";
import Manvendra from "../image/manvendra.jpg";
import Dibyanshu from "../image/Dibyanshu.jpg";
import Pratham from "../image/Pratham.jpg";
import Deepshikha from "../image/Deepshikha.jpg";
import Mrunal from "../image/Mrunal.jpg";
import Sumit from "../image/Sumit.jpg";
import Piyush from "../image/Piyush.jpg";
import Rajneesh from "../image/Rajneesh.jpg";
import Anukriti from "../image/Anukriti.jpg";
import Raksha from "../image/Raksha.jpg";
// import osmoze from '../image/oszome.png';

const team = () => {
  return (
    <>
      <Navbar />
      <div class="flex justify-center items-center  m-8 text-57 h-47px w-447px">
        <p class=" text-white rounded-[1px] border-black font-medium	text-center text-[50px] h-[50px] w-[447px] border-1 border-black font-modern">
          MEET OUR TEAMS
        </p>
      </div>

      <div className="justify-center flex gap-x-[50px] gap-y-[500px] w-[85%] rounded-[33px] bg-gray-200/15 pt-10 p-6 m-auto z-0 ">
        <div class=" p-6 rounded-lg">
          <Image
            width={200}
            height={200}
            class="h-[250px] rounded w-[250px] object-cover object-center mb-6 z-10"
            src={dipansh}
            alt="content"
          />
          <h3 class="tracking-widest text-indigo-500 text-xl font-medium  text-white title-font text-center	  font-modern">
            Vice President
          </h3>
          <h3 class="tracking-widest text-indigo-500 text-xl font-medium  text-white title-font text-center	 font-modern">
            Dipansh Jain
          </h3>
        </div>

        <div class=" p-6 rounded-lg ">
          <Image
            width={200}
            height={200}
            class="h-[250px] rounded w-[250px] object-cover object-center mb-6"
            src={aman}
            alt="content"
          />
          <h3 class="tracking-widest text-indigo-500 text-xl font-medium text-white  title-font text-center	 font-modern">
            General Secretary
          </h3>
          <h3 class="tracking-widest text-indigo-500 text-xl font-medium text-white  title-font text-center font-modern	">
            Aman Sharma
          </h3>
        </div>
      </div>

      <div className=" h-[50px] w-auto"></div>

      <section class="text-gray-600 body-font">
        <div class="flex justify-center items-center -m-4 w-[85%] p-5 m-auto rounded-[33px] bg-gray-200/15  ">
          <div class="xl:w-1/5 md:w-1/5 p-2 ">
            <div class=" p-2 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-[200px] rounded w-full object-cover object-center mb-6"
                src={visham}
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xl text-white  font-medium title-font text-center  font-modern	">
                Joint Gen.Secretaries
              </h3>
              <h3 class="tracking-widest text-indigo-500 text-xl text-white  font-medium title-font text-center  font-modern	">
                Visham Rohilla
              </h3>
            </div>
          </div>
          <div class="xl:w-1/5 md:w-1/5 p-2">
            <div class=" p-2 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-[200px] rounded w-full my-4 object-cover object-center mb-6"
                src={Sumit}
                alt="content"
              />
              <div className="my-[10px]">
                <h3 class="tracking-widest  text-xl text-white  font-medium title-font text-center	 font-modern">
                  Convener
                </h3>
                <h3 class="tracking-widest  text-xl text-white mb-[2.7rem] font-medium title-font text-center	 font-modern">
                  Sumit Jena
                </h3>
              </div>
            </div>
          </div>
          <div class="xl:w-1/5 md:w-1/5 p-2">
            <div class=" p-2 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-[200px] rounded w-full object-cover object-center mb-6"
                src={harsh}
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xl text-white  font-medium title-font text-center  font-modern	">
                Joint Gen.Secretaries
              </h3>
              <h3 class="tracking-widest text-indigo-500 text-xl text-white  font-medium title-font text-center	 font-modern">
                Harsh Mishra
              </h3>
            </div>
          </div>
        </div>
      </section>

      <div className=" h-[50px] w-auto"></div>

      <section class="body-font w-[85%] p-4 m-auto rounded-[33px] bg-gray-200/15 ">
        <div class="flex justify-center items-center  m-8 text-57 h-475px w-447px z-50">
          <p class="text-center text-3xl h-[50px] w-[447px] border-1 border-black text-[45px] font-medium text-white	leading-10  font-modern z-10">
            Tech Heads
          </p>
        </div>

        <div class="flex justify-center items-center -m-4 ">
          <div class="xl:w-1/5 md:w-1/5 p-2">
            <div class=" p-2 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-[200px] rounded w-full object-cover object-center mb-6"
                src={Devansh}
                alt="content"
              />
              <h3 class="tracking-[0.1rem] w-full text-xl text-white  font-medium title-font text-center	 font-modern">
                Devansh Choudhary
              </h3>
            </div>
          </div>
          <div class="xl:w-1/5 md:w-1/5 p-2">
            <div class=" p-2 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-[200px] rounded w-full object-cover object-center mb-6"
                src={Pranjal}
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xl text-white  font-medium title-font text-center  font-modern	">
                Pranjal Rajput
              </h3>
            </div>
          </div>
          <div class="xl:w-1/5 md:w-1/5 p-2">
            <div class=" p-2 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-[200px] rounded w-full object-cover object-center mb-6"
                src={Deepshikha}
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xl text-white  font-medium title-font text-center  font-modern	">
                Deepshikha Sinha
              </h3>
            </div>
          </div>
        </div>
      </section>
      <div className=" h-[50px] w-auto"></div>

      <section className="w-[85%] p-4 m-auto rounded-[33px] bg-gray-200/15 ">
        <div class="flex justify-center items-center  m-8 text-57 h-47px w-447px">
          <p class="text-center text-3xl h-[50px] w-[447px] border-1 border-black  font-modern text-[45px] font-medium text-white	leading-10  font-modern">
            Design Heads
          </p>
        </div>
        <div className="justify-center flex gap-x-[50px]	gap-y-[50px]	">
          <div class="p-6 rounded-lg">
            <Image
              width={200}
              height={200}
              class="h-[200px] rounded w-[200px] object-cover object-center mb-6"
              src={Anukriti}
              alt="content"
            />
            <h3 class="tracking-widest text-white text-xl font-medium title-font text-center	 font-modern">
              Anukriti
            </h3>
          </div>

          <div class=" p-6 rounded-lg">
            <Image
              width={200}
              height={200}
              class="h-[200px] rounded w-[200px] object-cover object-center mb-6"
              src={Amber}
              alt="content"
            />
            <h3 class="tracking-widest  text-xl text-white font-medium title-font text-center  font-modern	">
              Amber Asthana
            </h3>
          </div>
        </div>
      </section>
      <div className=" h-[50px] w-auto"></div>

      <section className="w-[85%] p-4 m-auto rounded-[33px] bg-gray-200/15 ">
        <div class="flex justify-center items-center  m-8 text-57 h-47px w-447px">
          <p class="text-center text-3xl h-[50px] w-[447px] border-1 border-black  font-modern text-[45px] font-medium text-white	leading-10  font-modern">
            PR Heads
          </p>
        </div>
        <div className="justify-center flex gap-x-[50px]	gap-y-[50px]	">
          <div class=" p-6 rounded-lg">
            <Image
              width={200}
              height={200}
              class="h-[200px] rounded w-[200px] object-cover object-center mb-6"
              src={Ajit}
              alt="content"
            />
            <h3 class="tracking-widest text-white text-xl font-medium title-font text-center  font-modern	">
              Ajit Priyadarshi
            </h3>
          </div>

          <div class=" p-6 rounded-lg">
            <Image
              width={200}
              height={200}
              class="h-[200px] rounded w-[200px] object-cover object-center mb-6"
              src={Mrunal}
              alt="content"
            />
            <h3 class="tracking-widest text-white text-xl font-medium title-font text-center	 font-modern">
              Mrunal Bhagat
            </h3>
          </div>
        </div>
      </section>
      <div className=" h-[50px] w-auto"></div>

      <section className="w-[85%] p-4 m-auto rounded-[33px] bg-gray-200/15 ">
        <div class="flex justify-center items-center  m-8 text-57 h-47px w-447px">
          <p class="text-center text-3xl h-[50px] w-[447px] border-1 border-black  font-modern text-[45px] font-medium text-white	leading-10  font-modern">
            Branding Heads
          </p>
        </div>
        <div className="justify-center flex gap-x-[50px]	gap-y-[50px]	">
          <div class=" p-6 rounded-lg">
            <Image
              width={200}
              height={200}
              class="h-[200px] rounded w-[200px] object-cover object-center mb-6"
              src={HarshJain}
              alt="content"
            />
            <h3 class="tracking-widest text-xl text-white font-medium title-font text-center  font-modern	">
              Harsh Jain
            </h3>
          </div>

          <div class=" p-6 rounded-lg">
            <Image
              width={200}
              height={200}
              class="h-[200px] rounded w-[200px] object-cover object-center mb-6"
              src={Pratham}
              alt="content"
            />
            <h3 class="tracking-widest text-white text-xl font-medium title-font text-center  font-modern	">
              Pratham Agarwal
            </h3>
          </div>
        </div>
      </section>
      <div className=" h-[50px] w-auto"></div>

      <section className="w-[85%] p-4 m-auto rounded-[33px] bg-gray-200/15 ">
        <div class="flex justify-center items-center  m-8 text-57 h-47px w-447px">
          <p class="text-center text-3xl h-[50px] w-[447px] border-1 border-black  font-modern text-[45px] font-medium text-white	leading-10  font-modern">
            Marketing Heads
          </p>
        </div>
        <div className="justify-center flex gap-x-[50px]	gap-y-[50px]	">
          <div class=" p-6 rounded-lg">
            <Image
              width={200}
              height={200}
              class="h-[200px] rounded w-[200px] object-cover object-center mb-6"
              src={Manav}
              alt="content"
            />
            <h3 class="tracking-widest text-white text-xl font-medium title-font text-center  font-modern	">
              Manav Kumar
            </h3>
          </div>

          <div class=" p-6 rounded-lg">
            <Image
              width={200}
              height={200}
              class="h-[200px] rounded w-[200px] object-cover object-center mb-6"
              src={Saumyajeet}
              alt="content"
            />
            <h3 class="tracking-widest text-white text-xl font-medium title-font text-center	 font-modern">
              Saumyajeet Behuria
            </h3>
          </div>
        </div>
      </section>
      <div className=" h-[50px] w-auto"></div>
      <section class="text-gray-600 body-font  mb-8 w-[85%] p-4 m-auto rounded-[33px] bg-gray-200/15 ">
        <div class="flex justify-center items-center  m-8 text-57 h-475px w-447px">
          <p class="text-center text-3xl h-[50px] w-[447px] border-1 border-black  font-modern text-[45px] font-medium text-white	leading-10  font-modern">
            Operations Heads
          </p>
        </div>

        <div class="flex justify-center items-center -m-4  gap-x-[25px]  ">
          <div class="xl:w-1/5 md:w-1/5 p-2">
            <div class=" p-2 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-[200px] rounded w-full object-cover object-center mb-6"
                src={Aryan}
                alt="content"
              />
              <h3 class="tracking-widest  text-xl text-white font-medium title-font text-center	 font-modern">
                Aryan Patidar
              </h3>
            </div>
          </div>
          <div class="xl:w-1/5 md:w-1/5 p-2">
            <div class=" p-2 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-[200px] rounded w-full object-cover object-center mb-6"
                src={Dibyanshu}
                alt="content"
              />
              <h3 class="tracking-widest  text-xl font-medium title-font text-center text-white font-modern	">
                Dibyanshu Rout
              </h3>
            </div>
          </div>
          <div class="xl:w-1/5 md:w-1/5 p-2">
            <div class=" p-2 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-[200px] rounded w-full object-cover object-center mb-6"
                src={Manvendra}
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xl font-medium  text-white title-font text-center  font-modern	">
                Manvendra Singh
              </h3>
            </div>
          </div>
        </div>
      </section>
      <div className=" h-[50px] w-auto"></div>
      <section class="text-gray-600 body-font  mb-8 w-[85%] p-4 m-auto rounded-[33px] bg-gray-200/15 ">
        <div class="flex justify-center items-center  m-8 text-57 h-475px w-447px">
          <p class="text-center text-3xl h-[50px] w-[447px] border-1 border-black  font-modern text-[45px] font-medium text-white	leading-10  font-modern">
            Coordinators
          </p>
        </div>

        <div class="flex justify-center items-center -m-4  gap-x-[25px]  ">
          <div class="xl:w-1/5 md:w-1/5 p-2">
            <div class=" p-2 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-[200px] rounded w-full object-cover object-center mb-6"
                src={Raksha}
                alt="content"
              />
              <h3 class="tracking-widest  text-xl text-white font-medium title-font text-center	 font-modern">
                Raksha Kushwaha
              </h3>
            </div>
          </div>
          <div class="xl:w-1/5 md:w-1/5 p-2">
            <div class=" p-2 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-[200px] rounded w-full object-cover object-center mb-6"
                src={Piyush}
                alt="content"
              />
              <h3 class="tracking-widest  text-xl font-medium title-font text-center text-white font-modern	">
                Piyush Kumar
              </h3>
            </div>
          </div>
          <div class="xl:w-1/5 md:w-1/5 p-2">
            <div class=" p-2 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-[200px] rounded w-full object-cover object-center mb-6"
                src={Rajneesh}
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xl font-medium  text-white title-font text-center  font-modern	">
                Rajneesh Kumar
              </h3>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default team;
