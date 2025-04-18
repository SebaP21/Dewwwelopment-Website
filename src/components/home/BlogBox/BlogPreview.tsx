import React from "react";
import { BlogItem } from "./BlogItem";

import AnimatedSection from "@/components/global/AnimatedSection/AnimatedSection";
import BackgroundColorChange from "@/components/global/AnimatedSection/BackgroundColorChange";
// import { BackgroundContextProvider } from "@/components/global/Context/BackgroundContext/BackgroundContext";

const BlogPreview = () => {
	return (
		<section
			id='baza-wiedzy '
			className={`py-8 flex flex-col justify-center items-center $`}
		>
			<AnimatedSection animationClass={"animate-fade-up"}>
				<h2 className='text-black text-4xl uppercase font-semibold py-8'>
					Baza Wiedzy{" "}
				</h2>
			</AnimatedSection>

			{/* <BackgroundContextProvider> */}
			<BackgroundColorChange>
				<div className='grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-2 mx-auto py-8 max-w-[1100px] px-2 '>
					<BlogItem blogData={blogData} />
				</div>
			</BackgroundColorChange>
			{/* </BackgroundContextProvider> */}
		</section>
	);
};

export default BlogPreview;

export type BlogBoxDataProps = {
	blogData: BlogBoxData[];
};

type BlogBoxData = {
	title: string;
	image: string;
	path: string;
};

const blogData: BlogBoxData[] = [
	{
		title:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, delectus.",
		image: "ptak.webp",
		path: "/oferta",
	},
	{
		title:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, delectus.",
		image: "ptak.webp",
		path: "/oferta",
	},
	{
		title:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, delectus.",
		image: "ptak.webp",
		path: "/oferta",
	},
	{
		title:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, delectus.",
		image: "ptak.webp",
		path: "/oferta",
	},
	{
		title:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, delectus.",
		image: "ptak.webp",
		path: "/oferta",
	},
	{
		title:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, delectus.",
		image: "ptak.webp",
		path: "/oferta",
	},
];
