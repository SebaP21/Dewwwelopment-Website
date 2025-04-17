import React, { ReactNode } from "react";

interface StepsAndBlogBackgroundWrapperProps {
	children: ReactNode;
}

const StepsAndFaqBackgroundWrapper: React.FC<
	StepsAndBlogBackgroundWrapperProps
> = ({ children }) => {
	return <div className='backgroundwrapper relative'>{children}</div>;
};

export default StepsAndFaqBackgroundWrapper;
