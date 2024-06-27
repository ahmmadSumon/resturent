"use client";
import Image from 'next/image';
import { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import image from "../../../public/images/ss.jpg";

const page = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container mx-auto py-5 px-4 md:px-0 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="md:col-span-1">
          <div className="relative h-full">
            <Image src={image} alt="Video Thumbnail" className="w-[800px] h-[600px] object-cover overflow-hidden" />
          </div>
        </div>
        <div className="md:col-span-1 bg-[#111827] flex items-center justify-center p-8">
          <div>
            <h5 className="text-primary font-semibold uppercase tracking-widest text-sm">Reservation</h5>
            <h1 className="text-white text-4xl font-bold mb-4">Book A Table Online</h1>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label htmlFor="name" className="block text-gray-400">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-input bg-gray-700 border-b border-gray-600 text-white px-3 py-2 w-full rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="email" className="block text-gray-400">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input bg-gray-700 border-b border-gray-600 text-white px-3 py-2 w-full rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="datetime" className="block text-gray-400">Date & Time</label>
                  <input
                    type="datetime-local"
                    id="datetime"
                    className="form-input bg-gray-700 border-b border-gray-600 text-white px-3 py-2 w-full rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="select1" className="block text-gray-400">No Of People</label>
                  <select
                    id="select1"
                    className="form-select bg-gray-700 border-b border-gray-600 text-white px-3 py-2 w-full rounded-lg focus:outline-none focus:border-primary"
                    required
                  >
                    <option value="1">One Person</option>
                    <option value="2">Two People</option>
                    <option value="3">5-10 People</option>
                    <option value="4">More than 10 People</option>
                  </select>
                </div>
                <div className="col-span-full">
                  <label htmlFor="message" className="block text-gray-400">Special Request</label>
                  <textarea
                    id="message"
                    className="form-textarea bg-gray-700 border-b border-gray-600 text-white px-3 py-2 w-full rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Special Request"
                    rows={3}
                  ></textarea>
                </div>
                <div className="col-span-full">
                  <button
                    className="bg-[#F14321] text-white py-3 w-full rounded-lg hover:bg-opacity-90 transition duration-300"
                    type="submit"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        ariaHideApp={false}
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="p-4 border-b">
            <h5 className="text-xl font-bold">Youtube Video</h5>
            <button
              type="button"
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setModalIsOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <div className="p-4">
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                allowFullScreen
                allow="autoplay; encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default page;
