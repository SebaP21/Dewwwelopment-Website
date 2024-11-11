import { FC } from "react";
import { FaqQuestion } from "./FaqQuestion";
import { FaqAnswer } from "./FaqAnswer";

export type FaqItemProps = {
	question: string;
	answer: string;

	expanded: boolean;
	expand: () => void;
};

export const FaqItem: FC<FaqItemProps> = ({
	question,
	answer,
	expanded,
	expand,
}) => {
	return (
		<div className='flex flex-col gap-4 text-left px-6 py-6 border-b border-black'>
			<FaqQuestion
				question={question}
				onClick={expand}
				bgColor={expanded ? "var(--main-color)" : "var(--black-color)"}
			/>
			{expanded && (
				<div
					className={`overflow-hidden ${
						expanded ? "animate-expand" : "animate-collapse"
					}`}
				>
					<FaqAnswer answer={answer} />
				</div>
			)}
		</div>
	);
};
