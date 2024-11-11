import Divider from "@/components/global/Divider/Divider";
import Image from "next/image";

import eCommerceImage from "../../../assets/img/Dewwwelopment-sklep-intenetowy.jpg";

const ECommerce = () => {
	return (
		<section className='w-full flex justify-center items-center'>
			<article className='w-[90%] flex flex-col gap-8 py-8'>
				<div className='w-full grid grid-cols-1 '>
					<div className=' w-full flex flex-col gap-8 '>
						<div className='flex items-center justify-between'>
							<div className='w-[25%]'>
								<Divider
									width={100}
									color={"main"}
								/>
							</div>
							<div className=''>
								<h5 className='text-break font-bold uppercase '>
									sprzedawaj w sieci
								</h5>
							</div>
						</div>
						<h2 className='text-center text-2xl font-semibold'>
							Sklepy internetowe
						</h2>
						<p className='text-center'>
							Kompleksowe rozwiązanie dla przedsiębiorców, którzy chcą prowadzić
							sprzedaż swoich produktów lub usług w sieci. Możesz rozwinąć swój
							biznes online, dotrzeć do szerszego grona klientów i prowadzić
							sprzedaż w efektywny i wygodny sposób.
						</p>
					</div>
					<div className='w-full flex justify-center ml-2 mt-6'>
						<div className='w-[90%] bg-main '>
							<div className='w-full mt-4 -ml-4 -mb-4 shadow-2xl'>
								<Image
									src={eCommerceImage}
									alt={"Dewwwelopment-rozbudowana-strona-oferta"}
									className=''
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='w-full flex flex-col justify-center items-center gap-2 pt-4'>
					<h6 className='text-break'>od 5000zł netto</h6>
					<div className='w-[40%]'>
						<Divider
							width={100}
							color={"main"}
						/>
					</div>
				</div>
				<div className='w-full grid grid-cols-1 gap-6'>
					<div className='w-full flex flex-col gap-2 '>
						<h3 className='text-lg font-semibold '>
							Pełna funkcjonalność e-commerce
						</h3>
						<p>
							Nasz sklep internetowy oferuje pełną funkcjonalność e-commerce,
							dzięki integracji z takimi platformami jak WooCommerce czy
							PrestaShop. Możesz łatwo dodawać, edytować i zarządzać swoimi
							produktami, kategoriami, zamówieniami, płatnościami i innymi
							aspektami sprzedaży online.
						</p>
					</div>
					<div className='w-full flex flex-col gap-2 '>
						<h3 className='text-lg font-semibold '>Bezpieczne płatności</h3>
						<p>
							Zapewniamy integrację z bezpiecznymi i popularnymi systemami
							płatności online, co umożliwia Twoim klientom dokonywanie
							płatności w sposób wygodny i bezpieczny. Wspieramy różne metody
							płatności, takie jak karty kredytowe, przelewy bankowe, portfele
							elektroniczne i inne.
						</p>
					</div>
					<div className='w-full flex flex-col gap-2 '>
						<h3 className='text-lg font-semibold '>
							Personalizacja i konfigurowalność
						</h3>
						<p>
							Możliwość personalizacji i konfigurowania różnych aspektów wyglądu
							i funkcjonalności. Możesz dostosować kolorystykę, układ strony,
							dodawać banery promocyjne, tworzyć zniżki i wiele więcej, aby
							dopasować sklep do swojej marki.
						</p>
					</div>
					<div className='w-full flex flex-col gap-2 '>
						<h3 className='text-lg font-semibold '>
							Analiza danych i raportowanie
						</h3>
						<p>
							Zastosowanie narzędzi analitycznych takich jak Google Search
							Console, czy Google Analytics umożliwia monitorowanie danych
							sprzedażowych, analizowanie zachowań klientów i generowanie
							raportów, co pozwala Ci lepiej zrozumieć zachowania odwiedzających
							i podejmować trafne decyzje biznesowe.
						</p>
					</div>
				</div>
			</article>
		</section>
	);
};

export default ECommerce;