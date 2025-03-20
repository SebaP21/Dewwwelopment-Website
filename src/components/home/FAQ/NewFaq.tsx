"use client";

// import { Schedule } from "@/components/Animations/HeaderTest/HeaderTest";
import { motion } from "framer-motion";
// import { div, section } from "framer-motion/client";
import React, { useState } from "react";

const NewFaq = () => {
	const [expandedItemId, setExpandedItemId] = useState<number | undefined>();

	const handleExpand = (index: number) => {
		setExpandedItemId((prev) => (prev === index ? undefined : index));
	};
	return (
		<section
			id='faq'
			className='bg-black '
		>
			<div className='mx-auto max-w-5xl px-4 py-48 text-white'>
				<motion.h1
					initial={{ y: 48, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ ease: "easeInOut", duration: 0.75 }}
					className='mb-20 text-4xl font-black uppercase text-zinc-50'
				>
					FAQ
				</motion.h1>
				{faqItemData.map((data, index) => (
					<motion.div
						initial={{ y: 48, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ ease: "easeInOut", duration: 0.75 }}
						className='mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9 cursor-pointer'
						key={index}
						onClick={() => handleExpand(index)}
					>
						<div>
							<p
								className={`text-xl mb-4 ${
									expandedItemId === index ? "text-accent" : "text-zinc-50"
								}`}
							>
								{data.question}
							</p>
							<p
								className={`overflow-hidden text-zinc-500 transition-all duration-500 ease-in-out  ${
									expandedItemId === index
										? "max-h-[1000px] opacity-100"
										: "max-h-0 opacity-0"
								}`}
							>
								{data.answer}
							</p>
						</div>
						<div className='flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500'>
							<p>+</p>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default NewFaq;

type SingleFaqItemData = {
	answer: string;
	question: string;
};

// const FaqItem = () => {
// 	return (
// 		<motion.div
// 			initial={{ y: 48, opacity: 0 }}
// 			whileInView={{ y: 0, opacity: 1 }}
// 			transition={{ ease: "easeInOut", duration: 0.75 }}
// 			className='mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9'
// 		>
// 			<div>
// 				<p className='mb-1.5 text-xl text-zinc-50'>{title}</p>
// 				<p className='text-sm uppercase text-zinc-500'>{date}</p>
// 			</div>
// 			<div className='flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500'>
// 				<p>+</p>
// 			</div>
// 		</motion.div>
// 	);
// };

const faqItemData: SingleFaqItemData[] = [
	{
		question: "Jak długo trwa proces tworzenia strony internetowej?",
		answer:
			"Czas tworzenia strony internetowej zależy od wielu czynników takich jak rozmiar projektu," +
			" zakres funkcjonalności i dostarczenie treści przez klienta" +
			"dla stron wizytówek typu One Page czas realizacji to zwykle od 3-5 dni," +
			"rozbudowana strona internetowa (do 5 podstron) od 5-7 dni," +
			"sklep internetowy-od 7-10 dni" +
			"projekty indywidualne -w zależności od zaawansowania projektu",
	},
	{
		question: "Czy mogę rozszerzyć swoją stronę w przyszłości?",
		answer:
			"Oczywiście! Nasze strony i sklepy internetowe mogą być łatwo rozbudowane o dodatkowe podstrony i funkcje w przyszłości," +
			"w zależności od Twoich potrzeb.",
	},
	{
		question: "Czy mogę samodzielnie zarządzać treściami na stronie?",
		answer:
			"Tak, w ramach ceny projektu zapewniamy 1h szkolenia online z obsługi Twojej strony, które umożliwi Ci samodzielne zarządzanie treściami, aktualizowanie zdjęć, dodawanie nowych sekcji i innych podstawowych czynności związanych z utrzymaniem strony w pełnej kondycji." +
			"Jeżeli jednak nie czujesz się na siłach możemy również zapewnić usługę zarządzania stroną po indywidualnym uzgodnieniu.",
	},
	{
		question: "Czy oferujecie wsparcie techniczne po zakończeniu projektu?",
		answer:
			"Tak, zapewniamy 12 miesięcy gwarancji na nasze projekty i oferujemy wsparcie techniczne po zakończeniu projektu." +
			"Jesteśmy gotowi pomóc w razie jakichkolwiek problemów lub pytań dotyczących Twojej strony",
	},
	{
		question: "Czy projekt strony będzie dostosowany do różnych urządzeń?",
		answer:
			"Tak, wszystkie nasze projekty są responsywne, co oznacza, że strona będzie odpowiednio wyglądać i działać na różnych urządzeniach, takich jak komputery, telefony komórkowe i tablety.",
	},
	{
		question: "Co jest zawarte w cenie strony /sklepu internetowego?",
		answer:
			"W pełni gotowa strona lub sklep internetowy." +
			"Hosting przez pierwszy rok w cenie." +
			"Niezależnie od tego jak zaawansowany projekt u Nas zamawiasz, chcemy uczynić proces tworzenia strony internetowej jak najbardziej wygodnym dla naszych klientów, dlatego opłata za hosting przez pierwszy rok jest wliczona w cenę. Nie musisz się martwić o poszukiwanie osobnego hostingu – my zajmiemy się tym za Ciebie." +
			"1h szkolenia online z zakresu obsługi strony. W Dewwwelopment nie zostawiamy Cię samego z filmikiem instruktażowym z serii “zrób to sam”. Zależy nam, żeby każdy klient mógł nauczyć się jak w pełni korzystać ze swojej własnej strony lub sklepu internetowego. Organizujemy godzinne, praktyczne szkolenie w formie spotkania online z zakresu aktualizacji treści, czy optymalizacji witryny dla codziennego użytku." +
			"Gwarancja 12 miesięcy. Jesteśmy pewni jakości naszych projektów, dlatego oferujemy 12-miesięczną gwarancję na wszystkie nasze realizacje. Jeśli wystąpią jakiekolwiek problemy związane z naszymi usługami, jesteśmy gotowi zapewnić wsparcie i rozwiązać je w ramach gwarancji.",
	},
];
