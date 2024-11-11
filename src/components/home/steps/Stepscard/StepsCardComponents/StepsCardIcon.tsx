import Image from "next/image";
import { FC } from "react";

type StepsIconProps = {
	img: string;
	isLast?: boolean;
};

export const StepsIcon: FC<StepsIconProps> = ({ img, isLast }) => {
	return (
		<div
			className={`w-[120px] ${
				isLast ? "border-transparent" : "border-black"
			} border-[3px] rounded-full p-6 flex items-center justify-center ${
				isLast ? "bg-main" : ""
			}`}
		>
			<Image
				src={img}
				alt={"step-number"}
			/>
		</div>
	);
};
