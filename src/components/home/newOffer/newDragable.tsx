"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./newOfferCard";
import { offerCardsData } from "../offerBox/OfferBox";

export const NewOfferMobileDraggable = () => {
  const [index, setIndex] = useState(0);

  const handleDragEnd = (
    _: any,
    info: { offset: { y: number }; velocity: { y: number } }
  ) => {
    const { y: offsetY } = info.offset;
    const { y: velocityY } = info.velocity;

    // jeżeli pociągnięcie w dół przekroczy próg
    if (offsetY < -80 || velocityY < -500) {
      setIndex((prev) => Math.min(prev + 1, offerCardsData.length - 1));
    }
    // jeżeli pociągnięcie w górę przekroczy próg
    else if (offsetY > 80 || velocityY > 500) {
      setIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section className="relative md:hidden h-screen overflow-hidden pt-[8svh]">
      <AnimatePresence mode="wait">
        {offerCardsData.map((project, i) =>
          i === index ? (
            <motion.div
              key={i}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100vh", opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute top-[8svh] left-0 w-full h-[90svh] flex items-center justify-center"
            >
              <Card
                i={i}
                {...project}
                url={project.path}
                progress={undefined}      // już nie używamy useScroll
                range={undefined}         // niepotrzebne w tej wersji
                targetScale={1}           // skala ustalana przez Card
              />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Pojawia się po ostatniej karcie zachęta do dalszego scrolla */}
      {index === offerCardsData.length - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-600"
        >
          <span className="animate-bounce">⬇️ Przewiń dalej</span>
        </motion.div>
      )}
    </section>
  );
};
