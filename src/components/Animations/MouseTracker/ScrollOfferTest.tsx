"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";

export type OfferCardProps = {
	src: string;
	title: string;
	description: string;
	path: string;
	color: string;
};

type OfferCardPropsData = {
	data: OfferCardProps[];
};

export const OfferScrollSection: FC<OfferCardPropsData> = ({ data }) => {
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const [index, setIndex] = useState(0);
	const isAnimating = useRef(false);

	const textY = useMotionValue(0);
	const imageY = useMotionValue(0);

	const handleWheel = (e: WheelEvent) => {
		if (isAnimating.current) return;

		isAnimating.current = true;
		const direction = e.deltaY > 0 ? 1 : -1;

		setIndex((prev) => {
			const next = Math.max(0, Math.min(data.length - 1, prev + direction));
			const offset = -next * window.innerHeight;

			animate(textY, offset, { duration: 0.6, ease: "easeOut" });
			animate(imageY, offset, { duration: 0.6, ease: "easeOut" });

			setTimeout(() => (isAnimating.current = false), 600);
			return next;
		});
	};

	useEffect(() => {
		const ref = sectionRef.current;
		if (!ref) return;

		ref.addEventListener("wheel", handleWheel, { passive: false });

		return () => ref.removeEventListener("wheel", handleWheel);
	}, [data]);

	return (
		<section
			ref={sectionRef}
			id="oferta"
			className="relative w-full h-screen bg-zinc-950 overflow-hidden"
		>
			<div className="flex h-full">
				{/* Tekst */}
				<div className="w-1/2 relative overflow-hidden">
					<motion.div style={{ y: textY }} className="absolute w-full">
						{data.map((product, i) => {
							const isEven = i % 2 === 0;
							return (
								<div
									key={i}
									className={`h-screen flex flex-col justify-center gap-8 p-8 transition-colors duration-300 ${
										isEven ? "bg-zinc-950" : "bg-white"
									}`}
								>
									<h2
										className={`text-5xl font-bold ${
											isEven ? "text-white" : "text-black"
										}`}
									>
										{product.title}
									</h2>
									<p
										className={`text-xl ${
											isEven ? "text-white" : "text-zinc-800"
										}`}
									>
										{product.description}
									</p>
									<Link
										href={product.path}
										className={`underline ${
											isEven ? "text-white" : "text-black"
										}`}
									>
										Dowiedz się więcej
									</Link>
								</div>
							);
						})}
					</motion.div>
				</div>

				{/* Obrazy */}
				<div className="w-1/2 relative overflow-hidden">
					<motion.div style={{ y: imageY }} className="absolute w-full">
						{[...data].reverse().map((product, i) => (
							<div
								key={i}
								className="h-screen flex items-center justify-center"
							>
								<video
									className="w-full h-full object-cover"
									autoPlay
									loop
									muted
									playsInline
								>
									<source src={`/assets/video/${product.src}`} type="video/mp4" />
								</video>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};
