import "./globals.css";
import Nav from "@/components/global/Nav/Nav";
import { Hind } from "next/font/google";
import CookieConsentBanner from "@/components/CookieConsent/CookieConsentBanner";

const hind = Hind({
	subsets: ["latin"],
	weight: "400",
});

export const metadata = {
	title:
		"Budowanie stron internetowych Warszawa - Zbuduj z nami swój wizerunek w sieci!",
	description:
		"Tworzymy strony internetowe, sklepy internetowe, platformy edukacyjne i oferujemy szkolenia w Warszawie.",
	keywords: [
		"Budowanie stron internetowych Warszawa",
		"Tworzenie stron internetowych",
		"Sklepy internetowe",
		"Platformy edukacyjne",
		"Szkolenia",
	],
	openGraph: {
		title: "Budowanie stron internetowych Warszawa",
		description:
			"Zbuduj z nami swój wizerunek w sieci! Tworzymy strony internetowe, sklepy internetowe, platformy edukacyjne i oferujemy szkolenia w Warszawie.",
		url: "https://dewwwelopment.pl",
		type: "website",
		// images: [
		// 	{
		// 		url: "https://twojastrona.pl/image.jpg",
		// 		width: 800,
		// 		height: 600,
		// 		alt: "Tworzenie stron internetowych w Warszawie",
		// 	},
		// ],
	},
};

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
				<CookieConsentBanner />
			</body>
		</html>
	);
}
