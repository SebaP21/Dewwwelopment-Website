"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const images = [1, 2, 3, 4, 5]

export default function Parallax() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={ref} className="parallax-section">
      <div className="sticky-container">
        {images.map((img, i) => {
          const progress = useTransform(scrollYProgress, [i / images.length, (i + 1) / images.length], [0, 1])
          const y = useTransform(progress, [0, 1], ["100%", "0%"])
          const zIndex = images.length - i

          return (
            <motion.div
              key={img}
              className="card"
              style={{ y, zIndex }}
            >
              <img src={`/photos/cityscape/${img}.jpg`} alt={`Image #${img}`} />
              <h2>{`#00${img}`}</h2>
            </motion.div>
          )
        })}
      </div>
      <StyleSheet />
    </section>
  )
}

function StyleSheet() {
  return (
    <style>{`
      .parallax-section {
        position: relative;
        height: 500vh; /* enough for scroll trigger */
        width: 100%;
      }

      .sticky-container {
        position: sticky;
        top: 7svh; /* leave space for sticky header */
        height: 93svh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .card {
        position: absolute;
        width: 300px;
        height: 400px;
        background: white;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      .card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
      }

      .card h2 {
        position: absolute;
        bottom: 10px;
        left: 10px;
        color: white;
        font-size: 24px;
        font-family: monospace;
        text-shadow: 0 2px 4px rgba(0,0,0,0.6);
      }

      @media (max-width: 768px) {
        .card {
          width: 150px;
          height: 200px;
        }

        .card h2 {
          font-size: 16px;
        }
      }
    `}</style>
  )
}


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

// "use client";
// /* eslint-disable @typescript-eslint/no-explicit-any */

// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";

// const cards = [1, 2, 3, 4, 5];

// export default function StackedCardsDraggable() {
//   const [index, setIndex] = useState(0);

//   const handleDragEnd = (
//     _: any,
//     info: { offset: { y: number }; velocity: { y: number } }
//   ) => {
//     const offsetY = info.offset.y;
//     const velocityY = info.velocity.y;

//     // przeciągnięcie w dół
//     if (offsetY < -100 || velocityY < -500) {
//       if (index < cards.length - 1) {
//         // przesuwamy do następnej karty
//         setIndex(index + 1);
//       } else {
//         // jesteśmy na ostatniej karcie -> scroll do #portfolio
//         const target = document.getElementById("portfolio");
//         if (target) {
//           target.scrollIntoView({ behavior: "smooth" });
//         }
//       }
//     }
//     // przeciągnięcie w górę
//     else if (offsetY > 100 || velocityY > 500) {
//       if (index > 0) {
//         setIndex(index - 1);
//       }
//     }
//   };

//   return (
//     <section className="h-screen relative overflow-hidden pt-[10svh] bg-white">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           drag="y"
//           dragConstraints={{ top: 0, bottom: 0 }}
//           dragElastic={0.2}
//           onDragEnd={handleDragEnd}
//           className="absolute top-0 left-0 w-full h-[90svh] flex items-center justify-center text-5xl font-bold"
//           initial={{ y: 300, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -300, opacity: 0 }}
//           transition={{ duration: 0.4 }}
//           style={{
//             background: index % 2 === 0 ? "#d1fae5" : "#e5e7eb",
//           }}
//         >
//           Karta #{cards[index]}
//         </motion.div>
//       </AnimatePresence>

//       {/* Podpowiedź przy ostatniej karcie */}
//       {index === cards.length - 1 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm text-gray-600"
//         >
//           <span className="animate-bounce">⬇️ Przewiń dalej</span>
//         </motion.div>
//       )}
//     </section>
//   );
// }
