import Divider from "@/components/global/Divider/Divider";
import Image from "next/image";

import one from "../../../assets/icons/famous (1).svg";
import two from "../../../assets/icons/lecture (1).svg";
import three from "../../../assets/icons/programmer-1.svg";
import four from "../../../assets/icons/corporate-culture-2.svg";

const Training = () => {
	return (
		<section className='w-full flex justify-center items-center scroll-mt-[8svh]' id="szkolenia">
			<article className='w-[90%] flex flex-col gap-10 py-8'>
				<div className='w-full grid grid-cols-1 '>
					<div className=' w-full flex flex-col gap-10 '>
						<div className='flex flex-col gap-4 items-center justify-center'>
							<div className='w-[25%] pb-6'>
								<Divider
									width={100}
									color={"main"}
								/>
							</div>
							<div className=''>
								<h5 className='text-break font-bold uppercase text-md'>
									sprawdź swoją więdzę
								</h5>
							</div>
						</div>
						<h2 className='text-center text-5xl font-semibold uppercase'>
							Szkolenia
						</h2>
						<p className='text-center'>
							Szkolenie z zakresu obsługi strony, które oferuje Dewwwelopment,
							to doskonała okazja dla klientów, którzy chcą nauczyć się
							zarządzać i aktualizować swoje strony internetowe samodzielnie.
							Nasze szkolenie zapewnia praktyczne i szczegółowe wprowadzenie do
							obsługi strony, umożliwiając klientom pełną kontrolę nad ich
							online’ową obecnością.
						</p>
					</div>
					<div className='w-full flex justify-center ml-2 mt-6'>
						<div className='w-[90%] bg-main '></div>
					</div>
				</div>

				<div className='w-full grid grid-cols-1 gap-10'>
					<div className='w-full grid grid-cols-1 gap-8 '>
						<div className='flex flex-col gap-6 justify-center items-center'>
							<div className='w-[100px]'>
								<Image
									src={one}
									alt={""}
								/>
							</div>
							<Divider
								width={30}
								color={"main"}
							/>
						</div>
						<div className='flex flex-col gap-2 text-center'>
							<h3 className='text-lg font-semibold'>Indywidualne podejście</h3>
							<p>
								Szkolenie jest dostosowane do potrzeb i umiejętności
								uczestników. Rozumiemy, że każdy klient może mieć inną wiedzę
								techniczną, dlatego dostosowujemy tempo i treść szkolenia, aby
								zapewnić optymalne zrozumienie i przyswojenie materiału.
							</p>
						</div>
					</div>
					<div className='w-full grid grid-cols-1 gap-8 '>
						<div className='flex flex-col gap-6 justify-center items-center'>
							<div className='w-[100px]'>
								<Image
									src={two}
									alt={""}
								/>
							</div>
							<Divider
								width={30}
								color={"main"}
							/>
						</div>
						<div className='flex flex-col gap-2 text-center'>
							<h3 className='text-lg font-semibold'>
								Omówienie głównych funkcji
							</h3>
							<p>
								Podczas szkolenia omawiamy główne funkcje systemu zarządzania
								treścią, który jest używany do tworzenia strony klienta.
								Wyjaśniamy, jak dodawać nowe treści, tworzyć menu nawigacyjne,
								zarządzać formularzami kontaktowymi, aktualizować dane
								kontaktowe i wiele więcej.
							</p>
						</div>
					</div>
					<div className='w-full grid grid-cols-1 gap-8 '>
						<div className='flex flex-col gap-6 justify-center items-center'>
							<div className='w-[100px]'>
								<Image
									src={three}
									alt={""}
								/>
							</div>
							<Divider
								width={30}
								color={"main"}
							/>
						</div>
						<div className='flex flex-col gap-2 text-center'>
							<h3 className='text-lg font-semibold'>Praktyczne ćwiczenia</h3>
							<p>
								W trakcie szkolenia oferujemy praktyczne ćwiczenia, które
								pozwalają uczestnikom zdobyć praktyczne umiejętności w obszarze
								zarządzania stroną. Uczestnicy mają możliwość bezpośrednio
								pracować na swojej stronie i nauczyć się, jak aktualizować
								treści, dodawać nowe sekcje, zarządzać obrazami i innymi
								elementami.
							</p>
						</div>
					</div>
					<div className='w-full grid grid-cols-1 gap-8 '>
						<div className='flex flex-col gap-6 justify-center items-center'>
							<div className='w-[100px]'>
								<Image
									src={four}
									alt={""}
								/>
							</div>
							<Divider
								width={30}
								color={"main"}
							/>
						</div>
						<div className='flex flex-col gap-2 text-center'>
							<h3 className='text-lg font-semibold'>
								Bezpieczeństwo i optymalizacja
							</h3>
							<p>
								Podczas szkolenia nie tylko uczymy obsługi strony, ale również
								zapewniamy wskazówki dotyczące bezpieczeństwa i optymalizacji.
								Wyjaśniamy, jak dbać o bezpieczeństwo strony, jak regularnie
								tworzyć kopie zapasowe danych oraz jak optymalizować stronę pod
								kątem szybkości ładowania i SEO.
							</p>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Training;
