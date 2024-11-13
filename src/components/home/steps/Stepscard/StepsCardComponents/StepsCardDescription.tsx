import { FC } from "react";

type StepsDescriptionProps = {
	description: string;
};

export const StepsDescription: FC<StepsDescriptionProps> = ({
	description,
}) => {
	return <p className='w-full sm:max-w-[70%]'>{description}</p>;
};
