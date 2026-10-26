"use client";

import React from 'react';
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, CircleUser, ShoppingCart, ChevronDown } from "lucide-react" 
import CountrySelector from '@/Data/countries'

const LOGO_URL = "/Nook-logo.svg";


const NavbarOne = () => {
  const [focused, setFocused] = useState(false);
  const [cartCount] = useState(0);
  return (
    <>
    <div>
        <header className="sticky top-0 z-40 bg-white">
      <div className="mx-auto flex h-20 max-w-[1800px] items-center justify-between gap-6 px-6 md:px-20">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          {LOGO_URL ? (
            <img src={LOGO_URL} alt="Nook" className="h-9 w-auto" />
          ) : (
            <span className="text-4xl font-semibold tracking-tight text-neutral-700">
              NOOK
            </span>
          )}
        </Link>

        {/* Search bar (desktop) */}
        <motion.div
          className="hidden w-full max-w-170 items-center gap-4 rounded-full border bg-white px-7 py-3 md:flex"
          animate={{
            borderColor: focused ? "#262626" : "#d4d4d4",
            boxShadow: focused
              ? "0 4px 20px rgba(0,0,0,0.08)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.2 }}
        >
          <Search size={22} className="shrink-0 text-neutral-800" />
          <input
            type="text"
            placeholder="What can we help you find?"
            className="w-full bg-transparent text-sm text-neutral-800 outline-none placeholder:text-neutral-400"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </motion.div>

        {/* Right side */}
        <div className="flex shrink-0 items-center gap-5">
          {/* Mobile search icon */}
          <button className="md:hidden" aria-label="Search">
            <Search size={22} />
          </button>

          {/* Currency */}
          <CountrySelector/>

          {/* Account */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Account"
          >
            <CircleUser size={28} strokeWidth={1.6} />
          </motion.button>

          {/* Cart */}
          <motion.button
            className="relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Cart"
          >
            <ShoppingCart size={28} strokeWidth={1.6} />
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0.4 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-[11px] text-white"
              >
                {cartCount}
              </motion.span>
            )}
          </motion.button>
        </div>
      </div>
    </header>

    </div>
    </>
  )
}

export default NavbarOne