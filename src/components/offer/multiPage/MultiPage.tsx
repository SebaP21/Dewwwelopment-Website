import Divider from "@/components/global/Divider/Divider";
import Image from "next/image";

import MultiPageImage from "../../../assets/videos/Ola-Tomasiewicz-rozbudowana-strona-gif.gif";

const MultiPage = () => {
	return (
		<section className='w-full flex justify-center items-center scroll-mt-[8svh]' id="rozbudowana-strona">
			<article className='w-[90%] flex flex-col gap-10 py-8'>
				<div className='w-full grid grid-cols-1 '>
					<div className=' w-full flex flex-col gap-10 '>
						<div className='flex items-center justify-between'>
							<div className='w-[20%]'>
								<Divider
									width={100}
									color={"main"}
								/>
							</div>
							<div className=''>
								<h5 className='text-break font-bold uppercase '>
									do 6 podstron
								</h5>
							</div>
						</div>
						<h2 className='text-center text-2xl font-semibold'>
							Rozbudowana strona internetowa
						</h2>
						<p className='text-center'>
							Alternatywa dla małych i średnich firm, które potrzebują większej
							przestrzeni do prezentacji swojej działalności, oferty, portfolio
							czy referencji. Doskonały sposób na przedstawienie szerokiej gamy
							treści w sposób przejrzysty i zorganizowany, zapewniający
							efektywną komunikację z odwiedzającymi.
						</p>
					</div>
					<div className='w-full flex justify-center ml-2 mt-6'>
						<div className='w-[90%] bg-main '>
							<div className='w-full mt-4 -ml-4 -mb-4 shadow-2xl'>
								<Image
									src={MultiPageImage}
									alt={"Dewwwelopment-rozbudowana-strona-oferta"}
									className=''
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='w-full flex flex-col justify-center items-center gap-2 pt-4'>
					<h6 className='text-break'>od 3500zł netto</h6>
					<div className='w-[40%]'>
						<Divider
							width={100}
							color={"main"}
						/>
					</div>
				</div>
				<div className='w-full grid grid-cols-1 gap-10'>
					<div className='w-full flex flex-col gap-2 '>
						<h3 className='text-lg font-semibold '>
							Więcej miejsca na unikalne treści
						</h3>
						<p>
							Zawartość strony podzielona jest na kilka tematycznych podstron, a
							każda z nich może mieć swój unikalny wygląd, dostosowany do
							przedstawianych na niej informacji. Umożliwia to wyróżnienie
							najważniejszych treści, takich jak oferta usług, zespół,
							referencje czy kontakt.
						</p>
						<p>
							Dzięki rozbudowanej strukturze podstron, użytkownicy mogą łatwo
							przechodzić między poszczególnymi sekcjami, uzyskując pełniejszy
							obraz i zgłębiając szczegóły.
						</p>
					</div>
				</div>
			</article>
		</section>
	);
};

export default MultiPage;
