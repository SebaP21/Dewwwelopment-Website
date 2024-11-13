import Divider from "@/components/global/Divider/Divider";
import Image from "next/image";

import phoneIcon from "../../../assets/icons/telephone (1).png";
import Link from "next/link";

const Support = () => {
	return (
		<section
			className='w-full flex justify-center items-center scroll-mt-[8svh]'
			id='wsparcie-techniczne'
		>
			<article className='w-[90%] flex flex-col gap-10 py-8 sm:w-[80%] lg:w-[80%] lg:py-12 xl:max-w-[1000px]'>
				<div className='w-full grid grid-cols-1 '>
					<div className=' w-full flex flex-col gap-10 '>
						<div className='flex gap-4 items-center justify-between'>
							<div className=''>
								<h5 className='text-break font-bold uppercase text-md'>
									potrzebujesz pomocy?
								</h5>
							</div>
							<Link href={"tel:661924740"}>
								<div className='w-[70px] border-[2px] border-main rounded-full p-4'>
									<Image
										src={phoneIcon}
										alt={"support-icon"}
									/>
								</div>
							</Link>
						</div>
						<h2 className=' text-5xl font-semibold uppercase'>
							Wsparcie techniczne
						</h2>
						<div className='w-[20%]'>
							<Divider
								width={100}
								color={"main"}
							/>
						</div>
						<p className='w-full lg:w-[70%]'>
							Niezależnie od tego, czy jesteś nowym właścicielem strony
							internetowej czy już ją posiadasz, oferujemy kompleksową pomoc.
							Zaufaj nam, a my zadbamy o Twoją platformę, pozwalając Ci skupić
							się na rozwoju swojego biznesu.
						</p>
					</div>
					<div className='w-full flex justify-center ml-2 mt-6'>
						<div className='w-[90%] bg-main '></div>
					</div>
				</div>

				<div className='w-full grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-2 xl:gap-4'>
					<div className='w-full flex flex-col gap-2 border-[2px] border-main p-6  rounded-sm shadow-lg lg:p-4 lg:gap-4'>
						<h3 className='text-lg text-center font-semibold'>
							Wsparcie dla nowych stron i sklepów
						</h3>
						<div className='w-full flex justify-center'>
							<Divider
								width={20}
								color={"break"}
							/>
						</div>
						<p>
							Jeśli dopiero zaczynasz swoją przygodę z tworzeniem strony
							internetowej lub sklepu internetowego, możemy Ci pomóc. Jesteśmy
							tutaj, aby udzielić Ci porad i wskazówek, jak poprowadzić swoją
							stronę od podstaw. Pomagamy w wyborze odpowiednich narzędzi,
							optymalizacji treści i dostosowaniu struktury witryny do Twoich
							potrzeb.
						</p>
					</div>
					<div className='w-full flex flex-col gap-4 border-[2px] border-main p-6  rounded-sm shadow-lg lg:p-4 '>
						<h3 className='text-lg text-center font-semibold'>
							Rozwiązywanie problemów
						</h3>
						<div className='w-full flex justify-center'>
							<Divider
								width={20}
								color={"break"}
							/>
						</div>
						<p>
							Jeżeli masz już swoją stronę lub sklep internetowy, ale napotykasz
							problemy techniczne, nie martw się – mamy rozwiązania. Posiadamy
							wiedzę i doświadczenie w rozwiązywaniu różnorodnych problemów,
							takich jak błędy w kodzie, konflikty pluginów, problem z
							wydajnością czy kwestie związane z integracją z innymi
							narzędziami. Daj nam znać, a my zajmiemy się tym natychmiast.
						</p>
					</div>
					<div className='w-full flex flex-col gap-4 border-[2px] border-main p-6  rounded-sm shadow-lg lg:p-4 '>
						<h3 className='text-lg font-semibold text-center'>
							Aktualizacje i optymalizacja
						</h3>
						<div className='w-full flex justify-center'>
							<Divider
								width={20}
								color={"break"}
							/>
						</div>
						<p>
							Wspieramy również istniejące strony i sklepy internetowe poprzez
							regularne aktualizacje i optymalizację. Dbamy o to, aby Twoja
							strona działała zgodnie z najnowszymi standardami i miała
							optymalną wydajność. Aktualizujemy oprogramowanie, pluginy i
							motywy, a także optymalizujemy treści pod kątem SEO, aby Twoja
							strona była widoczna i dobrze pozycjonowana w wyszukiwarkach.
						</p>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Support;
