"use client";
import React from "react";
import { motion } from "framer-motion";

const products = [
  { brand: "Miniforms", name: "Acco Miniform Table", price: "$1,500.00", img: "/Tables/Acco/stol-acco-240x120-orzech-miniforms.webp" },
  { brand: "Hay", name: "Accord chair", price: "$200.00", img: "/Chairs/accord/chair-acc-main.webp" },
  { brand: "Sits", name: "Alex sofa", price: "$1,800.00", img: "/Sofas/Alex/sofa-alex-blue.webp" },
  { brand: "Normann Copenhagen", name: "Amédée Chair", price: "$2,010.00", img: "/Chairs/Aemeede/produkt-5-5_8491d8af-490a-42a9-b56c-155481dfddc9.webp" },
  { brand: "Ligne Roset", name: "Anda Armchair", price: "$3,700.00", img: "/Chairs/Anda Chair/produkt-8-3_25cad519-3c40-48ad-be57-df893087fa36.webp" },
];

const sections = [
  { title: "Popular searches", links: ["Table", "Chairs", "Lamp"] },
  { title: "Popular collections", links: ["Beds", "Chairs", "Benches", "Lightning"] },
  {
    title: "Useful links",
    links: ["Tables", "Chairs", "Stools", "Benches", "Storage", "Decor", "TV Cabinets", "Armchairs", "Wardrobes and bookcases"],
  },
];

export default function SearchBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.15 }}
      className="w-full bg-white px-80 py-12  text-neutral-900"
    >
      <h2 className="text-center font-sans mb-5 text-[21px]">Trending searches</h2>

      <div className="flex">
        {/* Left: popular products */}
        <div className="flex-1">
          <h3 className="mb-3 font-sans text-[17px] ">Popular products</h3>
          <div className="grid grid-cols-2 w-190 gap-x-0 gap-y-5">
            {products.map((p) => (
              <a key={p.name} href="#" className="group flex items-center gap-5">
                <div className="h-22.5 w-22.5 shrink-0 bg-neutral-100">
                  <img src={p.img} alt={p.name} className="h-full w-full object-contain" />
                </div>
                <div>
                  <p className="text-xs uppercase text-neutral-400 group-hover:text-blue-400">
                    {p.brand}
                  </p>
                  <p className="text-base group-hover:text-blue-600">{p.name}</p>
                  <p className="text-base">{p.price}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: link lists */}
        <div className="w-117.5 border-l px-10 border-neutral-200">
          {sections.map((s, i) => (
            <div
              key={s.title}
              className={i > 0 ? "mt-5 border-t border-neutral-200 pt-5" : " font-sans"}
            >
              <h3 className="mb-2 text-base">{s.title}</h3>
              <ul className="space-y-1.5">
                {s.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-neutral-700 hover:underline">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}