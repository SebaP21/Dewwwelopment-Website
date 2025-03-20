import Contact from "@/components/home/contact/Contact";
// import FooterHome from "@/components/home/footerHome/FooterHome";
import React from "react";

const StickyFooter = () => {
	return (
		<section
			id='kontakt'
			className='relative h-[95svh] '
			style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
		>
			<div className='relative h-[calc(95svh+95svh)] -top-[95svh] bg-zinc-300'>
				<div className='h-[95svh] sticky top-[calc(95vh-95svh)] bg-zinc-300'>
					<Contact />
				</div>
			</div>
			{/* <FooterHome/> */}
		</section>
	);
};

export default StickyFooter;
