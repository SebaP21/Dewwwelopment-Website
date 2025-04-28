"use client";
import { useEffect, useRef, useState } from "react";

const ScrollDetector = () => {
	const [scrollCount, setScrollCount] = useState(0);
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleWheel = (event: WheelEvent) => {
			const direction = event.deltaY > 0 ? "dół" : "góra";

			setScrollCount((prev) => {
				const next = prev + 1;
				console.log(`Ruch numer ${next} – kierunek: ${direction}`);
				return next;
			});
		};

		const container = containerRef.current;
		if (container) {
			container.addEventListener("wheel", handleWheel, { passive: true });
		}

		return () => {
			if (container) {
				container.removeEventListener("wheel", handleWheel);
			}
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className="w-full h-screen overflow-hidden bg-neutral-900 text-white flex items-center justify-center"
		>
			<p className="text-lg">Scrolluj kółkiem myszy 👇</p>
		</div>
	);
};

export default ScrollDetector;
