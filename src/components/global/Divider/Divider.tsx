import { FC } from "react";

type DividerProps = {
	width: number;
	color: string;
};

const Divider: FC<DividerProps> = ({ width, color }) => {
	return (
		<div
			className={`min-h-[2px] max-h-[2px] bg-${color}`}
			style={{
				minWidth: `${width}%`,
				maxWidth: `${width}%`,
				width: `${width}%`,
			}}
		></div>
	);
};

export default Divider;
