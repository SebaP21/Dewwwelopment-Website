"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "./Observer";

interface AnimatedSectionProps {
	children: ReactNode;
	animationClass: string;
	tailwindClass?:string
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
	children,
	animationClass,
	tailwindClass
}) => {
	const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

	return (
		<div 
			ref={ref}
			className={`${isVisible ? animationClass : "opacity-0"} ${tailwindClass} `}
		>
			{children}
		</div>
		
	);
};

export default AnimatedSection;
