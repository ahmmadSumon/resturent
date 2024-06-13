import React from 'react'
import AboutUs from '../components/AboutUs'
import WhyChooseUs from '../components/WhyChooseUs'
import HomeDelivery from '../components/HomeDelivery'

const page = () => {
  return (
    <div className='my-20'>
      <AboutUs/>
      <WhyChooseUs/>
      <HomeDelivery/>
    </div>
  )
}

export default page
