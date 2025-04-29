"use client";

import {
	motion,
	
	useScroll,
	useTransform,
} from "framer-motion";
import { FC, useRef } from "react";
// import Image from "next/image";
import Link from "next/link";
// import Paragraph from "../Animations/OpacityTextTest/Character";

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

	// Tekst przesuwa się do góry
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

	// Obrazy przesuwają się z góry do dołu (z -500vh do 0vh)
	const imageY = useTransform(scrollYProgress, [0, 0.8], ["-400vh", "0vh"]);

	return (
		<section
			id='oferta'
			ref={sectionRef}
			className='hidden md:block relative w-full bg-zinc-950 h-[500vh]'
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
											className={`${
												isEven ? "text-white" : "text-black"
											} hover:scale-105 transition-all hover:translate-x-10`}
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
				<div className='w-1/2 flex flex-col overflow-hidden h-[100vh] animate-fade-left rounded-tl-3xl'>
					<motion.div
						style={{ y: imageY }}
						className='flex flex-col'
						// initial={{x:100}}
						// whileInView={{x:0}}
						// transition={{delay:0.7,duration:0.5}}
					>
						{[...data].reverse().map((product, index) => (
							<div
								key={index}
								className='h-screen flex items-center justify-center'
							>
								{/* <Image
									src={`/assets/img/${product.src}`}
									alt={product.title}
									width={500}
									height={500}
									className='shadow-lg object-cover w-full h-full'
								/> */}
								<video
									className='w-full h-full object-cover'
									autoPlay
									loop
									muted
									playsInline
								>
									<source
										src={`/assets/video/${product.src}`}
										type='video/mp4'
									/>
									Your browser does not support the video tag.
								</video>
								{/* <div className='absolute inset-0 w-full h-full bg-black/10'></div> */}
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};
