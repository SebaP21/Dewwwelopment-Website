

// "use client"
// import { useRef } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"

// const Card = ({ id }: { id: number }) => {
//     const ref = useRef(null)
//     const { scrollYProgress } = useScroll({
//       target: ref,
//       offset: ["start end", "end start"],
//     })

//     const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"])
//     const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])

//     return (
//       <motion.div
//         ref={ref}
//         style={{ y, scale }}
//         className={`h-[90svh] snap-start flex items-center justify-center text-5xl font-bold ${
//           id % 2 === 0 ? "bg-zinc-200" : "bg-emerald-200"
//         }`}
//       >
//         Karta #{id}
//       </motion.div>
//     )
//   }

// const StackedCards = () => (
//     <section className="h-screen overflow-y-scroll snap-y snap-mandatory pt-[10svh]">
//       {[1, 2, 3, 4, 5].map((id) => (
//         <Card key={id} id={id} />
//       ))}
//     </section>
//   )

//   export default StackedCards

"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const cards = [1, 2, 3, 4, 5];

export default function StackedCardsDraggable() {
  const [index, setIndex] = useState(0);

  const handleDragEnd = (
    _: any,
    info: { offset: { y: number }; velocity: { y: number } }
  ) => {
    const offsetY = info.offset.y;
    const velocityY = info.velocity.y;

    // przeciągnięcie w dół
    if (offsetY < -100 || velocityY < -500) {
      if (index < cards.length - 1) {
        // przesuwamy do następnej karty
        setIndex(index + 1);
      } else {
        // jesteśmy na ostatniej karcie -> scroll do #portfolio
        const target = document.getElementById("portfolio");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    // przeciągnięcie w górę
    else if (offsetY > 100 || velocityY > 500) {
      if (index > 0) {
        setIndex(index - 1);
      }
    }
  };

  return (
    <section className="h-screen relative overflow-hidden pt-[10svh] bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="absolute top-0 left-0 w-full h-[90svh] flex items-center justify-center text-5xl font-bold"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background: index % 2 === 0 ? "#d1fae5" : "#e5e7eb",
          }}
        >
          Karta #{cards[index]}
        </motion.div>
      </AnimatePresence>

      {/* Podpowiedź przy ostatniej karcie */}
      {index === cards.length - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm text-gray-600"
        >
          <span className="animate-bounce">⬇️ Przewiń dalej</span>
        </motion.div>
      )}
    </section>
  );
}
