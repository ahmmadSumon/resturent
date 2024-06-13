// components/AboutUs.tsx
import React from 'react';
import img from '../../../public/images/sds.png'
import Image from 'next/image';
const AboutUs: React.FC = () => {
  return (
    <section className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
              Welcome to
              <br />
              Our Restaurant
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
              Our restaurant offers a delightful culinary experience, combining traditional flavors with modern twists. We pride ourselves on using the freshest ingredients and providing exceptional service.
            </p>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                <span className="relative"> Have a question? </span>
              </span>
              <br className="block sm:hidden" />
              Reach out to us on{' '}
              <a
                href="#"
                title=""
                className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
              >
                Facebook
              </a>
            </p>
          </div>
          <div className="relative">
            <img
              className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt=""
            />
            <Image
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src={img}
              alt="Restaurant Chef"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
