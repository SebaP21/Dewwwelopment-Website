
"use client";

// import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";
// import { useRef, useEffect } from "react";
import { Card } from "./newOfferCard";
import { offerCardsData } from "../offerBox/OfferBox";

export const NewOfferMobile = () => {
	// 1) usuwamy target — Framer Motion mierzy teraz window.scroll
	const { scrollYProgress } = useScroll({
	  offset: ["start start", "end end"],
	});
  
	
  
	return (
	  // 3) sekcji nadajemy klasę `relative`, ale nie musi to być ref-used-scroll
	  <section className='relative md:hidden pb-[11svh] scroll-m-[8svh] offerbackground'>
		{offerCardsData.map((project, i) => {
		  const targetScale = 1 - (offerCardsData.length - i) * 0.07;
		  return (
			<Card
			  key={`p_${i}`}
			  i={i}
			  {...project}
			  url=""
			  progress={scrollYProgress}
			  range={[i * 0.25, 2]}
			  targetScale={targetScale}
			/>
		  );
		})}
	  </section>
	);
  };
