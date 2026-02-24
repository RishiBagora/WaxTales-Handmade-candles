import React from 'react'
import Hero from '../components/home/Hero'
import FeaturedProducts from '../components/home/FeaturedProducts'
import CategoriesPreview from '../components/home/CategoriesPreview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import TestimonialsPreview from '../components/home/TestimonialsPreview'
import WhatsAppBanner from '../components/home/WhatsAppBanner'

const Home = () => {
  return (
    <div>
        <Hero/>
        <FeaturedProducts/>
        <CategoriesPreview/>
        <WhyChooseUs/>
        <TestimonialsPreview/>
        <WhatsAppBanner/>
    </div>
  )
}

export default Home