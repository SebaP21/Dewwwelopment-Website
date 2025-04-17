"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { FC, ReactNode, useRef } from "react";

type NewCardProps = {
	i: number;
	title: string;
	description: string;
	src: string;
	url: string;
	color: string;
	progress: any;
	range: any;
	targetScale: any;
	bgColor: string;
	isLight: boolean;
};

export const Card: FC<NewCardProps> = ({
	i,
	title,
	description,
	src,
	url,
	bgColor,
	color,
	progress,
	range,
	targetScale,
	isLight,
}) => {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "start start"],
	});

	const imageScale = useTransform(scrollYProgress, [0, 1], [3, 1]);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<BackgroundColorChange isLight={isLight}>
			<div
				ref={container}
				className=' flex items-center justify-center  mb-12 '
			>
				<motion.div
					style={{
						backgroundColor: bgColor,
						color: color,
						scale,
						top: `calc(1vh + ${i * 10}px )`,
					}}
					className=' flex flex-col h-[90svh] w-[95%] relative  p-6 origin-top rounded-xl border-lime-300 border-[2px] shadow-lg  '
				>
					<h2 className='text-center text-[28px]'>{title}</h2>
					<div className='flex flex-col h-full w-full mt-6'>
						<div className='w-full  top-[10%]'>
							<p className='text-[16px]'>{description}</p>
							<span className='flex items-center gap-2'>
								<a
									href={url}
									target='_blank'
									className='text-[12px] underline cursor-pointer'
								>
									Zobacz więcej
								</a>
							</span>
						</div>
						<div className=' w-full h-full rounded-xl overflow-hidden '>
							<motion.div
								className='w-full h-full relative '
								style={{ scale: imageScale }}
							>
								<Image
									src={`/assets/img/${src}`}
									alt='image'
									fill
									className='object-cover'
								/>
							</motion.div>
						</div>
					</div>
				</motion.div>
			</div>
		</BackgroundColorChange>
	);
};

interface BackgroundColorChangeProps {
	children: ReactNode;
	isLight?: boolean;
}

const BackgroundColorChange: React.FC<BackgroundColorChangeProps> = ({
	children,
	isLight,
}) => {
	const handleEnter = () => {
		const wrapper = document.querySelector(".offerbackground");
		if (!wrapper) return;
		if (isLight) {
			wrapper.classList.add("light-section");
		} else {
			wrapper.classList.remove("light-section");
		}
	};

	const handleLeave = () => {
		const wrapper = document.querySelector(".offerbackground");
		if (!wrapper) return;
		if (!isLight) {
			wrapper.classList.add("light-section");
		} else {
			wrapper.classList.remove("light-section");
		}
	};

	return (
		<motion.div
			// initial={{ opacity: 0 }}
			// whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			viewport={{ amount: 0.6 }}
			onViewportEnter={handleEnter}
			onViewportLeave={handleLeave}
			className='sticky top-[8svh]'
		>
			{children}
		</motion.div>
	);
};
