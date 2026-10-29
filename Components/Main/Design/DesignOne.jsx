"use client"
import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react'

const TABS = [
  { id: 'new', label: 'New In' },
  { id: 'sofas', label: 'Sofas' },
  { id: 'tables', label: 'Tables' },
]

const BADGE_STYLES = {
  trending: 'bg-blue-700',
  eco: 'bg-[#5a7a5c]',
  sale: 'bg-[#6b2d2d]',
}

const Products = [
  { idx: 1, brand: 'LIGNE ROSET', title: 'Uncover Armchair B', price: 1360, pic: 'Chairs/uncover/produkt-1-1_669822b9-e521-4819-a32c-fe96a57ca5dc.webp', category: 'sofas',
    colors: ['#ffffff', '#5f8f55', '#e4d5a8', '#f08a00'], badges: [{ text: 'Trending', style: 'trending' }] },
  { idx: 2, brand: 'LIGNE ROSET', title: 'Hémicycle Vis-à-Vis Sofa', price: 7810, pic: 'Sofas/produkt-2_198d14cc-af96-4c75-821b-8f722cbf16fd.webp', category: 'sofas',
    colors: ['#1d2f9a', '#5f8f55', '#7d7d7d', '#c9667a'], badges: [] },
  { idx: 3, brand: "UN'COMMON", title: 'Zebu Armchair', price: 1340, oldPrice: 1590, discount: 15, pic: '', category: 'sofas',
    colors: ['#000000'], badges: [{ text: 'Eco Friendly', style: 'eco' }, { text: 'Sale', style: 'sale' }] },
  { idx: 4, brand: 'NORR11', title: 'Naked Side Table 45', price: 590, pic: '', category: 'tables',
    colors: ['#a88a4f', '#5c4636', '#4d7a60'], badges: [] },
  { idx: 5, brand: 'FRITZ HANSEN', title: 'Egg Footrest Fritz Hansen', price: 310, pic: '', category: 'sofas',
    colors: ['#8a6246'], badges: [] },
  { idx: 6, brand: 'MINIFORMS', title: 'Acco Miniform Table', price: 1500, pic: '', category: 'tables',
    colors: ['#e4d5a8'], badges: [] },
  { idx: 7, brand: 'MINIFORMS', title: 'Eclipse Miniforms Table Lamp', price: 320, pic: '', category: 'lighting',
    colors: ['#7d7d7d'], badges: [] },
  { idx: 8, brand: 'HAY', title: 'Accord chair', price: 200, pic: '', category: 'chairs',
    colors: ['#000000', '#ffffff'], badges: [{ text: 'Trending', style: 'trending' }] },
]

const money = (n) =>
  '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

/* ---------- Single product card ---------- */
const ProductCard = ({ item }) => {
  const [color, setColor] = useState(0)

  return (
    <div className="w-[75%] shrink-0 snap-start sm:w-[45%] lg:w-[calc((100%-24px)/4)]">
      {/* Image box */}
      <div className="group relative aspect-square overflow-hidden bg-[#f7f7f7]">
        {item.pic && (
          <img
            src={item.pic}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-contain p-10 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col items-start gap-2">
          {item.badges.map((b) => (
            <span
              key={b.text}
              className={`rounded-full px-3 py-1 text-sm text-white ${BADGE_STYLES[b.style]}`}
            >
              {b.text}
            </span>
          ))}
        </div>

        {/* Quick add */}
        <button
          aria-label="Quick add"
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <Plus size={18} />
        </button>
      </div>

      {/* Info */}
      <div className="mt-3 flex flex-col gap-1">
        <p className="text-[11px] tracking-widest text-neutral-500">{item.brand}</p>
        <p className="text-base text-neutral-900">{item.title}</p>

        <div className="flex items-center gap-2 text-base">
          {item.oldPrice ? (
            <>
              <span className="text-neutral-900 line-through">{money(item.oldPrice)}</span>
              <span className="text-[#6b2d2d]">{money(item.price)}</span>
              <span className="rounded-full bg-[#6b2d2d] px-2 py-0.5 text-xs text-white">
                -{item.discount}%
              </span>
            </>
          ) : (
            <span className="text-neutral-900">{money(item.price)}</span>
          )}
        </div>

        {/* Color swatches */}
        <div className="mt-1 flex gap-2">
          {item.colors.map((c, i) => (
            <button
              key={c + i}
              onClick={() => setColor(i)}
              aria-label={`Color ${i + 1}`}
              style={{ backgroundColor: c }}
              className={`h-5 w-5 rounded-full border border-neutral-300 transition-all ${
                color === i ? 'ring-2 ring-neutral-900 ring-offset-2' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- Section ---------- */
const DesignEdit = () => {
  const [tab, setTab] = useState('new')
  const [bar, setBar] = useState({ thumb: 100, left: 0 })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)
  const scrollRef = useRef(null)

  const items = tab === 'new' ? Products : Products.filter((p) => p.category === tab)

  const update = () => {
    const el = scrollRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const thumb = (el.clientWidth / el.scrollWidth) * 100
    const left = max > 0 ? (el.scrollLeft / max) * (100 - thumb) : 0
    setBar({ thumb, left })
    setCanPrev(el.scrollLeft > 5)
    setCanNext(el.scrollLeft < max - 5)
  }

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [tab])

  const slide = (dir) => {
    const el = scrollRef.current
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <section className="w-full bg-white px-6 py-16 md:px-20">
      <p className="text-xs tracking-[0.2em] text-neutral-800">SEASONAL SPOTLIGHT</p>
      <h2 className="mt-4 text-5xl font-sans text-neutral-900">The Design Edit</h2>

      {/* Tabs */}
      <div className="mt-6 flex gap-6">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`text-base underline-offset-8 ${
              tab === t.id ? 'underline text-neutral-900' : 'text-neutral-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative mt-8">
        <motion.div
          key={tab}
          ref={scrollRef}
          onScroll={update}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <ProductCard key={item.idx} item={item} />
          ))}
        </motion.div>

        {/* Arrows */}
        {canPrev && (
          <button
            onClick={() => slide(-1)}
            aria-label="Previous"
            className="absolute left-0 top-[35%] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md"
          >
            <ArrowLeft size={20} />
          </button>
        )}
        {canNext && (
          <button
            onClick={() => slide(1)}
            aria-label="Next"
            className="absolute right-0 top-[35%] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md"
          >
            <ArrowRight size={20} />
          </button>
        )}
      </div>

      {/* Progress bar */}
      <div className="relative mt-8 h-0.75 w-full bg-neutral-200">
        <div
          className="absolute top-0 h-full bg-neutral-700 transition-[left] duration-150"
          style={{ width: `${bar.thumb}%`, left: `${bar.left}%` }}
        />
      </div>
    </section>
  )
}

export default DesignEdit