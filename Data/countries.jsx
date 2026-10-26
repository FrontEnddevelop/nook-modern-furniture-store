"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import countriesData from "world-countries";
import "flag-icons/css/flag-icons.min.css";
import { ChevronDown } from "lucide-react";

const list = countriesData
  .map((c) => {
    const code = Object.keys(c.currencies || {})[0];
    return {
      name: c.name.common,
      cca2: c.cca2.toLowerCase(),
      code,
      symbol: c.currencies?.[code]?.symbol,
    };
  })
  .filter((c) => c.code)
  .sort((a, b) => a.name.localeCompare(b.name));

export default function CountrySelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    list.find((c) => c.name === "United States") || list[0]
  );

  return (
    <div className="relative hidden sm:block p-2 ">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex justify-between items-center gap-3 text-sm w-auto"
      >
        <span className={`fi fi-${selected.cca2}`} />
        <span>{selected.code} {selected.symbol}</span>
        <ChevronDown size={16}/>
      </button>
      

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ y: -8 ,x:500}}
            animate={{  y: 0 ,x:0}}
            exit={{ opacity:0, y: -8, x:500, duration:0.15}}
            transition={{ duration: 1 }}
            className="relative top-105 right-[-235] z-50 mt-3 max-h-lvh w-100 overflow-y-auto rounded-lg border border-neutral-200 bg-white py-2 shadow-lg"
          >
            {list.map((c) => (
              <li
                key={c.cca2}
                onClick={() => {
                  setSelected(c);
                  setOpen(false);
                }}
                className="flex cursor-pointer items-center gap-3 px-4 py-4 text-sm hover:bg-neutral-100"
              >
                <span className={`fi fi-${c.cca2}`} />
                <span>{c.name}</span>
                <span className="ml-auto text-neutral-600">
                  {c.code} {c.symbol}
                </span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}