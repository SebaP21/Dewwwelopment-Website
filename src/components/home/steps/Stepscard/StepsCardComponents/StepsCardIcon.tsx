import Image from "next/image";
import { FC } from "react";

type StepsIconProps = {
	img: string;
	isLast?: boolean;
};

export const StepsIcon: FC<StepsIconProps> = ({ img, isLast }) => {
	return (
		<div
			className={`w-[120px] border-dotted ${
				isLast ? "border-transparent" : "border-main"
			} border-[3px] rounded-full p-8 flex items-center justify-center ${
				isLast ? "bg-main" : "bg-ctabgc"
			}`}
		>
			<Image
				src={img}
				alt={"step-number"}
			/>
		</div>
	);
};
