"use client";

import {  useScroll } from "framer-motion";
import { Card } from "./newOfferCard";
import { offerCardsData } from "../offerBox/OfferBox";


export const NewOfferMobile = () => {
	const { scrollYProgress } = useScroll({
	  offset: ["start start", "end end"],
	});
	

	return (
		<section
			className='relative md:hidden pb-[11svh] scroll-mt-[8svh] offerbackground min-h-screen overscroll-contain'
			style={{ scrollMarginTop: "8svh" }}
		>
			{offerCardsData.map((project, i) => {
				const targetScale = 1 - (offerCardsData.length - i) * 0.05;
				return (
					<Card
						key={`p_${i}`}
						i={i}
						{...project}
						url=''
						progress={scrollYProgress}
						range={[i * 0.25, 1.5]}
						targetScale={targetScale}
					/>
				);
			})}
		</section>
	);
};
