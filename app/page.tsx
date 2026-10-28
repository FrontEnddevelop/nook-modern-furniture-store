import React from 'react'
import Navbar from '@/Components/Navbar/Navbar'
import HeroSection from '@/Components/HeroSection/HeroSection'
import Main from '@/Components/Main/Main'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Main/>
    </div>
  )
}

export default page