import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export type OfferCardProps = {
	imgSrc: string;
	title: string;
	description: string;
	path: string;
	buttonTitle?: string;
};

export const OfferCard: FC<OfferCardProps> = ({
	description,
	imgSrc,
	title,
	path,
	buttonTitle,
}) => {
	const buttonProps =
		buttonTitle && buttonTitle.trim() !== ""
			? buttonTitle
			: "Dowiedz się więcej";
	return (
		<div className='bg-white p-4 flex flex-col justify-evenly items-center min-h-[55svh] gap-4 shadow-lg border border-break text-center rounded-sm'>
			<div className='max-w-[80px]'>
				<Image
					src={imgSrc}
					alt={title}
				/>
			</div>
			<h3 className='text-xl text-center font-semibold'>{title}</h3>
			<p>{description}</p>
			<Link
				className='bg-main transition-all rounded-sm px-6 py-2 text-white border border-transparent hover:bg-white hover:text-black hover:border-black'
				href={`${path}`}
			>
				{buttonProps}
			</Link>
		</div>
	);
};
