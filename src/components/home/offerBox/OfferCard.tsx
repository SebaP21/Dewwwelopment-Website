// import AnimatedSection from "@/components/global/AnimatedSection/AnimatedSection";
// import { OfferCardProps } from "@/components/OfferScrollSection/OfferScrollSection";
// import Image from "next/image";
// import Link from "next/link";
// import { FC } from "react";



// export const OfferCard: FC<OfferCardProps> = ({
// 	description,
// 	src,
// 	title,
// 	path,
// 	buttonTitle,
// }) => {
// 	const buttonProps =
// 		buttonTitle && buttonTitle.trim() !== ""
// 			? buttonTitle
// 			: "Dowiedz się więcej";
// 	return (
// 		<AnimatedSection animationClass={"animate-fade-front"}>
// 			<div className='bg-white p-4 flex flex-col justify-evenly items-center min-h-[55svh] gap-4 shadow-lg border border-break text-center mx-auto rounded-sm lg:max-w-[430px] sm:max-w-[500px] '>
// 				<div className='max-w-[80px]'>
// 					<Image
// 						src={src}
// 						alt={title}
// 					/>
// 				</div>
// 				<h3 className='text-xl text-center font-semibold'>{title}</h3>
// 				<p>{description}</p>
// 				<Link
// 					className='bg-main transition-all rounded-sm px-6 py-2 text-white border border-transparent hover:bg-white hover:text-black hover:border-black'
// 					href={`${path}`}
// 				>
// 					{buttonProps}
// 				</Link>
// 			</div>
// 		</AnimatedSection>
// 	);
// };
// export type { OfferCardProps };

