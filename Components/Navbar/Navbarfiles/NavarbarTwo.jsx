"use client";


import React, { useState } from 'react'
import { ChevronDown } from "lucide-react";
import LivingRoom from './LivingRoom';
import DinningRoomMenu from './DinningRoom';
import WebSiteAd from './WebSiteAd'
import { motion } from "framer-motion";



const links = [
  { label: "Living room", dropdown: true },
  { label: "Dining room", dropdown: true },
  { label: "Bedroom", dropdown: true },
  { label: "Decor" },
  { label: "Lightning", dropdown: true },
  { label: "Design Service" },
  { label: "Inspiration" },
  { label: "Sale", sale: true },
  { label: "Blog" },
  { label: "Presets", dropdown: true },
  { label: "Theme Features" },
];



const NavarbarTwo = () => {


  const [activeMenu, setActiveMenu] = useState(null);

  const handleClick = (label) => {
    if (label === "Living room") {
      
     return setActiveMenu(<LivingRoom/>);
  };
  if (label === "Dining room") {

      return setActiveMenu(<DinningRoomMenu/>);
  };
  if (label === "Bedroom"){

    return setActiveMenu(<div className='max-w-50 px-7 py-4 bg-white text-center hover:underline absolute left-135 shadow-xl '>
      <ul className="flex flex-col items-center gap-2">
        <li>Beds</li>
        <li>Continential beds</li>
        <li>Benches</li>
        <li>Chairs</li>
        <li>Night Lamps</li>
        <li>Decor</li>
        <li>View All</li>
      </ul>
    </div>);
  };

  if (label === "Lightning"){

    return setActiveMenu(<div className='max-w-50 px-7 bg-white py-4 text-center hover:underline absolute left-190 shadow-xl '>
      <ul className="flex flex-col items-center gap-2">
        <li>Wall lamp</li>
        <li>Floor lamp</li>
        <li>Table lamp</li>
        <li>Outdoor Lamp</li>   
      <li>View All</li>
      </ul>
    </div>);
  };


  if (label === "Presets") {
    console.log("mouseentwe")

      return setActiveMenu(<WebSiteAd/>);
  };
  


}


  return (
    <div>
      <nav className="hidden w-full justify-center bg-white lg:flex">
      <ul className="flex items-center gap-10 py-3">
        {links.map((l) => (
          <li
            key={l.label}
            onMouseEnter={()=> handleClick(l.label)}
            className={`flex cursor-pointer items-center font-semibold gap-1 whitespace-nowrap  transition hover:opacity-70 hover:underline ${
              l.sale ? "text-[#8b1a1a]" : "text-[#1E1B18]"
            }`}
          >
            {l.label}
            {l.dropdown && <ChevronDown size={14} />}
          </li>
        ))}
      </ul>

    </nav>

    <motion.div
      onMouseLeave={() => setActiveMenu(null)}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 1 }}
      className="absolute pb-5 left-0 right-0 z-50"
    >
      {activeMenu}
    </motion.div>

      
    </div>
  )
}


export default NavarbarTwo