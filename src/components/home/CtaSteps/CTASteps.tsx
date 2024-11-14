"use client";

import { useState, useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/components/global/AnimatedSection/Observer";

const CtaSteps = () => {
	const [count, setCount] = useState(1);
	const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (isVisible && count < 6) {
			if (!intervalRef.current) {
				intervalRef.current = setInterval(() => {
					setCount((prev) => {
						const newCount = prev + 1;
						if (newCount > 6) {
							clearInterval(intervalRef.current!);
							return 6;
						}
						return newCount;
					});
				}, 500);
			}
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [isVisible]);

	return (
		<section
			ref={ref}
			className='min-h-[35svh] bg-center bg-cover flex justify-center items-center'
			style={{
				backgroundImage:
					"url('/assets/img/Dewwwelopment-strona-w-kliku-krokach.jpg')",
			}}
		>
			<div className='w-[90%] z-10 flex flex-col gap-2'>
				<h4 className='text-4xl text-center font-semibold text-white'>
					Zbuduj swój wizerunek w{" "}
				</h4>
				<h4 className='text-main text-5xl text-center font-semibold'> {count} </h4>
				<h4 className="text-4xl text-center font-semibold text-white">prostych krokach!</h4>
			</div>
			<div
				className='w-full min-h-[35svh] absolute opacity-80'
				style={{
					backgroundImage:
						"linear-gradient(90deg, rgb(7, 51, 47), rgb(255, 255, 255))",
				}}
			></div>
		</section>
	);
};

export default CtaSteps;
