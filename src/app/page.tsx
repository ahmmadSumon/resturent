import React from 'react'
import Hero from './components/Hero'
import FoodMenu from './components/FoodMenu'
import ReservationSection from './components/ReservationSection'
import WhyChooseUs from './components/WhyChooseUs'
import AboutUs from './components/AboutUs'
import Testimonials from './components/Testimonials'
import HomeDelivery from './components/HomeDelivery'

const page = () => {
  return (
    <div className='bg-[#FCF8EA]'>
      <Hero/>
      <FoodMenu/>
      <WhyChooseUs/>
      <ReservationSection/>
      <HomeDelivery/>
     <Testimonials/>
      <AboutUs/>
     
    </div>
  )
}

export default page;