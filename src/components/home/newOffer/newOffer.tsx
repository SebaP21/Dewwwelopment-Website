"use client";

import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import { Card } from "./newOfferCard";
import { offerCardsData } from "../offerBox/OfferBox";

export const NewOffer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section ref={container} className=" mb-[1svh] scroll-m-[9svh]">
      {offerCardsData.map((project, i) => {
        const targetScale = 1 - (offerCardsData.length - i) * 0.05;

        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            url={""}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};
