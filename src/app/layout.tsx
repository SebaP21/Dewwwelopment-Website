import type { Metadata } from "next";

import "./globals.css";
import Nav from "@/components/global/Nav/Nav";
import { Hind } from "next/font/google";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

const hind = Hind({
	subsets: ["latin"],
	weight: "400",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl'>
			<head>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css2?family=Hind:wght@400;700&family=Proza+Libre:wght@400;700&display=swap'
				/>
			</head>

			<body className={hind.className}>
				<Nav />

				{children}
			</body>
		</html>
	);
}
