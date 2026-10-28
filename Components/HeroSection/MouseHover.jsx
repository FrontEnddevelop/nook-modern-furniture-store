"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HeroCursor({ children, onDirection  }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [side, setSide] = useState("left");

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;  
    const y = e.clientY - rect.top;
    setPos({ x, y });
    setSide(x < rect.width / 2 ? "left" : "right");
  };

  const handleClick = () => {
    onDirection?.(side === "left" ? -1 : 1);
  };
  return (
    <section
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMove}
      onClick={handleClick}
      className="relative cursor-none overflow-hidden"
    >
      {children}

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, x: pos.x - 24, y: pos.y - 24 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              x: { type: "spring", stiffness: 500, damping: 40, mass: 0.4 },
              y: { type: "spring", stiffness: 500, damping: 40, mass: 0.4 },
              opacity: { duration: 0.15 },
              scale: { duration: 0.15 },
            }}
            className="pointer-events-none absolute left-0 top-0 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-md"
          >
            {side === "left" ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}