"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	useInView,
} from "framer-motion";
import Image from "next/image";
import { useState, useLayoutEffect, useRef } from "react";

const images = Array(12).fill("ptak.webp");

type ColumnProps = {
	images: string[];
	y: any;
	extraClass?: string;
};

const PortfolioGallery = () => {
	const gallery = useRef<HTMLDivElement | null>(null);
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

	const springConfig = {
		stiffness: 50,
		damping: 20,
		mass: 0.7,
	};
	//   const springConfig = {
	// 	stiffness: 18,
	// 	damping: 22,
	// 	restSpeed: 0.2,
	// 	restDelta: 0.2,
	//   };

	const y = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, height * 2]),
		springConfig
	);

	const y2 = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, height * 3.3]),
		springConfig
	);

	const y3 = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, height * 1.25]),
		springConfig
	);

	const y4 = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, height * 3]),
		springConfig
	);

	return (
		<motion.div
			id='portfolio'
			ref={gallery}
			layout
			className='h-[175vh] bg-black flex gap-[2vw] p-[2vw] box-border overflow-hidden'
		>
			<Column
				images={images.slice(0, 3)}
				y={y}
				extraClass='-top-[45%]'
			/>
			<Column
				images={images.slice(3, 6)}
				y={y2}
				extraClass='-top-[95%]'
			/>
			<Column
				images={images.slice(6, 9)}
				y={y3}
				extraClass='-top-[45%]'
			/>
			<Column
				images={images.slice(9, 12)}
				y={y4}
				extraClass='-top-[75%] hidden md:flex'
			/>
		</motion.div>
	);
};

export default PortfolioGallery;

