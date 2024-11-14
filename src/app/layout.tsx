import "./globals.css";
import Nav from "@/components/global/Nav/Nav";
import { Hind } from "next/font/google";
import CookieConsentBanner from "@/components/CookieConsent/CookieConsentBanner";
import Script from "next/script";

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
				<meta
					name='google-site-verification'
					content='GJ7zeW_Gr1oZJG0-ve3_v6O3Te63hkGs57X7rmGv8YQ'
				/>
			</head>

			<body className={`${hind.className} overflow-x-hidden`}>
				<Script
					strategy='afterInteractive'
					src='https://www.googletagmanager.com/gtag/js?id=G-6RLN8N2PD3'
				/>
				<Script
					id='google-analytics'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-6RLN8N2PD3', {
        page_path: window.location.pathname,
      });
    `,
					}}
				/>

				<Nav />
				{children}
				<CookieConsentBanner />
			</body>
		</html>
	);
}
