"use client";
import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";
import ZoomAnimation from "./ZoomAnimation";

const ZoomSection = () => {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	return (
		<div className=' bg-zinc-950'>
			<ZoomAnimation />
			
		</div>
	);
};

export default ZoomSection;
