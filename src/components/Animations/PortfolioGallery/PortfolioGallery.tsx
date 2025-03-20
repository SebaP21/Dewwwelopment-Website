"use client";

import Lenis from "@studio-freight/lenis";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect, Key } from "react";

const images = [
	"ptak.webp", "ptak.webp", "ptak.webp",
	"ptak.webp", "ptak.webp", "ptak.webp",
	"ptak.webp", "ptak.webp", "ptak.webp",
	"ptak.webp", "ptak.webp", "ptak.webp",
];

type ColumnProps = {
	images: string[];
	y: MotionValue<number>;
};

const PortfolioGallery = () => {
	const gallery = useRef<HTMLDivElement | null>(null);
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	const { scrollYProgress } = useScroll({
		target: gallery,
		offset: ["start end", "end start"],
	});

	const { height } = dimension;
	const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
	const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
	// const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

	useEffect(() => {
		const lenis = new Lenis();

		const raf = (time: any) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};

		const resize = () => {
			setDimension({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener("resize", resize);
		requestAnimationFrame(raf);
		resize();

		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		
			<div ref={gallery} className="h-[175vh] bg-neutral-800 relative flex gap-[2vw] p-[2vw] box-border overflow-hidden">
				<Column images={[images[0], images[1], images[2]]} y={y} extraClass="-top-[45%]" />
				<Column images={[images[3], images[4], images[5]]} y={y2} extraClass="-top-[95%]" />
				<Column images={[images[6], images[7], images[8]]} y={y3} extraClass="-top-[45%]" />
				{/* <Column images={[images[9], images[10], images[11]]} y={y4} extraClass="-top-[75%]" /> */}
			</div>
			
		
	);
};

export default PortfolioGallery;

const Column: React.FC<ColumnProps & { extraClass?: string }> = ({ images, y, extraClass = "" }) => {
	return (
		<motion.div className={`relative h-full w-1/3 min-w-[250px] flex flex-col gap-[2vw] ${extraClass}`} style={{ y }}>
			{images.map((src: any, i: Key | null | undefined) => (
				<div key={i} className="h-full w-full relative rounded-[1vw] overflow-hidden">
					<Image src={`/assets/img/${src}`} alt='image' fill className="object-cover" />
				</div>
			))}
		</motion.div>
	);
};
