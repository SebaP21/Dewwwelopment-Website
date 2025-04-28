"use client";
import { useEffect, useRef, useState } from "react";

const ScrollCarousel = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const scrollRef = useRef<HTMLDivElement | null>(null);
	const [offset, setOffset] = useState(0);

	const cardWidth = 320; // szerokość jednej karty + margines
	const totalCards = 6;
	const maxOffset = -(cardWidth * (totalCards - 1));

	useEffect(() => {
		const handleWheel = (event: WheelEvent) => {
			event.preventDefault(); // żeby nie scrollował strony

			setOffset((prev) => {
				const direction = event.deltaY > 0 ? -1 : 1;
				let nextOffset = prev + direction * cardWidth;

				// clampujemy żeby nie wyjechać za daleko
				if (nextOffset > 0) nextOffset = 0;
				if (nextOffset < maxOffset) nextOffset = maxOffset;

				return nextOffset;
			});
		};

		const container = containerRef.current;
		if (container) {
			container.addEventListener("wheel", handleWheel, { passive: false });
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
			className="w-full h-screen flex items-center justify-center overflow-hidden bg-zinc-900 text-white"
		>
			<div
				ref={scrollRef}
				className="flex transition-transform duration-300 ease-out"
				style={{ transform: `translateX(${offset}px)` }}
			>
				{Array.from({ length: totalCards }).map((_, i) => (
					<div
						key={i}
						className="min-w-[300px] h-[400px] bg-zinc-800 rounded-2xl m-2 p-4 flex flex-col justify-center items-center shadow-lg"
					>
						<h2 className="text-xl font-semibold mb-2">Oferta {i + 1}</h2>
						<p className="text-sm text-gray-300 text-center">
							Przykładowy opis oferty numer {i + 1}. Możesz tu dodać zdjęcie, cenę, itd.
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ScrollCarousel;
