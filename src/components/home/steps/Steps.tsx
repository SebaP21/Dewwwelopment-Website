import One from "../../../assets/icons/one (1).svg";
import Two from "../../../assets/icons/two (1).svg";
import Three from "../../../assets/icons/three (1).svg";
import Four from "../../../assets/icons/four (1).svg";
import Five from "../../../assets/icons/five (1).svg";
import Six from "../../../assets/icons/six-1.svg";
import { StepCard, StepsCardProps } from "./Stepscard/StepsCard";

const Steps = () => {
	return (
		<>
			<section
				className='w-full flex justify-center py-10'
				id='steps'
			>
				<div className='w-[90%] grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 xl:max-w-[1200px]'>
					{stepsCardsData.map((data, index) => (
						<StepCard
							key={index}
							img={data.img}
							title={data.title}
							description={data.description}
							isLast={index === stepsCardsData.length - 1}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default Steps;

const stepsCardsData: StepsCardProps[] = [
	{
		img: One,
		title: "Skontaktuj się z nami",
		description:
			"Wystarczy, że zadzwonisz, wyślesz nam e-mail lub wypełnisz formularz kontaktowy na naszej stronie internetowej. Odpowiemy na Twoje zgłoszenie tak szybko, jak to możliwe!",
	},
	{
		img: Two,
		title: "Jak możemy Ci pomóc?",
		description:
			"W trakcie naszej rozmowy lub spotkania skupimy się na Twoich potrzebach i celach. Opowiedz nam o tym, jakiej strony potrzebujesz i czego oczekujesz. Wspólnie postaramy się znaleźć najlepsze rozwiązanie.",
	},
	{
		img: Three,
		title: "Projektowanie i tworzenie prototypu",
		description:
			"Na podstawie zebranych informacji stworzymy dla Ciebie wizualizację projektu. Dzięki temu zobaczysz, jak będzie wyglądała Twoja strona. Możemy również przygotować prototyp, który przedstawi Ci jak będzie działać.",
	},
	{
		img: Four,
		title: "Pozwól nam się tym zająć",
		description:
			"Nie martw się technicznymi aspektami! Dewwwelopment zajmie się tworzeniem strony internetowej od podstaw. Zbudujemy strukturę strony, dodamy funkcje i treści, a także zadbamy o wszystkie techniczne detale.",
	},
	{
		img: Five,
		title: "Testowanie i optymalizacja",
		description:
			"Przed publikacją strony przeprowadzamy jej dokładne testowanie. Sprawdzamy, czy wszystko działa sprawnie i bezproblemowo. Jeśli pojawią się jakiekolwiek błędy lub niedoskonałości, zajmiemy się nimi i dostosujemy stronę tak, aby była dopracowana.",
	},
	{
		img: Six,
		title: "Gotowa strona w Twoich rękach",
		description:
			"Nie musisz się martwić o techniczne aspekty wdrażania. Zajmiemy się przeniesieniem strony na odpowiedni serwer hostingowy i wszystkimi innymi krokami, aby Twoja strona była dostępna online. To wszystko !",
	},
];
