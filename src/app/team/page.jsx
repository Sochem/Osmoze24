import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import osmoze from '../image/oszome.png';

const team = () => {
  return (
    <>
      <Navbar />
      <div class="flex justify-center items-center  m-8 text-57 h-47px w-447px">
        <p class=" text-orange-600	text-center text-5xl h-[50px] w-[447px] border-1 border-black font family-Modern Antiqua">
          MEET OUR TEAMS
        </p>
      </div>
      <div className="justify-center flex gap-x-[50px]	gap-y-[500px]	">
        <div class="bg-gray-100 p-6 rounded-lg">
          <Image
            width={200}
            height={200}
            class="h-[250px] rounded w-[250px] object-cover object-center mb-6"
            src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
            alt="content"
          />
          <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
            Vice President
          </h3>
          <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
            Dipansh Jain
          </h3>
        </div>

        <div class="bg-gray-100 p-6 rounded-lg">
          <Image
            width={200}
            height={200}
            class="h-[250px] rounded w-[250px] object-cover object-center mb-6"
            src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
            alt="content"
          />
          <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
            General Secretary
          </h3>
          <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
            Aman Sharma
          </h3>
        </div>
      </div>
      <div className="w-[50px] h-[50px]"></div>

      <section class="text-gray-600 body-font">
        <div class="flex justify-center items-center -m-4 ">
          <div class="xl:w-1/5 md:w-1/5 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-324px rounded w-half object-cover object-center mb-6"
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
                Joint Gen.Secretaries
              </h3>
              <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
                Visham Rohilla
              </h3>
            </div>
          </div>
          <div class="xl:w-1/5 md:w-1/5 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-324px rounded w-full object-cover object-center mb-6"
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
                Convener
              </h3>
              <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
                Sumit Jena
              </h3>
            </div>
          </div>
          <div class="xl:w-1/5 md:w-1/5 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-324px rounded w-full object-cover object-center mb-6"
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
                Joint Gen. Secretaries
              </h3>
              <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
                Harsh Mishra
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font  ">
        <div class="flex justify-center items-center  m-8 text-57 h-475px w-447px">
          <p class="text-center text-3xl h-[50px] w-[447px] border-1 border-black font family-Modern Antiqua">
            Tech Heads
          </p>
        </div>

        <div class="flex justify-center items-center -m-4 ">
          <div class="xl:w-1/5 md:w-1/5 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-324px rounded w-half object-cover object-center mb-6"
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
                Devansh Choudhary
              </h3>
            </div>
          </div>
          <div class="xl:w-1/5 md:w-1/5 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-324px rounded w-full object-cover object-center mb-6"
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
                Deepshikha Sinha
              </h3>
            </div>
          </div>
          <div class="xl:w-1/5 md:w-1/5 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-324px rounded w-full object-cover object-center mb-6"
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
                Pranjal Rajout
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="flex justify-center items-center  m-8 text-57 h-47px w-447px">
          <p class="text-center text-3xl h-[50px] w-[447px] border-1 border-black font family-Modern Antiqua">
            Design Heads
          </p>
        </div>
        <div className="justify-center flex gap-x-[50px]	gap-y-[50px]	">
          <div class="bg-gray-100 p-6 rounded-lg">
            <Image
              width={200}
              height={200}
              class="h-[200px] rounded w-[200px] object-cover object-center mb-6"
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
              Anukriti
            </h3>
          </div>

          <div class="bg-gray-100 p-6 rounded-lg">
            <Image
              width={200}
              height={200}
              class="h-[200px] rounded w-[200px] object-cover object-center mb-6"
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
              Amber Asthana
            </h3>
          </div>
        </div>
      </section>

      <section>
        <div class="flex justify-center items-center  m-8 text-57 h-47px w-447px">
          <p class="text-center text-3xl h-[50px] w-[447px] border-1 border-black font family-Modern Antiqua">
            PR Heads
          </p>
        </div>
        <div className="justify-center flex gap-x-[50px]	gap-y-[50px]	">
          <div class="bg-gray-100 p-6 rounded-lg">
            <Image
              width={200}
              height={200}
              class="h-[200px] rounded w-[200px] object-cover object-center mb-6"
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
              Ajit Prajadarshi
            </h3>
          </div>

          <div class="bg-gray-100 p-6 rounded-lg">
            <Image
              width={200}
              height={200}
              class="h-[200px] rounded w-[200px] object-cover object-center mb-6"
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
              Mrunal Bhagat
            </h3>
          </div>
        </div>
      </section>

      <section>
        <div class="flex justify-center items-center  m-8 text-57 h-47px w-447px">
          <p class="text-center text-3xl h-[50px] w-[447px] border-1 border-black font family-Modern Antiqua">
            Branding Heads
          </p>
        </div>
        <div className="justify-center flex gap-x-[50px]	gap-y-[50px]	">
          <div class="bg-gray-100 p-6 rounded-lg">
            <Image
              width={200}
              height={200}
              class="h-[200px] rounded w-[200px] object-cover object-center mb-6"
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
              Harsh Jain
            </h3>
          </div>

          <div class="bg-gray-100 p-6 rounded-lg">
            <Image
              width={200}
              height={200}
              class="h-[200px] rounded w-[200px] object-cover object-center mb-6"
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
              Pratham Agarwal
            </h3>
          </div>
        </div>
      </section>

      <section>
        <div class="flex justify-center items-center  m-8 text-57 h-47px w-447px">
          <p class="text-center text-3xl h-[50px] w-[447px] border-1 border-black font family-Modern Antiqua">
            Marketing Heads
          </p>
        </div>
        <div className="justify-center flex gap-x-[50px]	gap-y-[50px]	">
          <div class="bg-gray-100 p-6 rounded-lg">
            <Image
              width={200}
              height={200}
              class="h-[200px] rounded w-[200px] object-cover object-center mb-6"
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
              Manav Kumar
            </h3>
          </div>

          <div class="bg-gray-100 p-6 rounded-lg">
            <Image
              width={200}
              height={200}
              class="h-[200px] rounded w-[200px] object-cover object-center mb-6"
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
              alt="content"
            />
            <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
              Saumyajeet Behuria
            </h3>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font  mb-8">
        <div class="flex justify-center items-center  m-8 text-57 h-475px w-447px">
          <p class="text-center text-3xl h-[50px] w-[447px] border-1 border-black font family-Modern Antiqua">
            Operations Heads
          </p>
        </div>

        <div class="flex justify-center items-center -m-4 ">
          <div class="xl:w-1/5 md:w-1/5 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-324px rounded w-half object-cover object-center mb-6"
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
                Aryan Patidar
              </h3>
            </div>
          </div>
          <div class="xl:w-1/5 md:w-1/5 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-324px rounded w-full object-cover object-center mb-6"
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
                Dibyanshu Rout
              </h3>
            </div>
          </div>
          <div class="xl:w-1/5 md:w-1/5 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <Image
                width={200}
                height={200}
                class="h-324px rounded w-full object-cover object-center mb-6"
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-lg font-medium title-font text-center	">
                Manvendra Singh
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
