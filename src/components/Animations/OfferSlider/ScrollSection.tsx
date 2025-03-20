"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useTransform, useSpring, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const slides = [
	{ text: "SLIDE ONE", color: "bg-green-500" },
	{ text: "SLIDE TWO", color: "bg-blue-500" },
	{ text: "SLIDE THREE", color: "bg-purple-500" },
	{ text: "SLIDE FOUR", color: "bg-orange-500" },
];

const listItems = [
	"Lorem, ipsum.",
	"Dolore, sunt!",
	"Delectus, accusamus.",
	"Hic, quos.",
];

const ScrollSection = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const lenisRef = useRef<Lenis | null>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	// 🔥 Płynne przejście scrolla
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 20,
	});

	// 🔥 Konwersja progresu scrolla na indeks slajdu
	const activeIndex = useTransform(
		smoothProgress,
		[0.1, 0.7],
		[0, slides.length - 1]
	);

	// 🔥 Animowany pasek wypełnienia
	const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

	const [selectedIndex, setSelectedIndex] = useState(0);

	// 🔥 Aktualizacja aktywnego indeksu na podstawie scrolla
	useEffect(() => {
		const unsubscribe = activeIndex.onChange((latest) => {
			setSelectedIndex(Math.round(latest));
		});
		return () => unsubscribe();
	}, [activeIndex]);

	// 🔥 Inicjalizacja Lenis
	useEffect(() => {
		const lenis = new Lenis();
		lenisRef.current = lenis;

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	// 🔥 Przewijanie po kliknięciu
	const handleClick = (index: number) => {
		if (containerRef.current && lenisRef.current) {
			const sectionHeight = containerRef.current.offsetHeight; // Całkowita wysokość sekcji
			const scrollTo =
				containerRef.current.offsetTop +
				(index / slides.length) * sectionHeight;

			lenisRef.current.scrollTo(scrollTo, {
				duration: 1.2,
				easing: (t: number) => 1 - Math.pow(1 - t, 4),
			});
		}
	};

	// 🔥 Funkcja do zmiany slajdu
	const changeSlide = (direction: "next" | "prev") => {
		setSelectedIndex((prev) => {
			if (direction === "next") {
				return Math.min(prev + 1, slides.length - 1);
			} else {
				return Math.max(prev - 1, 0);
			}
		});
	};

	return (
		<section ref={containerRef} className="h-[400vh] relative bg-gray-300">
			{/* Sekcja przypinana */}
			<div className="sticky top-0 h-screen flex justify-center items-center">
				<div className="relative flex w-full max-w-5xl p-4">
					{/* Lista */}
					<ul className="text-2xl text-teal-600 mr-4">
						{listItems.map((item, index) => (
							<li
								key={index}
								className={`cursor-pointer transition-colors min-h-[100px] duration-300 ${
									index === selectedIndex
										? "text-black font-bold"
										: "text-teal-600"
								}`}
								onClick={() => handleClick(index)} // 🔥 Kliknięcie przewija do slajdu
							>
								{item}
							</li>
						))}
					</ul>

					{/* Pasek wypełnienia */}
					<motion.div
						className="absolute left-0 top-0 w-1 bg-teal-600"
						style={{ height: fillHeight }}
					/>

					{/* Slajdy */}
					<div className="relative flex-1">
						{slides.map(({ text, color }, index) => (
							<motion.div
								key={index}
								className={`absolute inset-0 flex items-center justify-center text-white text-4xl font-bold ${color}`}
								animate={{
									opacity: index === selectedIndex ? 1 : 0,
									visibility: index === selectedIndex ? "visible" : "hidden",
								}}
								transition={{ duration: 0.5 }}
							>
								{text}
							</motion.div>
						))}
					</div>

					{/* Przycisk strzałki w lewo */}
					<button
						className="absolute left-5 top-1/2 transform -translate-y-1/2 p-2 bg-teal-600 text-white rounded-full"
						onClick={() => changeSlide("prev")}
						disabled={selectedIndex === 0} // Dezaktywuj, gdy pierwszy slajd
					>
						&larr;
					</button>

					{/* Przycisk strzałki w prawo */}
					<button
						className="absolute right-5 top-1/2 transform -translate-y-1/2 p-2 bg-teal-600 text-white rounded-full"
						onClick={() => changeSlide("next")}
						disabled={selectedIndex === slides.length - 1} // Dezaktywuj, gdy ostatni slajd
					>
						&rarr;
					</button>
				</div>
			</div>
		</section>
	);
};

export default ScrollSection;
