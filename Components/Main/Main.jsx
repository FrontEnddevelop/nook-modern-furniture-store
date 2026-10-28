import React from 'react'
import ShopByDepartment from './ProductOne/ShopByDepartment'
import FeaturedGrid  from './ProductOne/FeaturedGrid'
import DesignOne from './Design/DesignOne'

const Main = () => {
  return (
    <div className='pt-20'>
         <ShopByDepartment/>
         <FeaturedGrid />
         {/* <DesignOne/> */}
    </div>
  )
}

export default Main