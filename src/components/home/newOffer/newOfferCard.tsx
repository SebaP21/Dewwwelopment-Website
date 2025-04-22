"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

// import Image from "next/image";
import { useTransform, motion } from "framer-motion";
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
	disable?: boolean;
};

export const Card: FC<NewCardProps> = ({
	i,
	title,
	description,
	// src,
	url,
	bgColor,
	color,
	progress,
	range,
	targetScale,
	isLight,
	disable,
}) => {
	const container = useRef(null);

	// const { scrollYProgress } = useScroll({
	// 	target: container,
	// 	offset: ["start end", "start start"],
	// });

	// const imageScale = useTransform(scrollYProgress, [0, 1], [3, 1]);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<BackgroundColorChange
			isLight={isLight}
			disable={disable}
		>
			<div
				ref={container}
				className=' flex items-center justify-center mb-12 relative '
			>
				<motion.div
					style={{
						backgroundColor: bgColor,
						color: color,
						scale,
						top: `calc(1vh + ${i * 10}px )`,
					}}
					className=' flex flex-col h-[90svh] w-[95%] relative  origin-top rounded-xl  shadow-lg overflow-hidden border-8'
				>
					{/* <video
						className='w-full h-full object-cover'
						
						loop
						muted
						playsInline
					>
						<source
							src={`/assets/video/${src}`}
							type='video/mp4'
						/>
						Błąd wyświetlania.
					</video> */}
					{/* bg-black/40 will-change-transform */}

					<div className=' w-full h-full  flex flex-col justify-center px-6 gap-12 '
					style={{ backgroundImage: "url('/assets/img/ptak.webp')" }}
					>
						<h2 className=' text-4xl text-white brightness-[200] drop-shadow-lg mix-blend-screen '>{title}</h2>
						<div className='w-full flex flex-col gap-6 '>
							<p className='text-white drop-shadow-lg mix-blend-screen'>{description}</p>

							<a
								href={url}
								target='_blank'
								className=' underline cursor-pointer self-end text-lime-300 drop-shadow-lg mix-blend-screen'
							>
								Zobacz więcej
							</a>
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
	disable?: boolean;
}

const BackgroundColorChange: React.FC<BackgroundColorChangeProps> = ({
	children,
	isLight,
	disable,
}) => {
	const handleEnter = () => {
		if (disable) return; // 👈 jeśli wyłączone, nie rób nic

		const wrapper = document.querySelector(".offerbackground");
		if (!wrapper) return;

		if (isLight) {
			wrapper.classList.add("light-section");
		} else {
			wrapper.classList.remove("light-section");
		}
	};

	const handleLeave = () => {
		if (disable) return; // 👈 również tutaj

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
			transition={{ duration: 0.5 }}
			viewport={{ amount: 0.6 }}
			onViewportEnter={handleEnter}
			onViewportLeave={handleLeave}
			className='sticky top-[9svh] '
		>
			{children}
		</motion.div>
	);
};

{
	/* <div className='flex flex-col h-full w-full mt-6'>
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
</div> */
}
