import Image from "next/image";
import facebook from "../image/facebook2.png";
import instagram from "../image/insta.png";
import linkedin from "../image/linkedin2.png";
import osmoze from "../image/osmoze2.png";

export default function Home() {
  return (
    <>
      <footer className="h-[280px] w-full mt-auto bg-[#07000B] bg-opacity-70 text-white">
        <div className="container mx-auto">
          <div className="flex text-[#8DD5FF] font-serif tracking-wider md:text-xl text-sm">
            <section className="flex w-1/3 p-2">
              <div className="flex flex-col text-base md:text-2xl justify-center align-middle">
                <h1 className="text-xl md:text-2xl text-center">
                  Osmoze&apos;24
                </h1>
                <p className="">The Annual Chemical Extravaganza</p>
              </div>
            </section>
            <div className="mx-auto justify-center items-center ">
              <Image
                src={osmoze}
                alt=""
                height={200}
                width={200}
              />
              <div className="flex flex-col mb-3 md:flex-row md:gap-x-5 md:justify-center mx-auto mt-2">
                <div className="flex gap-x-3 md:gap-x-5 justify-center">
                  <a href="https://www.facebook.com/Sochem.iitbhu/">
                    <Image src={facebook} width={30} height={30} alt="" />
                  </a>
                  <a href="https://www.instagram.com/sochem_iitbhu/">
                    <Image src={instagram} width={30} height={30} alt="" />
                  </a>
                  <a href="https://www.linkedin.com/in/sochem/">
                    <Image src={linkedin} width={30} height={30} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <section className="w-1/3 pl-2 flex flex-col justify-center align-middle md:gap-y-12 gap-y-5 md:gap-6 p-4">
              <div className="flex p-2 mx-auto md:gap-x-5 mt-3 md:mt-5 gap-x-3 md:justify-end">
                <div>
                  <p>Contact Us</p>
                  <p className="text-base text-white">Aman Sharma</p>
                  <p className="font-mono text-base text-white">
                    +91 9875743847
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="text-center text-sm">
            <hr className="mt-5 md:mt-0 border-[1.5px] border-sky-400 shadow-md" />
            <p>&#169; 2023 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
