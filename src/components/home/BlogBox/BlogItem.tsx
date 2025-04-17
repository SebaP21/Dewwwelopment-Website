"use client";

import { motion } from "framer-motion";
// import { div } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React, { FC,  useState } from "react";
import { BlogBoxDataProps } from "./BlogPreview";

export const BlogItem: FC<BlogBoxDataProps> = ({ blogData }) => {
	const [isHovered, setIsHovered] = useState<number>(0);

	//DO PRZEMYŚLENIA CZY CHCE POWROTU NA POCZĄTEK LISTY ( ROZWIĄZANIE W KOMENTARZACH)

	// const [currentHover, setCurrentHover] = useState<number>(0);

	// useEffect(() => {
	// 	if (currentHover === 0) {
	// 		setIsHovered(0);
	// 	}
	// }, [currentHover]);

	const handleHover = (index: number) => {
		// if (index === 0) return;
		setIsHovered(index);
		// setCurrentHover(index);
	};

	return (
		<>
			{blogData.map((data, index) => (
				<div
					className=' min-w-[150px] min-h-[200px] md:min-w-[250px] md:min-h-[250px] lg:min-w-[350px] lg:min-h-[350px] flex flex-col relative overflow-hidden'
					key={index}
					onMouseEnter={() => handleHover(index)}
					onMouseLeave={() => handleHover(index)}
				>
					<div className='w-full bg-black h-[50%] flex items-center px-4 relative z-10'>
						<p className='text-white text-sm md:text-lg'>{data.title}</p>
					</div>
					<div className='w-full h-[50%] flex relative justify-end'>
						<div className='w-1/2 h-full flex items-center justify-center'>
							<Link
								href={data.path}
								className='transition-all text-sm text-black hover:text-accent'
							>
								Zobacz więcej +
							</Link>
						</div>
					</div>
					<motion.div
						className='absolute top-0 left-0'
						style={{ zIndex: 30 }}
						initial={{ top: 0, left: 0, width: "100%", height: "100%" }}
						animate={
							isHovered === index
								? { top: "50%", left: "0", width: "50%", height: "50%" }
								: { top: "0", left: "0", width: "100%", height: "100%" }
						}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						<Image
							src={`/assets/img/${data.image}`}
							alt=''
							fill
							className='object-cover'
						/>
					</motion.div>
				</div>
			))}
		</>
	);
};
