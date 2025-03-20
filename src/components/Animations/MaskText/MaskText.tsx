"use client";
import { useIntersectionObserver } from "@/components/global/AnimatedSection/Observer";
import { motion } from "framer-motion";

const phrases = [
	"It is a long established fact",
	"that a reader will be distracted",
	"by the readable content of a page",
	"when looking at its layout.",
];

export default function Mask() {
	return (
		<div className='flex flex-col items-center gap-6 my-[300px]'>
			<MaskText />
		</div>
	);
}

export function MaskText() {
	const animation = {
		initial: { y: "100%" },
		enter: (i: number) => ({
			y: "0",
			transition: {
				duration: 0.75,
				ease: [0.33, 1, 0.68, 1],
				delay: 0.075 * i,
			},
		}),
	};

	const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

	return (
		<div ref={ref}>
			{phrases.map((phrase, index) => {
				return (
					<div
						key={index}
						className='overflow-hidden '
					>
						<motion.p
							custom={index}
							variants={animation}
							initial='initial'
							animate={isVisible ? "enter" : "initial"}
							className='m-0 font-bold text-3xl text-black'
						>
							{phrase}
						</motion.p>
					</div>
				);
			})}
		</div>
	);
}
