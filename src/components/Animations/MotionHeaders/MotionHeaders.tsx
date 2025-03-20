"use client";

import { motion } from "framer-motion";
import React, { FC } from "react";

type MotionbHeaderProps = {
	title: string;
	classname: string;
	hNumber: number;
};

const MotionHeader: FC<MotionbHeaderProps> = ({
	title,
	classname,
	hNumber,
}) => {
	return (
		<div className='mx-auto py-8'>
			{`<motion.${hNumber}
				initial={{ y: 48, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ ease: "easeInOut", duration: 0.75 }}
				className=' text-4xl  font-black uppercase'
			>
				Baza Wiedzy
			</motion.${hNumber}>`}
		</div>
	);
};

export default MotionHeader;
