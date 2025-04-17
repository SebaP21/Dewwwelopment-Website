// import onePageIcon from "../../../assets/icons/web-programming-2.svg";
// import advancedIcon from "../../../assets/icons/coding-1.svg";
// import ecommerce from "../../../assets/icons/ecommerce-1.svg";

// import individual from "../../../assets/icons/star-2.svg";
// import Training from "../../../assets/icons/graduate-1.svg";
// import Support from "../../../assets/icons/settings-2.svg";
// import { OfferCard, OfferCardProps } from "./OfferCard";
// import {OfferCard}
// import Divider from "@/components/global/Divider/Divider";
import { OfferCardProps } from "@/components/OfferScrollSection/OfferScrollSection";
// import projects from "../../../assets/img/Dewwwelopment-o-nas (1).jpg";

// const OfferBox = () => {
// 	return (
// 		<section
// 			className='w-full scroll-mt-[8svh] flex flex-col justify-center items-center  py-8 gap-4'
// 			id='offerBox'
// 			style={{
// 				backgroundImage: "url('/assets/img/Dewwwelopment-projektowanie.jpg'",
// 			}}
// 		>
// 			<div className='w-[40%]'>
// 				<Divider
// 					width={100}
// 					color={"main"}
// 				/>
// 			</div>
// 			<p className='uppercase text-lg'>Co oferujemy?</p>
// 			<h2 className='text-5xl font-semibold uppercase'>Usługi</h2>

// 			<article className='w-[90%] py-4 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:max-w-[1200px] '>
// 				{offerCardsData.map((data, index) => (
// 					<OfferCard
// 						key={index}
// 						src={data.src}
// 						title={data.title}
// 						description={data.description}
// 						path={data.path}
// 						buttonTitle={data.buttonTitle}
// 						color={data.color}
// 					/>
// 				))}
// 			</article>
// 		</section>
// 	);
// };

// export default OfferBox;

export const offerCardsData: OfferCardProps[] = [
	{
		title: "Strony internetowe-wizytówki",
		description:
			"Strony wizytówkowe, znane również jako strony one page, są idealnym" +
			" rozwiązaniem dla osób i małych firm, które chcą przedstawić swoje" +
			" usługi, produkty lub informacje w sposób klarowny i zwięzły. " +
			"Użytkownik przewija stronę w dół, aby poznać kolejne sekcje. " +
			"Wszystkie informacje skoncentrowane w jednym miejscu.",
		src: "Dewwwelopment-oferta-projektowa.jpg",
		path: "/oferta/#one-page",
		color: "#C2491D",
	},
	{
		title: "Rozbudowane strony internetowe",
		description:
			"Rozbudowane witryny, które składają się z kilku podstron, " +
			"umożliwiając bardziej szczegółowe przedstawienie treści lub " +
			"portfolio. Każda podstrona może być dedykowana innemu tematowi " +
			"lub sekcji biznesowej. Oferują wygodną nawigację i pełne dostosowanie treści do potrzeb użytkownika.",
		src: "Dewwwelopment-oferta-projektowa.jpg",
		path: "/oferta/#rozbudowana-strona",
		color: "#BBACAF",
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
		src: "Dewwwelopment-oferta-projektowa.jpg",
		path: "oferta/#sklepy-internetowe",
		color: "#977F6D",
	},
	{
		title: "Projekty indywidualne",
		description:
			"Spersonalizowane rozwiązania dopasowane do wyzwań najbardziej" +
			"wymagających klientów. W ramach projektów indywidualnych skupiamy" +
			"się na tworzeniu rozbudowanych serwisów internetowych oraz platform" +
			"szkoleniowych. Oferujemy możliwość tworzenia dedykowanych platform" +
			"edukacyjnych umożliwiających przeprowadzanie szkoleń online, kursów" +
			"oraz przechowywanie materiałów dostępnych dla Twoich użytkowników.",
		src: "Dewwwelopment-oferta-projektowa.jpg",
		path: "/#kontakt",
		buttonTitle: "Zadzwoń po wycenę",
		color: "#977F6D",
	},
	{
		title: "Szkolenia",
		description:
			"Doskonała okazja dla wszystkich, którzy chcą zdobyć niezbędną wiedzę" +
			"i umiejętności w zarządzaniu własną stroną internetową. Nasze" +
			"szkolenia zapewniają praktyczne szkolenie w obszarach takich jak" +
			"aktualizacja treści, dodawanie nowych funkcji, optymalizacja witryny" +
			"aktualizacja treści, dodawanie nowych funkcji, optymalizacja witryny" +
			"pod kątem szybkości i SEO oraz efektywne zarządzanie pluginami i" +
			"narzędziami.",
		src: "Dewwwelopment-oferta-projektowa.jpg",
		path: "/oferta/#szkolenia",
		color: "#977F6D",
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
		src: "Dewwwelopment-oferta-projektowa.jpg",
		path: "/oferta/#wsparcie-techniczne",
		color: "#977F6D",
	},
];
