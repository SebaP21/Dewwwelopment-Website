import React, { ReactNode } from "react";

interface StepsAndBlogBackgroundWrapperProps {
	children: ReactNode;
}

const StepsAndFaqBackgroundWrapper: React.FC<
	StepsAndBlogBackgroundWrapperProps
> = ({ children }) => {
	return <div className='backgroundwrapper'>{children}</div>;
};

export default StepsAndFaqBackgroundWrapper;
