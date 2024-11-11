import { FC } from "react";

type FAQAnswerProps = {
	answer: string;
};

export const FaqAnswer: FC<FAQAnswerProps> = ({ answer }) => {
	return (
		<div className=''>
			<p className=''>{answer}</p>
		</div>
	);
};