const Column: React.FC<ColumnProps> = ({ images, y, extraClass = "" }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: "0px 0px -20% 0px",
		once: false,
	});

	return (
		<motion.div
			ref={ref}
			className={`relative h-full w-1/3 flex flex-col gap-[2vw] ${extraClass}`}
			style={{
				y,
				willChange: isInView ? "transform" : "auto",
			}}
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

// "use client";

// /* eslint-disable @typescript-eslint/no-explicit-any */

// import {
// 	motion,
// 	useScroll,
// 	useTransform,
// 	useSpring,
// 	useInView,
// } from "framer-motion";
// import Image from "next/image";
// import { useState, useLayoutEffect, useRef } from "react";

// const images = Array(12).fill("ptak.webp");

// type ColumnProps = {
// 	images: string[];
// 	y: any;
// 	extraClass?: string;
// };

// const PortfolioGallery = () => {
// 	const gallery = useRef<HTMLDivElement | null>(null);
// 	const [dimension, setDimension] = useState({ width: 0, height: 0 });

// 	const { scrollYProgress } = useScroll({
// 		target: gallery,
// 		offset: ["start end", "end start"],
// 	});

// 	useLayoutEffect(() => {
// 		const resize = () => {
// 			setDimension({ width: window.innerWidth, height: window.innerHeight });
// 		};
// 		resize();
// 		window.addEventListener("resize", resize);
// 		return () => window.removeEventListener("resize", resize);
// 	}, []);

// 	const { height } = dimension;

// 	// Animacje y z użyciem sprężyny dla wygładzenia
// 	const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, height * 2]), {
// 		stiffness: 50,
// 		damping: 10,
// 		restSpeed: 0.5,
// 		restDelta: 1,
// 	});

// 	const y2 = useSpring(
// 		useTransform(scrollYProgress, [0, 1], [0, height * 3]),
// 		{
// 			stiffness: 50,
// 			damping: 10,
// 			restSpeed: 0.5,
// 			restDelta: 1,
// 		}
// 	);

// 	const y3 = useSpring(
// 		useTransform(scrollYProgress, [0, 1], [0, height * 1.25]),
// 		{
// 			stiffness: 50,
// 			damping: 10,
// 			restSpeed: 0.5,
// 			restDelta: 1,
// 		}
// 	);

// 	const y4 = useSpring(useTransform(scrollYProgress, [0, 1], [0, height * 3]), {
// 		stiffness: 50,
// 		damping: 10,
// 		restSpeed: 0.5,
// 		restDelta: 1,
// 	});

// 	return (
// 		<motion.div
// 			id='portfolio'
// 			ref={gallery}
// 			layout
// 			className='h-[175vh] bg-black flex gap-[2vw] p-[2vw] box-border overflow-hidden'
// 		>
// 			<Column
// 				images={images.slice(0, 3)}
// 				y={y}
// 				extraClass='-top-[45%]'
// 			/>
// 			<Column
// 				images={images.slice(3, 6)}
// 				y={y2}
// 				extraClass='-top-[95%]'
// 			/>
// 			<Column
// 				images={images.slice(6, 9)}
// 				y={y3}
// 				extraClass='-top-[45%]'
// 			/>
// 			<Column
// 				images={images.slice(9, 12)}
// 				y={y4}
// 				extraClass='-top-[75%] hidden md:flex'
// 			/>
// 		</motion.div>
// 	);
// };

// export default PortfolioGallery;

// const Column: React.FC<ColumnProps> = ({ images, y, extraClass = "" }) => {
// 	const ref = useRef(null);
// 	const isInView = useInView(ref, {
// 		margin: "0px 0px -30% 0px", // wcześnie włącza "will-change"
// 		once: false,
// 	});

// 	return (
// 		<motion.div
// 			ref={ref}
// 			className={`relative h-full w-1/3 flex flex-col gap-[2vw] ${extraClass}`}
// 			style={{
// 				y,
// 				willChange: isInView ? "transform" : "auto",
// 				transform: "translateZ(0)", // GPU layer
// 			}}
// 		>
// 			{images.map((src, i) => (
// 				<div
// 					key={i}
// 					className='h-full w-full relative rounded-[1vw] overflow-hidden'
// 				>
// 					<Image
// 						src={`/assets/img/${src}`}
// 						alt='image'
// 						fill
// 						className='object-cover'
// 						sizes='(max-width: 768px) 100vw, 33vw'
// 					/>
// 				</div>
// 			))}
// 		</motion.div>
// 	);
// };

// "use client";

// /* eslint-disable @typescript-eslint/no-explicit-any */

// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import Image from "next/image";
// import { useState, useLayoutEffect, useRef } from "react";

// const images = [
//   "ptak.webp", "ptak.webp", "ptak.webp",
//   "ptak.webp", "ptak.webp", "ptak.webp",
//   "ptak.webp", "ptak.webp", "ptak.webp",
//   "ptak.webp", "ptak.webp", "ptak.webp",
// ];

// type ColumnProps = {
//   images: string[];
//   y: any;
//   extraClass?: string;
// };

// const PortfolioGallery = () => {
//   const gallery = useRef<HTMLDivElement | null>(null);
//   const [dimension, setDimension] = useState({ width: 0, height: 0 });

//   const { scrollYProgress } = useScroll({
//     target: gallery,
//     offset: ["start end", "end start"],
//   });

//   useLayoutEffect(() => {
//     const resize = () => {
//       setDimension({ width: window.innerWidth, height: window.innerHeight });
//     };
//     resize();
//     window.addEventListener("resize", resize);
//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   const { height } = dimension;

//   const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
//   const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
//   const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
//   const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

//   return (
//     <motion.div
//       id="portfolio"
//       ref={gallery}
//       layout
//       className="h-[175vh] bg-black flex gap-[2vw] p-[2vw] box-border overflow-hidden"
//     >
//       <Column images={[images[0], images[1], images[2]]} y={y} extraClass="-top-[45%]" />
//       <Column images={[images[3], images[4], images[5]]} y={y2} extraClass="-top-[95%]" />
//       <Column images={[images[6], images[7], images[8]]} y={y3} extraClass="-top-[45%]" />
//       <Column images={[images[9], images[10], images[11]]} y={y4} extraClass="-top-[75%] hidden md:flex" />
//     </motion.div>
//   );
// };

// export default PortfolioGallery;

// // ====== KOLUMNA Z useInView do optymalizacji will-change ======
// const Column: React.FC<ColumnProps> = ({ images, y, extraClass = "" }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     margin: "0px 0px -20% 0px", // łapie trochę wcześniej
//     once: false,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       className={`relative h-full w-1/3 flex flex-col gap-[2vw] ${extraClass}`}
//       style={{
//         y,
//         willChange: isInView ? "transform" : "auto",
//       }}
//     >
//       {images.map((src, i) => (
//         <div
//           key={i}
//           className="h-full w-full relative rounded-[1vw] overflow-hidden"
//         >
//           <Image
//             src={`/assets/img/${src}`}
//             alt="image"
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, 33vw"
//           />
//         </div>
//       ))}
//     </motion.div>
//   );
// };
