"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FC, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export type OfferCardProps = {
	src: string;
	title: string;
	description: string;
	path: string;
	buttonTitle?: string;
	color: string;
};

type OfferCardPropsData = {
	data: OfferCardProps[];
};

export const OfferScrollSection: FC<OfferCardPropsData> = ({ data }) => {
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["10vh start", "end start"],
	});

	//  Tworzymy efekt sprężystości dla płynniejszego przewijania
	const smoothScroll = useSpring(scrollYProgress, {
		stiffness: 100, // Im wyższe, tym szybciej reaguje
		damping: 30, // Im wyższe, tym wolniej się zatrzymuje
		// mass: 1, // Masa wpływa na dynamikę ruchu
		restDelta: 0.001,
	});

	// Tekst przesuwa się do góry
	const textY = useTransform(smoothScroll, [0, 1], ["0%", "-100%"]);

	// Obrazy przesuwają się z góry do dołu (z -500vh do 0vh)
	const imageY = useTransform(smoothScroll, [0, 0.8], ["-400vh", "0vh"]);

	return (
		<section
			ref={sectionRef}
			className='relative w-full bg-zinc-950 h-[500vh]'
		>
			<div className='sticky top-0  flex h-[100vh]  '>
				{/* Sekcja tekstowa - lewa strona */}
				<div className='w-1/2 flex flex-col'>
					<motion.div
						style={{ y: textY }}
						className='flex flex-col'
					>
						{data.map((product, index) => {
							const isEven = index % 2 === 0;
							return (
								<div
									key={index}
									className={`h-screen flex flex-col justify-evenly p-8 ${
										isEven ? "bg-zinc-950" : "bg-white"
									}`}
								>
									<h2
										className={`text-6xl font-bold mb-4 ${
											isEven ? "text-white" : "text-black"
										}`}
									>
										{product.title}
									</h2>
									<div className='flex flex-col gap-8'>
										<p
											className={`text-lg ${
												isEven ? "text-white" : "text-zinc-750"
											}`}
										>
											{product.description}
										</p>
										<Link
											href={product.path}
											className={`${isEven ? "text-white" : "text-black"}`}
										>
											Dowiedz się więcej
										</Link>
									</div>
								</div>
							);
						})}
					</motion.div>
				</div>

				{/* Sekcja obrazów - prawa strona */}
				<div className='w-1/2 flex flex-col overflow-hidden h-[100vh] animate-fade-left'>
					<motion.div
						style={{ y: imageY }}
						className='flex flex-col'
					>
						{data.map((product, index) => (
							<div
								key={index}
								className='h-screen flex items-center justify-center'
							>
								<Image
									src={`/assets/img/${product.src}`}
									alt={product.title}
									width={500}
									height={500}
									className='shadow-lg object-cover w-full h-full'
								/>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

// //  Tworzymy efekt sprężystości dla płynniejszego przewijania
// // const smoothScroll = useSpring(scrollYProgress, {
// // 	stiffness: 100, // Im wyższe, tym szybciej reaguje
// // 	damping: 20, // Im wyższe, tym wolniej się zatrzymuje
// // 	mass: 1, // Masa wpływa na dynamikę ruchu
// // });
