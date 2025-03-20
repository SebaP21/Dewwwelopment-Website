"use client";

import React from "react";
import {
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from "react";

type BackgroundContextState = {
	backgroundColor: string;
	setBackgroundColor: Dispatch<SetStateAction<string>>;
};

export const BackgroundContext = createContext<BackgroundContextState>(
	{} as BackgroundContextState
);

export const BackgroundContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [backgroundColor, setBackgroundColor] = useState("bg-black");

	return (
		<BackgroundContext.Provider value={{ backgroundColor, setBackgroundColor }}>
			{children}
		</BackgroundContext.Provider>
	);
};
