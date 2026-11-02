import React from 'react'
import Navbar from '@/Components/Navbar/Navbar'
import HeroSection from '@/Components/HeroSection/HeroSection'
import Main from '@/Components/Main/Main'
import FooterSec from '@/Components/Footer/FooterSec'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Main/>
      <FooterSec/>
    </div>
  )
}

export default page