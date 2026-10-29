import React from 'react'
import ShopByDepartment from './ProductOne/ShopByDepartment'
import FeaturedGrid  from './ProductOne/FeaturedGrid'
import AnimationProducer from './Design/AnimationProducer'
import DesignOne from './Design/DesignOne'

const Main = () => {
  return (
    <div className='pt-20'>
         <ShopByDepartment/>
         <FeaturedGrid />
         <AnimationProducer/>
         {/* <DesignOne/> */}
    </div>
  )
}

export default Main