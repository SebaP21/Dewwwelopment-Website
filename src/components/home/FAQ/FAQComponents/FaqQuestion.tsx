import { FC } from "react";

type FaqQuestionProps = {
	question: string;
	onClick: () => void;
	bgColor: string;
};

export const FaqQuestion: FC<FaqQuestionProps> = ({
	question,
	onClick,
	bgColor,
}) => {
	return (
		<h5
			onClick={onClick}
			className='font-semibold  
			transition-all cursor-pointer hover:scale-105'
			style={{color:`${bgColor}`}}
		>
			{question}
		</h5>
	);
};
