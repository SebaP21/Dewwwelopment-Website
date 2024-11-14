import { FC } from "react";
import { StepsIcon } from "./StepsCardComponents/StepsCardIcon";
import { StepsTitle } from "./StepsCardComponents/StepsCardTitle";
import { StepsDescription } from "./StepsCardComponents/StepsCardDescription";
import AnimatedSection from "@/components/global/AnimatedSection/AnimatedSection";



export type StepsCardProps = {
	img: string;
	title: string;
	description: string;
	isLast?: boolean; 
};

export const StepCard: FC<StepsCardProps> = ({ img, title, description, isLast }) => {
	return (
		<AnimatedSection  animationClass={"animate-fade-front"}>
			<div className='w-full flex flex-col items-center text-center gap-4'>
			<StepsIcon img={img} isLast={isLast} />
			<StepsTitle title={title} />
			<StepsDescription description={description} />
		</div>
		</AnimatedSection>
	);
};

