"use client";
import { useMotionValue, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CARDS = [
	{ title: "Oferta 1", description: "Opis oferty 1" },
	{ title: "Oferta 2", description: "Opis oferty 2" },
	{ title: "Oferta 3", description: "Opis oferty 3" },
	{ title: "Oferta 4", description: "Opis oferty 4" },
	{ title: "Oferta 5", description: "Opis oferty 5" },
	{ title: "Oferta 6", description: "Opis oferty 6" },
];

const StackedScrollCards = () => {
	const [activeIndex, setActiveIndex] = useState(0);
  const wheelY = useMotionValue(0);
  const THRESHOLD = 100;
  

  // Akumulator i prógi
  useEffect(() => {
    return wheelY.onChange((current) => {
      if (current >= THRESHOLD) {
        setActiveIndex((i) => Math.min(i + 1, CARDS.length - 1));
        wheelY.set(0);
      } else if (current <= -THRESHOLD) {
        setActiveIndex((i) => Math.max(i - 1, 0));
        wheelY.set(0);
      }
    });
  }, [wheelY]);

  // Przechwytujemy wheel na całym ekranie
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    wheelY.set(wheelY.get() + e.deltaY);
  };

  return (
    <motion.div
      onWheel={handleWheel}                                   // <-- tutaj
      className="sticky top-4 w-full h-screen flex items-center justify-center bg-zinc-900 overflow-hidden  touch-none"
    >
      {CARDS.map((card, i) => {
        const offset = i - activeIndex;
        return (
          <motion.div
            key={i}
            className="absolute w-[320px] h-[400px] rounded-2xl p-6 shadow-xl bg-zinc-800 text-white"
            animate={{
              y: offset * 20,
              scale: 1 - Math.abs(offset) * 0.05,
              opacity: offset > 2 || offset < -2 ? 0 : 1,
              zIndex: i === activeIndex ? 20 : 10,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
            <p className="text-gray-300">{card.description}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default StackedScrollCards;
