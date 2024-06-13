"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import contactImage from '../../../public/images/fhg.png';
import WhyChooseUs from '../components/WhyChooseUs';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    // Add form submission logic here (e.g., send data to an API)
  };

  return (
    <div className='my-10 py-10'>
      <WhyChooseUs/>
      <div className="container mx-auto my-10 py-10 px-8 bg-[#111827] text-white rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 lg:pr-8">
          <div className="text-center lg:text-left animate-fadeInUp">
            <h5 className="font-secondary py-3 text-2xl font-normal uppercase tracking-widest text-[#F14321]">Contact Us</h5>
            <h2 className="mb-5 text-4xl font-bold">Get in Touch</h2>
          </div>
          <form onSubmit={handleSubmit} className="px-8 lg:px-0">
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#F14321] text-black"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#F14321] text-black"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2" htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#F14321] text-black"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#F14321] text-black"
                rows={4}
              ></textarea>
            </div>
            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-[#F14321] text-white rounded-lg hover:bg-red-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <Image src={contactImage} alt="Contact Us" className="rounded-lg shadow-lg object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
