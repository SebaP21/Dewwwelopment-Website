import {
	OfferCardProps,
	OfferScrollSection,
} from "@/components/OfferScrollSection/OfferScrollSection";

const HomeOffer = () => {
	return <OfferScrollSection data={offerCardsData} />;
};

export default HomeOffer;



const offerCardsData: OfferCardProps[] = [
	{
		title: "Next JS",
		description:
			"Strony wizytówkowe, znane również jako strony one page, są idealnym" +
			" rozwiązaniem dla osób i małych firm, które chcą przedstawić swoje" +
			" usługi, produkty lub informacje w sposób klarowny i zwięzły. " +
			"Użytkownik przewija stronę w dół, aby poznać kolejne sekcje. " +
			"Wszystkie informacje skoncentrowane w jednym miejscu.",
		src: "Gen-3 Alpha Turbo 1620967955, New standards of web, Cropped - Dewwwelopm, M 5.mp4",
		path: "/oferta/#one-page",
		color: "zinc-950",
	},
	{
		title: "WordPress",
		description:
			"Rozbudowane witryny, które składają się z kilku podstron, " +
			"umożliwiając bardziej szczegółowe przedstawienie treści lub " +
			"portfolio. Każda podstrona może być dedykowana innemu tematowi " +
			"lub sekcji biznesowej. Oferują wygodną nawigację i pełne dostosowanie treści do potrzeb użytkownika.",
		src: "Gen-3 Alpha Turbo 1517127650, On this picture pers, Dewwwelopment-o-nas , M 5.mp4",
		path: "/oferta/#rozbudowana-strona",
		color: "white",
	},
	{
		title: "Sklepy internetowe",
		description:
			"Funkcjonalne i estetyczne sklepy z pełną integracją" +
			"z platformami e-commerce," +
			"takimi jak WooCommerce i PrestaShop." +
			" Zapewniają płynną" +
			" obsługę zamówień, elastyczne opcje płatności oraz możliwość łatwego" +
			"zarządzania produktem i zawartością sklepu. Sklepy zoptymalizowane" +
			"są pod kątem efektywności i wydajności, co znacznie poprawia ich" +
			"pozycję w wynikach wyszukiwania.",
		src: "Gen-3 Alpha Turbo 3826580842, On this picture pers, Cropped - Dewwwelopm, M 5.mp4",
		path: "oferta/#sklepy-internetowe",
		color: "black",
	},
	{
		title: "Szkolenia",
		description:
			"Doskonała okazja dla wszystkich, którzy chcą zdobyć niezbędną wiedzę" +
			"i umiejętności w zarządzaniu własną stroną internetową. Nasze" +
			"szkolenia zapewniają praktyczne szkolenie w obszarach takich jak" +
			"aktualizacja treści, dodawanie nowych funkcji, optymalizacja witryny" +
			"pod kątem szybkości i SEO oraz efektywne zarządzanie pluginami i" +
			"narzędziami.",
		src: "Gen-3 Alpha Turbo 712098762, On this picture pers, Cropped - Dewwwelopm, M 5.mp4",
		path: "/oferta/#szkolenia",
		color: "white",
	},
	{
		title: "Wsparcie techniczne",
		description:
			"Bez względu na to, czy dopiero zakładasz swoją stronę, czy już ją posiadasz" +
			"- oferujemy pomoc i wsparcie techniczne. Szybka reakcja," +
			"fachowe porady i skuteczne rozwiązania." +
			" Dzięki naszemu wsparciu możesz mieć pewność," +
			" że Twoja strona będzie działać sprawnie, bez" +
			"zakłóceń i awarii.",
		src: "Gen-3 Alpha Turbo 1517127650, On this picture pers, Dewwwelopment-o-nas , M 5.mp4",
		path: "/oferta/#wsparcie-techniczne",
		color: "black",
	},
];
