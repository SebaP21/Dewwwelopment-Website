import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

interface ParagraphProps {
	paragraph: string;
}

export default function Paragraph({ paragraph }: ParagraphProps) {
	const container = useRef<HTMLParagraphElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["6 1", "1 0.25"],
	});

	const words = paragraph.split(" ");
	return (
		<p
			ref={container}
			className='flex flex-wrap text-white font-bold leading-none p-10 max-w-[1280px] mx-auto'
		>
			{words.map((word, i) => {
				const start = i / words.length;
				const end = start + 1 / words.length;
				return (
					<Word
						key={i}
						progress={scrollYProgress}
						range={[start, end]}
					>
						{word}
					</Word>
				);
			})}
		</p>
	);
}

interface WordProps {
	children: string;
	progress: any;
	range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
	const amount = range[1] - range[0];
	const step = amount / children.length;
	return (
		<span className='relative mr-3 mt-3'>
			{children.split("").map((char, i) => {
				const start = range[0] + i * step;
				const end = range[0] + (i + 1) * step;
				return (
					<Char
						key={`c_${i}`}
						progress={progress}
						range={[start, end]}
					>
						{char}
					</Char>
				);
			})}
		</span>
	);
};

interface CharProps {
	children: string;
	progress: any;
	range: [number, number];
}

const Char: React.FC<CharProps> = ({ children, progress, range }) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span>
			<span className='absolute opacity-20'>{children}</span>
			<motion.span style={{ opacity }}>{children}</motion.span>
		</span>
	);
};
