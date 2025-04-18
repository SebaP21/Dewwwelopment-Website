"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useLayoutEffect, useRef, useEffect } from "react";

const images = [
	"ptak.webp",
	"ptak.webp",
	"ptak.webp",
	"ptak.webp",
	"ptak.webp",
	"ptak.webp",
	"ptak.webp",
	"ptak.webp",
	"ptak.webp",
	"ptak.webp",
	"ptak.webp",
	"ptak.webp",
];

type ColumnProps = {
	images: string[];
	y: any;
	extraClass?: string;
};

const PortfolioGallery = () => {
	const gallery = useRef<HTMLDivElement | null>(null);
	// const [enabled, setEnabled] = useState(false);
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	const { scrollYProgress } = useScroll({
		target: gallery,
		offset: ["start end", "end start"],
	});

	useLayoutEffect(() => {
		const resize = () => {
			setDimension({ width: window.innerWidth, height: window.innerHeight });
		};
		resize();
		window.addEventListener("resize", resize);
		return () => window.removeEventListener("resize", resize);
	}, []);

	const { height } = dimension;

	const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
	const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
	const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

	useEffect(() => {
		if (gallery.current) {
			const style = window.getComputedStyle(gallery.current);
			console.log("Gallery position:", style.position); // 🔍 Czy "relative"?
		}
	}, []);

	return (
		<div
			ref={gallery}
			style={{ position: "relative" }}
			className='h-[175vh] bg-black  flex gap-[2vw] p-[2vw] box-border overflow-hidden'
		>
			<Column
				images={[images[0], images[1], images[2]]}
				y={y}
				extraClass='-top-[45%]'
			/>
			<Column
				images={[images[3], images[4], images[5]]}
				y={y2}
				extraClass='-top-[95%]'
			/>
			<Column
				images={[images[6], images[7], images[8]]}
				y={y3}
				extraClass='-top-[45%]'
			/>
			<Column
				images={[images[9], images[10], images[11]]}
				y={y4}
				extraClass='-top-[75%] hidden md:flex'
			/>
		</div>
	);
};

export default PortfolioGallery;

const Column: React.FC<ColumnProps> = ({ images, y, extraClass = "" }) => {
	return (
		<motion.div
			className={`relative h-full w-1/3 flex flex-col gap-[2vw] ${extraClass}`}
			style={{ y }}
		>
			{images.map((src, i) => (
				<div
					key={i}
					className='h-full w-full relative rounded-[1vw] overflow-hidden'
				>
					<Image
						src={`/assets/img/${src}`}
						alt='image'
						fill
						className='object-cover'
						sizes='(max-width: 768px) 100vw, 33vw'
					/>
				</div>
			))}
		</motion.div>
	);
};

// useLayoutEffect(() => {
// 	setEnabled(true);
// }, []);
// const { scrollYProgress } = useScroll({
// 	target: enabled ? gallery : undefined, // ← dopiero jak layout gotowy
// 	offset: ["start end", "end start"],
// });
