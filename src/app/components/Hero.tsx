import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Img from '../../../public/images/cover.jpg'; // Ensure this path is correct
import Img2 from "../../../public/images/Rectangle.png"
import { MdDeliveryDining } from "react-icons/md";
const Hero = () => {
  return (
    <section className="hero md:h-[70vh] flex justify-center items-center relative overflow-hidden mt-14">
      <div className="hero-content  flex flex-col gap-8 items-center justify-center px-4 md:px-20 lg:px-40">
        <div className="container flex flex-col md:flex-row justify-between items-center mt-2 py-4 space-y-8 md:space-y-0">
          
          {/* Left column (text content) */}
          <div className="w-full md:w-[40vw] relative bg-cover bg-center rounded-lg p-6" style={{ backgroundImage: `url(${Img2.src})` }}>
            <div className=" bg-opacity-60 py-6 rounded-lg">
              <h1 className="text-4xl md:text-6xl  text-[#111827] font-extrabold w-full">
                The best food experience in <span className='text-[#F14321]'> Parbatipur</span> 
              </h1>
              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <Link href="/menu" passHref>
                <button className="text-lg text-white bg-[#F14321] hover:bg-gray-200 hover:text-[#000] hover:shadow-md px-3 py-2 flex justify-center items-center gap-2 rounded-md font-medium transition duration-300"><MdDeliveryDining  size={24}/> Order Online</button>
                </Link>
                <Link href="/table" passHref>
                <button className="text-lg text-white bg-[#F14321] hover:bg-gray-200 hover:text-[#000] hover:shadow-md px-3 py-2 flex justify-center items-center gap-2 rounded-md font-medium transition duration-300"> Book a Table</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right column (image) */}
          <div className="w-full md:w-[60vw] flex justify-center">
            <Image
              src={Img}
              alt="Frontend Developer"
              layout="responsive"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
