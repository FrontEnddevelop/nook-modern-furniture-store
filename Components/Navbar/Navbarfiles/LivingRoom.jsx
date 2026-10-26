import React from 'react'


const Data =[
    {
        label:"Sofas",
        picture:"Theme Images/sofa-bg.webp"
    },
    {
        label:"Chairs",
        picture:"Theme Images/chair-xx.webp"
    },
    {
        label:"Tables",
        picture:"Theme Images/table-x.webp"
    },
    {
        label:"TV Cabinets",
        picture:"Theme Images/side-1.webp"
    },
    {
        label:"Lamps",
        picture:"Theme Images/light-01_4abf2158-6833-4d09-9f00-889519fde2c1.webp"
    }
]

const LivingRoom = () => {
  return (
    <div className='flex justify-around px-15 pt-5 bg-white'>
        {Data.map((l)=>{

            return(
                <div key={l.label} className='flex flex-col items-center gap-2 mt-2'>
                    
                        <img className='h-67' src={l.picture} alt="" />
                        <div>
                        {l.label}
                    
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default LivingRoom