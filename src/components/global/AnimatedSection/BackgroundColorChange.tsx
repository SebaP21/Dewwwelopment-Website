"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface BackgroundColorChangeProps {
	children: ReactNode;
}

const BackgroundColorChange: React.FC<BackgroundColorChangeProps> = ({
	children,
}) => {
	const handleEnter = () => {
		const wrapper = document.querySelector(".backgroundwrapper");
		if (wrapper) {
			wrapper.classList.add("light-section");
		}
	};

	const handleLeave = () => {
		const wrapper = document.querySelector(".backgroundwrapper");
		if (wrapper) {
			wrapper.classList.remove("light-section");
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			// viewport={{ once: false, amount: 0.1 }}
			onViewportEnter={handleEnter}
			onViewportLeave={handleLeave}
			className={``}
		>
			{children}
		</motion.div>
	);
};

export default BackgroundColorChange;
