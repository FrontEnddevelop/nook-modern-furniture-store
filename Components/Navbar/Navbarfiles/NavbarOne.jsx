"use client";

import React from 'react'
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, CircleUser, ShoppingCart, ChevronDown } from "lucide-react" 

const LOGO_URL = "/Nook-logo.svg";

const currencies = [
  { code: "USD", flag: "https://flagcdn.com/w40/us.png" },
  { code: "EUR", flag: "https://flagcdn.com/w40/eu.png" },
  { code: "GBP", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "PKR", flag: "https://flagcdn.com/w40/pk.png" },
];

const NavbarOne = () => {
    const [focused, setFocused] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [currency, setCurrency] = useState(currencies[0]);
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
          <div className="relative hidden sm:block">
            <button
              onClick={() => setCurrencyOpen((o) => !o)}
              className="flex items-center gap-1.5 text-sm text-neutral-700"
            >
              <img src={currency.flag} alt="" className="h-4 w-6 object-cover" />
              {currency.code}
              <motion.span animate={{ rotate: currencyOpen ? 180 : 0 }}>
                <ChevronDown size={14} />
              </motion.span>
            </button>

            <AnimatePresence>
              {currencyOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-3 w-32 rounded-lg border border-neutral-200 bg-white py-2 shadow-lg"
                >
                  {currencies.map((c) => (
                    <li key={c.code}>
                      <button
                        onClick={() => {
                          setCurrency(c);
                          setCurrencyOpen(false);
                        }}
                        className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-neutral-100"
                      >
                        <img src={c.flag} alt="" className="h-4 w-6 object-cover" />
                        {c.code}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

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